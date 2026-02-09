"use client"

import { motion } from "framer-motion"
import { Rocket, Github, Twitter, Linkedin } from "lucide-react"

const footerLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#stats" },
  { label: "Contact", href: "#footer" },
]

const socialLinks = [
  { label: "GitHub", icon: <Github className="h-4 w-4" />, href: "#" },
  { label: "Twitter", icon: <Twitter className="h-4 w-4" />, href: "#" },
  { label: "LinkedIn", icon: <Linkedin className="h-4 w-4" />, href: "#" },
]

export function Footer() {
  return (
    <footer id="footer" className="relative z-10 px-6 pb-8 pt-20">
      <div className="mx-auto max-w-6xl">
        {/* Divider */}
        <div className="mb-12 h-px bg-gradient-to-r from-transparent via-[rgba(122,60,255,0.2)] to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-10 md:flex-row md:justify-between"
        >
          {/* Brand */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#001EA3] to-[#7A3CFF]">
                <Rocket className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">UPYB</span>
            </div>
            <p className="text-center text-xs text-[hsl(220,15%,40%)] md:text-left">
              Designed for the Future.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-sm text-[hsl(220,15%,45%)] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] text-[hsl(220,15%,45%)] transition-all hover:border-[rgba(122,60,255,0.3)] hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="text-[11px] tracking-widest text-[hsl(220,15%,25%)] uppercase">
            {"Designed for the Future"}
          </p>
          <p className="text-xs text-[hsl(220,15%,30%)]">
            &copy; {new Date().getFullYear()} UPYB. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  )
}
