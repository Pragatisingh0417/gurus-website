"use client";

import { motion } from "framer-motion";
import AnimalCard from "../components/AnimalCard";
import AnimalsGrid from "../components/AnimalsGrid";
import AdoptionGuidelines from "../components/AdoptionGuidelines";
import AdoptionForm from "../components/AdoptionForm";
import AdoptionCTA from "../components/AdoptionCTA";

export default function AniamlAdoption() {
  return (
    <section>
 <section className="relative bg-[#f5f3e7] mt-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2E7D32] mb-4">
          Give Them a Home. Change a Life.
        </h1>
        <p className="text-lg text-[#3E2723]/90">
          These animals have survived hardship. All they need now is love,
          safety, and a forever family.
        </p>
      </motion.div>
      <AnimalsGrid />
      <AdoptionGuidelines />
      <AdoptionCTA />
    </section>
    </section>
   
    
  );
}
