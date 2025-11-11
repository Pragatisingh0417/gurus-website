// src/app/guru-newtown/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GuardianBanner from "@/components/guardian-angels/Guardian-Banner";

export default function GuardianHomePage() {
  return (
    <main className="text-[#3E2723] bg-[#F5F3E7]">
      {/* ✅ HERO / BANNER SECTION */}
      <section>
        <GuardianBanner />
      </section>

      {/* ✅ WELCOME / ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2E7D32] mb-6">
            A Commitment to Compassion
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-[#3E2723]/90">
            Welcome to Guru's, where we believe in the power of food to bring people
            together and create positive change. Our diverse menu includes vegetarian,
            vegan, and meat options to cater to a wide range of tastes and preferences.
            <br />
            <br />
            Our mission extends beyond the kitchen. Every meal you enjoy here supports
            our efforts to rescue, rehabilitate, and provide shelter for stray animals
            through our initiative, <strong>Guru's Guardian Angels</strong>. Your
            patronage funds rescue missions, medical treatments, and the construction
            of new shelters, giving countless animals a second chance at life.
          </p>
        </motion.div>
      </section>

      {/* ✅ SAFE & CREATIVE SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/guru-image-4.jpg"
            alt="Guru’s Newtown Campus"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2E7D32] mb-4">
            A Safe, Creative, and Caring Space
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-[#3E2723]/90">
            At Guru’s Newtown, we believe every child deserves a strong foundation.
            Our programs are designed to promote growth, creativity, and confidence —
            helping each child reach their fullest potential in a warm and inclusive
            environment.
          </p>
          <Link
            href="/guru-newtown/about"
            className="bg-[#D35400] hover:bg-[#BF360C] text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Learn More About Us
          </Link>
        </motion.div>
      </section>

      {/* ✅ MENU SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2E7D32] text-center md:text-left">
            Guru’s Veg/an Menu
          </h2>
          <Image
            src="/images/vegan-menu.png"
            alt="Guru’s Veg Menu"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2E7D32] text-center md:text-left">
            Guru’s Full Menu
          </h2>
          <Image
            src="/images/full-menu.jpg"
            alt="Guru’s Full Menu"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>
    </main>
  );
}
