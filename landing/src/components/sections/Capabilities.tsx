import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { CiteChip } from "../ui/CiteChip";
import { cn } from "../../lib/utils";

/* ---------- shared card shell ---------- */
function Card({
  children,
  className,
  span2 = false,
}: {
  children: ReactNode;
  className?: string;
  span2?: boolean;
}) {
  return (
    <article
      className={cn(
        "relative rounded-lg border border-border-soft bg-ivory p-7 transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-border hover:shadow-raised motion-reduce:hover:translate-y-0 md:p-10",
        span2 && "md:col-span-2",
        className,
      )}
    >
      {children}
    </article>
  );
}

function CapNum({ children }: { children: ReactNode }) {
  return (
    <span className="mb-3.5 block font-serif text-[15px] italic tracking-[0.06em] text-brass">
      {children}
    </span>
  );
}

function CapTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-3 font-serif text-[clamp(24px,3vw,29px)] font-semibold leading-tight text-ink">
      {children}
    </h3>
  );
}

function CapBody({ children }: { children: ReactNode }) {
  return <p className="max-w-[52ch] text-[15.5px] leading-relaxed text-muted">{children}</p>;
}

/* ---------- individual capability visuals ---------- */

function DocumentVisual() {
  return (
    <div aria-hidden className="overflow-hidden rounded border border-border bg-paper shadow-card">
      <div className="flex items-center justify-between border-b border-border-soft px-[18px] py-3 text-[12.5px] font-bold text-walnut">
        <span>Sale_Agreement_2019.pdf</span>
        <span className="rounded-full border border-[#3E6B4B]/25 bg-[#3E6B4B]/10 px-[9px] py-[3px] text-[10.5px] font-extrabold uppercase tracking-[0.1em] text-[#3E6B4B]">
          Processed
        </span>
      </div>
      <div className="px-[18px] pb-[18px] pt-4">
        {[
          ["Document type", "Agreement to Sell"],
          ["Parties", "Vendor · Purchaser"],
          ["Key dates", "Execution · Possession"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between gap-4 border-b border-dashed border-border-soft py-2 text-[13.5px]"
          >
            <span className="text-muted">{label}</span>
            <span className="text-right font-bold text-ink">{value}</span>
          </div>
        ))}
        <div className="mt-3.5 flex flex-wrap gap-2">
          <CiteChip kind="legal" className="text-[11.5px]">Clause 7 · Possession</CiteChip>
          <CiteChip kind="legal" className="text-[11.5px]">Clause 11 · Consideration</CiteChip>
          <CiteChip kind="case" className="text-[11.5px]">2 entities</CiteChip>
        </div>
      </div>
    </div>
  );
}

