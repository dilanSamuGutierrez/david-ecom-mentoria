import { Check } from "lucide-react";
import { site } from "@/lib/site";
import { Lineas, Subir } from "@/components/ui/motion";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

const { services, contact } = site;
const { mentoria: m, gestion: g } = services;

/** 4. Servicios: mentoría (principal) y gestión de campañas (secundaria). */
export function Servicios() {
  return (
    <section id="servicios" className="relative py-[clamp(5rem,11vw,10rem)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="kicker">{services.kicker}</span>
          <Lineas className="mt-6 text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
            Elige el acompañamiento <span className="text-mint">que necesita tu negocio.</span>
          </Lineas>
        </div>

        <Subir grupo className="mt-[clamp(3rem,6vw,5rem)] grid gap-5 lg:grid-cols-[1.25fr_1fr]">
          {/* Mentoría */}
          <article className="servicio-principal relative overflow-hidden rounded-[2rem] bg-primary p-2 text-primary-foreground">
            <div className="rounded-[1.6rem] bg-[#0b1d16] p-[clamp(1.5rem,3.5vw,2.75rem)] text-foreground">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-semibold tracking-[-0.03em]">{m.name}</h3>
                <span className="rounded-full bg-primary/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-mint">Servicio principal</span>
              </div>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">{m.for}</p>
              <div className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <strong className="text-[clamp(3rem,7vw,5.25rem)] font-semibold leading-none tracking-[-0.05em] text-white">{m.price}</strong>
                <span className="text-muted">{m.unit}</span>
              </div>
              <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {m.includes.map((i) => (
                  <li key={i} className="flex gap-2.5 text-[0.95rem] leading-snug"><Check size={17} className="mt-0.5 shrink-0 text-primary-soft" aria-hidden />{i}</li>
                ))}
              </ul>
              <WhatsAppLink message={contact.mentoriaMessage} className="mt-9 w-full sm:w-auto">{m.cta}</WhatsAppLink>
            </div>
            <dl className="grid gap-4 px-[clamp(1rem,3vw,2.25rem)] pb-5 pt-6 sm:grid-cols-3">
              {m.terms.map((t) => (
                <div key={t.k}>
                  <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em]">{t.k}</dt>
                  <dd className="mt-1 text-sm leading-snug">{t.v}</dd>
                </div>
              ))}
            </dl>
          </article>

          {/* Gestión */}
          <article id="gestion" className="flex scroll-mt-28 flex-col rounded-[2rem] border border-white/10 bg-surface p-[clamp(1.5rem,3.5vw,2.75rem)]">
            <h3 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-semibold tracking-[-0.03em]">{g.name}</h3>
            <p className="mt-4 leading-relaxed text-muted">{g.for}</p>
            <div className="mt-8">
              <strong className="block text-[clamp(2rem,4vw,2.9rem)] font-semibold leading-none tracking-[-0.045em] text-white">{g.price}</strong>
              <span className="mt-2 block text-muted">{g.unit}</span>
            </div>
            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-white/10 p-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-mint">Nos encargamos de</span>
                <p className="mt-2 text-[0.95rem] leading-relaxed">{g.we}</p>
              </div>
              <div className="rounded-2xl border border-white/10 p-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Tu equipo se encarga de</span>
                <p className="mt-2 text-[0.95rem] leading-relaxed">{g.you}</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted">{g.price_factors}</p>
            <div className="mt-auto pt-8">
              <WhatsAppLink message={contact.gestionMessage} variant="outline" className="w-full">{g.cta}</WhatsAppLink>
            </div>
          </article>
        </Subir>

        <p className="mt-6 max-w-3xl text-sm text-faint">La gestión de campañas no incluye las ocho sesiones de la mentoría salvo acuerdo expreso. El alcance final se acuerda por escrito antes de iniciar.</p>
      </div>
    </section>
  );
}
