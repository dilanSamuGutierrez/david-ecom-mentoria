import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function Story() {
  const { story } = site;
  return (
    <section id="historia" className="relative section-pad">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeader
              index="02"
              kicker={story.eyebrow}
              title={story.title}
              lead={story.lead}
            />
            <div className="mt-8 space-y-5">
              {story.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="max-w-xl leading-relaxed text-muted">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:pt-16">
            <Reveal delay={0.1}>
              <MediaPlaceholder
                label="Foto lifestyle / operando (opcional)"
                icon="store"
                aspect="5/4"
                index="02·A"
              />
            </Reveal>

            <div className="mt-8">
              {story.milestones.map((m, i) => (
                <Reveal key={m.k} delay={0.12 + i * 0.06}>
                  <div className="flex items-baseline gap-6 border-t border-border py-4">
                    <span className="w-28 shrink-0 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-primary-soft">
                      {m.k}
                    </span>
                    <span className="text-sm text-foreground/85">{m.v}</span>
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
