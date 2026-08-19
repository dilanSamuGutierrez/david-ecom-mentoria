import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Placeholders locales por ahora; agrega dominios reales cuando subas capturas remotas.
    remotePatterns: [],
  },
};

export default nextConfig;
