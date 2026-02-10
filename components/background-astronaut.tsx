"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Définition du type pour nos objets flottants (fusées)
type FloatingItem = {
  id: number;
  startX: number;
  endX: number;
  duration: number;
  delay: number;
  scale: number;
};

export function BackgroundAstronaut() {
  const [rockets, setRockets] = useState<FloatingItem[]>([]);

  useEffect(() => {
    // Génération des fusées côté client
    const items = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      startX: Math.random() * 100,
      endX: Math.random() * 100,
      duration: 20 + Math.random() * 30,
      delay: Math.random() * 15,
      scale: 0.2 + Math.random() * 0.3,
    }));
    setRockets(items);
  }, []);

  return (
    // Conteneur principal en fond (z-index très bas)
    <div className="fixed inset-0 z-[-5] pointer-events-none overflow-hidden select-none bg-transparent">
      
      {/* ========================================= */}
      {/* --- 1. ASTRONAUTE PRINCIPAL (Premier plan relatif) --- */}
      {/* ========================================= */}
      <motion.div
        initial={{ x: "-20vw", y: "120vh", rotate: -45, opacity: 0 }}
        animate={{
          x: "120vw",
          y: "-20vh",
          rotate: 15,
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 45,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          delay: 0,
        }}
        className="absolute z-10 w-[200px] h-[200px] md:w-[350px] md:h-[350px] filter blur-[0.5px] mix-blend-lighten"
      >
         <Image
            src="/astronaut.png"
            alt="Floating Astronaut"
            fill
            className="object-contain drop-shadow-[0_0_30px_rgba(122,60,255,0.2)]"
            priority={false}
         />
      </motion.div>




      {/* ========================================= */}
      {/* --- 3. PETITES FUSÉES (Arrière-plan lointain) --- */}
      {/* ========================================= */}
      {rockets.map((rocket) => (
        <motion.div
          key={rocket.id}
          initial={{ 
            left: `${rocket.startX}vw`, 
            top: "110vh", 
            opacity: 0,
            rotate: -45 
          }}
          animate={{
            left: `${rocket.endX}vw`,
            top: "-10vh",
            opacity: [0, 0.5, 0.5, 0], 
          }}
          transition={{
            duration: rocket.duration,
            ease: "linear",
            repeat: Infinity,
            delay: rocket.delay,
          }}
          style={{ scale: rocket.scale }}
          className="absolute z-0 w-[150px] h-[150px] filter blur-[1px] opacity-60"
        >
           <Image
              src="/rocket.png" 
              alt="Mini Rocket"
              fill
              className="object-contain drop-shadow-[0_0_15px_rgba(255,100,50,0.4)]"
           />
        </motion.div>
      ))}
    </div>
  );
}