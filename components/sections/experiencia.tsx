import Image from "next/image";
import { site } from "@/lib/site";
import { Franja, Rodillo, Subir, TextoResalta } from "@/components/ui/motion";

const { about } = site;

/**
 * 2. Experiencia, en formato "sobre mí" de portafolio:
 * titular que se ilumina al leerlo, foto + historia y cifras.
 */
export function Experiencia() {
  return (
    <section id="experiencia" className="relative pt-[clamp(4rem,12vw,10rem)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[12rem_1fr] lg:gap-12">
          <div className="flex items-center gap-3 lg:block">
            <span className="kicker">{about.kicker}</span>
            <span className="font-mono text-xs text-faint lg:mt-3 lg:block">(01)</span>
          </div>
          <TextoResalta as="h2" className="text-[clamp(1.9rem,4.6vw,3.9rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
            Soy David Hernández. Enseño desde mi propia operación: productos, anuncios, ventas por WhatsApp y despachos.
          </TextoResalta>
        </div>

        <div className="mt-[clamp(3.5rem,7vw,6rem)] grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Subir className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] sm:aspect-square lg:aspect-[4/5]">
            <Image src="/media/mentor-900.webp" alt="Retrato de David Hernández con camiseta blanca y brazos cruzados" fill className="object-cover object-[50%_20%]" sizes="(max-width: 1024px) 90vw, 560px" />
            <span className="absolute bottom-4 left-4 rounded-full bg-[#070d0b]/90 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-mint">2 años operando ecommerce</span>
          </Subir>

          <div className="flex flex-col justify-between gap-10">
            <Subir grupo className="grid gap-5 text-[1.0625rem] leading-relaxed text-muted">
              {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
              <p className="border-l-2 border-primary pl-5 text-lg leading-snug text-foreground">{about.promise}</p>
            </Subir>

            <Subir grupo className="order-first grid grid-cols-2 gap-px overflow-hidden lg:order-none rounded-[1.5rem] border border-border bg-border">
              {about.stats.map((s) => (
                <p key={s.sr} className="flex flex-col gap-2 bg-background p-5 sm:p-6">
                  <span className="flex flex-wrap items-baseline gap-x-1.5 text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-none tracking-[-0.05em] text-foreground">
                    <Rodillo valor={s.value} prefijo={s.prefix} sr={s.sr} />
                    {s.unit && <span aria-hidden className="text-[0.45em] font-medium tracking-[-0.02em] text-foreground/75">{s.unit}</span>}
                  </span>
                  <span aria-hidden className="text-sm leading-snug text-muted">{s.label}</span>
                </p>
              ))}
            </Subir>
          </div>
        </div>
      </div>

      {/* Una sola franja, recta y lenta: las cuatro áreas que se trabajan */}
      <div className="bordes-suaves mt-[clamp(4.5rem,9vw,8rem)] border-y border-border py-6" aria-hidden>
        <Franja segundos={50} className="text-foreground/85">
          {about.strip.map((t) => <span key={t} className="franja-item">{t}<span className="franja-estrella text-primary">✦</span></span>)}
        </Franja>
      </div>
    </section>
  );
}
