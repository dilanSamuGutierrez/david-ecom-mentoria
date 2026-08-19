import type { Metadata, Viewport } from "next";
import "@fontsource-variable/sora";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { site } from "@/lib/site";
import { SmoothScroll } from "@/components/site/smooth-scroll";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} — ${site.role}`,
    template: `%s · ${site.brand}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.brand }],
  openGraph: {
    title: `${site.brand} — Acompañamiento 1:1 de ecommerce`,
    description: site.description,
    url: site.url,
    siteName: site.brand,
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} — Acompañamiento 1:1 de ecommerce`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05090b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <SmoothScroll />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
