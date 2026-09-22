import { site } from "./site";

export function jsonLd() {
  const sameAs = [
    site.contact.social.instagram,
    site.contact.social.tiktok,
    site.contact.social.youtube,
  ].filter((u) => {
    if (!u) return false;
    try { return new URL(u).pathname.replace(/\//g, "").length > 0; }
    catch { return false; }
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: site.brand,
        jobTitle: "Mentor de dropshipping y Meta Ads",
        url: site.url,
        description: site.description,
        sameAs,
      },
      {
        "@type": "Service",
        serviceType: "Mentoría 1:1 de dropshipping y Meta Ads",
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
