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
  title: "VES et Vous - Ménage, Garde d'Enfants & Repassage | Rezé, Bouguenais, Bouaye",
  description: "Services à domicile personnalisés : ménage complet, garde d'enfants +3 ans, repassage. Intervention à Rezé, Bouguenais, Bouaye, La Montagne, Saint-Jean-de-Boiseau. Avance immédiate URSSAF, crédit d'impôt 50%.",
  keywords: "ménage à domicile Rezé, garde enfants Bouguenais, repassage Bouaye, aide à domicile Nantes, service ménage La Montagne, baby-sitting Saint-Jean-de-Boiseau, CESU, crédit impôt service à la personne",
  authors: [{ name: "VES et Vous" }],
  openGraph: {
    title: "VES et Vous - Services à Domicile Personnalisés",
    description: "Ménage complet, garde d'enfants, repassage à Rezé, Bouguenais, Bouaye, La Montagne, Saint-Jean-de-Boiseau. Avance immédiate URSSAF.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "VES et Vous - Services à Domicile",
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
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
