import { readFile, readdir, stat } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { assertServerOnly, ARTICLES_DIR } from "@/lib/content/fs";
import type { ArticleContent, ContentImageRef } from "@/lib/content/types";

type ArticleFrontmatter = {
  title?: string;
  author?: string;
  date?: string;
  description?: string;
  coverImage?: string;
  tags?: string[];
};

function toImageRef(value: unknown): ContentImageRef | undefined {
  if (typeof value !== "string" || !value.trim()) return undefined;
  if (
    value.startsWith("/") ||
    value.startsWith("http://") ||
    value.startsWith("https://")
  ) {
    return { kind: "url", url: value };
  }
  return { kind: "content-file", relativePath: value };
}

function slugFromFilename(filename: string) {
  return filename.replace(/\.mdx?$/i, "");
}

export async function getAllArticles(): Promise<ArticleContent[]> {
  assertServerOnly();

  const entries = await readdir(ARTICLES_DIR, { withFileTypes: true });
  const fileEntries = entries
    .filter((e) => e.isFile() && /\.mdx?$/i.test(e.name))
    .map((e) => e.name);
  const dirEntries = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  const articles: ArticleContent[] = [];

  // // 1) Support legacy flat files: public/content/articles/<slug>.md
  // for (const fileName of fileEntries) {
  //   const absPath = path.join(ARTICLES_DIR, fileName);
  //   const raw = await readFile(absPath, "utf8");
  //   const { data, content } = matter(raw);
  //   const fm = data as ArticleFrontmatter;
  //   const slug = slugFromFilename(fileName);

  //   const cover = toImageRef(fm.coverImage);
  //   const toPublicUrl = (rel: string) => `/content/articles/${encodeURIComponent(slug)}/${rel}`;

  //   articles.push({
  //     slug,
  //     title: (fm.title || slug).toString(),
  //     author: fm.author,
  //     date: fm.date,
  //     description: fm.description,
  //     tags: fm.tags,
  //     coverImage:
  //       cover?.kind === "content-file" ? { kind: "url", url: toPublicUrl(cover.relativePath) } : cover,
  //     body: content,
  //     _absolutePath: absPath,
  //   });
  // }

  // 2) Folder-based articles: public/content/articles/<slug>/article.md (or index.md)
  for (const dirName of dirEntries) {
    const absDir = path.join(ARTICLES_DIR, dirName);
    const articleMd = path.join(absDir, "article.md");
    const indexMd = path.join(absDir, "index.md");

    const usePath =
      (await stat(articleMd)
        .then(() => articleMd)
        .catch(() => null)) ??
      (await stat(indexMd)
        .then(() => indexMd)
        .catch(() => null));

    if (!usePath) continue;

    const raw = await readFile(usePath, "utf8");
    const { data, content } = matter(raw);
    const fm = data as ArticleFrontmatter;
    const slug = dirName;
    const cover = toImageRef(fm.coverImage);
    const toPublicUrl = (rel: string) =>
      `/content/articles/${encodeURIComponent(slug)}/${rel}`;

    articles.push({
      slug,
      title: (fm.title || slug).toString(),
      author: fm.author,
      date: fm.date,
      description: fm.description,
      tags: fm.tags,
      coverImage:
        cover?.kind === "content-file"
          ? { kind: "url", url: toPublicUrl(cover.relativePath) }
          : cover,
      body: content,
      _absolutePath: usePath,
    });
  }

  // newest first if dates are ISO strings; fallback to title
  articles.sort(
    (a, b) =>
      (b.date || "").localeCompare(a.date || "") ||
      a.title.localeCompare(b.title),
  );
  return articles;
}

export async function getArticleBySlug(
  slug: string,
): Promise<ArticleContent | null> {
  const all = await getAllArticles();
  return all.find((a) => a.slug === slug) ?? null;
}

export async function getExampleArticle(slug: string): Promise<ArticleContent> {
  const examplePath = path.join(ARTICLES_DIR, slug, "article.html");
  const raw = await readFile(examplePath, "utf8");
  return {
    slug,
    title: slug,
    description: "An example article demonstrating the content structure.",
    body: raw,
    _absolutePath: examplePath,
  };
}
