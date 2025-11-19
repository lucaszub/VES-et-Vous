import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VES et Vous | Aide à Domicile Rezé, Bouguenais, Bouaye - Ménage, Garde d'Enfants, Repassage",
  description: "Service d'aide à domicile à Rezé, Bouguenais, Bouaye : ménage domicile et bureaux, garde d'enfants, repassage. Devis gratuit par téléphone.",
  keywords: "aide à domicile Rezé, ménage à domicile Bouguenais, femme de ménage Bouaye, garde d'enfants La Montagne, repassage à domicile Saint-Jean-de-Boiseau, nettoyage bureau Rezé, services ménagers 44, CESU, crédit impôt 50%",
  authors: [{ name: "VES et Vous" }],
  openGraph: {
    title: "VES et Vous | Aide à Domicile Rezé, Bouguenais, Bouaye",
    description: "Ménage domicile et bureaux, garde d'enfants, repassage à Rezé, Bouguenais, Bouaye, La Montagne, Saint-Jean-de-Boiseau. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "VES et Vous - Aide à Domicile Loire-Atlantique",
    description: "Ménage, garde d'enfants, repassage. Rezé, Bouguenais, Bouaye et communes voisines.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VES et Vous",
    "description": "Services d'aide à domicile : ménage, garde d'enfants, repassage à Rezé, Bouguenais, Bouaye, La Montagne et Saint-Jean-de-Boiseau",
    "telephone": "+33603163070",
    "email": "sandra.venturini44@gmail.com",
    "areaServed": [
      {
        "@type": "City",
        "name": "Rezé"
      },
      {
        "@type": "City",
        "name": "Bouguenais"
      },
      {
        "@type": "City",
        "name": "Bouaye"
      },
      {
        "@type": "City",
        "name": "La Montagne"
      },
      {
        "@type": "City",
        "name": "Saint-Jean-de-Boiseau"
      }
    ],
    "priceRange": "25€/heure",
    "openingHours": "Mo-Fr 08:00-20:00, Sa 09:00-18:00",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services à domicile",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ménage à Domicile et Bureaux",
            "description": "Service de ménage régulier ou ponctuel pour domiciles et locaux professionnels"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garde d'Enfants à Domicile",
            "description": "Garde d'enfants occasionnelle ou régulière avec sorties d'école"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Repassage à Domicile",
            "description": "Service de repassage professionnel à domicile ou avec retrait/livraison"
          }
        }
      ]
    }
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
