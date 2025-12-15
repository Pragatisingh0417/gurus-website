import Link from "next/link";
import { Heart, PawPrint, Utensils, ShoppingBag } from "lucide-react";

export default function HomeActions() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-[#9cab3a] via-[#b6b84a] to-[#db9c3d]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            How You Can Make a Difference
          </h2>
          <p className="text-white/90 mt-2">
            Choose how you’d like to support rescued animals today
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Donate */}
          <Link
            href="/donate"
            className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <Heart className="mx-auto mb-4 text-red-500 w-10 h-10 group-hover:scale-110 transition" />
            <h3 className="text-lg font-semibold text-gray-800">Donate</h3>
            <p className="text-sm text-gray-600 mt-2">
              Support rescue, food & medical care
            </p>
          </Link>

          {/* Virtual Adoption */}
          <Link
            href="/virtual-adoption"
            className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <PawPrint className="mx-auto mb-4 text-[#9cab3a] w-10 h-10 group-hover:scale-110 transition" />
            <h3 className="text-lg font-semibold text-gray-800">
              Virtual Adoption
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Sponsor an animal monthly with love
            </p>
          </Link>

          {/* Tiffin */}
          <Link
            href="/tiffin"
            className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <Utensils className="mx-auto mb-4 text-[#db9c3d] w-10 h-10 group-hover:scale-110 transition" />
            <h3 className="text-lg font-semibold text-gray-800">
              Tiffin Service
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Eat good food, do good deeds
            </p>
          </Link>

          {/* Shop */}
          <Link
            href="/shop"
            className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <ShoppingBag className="mx-auto mb-4 text-gray-700 w-10 h-10 group-hover:scale-110 transition" />
            <h3 className="text-lg font-semibold text-gray-800">
              Shop
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Every purchase helps animals
            </p>
          </Link>

        </div>
      </div>
    </section>
  );
}
