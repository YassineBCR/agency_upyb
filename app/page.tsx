"use client";
import { FloatingDock } from "@/components/floating-dock";
import { Hero3D } from "@/components/hero";
import { Services } from "@/components/services";
import { BentoPortfolio } from "@/components/bento-portfolio";
import { CursorGlow } from "@/components/cursor-glow";
import { BackgroundAstronaut } from "@/components/background-astronaut";
// Import du nouveau composant Météores
import { Meteors } from "@/components/meteors";

export default function Home() {
  return (
   <main className="min-h-screen relative overflow-x-hidden selection:bg-upyb-purple selection:text-white bg-transparent">
      
      {/* 1. ÉTOILES FIXES (CSS) */}
      <div className="stars-wrapper">
        <div className="stars-1"></div>
        <div className="stars-2"></div>
        <div className="stars-3"></div>
      </div>

{/* 2. PLUIE DE MÉTÉORES */}
<div className="fixed inset-0 pointer-events-none z-[-15] overflow-hidden">
   {/* Passe de 25 à 40 ou 50 pour une vraie pluie de météores */}
   <Meteors number={40} /> 
</div>
      {/* 3. Le reste du site */}
      <BackgroundAstronaut />
      <CursorGlow />
      <FloatingDock />
      
      <Hero3D />
      <Services />
      <BentoPortfolio />

      <footer className="py-12 text-center text-white/40 text-sm border-t border-white/5 mt-20 relative z-10">
        <p>&copy; 2026 UPYB Agency. Designed for the Future.</p>
      </footer>

    </main>
  );
}