import type { Metadata } from "next";
import { Montserrat, Hind_Madurai } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll"; // On importe le composant créé

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

// C'est ici que l'on gère le SEO et l'affichage sur les réseaux
export const metadata: Metadata = {
  metadataBase: new URL('https://www.upyb.fr'),
  title: {
    default: "UPYB - AGENCY",
    template: "%s | UPYB"
  },
  description: "Nous propulsons votre Visibilité et votre Empreinte Numérique. Design Futuriste, Stratégie Marketing & Technologie de Pointe.",
  
  // Icône dans l'onglet du navigateur
  icons: {
    icon: "/logo-upyb.png",
    shortcut: "/logo-upyb.png",
    apple: "/logo-upyb.png",
  },

  // Affichage lors du partage du lien (WhatsApp, LinkedIn, iMessage...)
  openGraph: {
    title: "UPYB - Agence Digitale de Croissance",
    description: "Nous ne sommes pas des simples développeurs. Nous sommes des accélérateurs. Découvrez notre approche 360°.",
    url: "https://www.upyb.fr",
    siteName: "UPYB Agency",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo-upyb.png", // Idéalement, remplace par une image 'opengraph-image.png' format 1200x630
        width: 1200,
        height: 630,
        alt: "UPYB Agence Digitale",
      },
    ],
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