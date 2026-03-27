import React from "react";
import DocRenderer from "@/app/components/DocRenderer";
import { getExampleArticle, getAllArticles } from "@/lib/content";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const articleSlugs = (await getAllArticles()).map((article) => article.slug);
  
  return articleSlugs.map((slug) => ({
    article: slug,
  }));
}

export default async function Article({
  params,
}: {
  params: Promise<{ article: string }>;
}) {
  const { article: slug } = await params;
  const articleContent = (await getExampleArticle(slug)).body;
  return (
    <DocRenderer html={articleContent} />
  );
}
