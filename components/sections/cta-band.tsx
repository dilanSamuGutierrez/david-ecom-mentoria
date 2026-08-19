import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { CtaButton } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";

export function CtaBand({
  title,
  lead,
}: {
  title: string;
  lead: string;
}) {
  return (
    <section className="py-6">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/[0.14] via-primary/[0.04] to-transparent p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-10 -top-16 size-72 glow-emerald opacity-70" />
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold sm:text-3xl">{title}</h3>
                <p className="mt-3 text-muted">{lead}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
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
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
