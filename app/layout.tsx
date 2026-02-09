import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'UPYB - Up Your Business | Agence SaaS & Design Futuriste',
  description: 'Propulsez votre business vers l\'infini avec UPYB. Agence SaaS premium spécialisée en design futuriste, développement web et solutions digitales innovantes.',
}

export const viewport: Viewport = {
  themeColor: '#000510',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
