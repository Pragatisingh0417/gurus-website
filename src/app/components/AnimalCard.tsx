import Image from "next/image";

export type Animal = {
  name: string;
  age: string;
  description: string;
  image: string;
};

export default function AnimalCard({
  name,
  age,
  description,
  image,
}: Animal) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#2E7D32]">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">{age}</p>
        <p className="text-sm text-[#3E2723]/80">{description}</p>
      </div>
    </div>
  );
}
