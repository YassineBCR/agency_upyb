"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function BentoPortfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="text-3xl md:text-5xl font-bold mb-12 text-center md:text-left"
        >
          Dernières Missions <span className="text-upyb-purple">.</span>
        </motion.h2>

        {/* GRILLE BENTO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          
          {/* PROJET 1 (Large - Prend 2 colonnes) */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden group border border-white/10 bg-[#0A0A0A]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
            
            {/* Remplacer src par une vraie image de projet plus tard */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 group-hover:scale-105 transition-transform duration-700">
                {/* Simulation d'interface */}
                <div className="absolute top-10 left-10 right-0 bottom-0 bg-slate-950 rounded-tl-2xl border-t border-l border-white/10 shadow-2xl p-6">
                    <div className="flex gap-4 mb-6">
                        <div className="w-32 h-8 bg-white/10 rounded-lg animate-pulse" />
                        <div className="w-20 h-8 bg-white/5 rounded-lg" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-32 bg-blue-500/10 rounded-xl border border-blue-500/20" />
                        <div className="h-32 bg-purple-500/10 rounded-xl border border-purple-500/20" />
                        <div className="h-32 bg-emerald-500/10 rounded-xl border border-emerald-500/20" />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Alpha Dashboard</h3>
                  <p className="text-gray-400">Plateforme SaaS B2B • Fintech</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          </motion.div>

          {/* PROJET 2 (Vertical) */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-1 relative rounded-3xl overflow-hidden group border border-white/10 bg-[#0A0A0A]"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black group-hover:scale-105 transition-transform duration-700">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-purple-500 rounded-full blur-[80px] opacity-50" />
                </div>
             </div>
             <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-2xl font-bold mb-2">Neon Commerce</h3>
                <p className="text-gray-400">Expérience 3D WebGL</p>
             </div>
          </motion.div>

          {/* PROJET 3 (Standard) */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-1 relative rounded-3xl overflow-hidden group border border-white/10 bg-[#0A0A0A]"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-black group-hover:scale-105 transition-transform duration-700"></div>
             <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-2xl font-bold mb-2">Eco Track</h3>
                <p className="text-gray-400">App Mobile & IA</p>
             </div>
          </motion.div>

          {/* PROJET 4 (Large Bas) */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden group border border-white/10 bg-[#0A0A0A] flex items-center justify-center"
          >
             <div className="text-center z-20">
                <h3 className="text-3xl font-bold mb-4">Votre Projet Ici ?</h3>
                <button className="px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                    Démarrer la collaboration
                </button>
             </div>
             {/* Particules de fond */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}