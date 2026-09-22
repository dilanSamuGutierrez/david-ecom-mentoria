import type { ReactNode } from "react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function Kicker({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn("kicker", className)}>{children}</span>;
}

/** Encabezado de sección editorial: índice + kicker + título grande + lead. */
export function SectionHeader({
  index,
  kicker,
  title,
  lead,
  align = "left",
  className,
  titleClassName,
}: {
  index?: string;
  kicker?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto flex flex-col items-center text-center",
        className,
      )}
    >
      {(index || kicker) && (
        <Reveal>
          <div className="flex items-center gap-4">
            {index && (
              <span className="index-num font-mono text-base tracking-tight">
                {index}
              </span>
            )}
            {kicker && <Kicker>{kicker}</Kicker>}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "display text-4xl text-balance sm:text-5xl md:text-[3.4rem]",
            (index || kicker) && "mt-6",
            titleClassName,
          )}
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-6 max-w-2xl text-lg leading-relaxed text-muted",
              align === "center" && "mx-auto",
            )}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---- Compatibilidad con secciones previas ---- */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn("kicker", className)}>{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  center = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <SectionHeader
      kicker={eyebrow}
      title={title}
      lead={lead}
      align={center ? "center" : "left"}
      className={className}
    />
  );
}
