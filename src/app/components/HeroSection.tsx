"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/banner-1.png"
          alt="Animal Rescue Sanctuary"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full px-5 sm:px-8 lg:px-12 text-center text-white">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-3xl 
            sm:text-4xl 
            md:text-5xl 
            lg:text-6xl 
            xl:text-6xl
            font-extrabold 
            leading-tight 
            mb-5
          "
        >
          Adopt a Life With Your Heart
          <br className="hidden md:block" />
          <span className="block text-[#db9c3d] mt-2">
            — Not Your House
          </span>
        </motion.h1>

        {/* Main Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            text-base 
            sm:text-lg 
            md:text-xl
            max-w-xl 
            md:max-w-3xl 
            mx-auto 
            mb-4 
            opacity-90
          "
        >
          Your monthly support becomes food, medicine, and love for animals who depend entirely on you.
        </motion.p>

        {/* Mission Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="
            text-sm 
            sm:text-base 
            max-w-xl 
            mx-auto 
            opacity-80 
            mb-8
          "
        >
          We rescue, heal, shelter, and protect abandoned animals through compassion, community support, and lifelong care.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="
            flex 
            flex-col 
            sm:flex-row 
            flex-wrap 
            justify-center 
            items-center 
            gap-4
          "
        >
          <Link
            href="https://www.zeffy.com/en-US/donation-form/dce7d771-9492-4623-8508-d0e3096e1853"
            target="_blank"
            className="
              px-7 py-3 
              bg-[#db9c3d] 
              hover:bg-[#c78b2f] 
              text-black 
              font-semibold 
              rounded-full 
              transition
              w-full sm:w-auto
            "
          >
            Donate
          </Link>

          <Link
            href="/tiffins-meals"
            className="
              px-7 py-3 
              bg-[#9cab3a] 
              hover:bg-[#889a2f] 
              text-white 
              font-semibold 
              rounded-full 
              transition
              w-full sm:w-auto
            "
          >
            Request Tiffin
          </Link>

          <Link
            href="/virtual-adoption"
            className="
              px-7 py-3 
              bg-white/90 
              hover:bg-white 
              text-black 
              font-semibold 
              rounded-full 
              transition
              w-full sm:w-auto
            "
          >
            Virtual Adoption
          </Link>

          <Link
            href="/shop"
            className="
 px-7 py-3 border
              border-white 
              text-white 
              hover:bg-white 
              hover:text-black
              font-semibold 
              rounded-full 
              transition
              w-full sm:w-auto
            "
          >
            Shop
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
