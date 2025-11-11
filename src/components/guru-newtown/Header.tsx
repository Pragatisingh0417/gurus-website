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
    <header className="bg-[#F5F3E7]/90 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-[#E5D9C7]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* ✅ Logo / Brand */}
        <Link
          href="/guru-newtown"
          className="text-2xl font-bold text-[#2E7D32] hover:text-[#D35400] transition"
        >
          Guru’s Newtown
        </Link>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[#3E2723] hover:text-[#D35400] transition ${
                  isActive ? "font-semibold text-[#2E7D32]" : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden text-[#2E7D32] hover:text-[#D35400] transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#F5F3E7] border-t border-[#E5D9C7] shadow-md"
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block text-lg transition ${
                        isActive
                          ? "text-[#2E7D32] font-semibold"
                          : "text-[#3E2723] hover:text-[#D35400]"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
