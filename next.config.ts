import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/contacto",
        destination: "/#contacto",
        permanent: true,
      },
      {
        source: "/precios",
        destination: "/#precios",
        permanent: true,
      },
      {
        source: "/caracteristicas",
        destination: "/#caracteristicas",
        permanent: true,
      },
      {
        source: "/reservar",
        destination: "https://www.estetikflow.cl",
        permanent: true,
      },
      {
        source: "/casos-de-exito",
        destination: "/#testimonios",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
