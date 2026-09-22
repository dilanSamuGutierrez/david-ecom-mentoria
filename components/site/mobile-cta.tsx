"use client";

import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { useContactVisibility } from "./use-contact-visibility";

export function MobileCtaBar() {
  const show = useContactVisibility();
  if (!show) return null;
  return <aside className="conversion-controls mobile-contact" aria-label="Contacto rápido"><WhatsAppLink>Hablar por WhatsApp</WhatsAppLink></aside>;
}
