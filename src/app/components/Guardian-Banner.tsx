"use client";

import Image from "next/image";

export default function GuardianBanner() {
  return (
    <section className="relative h-[520px] md:h-[650px] overflow-hidden bg-[#f5f3e7]">

      {/* Background Image */}
      <Image
        src="/images/dogs-3.png"
        alt="Pet guardian banner"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

      {/* Decorative paws */}
      <Image
        src="/images/paw-1.png"
        alt=""
        width={60}
        height={60}
        aria-hidden
        className="absolute top-12 left-12 opacity-20 hidden md:block animate-pulse"
      />
      <Image
        src="/images/paw-1.png"
        alt=""
        width={80}
        height={80}
        aria-hidden
        className="absolute bottom-20 right-20 opacity-20 hidden md:block animate-pulse"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="px-6 md:px-16 max-w-2xl text-white animate-fadeInUp">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 whitespace-pre-line">
            Every Pet Deserves{"\n"}a Loving Guardian
          </h1>

          <p className="text-base md:text-lg opacity-90 mb-6">
            Compassionate care & trusted protection for the ones who love you unconditionally.
          </p>

          <a
            href="https://www.zeffy.com/en-US/donation-form/dce7d771-9492-4623-8508-d0e3096e1853"
            target="blank"
            aria-label="Donate to help pets"
            className="inline-block px-8 py-3 rounded-full font-semibold shadow-lg bg-[#db9c3d] hover:bg-[#c78b2f] transition"
          >
            Donate Now
          </a>
        </div>
      </div>

      {/* Simple animation */}
      <style jsx>{`
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
