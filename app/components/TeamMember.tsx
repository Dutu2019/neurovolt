import Image from "next/image";

interface TeamMemberProps {
  name: string;
  position: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const shieldMaskStyle = {
  maskImage: "url('/icons/shield.svg')",
  maskSize: "contain",
  maskRepeat: "no-repeat" as const,
  maskPosition: "center",
  WebkitMaskImage: "url('/icons/shield.svg')",
  WebkitMaskSize: "contain",
  WebkitMaskRepeat: "no-repeat" as const,
  WebkitMaskPosition: "center",
};

export default function TeamMember({
  name,
  position,
  description,
  imageSrc,
  imageAlt,
}: TeamMemberProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
      <div
        className="shrink-0 w-36 h-36 md:w-60 md:h-60 overflow-hidden"
        style={shieldMaskStyle}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-primary font-bold text-lg md:text-xl uppercase tracking-wide">
            {name}
          </h3>
          <p className="text-base-content/80 text-sm md:text-base mt-1">
            {position}
          </p>
        </div>
        <p className="text-base-content/70 text-sm md:text-base mt-3 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
