import type { Metadata } from "next";
import { Montserrat, Hind_Madurai } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll"; // Assure-toi d'avoir créé ce fichier comme vu juste avant

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700"],
});

const hind = Hind_Madurai({
  subsets: ["latin"],
  variable: "--font-hind",
  weight: ["400", "500", "600"],
});

// Configuration SEO & Réseaux Sociaux (Basée sur tes balises OpenGraph)
export const metadata: Metadata = {
  // L'URL de base est indispensable pour que l'image s'affiche partout
  metadataBase: new URL('https://www.upyb.fr'),

  title: {
    default: "UPYB - Agence Digitale de Croissance",
    template: "%s | UPYB"
  },
  description: "Nous ne sommes pas des simples développeurs. Nous sommes des accélérateurs. Découvrez notre approche 360°.",

  // Open Graph (Facebook, LinkedIn, WhatsApp, iMessage...)
  openGraph: {
    title: "UPYB - Agence Digitale de Croissance",
    description: "Nous ne sommes pas des simples développeurs. Nous sommes des accélérateurs. Découvrez notre approche 360°.",
    url: "https://www.upyb.fr/",
    siteName: "UPYB",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png", // Next.js ira chercher l'image dans le dossier public
        width: 1200,
        height: 630,
        alt: "UPYB - Agence Digitale de Croissance",
      },
    ],
  },

  // Twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "UPYB - Agence Digitale de Croissance",
    description: "Nous ne sommes pas des simples développeurs. Nous sommes des accélérateurs. Découvrez notre approche 360°.",
    images: ["/opengraph-image.png"], // On utilise la même image
  },

  // Icônes du navigateur
  icons: {
    icon: "/logo-upyb.png",
    shortcut: "/logo-upyb.png",
    apple: "/logo-upyb.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${hind.variable} font-sans antialiased bg-upyb-deep text-upyb-white`}
        suppressHydrationWarning={true}
      >
        <SmoothScroll />
        <div className="noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}