import { Icon } from "./icon";
import { cn } from "@/lib/utils";

export function MediaPlaceholder({
  label,
  icon = "image",
  className,
  aspect,
}: {
  label: string;
  icon?: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex min-h-[10rem] items-center justify-center overflow-hidden rounded-2xl",
        className,
      )}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      <div className="absolute inset-0 glass grid-bg" />
      <div className="absolute inset-0 glow-emerald opacity-25 transition-opacity duration-500 group-hover:opacity-45" />
      <div className="absolute inset-3 rounded-xl border border-dashed border-primary/25" />

      <div className="relative z-10 flex flex-col items-center gap-3 px-6 py-8 text-center">
        <div className="flex size-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary-soft">
          <Icon name={icon} className="size-5" />
        </div>
        <div className="font-mono text-[0.68rem] tracking-[0.25em] text-foreground/60">
          [ IMAGEN ]
        </div>
        <div className="max-w-[16rem] text-sm font-medium leading-snug text-foreground/85">
          {label}
        </div>
        <div className="text-xs text-faint">Reemplazar por captura real</div>
      </div>
    </div>
  );
}
