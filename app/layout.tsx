import type { Metadata, Viewport } from "next";
import "@fontsource-variable/sora";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { site } from "@/lib/site";
import { SmoothScroll } from "@/components/site/smooth-scroll";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { MobileCtaBar } from "@/components/site/mobile-cta";
import { BackToTop } from "@/components/site/back-to-top";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Grain } from "@/components/ui/grain";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} — ${site.role}`,
    template: `%s · ${site.brand}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.brand }],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.brand} — ${site.role}`,
    description: site.description,
    url: site.url,
    siteName: site.brand,
    locale: site.locale,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "David Ecom · Mentoría 1:1 de dropshipping y Meta Ads" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} — ${site.role}`,
    description: site.description,
    images: ["/opengraph-image"],
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
        <ScrollProgress />
        <Grain />
        {children}
        <WhatsAppFloat />
        <MobileCtaBar />
        <BackToTop />
      </body>
    </html>
  );
}
