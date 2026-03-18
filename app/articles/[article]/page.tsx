import React from "react";
import DocRenderer from "@/app/components/DocRenderer";
import { getExampleArticle, getAllArticles } from "@/lib/content";

export const runtime = "edge";
export const dynamic = "force-static";
export const dynamicParams = false; // Essential for Cloudflare SSG

export async function generateStaticParams() {
  const articleSlugs = (await getAllArticles()).map((article) => article.slug);

  return articleSlugs.map((slug) => ({
    slug,
  }));
}

export default async function Article({
  params,
}: {
  params: Promise<{ article: string }>;
}) {
  const { article: slug } = await params;
  const articleContent = (await getExampleArticle(slug)).body; // Replace with getArticleBySlug(slug) when implemented
  return (
    <div className="max-w-7xl m-auto">
      <DocRenderer html={articleContent} />
    </div>
  );
}
