import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { CtaButton } from "@/components/ui/cta";
import { Check } from "lucide-react";

export function About() {
  const { about } = site;
  return (
    <section id="sobre" className="relative section-pad">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <MediaPlaceholder
              label="Retrato del mentor / David Ecom"
              icon="users"
              aspect="4/5"
              className="mx-auto max-w-sm"
            />
          </Reveal>

          <div>
            <SectionHeading eyebrow={about.eyebrow} title={about.title} />
            <div className="mt-6 space-y-4">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="max-w-xl text-[0.975rem] leading-relaxed text-muted">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.12}>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {about.credentials.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-2.5 text-sm text-foreground/85"
                  >
                    <Check className="size-4 shrink-0 text-primary-soft" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaButton href={site.contact.bookingUrl} external>
                  {site.cta.primary}
                </CtaButton>
                <CtaButton
                  href={`https://wa.me/${site.contact.whatsapp}`}
                  external
                  variant="outline"
                >
                  {site.cta.secondary}
                </CtaButton>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
