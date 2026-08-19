"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export function Stat({
  value,
  prefix = "",
  suffix = "",
  label,
  note,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  note?: string;
  className?: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-40px" });

  return (
    <div ref={ref} className={cn("flex flex-col", className)}>
      <div className="font-mono text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        <span className="text-primary-soft">{prefix}</span>
        {inView ? <CountUp end={value} duration={2.2} separator="." /> : 0}
        <span className="text-primary-soft">{suffix}</span>
      </div>
      <div className="mt-3 text-sm leading-snug text-muted">{label}</div>
      {note ? (
        <div className="mt-1 font-mono text-[0.65rem] tracking-wide text-faint">
          {note}
        </div>
      ) : null}
    </div>
  );
}
