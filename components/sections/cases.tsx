import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Quote } from "lucide-react";

export function Cases() {
  const { cases } = site;
  return (
    <section className="relative section-pad">
      <Container>
        <SectionHeading center eyebrow={cases.eyebrow} title={cases.title} />

        <Reveal delay={0.05}>
          <p className="mx-auto mt-5 max-w-2xl text-center font-mono text-[0.72rem] leading-relaxed tracking-wide text-faint">
            {cases.disclaimer}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {cases.items.map((c, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <figure className="card-hover flex h-full flex-col rounded-2xl glass p-7">
                <Quote className="size-7 text-primary/40" aria-hidden />
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground/85">
                  {c.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 font-mono text-xs text-primary-soft ring-1 ring-primary/20">
                    ★
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-foreground">
                      {c.name}
                    </span>
                    <span className="block text-xs text-faint">{c.detail}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
