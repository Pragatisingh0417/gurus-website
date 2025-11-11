"use client";

import Header from "@/components/guardian-angels/Header";
import Footer from "@/components/guardian-angels/Footer";

export default function GuruNewtownLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans">
      {/* Custom Header for Guru's Newtown */}
      <Header />

      <main className="min-h-screen">{children}</main>

      {/* Custom Footer for Guru's Newtown */}
      <Footer />
    </div>
  );
}
