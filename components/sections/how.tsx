import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function How() {
  const { how } = site;
  return (
    <section className="relative section-pad">
      <Container>
        <SectionHeader kicker={how.eyebrow} title={how.title} />

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {how.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.07}>
              <div className="border-t border-primary/30 pt-5">
                <span className="index-num font-mono text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-5 text-xl">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
