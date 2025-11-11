"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/guru-newtown" },
  { name: "About Us", href: "/guru-newtown/about" },
  { name: "ways-to-give", href: "/guru-newtown/ways-to-give" },
  { name: "Gallery", href: "/guru-newtown/gallery" },
  { name: "volunteer", href: "/guru-newtown/volunteer" },
    { name: "Adopt", href: "/guru-newtown/adopt" },

  { name: "Contact", href: "/guru-newtown/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/guru-newtown" className="text-2xl font-bold text-red-700">
         guardian-angels
        </Link>

        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-gray-700 hover:text-red-700 transition ${
                pathname === item.href ? "font-semibold text-red-700" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
