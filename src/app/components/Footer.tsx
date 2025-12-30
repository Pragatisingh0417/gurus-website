"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f5f3e7] text-[#3E2723] border-t border-[#9cab3a]/30">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* MINI MISSION */}
        <div>
          <h3 className="text-xl font-bold text-[#9cab3a] mb-3">
            Meals That Heal
          </h3>
          <p className="text-sm leading-relaxed text-[#3E2723]/90 mb-4">
            Every meal, every donation, and every act of kindness helps us
            rescue, shelter, and care for animals and vulnerable communities.
          </p>

          <Link
            href="https://www.zeffy.com/en-US/donation-form/dce7d771-9492-4623-8508-d0e3096e1853" target="blank"
            className="inline-flex items-center gap-2 bg-[#db9c3d] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#c98c2f] transition"
          >
            <Heart size={16} />
            Donate Now
          </Link>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#9cab3a] mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-[#db9c3d]">About Us</Link></li>
            <li><Link href="/animal-adoption" className="hover:text-[#db9c3d]">Virtual Adoption</Link></li>
                        <li><Link href="/virtual-adoption" className="hover:text-[#db9c3d]">Animal Adoption</Link></li>

            <li><Link href="/tiffin" className="hover:text-[#db9c3d]">Tiffin & Meals</Link></li>
            <li><Link href="/shop" className="hover:text-[#db9c3d]">Shop</Link></li>
            <li><Link href="/contact" className="hover:text-[#db9c3d]">Contact</Link></li>
          </ul>
        </div>

        {/* SOCIAL + CONTACT */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#9cab3a] mb-4">
            Stay Connected
          </h4>

          <div className="flex items-center gap-4 mb-4">
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-full bg-white shadow hover:text-[#db9c3d] transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-full bg-white shadow hover:text-[#db9c3d] transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-full bg-white shadow hover:text-[#db9c3d] transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="mailto:info@gurufoundation.org"
              aria-label="Email"
              className="p-2 rounded-full bg-white shadow hover:text-[#db9c3d] transition"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-xs text-[#3E2723]/70">
            Follow our journey and see how your support changes lives every day.
          </p>
        </div>
      </div>

      {/* DISCLAIMER BAR */}
      <div className="border-t border-[#9cab3a]/20 bg-[#f0eddc]">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-[#3E2723]/70 space-y-2">
          <p>
            © {new Date().getFullYear()} Gem Web Services. All rights reserved.
          </p>
          <p>
            Registered Non-Profit Organization • Donations may be tax-deductible
            as per applicable laws.
          </p>
        </div>
      </div>
    </footer>
  );
}
