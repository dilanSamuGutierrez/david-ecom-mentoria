import type { Metadata, Viewport } from "next";
import "@fontsource-variable/sora";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import "./site.css";
import { site } from "@/lib/site";
import { SmoothScroll } from "@/components/site/smooth-scroll";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.seoTitle, template: `%s · ${site.brand}` },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.mentor }],
  alternates: { canonical: "/" },
  openGraph: {
    title: site.seoTitle,
    description: site.description,
    url: site.url,
    siteName: site.brand,
    locale: site.locale,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "David Ecom · Mentoría 1:1 de Meta Ads y ventas por WhatsApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seoTitle,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060a08",
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
