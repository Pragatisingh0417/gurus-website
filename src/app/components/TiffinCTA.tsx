"use client";

import Link from "next/link";
import Image from "next/image";

export default function TiffinCTA() {
  return (
    <section className="bg-[#fdf6e9] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="flex-1">
          {/* Badge */}
          <span className="inline-block mb-5 px-4 py-1 text-sm font-semibold bg-[#fde68a] text-[#92400e] rounded-full">
            🍲 Community Tiffin Program
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            Meals That Heal
            <span className="block text-[#d97706]">
              — Tiffin Program
            </span>
          </h2>

          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Your meal today becomes someone’s
            <span className="font-semibold"> survival tomorrow</span>.
          </p>

          <h4 className="text-base font-semibold mb-4 text-gray-800">
            What Tiffins Support
          </h4>

          {/* Clean list */}
          <ul className="space-y-4 mb-10 max-w-md">
            {[
              "Emergency rescues",
              "Medical treatments",
              "Sanctuary operations",
              "Puppy care & food",
              "Senior citizen meals",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#d97706]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link href="/tiffins-meals">
            <button className="bg-[#d97706] hover:bg-[#b45309] text-white font-semibold px-9 py-3 rounded-full shadow-sm hover:shadow-md transition">
              Request Tiffin
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE / QUOTE CARD */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#f5e6c8]">

            {/* Image */}
            <div className="relative h-64 w-full">
              <Image
                src="/images/guru-image-3.jpg" 
                alt="Home cooked tiffin meal"
                fill
                className="object-cover"
              />
            </div>

            {/* Quote */}
            <div className="p-8 text-center">
              <p className="text-lg font-medium leading-relaxed text-gray-800">
                “One plate of food can heal a body,
                <span className="block mt-3 text-[#d97706] font-semibold">
                  save an animal, and restore hope.”
                </span>
              </p>

              <p className="mt-4 text-sm text-gray-500">
                Every tiffin supports lives in need
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
