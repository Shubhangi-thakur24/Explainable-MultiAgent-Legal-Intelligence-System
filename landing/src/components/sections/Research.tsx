import { Search } from "lucide-react";
import referenceDesk from "../../assets/reference-desk.jpg";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";
import { cn } from "../../lib/utils";

const RESULTS = [
  {
    kind: "Retrieved case",
    kindClass: "border-navy/30 bg-navy/5 text-navy",
    text: "Appellate matter — timing of handover treated as the decisive fact.",
    meta: "Passage · p.9 · retrieved semantically",
  },
  {
    kind: "Legal source",
    kindClass: "border-walnut/35 bg-walnut/10 text-walnut",
    text: "Statutory provision on part performance, with annotated commentary.",
    meta: "Section reference · annotated",
  },
  {
    kind: "Your case file",
    kindClass: "border-brass/40 bg-brass/10 text-brass",
    text: "Clause 7 of the agreement — possession recorded at execution.",
    meta: "Agreement · p.6 · this matter",
  },
];

/** Legal Knowledge / Research — a premium digital reference desk. */
export function Research() {
  return (
    <section aria-label="Legal knowledge and research" className="bg-ivory py-24 md:py-36">
      <div className="shell grid items-center gap-12 lg:grid-cols-[46fr_54fr] lg:gap-[72px]">
        <Reveal>
          <figure className="m-0">
            <img
              src={referenceDesk}
              alt="An open legal reference volume with annotations, on a reading desk before shelves of law reports."
              loading="lazy"
              width={1408}
              height={768}
              className="h-[clamp(300px,40vw,560px)] w-full rounded-lg border border-walnut/15 object-cover shadow-deep"
            />
            <figcaption className="mt-3.5 font-serif text-[15px] italic text-muted">
              The reference desk, reimagined as a connected surface.
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow className="mb-[18px]">Legal knowledge &amp; research</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-[clamp(34px,5vw,52px)] font-semibold leading-[1.12] tracking-[-0.01em] text-ink">
              A reference desk that <em className="italic text-walnut">understands the question.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 max-w-[58ch] text-[17px] leading-relaxed text-muted">
              Ask in plain language. Semantic retrieval reaches across judgments, provisions,
              articles and your own case file — returning passages, not just titles, each
              with its page and source attached.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div aria-hidden className="mt-8 overflow-hidden rounded border border-border bg-paper shadow-raised">
              <div
                className="flex items-center gap-3 border-b border-border-soft px-5 py-[15px]"
                style={{
                  backgroundImage: "linear-gradient(to bottom, rgba(233,221,200,0.3), transparent)",
                }}
              >
                <Search size={16} strokeWidth={2.4} className="flex-none text-brass" />
                <span className="font-serif text-[15.5px] italic text-ink">
                  when is possession treated as delivered under an agreement to sell?
                </span>
              </div>
              <div className="grid gap-1 p-2">
                {RESULTS.map((r) => (
                  <div
                    key={r.kind}
                    className="rounded-sm px-[15px] py-[13px] transition-colors duration-200 hover:bg-parchment/35"
                  >
                    <span
                      className={cn(
                        "rounded-full border px-[9px] py-[2.5px] text-[10px] font-extrabold uppercase tracking-[0.12em]",
                        r.kindClass,
                      )}
                    >
                      {r.kind}
                    </span>
                    <p className="mb-[3px] mt-[7px] text-[14.5px] font-semibold text-ink">{r.text}</p>
                    <span className="text-[12px] text-muted">{r.meta}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
