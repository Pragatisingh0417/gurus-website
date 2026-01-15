// src/app/adoption/components/AnimalsGrid.tsx
import AnimalCard from "./AnimalCard";

export default function AnimalsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">

      {/* Puppies */}
      <div>
        <h2 className="section-title">🐶 Dogs and  Puppies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <AnimalCard image="/images/309A7140.JPG" />
          <AnimalCard image="/images/309A7091.JPG" />
          <AnimalCard image="/images/309A7094.JPG" />
                    <AnimalCard image="/images/309A7150.JPG" />

          <AnimalCard image="/images/309A7108.JPG" />

          <AnimalCard image="/images/309A7137.JPG" />

          <AnimalCard image="/images/309A7165.JPG" />

        </div>
      </div>

      {/* Kittens */}
      <div>
        <h2 className="section-title">🐱 Cats and kittens</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <AnimalCard image="/images/kitten-1.jpeg" />
                    <AnimalCard image="/images/kitten-2.jpg" />
                              <AnimalCard image="/images/kitten-3.jpeg" />


        </div>
      </div>

      {/* Special Needs */}
      <div>
        <h2 className="section-title">❤️ Cows</h2>
        <p className="text-[#3E2723]/80 text-center mt-5 font-bold">
          These animals may need extra care, but they give extra love.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <AnimalCard image="/images/cow-1.jpeg" />
                    <AnimalCard image="/images/cow-2.jpeg" />

          <AnimalCard image="/images/cow-3.jpeg" />
                    <AnimalCard image="/images/cow-4.jpeg" />

          <AnimalCard image="/images/cow-5.jpeg" />

          <AnimalCard image="/images/cow-6.jpeg" />
                    <AnimalCard image="/images/cow-8.jpeg" />



        </div>
      </div>

    </section>
  );
}
