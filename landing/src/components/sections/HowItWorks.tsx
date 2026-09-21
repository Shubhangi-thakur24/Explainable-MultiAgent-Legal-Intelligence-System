import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FileText, Sparkles } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { CiteChip } from "../ui/CiteChip";
import { EASE } from "../../lib/motion";
import { cn } from "../../lib/utils";

const STEPS = [
  {
    num: "01",
    title: "Upload",
    body: "Bring in judgments, petitions, FIRs or affidavits — scanned images or digital files, Hindi or English. OCR and preprocessing make every page readable.",
  },
  {
    num: "02",
    title: "Understand",
    body: "Multilingual legal NLP classifies the document and extracts its structure — parties, provisions, entities and the relationships between them.",
  },
  {
    num: "03",
    title: "Retrieve",
    body: "Hybrid semantic and keyword retrieval gathers the relevant passages, similar cases and legal sources — each pinned to its page.",
  },
  {
    num: "04",
    title: "Analyze",
    body: "Multiple specialised agents reason over the evidence together — cross-checking documents, knowledge and retrieved context.",
  },
  {
    num: "05",
    title: "Explain",
    body: "The result is an explainable answer: readable, bilingual, and cited — with every supporting passage one click away.",
  },
];

/* ---------- stage visuals ---------- */

function StageUpload() {
  return (
    <div className="flex h-full flex-col justify-center gap-3.5">
      {[
        { name: "FIR_Scan_017.pdf", meta: "Scanned · Hindi · 6 pages", indent: false },
        { name: "Judgment_Appeal_2021.pdf", meta: "Digital · English · 42 pages", indent: true },
      ].map((f) => (
        <div
          key={f.name}
          className={cn(
            "flex items-center gap-3.5 rounded-sm border border-border bg-paper px-[18px] py-3.5",
            f.indent && "ml-7",
          )}
        >
          <FileText size={26} strokeWidth={1.6} className="flex-none text-brass" />
          <div>
            <strong className="block text-[14px] text-ink">{f.name}</strong>
            <span className="text-[12px] text-muted">{f.meta}</span>
          </div>
        </div>
      ))}
      <div className="mt-1 h-[5px] overflow-hidden rounded-[3px] bg-parchment">
        <motion.span
          className="block h-full rounded-[3px] bg-brass"
          initial={{ width: "8%" }}
          animate={{ width: "72%" }}
          transition={{ duration: 1.2, ease: EASE }}
        />
      </div>
      <p className="text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-brass">
        OCR &amp; preprocessing
      </p>
    </div>
  );
}

