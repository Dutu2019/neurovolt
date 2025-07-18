import HeroSection from "@/app/components/HeroSection";
import Card from "@/app/components/Card";

export default function page() {
  return (
    <>
      <HeroSection />
      {/* The three links */}
      <section className="w-full min-h-200 bg-[url(/index/mri.jpeg)] bg-cover">
        <div className="relative py-40 grid grid-cols-1 lg:grid-cols-3 gap-7 align-center">
          <Card
            text="NOS VALEURS"
            bgImageClasses="rotate-90"
            className="bg-primary text-primary-content"
          />
          <Card
            text="SYMPOSIUM"
            bgImageClasses="rotate-45 -translate-y-1/2"
            className="bg-primary text-primary-content"
          />
          <Card
            text="JOINDRE L'ÉQUIPE"
            bgImageClasses="rotate-135"
            className="bg-primary text-primary-content"
          />
        </div>
      </section>
    </>
  );
}
