"use client";

import Link from "next/link";
import Image from "next/image";

export default function SeniorSupportCTA() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#fdf6e9] to-[#f3efe6]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* CONTENT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-[#fde68a] text-[#92400e] rounded-full">
            💛 Senior Citizen Support
          </span>

          <h2 className="text-4xl font-bold mb-6">
            Caring for Those
            <span className="block text-[#d97706]">
              Who Once Cared for Us
            </span>
          </h2>

          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Your support helps provide meals, medical aid,
            and dignity to elderly individuals in need.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link href="/senior-support">
              <button className="bg-[#9cab3a] hover:bg-[#adbe3e] text-white font-semibold px-10 py-4 rounded-full transition shadow-lg">
                Sponsor a Senior
              </button>
            </Link>

            <Link href="/senior-support">
              <button className="border-2 border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white font-semibold px-10 py-4 rounded-full transition">
                Request Help
              </button>
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/Senior-Citizen-Support.jpg"
            alt="Senior citizen support"
            width={600}
            height={450}
            className="object-cover w-full h-full"
          />
        </div>

        

      </div>
    </section>
  );
}
