"use client"

import { motion } from "framer-motion"
import { LayoutDashboard, ShoppingCart, BrainCircuit, Globe, Palette, Zap } from "lucide-react"
import type { ReactNode } from "react"

interface PortfolioItem {
  title: string
  description: string
  icon: ReactNode
  gradient: string
  tag: string
  span: string
}

const items: PortfolioItem[] = [
  {
    title: "SaaS Dashboard",
    description: "Interface analytique temps-reel avec visualisations de donnees avancees et design obsidian.",
    icon: <LayoutDashboard className="h-6 w-6" />,
    gradient: "from-[#001EA3]/20 to-[#0040FF]/10",
    tag: "Dashboard",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "E-Commerce 3D",
    description: "Experience d'achat immersive avec visualisation produit en trois dimensions.",
    icon: <ShoppingCart className="h-6 w-6" />,
    gradient: "from-[#7A3CFF]/20 to-[#5A1FDB]/10",
    tag: "E-Commerce",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "AI Platform",
    description: "Plateforme d'intelligence artificielle avec interface conversationnelle avancee.",
    icon: <BrainCircuit className="h-6 w-6" />,
    gradient: "from-[#001EA3]/15 to-[#7A3CFF]/15",
    tag: "AI / ML",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Web App Premium",
    description: "Applications web haute performance deployees a l'echelle mondiale.",
    icon: <Globe className="h-6 w-6" />,
    gradient: "from-[#7A3CFF]/15 to-[#001EA3]/10",
    tag: "Web App",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Brand Identity",
    description: "Systemes de design complets pour marques tech ambitieuses.",
    icon: <Palette className="h-6 w-6" />,
    gradient: "from-[#001EA3]/20 to-[#7A3CFF]/10",
    tag: "Branding",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Performance Ops",
    description: "Optimisation et infrastructure pour des produits ultra-rapides.",
    icon: <Zap className="h-6 w-6" />,
    gradient: "from-[#7A3CFF]/20 to-[#001EA3]/15",
    tag: "DevOps",
    span: "md:col-span-1 md:row-span-1",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative z-10 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-semibold tracking-widest text-[#7A3CFF] uppercase">
            Portfolio
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Des projets qui repoussent{" "}
            <span className="bg-gradient-to-r from-[#4A7AFF] to-[#7A3CFF] bg-clip-text text-transparent">
              les limites
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[hsl(220,15%,50%)]">
            Chaque projet est concu comme une mission spatiale : precision, innovation et resultats exceptionnels.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[200px]"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.04)] bg-gradient-to-br ${item.gradient} p-6 backdrop-blur-sm transition-all duration-500 hover:border-[rgba(122,60,255,0.25)] hover:shadow-[0_0_40px_rgba(122,60,255,0.08)] ${item.span}`}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7A3CFF]/0 to-[#001EA3]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-[#7A3CFF]/5 group-hover:to-[#001EA3]/5" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] text-[hsl(220,20%,70%)] transition-colors group-hover:text-white">
                      {item.icon}
                    </div>
                    <span className="rounded-full border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-3 py-1 text-[10px] font-medium tracking-wider text-[hsl(220,15%,50%)] uppercase">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[hsl(220,15%,45%)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
