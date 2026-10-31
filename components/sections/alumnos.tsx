import { site } from "@/lib/site";
import { Lineas, Subir } from "@/components/ui/motion";
import { ProofImage } from "@/components/ui/proof-image";

const { cases } = site;

/** 5. Experiencias documentadas de alumnos. */
export function Alumnos() {
  return (
    <section id="alumnos" className="relative overflow-hidden border-t border-border py-[clamp(5rem,11vw,10rem)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="kicker">{cases.kicker}</span>
          <Lineas className="mt-6 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.045em]">
            El proceso, visto desde <span className="text-mint">los proyectos de mis alumnos.</span>
          </Lineas>
          <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-muted">{cases.lead}</p>
          <p className="mt-8 max-w-md border-l-2 border-white/15 pl-4 text-sm leading-relaxed text-faint">{cases.note}</p>
        </div>

        <Subir grupo className="grid gap-5 sm:grid-cols-2 sm:items-start">
          {cases.items.map((c, i) => (
            <article key={c.src} className={`rounded-[1.75rem] border border-white/10 bg-surface p-3 ${i === 1 ? "sm:mt-20" : ""}`}>
              <ProofImage src={c.src} alt={c.alt} aspect="739/1100" fit="cover" sizes="(max-width: 640px) 90vw, 320px" />
              <div className="px-2 pb-2 pt-4">
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.text}</p>
              </div>
            </article>
          ))}
        </Subir>
      </div>
    </section>
  );
}
