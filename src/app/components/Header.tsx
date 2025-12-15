"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [adoptionOpen, setAdoptionOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300
      ${scrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-md py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo/gurus logo bg remove .png"
            alt="Guru Foundation"
            className="h-14 w-auto"
          />
          <div>
            <h4 className="font-bold text-[#9cab3a]">Guru Foundation</h4>
            <p className="text-xs text-gray-500">Serving with compassion</p>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative hover:text-[#db9c3d]
              ${isActive(item.href) ? "text-[#9cab3a]" : "text-gray-700"}`}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#db9c3d]" />
              )}
            </Link>
          ))}

          {/* ADOPTION DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setAdoptionOpen(true)}
            onMouseLeave={() => setAdoptionOpen(false)}
          >
            <button
              aria-expanded={adoptionOpen}
              className="flex items-center gap-1 text-gray-700 hover:text-[#db9c3d]"
            >
              Adoption <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {adoptionOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-3 w-56 rounded-xl bg-white text-gray-700 shadow-lg border"
                >
                  <Link className="block px-4 py-3 hover:bg-[#f5f3e7]" href="/virtual-adoption">
                    Virtual Adoption
                  </Link>
                  <Link className="block px-4 py-3 hover:bg-[#f5f3e7]" href="/animal-adoption">
                    Animals Available
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/senior-support" className="text-gray-700 hover:text-[#db9c3d]">
            Senior Citizen Support
          </Link>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-700 hover:text-[#db9c3d]">
              Services <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-3 w-56 rounded-xl bg-white text-gray-700  shadow-lg border"
                >
                  <Link className="block px-4 py-3 hover:bg-[#f5f3e7]" href="/tiffin">
                    Tiffin & Meals
                  </Link>
                  <Link className="block px-4 py-3 hover:bg-[#f5f3e7]" href="/catering">
                    Catering
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/shop" className="text-gray-700 hover:text-[#db9c3d]">Shop</Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#db9c3d]">Contact</Link>

          {/* CTA */}
          <Link
            href="/donate"
            className="ml-4 bg-[#db9c3d] text-white px-5 py-2 rounded-full hover:bg-[#c98c2f]"
          >
            Donate
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-[#9cab3a]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t shadow-lg"
          >
            <div className="px-6 py-6 space-y-4 text-[#9cab3a] font-medium">

              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>

              {/* MOBILE ADOPTION */}
              <button
                className="flex items-center justify-between w-full"
                onClick={() => setAdoptionOpen(!adoptionOpen)}
              >
                Adoption
                <ChevronDown className={`${adoptionOpen ? "rotate-180" : ""} transition`} />
              </button>

              {adoptionOpen && (
                <div className="pl-4 space-y-2 text-sm">
                  <Link href="/virtual-adoption">Virtual Adoption</Link>
                  <Link href="/animal-adoption">Animals Available</Link>
                </div>
              )}

              {/* MOBILE SERVICES */}
              <button
                className="flex items-center justify-between w-full"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className={`${servicesOpen ? "rotate-180" : ""} transition`} />
              </button>

              {servicesOpen && (
                <div className="pl-4 space-y-2 text-sm">
                  <Link href="/tiffin">Tiffin & Meals</Link>
                  <Link href="/catering">Catering</Link>
                </div>
              )}

              <Link href="/shop">Shop</Link>
              <Link href="/contact">Contact</Link>

              <Link
                href="/donate"
                className="block text-center bg-[#db9c3d] text-white py-2 rounded-full"
              >
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
