"use client";

export default function DonateCTA() {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-[#2b2b2b] via-[#1f1f1f] to-[#000000] text-white overflow-hidden">

      {/* Soft glow accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#facc15]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#f97316]/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto text-center">

        <span className="inline-block mb-5 px-4 py-1 text-sm font-semibold bg-white/10 backdrop-blur rounded-full">
          💛 Transparency • Impact • Compassion
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          What Your Donations Do
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-10">
          Every contribution directly supports animal rescues,
          medical treatment, food programs,
          and emergency response.
        </p>

        {/* IMPACT POINTS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
          {[
            "Transparent monthly breakdowns",
            "Featured rescues & success stories",
            "Before & after transformations",
            "Videos from the ground",
            "Flexible donation tiers",
            "One-time, monthly & emergency funds",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md p-5 rounded-xl text-sm font-medium"
            >
              {item}
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <a
          href="https://www.zeffy.com/en-US/donation-form/dce7d771-9492-4623-8508-d0e3096e1853"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="group inline-flex items-center gap-3 bg-[#d97706] hover:bg-[#b45309] text-white font-semibold text-lg px-12 py-5 rounded-full shadow-2xl transition-all">
            Donate Now
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </a>

        <p className="mt-6 text-sm text-gray-400">
          100% secure • Tax-deductible where applicable • Immediate impact
        </p>

      </div>
    </section>
  );
}
