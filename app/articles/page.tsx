import React from "react";
import ArticleItem from "../components/ArticleItem";
import { ArticleContent, getAllArticles } from "@/lib/content";

export const dynamic = "force-static";
export const revalidate = false;

export default async function ArticlesPage() {
  try {
    const articles: ArticleContent[] = await getAllArticles();
    return (
      <section>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-primary text-center pt-10 z-11">
          NOS ARTICLES
        </h1>
        <div className="relative flex flex-col gap-6 max-w-7xl m-auto py-20 align-center">
          {articles.map((article, i) => (
            <ArticleItem
              key={article.slug}
              title={article.title}
              description={article.description || ""}
              slug={article.slug}
              imageSrc={article.coverImage && article.coverImage?.url}
              inverse={i % 2 === 0}
            />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching articles:", error);
    return (
      <div className="text-center text-red-500">Failed to load articles.</div>
    );
  }
}
