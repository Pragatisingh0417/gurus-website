"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Banner() {
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
                src="/images/guru-image-1.png"
                alt="Restaurant Banner 1"
                className="w-full h-[500px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/guru-image-2.png"
                alt="Restaurant Banner 2"
                className="w-full h-[500px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/guru-image-3.jpg"
                alt="Restaurant Banner 3"
                className="w-full h-[500px] object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <div className="text-gray-800">
          <h1 className="text-4xl font-bold mb-4 text-[#2E7D32]">
            Welcome to Guru’s Newtown
          </h1>
          <p className="text-lg mb-6 leading-relaxed text-[#3E2723]">
            Welcome to Guru's, where we believe in the power of food to bring people together and create positive change. Our diverse menu includes vegetarian, vegan, and meat options to cater to a wide range of tastes and preferences. 
            Every meal you enjoy here supports our efforts to rescue and rehabilitate stray animals through our initiative, Guru’s Guardian Angels.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#D35400] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#BF360C] transition">
              View Menu
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
