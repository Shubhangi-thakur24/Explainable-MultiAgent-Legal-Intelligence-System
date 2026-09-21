import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

export function Eyebrow({
  children,
  tone = "brass",
  className,
}: {
  children: ReactNode;
  tone?: "brass" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-sans text-eyebrow font-bold uppercase",
        tone === "brass" ? "text-brass" : "text-brass-soft",
        className,
      )}
    >
      {children}
    </p>
  );
}
