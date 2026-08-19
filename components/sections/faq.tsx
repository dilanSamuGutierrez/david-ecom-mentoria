import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ChevronDown } from "lucide-react";

export function Faq() {
  const { faq } = site;
  return (
    <section id="faq" className="relative section-pad">
      <Container>
        <SectionHeading center eyebrow={faq.eyebrow} title={faq.title} />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faq.items.map((item, i) => (
            <Reveal key={i} delay={(i % 4) * 0.04}>
              <details className="group rounded-2xl glass px-6 open:bg-white/[0.04]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-[0.98rem] font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown className="size-5 shrink-0 text-primary-soft transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="pb-6 pr-8 text-[0.93rem] leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
