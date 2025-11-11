"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function HomeBanner() {
  return (
    <section className="bg-[#f5f3e7]">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT: Guru's Newtown */}
        <Link
          href="/guru-newtown"
          className="group block relative  overflow-hidden shadow-lg"
        >
          {/* Image Slider */}
          <Swiper
            spaceBetween={30}
            centeredSlides
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="h-[700px]"
          >
            <SwiperSlide>
              <img
                src="/images/guru-image-7.jpg"
                alt="Guru's Newtown Banner 1"
                className="w-full h-[800px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/guru-image-2.png"
                alt="Guru's Newtown Banner 2"
                className="w-full h-[800px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/guru-image-4.jpg"
                alt="Guru's Newtown Banner 3"
                className="w-full h-[800px] object-cover"
              />
            </SwiperSlide>
          </Swiper>

          {/* Overlay tint */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500 z-10" />

          {/* Text content ABOVE overlay */}
          <div className="absolute  top-60 right-30 text-center text-white z-20">
            <h2 className="text-6xl font-bold mb-2">Guru’s Newtown</h2>
            <p className="text-[20px] max-w-md">
              Experience authentic cuisine with a purpose — every meal supports rescued animals.
            </p>
            <span className="inline-block mt-4 bg-[#D35400] text-white px-5 py-2 rounded-full font-semibold group-hover:bg-[#BF360C] transition">
              Visit Guru’s Newtown
            </span>
          </div>
        </Link>

        {/* RIGHT: Guru’s Guardian Angels */}
        <Link
          href="/guardian-angels"
          className="group block relative overflow-hidden shadow-lg"
        >
          {/* Image Slider */}
          <Swiper
            spaceBetween={30}
            centeredSlides
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="h-[700px]"
          >
            <SwiperSlide>
              <img
                src="/guardian-images/dog-image-1.png"
                alt="Guardian Angels Banner 1"
                className="w-full h-[800px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/guardian-images/dog-image-2.jpg"
                alt="Guardian Angels Banner 2"
                className="w-full h-[800px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/guardian-images/dog-image-1.png"
                alt="Guardian Angels Banner 3"
                className="w-full h-[800px] object-cover"
              />
            </SwiperSlide>
          </Swiper>

          {/* Overlay tint */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500 z-10" />

          {/* Text content ABOVE overlay */}
          <div className="absolute top-60 right-30 text-center  text-white z-20">
            <h2 className="text-5xl font-bold mb-2">Guru’s Guardian Angels</h2>
            <p className="text-[20px] max-w-md">
              Join our mission to rescue, rehabilitate, and care for stray animals in need.
            </p>
            <span className="inline-block mt-4 bg-[#2E7D32] text-white px-5 py-2 rounded-full font-semibold group-hover:bg-[#1B5E20] transition">
              Visit Guardian Angels
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
