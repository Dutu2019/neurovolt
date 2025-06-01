import HeroSection from "@/app/components/HeroSection";

export default function page() {
  return (
    <>
      <HeroSection />
      {/* The three links */}
      <section className="w-full h-200 bg-[url(/index/mri.jpeg)] bg-cover">
        <div className="relative py-40 grid grid-cols-1 md:grid-cols-3 gap-7 align-center">
          <div>Nos valeurs</div>
          <div>Symposium</div>
          <div>Joindre l'equipe</div>
        </div>
      </section>
    </>
  );
}
