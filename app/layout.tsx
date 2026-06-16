import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Latitude — Le talent senior, là où il a choisi de vivre",
  description:
    "La marketplace des talents nomades pour les entreprises francophones. Des profils diplômés, vérifiés et notés, couverts par un binôme anti-interruption. Fiabilité et conformité en standard.",
  openGraph: {
    title: "Latitude — Le talent senior, là où il a choisi de vivre",
    description:
      "Recrutez des talents nomades diplômés au prix d'un junior, sans le risque. Fiabilité notée, binôme anti-interruption, conformité B2B intégrée.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
