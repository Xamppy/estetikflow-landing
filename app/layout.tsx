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
  keywords: [
    'software podología Chile',
    'software estética Chile',
    'agenda online clínica estética',
    'ficha clínica digital podología',
    'control inventario clínica estética',
    'software manicure Chile',
    'gestión gabinete podología',
    'reservar horas podólogo online',
    'app clínica estética Chile',
    'software spa Chile'
  ],
  authors: [{ name: 'EstetikFlow' }],
  creator: 'EstetikFlow',
  alternates: {
    canonical: 'https://www.estetikflow.cl',
    languages: {
      'es-CL': 'https://www.estetikflow.cl',
    },
  },
  openGraph: {
    title: 'EstetikFlow | Software para Podólogas y Manicuristas',
    description: 'Olvídate del cuaderno. Controla citas, pacientes e insumos en un solo lugar. Prueba gratis 14 días.',
    url: 'https://www.estetikflow.cl',
    siteName: 'EstetikFlow',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Panel de Control EstetikFlow - Software para clínicas de estética',
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Structured Data para SEO + Búsquedas IA
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization
    {
      "@type": "Organization",
      "@id": "https://www.estetikflow.cl/#organization",
      "name": "EstetikFlow",
      "url": "https://www.estetikflow.cl",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.estetikflow.cl/og-image.png"
      },
      "description": "Software de gestión para podólogas, manicuristas y profesionales de la estética en Chile. Agenda online, fichas clínicas y control de inventario.",
      "foundingDate": "2024",
      "founder": {
        "@type": "Person",
        "name": "Felipe Orellana"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Chile"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "contacto@estetikflow.cl",
        "contactType": "customer service",
        "availableLanguage": ["Spanish", "es-CL"]
      },
      "sameAs": []
    },
    // Software Application
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.estetikflow.cl/#software",
      "name": "EstetikFlow",
      "url": "https://www.estetikflow.cl",
      "description": "Sistema de gestión SaaS para clínicas de podología y estética. Incluye agenda online 24/7, fichas clínicas digitales, control de inventario y dashboard financiero.",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": [
        {
          "@type": "Offer",
          "name": "Orden Digital",
          "price": "12.99",
          "priceCurrency": "CLP",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "12.99",
            "priceCurrency": "CLP",
            "unitCode": "MON"
          }
        },
        {
          "@type": "Offer",
          "name": "Imperio Profesional",
          "price": "24.99",
          "priceCurrency": "CLP",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "24.99",
            "priceCurrency": "CLP",
            "unitCode": "MON"
          }
        },
        {
          "@type": "Offer",
          "name": "Gabinete Expansión",
          "price": "59.99",
          "priceCurrency": "CLP",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "59.99",
            "priceCurrency": "CLP",
            "unitCode": "MON"
          }
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5"
      },
      "featureList": [
        "Agenda online 24/7",
        "Fichas clínicas digitales",
        "Control de inventario",
        "Dashboard financiero",
        "Recordatorios WhatsApp",
        "Múltiples profesionales",
        "Reservas online públicas"
      ],
      "provider": {
        "@id": "https://www.estetikflow.cl/#organization"
      }
    },
    // FAQ Page
    {
      "@type": "FAQPage",
      "@id": "https://www.estetikflow.cl/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿EstetikFlow funciona para cualquier tipo de clínica de estética?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. EstetikFlow está diseñado para podólogas, manicuristas, esteticistas, spas y cualquier profesional independiente del sector estético en Chile. Si gestionas citas, pacientes e inventario, EstetikFlow funciona para ti."
          }
        },
        {
          "@type": "Question",
          "name": "¿Necesito tarjeta de crédito para comenzar el trial gratuito?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Puedes probar los 14 días gratis sin ingresar ningún dato de pago. Solo necesitas tu email para crear la cuenta."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo cancelar cuando quiera?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Sin contratos ni compromisos. Cancela desde tu cuenta cuando quieras y sin penalizaciones."
          }
        },
        {
          "@type": "Question",
          "name": "¿Mis datos de pacientes están seguros?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Tus datos y los de tus pacientes están encriptados y aislados por cuenta. Cumplimos con la Ley 19.628 de protección de datos personales de Chile."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo usar EstetikFlow desde mi celular?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. EstetikFlow es 100% web responsive, funciona desde cualquier navegador en celular, tablet o computador sin necesidad de descargar nada."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo funciona la agenda online para mis pacientes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tus pacientes pueden reservar horas desde un link público sin necesidad de descargar ninguna app. Tú defines los horarios disponibles y ellos reservan en segundos."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué pasa si no sé usar tecnología?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EstetikFlow está diseñado para ser intuitivo. Además, tienes soporte humano por correo que responde en menos de 24 horas. Te guiamos paso a paso."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo cambiar de plan después?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Puedes escalar o reducir tu plan en cualquier momento. Los cambios se aplican de forma inmediata."
          }
        }
      ]
    },
    // WebSite
    {
      "@type": "WebSite",
      "@id": "https://www.estetikflow.cl/#website",
      "name": "EstetikFlow",
      "url": "https://www.estetikflow.cl",
      "description": "Software de gestión para podólogas y profesionales de la estética en Chile.",
      "publisher": {
        "@id": "https://www.estetikflow.cl/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.estetikflow.cl/buscar?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.estetikflow.cl" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
