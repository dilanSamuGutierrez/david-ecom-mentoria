import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
        <svg
          viewBox="0 0 24 24"
          className="size-4 text-primary-soft"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M4 18 L10 12 L14 15 L20 7" />
          <path d="M15 7 h5 v5" />
        </svg>
      </span>
      <span className="text-[0.95rem] font-semibold tracking-tight text-foreground">
        David <span className="text-primary-soft">Ecom</span>
      </span>
    </span>
  );
}
