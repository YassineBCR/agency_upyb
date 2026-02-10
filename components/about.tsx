"use client";
import { motion } from "framer-motion";
import { TrendingUp, Target, Zap } from "lucide-react";

export function About() {
  return (
    // C'est cet ID "about" que le bouton cherche
    <section id="about" className="py-24 relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[3rem] p-8 md:p-16 overflow-hidden">
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-upyb-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-upyb-purple/20 border border-upyb-purple/30 text-upyb-purple text-xs font-bold uppercase tracking-widest mb-6">
                <Zap size={14} />
                Agence de Croissance
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Nous ne sommes pas des développeurs. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Nous sommes des accélérateurs.
                </span>
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Le web est rempli de jolis sites qui ne vendent rien. 
                  Chez <span className="text-white font-bold">UPYB</span>, nous avons une autre approche.
                </p>
                <p>
                  Nous fusionnons <strong>Design Futuriste</strong>, <strong>Stratégie Marketing</strong> et <strong>Technologie de Pointe</strong> pour un seul objectif : votre croissance.
                </p>
                <p>
                  Que vous soyez une start-up en plein décollage ou un commerce local qui veut dominer sa ville, nous construisons l'infrastructure numérique qui fera passer votre business au niveau supérieur.
                </p>
              </div>
            </motion.div>

            <div className="space-y-6">
               
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="flex items-start gap-4 p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-white/10 transition-colors"
               >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Croissance Mesurable</h3>
                    <p className="text-sm text-gray-400">
                      Fini le flou. Nous nous concentrons sur les métriques qui comptent : Trafic, Leads, Ventes.
                    </p>
                  </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="flex items-start gap-4 p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-white/10 transition-colors"
               >
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Stratégie 360°</h3>
                    <p className="text-sm text-gray-400">
                      Un écosystème complet : Site Web + Google + Réseaux Sociaux. Tout est connecté pour maximiser votre impact.
                    </p>
                  </div>
               </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}