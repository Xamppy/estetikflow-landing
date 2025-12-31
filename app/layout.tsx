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
    default: 'EstetikFlow | Software para Podólogas y Manicuristas',
    template: '%s | EstetikFlow'
  },
  description: 'Agenda Online, Ficha Clínica Digital y Control de Inventario. El primer sistema diseñado 100% para profesionales de la estética y podología en Chile.',
  keywords: ['podología', 'manicure', 'software agenda', 'ficha clinica', 'chile', 'control de stock', 'estetica'],
  authors: [{ name: 'EstetikFlow Team' }],
  creator: 'EstetikFlow',
  openGraph: {
    title: 'EstetikFlow | Software para Podólogas y Manicuristas',
    description: 'Olvídate del cuaderno. Controla citas, pacientes e insumos en un solo lugar. Prueba gratis hoy.',
    url: 'https://www.estetikflow.cl',
    siteName: 'EstetikFlow',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Panel de Control EstetikFlow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EstetikFlow | Software para Podólogas y Manicuristas',
    description: 'Gestión total para tu gabinete. Agenda, Fichas e Inventario.',
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
