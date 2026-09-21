import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { EASE } from "../../lib/motion";
import { cn } from "../../lib/utils";

/* ---------- citation marker with hover/focus tooltip ---------- */
function CiteMarker({
  label,
  tip,
  tone = "evidence",
}: {
  label: string;
  tip: string;
  tone?: "evidence" | "legal" | "case";
}) {
  const [open, setOpen] = useState(false);
  const tones = {
    evidence: "border-brass/45 bg-brass/10 text-walnut hover:bg-brass/25",
    legal: "border-walnut/50 bg-walnut/10 text-walnut hover:bg-walnut/20",
    case: "border-navy/40 bg-navy/5 text-navy hover:bg-navy/15",
  };
  return (
    <span className="relative inline-block align-super">
      <button
        type="button"
        aria-label={`Citation: ${tip}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className={cn(
          "ml-1 inline-grid h-[21px] min-w-[21px] cursor-help place-items-center rounded-[6px] border px-[5px] font-sans text-[10px] font-extrabold tracking-[0.04em] transition-all duration-200 hover:-translate-y-px motion-reduce:hover:translate-y-0",
          tones[tone],
        )}
      >
        {label}
      </button>
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute bottom-[calc(100%+9px)] left-1/2 z-30 w-max max-w-[240px] -translate-x-1/2 rounded-[7px] bg-navy px-[13px] py-2 text-left font-sans text-[11.5px] font-semibold leading-[1.45] text-ivory shadow-raised transition-all duration-200",
          open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
        )}
      >
        {tip}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-[5px] border-transparent border-t-navy" />
      </span>
    </span>
  );
}

/* ---------- legend ---------- */
const LEGEND = [
  { label: "Source evidence", swatch: "border-brass/40 bg-brass/25" },
  { label: "Legal source", swatch: "border-walnut/40 bg-walnut/20" },
  { label: "Retrieved case", swatch: "border-navy/35 bg-navy/10" },
  { label: "AI interpretation", swatch: "border-indigo-ai/50 bg-indigo-soft" },
];

/**
 * Evidence-First Intelligence — a realistic document viewer with animated
 * evidence highlights, hoverable citation markers, and a thin indigo trace
 * connecting the AI interpretation panel back to its supporting passages.
 */
export function EvidenceFirst() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "-140px" });
  const reduceMotion = useReducedMotion();
  const on = inView || !!reduceMotion;

  return (
    <section id="intelligence" aria-label="Evidence-first intelligence" className="bg-ivory py-24 md:py-40">
      <div className="shell">
        <SectionHeading
          eyebrow="Evidence-First Intelligence"
          title={
            <>
              Every insight <em>shows its source.</em>
            </>
          }
          sub="KanoonDrishti draws a visible line between what the AI says and where it read it. Source material stays on paper; interpretation stays in indigo. You always know which is which."
        />

        <Reveal>
          <div
            aria-label="Visual legend"
            className="mb-9 flex w-fit flex-wrap gap-x-7 gap-y-3.5 rounded border border-border-soft bg-paper px-[22px] py-4"
          >
            {LEGEND.map((l) => (
              <span
                key={l.label}
                className="inline-flex items-center gap-[9px] text-[12.5px] font-bold tracking-[0.04em] text-muted"
              >
                <span className={cn("h-3.5 w-3.5 rounded border", l.swatch)} />
                {l.label}
              </span>
            ))}
          </div>
        </Reveal>

        <div ref={wrapRef} className="grid items-start gap-6 xl:grid-cols-[58fr_80px_38fr] xl:gap-0">
          {/* ---- Document viewer ---- */}
          <Reveal>
            <div className="overflow-hidden rounded border border-border bg-paper shadow-raised">
              <div className="flex items-center justify-between gap-4 bg-navy px-[22px] py-[13px] text-[12.5px] font-bold tracking-[0.03em] text-ivory/90">
                <span>Judgment_Appeal_2021.pdf</span>
                <span className="whitespace-nowrap text-ivory/55">Page 14 / 42</span>
              </div>
              <div
                className="p-6 md:p-11"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(233,221,200,0.25), transparent 120px)",
                }}
              >
                <p className="mb-[22px] font-serif text-[clamp(15.5px,1.8vw,17.5px)] leading-[1.75] text-ink">
                  12. The appellant contends that the terms of the agreement were varied by
                  subsequent conduct. On examination of the record, however,{" "}
                  <mark
                    className={cn("evidence-sweep bg-transparent text-ink", on && "is-on")}
                    style={{ transitionDelay: reduceMotion ? undefined : "0.2s" }}
                  >
                    the agreement dated therein records, at Clause 7, that possession stood
                    delivered on the date of execution
                  </mark>
                  <CiteMarker label="E1" tip="Source evidence — Agreement, Clause 7, page 6" />, and
                  no contemporaneous document suggests otherwise.
                </p>
                <p className="mb-[22px] font-serif text-[clamp(15.5px,1.8vw,17.5px)] leading-[1.75] text-ink">
                  13. Counsel further relies on{" "}
                  <span className="rounded-t-sm border-b-2 border-walnut/45 bg-walnut/10 px-0.5">
                    the statutory provision governing part performance
                  </span>
                  <CiteMarker
                    label="S1"
                    tone="legal"
                    tip="Legal source — statutory provision, as cited in the record"
                  />
                  , submitting that the conduct of the parties is consistent with the terms
                  as written.{" "}
                  <mark
                    className={cn("evidence-sweep bg-transparent text-ink", on && "is-on")}
                    style={{ transitionDelay: reduceMotion ? undefined : "0.7s" }}
                  >
                    Payment entries in the annexed schedule follow, rather than precede, the
                    recorded handover
                  </mark>
                  <CiteMarker label="E2" tip="Source evidence — Payment schedule, Annexure C, page 22" />.
                </p>
                <p className="font-serif text-[clamp(15.5px,1.8vw,17.5px)] leading-[1.75] text-ink/55">
                  14. A comparable sequence of events was considered in{" "}
                  <span className="rounded-t-sm border-b-2 border-dotted border-navy/50 bg-navy/5 px-0.5">
                    a retrieved appellate matter on possession and part payment
                  </span>
                  <CiteMarker
                    label="C1"
                    tone="case"
                    tip="Retrieved case — similar appellate matter, retrieved by semantic search"
                  />
                  , where the timing of handover was treated as the decisive fact…
                </p>
                <div className="mt-6 border-t border-dashed border-border pt-3.5 text-[11.5px] uppercase tracking-[0.06em] text-muted">
                  Illustrative excerpt · not a real judgment
                </div>
              </div>
            </div>
          </Reveal>

          {/* ---- Tracing connector (desktop only) ---- */}
          <svg
            aria-hidden
            className="mt-[120px] hidden h-[300px] w-[80px] text-indigo-ai xl:block"
            viewBox="0 0 80 300"
            preserveAspectRatio="none"
            fill="none"
          >
            {[
              { d: "M0 60 C 44 60, 44 78, 80 82", delay: 0.9 },
              { d: "M0 150 C 44 150, 44 132, 80 118", delay: 1.2 },
            ].map((p) => (
              <motion.path
                key={p.d}
                d={p.d}
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeDasharray="4 5"
                className="opacity-70"
                initial={{ pathLength: 0 }}
                animate={on ? { pathLength: 1 } : {}}
                transition={{ duration: reduceMotion ? 0 : 1.5, ease: EASE, delay: reduceMotion ? 0 : p.delay }}
              />
            ))}
          </svg>

          {/* ---- AI interpretation panel ---- */}
          <Reveal delay={1}>
            <aside
              aria-label="AI interpretation panel"
              className="overflow-hidden rounded border border-indigo-ai/30 border-t-[3px] border-t-indigo-ai bg-paper shadow-raised xl:mt-16"
            >
              <div className="flex items-center gap-2.5 border-b border-border-soft px-[22px] py-[15px] text-[12px] font-extrabold uppercase tracking-[0.12em] text-indigo-ai">
                <Sparkles size={14} strokeWidth={2.2} />
                <span>AI Interpretation</span>
                <span className="ml-auto rounded-full border border-[#3E6B4B]/25 bg-[#3E6B4B]/10 px-[9px] py-[3px] text-[10px] tracking-normal text-[#3E6B4B]">
                  Grounded
                </span>
              </div>
              <div className="px-[22px] py-5">
                <p className="text-[15px] leading-[1.7] text-ink">
                  On the current record, the timeline supports the position that possession
                  was delivered at execution: the clause records it directly, and the
                  payment schedule is consistent with that sequence.
                </p>
                <div className="mt-[18px]">
                  <span className="mb-1.5 block text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-muted">
                    Supported by
                  </span>
                  <div className="flex flex-wrap gap-[7px]">
                    {[
                      { t: "E1 · Agreement, p.6", c: "border-brass/40 bg-brass/10 text-walnut" },
                      { t: "E2 · Annexure C, p.22", c: "border-brass/40 bg-brass/10 text-walnut" },
                      { t: "S1 · Statutory provision", c: "border-walnut/45 bg-walnut/10 text-walnut" },
                      { t: "C1 · Retrieved case", c: "border-navy/35 bg-navy/5 text-navy" },
                    ].map((pill) => (
                      <span
                        key={pill.t}
                        className={cn(
                          "rounded-full border px-[11px] py-1 text-[11.5px] font-bold transition-all duration-200 hover:-translate-y-px hover:shadow-card motion-reduce:hover:translate-y-0",
                          pill.c,
                        )}
                      >
                        {pill.t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-t border-indigo-ai/20 bg-indigo-soft px-[22px] py-[13px] text-[12.5px] text-indigo-deep">
                Interpretations are assistive and always displayed alongside their sources.
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
