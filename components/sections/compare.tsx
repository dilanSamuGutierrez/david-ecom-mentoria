import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Check, Minus } from "lucide-react";

export function Compare() {
  const { compare } = site;
  return (
    <section className="relative section-pad">
      <Container>
        <SectionHeading
          center
          eyebrow={compare.eyebrow}
          title={compare.title}
          lead={compare.lead}
        />

        <div className="relative mt-14 grid items-stretch gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl glass p-8 sm:p-10">
              <h3 className="text-lg font-semibold text-muted">
                {compare.mass.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {compare.mass.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/5 text-faint">
                      <Minus className="size-3.5" />
                    </span>
                    <span className="text-[0.95rem] leading-relaxed text-muted">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-primary/30 bg-primary/[0.06] p-8 sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 size-56 glow-emerald opacity-60" />
              <div className="relative flex items-center gap-3">
                <h3 className="text-lg font-semibold">{compare.ours.title}</h3>
                <span className="rounded-full bg-primary/20 px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-widest text-primary-soft">
                  David Ecom
                </span>
              </div>
              <ul className="relative mt-6 space-y-4">
                {compare.ours.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary-soft">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-[0.95rem] leading-relaxed text-foreground/90">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <span className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-background font-mono text-xs font-semibold text-muted">
              VS
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
