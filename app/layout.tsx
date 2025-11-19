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
  title: "Aide à Domicile Rezé, Bouguenais, Bouaye | VES et Vous - Crédit Impôt 50%",
  description: "Profitez de votre famille ! VES et Vous : ménage, garde d'enfants, repassage à Rezé et alentours. Crédit d'impôt 50%, intervenants qualifiés, 100% clients satisfaits. Devis gratuit 📞",
  keywords: "aide à domicile Rezé, ménage à domicile Bouguenais, femme de ménage Bouaye, garde d'enfants La Montagne, repassage à domicile Saint-Jean-de-Boiseau, nettoyage bureau Rezé, services ménagers 44, CESU, crédit impôt 50%, services à la personne",
  authors: [{ name: "VES et Vous" }],
  openGraph: {
    title: "VES et Vous | Services à Domicile Rezé - Crédit Impôt 50%",
    description: "Profitez de votre famille ! Ménage, garde d'enfants, repassage à Rezé, Bouguenais, Bouaye. Intervenants qualifiés, 100% clients satisfaits.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "VES et Vous - Services à Domicile Loire-Atlantique",
    description: "Ménage, garde d'enfants, repassage. Crédit d'impôt 50%. Rezé et communes voisines.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
