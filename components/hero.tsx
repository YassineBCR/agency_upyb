"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link"; // IMPORTER LINK

export function Hero3D() {
  // ... (Garder tout le code existant pour motion values) ...
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <section 
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden perspective-1000 bg-transparent"
    >
      {/* ... (Garder le fond ambiance existant) ... */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-upyb-night/40 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-upyb-purple/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      </div>

      <div className="container relative z-10 flex flex-col items-center px-4">
        
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] cursor-pointer group mb-6"
        >
          <div style={{ transform: "translateZ(-40px)" }} className="absolute inset-10 bg-upyb-gradient rounded-full blur-[80px] opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
          <motion.div style={{ transform: "translateZ(40px)" }} className="relative w-full h-full drop-shadow-2xl">
            <img src="/logo-upyb.png" alt="UPYB Logo" className="object-contain w-full h-full"/>
          </motion.div>
        </motion.div>

        <div className="text-center relative z-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-6"
          >
            <button className="upyb-text-effect text-6xl md:text-9xl font-bold" data-text="UPYB">
                <span className="actual-text">&nbsp;UPYB&nbsp;</span>
                <span aria-hidden="true" className="hover-text">&nbsp;UPYB&nbsp;</span>
            </button>
          </motion.div>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-sans text-upyb-light text-lg md:text-2xl tracking-wide font-light opacity-90 max-w-2xl mx-auto"
          >
            Nous propulsons votre Visibilité et votre Empreinte Numérique.
          </motion.p>
          
          {/* CTA Démarrer la Collaboration */}
          {/* On met un z-index élevé (30) pour passer au dessus des effets visuels */}
          <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.9 }}
             className="mt-10 relative z-30" 
          >
            <Link 
                href="/start" 
                className="inline-block px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white text-white hover:text-black transition-all font-heading text-sm uppercase tracking-widest cursor-pointer hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
                Démarrer la collaboration
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}