function KnowledgeVisual() {
  return (
    <div aria-hidden className="mt-6 flex flex-col items-start">
      <span className="inline-block rounded-full border border-brass bg-brass/10 px-[15px] py-[7px] text-[13px] font-bold text-walnut">
        Possession
      </span>
      <span className="ml-[42px] h-[22px] w-[1.5px] bg-border" />
      <div className="flex flex-wrap gap-2">
        {["Clause 7", "Handover date", "Related provision"].map((n) => (
          <span
            key={n}
            className="inline-block rounded-full border border-border bg-paper px-[15px] py-[7px] text-[13px] font-bold text-ink transition-all duration-200 hover:border-brass hover:shadow-card"
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

function SimilarVisual() {
  const rows = [
    { title: "Possession dispute · appellate", tag: "Close match", dim: "" },
    { title: "Agreement to sell · specific performance", tag: "Related", dim: "opacity-90" },
    { title: "Tenancy · handover of premises", tag: "Contextual", dim: "opacity-70" },
  ];
  return (
    <div aria-hidden className="mt-6 grid gap-2">
      {rows.map((r) => (
        <div
          key={r.title}
          className={cn(
            "flex items-center justify-between gap-3 rounded-sm border border-border-soft bg-paper px-4 py-3 text-[13.5px] transition-all duration-200 hover:translate-x-[3px] hover:border-border motion-reduce:hover:translate-x-0",
            r.dim,
          )}
        >
          <span className="font-semibold text-ink">{r.title}</span>
          <span className="flex-none rounded-full bg-brass/15 px-2.5 py-[3px] text-[10.5px] font-extrabold uppercase tracking-[0.08em] text-walnut">
            {r.tag}
          </span>
        </div>
      ))}
    </div>
  );
}

function EvidenceVisual() {
  return (
    <div aria-hidden className="mt-6 grid gap-2.5">
      <div className="flex items-center gap-2.5 rounded-sm border border-indigo-ai/25 border-l-[3px] border-l-indigo-ai bg-indigo-soft px-4 py-3 text-[14px] font-semibold text-ink">
        <span className="h-[9px] w-[9px] flex-none rounded-full bg-indigo-ai shadow-[0_0_0_4px_rgba(85,86,201,0.14)]" />
        Possession preceded the payment schedule.
      </div>
      <div className="flex gap-2 pl-[22px]">
        {["Agreement · p.6", "Judgment · p.14"].map((s) => (
          <span
            key={s}
            className="relative rounded-full border border-border bg-paper px-3 py-[5px] text-[12px] font-bold text-walnut before:absolute before:-top-[11px] before:left-3.5 before:h-2.5 before:w-[1.5px] before:bg-indigo-ai/40"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function ChatVisual() {
  return (
    <div aria-hidden className="grid gap-3.5 rounded border border-border bg-paper p-5 shadow-card">
      <div className="max-w-[85%] justify-self-end rounded-[14px] rounded-br-[4px] bg-navy px-[17px] py-[11px] font-devanagari text-[15.5px] text-ivory">
        कब्ज़ा किस तारीख़ को सौंपा गया था?
      </div>
      <div className="max-w-[92%] rounded-[14px] rounded-tl-[4px] border border-border-soft border-l-[3px] border-l-indigo-ai bg-ivory px-[17px] py-3.5 text-[14.5px] text-ink">
        <p>The record places handover on the date stated in Clause 7 of the agreement.</p>
        <div className="mt-2.5 flex flex-wrap gap-[7px]">
          <CiteChip>Agreement · p.6</CiteChip>
          <CiteChip>Judgment · p.14</CiteChip>
        </div>
      </div>
    </div>
  );
}

function CourtVisual() {
  const steps = ["Opening", "Counter", "Rebuttal", "Evaluation"];
  return (
    <div aria-hidden className="mt-6 flex flex-wrap items-center gap-x-1 gap-y-2">
      {steps.map((s, i) => (
        <span key={s} className="flex items-center">
          <span
            className={cn(
              "rounded-full border px-[15px] py-[7px] text-[12px] font-bold tracking-[0.04em] transition-colors duration-200",
              i === 0
                ? "border-brass bg-brass/10 text-walnut"
                : "border-border bg-paper text-muted hover:border-brass hover:bg-brass/10 hover:text-walnut",
              i === steps.length - 1 && "border-dashed",
            )}
          >
            {s}
          </span>
          {i < steps.length - 1 && (
            <ArrowRight size={12} className="mx-1.5 text-border" strokeWidth={2.5} />
          )}
        </span>
      ))}
    </div>
  );
}

/**
 * Core capabilities — six distinct editorial compositions instead of six
 * identical cards. Two full-width split cards anchor the grid.
 */
export function Capabilities() {
  return (
    <section
      id="features"
      aria-label="Core capabilities"
      className="border-y border-border-soft bg-paper py-24 md:py-36"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(233,221,200,0.35), transparent 240px)",
      }}
    >
      <div className="shell">
        <SectionHeading
          eyebrow="What the platform does"
          title={
            <>
              Built around the way
              <br className="hidden md:inline" /> <em>legal work actually happens.</em>
            </>
          }
        />

        <div className="grid gap-[22px] md:grid-cols-2">
          <Reveal className="md:col-span-2">
            <Card span2={false} className="grid items-center gap-8 md:grid-cols-[1.05fr_1fr]">
              <div>
                <CapNum>I</CapNum>
                <CapTitle>Document Understanding</CapTitle>
                <CapBody>
                  Scanned or born-digital, Hindi or English — KanoonDrishti reads a legal
                  document the way a junior would brief it: parties, dates, provisions and
                  structure, extracted and organised.
                </CapBody>
              </div>
              <DocumentVisual />
            </Card>
          </Reveal>

          <Reveal>
            <Card className="h-full">
              <CapNum>II</CapNum>
              <CapTitle>Legal Knowledge</CapTitle>
              <CapBody>
                Provisions, definitions and legal concepts surfaced from your documents and
                connected into a navigable knowledge graph — so context is a click away, not
                a separate search.
              </CapBody>
              <KnowledgeVisual />
            </Card>
          </Reveal>

          <Reveal delay={1}>
            <Card className="h-full">
              <CapNum>III</CapNum>
              <CapTitle>Similar Case Discovery</CapTitle>
              <CapBody>
                Semantic retrieval finds cases that resemble yours in substance — facts,
                provisions and posture — not just shared keywords.
              </CapBody>
              <SimilarVisual />
            </Card>
          </Reveal>

          <Reveal>
            <Card className="h-full">
              <CapNum>IV</CapNum>
              <CapTitle>Evidence-Grounded Analysis</CapTitle>
              <CapBody>
                Every analytical statement is pinned to the passages that support it. If it
                cannot be cited, it is not asserted.
              </CapBody>
              <EvidenceVisual />
            </Card>
          </Reveal>

          <Reveal delay={1}>
            <Card className="h-full">
              <CapNum>VI</CapNum>
              <CapTitle>Educational Courtroom Simulation</CapTitle>
              <CapBody>
                Practice structured legal reasoning against a simulated opposing counsel,
                with an evaluator that reviews the strength and grounding of each argument.
                For learning — not prediction.
              </CapBody>
              <CourtVisual />
            </Card>
          </Reveal>

          <Reveal className="md:col-span-2">
            <Card className="grid items-center gap-8 md:grid-cols-[1fr_1.05fr]">
              <div className="md:order-2">
                <CapNum>V</CapNum>
                <CapTitle>Contextual Legal Interaction</CapTitle>
                <CapBody>
                  Ask questions in Hindi, English or Hinglish. Answers stay inside your case
                  context and cite the documents they draw on — a conversation with your
                  file, not a generic chatbot.
                </CapBody>
              </div>
              <ChatVisual />
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
