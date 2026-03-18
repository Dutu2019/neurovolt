import React from "react";
import DocRenderer from "@/app/components/DocRenderer";
import { getExampleArticle } from "@/lib/content";

export default async function Article({
  params,
}: {
  params: Promise<{ article: string }>;
}) {
  const { article: slug } = await params;
  console.log(slug);
  const articleContent = (await getExampleArticle(slug)).body; // Replace with getArticleBySlug(slug) when implemented
  return (
    <div className="max-w-7xl m-auto">
      <DocRenderer html={articleContent} />
    </div>
  );
}
