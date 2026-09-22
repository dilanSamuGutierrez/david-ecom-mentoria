import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { AvailabilityBar } from "@/components/ui/availability-bar";
import { CtaButton } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";

export function Scarcity() {
  const { scarcity } = site;
  return (
    <section className="relative pb-4 pt-2">
      <Container>
        <Reveal>
          <div className="grid gap-8 border-y border-border py-9 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-primary-soft">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-soft/70" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-primary-soft" />
                </span>
                {scarcity.open ? scarcity.openLabel : scarcity.closedLabel}
              </span>
              <h3 className="display mt-4 text-2xl sm:text-3xl">
                {scarcity.headline}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                {scarcity.sub}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <AvailabilityBar taken={scarcity.taken} total={scarcity.total} />
              <CtaButton
                href={site.contact.bookingUrl}
                external
                className="w-full justify-center"
              >
                {site.cta.primary}
              </CtaButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
