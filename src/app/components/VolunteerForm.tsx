"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function VolunteerForm() {
  const [state, handleSubmit] = useForm("xaqqoord");

  if (state.succeeded) {
    return (
      <div className="text-center mt-10">
        <h3 className="text-2xl font-semibold text-[#9cab3a]">
          Thank you for volunteering 💚
        </h3>
        <p className="mt-3 opacity-80">
          We’ll get back to you very soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-6">
      {/* NAME */}
      <input
        type="text"
        name="name"
        required
        placeholder="Full Name"
        className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9cab3a]"
      />

      {/* EMAIL */}
      <input
        type="email"
        name="email"
        required
        placeholder="Email Address"
        className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9cab3a]"
      />

      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      {/* PHONE */}
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9cab3a]"
      />

      {/* MESSAGE */}
      <textarea
        name="message"
        required
        placeholder="How would you like to help?"
        className="border rounded-xl px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-[#9cab3a]"
      />

      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      <button
        type="submit"
        disabled={state.submitting}
        className="btn-primary mx-auto px-12 disabled:opacity-50 rounded-2xl border-2 "
      >
        {state.submitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
