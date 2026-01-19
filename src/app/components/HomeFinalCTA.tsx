import Link from "next/link";

export default function HomeFinalCTA() {
  return (
    <section className="bg-[#db9c3d] text-white py-16 text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Be the Reason They Survive
      </h2>
      <p className="mb-8 max-w-2xl mx-auto">
        Your monthly support gives animals food, medicine, shelter, and dignity.
      </p>
      <Link href="https://www.zeffy.com/en-US/donation-form/dce7d771-9492-4623-8508-d0e3096e1853"   className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#db9c3d] transition"

      
      target="blank" 
      
      >
        Start Helping Today
      </Link>
    </section>
  );
}
