import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doxel Kanda | L'Architecte Digital",
  description: "Portfolio de Doxel Kanda - Développeur d'applications Web & Mobile de prestige.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white overflow-x-hidden`}
      >
        {/* 1. Le moteur de scroll fluide enveloppe tout */}
        <SmoothScroll>
          
          {/* 2. La Navigation est fixe au-dessus de tout */}
          <Navbar />

          {/* 3. Le contenu principal de tes pages */}
          {children}

          {/* 4. Un footer minimaliste pour clore l'empire */}
          <footer className="py-12 border-t border-white/5 bg-black/50 text-center">
            <p className="text-[10px] tracking-[0.5em] text-stone-600 uppercase">
              Établi à Kinshasa — {new Date().getFullYear()}
            </p>
          </footer>

        </SmoothScroll>
      </body>
    </html>
  );
}