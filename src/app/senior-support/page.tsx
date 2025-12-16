"use client";

import Image from "next/image";
import Link from "next/link";

export default function SeniorSupportPage() {
  return (
    <main className="bg-[#fafaf7] text-[#2b2b2b]">

      {/* ---------- HERO ---------- */}
      <section className="relative bg-gradient-to-br from-[#fdf6e9] to-[#f3efe6] py-28 px-6 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#fde68a]/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#fdba74]/30 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Caring for Those
            <span className="block text-[#d97706]">
              Who Once Cared for Us
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Supporting senior citizens with dignity, nourishment,
            companionship, and care.
          </p>
        </div>
      </section>

      {/* ---------- IMAGE + INTRO ---------- */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/Senior-Citizen-Support.jpg"
            alt="Senior citizen care and support"
            width={700}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>

        {/* TEXT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-[#fde68a] text-[#92400e] rounded-full">
            👵 Senior Citizen Support
          </span>

          <h2 className="text-3xl font-bold mb-6">
            Respect. Care. Compassion.
          </h2>

          <p className="text-lg text-gray-700">
            Many elderly individuals live alone, struggling with food,
            health, or emotional isolation.  
            Our mission is to ensure no senior is forgotten.
          </p>
        </div>
      </section>

      {/* ---------- OUR PROGRAMS ---------- */}
      <section className="bg-white py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Our Programs
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <ProgramCard
            title="Daily Meal Support"
            desc="Nutritious, home-cooked meals for seniors living alone or in need."
          />

          <ProgramCard
            title="Medical Assistance"
            desc="Basic medications and doctor visits, as funding allows."
          />

          <ProgramCard
            title="Daycare Support (Coming Soon)"
            desc="A safe space to spend the day, socialize, and receive care."
          />

          <ProgramCard
            title="Emergency Support"
            desc="Help during sudden health or financial crises."
          />

        </div>
      </section>

      {/* ---------- HOW TO HELP ---------- */}
      <section className="bg-[#fdf6e9] py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          How You Can Help Seniors
        </h2>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Donate",
            "Sponsor a senior citizen",
            "Volunteer",
            "Provide groceries or medicines",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm font-medium"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/donate">
            <button className="bg-[#d97706] hover:bg-[#b45309] text-white font-semibold px-10 py-4 rounded-full transition">
              Sponsor a Senior
            </button>
          </Link>

          <Link href="/contact">
            <button className="border-2 border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white font-semibold px-10 py-4 rounded-full transition">
              Request Help
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}

/* ---------- COMPONENT ---------- */
function ProgramCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-[#fafaf7] p-8 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700">{desc}</p>
    </div>
  );
}
