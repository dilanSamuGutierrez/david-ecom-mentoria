import { site } from "./site";

export function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: site.mentor,
        alternateName: site.brand,
        jobTitle: "Mentor de Meta Ads y ventas por WhatsApp",
        url: site.url,
      },
      {
        "@type": "Service",
        name: site.services.mentoria.name,
        serviceType: "Mentoría 1:1 de Meta Ads, ventas por WhatsApp y logística",
        provider: { "@type": "Person", name: site.mentor },
        areaServed: "CO",
        url: site.url,
        description: "Ocho sesiones individuales en vivo de una hora al mes, con documentos de apoyo.",
        offers: { "@type": "Offer", price: "200000", priceCurrency: "COP", description: "Mensualidad de la mentoría. No incluye presupuesto de anuncios ni de operación." },
      },
      {
        "@type": "Service",
        name: site.services.gestion.name,
        serviceType: "Gestión de campañas publicitarias",
        provider: { "@type": "Person", name: site.mentor },
        areaServed: "CO",
        offers: { "@type": "AggregateOffer", lowPrice: "500000", highPrice: "2000000", priceCurrency: "COP", description: "Honorarios mensuales según alcance. El presupuesto de anuncios se paga aparte." },
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
