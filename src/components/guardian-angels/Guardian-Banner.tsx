"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function GuardianBanner() {
  return (
    <section className="bg-[#f5f3e7]"> {/* Warm neutral background */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* LEFT: SLIDER */}
        <div className="w-full overflow-hidden  shadow-lg">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="/guardian-images/dog-image-1.png"
                alt="Restaurant Banner 1"
                className="w-full h-[500px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/guardian-images/dog-image-1.png"
                alt="Restaurant Banner 2"
                className="w-full h-[500px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/guardian-images/dog-image-1.png"
                alt="Restaurant Banner 3"
                className="w-full h-[500px] object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <div className="text-gray-800">
          <h1 className="text-4xl font-bold mb-4 text-[#2E7D32]">
            Welcome to Guru's Guardian Angels
          </h1>
          <p className="text-lg mb-6 leading-relaxed text-[#3E2723]">
Help our Street Dogs in Foreign Countries
Your gift today helps us rescue street dogs around the World who are in need of food, shelter, medicine, and so much more.            Every meal you enjoy here supports our efforts to rescue and rehabilitate stray animals through our initiative, Guru’s Guardian Angels.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#D35400] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#BF360C] transition">
             Contact Us
            </button>
            <button className="bg-[#2E7D32] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1B5E20] transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
