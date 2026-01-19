"use client";

import Image from "next/image";
import CateringRequestForm from "../components/CateringRequestForm";

export default function CateringPage() {
  return (
    <main className="bg-[#fafaf7] text-[#2b2b2b]">

      {/* ---------- HERO ---------- */}
      <section className="relative bg-gradient-to-br from-[#fdf6e9] to-[#f3efe6] py-28 px-6 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#facc15]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#f97316]/20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Small Catering,
            <span className="block text-[#d97706]">Big Purpose</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Purpose-driven catering for intimate events —  
            where every meal supports animals in need.
          </p>
        </div>
      </section>

      {/* ---------- IMAGE + WHAT WE CATER ---------- */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/guru-image-9.png" 
            alt="Small catering Indian food"
            width={700}
            height={500}
            className="object-cover w-full h-[400px]"
          />
        </div>

        {/* CONTENT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-[#fde68a] text-[#92400e] rounded-full">
            🍽 What We Cater
          </span>

          <h2 className="text-3xl font-bold mb-8">
            Thoughtful Food for Meaningful Gatherings
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Office lunches",
              "Small gatherings",
              "Birthday parties",
              "Cultural events",
              "School lunches",
              "Community meet-ups",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow-sm font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MENU ---------- */}
      <section className="bg-white py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          Menu Includes
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            "Fresh Indian curries",
            "Rice",
            "Appetizers",
            "gluten-free and special diet options",
            "Homemade drinks (coming soon)",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-[#fdf6e9] p-6 rounded-xl"
            >
              <span className="w-3 h-3 bg-[#d97706] rounded-full" />
              <span className="text-lg font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- WHY DIFFERENT ---------- */}
      <section className="bg-[#fdf6e9] py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Our Catering Is Different
            </h2>

            <ul className="space-y-4 text-lg">
              {[
                "Animal rescues",
                "Sanctuary care",
                "Puppy rehabilitation",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="w-3 h-3 bg-[#d97706] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xl font-medium">
              Your celebration becomes someone’s lifeline.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/guru-image-8.jpg" 
              alt="Community food service"
              width={700}
              height={500}
              className="object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* ---------- FORM ---------- */}
     <CateringRequestForm />

    </main>
  );
}
