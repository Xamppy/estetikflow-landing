import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
