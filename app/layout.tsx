import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.estetikflow.cl'),
  title: {
    default: 'EstetikFlow | Software para Podólogas y Manicuristas en Chile',
    template: '%s | EstetikFlow'
  },
  description: 'Deja de perder dinero en papel. Agenda citas, ficha clínica digital y control de inventario gramo a gramo. Prueba gratis el software creado junto a profesionales.',
  keywords: ['podología', 'manicure', 'software agenda', 'ficha clinica', 'chile', 'control de stock', 'estetica'],
  authors: [{ name: 'EstetikFlow Team' }],
  creator: 'EstetikFlow',
  openGraph: {
    title: 'EstetikFlow - Construye tu Imperio',
    description: 'Gestiona tu gabinete como una profesional. Agenda, Inventario y Rentabilidad en un solo lugar.',
    url: 'https://www.estetikflow.cl',
    siteName: 'EstetikFlow',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EstetikFlow Dashboard Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EstetikFlow | Software Podología Chile',
    description: 'Controla tu agenda e inventario. Empieza tu prueba gratis.',
    images: ['/og-image.png'],
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
