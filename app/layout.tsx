import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EstetikFlow | Software de Gestión para Centros de Estética",
  description:
    "Gestiona tu centro de estética de forma simple: agenda online 24/7, fichas clínicas visuales e inventario automático. Empieza tu prueba gratis.",
  keywords: [
    "software estética",
    "gestión spa",
    "agenda online",
    "fichas clínicas",
    "inventario estética",
    "Chile",
  ],
  authors: [{ name: "EstetikFlow" }],
  openGraph: {
    title: "EstetikFlow | Software de Gestión para Centros de Estética",
    description:
      "Gestiona tu centro de estética de forma simple: agenda online 24/7, fichas clínicas visuales e inventario automático.",
    url: "https://estetikflow.cl",
    siteName: "EstetikFlow",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EstetikFlow | Software de Gestión para Centros de Estética",
    description:
      "Gestiona tu centro de estética de forma simple: agenda online 24/7, fichas clínicas visuales e inventario automático.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
