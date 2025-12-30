import Image from "next/image";

type Props = {
  image: string;
};

export default function AnimalCard({ image }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt="Animal for adoption"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
