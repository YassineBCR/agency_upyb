"use client";
import { useEffect } from "react";
import { Montserrat, Hind_Madurai } from "next/font/google";
import Lenis from "lenis";
import "./globals.css";

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
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical', 
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    // --- AJOUT IMPORTANT : Rendre Lenis accessible globalement ---
    // @ts-ignore
    window.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      // @ts-ignore
      window.lenis = null;
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="fr"> 
      <body
        className={`${montserrat.variable} ${hind.variable} font-sans antialiased bg-upyb-deep text-upyb-white`}
        suppressHydrationWarning={true}
      >
        <div className="noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}