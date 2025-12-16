// src/app/guru-newtown/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPaw, FaHeartbeat, FaHome } from "react-icons/fa";
import { useState } from "react";

export default function GuardianHomePage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <main className="bg-[#F5F3E7] text-[#3E2723] overflow-hidden">

      {/* 🌿 INTRO / ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold text-[#121212] mb-6"
        >
          A Commitment to Compassion
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-lg leading-relaxed max-w-3xl mx-auto text-[#3E2723]/90"
        >
          Welcome to Guru’s, where every meal supports a mission.
          <br /><br />
          Through <strong>Guru’s Guardian Angels</strong>, your patronage funds
          rescue missions, medical care, and safe shelters—giving animals a
          second chance at life.
        </motion.p>

        {/* 🔰 ICON HIGHLIGHTS */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: <FaPaw />, title: "Rescue", desc: "Saving animals in need" },
            { icon: <FaHeartbeat />, title: "Care", desc: "Medical & rehabilitation" },
            { icon: <FaHome />, title: "Shelter", desc: "Safe homes & adoption" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-md"
            >
              <div className="text-4xl text-[#9cab3a] mb-3 flex justify-center">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg mb-1">{item.title}</h4>
              <p className="text-sm opacity-80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📊 STATS STRIP */}
      <section className="bg-[#9cab3a] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: "1,200+", label: "Pets Rescued" },
            { value: "350+", label: "Active Guardians" },
            { value: "800+", label: "Successful Adoptions" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-extrabold">{stat.value}</h3>
              <p className="opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🏡 SAFE & CREATIVE */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/dogs-3.png"
            alt="Guru’s Newtown Campus"
            width={500}
            height={400}
            placeholder="blur"
            blurDataURL="/images/blur.jpg"
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-[#9cab3a] mb-4">
            A Safe, Creative & Caring Space
          </h2>
          <p className="text-lg mb-6 text-[#3E2723]/90">
            At Guru's Guardian Angels, our mission is to save and improve the lives of stray animals around the world by fostering unity, establishing shelters, and providing essential care. With so many countries facing the challenge of growing stray animal population, consisting of millions of cats and dogs, and only a fraction of them finding refuge in existing shelters, we are dedicated to making a difference.
          </p>
          <Link
            href="/about"
            className="inline-block bg-[#db9c3d] hover:bg-[#c78b2f] text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Learn More About Us
          </Link>
        </motion.div>
      </section>

      {/* 🍽️ MENU – CLICKABLE LIGHTBOX */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        {[
          { title: "Guru’s Veg/an Menu", img: "/images/vegan-menu.png" },
          { title: "Guru’s Full Menu", img: "/images/full-menu.jpg" },
        ].map((menu, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer"
            onClick={() => setLightbox(menu.img)}
          >
            <h3 className="text-2xl font-bold text-[#2E7D32] mb-4 text-center">
              {menu.title}
            </h3>
            <Image
              src={menu.img}
              alt={menu.title}
              width={600}
              height={420}
              placeholder="blur"
              blurDataURL="/images/blur.jpg"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        ))}
      </section>

      {/* 🔍 LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <Image
            src={lightbox}
            alt="Menu Preview"
            width={900}
            height={600}
            className="rounded-xl"
          />
        </div>
      )}
    </main>
  );
}
