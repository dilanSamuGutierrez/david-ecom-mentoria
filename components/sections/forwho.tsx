import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Check, X } from "lucide-react";

export function ForWho() {
  const { forWho } = site;
  return (
    <section id="para-quien" className="on-light relative section-pad">
      <Container>
        <SectionHeading
          center
          eyebrow={forWho.eyebrow}
          title={forWho.title}
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-primary/30 bg-primary/[0.07] p-8 sm:p-10">
              <h3 className="text-lg font-semibold text-foreground">
                {forWho.is.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {forWho.is.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
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

          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-border bg-white/60 p-8 sm:p-10">
              <h3 className="text-lg font-semibold text-foreground">
                {forWho.isNot.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {forWho.isNot.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-danger/15 text-danger">
                      <X className="size-3.5" />
                    </span>
                    <span className="text-[0.95rem] leading-relaxed text-muted">
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
