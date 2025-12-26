// src/app/adoption/components/AnimalsGrid.tsx
import AnimalCard from "./AnimalCard";

export default function AnimalsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">

      {/* Puppies */}
      <div>
        <h2 className="section-title">🐶 Puppies</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <AnimalCard
            name="Bruno"
            age="3 months"
            description="Playful, vaccinated, and looking for a loving home."
            image="/images/309A7165.JPG"
          />
        </div>
      </div>

      {/* Kittens */}
      <div>
        <h2 className="section-title">🐱 Kittens</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <AnimalCard
            name="Misty"
            age="2 months"
            description="Rescued orphan, gentle and affectionate."
            image="/animals/kitten-1.jpg"
          />
        </div>
      </div>

      {/* Special Needs */}
      <div>
        <h2 className="section-title">❤️ Special Needs Animals</h2>
        <p className="text-[#3E2723]/80 max-w-2xl">
          These animals may need extra care, but they give extra love.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <AnimalCard
            name="Lucky"
            age="4 years"
            description="Paralyzed back legs, cheerful spirit."
            image="/animals/special-1.jpg"
          />
        </div>
      </div>

    </section>
  );
}
