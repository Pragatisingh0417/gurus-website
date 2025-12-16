"use client";

import Link from "next/link";

export default function ShopPage() {
  return (
    <main className="bg-[#fafaf7] text-[#2b2b2b]">

      {/* ---------- HERO ---------- */}
      <section className="relative bg-gradient-to-br from-[#fdf6e9] to-[#f3efe6] py-28 px-6 text-center overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#fde68a]/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#fdba74]/30 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Shop with Purpose —
            <span className="block text-[#d97706]">
              Every Purchase Saves Lives
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Our upcoming store brings you thoughtfully made products
            where every purchase supports animals, seniors, and community care.
          </p>
        </div>
      </section>

      {/* ---------- COMING SOON ---------- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-[#fde68a] text-[#92400e] font-semibold rounded-full mb-4">
            🚧 Coming Soon
          </span>
          <h2 className="text-3xl font-bold">
            What You’ll Find in Our Store
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <CategoryCard
            title="Signature Sauces"
            items={[
              "Butter Chicken Sauce",
              "Tamarind Chutney",
              "Garlic Cream Sauce",
            ]}
          />

          <CategoryCard
            title="Herbal Iced Teas"
            items={[
              "Cinnamon Turmeric",
              "Tulsi Ginger",
            ]}
          />

          <CategoryCard
            title="Merchandise"
            items={[
              "T-shirts",
              "Hoodies",
              "Tote bags",
            ]}
          />

          <CategoryCard
            title="Digital Products"
            items={[
              "Journals",
              "Planners",
              "Animal rescue guides",
              "Healing templates",
            ]}
          />

        </div>
      </section>

      {/* ---------- CTA SECTION ---------- */}
      <section className="bg-[#2b2b2b] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Until the Shop Opens,
            <span className="block text-[#facc15]">
              You Can Still Make an Impact
            </span>
          </h2>

          <p className="text-lg text-gray-300 mb-10">
            Your support helps fund rescues, meals, medical care,
            and sanctuary operations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              disabled
              className="opacity-60 cursor-not-allowed bg-gray-500 px-10 py-4 rounded-full font-semibold"
            >
              Shop Now (Coming Soon)
            </button>

            <a
              href="https://www.zeffy.com/en-US/donation-form/dce7d771-9492-4623-8508-d0e3096e1853"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d97706] hover:bg-[#b45309] px-10 py-4 rounded-full font-semibold transition"
            >
              Support with Monthly Donation
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

/* ---------- COMPONENT ---------- */
function CategoryCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-5 text-[#d97706]">
        {title}
      </h3>
      <ul className="space-y-2 text-gray-700">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#d97706] rounded-full" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
