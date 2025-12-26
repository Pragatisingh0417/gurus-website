"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

const images: GalleryImage[] = [
  { id: 1, src: "/images/309A7090.JPG", alt: "Gallery Image 1" },
  { id: 2, src: "/images/309A7091.JPG", alt: "Gallery Image 2" },
  { id: 3, src: "/images/309A7098.JPG", alt: "Gallery Image 3" },
  { id: 4, src: "/images/309A7094.JPG", alt: "Gallery Image 4" },
  { id: 5, src: "/images/309A7102.JPG", alt: "Gallery Image 5" },
  { id: 6, src: "/images/309A7108.JPG", alt: "Gallery Image 6" },
    { id: 7, src: "/images/309A7110.JPG", alt: "Gallery Image 6" },

      { id: 8, src: "/images/309A7117.JPG", alt: "Gallery Image 6" },

        { id: 9, src: "/images/309A7121.JPG", alt: "Gallery Image 6" },

          { id: 10, src: "/images/309A7124.JPG", alt: "Gallery Image 6" },

];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our <span className="text-[#9cab3a]">Gallery</span>
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="pb-12"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <div
                className="relative h-64 overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setActiveImage(img)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <button
            className="absolute top-6 right-6 text-white z-50"
            onClick={() => setActiveImage(null)}
          >
            <X size={32} />
          </button>

          <div className="max-w-5xl w-full">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={1400}
              height={900}
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
