"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <div
        className={cn(
          "mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full pl-5 pr-2 transition-all duration-500",
          scrolled || open ? "border border-white/10 bg-[#070d0b]/95 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]" : "border border-transparent",
        )}
      >
        <a href="#top" aria-label={site.brand} onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-roll text-sm text-white/70 transition-colors hover:text-white">
              <span data-texto={item.label}>{item.label}</span>
            </a>
          ))}
        </nav>

        <a href="#contacto" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-soft lg:inline-flex">
          {site.navCta}
        </a>

        <button
          ref={menuButton}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex size-11 items-center justify-center rounded-full text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="mx-auto mt-2 max-w-6xl rounded-[1.5rem] border border-white/10 bg-[#070d0b] p-3 lg:hidden">
          <nav className="flex flex-col" aria-label="Principal móvil">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3.5 text-lg text-white/80 transition-colors hover:bg-white/5 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-5 py-3.5 text-center font-semibold text-primary-foreground">
              {site.navCta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
