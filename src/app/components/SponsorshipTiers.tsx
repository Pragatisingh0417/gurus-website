"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    title: "Basic Care",
    price: "₹1,000 / $20",
    features: ["Daily food", "Monthly health check"],
  },
  {
    title: "Medical Support",
    price: "₹2,500 / $40",
    features: ["Food", "Medicine", "Treatments"],
  },
  {
    title: "Full Sponsorship",
    price: "₹5,000 / $75",
    features: ["Food", "Medicine", "Enrichment", "Caretaker support"],
    highlight: true,
  },
  {
    title: "Guardian Angel",
    price: "₹10,000 / $150",
    features: ["Full sponsorship", "Emergency fund support"],
  },
];

export default function SponsorshipTiers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#2E7D32]">
          Monthly Sponsorship Tiers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`rounded-2xl p-8 shadow-xl border ${
                tier.highlight
                  ? "bg-[#9cab3a] text-white"
                  : "bg-[#F5F3E7] text-black"
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
              <p className="text-2xl font-extrabold mb-4">{tier.price}</p>
              <ul className="space-y-2 text-sm">
                {tier.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
