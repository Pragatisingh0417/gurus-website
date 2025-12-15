"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#9cab3a] to-[#db9c3d] text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Start Your Sponsorship Today
        </h2>
        <p className="mb-8 opacity-90">
          Your monthly support gives an animal food, care, dignity, and love.
        </p>

        <Link
          href="/guru-newtown/virtual-adoption"
          className="inline-block bg-white text-[#2E7D32] px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          Sponsor an Animal
        </Link>
      </motion.div>
    </section>
  );
}
