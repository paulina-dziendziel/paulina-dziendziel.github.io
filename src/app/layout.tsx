import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Navigation from "./_components/navigation";
import ScrollToTop from "./_components/ScrollToTop";
import { fontHeader, fontBody } from "./fonts";

export const metadata: Metadata = {
  title: "Artekadry Paulina Dziendziel Fotografia",
  description: "Fotorelacje, fotografia ślubna, rodzinna, dziecięca, chrzest i komunia, sesje portretowe. Malowanie ze zdjęć. Scrapbooking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={fontBody.className + " text-lg font-light bg-orange-25"}>
        <Navigation />
        {children}
        <footer className="container relative" style={{ lineHeight: '3rem' }}>
          <ScrollToTop />
          <div className="text-gray-500 text-center">&copy; 2024 Paulina Dziendziel | <Link href="/kontakt" className="text-link">Kontakt</Link></div>
        </footer>
      </body>
    </html>
  );
}
