"use client"

import { motion } from "framer-motion"
import { Target, Layers, Users, Clock } from "lucide-react"
import type { ReactNode } from "react"

interface Stat {
  value: string
  label: string
  icon: ReactNode
}

const stats: Stat[] = [
  {
    value: "100%",
    label: "Satisfaction",
    icon: <Target className="h-5 w-5" />,
  },
  {
    value: "50+",
    label: "Projets livres",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    value: "30+",
    label: "Clients actifs",
    icon: <Users className="h-5 w-5" />,
  },
  {
    value: "24/7",
    label: "Support premium",
    icon: <Clock className="h-5 w-5" />,
  },
]

export function Stats() {
  return (
    <section id="stats" className="relative z-10 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-semibold tracking-widest text-[#7A3CFF] uppercase">
            En chiffres
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {"L'excellence"}
            <span className="bg-gradient-to-r from-[#4A7AFF] to-[#7A3CFF] bg-clip-text text-transparent">
              {" "}mesurable
            </span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-500"
            >
              {/* Subtle top glow */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(122,60,255,0.3)] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] text-[#7A3CFF]">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-[hsl(220,15%,50%)]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[rgba(255,255,255,0.04)] bg-gradient-to-r from-[#001EA3]/10 to-[#7A3CFF]/10 p-8 backdrop-blur-sm sm:flex-row sm:rounded-full sm:p-6 sm:px-10"
        >
          <div>
            <h3 className="text-lg font-semibold text-white">
              {"Pret a decoller ?"}
            </h3>
            <p className="text-sm text-[hsl(220,15%,50%)]">
              {"Discutons de votre prochain projet ambitieux."}
            </p>
          </div>
          <a
            href="#footer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#001EA3] to-[#7A3CFF] px-7 py-3 text-sm font-semibold text-white transition-all hover:shadow-[0_0_32px_rgba(122,60,255,0.4)]"
          >
            Nous contacter
          </a>
        </motion.div>
      </div>
    </section>
  )
}
