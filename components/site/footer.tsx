import { site, whatsappConfigured, whatsappHref } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="site-footer border-t border-white/10 bg-background">
      <Container className="py-12">
        <div className="footer-layout"><div><Logo /><p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">Acompañamiento 1:1 para crear tu negocio con dropshipping, desde la idea hasta tus primeras campañas.</p></div><nav aria-label="Navegación del pie" className="footer-links"><a href="#evidencia">Resultados</a><a href="#mentoria">La mentoría</a><a href="#metodologia">El proceso</a><a href="#faq">Preguntas</a><a href={whatsappConfigured ? whatsappHref() : "#contacto"} target={whatsappConfigured ? "_blank" : undefined} rel={whatsappConfigured ? "noopener noreferrer" : undefined}>Hablemos</a><a href="#top">Volver arriba ↑</a></nav></div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs leading-relaxed text-muted md:flex-row"><p className="max-w-2xl">{site.footerNote}</p><p className="shrink-0">© {new Date().getFullYear()} {site.brand}<br />Hecho por DILNIC STUDIO</p></div>
      </Container>
    </footer>
  );
}
