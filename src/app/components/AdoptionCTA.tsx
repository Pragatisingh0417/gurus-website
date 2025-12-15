// src/app/adoption/components/AdoptionCTA.tsx
import Link from "next/link";

export default function AdoptionCTA() {
  return (
    <section className="bg-[#2E7D32] text-white text-center py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Change a Life?
      </h2>
      <p className="max-w-xl mx-auto mb-8 opacity-90">
        Adoption saves lives. Start your journey today.
      </p>
      <Link href="/contact" className="btn-secondary">
        Contact Us
      </Link>
    </section>
  );
}
