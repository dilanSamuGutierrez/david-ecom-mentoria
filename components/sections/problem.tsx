import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";

export function Problem() {
  const { problem } = site;
  return (
    <section className="relative section-pad">
      <div className="pointer-events-none absolute right-0 top-10 select-none text-[7rem] leading-none sm:text-[10rem] ghost-word">
        REALIDAD
      </div>
      <Container className="relative">
        <SectionHeading
          eyebrow={problem.eyebrow}
          title={problem.title}
          lead={problem.lead}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {problem.pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="card-hover h-full rounded-2xl glass p-6 sm:p-7">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary-soft ring-1 ring-primary/20">
                  <Icon name={p.icon} className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
