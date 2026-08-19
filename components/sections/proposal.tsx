import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Check, X } from "lucide-react";

export function Proposal() {
  const { proposal } = site;
  return (
    <section id="propuesta" className="relative section-pad">
      <Container>
        <SectionHeading
          eyebrow={proposal.eyebrow}
          title={proposal.title}
          lead={proposal.lead}
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl border border-primary/30 bg-primary/[0.06] p-8 sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 size-56 glow-emerald opacity-60" />
              <h3 className="relative text-sm font-semibold uppercase tracking-widest text-primary-soft">
                Lo que sí es
              </h3>
              <ul className="relative mt-6 space-y-4">
                {proposal.is.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary-soft">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-[0.95rem] leading-relaxed text-foreground/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl glass p-8 sm:p-10">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-faint">
                Lo que no es
              </h3>
              <ul className="mt-6 space-y-4">
                {proposal.isNot.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/5 text-faint">
                      <X className="size-3.5" />
                    </span>
                    <span className="text-[0.95rem] leading-relaxed text-muted">
                      {item}
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
