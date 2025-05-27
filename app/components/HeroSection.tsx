import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#7B2634] text-white relative">
      {/* Top Logo and Title */}
      <div className="pt-10 pb-6 text-center bg-white text-black">
        <h1 className="text-7xl md:text-8xl font-serif font-bold leading-snug">
          NeuroVolts
        </h1>
        <p className="mt-2 mb-30 text-3xl font-[Times] w-70 m-auto">
          Équipe de recherche interdisciplinaire
        </p>
      </div>

      {/* Brain image */}
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <Image
          src="/index/brain.png" // make sure this is in your public/images folder
          alt="Brain"
          width={450}
          height={450}
          className="drop-shadow-lg"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-40 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Left column - quote and background neuron */}
        <div className="relative">
          {/* Background neuron image */}
          <Image
            src="/index/neuron-deco.svg" // optional decorative neuron
            alt="Neuron Deco"
            width={300}
            height={300}
            className="absolute left-0 top-0 fill-white opacity-20 z-0 rotate-90 scale-150"
          />

          <blockquote className="relative z-10 text-3xl md:text-4xl font-bold leading-tight">
            To know our brain is to know ourselves
          </blockquote>
        </div>

        {/* Right column - text and button */}
        <div className="text-xl space-y-4 font-[500]">
          <p>
            The Montreal Neurological Institute–Hospital<sup>[1]</sup> (MNI),
            also known as Montreal Neuro or The Neuro, is a research and medical
            centre dedicated to{" "}
            <a className="underline text-blue-200 hover:text-blue-300">
              neuroscience
            </a>
            , training and clinical care, located in the city’s{" "}
            <a className="underline text-blue-200 hover:text-blue-300">
              downtown core
            </a>{" "}
            of{" "}
            <a className="underline text-blue-200 hover:text-blue-300">
              Montreal, Quebec, Canada
            </a>
            .
          </p>
          <p>
            It is part of <em>the McGill University Health Centre</em> network
            and is situated on the southern slope of{" "}
            <a className="underline text-blue-200 hover:text-blue-300">
              Mount Royal
            </a>{" "}
            along the east side of University Street, just north of Pine Avenue.
          </p>
          <p>
            It was founded in 1934 by neurosurgeon{" "}
            <a className="underline text-blue-200 hover:text-blue-300">
              Wilder Penfield
            </a>
            , who developed the Montreal procedure there for the treatment of
            epilepsy.
          </p>

          <Link href="/more">
            <button className="mt-4 px-5 py-2 border border-white rounded-md text-white hover:bg-white hover:text-[#7B2634] transition">
              En savoir plus
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
