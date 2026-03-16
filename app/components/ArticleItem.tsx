import React from "react";
import Image from "next/image";

interface articleProps {
  title: string;
  description: string;
  imageSrc: string;
  inverse?: boolean;
  className?: string;
}

/**
 * ArticleHero Component
 * * A visually identical reproduction of the provided UI design.
 * Features a burgundy text card with a double-border effect
 * and a side-aligned image.
 * * @param {string} title - The main heading of the article
 * @param {string} description - The introductory text
 * @param {string} imageSrc - URL for the right-side image
 */
export default function ArticleHero({
  title,
  description,
  imageSrc,
  inverse = false,
  className,
}: articleProps) {
  return (
    <div
      className={`flex flex-col md:flex-row ${inverse && "md:flex-row-reverse"} w-full min-h-[400px] overflow-hidden bg-black font-sans ${className || ""}`}
    >
      {/* Left Content Section */}
      <div className="w-full md:w-1/2 bg-[#702028] p-4 md:p-8 flex items-center justify-center">
        {/* Decorative Outer Border */}
        <div className="border-2 border-white/80 p-1 w-full h-full flex items-center justify-center">
          {/* Inner Content Box */}
          <div className="border-2 border-white/80 w-full h-full p-6 md:p-10 flex flex-col justify-center text-white">
            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-4 uppercase tracking-tight">
              {title}
            </h1>

            <p className="text-sm md:text-base font-light leading-relaxed mb-8 opacity-90 line-clamp-6">
              {description}
            </p>

            <button className="self-start border border-white rounded-full px-12 py-2 text-white hover:bg-white hover:text-[#702028] transition-all duration-300 font-medium">
              Lire la suite
            </button>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
        <Image
          src={imageSrc}
          width={1000}
          height={600}
          alt="Article visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
