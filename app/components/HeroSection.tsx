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
      <div className="max-w-7xl mx-auto px-6 py-40 grid grid-cols-1 md:grid-cols-2 gap-12 relative place-items-center">
        {/* Left column - quote and background neuron */}
        <div className="relative">
          {/* Background neuron image */}
          <Image
            src="/index/neuron-deco.svg"
            alt="Neuron Deco"
            width={300}
            height={300}
            className="hidden md:block absolute fill-white opacity-15 z-0 rotate-90 scale-150 translate-x-20"
          />

          <blockquote className="relative font-[Times] z-10 text-7xl font-bold leading-tight">
            To know our <br/>brain is to know ourselves
          </blockquote>
        </div>

        {/* Right column - text and button */}
        <div className="text-xl/9 font-medium text-justify">
          <p>
            The Montreal Neurological Institute-Hospital<sup>[1]</sup> (MNI),
            also known as Montreal Neuro or The Neuro, is a research and medical
            centre dedicated to neuroscience, training and clinical care,
            located in the city's downtown core of Montreal, Quebec, Canada. It
            is part of <em>the McGill University Health Centre</em> network and
            is situated on the southern slope of Mount Royal along the east side
            of University Street, just north of Pine Avenue. It was founded in
            1934 by neurosurgeon Wilder Penfield, who developed the Montreal
            procedure there for the treatment of epilepsy.
          </p>

          <Link href="/about-us">
            <button className="mt-4 px-40 py-2 border border-white rounded-2xl text-white hover:bg-white hover:text-[var(--primary)] transition">
              En savoir plus
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
