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
            <h4 className="font-bold text-[#9cab3a]">Guru's Foundation</h4>
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
                  <Link className="block px-4 py-3 hover:bg-[#f5f3e7]" href="/tiffins-meals">
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

          


          {/* CTA BUTTON */}
        <a
          href="https://www.zeffy.com/en-US/donation-form/dce7d771-9492-4623-8508-d0e3096e1853"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <button className="group inline-flex items-centerml-4 bg-[#db9c3d] text-white px-5 py-2 rounded-full hover:bg-[#c98c2f]">
            Donate 
            <span className="group-hover:translate-x-1 transition-transform">
              
            </span>
          </button>
        </a>
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
     {/* ================= MOBILE MENU ================= */}
<AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="md:hidden bg-white border-t shadow-lg overflow-hidden"
    >
      <div className="px-6 py-6 flex flex-col gap-4 text-[#9cab3a] font-medium">

        {/* MAIN LINKS */}
        <Link href="/" onClick={() => setMenuOpen(false)} className="py-2">
          Home
        </Link>

        <Link href="/about" onClick={() => setMenuOpen(false)} className="py-2">
          About
        </Link>

        {/* ADOPTION */}
        <button
          className="flex items-center justify-between py-2"
          onClick={() => setAdoptionOpen(!adoptionOpen)}
        >
          Adoption
          <ChevronDown
            className={`transition-transform ${adoptionOpen ? "rotate-180" : ""}`}
          />
        </button>

        {adoptionOpen && (
          <div className="ml-4 flex flex-col gap-2 text-sm text-gray-700">
            <Link href="/virtual-adoption" onClick={() => setMenuOpen(false)}>
              Virtual Adoption
            </Link>
            <Link href="/animal-adoption" onClick={() => setMenuOpen(false)}>
              Animals Available
            </Link>
          </div>
        )}

        {/* SERVICES */}
        <button
          className="flex items-center justify-between py-2"
          onClick={() => setServicesOpen(!servicesOpen)}
        >
          Services
          <ChevronDown
            className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
          />
        </button>

        {servicesOpen && (
          <div className="ml-4 flex flex-col gap-2 text-sm text-gray-700">
            <Link href="/tiffins-meals" onClick={() => setMenuOpen(false)}>
              Tiffin & Meals
            </Link>
            <Link href="/catering" onClick={() => setMenuOpen(false)}>
              Catering
            </Link>
          </div>
        )}

        <Link href="/shop" onClick={() => setMenuOpen(false)} className="py-2">
          Shop
        </Link>

        <Link href="/contact" onClick={() => setMenuOpen(false)} className="py-2">
          Contact
        </Link>

        {/* CTA */}
        <a
          href="https://www.zeffy.com/en-US/donation-form/dce7d771-9492-4623-8508-d0e3096e1853"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-center bg-[#db9c3d] text-white py-3 rounded-full font-semibold"
        >
          Donate
        </a>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
}
