'use server';
import { readdir, readFile, stat } from "fs/promises";
import path from "path";
import YAML from "yaml";
import { assertServerOnly, PROJECTS_DIR } from "@/lib/content/fs";
import type { ContentImageRef, ProjectContent } from "@/lib/content/types";

type ProjectYaml = {
  slug?: string;
  title?: string;
  shortDescription?: string;
  description?: string;
  tags?: string[];
  links?: Record<string, string>;
  coverImage?: string;
  gallery?: string[];
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
  return { kind: "content-file", url: value };
}

function toImageRefs(values: unknown): ContentImageRef[] | undefined {
  if (!Array.isArray(values)) return undefined;
  const refs = values
    .map((v) => toImageRef(v))
    .filter(Boolean) as ContentImageRef[];
  return refs.length ? refs : undefined;
}

async function listAssetFiles(projectDir: string) {
  const entries = await readdir(projectDir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) continue;
    const name = entry.name;
    if (
      name.toLowerCase() === "project.yml" ||
      name.toLowerCase() === "project.yaml"
    )
      continue;
    files.push(name);
  }

  files.sort((a, b) => a.localeCompare(b));
  return files;
}

export async function getAllProjects(): Promise<ProjectContent[]> {
  assertServerOnly();

  const entries = await readdir(PROJECTS_DIR, { withFileTypes: true });
  const dirs = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  const projects: ProjectContent[] = [];

  for (const dirName of dirs) {
    const absDir = path.join(PROJECTS_DIR, dirName);
    const ymlPath = path.join(absDir, "project.yml");
    const yamlPath = path.join(absDir, "project.yaml");

    const ymlExists = await stat(ymlPath)
      .then(() => true)
      .catch(() => false);
    const yamlExists =
      !ymlExists &&
      (await stat(yamlPath)
        .then(() => true)
        .catch(() => false));

    if (!ymlExists && !yamlExists) continue;

    const configPath = ymlExists ? ymlPath : yamlPath;
    const raw = await readFile(configPath, "utf8");
    const parsed = YAML.parse(raw) as ProjectYaml;

    const slug = (parsed.slug || dirName).toString();
    const title = (parsed.title || slug).toString();

    const assetFiles = await listAssetFiles(absDir);

    const toPublicUrl = (rel: string) =>
      `/content/projects/${encodeURIComponent(slug)}/${rel}`;
    const cover = toImageRef(parsed.coverImage);
    const gallery = toImageRefs(parsed.gallery);

    projects.push({
      slug,
      title,
      shortDescription: parsed.shortDescription,
      description: parsed.description,
      tags: parsed.tags,
      links: parsed.links,
      coverImage:
        cover?.kind === "content-file"
          ? { kind: "url", url: toPublicUrl(cover.url) }
          : cover,
      gallery: gallery?.map((img) =>
        img.kind === "content-file"
          ? { kind: "url", url: toPublicUrl(img.url) }
          : img,
      ),
      assetFiles,
      _absoluteDir: absDir,
    });
  }

  projects.sort((a, b) => a.title.localeCompare(b.title));
  return projects;
}

export async function getProjectBySlug(
  slug: string,
): Promise<ProjectContent | null> {
  const all = await getAllProjects();
  return all.find((p) => p.slug === slug) ?? null;
}
