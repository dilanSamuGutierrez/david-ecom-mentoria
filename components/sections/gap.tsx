import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "lucide-react";

export function Gap() {
  const { gap } = site;
  return (
    <section className="relative section-pad">
      <div className="pointer-events-none absolute right-0 top-16 select-none text-[7rem] leading-none sm:text-[11rem] ghost-word">
        HUMO
      </div>
      <Container className="relative">
        <SectionHeader kicker={gap.eyebrow} title={gap.title} lead={gap.lead} />

        <div className="mt-14">
          <div className="hidden grid-cols-[1fr_auto_1fr] gap-6 pb-3 sm:grid">
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-faint">
              Lo que promete el gurú
            </span>
            <span />
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-primary-soft">
              Lo que de verdad pasa
            </span>
          </div>
          {gap.rows.map((r, i) => (
            <Reveal key={i} delay={(i % 5) * 0.05}>
              <div className="grid items-center gap-x-6 gap-y-1 border-t border-border py-5 last:border-b sm:grid-cols-[1fr_auto_1fr]">
                <span className="text-[0.98rem] text-muted line-through decoration-danger/50 decoration-1">
                  {r.promise}
                </span>
                <ArrowRight className="hidden size-4 text-primary-soft sm:block" />
                <span className="text-[0.98rem] font-medium text-foreground">
                  {r.reality}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
