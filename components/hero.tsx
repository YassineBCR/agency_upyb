"use client"

import { motion } from "framer-motion"
import { Rocket, ArrowRight, Eye } from "lucide-react"

export function Hero() {
  return (
    <section
      id="hero"
      className="noise-overlay relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20"
    >
      {/* Aurora background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="animate-aurora absolute -top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full opacity-30 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #001EA3 0%, transparent 70%)",
          }}
        />
        <div
          className="animate-aurora absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: "radial-gradient(circle, #7A3CFF 0%, transparent 70%)",
            animationDelay: "4s",
          }}
        />
        <div
          className="animate-aurora absolute -bottom-1/4 left-1/3 h-[400px] w-[400px] rounded-full opacity-15 blur-[80px]"
          style={{
            background: "radial-gradient(circle, #001EA3 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 mb-8"
      >
        <div className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-[#7A3CFF] shadow-[0_0_8px_rgba(122,60,255,0.6)]" />
          <span className="text-xs font-medium tracking-wide text-[hsl(220,20%,65%)] uppercase">
            Agence SaaS & Design Futuriste
          </span>
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 max-w-4xl text-center text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
      >
        <span className="text-balance bg-gradient-to-r from-white via-[hsl(220,20%,85%)] to-white bg-clip-text text-transparent">
          Propulsez votre Business
        </span>
        <br />
        <span className="text-balance bg-gradient-to-r from-[#4A7AFF] via-[#7A3CFF] to-[#4A7AFF] bg-clip-text text-transparent">
          vers l{"'"}infini.
        </span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="relative z-10 mt-6 max-w-xl text-center text-base text-[hsl(220,15%,55%)] sm:text-lg"
      >
        Nous concevons des produits digitaux premium qui transforment
        votre vision en une experience hors du commun.
      </motion.p>

      {/* Rocket Orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        className="relative z-10 my-12"
      >
        <div className="relative flex h-40 w-40 items-center justify-center sm:h-52 sm:w-52">
          {/* Orbiting ring */}
          <div className="animate-orbit absolute inset-0 rounded-full border border-[rgba(122,60,255,0.15)]" />
          <div
            className="animate-orbit absolute -inset-4 rounded-full border border-[rgba(0,30,163,0.1)]"
            style={{ animationDuration: "30s", animationDirection: "reverse" }}
          />
          {/* Glow */}
          <div className="animate-pulse-glow absolute inset-4 rounded-full bg-gradient-to-br from-[#001EA3]/20 to-[#7A3CFF]/20 blur-sm" />
          {/* Inner orb */}
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-gradient-to-br from-[#001EA3]/30 to-[#7A3CFF]/30 backdrop-blur-xl sm:h-32 sm:w-32">
            <Rocket className="h-10 w-10 text-white sm:h-12 sm:w-12" />
          </div>
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="relative z-10 flex flex-col items-center gap-4 sm:flex-row"
      >
        <a
          href="#portfolio"
          className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#001EA3] to-[#7A3CFF] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-[0_0_32px_rgba(122,60,255,0.4)]"
        >
          {"Décoller maintenant"}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <a
          href="#portfolio"
          className="glass-card group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-[hsl(220,20%,75%)] transition-all hover:text-white"
        >
          <Eye className="h-4 w-4" />
          Voir le portfolio
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium tracking-widest text-[hsl(220,15%,35%)] uppercase">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-[hsl(220,15%,35%)] to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
