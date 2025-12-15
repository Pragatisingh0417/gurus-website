"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function LatestRescues() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-[#2E7D32] text-center">
          Latest Rescues
        </h2>

        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
        >
          {[1, 2, 3, 4].map((_, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#F5F3E7] h-64 rounded-xl flex items-center justify-center shadow">
                Rescue Story {i + 1}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
