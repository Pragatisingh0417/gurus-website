"use client";

import { motion } from "framer-motion";
import {
  FaHeart,
  FaHandsHelping,
  FaPaw,
  FaCertificate,
  FaCamera,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaHeart />,
    title: "Choose an Animal",
    desc: "Select a cow, dog, or cat who needs long-term care and support.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Sponsor Monthly",
    desc: "Your support covers food, medical care, shelter, and love.",
  },
  {
    icon: <FaPaw />,
    title: "Change a Life",
    desc: "Your adopted animal lives safely with dignity and care.",
  },
];

const benefits = [
  "Welcome adoption certificate",
  "Monthly photos & video updates",
  "Their full rescue story",
  "Priority updates for medical needs",
];

export default function HowVirtualAdoptionWorks() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#2E7D32] mb-4"
        >
          How Virtual Adoption Works
        </motion.h2>

        <p className="max-w-2xl mx-auto text-[#3E2723]/80 mb-14">
          Adopt a life with your heart — not your house.  
          Your monthly support becomes food, medicine, and love.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-[#F5F3E7] rounded-2xl p-8 shadow-md hover:shadow-xl transition"
            >
              <div className="text-[#9cab3a] text-4xl mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                {step.title}
              </h3>
              <p className="text-[#3E2723]/80 text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#f5f3e7] border border-[#9cab3a]/30 rounded-2xl p-10 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-[#2E7D32] mb-6">
            What You Receive
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {benefits.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[#3E2723]"
              >
                <span className="text-[#db9c3d] mt-1">
                  <FaCertificate />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
