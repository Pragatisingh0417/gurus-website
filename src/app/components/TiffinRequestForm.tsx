"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

export default function TiffinRequestForm() {
  const [state, handleSubmit] = useForm("xaqqoord");
  const [showForm, setShowForm] = useState(true);

  if (!showForm && state.succeeded) {
    return (
      <div className="text-center space-y-4 py-20">
        <p className="text-green-600 font-semibold text-lg">
          Request submitted successfully 🍱
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="bg-[#d97706] hover:bg-[#b45309] text-white font-semibold px-6 py-3 rounded-full transition"
        >
          Request Another Tiffin
        </button>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Request Tiffin or Meals
      </h2>

      <form
        onSubmit={async (e) => {
          await handleSubmit(e);
          setShowForm(false);
        }}
        className="grid gap-6 bg-white p-8 rounded-xl shadow-md"
      >
        <input
          name="name"
          required
          className="input"
          placeholder="Full Name"
        />

        <input
          name="phone"
          required
          className="input"
          placeholder="Phone Number"
        />

        {/* ✅ DATE PICKER */}
        <input
          type="date"
          name="tiffin_date"
          required
          className="input"
        />

        <select name="service_type" className="input" required>
          <option value="">Pickup or Delivery</option>
          <option value="Pickup">Pickup</option>
          <option value="Delivery">Delivery</option>
        </select>

        <input
          name="quantity"
          className="input"
          placeholder="Quantity"
        />

        <input
          name="dietary_needs"
          className="input"
          placeholder="Dietary Needs (e.g. low salt, no onion)"
        />

        <textarea
          name="notes"
          className="input h-28"
          placeholder="Notes"
        />

        <ValidationError errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-[#d97706] hover:bg-[#b45309] disabled:opacity-50 text-white font-semibold py-3 rounded-full transition"
        >
          {state.submitting ? "Sending..." : "Request Tiffin"}
        </button>
      </form>
    </section>
  );
}
