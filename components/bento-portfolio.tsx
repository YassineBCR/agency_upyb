"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // IMPORTER LINK

// ... (Garder votre configuration projects existante) ...
const projects = [

  {

    id: 1,

    title: "Aid Montpellier",

    category: "CRM COMPLET POUR LA GESTION D'UNE SOCIÉTÉ D'EVENEMENTIEL",

    image: "/project-1.jpg",

    colSpan: "md:col-span-2",

    link: "https://app-aid-abattoir.vercel.app/", // REMPLACEZ PAR LE VRAI LIEN

  },

  {

    id: 2,

    title: "Alex'entiel Events",

    category: "SITE VITRINE POUR UNE WEEDING PLANNER",

    image: "/project-2.jpg",

    colSpan: "md:col-span-1",

    link: "https://alexentielevents.fr/", // REMPLACEZ PAR LE VRAI LIEN

  },

  {

    id: 3,

    title: "Convergence Montpellier",

    category: "WEB APP DE SONDAGE POUR UNE COMMUNAUTÉ",

    image: "/project-3.jpg",

    colSpan: "md:col-span-1",

    link: "https://montpellier-horizon-45rf.vercel.app/", // REMPLACEZ PAR LE VRAI LIEN

  },

];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          
          {projects.map((project) => (
            <motion.a 
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01 }}
              className={`${project.colSpan} relative rounded-3xl overflow-hidden group border border-white/10 bg-[#0A0A0A] block cursor-pointer`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
              <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                 <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 />
              </div>
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">{project.title}</h3>
                    <p className="text-gray-300 font-medium drop-shadow-md text-sm md:text-base">{project.category}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 shadow-lg">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}

          {/* --- DERNIÈRE CARTE : MISE À JOUR ICI --- */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden group border border-white/10 bg-[#0A0A0A] flex items-center justify-center"
          >
             <div className="text-center z-20 relative">
                <h3 className="text-3xl font-bold mb-4">Votre Projet Ici ?</h3>
                
                {/* Nouveau Lien vers /start */}
                <Link 
                    href="/start" 
                    className="inline-block px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                    Démarrer la collaboration
                </Link>
                
             </div>
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-br from-upyb-blue/20 to-upyb-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}