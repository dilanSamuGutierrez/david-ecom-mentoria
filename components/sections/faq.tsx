import { Plus } from "lucide-react";
import { site } from "@/lib/site";
import { Lineas } from "@/components/ui/motion";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

const { faq } = site;

/** 7. Preguntas frecuentes y condiciones. */
export function Faq() {
  return (
    <section id="preguntas" className="py-[clamp(5rem,11vw,10rem)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="kicker">{faq.kicker}</span>
          <Lineas className="mt-6 text-[clamp(2.2rem,4.6vw,3.75rem)] font-semibold leading-[1] tracking-[-0.045em]">
            Precio, sesiones y condiciones, <span className="text-mint">sin letra pequeña.</span>
          </Lineas>
          <p className="mt-6 max-w-sm leading-relaxed text-muted">¿Tu duda no aparece? Escríbele a David y la revisan juntos.</p>
          <WhatsAppLink variant="outline" className="mt-6">Preguntar por WhatsApp</WhatsAppLink>
        </div>

        <div className="border-t border-border">
          {faq.items.map((f) => (
            <details key={f.q} className="faq-item group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-[clamp(1.05rem,1.6vw,1.25rem)] font-medium leading-snug [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 transition-transform duration-300 group-open:rotate-45 group-open:border-primary group-open:bg-primary group-open:text-primary-foreground">
                  <Plus size={18} aria-hidden />
                </span>
              </summary>
              <p className="faq-respuesta max-w-2xl pb-7 pr-14 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
