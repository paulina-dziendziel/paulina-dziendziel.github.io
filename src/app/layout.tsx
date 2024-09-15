import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./_components/navigation";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
