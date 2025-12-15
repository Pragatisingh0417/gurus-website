"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    title: "Every Pet Deserves\na Loving Guardian",
    desc:
      "Compassionate care & trusted protection for the ones who love you unconditionally.",
    cta: "Donate Now",
    ctaStyle: "bg-[#db9c3d] hover:bg-[#c78b2f]",
    image: "/guardian-images/dog-image-1.png",
  },
  {
    title: "Love • Care • Responsibility",
    desc:
      "We treat every pet like family — because to you, they are.",
    cta: "Donate Now",
    ctaStyle: "bg-white text-black hover:bg-gray-200",
    image: "/guardian-images/dog-image-1.png",
  },
  {
    title: "A Helping Hand\nWhen You Need It",
    desc:
      "Safe, reliable and responsible guardianship for every situation.",
    cta: "Donate Now",
    ctaStyle: "bg-[#9cab3a] hover:bg-[#889a2f]",
    image: "/guardian-images/dog-image-1.png",
  },
];

export default function GuardianBanner() {
  return (
    <section className="relative bg-[#f5f3e7] overflow-hidden">

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

      <Swiper
        centeredSlides
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/60",
          bulletActiveClass: "!bg-[#db9c3d]",
        }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="guardian-swiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div className="relative h-[520px] md:h-[650px] overflow-hidden">

                {/* Image */}
                <div
                  className={`absolute inset-0 transition-transform duration-[2000ms]
                    ${isActive ? "scale-105 opacity-100" : "scale-100 opacity-0"}
                  `}
                >
                  <Image
                    src={slide.image}
                    alt="Pet guardian banner"
                    fill
                    priority={i === 0}
                    className="object-cover"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative z-10 flex h-full items-center">
                  <div
                    className={`px-6 md:px-16 max-w-2xl text-white
                      transition-all duration-700
                      ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                    `}
                  >
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 whitespace-pre-line">
                      {slide.title}
                    </h1>

                    <p className="text-base md:text-lg opacity-90 mb-6">
                      {slide.desc}
                    </p>

                    <a
                      href="https://www.totalgiving.co.uk/donate/b-j-mehta-foundation"
                      aria-label="Donate to help pets"
                      className={`inline-block px-8 py-3 rounded-full font-semibold shadow-lg transition ${slide.ctaStyle}`}
                    >
                      {slide.cta}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mobile pagination positioning */}
      <style jsx global>{`
        .guardian-swiper .swiper-pagination {
          bottom: 18px !important;
        }

        @media (min-width: 768px) {
          .guardian-swiper .swiper-pagination {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
