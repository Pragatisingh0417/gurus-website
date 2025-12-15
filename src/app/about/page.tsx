"use client";
import Link from "next/link";

import Image from "next/image";
import { motion } from "framer-motion";
import Team from "../components/Team";

export default function AboutPage() {
  return (
    <main className="bg-[#F5F3E7] text-[#3E2723]">

      {/* ================= HERO ================= */}
       <section className="relative h-[60vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/dog-banner.png)" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto px-6 text-center text-white"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Saving Lives Through Compassion
        </h1>
        <p className="text-lg opacity-90">
          Building shelters, restoring dignity, and giving stray animals a future.
        </p>
      </motion.div>
    </section>

      {/* ================= FULL STORY ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-6">
        <h2 className="text-3xl font-bold text-[#2E7D32] mb-4">
          Our Story
        </h2>

        <p>
          At Guru's Guardian Angels, our mission is to save and improve the lives
          of stray animals around the world by fostering unity, establishing
          shelters, and providing essential care.
        </p>

        <p>
          With millions of stray animals across the globe and only a fraction
          finding refuge, we work tirelessly to expand shelter capacity,
          facilitate medical care, promote adoption, and ultimately build new
          shelters where they are needed most.
        </p>

        <p>
          Driven by the lifelong love and compassion of <strong>Priya & Chef Guru</strong>,
          our work is inspired by their upbringing in a small Indian village
          where caring for stray animals was a shared responsibility.
        </p>

        <p>
          Through awareness, education, and collaboration, we are restoring
          compassion — one life at a time.
        </p>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { title: "Rescue", desc: "Saving animals from neglect, injury, and abandonment." },
            { title: "Care", desc: "Medical treatment, vaccinations, and rehabilitation." },
            { title: "Shelter", desc: "Safe havens where animals can heal and live with dignity." },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-[#F5F3E7] shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#2E7D32] mb-3">
                {item.title}
              </h3>
              <p className="opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DONATIONS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-[#2E7D32] mb-6">
          What We Do With Your Donations
        </h2>

        <ul className="space-y-3 list-disc list-inside opacity-90">
          <li>Daily food and nutrition</li>
          <li>Emergency and routine medical care</li>
          <li>Vaccinations and sterilization</li>
          <li>Shelter construction and maintenance</li>
          <li>Caregiver and volunteer support</li>
        </ul>
      </section>

      {/* ================= VISION ================= */}
      <section className="bg-[#9cab3a]/10 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#2E7D32] mb-4">
            Our Vision & Purpose
          </h2>
          <p className="text-lg opacity-90">
            A world where no animal suffers from neglect, hunger, or fear —
            and compassion becomes a shared responsibility across communities.
          </p>
        </div>
      </section>

      {/* ================= TEAM ================= */}
    <Team />

      {/* ================= TESTIMONIAL ================= */}
      <section className="bg-white py-20 text-center px-6">
        <blockquote className="max-w-3xl mx-auto text-xl italic opacity-90">
          “Every animal deserves dignity, care, and love — and Guru’s Guardian Angels
          makes that possible every single day.”
        </blockquote>
      </section>
 <section className="bg-[#9cab3a] py-16 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">
        Join Us in Saving Lives
      </h2>
      <p className="mb-6">
        Your compassion can change an animal’s future today.
      </p>
      <Link
        href="/donate"
        className="bg-[#db9c3d] px-8 py-3 rounded-full font-semibold"
      >
        Donate Now
      </Link>
    </section>
    </main>
  );
}
