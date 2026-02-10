"use client";
import { motion } from "framer-motion";
import { Code, Cpu, Layers, Rocket } from "lucide-react";

const services = [
  {
    title: "SaaS Development",
    description: "Architecture robuste et scalable pour des applications web critiques. Next.js, React, Node.",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Design 3D Immersif",
    description: "Expériences WebGL et Three.js qui captivent vos utilisateurs et augmentent la conversion.",
    icon: Layers,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Stratégie Produit",
    description: "De l'idée au MVP. Nous transformons votre vision en une roadmap claire et efficace.",
    icon: Rocket,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Intelligence Artificielle",
    description: "Intégration de LLM et d'agents IA pour automatiser et enrichir vos interfaces.",
    icon: Cpu,
    gradient: "from-emerald-500 to-teal-500",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Notre Expertise
          </h2>
          <p className="text-gray-400 max-w-xl text-lg">
            Nous fusionnons design futuriste et ingénierie de pointe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors overflow-hidden h-full"
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}