"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { CtaButton } from "@/components/ui/cta";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { Check } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
      {/* fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[46rem] w-[46rem] -translate-x-1/2 glow-emerald opacity-70" />
        <div className="absolute inset-0 grid-bg opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="pointer-events-none absolute -left-4 top-24 select-none text-[7rem] leading-none sm:text-[11rem] lg:text-[14rem] ghost-word">
        ECOM
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary-soft"
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-soft/70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary-soft" />
              </span>
              {site.hero.badge}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.1rem]"
            >
              {site.hero.titleTop}{" "}
              <span className="text-gradient">{site.hero.titleHighlight}</span>
              <br className="hidden sm:block" /> {site.hero.titleBottom}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              {site.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <CtaButton href={site.contact.bookingUrl} external>
                {site.cta.primary}
              </CtaButton>
              <CtaButton
                href={`https://wa.me/${site.contact.whatsapp}`}
                external
                variant="outline"
              >
                {site.cta.secondary}
              </CtaButton>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.36 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
            >
              {site.hero.points.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <Check className="size-4 text-primary-soft" />
                  {p}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <MediaPlaceholder
              label="Foto del mentor / David Ecom"
              icon="users"
              aspect="4/5"
              className="mx-auto max-w-sm"
            />

            <div className="absolute -left-3 top-8 hidden rounded-xl glass-strong px-4 py-3 sm:block">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-primary-soft">
                Revisión
              </p>
              <p className="mt-0.5 text-sm font-medium">Campañas reales</p>
            </div>

            <div className="absolute -right-3 bottom-10 hidden rounded-xl glass-strong px-4 py-3 sm:block">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-primary-soft">
                Datos
              </p>
              <p className="mt-0.5 text-sm font-medium">No corazonadas</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
