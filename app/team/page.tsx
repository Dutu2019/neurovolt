import Image from "next/image";
import type { Metadata } from "next";
import TeamMember from "@/app/components/TeamMember";

export const metadata: Metadata = {
  title: "L'équipe | NeuroVolts",
  description:
    "L'équipe de recherche NeuroVolts au Collège Jean-de-Brébeuf.",
};

const TEAM_MEMBERS = [
  {
    name: "NOM DE LA PERSONNE",
    position: "Position",
    description:
      "Description blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla.",
    imageSrc: "https://picsum.photos/200/200?random=1",
    imageAlt: "Team member",
  },
  {
    name: "NOM DE LA PERSONNE",
    position: "Position",
    description:
      "Description blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla.",
    imageSrc: "https://picsum.photos/200/200?random=2",
    imageAlt: "Team member",
  },
  {
    name: "NOM DE LA PERSONNE",
    position: "Position",
    description:
      "Description blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla.",
    imageSrc: "https://picsum.photos/200/200?random=3",
    imageAlt: "Team member",
  },
  {
    name: "NOM DE LA PERSONNE",
    position: "Position",
    description:
      "Description blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla.",
    imageSrc: "https://picsum.photos/200/200?random=4",
    imageAlt: "Team member",
  },
  {
    name: "NOM DE LA PERSONNE",
    position: "Position",
    description:
      "Description blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla. blabla blabla.",
    imageSrc: "https://picsum.photos/200/200?random=5",
    imageAlt: "Team member",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative w-full bg-base-100 pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-center">
            L&apos;ÉQUIPE DE RECHERCHE
          </h1>

          <div className="relative mt-10 md:mt-14">

              <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-3xl z-10">
                <Image
                  src="https://picsum.photos/800/480?random=team"
                  alt="Équipe de recherche en laboratoire"
                  width={800}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
          </div>
        </div>
      </section>

      {/* Team members section with subtle pattern background */}
      <section className="relative w-full bg-base-100 py-16 md:py-24 overflow-hidden">
        {/* Decorative neuronal/cellular pattern on the right (same asset as home) */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 max-w-md opacity-[0.07] pointer-events-none hidden lg:block select-none">
          <Image
            src="/index/neuron-deco.svg"
            alt=""
            width={400}
            height={600}
            className="absolute right-0 top-0 h-full w-auto object-cover object-right"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 flex flex-col gap-14 md:gap-16">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              description={member.description}
              imageSrc={member.imageSrc}
              imageAlt={member.imageAlt}
            />
          ))}
        </div>
      </section>
    </>
  );
}
