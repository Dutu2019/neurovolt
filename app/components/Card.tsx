import React from "react";
import Image from "next/image";

interface cardProps {
  text: string;
  bgImageLink?: string;
  bgImageClasses?: string;
  className?: string;
}

export default function Card({
  text,
  bgImageLink,
  bgImageClasses,
  className,
}: cardProps) {
  return (
    <div
      className={`relative w-100 h-100 rounded-t-3xl rounded-b-md m-auto contain-content text-center ${
        className || "bg-primary"
      }`}
    >
      <h1 className="w-fit m-auto pt-[25%] text-5xl font-[800]">{text}</h1>
      <button className="block py-3 px-[30%] border-1 rounded-2xl mt-[20%] mx-auto font-semibold underline text-xl hover:bg-primary-content hover:text-primary transition-all duration-100">
        En savoir plus
      </button>
      <Image
        src={bgImageLink || "index/neuron-deco.svg"}
        alt="neuron"
        width={250}
        height={250}
        className={`absolute opacity-10 -translate-y-1/3 translate-x-5 ${bgImageClasses}`}
      />
    </div>
  );
}
