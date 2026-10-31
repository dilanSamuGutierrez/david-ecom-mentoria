import type { ReactNode } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappHref, whatsappConfigured } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WhatsAppLink({ children, message, variant = "primary", className }: {
  children: ReactNode;
  message?: string;
  variant?: "primary" | "outline";
  className?: string;
}) {
  return (
    <a
      href={whatsappConfigured ? whatsappHref(message) : "#contacto"}
      target={whatsappConfigured ? "_blank" : undefined}
      rel={whatsappConfigured ? "noopener noreferrer" : undefined}
      className={cn("wa-link group", variant === "outline" && "wa-link-outline", className)}
    >
      <MessageCircle size={18} aria-hidden />
      <span>{children}</span>
      <ArrowUpRight size={18} aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
