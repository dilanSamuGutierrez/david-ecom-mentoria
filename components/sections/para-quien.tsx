import { ArrowUpRight, Check } from "lucide-react";
import { site } from "@/lib/site";
import { Lineas, Subir } from "@/components/ui/motion";

const { forWho } = site;

/** 6. Para quién es y requisitos para empezar (banda clara). */
export function ParaQuien() {
  return (
    <section id="para-quien" className="on-light rounded-[2.5rem] py-[clamp(5rem,11vw,10rem)] md:rounded-[4rem]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <span className="kicker">{forWho.kicker}</span>
        <Lineas className="mt-6 max-w-4xl text-[clamp(2rem,4.8vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
          {forWho.title}
        </Lineas>

        <Subir grupo className="mt-[clamp(3rem,6vw,5rem)] grid gap-4 md:grid-cols-3">
          {forWho.profiles.map((p, i) => (
            <article key={p.title} className="flex flex-col rounded-[1.5rem] border border-[#d8d2c4] bg-white/60 p-6 md:p-7">
              <span className="font-mono text-xs text-[#0d7a54]">0{i + 1}</span>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em]">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
              {i === 2 && (
                <a href="#gestion" className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-[#0d7a54] hover:underline">
                  Ver gestión de campañas <ArrowUpRight size={16} aria-hidden />
                </a>
              )}
            </article>
          ))}
        </Subir>

        <div className="mt-[clamp(3rem,6vw,5rem)] grid gap-8 rounded-[1.75rem] bg-ink p-[clamp(1.5rem,4vw,3rem)] text-[#ecf2ee] lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <h3 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-semibold leading-tight tracking-[-0.03em]">Requisitos para aprovechar el proceso</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#90a69c]">{forWho.age}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {forWho.requirements.map((r) => (
              <li key={r} className="flex gap-3 rounded-2xl border border-white/10 p-4 leading-snug"><Check size={18} className="mt-0.5 shrink-0 text-[#43dd9b]" aria-hidden />{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
