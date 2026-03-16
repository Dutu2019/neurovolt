import React from "react";
import ArticleItem from "../components/ArticleItem";

export default async function ArticlesPage() {
  return (
    <section>
      <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-primary text-center pt-10 z-11">
        NOS ARTICLES
      </h1>
      <div className="relative flex flex-col gap-6 max-w-7xl m-auto py-20 align-center">
        {[1, 2, 3, 4].map((i) => (
          <ArticleItem
            key={i}
            title={`Sample Article ${i}`}
            description={`This is the description for sample article ${i}.`}
            imageSrc={`content/articles/example-article/red_brain.svg`}
            inverse={i % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
}
