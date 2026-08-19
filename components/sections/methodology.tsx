import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function Methodology() {
  const { methodology } = site;
  return (
    <section id="metodologia" className="relative section-pad">
      <div className="pointer-events-none absolute left-1/2 top-24 select-none text-[7rem] leading-none sm:text-[10rem] ghost-word -translate-x-1/2">
        MÉTODO
      </div>
      <Container className="relative">
        <SectionHeading
          eyebrow={methodology.eyebrow}
          title={methodology.title}
          center
        />

        <div className="mx-auto mt-14 max-w-3xl">
          {methodology.stages.map((stage, i) => (
            <Reveal key={stage.n} delay={i * 0.05}>
              <div className="group flex gap-6 pb-2">
                <div className="flex flex-col items-center">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl glass font-mono text-lg font-semibold text-primary-soft transition-colors group-hover:border-primary/40">
                    {stage.n}
                  </span>
                  {i < methodology.stages.length - 1 && (
                    <span className="my-1 w-px flex-1 bg-gradient-to-b from-primary/40 to-transparent" />
                  )}
                </div>
                <div className="pb-8 pt-2.5">
                  <h3 className="text-xl font-semibold">{stage.title}</h3>
                  <p className="mt-2 max-w-lg text-[0.95rem] leading-relaxed text-muted">
                    {stage.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
