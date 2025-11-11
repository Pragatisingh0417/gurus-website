// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Guru Combined Site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Root layout should NOT render a site header/footer for sections
  // that have their own layouts (guardian-angels, guru-newtown).
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
