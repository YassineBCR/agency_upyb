"use client";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative z-10 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-4xl"
      >
        {/* Effet de lueur derrière la carte */}
        <div className="absolute -inset-4 bg-gradient-to-r from-upyb-blue to-upyb-purple opacity-30 blur-2xl rounded-[3rem]" />

        {/* La Carte Contact */}
        <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden">
            
            {/* Décoration interne */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Colonne Gauche : Appel à l'action */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Prêt à décoller ?
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        Vous avez un projet ambitieux ? Une idée folle ? 
                        Discutons de la manière dont nous pouvons la concrétiser ensemble.
                    </p>
                    
                    <div className="flex flex-col gap-4 text-sm text-gray-400">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                <MapPin size={18} className="text-upyb-purple" />
                            </div>
                            <span>Montpellier, France & autres</span>
                         </div>
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                <Mail size={18} className="text-upyb-blue" />
                            </div>
                            <span>contact@upyb.fr</span>
                         </div>
                    </div>
                </div>

                {/* Colonne Droite : Bouton Géant */}
                <div className="flex justify-center md:justify-end">
                    <motion.a
                        href="mailto:hello@upyb.agency"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex flex-col items-center justify-center w-64 h-64 rounded-full bg-gradient-to-br from-upyb-blue/20 to-upyb-purple/20 border border-white/20 cursor-pointer overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-upyb-blue to-upyb-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10 flex flex-col items-center gap-3">
                            <Send size={40} className="text-white group-hover:rotate-45 transition-transform duration-300" />
                            <span className="text-lg font-semibold tracking-wide text-white">Nous Contacter</span>
                        </div>
                    </motion.a>
                </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
}