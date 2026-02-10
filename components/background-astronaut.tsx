"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function BackgroundAstronaut() {
  return (
    // Conteneur positionné en fond (z-index bas)
    <div className="fixed inset-0 z-[-5] pointer-events-none overflow-hidden select-none">
      <motion.div
        // Position de départ : hors écran en bas à gauche, un peu tourné
        initial={{ x: "-20%", y: "120vh", rotate: -45, opacity: 0 }}
        // Position d'arrivée : hors écran en haut à droite, tourné différemment
        animate={{
          x: "120vw",
          y: "-20vh",
          rotate: 45, 
          opacity: [0, 0.8, 0.8, 0], // Apparaît doucement puis disparaît à la fin
        }}
        // Configuration de l'animation : très lente et infinie
        transition={{
          duration: 45, // Met 45 secondes à traverser l'écran (très lent)
          ease: "linear",
          repeat: Infinity, // Recommence à l'infini
          repeatType: "loop",
          delay: 2, // Attend 2 secondes avant de commencer la première fois
        }}
        // Styles de l'image : taille, flou léger pour la profondeur, mix-blend
        className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] filter blur-[1px] mix-blend-lighten opacity-80"
      >
         {/* Assure-toi d'avoir astronaut.png dans ton dossier public */}
         <Image
            src="/astronaut.png"
            alt="Floating Astronaut in background"
            fill
            className="object-contain drop-shadow-[0_0_30px_rgba(122,60,255,0.3)]"
            priority={false} // Pas prioritaire au chargement
         />
      </motion.div>
    </div>
  );
}