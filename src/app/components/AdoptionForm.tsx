// src/app/adoption/components/AdoptionForm.tsx
"use client";

export default function AdoptionForm() {
  return (
    <section className="bg-[#f5f3e7] py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2E7D32]">
            Adoption Application
          </h2>
          <p className="mt-4 text-[#3E2723]/80">
            Thank you for choosing to adopt. Please share a few details so we can
            ensure the best match for both you and the animal.
          </p>
        </div>

        {/* Form Card */}
        <div className="mt-12 bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-[#3E2723] mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3
                  focus:outline-none focus:ring-2 focus:ring-[#9cab3a] focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#3E2723] mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3
                  focus:outline-none focus:ring-2 focus:ring-[#9cab3a]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-[#3E2723] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full rounded-xl border border-gray-300 px-4 py-3
                  focus:outline-none focus:ring-2 focus:ring-[#9cab3a]"
              />
            </div>

            {/* Preferred Animal */}
            <div>
              <label className="block text-sm font-medium text-[#3E2723] mb-2">
                Preferred Animal
              </label>
              <select
                className="w-full rounded-xl border border-gray-300 px-4 py-3
                  focus:outline-none focus:ring-2 focus:ring-[#9cab3a]"
              >
                <option>Select an option</option>
                <option>Dog / Puppy</option>
                <option>Cat / Kitten</option>
                <option>Special Needs Animal</option>
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#3E2723] mb-2">
                Why do you want to adopt?
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your home, experience with animals, and why you'd like to adopt."
                className="w-full rounded-xl border border-gray-300 px-4 py-3
                  focus:outline-none focus:ring-2 focus:ring-[#9cab3a]"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center
                  bg-[#db9c3d] hover:bg-[#c98c2f] text-white
                  font-semibold px-10 py-3 rounded-full
                  transition shadow-lg"
              >
                Submit Application
              </button>

              <p className="mt-4 text-xs text-gray-500">
                Our team will review your application and contact you within 2–3 days.
              </p>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
