import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Sin optimización de servidor: sirve las imágenes de /public tal cual.
    // Evita depender de `sharp` y funciona igual en dev, build y Windows.
    unoptimized: true,
  },
};

export default nextConfig;
