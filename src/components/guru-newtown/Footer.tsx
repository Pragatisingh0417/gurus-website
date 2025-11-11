// src/components/guru-newtown/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2E7D32] text-[#F5F3E7] pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* ✅ Column 1 - About */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#FFF8E1]">
            Guru’s Newtown
          </h3>
          <p className="text-sm leading-relaxed text-[#E8E5D0]">
            Building a bright future with care, creativity, and education.
            Where young minds grow in harmony with nature and knowledge.
          </p>
        </div>

        {/* ✅ Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#FFF8E1]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/guru-newtown/about"
                className="hover:text-[#D35400] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/guru-newtown/programs"
                className="hover:text-[#D35400] transition-colors"
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                href="/guru-newtown/enrollment"
                className="hover:text-[#D35400] transition-colors"
              >
                Admissions
              </Link>
            </li>
            <li>
              <Link
                href="/guru-newtown/contact"
                className="hover:text-[#D35400] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* ✅ Column 3 - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#FFF8E1]">
            Contact Info
          </h3>
          <p className="text-sm text-[#E8E5D0]">
            123 Main Street, Newtown, PA
          </p>
          <p className="text-sm text-[#E8E5D0]">Email: info@gurusnewtown.com</p>
          <p className="text-sm text-[#E8E5D0]">Phone: (215) 968-5700</p>
        </div>
      </div>

      {/* ✅ Bottom Bar */}
      <div className="mt-10 border-t border-[#E5D9C7]/30 pt-4 text-center text-xs text-[#E8E5D0]">
        © {new Date().getFullYear()} <span className="font-semibold">Guru’s Newtown</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
