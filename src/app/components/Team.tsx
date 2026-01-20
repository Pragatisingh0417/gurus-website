// components/about/Team.tsx
import Image from "next/image";

const team = [
  {
    name: "Ashni Kumar & Priya Guru",
    role: "Co-Founders",
    img: "/images/about-1.jpg",
    desc: "Driven by spirituality, compassion, and lifelong care for animals.",
  },
  {
    name: "Susan Davis-Kienscherf",
    role: "Operations & Programs",
    img: "/images/about-3.jpg",
    desc: "Animal rights advocate and experienced program manager.",
  },
];

export default function Team() {
  return (
    <section className="max-w-8xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#9cab3a]">
        Meet the Team
      </h2>

      {/* CENTERED GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <Image
              src={member.img}
              alt={member.name}
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="font-bold">{member.name}</h4>
            <p className="text-sm text-[#9cab3a]">{member.role}</p>
            <p className="text-sm mt-2">{member.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
