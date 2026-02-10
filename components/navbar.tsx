"use client"
import { motion } from "framer-motion"
import { Rocket, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link" // IMPORTANT

const navLinks = [
  { label: "Accueil", href: "/#hero" }, // Ajout du / pour marcher depuis /start
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 right-0 left-0 z-[100]" // Z-INDEX AUGMENTÉ À 100
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2.5 z-50">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#001EA3] to-[#7A3CFF]">
            <Rocket className="h-4.5 w-4.5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">UPYB</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm text-[hsl(220,20%,65%)] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA - LE BOUTON QUI DOIT MARCHER */}
        <Link
          href="/start"
          className="hidden rounded-full bg-gradient-to-r from-[#001EA3] to-[#7A3CFF] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-[0_0_24px_rgba(122,60,255,0.4)] md:inline-flex z-50 hover:scale-105 active:scale-95"
        >
          Démarrer
        </Link>

        {/* Mobile Burger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden z-50"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div className="glass-card mx-4 rounded-2xl p-4 md:hidden relative z-40 bg-[#02020A]/90 backdrop-blur-xl border border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm text-[hsl(220,20%,65%)] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/start"
            className="mt-2 block rounded-full bg-gradient-to-r from-[#001EA3] to-[#7A3CFF] px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Démarrer
          </Link>
        </motion.div>
      )}
    </motion.header>
  )
}