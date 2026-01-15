"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Instagram,
  Youtube,
  HeartHandshake,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#F5F3E7] text-[#3E2723]">

      {/* ================= HERO ================= */}
      <section className="py-24 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#9cab3a] mb-4">
            Get in Touch
          </h1>
          <p className="text-lg opacity-90">
            Whether you want to help, visit, volunteer, or just say hello —
            we’d love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT OPTIONS ================= */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">

        {/* EMAIL */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <Mail className="mx-auto text-[#9cab3a]" size={32} />
          <h3 className="mt-4 font-semibold text-lg">Email Us</h3>
          <p className="text-sm opacity-80 mt-2">
            For general queries & partnerships
          </p>
          <a
            href="mailto:pt604137@gmail.com"
            className="inline-block mt-4 text-[#db9c3d] font-medium"
          >
            pt604137@gmail.com
          </a>
        </div>

        {/* WHATSAPP */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <Phone className="mx-auto text-[#9cab3a]" size={32} />
          <h3 className="mt-4 font-semibold text-lg">WhatsApp</h3>
          <p className="text-sm opacity-80 mt-2">
            Quick support & urgent help
          </p>
         <a
  href="https://wa.me/12159685700"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 text-[#db9c3d] font-medium"
>
  Chat on WhatsApp
</a>

        </div>

        {/* SOCIAL */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <HeartHandshake className="mx-auto text-[#9cab3a]" size={32} />
          <h3 className="mt-4 font-semibold text-lg">Follow Our Journey</h3>

          <div className="flex justify-center gap-5 mt-5">
            <a href="https://www.instagram.com/gurus_guardian_angels/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" aria-label="Instagram">
              <Instagram className="hover:text-[#db9c3d]" />
            </a>
            <a href="https://www.youtube.com/@growingwithgurus9700" aria-label="YouTube">
              <Youtube className="hover:text-[#db9c3d]" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= VOLUNTEER FORM ================= */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#9cab3a] text-center">
            Volunteer With Us
          </h2>
          <p className="text-center mt-3 opacity-80">
            Your time and compassion can save lives.
          </p>

          <form className="mt-10 grid gap-6">
            <input
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9cab3a]"
              placeholder="Full Name"
            />
            <input
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9cab3a]"
              placeholder="Email Address"
            />
            <input
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9cab3a]"
              placeholder="Phone Number"
            />
            <textarea
              className="border rounded-xl px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-[#9cab3a]"
              placeholder="How would you like to help?"
            />

            <button className="btn-primary mx-auto px-12">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* ================= SANCTUARY GUIDELINES ================= */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#9cab3a] mb-6 text-center">
          Sanctuary Visit Guidelines
        </h2>

        <ul className="bg-[#fffdf7] rounded-2xl p-8 shadow-lg space-y-4 text-sm md:text-base">
          <li>• Visits are by appointment only</li>
          <li>• Please respect animal space & caretaker instructions</li>
          <li>• No feeding without permission</li>
          <li>• Photography allowed only in designated areas</li>
          <li>• Children must be supervised at all times</li>
        </ul>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#9cab3a] text-white py-16 text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          Together, We Can Save More Lives
        </h2>
        <Link
          href="/donate"
          className="inline-block bg-white text-[#2E7D32] px-10 py-3 rounded-full font-semibold hover:bg-[#f5f3e7] transition"
        >
          Donate Now
        </Link>
      </section>

    </main>
  );
}
