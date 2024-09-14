import type { Metadata } from "next";
import Link from 'next/link'
import localFont from "next/font/local";
import Image from 'next/image'
import "./globals.css";
import Navigation from "./_components/navigation";

import { Inter } from "next/font/google";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({ subsets: ["latin"] });

// TO:
// elegancko, ale bez MUI z Tailwind
// https://medium.com/@a.pirus/how-to-create-a-responsive-navigation-bar-in-next-js-13-e5540789a017

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
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html >
  );
}
