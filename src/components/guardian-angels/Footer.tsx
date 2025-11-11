// src/components/guru-newtown/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-red-700 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Guru’s Newtown</h3>
          <p className="text-sm text-gray-200">
            Building a bright future with care, creativity, and education.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/guru-newtown/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/guru-newtown/programs" className="hover:underline">Programs</Link></li>
            <li><Link href="/guru-newtown/enrollment" className="hover:underline">Admissions</Link></li>
            <li><Link href="/guru-newtown/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <p className="text-sm">123 Main Street, Newtown, PA</p>
          <p className="text-sm">Email: info@gurusnewtown.com</p>
          <p className="text-sm">Phone: (215) 968-5700</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-300 mt-10">
        © {new Date().getFullYear()} Guru’s Newtown. All Rights Reserved.
      </div>
    </footer>
  );
}
