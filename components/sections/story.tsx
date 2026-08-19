import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function Story() {
  const { story } = site;
  return (
    <section id="historia" className="relative section-pad">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow={story.eyebrow}
              title={story.title}
              lead={story.lead}
            />
            <div className="mt-8 space-y-5">
              {story.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="max-w-xl text-[0.975rem] leading-relaxed text-muted">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:pt-4">
            <Reveal delay={0.1}>
              <MediaPlaceholder
                label="Foto lifestyle / operando (opcional)"
                icon="store"
                aspect="4/3"
              />
            </Reveal>

            <div className="mt-6 space-y-0">
              {story.milestones.map((m, i) => (
                <Reveal key={m.k} delay={0.12 + i * 0.06}>
                  <div className="flex gap-4 border-l border-primary/25 pl-5">
                    <div className="relative -ml-[1.62rem] mt-1 flex size-3 shrink-0 items-center justify-center">
                      <span className="size-3 rounded-full bg-primary ring-4 ring-background" />
                    </div>
                    <div className="pb-6">
                      <p className="font-mono text-[0.7rem] uppercase tracking-widest text-primary-soft">
                        {m.k}
                      </p>
                      <p className="mt-1 text-sm text-foreground/90">{m.v}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
