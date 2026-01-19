"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function CateringRequestForm() {
  const [state, handleSubmit] = useForm("FORM_ID_HERE"); // 🔁 change only this for client

  if (state.succeeded) {
    return (
      <p className="text-center text-green-600 font-semibold">
        Catering request submitted successfully 🍽️
      </p>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-center mb-10">
        Request Catering
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 bg-white p-10 rounded-3xl shadow-xl"
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

        <input
          name="event_type"
          required
          className="input"
          placeholder="Event Type"
        />

        <input
          name="guest_count"
          required
          className="input"
          placeholder="Number of Guests"
        />

        <input
          type="date"
          name="event_date"
          required
          className="input"
        />

        <textarea
          name="menu_notes"
          className="input h-32"
          placeholder="Menu preferences / Notes"
        />

        <ValidationError errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-[#d97706] hover:bg-[#b45309] disabled:opacity-50 text-white font-semibold py-4 rounded-full text-lg transition"
        >
          {state.submitting ? "Sending..." : "Request Catering"}
        </button>
      </form>
    </section>
  );
}
