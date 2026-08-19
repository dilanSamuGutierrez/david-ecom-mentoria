import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

const cellClass = [
  "sm:col-span-2 lg:col-span-2 lg:row-span-2", // 0 — facturación (grande)
  "", // 1 shopify
  "", // 2 meta
  "", // 3 tiktok
  "", // 4 pedidos
  "sm:col-span-2 lg:col-span-1", // 5 redes
];

export function Evidence() {
  const { evidence } = site;
  return (
    <section id="evidencia" className="relative section-pad">
      <Container>
        <SectionHeading
          center
          eyebrow={evidence.eyebrow}
          title={evidence.title}
          lead={evidence.lead}
        />

        <div className="mt-14 grid auto-rows-[13rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {evidence.slots.map((slot, i) => (
            <Reveal
              key={slot.label}
              delay={(i % 3) * 0.06}
              className={cellClass[i] ?? ""}
            >
              <MediaPlaceholder
                label={slot.label}
                icon={slot.icon}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
