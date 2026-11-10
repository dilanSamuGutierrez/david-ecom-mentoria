import Image from "next/image";
import { site } from "@/lib/site";
import { Subir } from "@/components/ui/motion";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

/**
 * Banda de cierre a mitad de página (patrón de Relab: llamado + persona
 * recortada al lado). Aparece justo después de ver casos reales, cuando
 * el visitante tiene más confianza para escribir.
 */
export function CtaBanda() {
  return (
    <section aria-labelledby="cta-banda-titulo" className="px-5 pb-[clamp(3.75rem,9vw,7rem)] sm:px-8">
      <Subir className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-primary text-primary-foreground md:grid-cols-[1.25fr_0.75fr]">
        <div className="relative z-10 p-[clamp(1.75rem,5vw,4rem)]">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em]">Mentoría 1:1 · {site.hero.price} COP al mes</span>
          <h2 id="cta-banda-titulo" className="mt-4 max-w-xl text-[clamp(1.8rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            ¿Te ves en alguno de estos casos? Cuéntale a David tu situación.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-primary-foreground/80">
            Te responde él, revisa tu punto de partida y te dice qué acompañamiento encaja contigo antes de pagar.
          </p>
          <WhatsAppLink message={site.contact.mentoriaMessage} variant="oscuro" className="mt-7">Hablar con David por WhatsApp</WhatsAppLink>
        </div>
        {/* David recortado, apoyado en el borde inferior de la banda */}
        <div className="relative h-[260px] md:h-auto">
          <Image src="/media/JOSEXXO-600.webp" alt="David Hernández con brazos cruzados" fill className="object-contain object-bottom md:object-right-bottom" sizes="(max-width: 768px) 80vw, 420px" />
        </div>
      </Subir>
    </section>
  );
}
