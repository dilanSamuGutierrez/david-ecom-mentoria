import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function How() {
  const { how } = site;
  return (
    <section className="relative section-pad">
      <Container>
        <SectionHeading center eyebrow={how.eyebrow} title={how.title} />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {how.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.07}>
              <div className="card-hover relative h-full rounded-2xl glass p-6">
                <span className="font-mono text-sm text-primary-soft">
                  0{i + 1}
                </span>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/40 to-transparent" />
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
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
