import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";

export function Includes() {
  const { includes } = site;
  return (
    <section className="relative section-pad">
      <Container>
        <SectionHeading eyebrow={includes.eyebrow} title={includes.title} />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {includes.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.05}>
              <div className="card-hover h-full rounded-2xl glass p-6">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary-soft ring-1 ring-primary/20">
                  <Icon name={item.icon} className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
