import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { EASE } from "../../lib/motion";
import { cn } from "../../lib/utils";

const TURNS = [
  {
    label: "Opening Argument",
    text: "“The agreement itself records handover at execution — Clause 7 is unambiguous, and the payment schedule follows it.”",
    cite: "Cited: Agreement · p.6",
    side: "left" as const,
  },
  {
    label: "Counterargument",
    text: "“Recorded terms are not conclusive where conduct suggests variation — the correspondence indicates continued occupation by the vendor.”",
    cite: "Cited: Correspondence · p.3",
    side: "right" as const,
  },
  {
    label: "Rebuttal",
    text: "“That correspondence predates execution. Nothing after the agreement's date supports a different sequence of events.”",
    cite: "Cited: Timeline · exhibit list",
    side: "left" as const,
  },
];

const EVAL_ROWS = [
  { label: "Use of evidence", width: "86%" },
  { label: "Structure of argument", width: "72%" },
  { label: "Response to counter", width: "64%" },
];

function EvaluationPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className="mt-2.5 w-full max-w-[640px] justify-self-center rounded border border-dashed border-brass/45 bg-paper/5 px-[26px] py-[22px]"
    >
      <span className="mb-2 block text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-brass-soft">
        Evaluation
      </span>
      <div className="grid gap-3">
        {EVAL_ROWS.map((row, i) => (
          <div
            key={row.label}
            className="grid grid-cols-[minmax(120px,190px)_1fr] items-center gap-4 text-[13px] font-semibold text-ivory/75"
          >
            <span>{row.label}</span>
            <span className="h-1.5 overflow-hidden rounded-[3px] bg-ivory/10">
              <motion.i
                className="block h-full rounded-[3px] bg-gradient-to-r from-brass to-brass-soft"
                initial={{ width: 0 }}
                animate={inView ? { width: row.width } : {}}
                transition={{ duration: reduceMotion ? 0 : 1.3, ease: EASE, delay: reduceMotion ? 0 : 0.3 + i * 0.15 }}
              />
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[12px] italic text-ivory/50">
        Feedback reflects argument craft in the simulation — not the merits of any real case.
      </p>
    </div>
  );
}

/** Educational courtroom simulation — Lawyer vs Opposing Counsel, with an evaluator. */
export function Courtroom() {
  return (
    <section
      id="courtroom"
      aria-label="Educational courtroom simulation"
      className="relative py-24 text-ivory md:py-40"
      style={{
        background:
          "radial-gradient(1000px 500px at 80% 0%, rgba(162,122,76,0.12), transparent 60%), linear-gradient(to bottom, #111A27, #182333)",
      }}
    >
      <div className="shell">
        <SectionHeading
          tone="light"
          eyebrow="Educational simulation"
          title={
            <>
              Step Into <em>the Case.</em>
            </>
          }
          sub="Argue your position against a simulated opposing counsel while an evaluator reviews the structure and grounding of each submission. A rehearsal room for legal reasoning — not a prediction of any court's decision."
        />

        <Reveal>
          <div className="rounded-lg border border-ivory/10 bg-ivory/[0.035] p-6 md:p-12">
            {/* Roles */}
            <div
              aria-hidden
              className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-ivory/10 pb-5 md:mb-11"
            >
              <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-ivory/60">
                Lawyer
                <em className="block font-serif text-[13px] font-medium normal-case italic tracking-[0.02em] text-brass-soft">
                  you
                </em>
              </span>
              <span className="rounded-full border border-brass/40 bg-brass/10 px-[18px] py-2 text-center text-[11px] font-extrabold uppercase tracking-[0.14em] text-brass-soft">
                Judge · Evaluator
              </span>
              <span className="text-right text-[11px] font-extrabold uppercase tracking-[0.14em] text-ivory/60">
                Opposing Counsel
                <em className="block font-serif text-[13px] font-medium normal-case italic tracking-[0.02em] text-brass-soft">
                  simulated
                </em>
              </span>
            </div>

            {/* Exchange */}
            <div className="grid gap-[18px]">
              {TURNS.map((turn, i) => (
                <Reveal key={turn.label} delay={i} className={cn(turn.side === "right" && "justify-self-end")}>
                  <div
                    className={cn(
                      "max-w-[min(560px,100%)] rounded border border-ivory/15 bg-paper/5 px-6 py-5",
                      turn.side === "left"
                        ? "border-l-[3px] border-l-brass"
                        : "border-r-[3px] border-r-ivory/30 text-right",
                    )}
                  >
                    <span className="mb-2 block text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-brass-soft">
                      {turn.label}
                    </span>
                    <p className="font-serif text-[clamp(16.5px,2vw,19px)] leading-[1.55] text-ivory/90">
                      {turn.text}
                    </p>
                    <span className="mt-3 inline-block rounded-full border border-brass/30 bg-brass/10 px-[11px] py-[3px] text-[11.5px] font-bold text-brass-soft/90">
                      {turn.cite}
                    </span>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={3} className="grid">
                <EvaluationPanel />
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
