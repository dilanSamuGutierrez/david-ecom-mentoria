import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-tight transition-all duration-300 px-6 py-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-soft shadow-[0_12px_44px_-14px_rgba(16,185,129,0.75)] hover:shadow-[0_16px_50px_-12px_rgba(16,185,129,0.85)]",
  outline:
    "border border-white/15 text-foreground hover:border-primary/60 hover:bg-white/[0.04]",
  ghost: "text-foreground/80 hover:text-foreground",
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  external = false,
  showArrow = true,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  showArrow?: boolean;
  className?: string;
}) {
  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {content}
    </Link>
  );
}
