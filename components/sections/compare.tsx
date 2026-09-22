import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Check, Minus } from "lucide-react";

export function Compare() {
  const { compare } = site;
  return (
    <section className="relative section-pad">
      <Container>
        <SectionHeader
          align="center"
          kicker={compare.eyebrow}
          title={compare.title}
          lead={compare.lead}
        />

        <div className="mt-14 grid border-t border-border lg:grid-cols-2">
          <Reveal>
            <div className="py-8 lg:pr-14">
              <h3 className="display text-2xl text-muted sm:text-3xl">
                {compare.mass.title}
              </h3>
              <ul className="mt-7 space-y-4">
                {compare.mass.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <Minus className="mt-1 size-4 shrink-0 text-faint" />
                    <span className="text-[0.98rem] leading-relaxed text-muted">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative border-t border-border py-8 lg:border-l lg:border-t-0 lg:pl-14">
              <div className="flex items-center gap-3">
                <h3 className="display text-2xl sm:text-3xl">
                  {compare.ours.title}
                </h3>
                <span className="rounded-full bg-primary/15 px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-widest text-primary-soft">
                  David Ecom
                </span>
              </div>
              <ul className="mt-7 space-y-4">
                {compare.ours.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <Check className="mt-1 size-4 shrink-0 text-primary-soft" />
                    <span className="text-[0.98rem] leading-relaxed text-foreground/90">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
