"use client";

import Link from "next/link";
import Image from "next/image";

export default function CateringCTA() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#fdf6e9] to-[#f3efe6]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/guru-image-2.png"
            alt="Purpose driven catering"
            width={400}
            height={300}
            className="object-cover w-full h-[400px]"
          />
        </div>

        {/* CONTENT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-[#fde68a] text-[#92400e] rounded-full">
            🍽 Purpose-driven Catering
          </span>

          <h2 className="text-4xl font-bold mb-6">
            Small Catering,
            <span className="block text-[#d97706]">Big Purpose</span>
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            Celebrate your moments while supporting animals, seniors,
            and community care.
          </p>

          <Link href="/catering">
            <button className="inline-flex items-center gap-3 bg-[#9cab3a] hover:bg-[#c7db44] text-white font-semibold px-10 py-4 rounded-full shadow-lg transition">
              Request Catering →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
