"use client";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center">

      <div
        className="relative w-[400px] h-[400px] border-8 border-green-500"
        style={{
          backgroundColor: "red",
        }}
      >
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

        <p className="relative z-10 text-white text-4xl">BOX TEST</p>
      </div>

    </section>
  );
}