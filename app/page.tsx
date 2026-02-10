"use client";
import { FloatingDock } from "@/components/floating-dock";
import { Hero3D } from "@/components/hero";
import { About } from "@/components/about"; // <--- 1. IMPORT IMPORTANT
import { Services } from "@/components/services";
import { BentoPortfolio } from "@/components/bento-portfolio";
import { CursorGlow } from "@/components/cursor-glow";
import { BackgroundAstronaut } from "@/components/background-astronaut";
import { Meteors } from "@/components/meteors";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
   <main className="min-h-screen relative overflow-x-hidden selection:bg-upyb-purple selection:text-white bg-transparent">
      
      <div className="stars-wrapper">
        <div className="stars-1"></div>
        <div className="stars-2"></div>
        <div className="stars-3"></div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-[-15] overflow-hidden">
         <Meteors number={40} /> 
      </div>

      <BackgroundAstronaut />
      <CursorGlow />
      <FloatingDock />
      
      <Hero3D />
      
      {/* 2. PLACEMENT DE LA SECTION ICI */}
      <About />
      
      <Services />
      <BentoPortfolio />
      <Contact />

      <footer className="py-12 text-center text-white/40 text-sm border-t border-white/5 mt-20 relative z-10">
        <p>&copy; 2026 UPYB Agency. Designed for the Future.</p>
      </footer>

    </main>
  );
}