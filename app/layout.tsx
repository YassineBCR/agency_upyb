"use client"; // Important pour Lenis et useEffect
import { useEffect } from "react";
import { Montserrat, Hind_Madurai } from "next/font/google";
import Lenis from "lenis";
import "./globals.css";

// Configuration des polices
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700"],
});

const hind = Hind_Madurai({
  subsets: ["latin"],
  variable: "--font-hind",
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // Activation du Smooth Scroll (Lenis)
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${hind.variable} font-sans antialiased bg-upyb-deep text-upyb-white`}
        suppressHydrationWarning={true}
      >
        {/* CORRECTION : La texture est maintenant DANS le body */}
        <div className="noise-overlay"></div>
        
        {children}
      </body>
    </html>
  );
}