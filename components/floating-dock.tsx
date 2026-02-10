"use client";
import { motion } from "framer-motion";
import { Home, Zap, Rocket, Briefcase, Mail } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Base", icon: Home, href: "#hero" },
  { name: "Agence", icon: Zap, href: "#about" }, // Cible l'id="about"
  { name: "Expertise", icon: Rocket, href: "#services" },
  { name: "Projets", icon: Briefcase, href: "#portfolio" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

export function FloatingDock() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<number | null>(null);

  // Fonction de scroll robuste
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, index: number) => {
    e.preventDefault(); // Bloque le saut instantané
    setActiveTab(index);

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // 1. Essayer avec Lenis (si disponible) pour l'effet "luxe"
      // @ts-ignore
      if (window.lenis) {
         // @ts-ignore
         window.lenis.scrollTo(element);
      } 
      // 2. Sinon, utiliser le scroll fluide natif du navigateur
      else {
         element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      console.warn(`Attention: La section ${href} n'existe pas sur la page.`);
    }
  };

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href, index)}
            onHoverStart={() => setHovered(index)}
            onHoverEnd={() => setHovered(null)}
            whileHover={{ scale: 1.2, y: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`
              relative p-3 rounded-full border transition-all duration-300 group flex items-center justify-center
              ${activeTab === index 
                ? "bg-upyb-blue/80 border-upyb-purple text-white shadow-[0_0_20px_rgba(122,60,255,0.5)]" 
                : "bg-white/5 border-white/5 text-white hover:bg-upyb-blue/50 hover:border-upyb-purple/50"
              }
            `}
          >
            <item.icon size={20} />
            
            {/* Tooltip */}
            {hovered === index && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.8 }}
                animate={{ opacity: 1, y: 10, scale: 1 }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 bg-black border border-white/20 text-xs rounded-md whitespace-nowrap pointer-events-none"
              >
                {item.name}
              </motion.div>
            )}
            
            {/* Indicateur actif */}
            {activeTab === index && (
              <motion.div
                layoutId="active-pill"
                className="absolute -bottom-1 w-1 h-1 bg-white rounded-full"
              />
            )}
          </motion.a>
        ))}
      </div>
    </div>
  );
}