"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/guardian-images/dog-image-1.png"
          alt="Animal Rescue Sanctuary"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          Adopt a Life With Your Heart <br className="hidden md:block" />
          <span className="text-[#db9c3d]">— Not Your House</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-4 opacity-90"
        >
          Your monthly support becomes food, medicine, and love for animals who depend entirely on you.
        </motion.p>

        {/* Mission (20 words) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm md:text-base opacity-80 mb-8"
        >
          We rescue, heal, shelter, and protect abandoned animals through compassion, community support, and lifelong care.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/donate"
            className="px-6 py-3 bg-[#db9c3d] hover:bg-[#c78b2f] text-black font-semibold rounded-full transition"
          >
            Donate
          </Link>

          <Link
            href="/tiffin"
            className="px-6 py-3 bg-[#9cab3a] hover:bg-[#889a2f] text-white font-semibold rounded-full transition"
          >
            Request Tiffin
          </Link>

          <Link
            href="/virtual-adoption"
            className="px-6 py-3 bg-white/90 hover:bg-white text-black font-semibold rounded-full transition"
          >
            Virtual Adoption
          </Link>

          <Link
            href="/shop"
            className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black font-semibold rounded-full transition"
          >
            Shop
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
