import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { CtaButton } from "@/components/ui/cta";
import { Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  const { finalCta } = site;
  return (
    <section className="relative section-pad">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/25 bg-gradient-to-b from-elevated to-background px-6 py-16 text-center sm:px-10 sm:py-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 mx-auto h-72 w-72 glow-emerald opacity-80" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.25] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

          <div className="relative mx-auto max-w-2xl">
            <Reveal>
              <div className="flex justify-center">
                <Eyebrow>{finalCta.eyebrow}</Eyebrow>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-balance text-3xl font-semibold sm:text-5xl">
                {finalCta.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
                {finalCta.lead}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
            <Reveal delay={0.22}>
              <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-widest text-faint">
                {finalCta.micro}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
