import Link from "next/link";
import { FaDog, FaCat, FaHorse,  FaPaw
 } from "react-icons/fa";
import { GiGoat } from "react-icons/gi";


export default function VirtualAdoptionTeaser() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#090909]">
          Adopt a Life With Your Heart
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Support animals who cannot be adopted into homes — but depend on humans for survival.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          <AdoptionCard icon={<  FaPaw
 />} title="Sponsor a Cow" />
          <AdoptionCard icon={<FaDog />} title="Sponsor a Dog" />
          <AdoptionCard icon={<FaCat />} title="Sponsor a Cat" />
                    <AdoptionCard icon={<FaHorse />} title="Sponsor a Horse" />

        </div>

       <Link
  href="/virtual-adoption"
  className="
    inline-flex items-center justify-center
    mt-12 px-8 py-4
    rounded-full
    bg-[#9cab3a]
    text-white font-semibold text-lg
    shadow-lg
    hover:bg-[#a8ba33]
    hover:scale-[1.03]
    transition-all duration-300
    focus:outline-none focus-visible:ring-4 focus-visible:ring-[#2E7D32]/40
  "
>
  Start Virtual Adoption
</Link>

      </div>
    </section>
  );
}

function AdoptionCard({ icon, title }: any) {
  return (
    <div className="bg-[#f5f3e7] rounded-2xl p-8 shadow-md hover:shadow-xl transition">
      <div className="text-5xl text-[#9cab3a] mb-4 mx-auto w-fit">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#2E7D32]">{title}</h3>
      <p className="text-gray-600">
        Monthly care including food, medical support, shelter, and love.
      </p>
    </div>
  );
}
