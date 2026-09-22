import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/** Keep reading content visible on first render, including without JavaScript. */
export function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}
