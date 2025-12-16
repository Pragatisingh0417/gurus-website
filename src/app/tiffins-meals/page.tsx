"use client";

export default function TiffinsMealsPage() {
  return (
    <main className="bg-[#fafaf7] text-[#2b2b2b]">

      {/* ---------------- HERO ---------------- */}
      <section className="bg-[#f3efe6] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Tiffins & Healing Meals
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Fresh, home-cooked vegetarian meals prepared with love —  
          nourishing people while supporting animals in need.
        </p>
      </section>

      {/* ---------------- WHAT WE OFFER ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-14">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <OfferCard
            title="Daily Tiffins (Pickup)"
            description="Available every day from 12–2 PM at Guru’s. Bring your own tiffin or use our eco-friendly platter."
          />
          <OfferCard
            title="Sunday Delivery (Philadelphia)"
            description="Weekly delivery with a rotating menu. Fresh, homemade, healing meals delivered with care."
          />
          <OfferCard
            title="Weekly & Monthly Meal Plans"
            description="Ideal for families, seniors, students, and busy professionals."
          />
          <OfferCard
            title="Small Catering Orders"
            description="For birthdays, office lunches, gatherings, and intimate events."
          />
        </div>
      </section>

      {/* ---------------- MEAL DETAILS ---------------- */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <InfoBlock title="Pickup Hours">
            Daily pickup available <strong>12:00 PM – 2:00 PM</strong> at Guru’s.
          </InfoBlock>

          <InfoBlock title="Delivery Schedule">
            Weekly Sunday deliveries in <strong>Philadelphia & nearby areas</strong>.
          </InfoBlock>

          <InfoBlock title="Meal Plans">
            Flexible weekly or monthly plans tailored to your needs.
          </InfoBlock>

          <InfoBlock title="Pricing / Donation">
            Meals are offered on a <strong>donation-based structure</strong>.  
            Your contribution directly supports animals and people in need.
          </InfoBlock>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE OUR TIFFIN ---------------- */}
      <section className="bg-[#fdf6e9] py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Our Tiffin?
        </h2>

        <div className="max-w-4xl mx-auto text-lg space-y-4">
          <p>Because your meal:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Pays for fodder</li>
            <li>Buys medicines</li>
            <li>Supports emergency rescues</li>
            <li>Helps raise orphaned puppies</li>
            <li>Feeds senior citizens in need</li>
          </ul>

          <p className="mt-6 font-medium">
            You’re not just eating.  
            <span className="block text-xl mt-2">You’re saving lives.</span>
          </p>
        </div>
      </section>

      {/* ---------------- TIFFIN REQUEST FORM ---------------- */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Request Tiffin or Meals
        </h2>

        <form className="grid gap-6 bg-white p-8 rounded-xl shadow-md">
          <input className="input" placeholder="Full Name" />
          <input className="input" placeholder="Phone Number" />

          <select className="input">
            <option>Pickup or Delivery</option>
            <option>Pickup</option>
            <option>Delivery</option>
          </select>

          <input className="input" placeholder="Quantity" />

          <input
            className="input"
            placeholder="Dietary Needs (e.g. low salt, no onion)"
          />

          <textarea
            className="input h-28"
            placeholder="Notes"
          />

          <button className="bg-[#d97706] hover:bg-[#b45309] text-white font-semibold py-3 rounded-full transition">
            Request Tiffin
          </button>
        </form>
      </section>

      {/* ---------------- TAGLINE ---------------- */}
      <section className="bg-[#2b2b2b] text-white py-12 text-center px-6">
        <p className="text-lg italic">
          “अन्नं बहु कुर्वीत — may this food become someone’s blessing today.”
        </p>
      </section>

    </main>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function OfferCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-700">{children}</p>
    </div>
  );
}