function StageUnderstand() {
  return (
    <div className="flex h-full flex-col justify-center gap-3.5">
      <div className="rounded-sm border border-border bg-paper px-5 py-[18px]">
        {["80%", "100%", "95%", "70%"].map((w, i) => (
          <div key={i} className="my-2 h-[7px] rounded-[3px] bg-parchment" style={{ width: w }} />
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <CiteChip kind="legal" className="text-[11.5px]">Provision identified</CiteChip>
        <CiteChip kind="case" className="text-[11.5px]">Entities · 4</CiteChip>
        <CiteChip kind="ai" className="text-[11.5px]">Relationships · 3</CiteChip>
      </div>
      <p className="text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-brass">
        Structure extracted
      </p>
    </div>
  );
}

function StageRetrieve() {
  const rows = [
    { kind: "Passage", kindClass: "border-brass/40 bg-brass/10 text-brass", text: "Clause 7 — possession at execution", meta: "Agreement · p.6" },
    { kind: "Case", kindClass: "border-navy/30 bg-navy/5 text-navy", text: "Similar appellate matter", meta: "Semantic match" },
    { kind: "Provision", kindClass: "border-walnut/35 bg-walnut/10 text-walnut", text: "Part performance", meta: "Annotated" },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-2.5">
      {rows.map((r) => (
        <div key={r.text} className="rounded-sm border border-border bg-paper px-4 py-3">
          <span className={cn("rounded-full border px-[9px] py-[2px] text-[10px] font-extrabold uppercase tracking-[0.12em]", r.kindClass)}>
            {r.kind}
          </span>
          <p className="mb-[2px] mt-[5px] text-[14px] font-semibold text-ink">{r.text}</p>
          <em className="text-[12px] not-italic text-muted">{r.meta}</em>
        </div>
      ))}
      <p className="text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-brass">
        Evidence gathered, pages pinned
      </p>
    </div>
  );
}

function StageAnalyze() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-wrap justify-center gap-2.5">
        {["Research agent", "Case-analysis agent", "Citation checker"].map((a) => (
          <span
            key={a}
            className="rounded-full border border-indigo-ai/30 bg-indigo-soft px-[18px] py-2 text-[13px] font-bold text-indigo-ai"
          >
            {a}
          </span>
        ))}
      </div>
      <svg className="w-full max-w-[260px] text-indigo-ai" viewBox="0 0 240 80" fill="none" aria-hidden>
        {["M40 12 C 90 40, 150 40, 200 12", "M40 68 C 90 40, 150 40, 200 68", "M40 12 C 60 40, 60 40, 40 68"].map((d) => (
          <motion.path
            key={d}
            d={d}
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeDasharray="4 5"
            className="opacity-60"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
          />
        ))}
      </svg>
      <p className="text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-brass">
        Agents cross-check the record
      </p>
    </div>
  );
}

function StageExplain() {
  return (
    <div className="flex h-full flex-col justify-center gap-3.5">
      <div className="rounded border border-indigo-ai/30 border-t-[3px] border-t-indigo-ai bg-paper px-5 pb-[18px] shadow-card">
        <div className="flex items-center gap-2.5 py-3.5 text-[12px] font-extrabold uppercase tracking-[0.12em] text-indigo-ai">
          <Sparkles size={13} strokeWidth={2.2} />
          Explained answer
        </div>
        <p className="text-[15px] leading-[1.65] text-ink">
          Possession is recorded as delivered at execution; the payment sequence is
          consistent with that reading.
        </p>
        <div className="mt-2.5 flex flex-wrap gap-[7px]">
          <CiteChip>Agreement · p.6</CiteChip>
          <CiteChip>Annexure C · p.22</CiteChip>
        </div>
      </div>
      <p className="text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-brass">
        Readable · bilingual · cited
      </p>
    </div>
  );
}

const STAGE_VISUALS = [StageUpload, StageUnderstand, StageRetrieve, StageAnalyze, StageExplain];

/**
 * How It Works — a scroll-driven narrative. Steps on the left activate as they
 * cross the viewport midline; a sticky stage on the right morphs from raw
 * document → structure → retrieval → analysis → explained output.
 */
export function HowItWorks() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.step);
            setActive(idx);
          }
        }
      },
      { rootMargin: "-42% 0px -48% 0px" },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const StageVisual = STAGE_VISUALS[active];

  return (
    <section
      id="how-it-works"
      aria-label="How it works"
      className="border-y border-border-soft bg-paper py-24 md:py-36"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From Document <em>to Understanding.</em>
            </>
          }
        />
      </div>

      <div className="shell grid gap-12 lg:grid-cols-[46fr_54fr] lg:gap-20">
        <div className="grid content-start gap-2">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              data-step={i}
              className={cn(
                "relative rounded border py-[22px] pl-[76px] pr-6 transition-all duration-500 ease-out",
                active === i
                  ? "border-border-soft bg-ivory opacity-100"
                  : "border-transparent opacity-45",
              )}
            >
              <span
                className={cn(
                  "absolute left-6 top-6 font-serif text-[24px] italic transition-colors duration-500",
                  active === i ? "text-brass" : "text-border",
                )}
              >
                {step.num}
              </span>
              <h3 className="mb-1.5 font-serif text-[24px] font-semibold text-ink">{step.title}</h3>
              <p className="max-w-[46ch] text-[14.5px] leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="lg:sticky lg:top-[108px] lg:self-start">
          <div
            aria-hidden
            className="relative min-h-[380px] overflow-hidden rounded-lg border border-border bg-ivory p-6 shadow-raised md:p-9"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="min-h-[320px]"
              >
                <StageVisual />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
