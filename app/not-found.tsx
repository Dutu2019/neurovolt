"use client";

export default function NotFound() {
  return (
    <section className="relative h-screen w-full bg-(--primary) contain-content">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          404 - Page Not Found
        </h1>
      </div>
    </section>
  );
}
