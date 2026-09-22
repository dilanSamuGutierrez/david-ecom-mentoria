import { Icon } from "./icon";
import { cn } from "@/lib/utils";

/**
 * Marco de imagen editorial (placeholder). No es un cuadro gris: es un marco
 * integrado con etiqueta tipo "figura", listo para reemplazar por la imagen real.
 */
export function MediaPlaceholder({
  label,
  icon = "image",
  className,
  aspect,
  index,
}: {
  label: string;
  icon?: string;
  className?: string;
  aspect?: string;
  index?: string;
}) {
  return (
    <figure
      className={cn(
        "media-frame group grid-bg flex min-h-[9rem] items-center justify-center bg-surface",
        className,
      )}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      <div className="absolute inset-0 glow-emerald opacity-20 transition-opacity duration-500 group-hover:opacity-40" />

      {/* etiqueta de esquina tipo editorial */}
      <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/40">
        <span>{index ?? "Fig."}</span>
        <span className="h-px w-5 bg-current opacity-50" />
        <span>Imagen</span>
      </div>

      <figcaption className="relative z-10 flex flex-col items-center gap-3 px-6 py-8 text-center">
        <span className="flex size-11 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary-soft">
          <Icon name={icon} className="size-5" />
        </span>
        <span className="max-w-[15rem] text-sm font-medium leading-snug text-white/75">
          {label}
        </span>
        <span className="text-xs text-white/35">Reemplazar por imagen real</span>
      </figcaption>
    </figure>
  );
}
