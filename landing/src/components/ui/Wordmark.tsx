import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

/** KanoonDrishti AI wordmark — Devanagari glyph seal + editorial serif. */
export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2.5 no-underline"
      aria-label="KanoonDrishti AI — home"
    >
      <span
        aria-hidden="true"
        className={cn(
          "grid h-[34px] w-[34px] place-items-center rounded-[8px] pb-0.5 font-devanagari text-[17px] font-semibold leading-none text-brass-soft",
          light ? "bg-ivory/10" : "bg-navy",
        )}
      >
        दृ
      </span>
      <span
        className={cn(
          "font-serif text-[21px] font-bold tracking-[0.005em]",
          light ? "text-ivory" : "text-ink",
        )}
      >
        KanoonDrishti
        <span className="ml-1 align-super font-sans text-[11px] font-extrabold tracking-[0.14em] text-indigo-ai">
          AI
        </span>
      </span>
    </Link>
  );
}
