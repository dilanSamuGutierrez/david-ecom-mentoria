import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SplitReveal } from "@/components/ui/split-reveal";
import { AvailabilityBar } from "@/components/ui/availability-bar";
import { CtaButton } from "@/components/ui/cta";
import { Magnetic } from "@/components/ui/magnetic";

export function Cost() {
  const { cost, scarcity } = site;
  return (
    <section className="relative section-pad">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 glow-emerald opacity-20" />
      </div>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Kicker>{cost.eyebrow}</Kicker>
          </div>
          <SplitReveal
            as="h2"
            lines={[cost.title]}
            className="display mt-6 text-4xl sm:text-6xl"
          />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {cost.lead}
            </p>
          </Reveal>

          <div className="mx-auto mt-12 max-w-2xl">
            {cost.points.map((p, i) => (
              <Reveal key={p} delay={0.1 + i * 0.06}>
                <div className="flex items-baseline gap-5 border-t border-border py-4 text-left last:border-b">
                  <span className="index-num font-mono text-sm text-danger/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.98rem] text-muted">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mx-auto mt-10 max-w-md rounded-2xl glass-strong p-5">
              <AvailabilityBar taken={scarcity.taken} total={scarcity.total} />
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mx-auto mt-9 max-w-lg text-xl font-medium text-foreground">
              {cost.reframe}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex justify-center">
              <Magnetic>
                <CtaButton href={site.contact.bookingUrl} external>
                  {site.cta.primary}
                </CtaButton>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
