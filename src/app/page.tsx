"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function HomeBanner() {
  return (
    <section className="bg-[#282727] py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT: Guru’s Newtown */}
        <Link
          href="/guru-newtown"
          className="group relative block overflow-hidden rounded-lg shadow-xl"
        >
          {/* Image Slider */}
          <Swiper
            spaceBetween={30}
            centeredSlides
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="h-[600px] md:h-[700px]"
          >
            {[
              "/images/guru-image-7.jpg",
              "/images/guru-image-2.png",
              "/images/guru-image-4.jpg",
            ].map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`Guru’s Newtown Banner ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500 z-10" />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-20">
            <img
              src="/logo/newtown-logo.png"
              alt="Guru’s Newtown Logo"
              className="w-2/3 max-w-[250px] mb-4"
            />
            <p className="text-lg md:text-xl max-w-md leading-relaxed">
              Experience authentic cuisine with a purpose — every meal supports
              rescued animals.
            </p>
            <span className="inline-block mt-6 bg-[#D35400] text-white px-6 py-2.5 rounded-full font-semibold group-hover:bg-[#BF360C] transition">
              Visit Guru’s Newtown
            </span>
          </div>
        </Link>

        {/* RIGHT: Guardian Angels */}
        <Link
          href="/guardian-angels"
          className="group relative block overflow-hidden rounded-lg shadow-xl"
        >
          {/* Image Slider */}
          <Swiper
            spaceBetween={30}
            centeredSlides
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="h-[600px] md:h-[700px]"
          >
            {[
              "/guardian-images/dog-image-1.png",
              "/guardian-images/dog-image-2.jpg",
              "/guardian-images/dog-image-1.png",
            ].map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`Guardian Angels Banner ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500 z-10" />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-20">
            <img
              src="/logo/guardian-logo.png"
              alt="Guardian Angels Logo"
              className="w-2/3 max-w-[250px] mb-4"
            />
            <p className="text-lg md:text-xl max-w-md leading-relaxed">
              Join our mission to rescue, rehabilitate, and care for stray
              animals in need.
            </p>
            <span className="inline-block mt-6 bg-[#2E7D32] text-white px-6 py-2.5 rounded-full font-semibold group-hover:bg-[#1B5E20] transition">
              Visit Guardian Angels
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
