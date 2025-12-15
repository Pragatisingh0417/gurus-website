"use client";

import { motion } from "framer-motion";
import { Bone, Syringe, Home, Users } from "lucide-react";

const impacts = [
  { icon: <Bone />, text: "Nutritious daily meals" },
  { icon: <Syringe />, text: "Vaccinations & treatments" },
  { icon: <Home />, text: "Safe shelter & bedding" },
  { icon: <Users />, text: "Caretaker & rescue support" },
];

export default function DonationImpact() {
  return (
    <section className="py-20 bg-[#F5F3E7]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#2E7D32]">
          What Your Donations Do
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impacts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <div className="text-[#9cab3a] w-10 h-10 mx-auto mb-3">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-black">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
