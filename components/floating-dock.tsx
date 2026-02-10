"use client";
import { motion } from "framer-motion";
import { Home, Rocket, Briefcase, Mail } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Base", icon: Home, id: "home" },
  { name: "Expertise", icon: Rocket, id: "services" },
  { name: "Projets", icon: Briefcase, id: "portfolio" },
  { name: "Contact", icon: Mail, id: "contact" },
];

export function FloatingDock() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        {navItems.map((item, index) => (
          <motion.button
            key={item.name}
            onHoverStart={() => setHovered(index)}
            onHoverEnd={() => setHovered(null)}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="relative p-3 rounded-full bg-white/5 border border-white/5 text-white hover:bg-upyb-blue/50 hover:border-upyb-purple/50 transition-colors group"
          >
            <item.icon size={20} />
            
            {/* Tooltip futuriste */}
            {hovered === index && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: -45, scale: 1 }}
                className="absolute left-1/2 -translate-x-1/2 -top-2 px-3 py-1 bg-black border border-white/20 text-xs rounded-md whitespace-nowrap"
              >
                {item.name}
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}