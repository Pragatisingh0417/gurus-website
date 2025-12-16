"use client";

export default function ShopCTA() {
  return (
    <section className="px-6 py-16">
      <div className=" mx-auto bg-[#fdf6e9] border border-[#f5e6c8] rounded-2xl p-8 text-center">

        {/* Badge */}
        <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold bg-[#fde68a] text-[#92400e] rounded-full">
          🛍 Coming Soon
        </span>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#2b2b2b]">
          Shop with Purpose
        </h3>

        {/* Subtext */}
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Thoughtfully made sauces, teas, merchandise, and digital products —
          every purchase helps fund rescues, meals, and care.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            "Signature Sauces",
            "Herbal Iced Teas",
            "Merchandise",
            "Digital Products",
          ].map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm bg-white rounded-full border border-gray-200"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            disabled
            className="px-6 py-3 rounded-full bg-gray-300 text-gray-600 font-semibold cursor-not-allowed"
          >
            Shop Now (Coming Soon)
          </button>

          <a
            href="https://www.zeffy.com/en-US/donation-form/dce7d771-9492-4623-8508-d0e3096e1853"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#d97706] hover:bg-[#b45309] text-white font-semibold transition"
          >
            Support with Monthly Donation
          </a>
        </div>

      </div>
    </section>
  );
}
