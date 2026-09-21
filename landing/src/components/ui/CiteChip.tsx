import { cn } from "../../lib/utils";

type Kind = "evidence" | "legal" | "case" | "ai";

const kindStyles: Record<Kind, string> = {
  evidence: "border-brass/40 bg-brass/10 text-walnut",
  legal: "border-walnut/45 bg-walnut/10 text-walnut",
  case: "border-navy/35 bg-navy/5 text-navy",
  ai: "border-indigo-ai/30 bg-indigo-soft text-indigo-ai",
};

/** Small source-reference pill — parchment for sources, indigo strictly for AI. */
export function CiteChip({
  children,
  kind = "evidence",
  className,
}: {
  children: React.ReactNode;
  kind?: Kind;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-[11px] py-[3px] text-[11px] font-bold transition-colors duration-200",
        kindStyles[kind],
        className,
      )}
    >
      {children}
    </span>
  );
}
