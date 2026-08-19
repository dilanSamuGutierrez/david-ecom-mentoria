import { site } from "./site";

export function jsonLd() {
  const sameAs = [
    site.contact.social.instagram,
    site.contact.social.tiktok,
    site.contact.social.youtube,
  ].filter((u) => u && u.length > 12);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: site.brand,
        jobTitle: "Mentor de ecommerce y dropshipping",
        url: site.url,
        description: site.description,
        sameAs,
      },
      {
        "@type": "Service",
        serviceType: "Mentoría 1:1 de ecommerce / dropshipping",
        provider: { "@type": "Person", name: site.brand },
        areaServed: "LATAM",
        url: site.url,
        description: site.description,
      },
      {
        "@type": "FAQPage",
        mainEntity: site.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
