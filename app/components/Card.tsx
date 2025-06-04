import Image from "next/image";

type Text = { text: string };

export default function Card({ text }: Text) {
  return (
    <div
      className={`relative w-100 h-100 bg-primary rounded-t-3xl rounded-b-md m-auto contain-content text-center`}
    >
      <h1 className="w-fit m-auto pt-[25%] text-5xl font-[800]">{text}</h1>
      <button className="block py-3 px-[30%] border-1 rounded-2xl mt-[20%] mx-auto font-semibold underline text-xl">
        En savoir plus
      </button>
      <Image
        src={"/index/neuron-deco.svg"}
        alt="neuron"
        width={250}
        height={250}
        className="absolute opacity-20 rotate-90 -translate-y-1/3 translate-x-5"
      />
    </div>
  );
}
