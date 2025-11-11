"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/guru-newtown" },
  { name: "About Us", href: "/guru-newtown/about" },
  { name: "Gallery", href: "/guru-newtown/gallery" },
  { name: "Catering", href: "/guru-newtown/catering" },
  { name: "Menu", href: "/guru-newtown/menu" },
  { name: "Contact", href: "/guru-newtown/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* 🔸 Top Accent Strip */}
      <div className="h-2 bg-gradient-to-r from-[#D35400] via-[#F4A261] to-[#2E7D32]" />

      {/* 🔸 Main Header */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gradient-to-r from-[#F5F3E7] via-[#F7F5EB] to-[#F5F3E7]/95 backdrop-blur-md border-b border-[#E5D9C7] shadow-lg"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* ✅ Logo */}
          <Link href="/guru-newtown" className="flex items-center gap-3">
            <img
              src="/logo/newtown-logo.png"
              alt="Guru’s Newtown Logo"
              className="h-14 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* ✅ Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-medium text-[16px] tracking-wide transition-all duration-300 
                    ${
                      isActive
                        ? "text-[#2E7D32]"
                        : "text-[#3E2723] hover:text-[#D35400]"
                    } group`}
                >
                  {item.name}
                  {/* Animated underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-[#D35400] to-[#2E7D32] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ✅ Right Button */}
          <div className="hidden md:flex">
            <Link
              href="/guru-newtown/contact"
              className="bg-gradient-to-r from-[#D35400] to-[#2E7D32] text-white px-5 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Reserve Now
            </Link>
          </div>

          {/* ✅ Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#2E7D32] hover:text-[#D35400] transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.div>

      {/* ✅ Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#F5F3E7] border-t border-[#E5D9C7] shadow-lg"
          >
            <ul className="flex flex-col items-center py-5 space-y-5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block text-lg font-medium transition ${
                        isActive
                          ? "text-[#2E7D32]"
                          : "text-[#3E2723] hover:text-[#D35400]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}

              {/* Mobile CTA */}
              <li>
                <Link
                  href="/guru-newtown/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block bg-gradient-to-r from-[#D35400] to-[#2E7D32] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Reserve Now
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
