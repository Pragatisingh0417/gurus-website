"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const animals = [
  {
    id: "cow",
    title: "Cows",
    description: [
      "Elderly mothers",
      "Accident survivors",
      "Blind & paralyzed cows",
      "Babies rescued from roads",
      "Abandoned after giving birth",
    ],
    image: "/animals/cow.jpg",
    button: "Sponsor a Cow",
    href: "/virtual-adoption/cow",
  },
  {
    id: "dog",
    title: "Dogs & Puppies",
    description: [
      "Paralyzed dogs",
      "Hit-and-run victims",
      "Orphaned puppies",
      "Senior dogs needing lifelong care",
    ],
    image: "/animals/dog.jpg",
    button: "Sponsor a Dog",
    href: "/virtual-adoption/dog",
  },
  {
    id: "cat",
    title: "Cats & Kittens",
    description: [
      "Accident rescues",
      "Orphaned kittens",
      "Critical medical cases",
    ],
    image: "/animals/cat.jpg",
    button: "Sponsor a Cat",
    href: "/virtual-adoption/cat",
  },
];

export default function MeetTheAnimals() {
  return (
    <section className="bg-[#F5F3E7] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E7D32] mb-4">
            Meet the Animals Waiting for You
          </h2>
          <p className="text-lg text-[#3E2723]/90">
            Each life here depends on monthly care, compassion, and commitment.
            Choose who your heart connects with.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {animals.map((animal, index) => (
            <motion.div
              key={animal.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-64">
                <Image
                  src={animal.image}
                  alt={animal.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#2E7D32] mb-4">
                  {animal.title}
                </h3>

                <ul className="space-y-2 text-[#3E2723]/90 mb-6">
                  {animal.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#9cab3a] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={animal.href}
                  className="inline-block w-full text-center bg-[#db9c3d] hover:bg-[#c78b2f] text-white py-3 rounded-full font-semibold transition"
                >
                  {animal.button}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
