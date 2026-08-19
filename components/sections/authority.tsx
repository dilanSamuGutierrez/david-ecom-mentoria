import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Stat } from "@/components/ui/stat";
import { Reveal } from "@/components/ui/reveal";

export function Authority() {
  return (
    <section className="relative py-8">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-5">
            <p className="eyebrow">Operando con</p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {site.tools.map((t) => (
                <span
                  key={t}
                  className="text-sm font-medium tracking-tight text-muted/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-2 gap-y-8 rounded-3xl glass-strong p-8 sm:p-10 md:grid-cols-4 md:gap-8">
            {site.stats.map((s) => (
              <Stat
                key={s.label}
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                label={s.label}
                note={s.note}
                className="px-1"
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-4 text-center font-mono text-[0.68rem] tracking-wide text-faint">
            * Cifras de referencia — reemplazar por datos verificables antes de
            publicar.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
