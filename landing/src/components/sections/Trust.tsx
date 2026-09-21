import { ArrowRight } from "lucide-react";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";

const ITEMS = [
  {
    title: "Evidence visibility",
    body: "Supporting passages are shown beside the analysis, on the page they came from.",
  },
  {
    title: "Source references",
    body: "Citations carry document, page and passage — enough to verify independently.",
  },
  {
    title: "Explainable reasoning",
    body: "Multi-agent steps are inspectable, so conclusions can be traced, not just trusted.",
  },
  {
    title: "Bilingual processing",
    body: "Hindi and English are first-class throughout — retrieval, analysis and explanation.",
  },
  {
    title: "Contextual understanding",
    body: "Analysis stays scoped to your case context, with case-level data isolation.",
  },
  {
    title: "Responsible use",
    body: "KanoonDrishti assists understanding and research. It does not give legal advice or predict outcomes.",
  },
];

/** Responsible AI / trust — evidence trails instead of shield icons. */
export function Trust() {
  return (
    <section aria-label="Responsible AI" className="bg-ivory py-24 md:py-36">
      <div className="shell grid gap-14 lg:grid-cols-[42fr_58fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow className="mb-[18px]">Responsible by construction</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-[clamp(34px,5vw,52px)] font-semibold leading-[1.12] tracking-[-0.01em] text-ink">
              Grounded. Visible. <em className="italic text-walnut">Accountable.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 max-w-[58ch] text-[17px] leading-relaxed text-muted">
              Explainability is not a feature toggle here — it is the architecture. Analysis
              is retrieved before it is generated, cited before it is shown, and always
              separable from the sources beneath it.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div aria-hidden className="mt-9 flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-indigo-ai/35 bg-indigo-soft px-4 py-2 text-[12.5px] font-bold text-indigo-ai">
                AI statement
              </span>
              <ArrowRight size={16} strokeWidth={2.2} className="text-brass" />
              <span className="rounded-full border border-border bg-paper px-4 py-2 text-[12.5px] font-bold text-walnut">
                Cited passage
              </span>
              <ArrowRight size={16} strokeWidth={2.2} className="text-brass" />
              <span className="rounded-full border border-border bg-paper px-4 py-2 text-[12.5px] font-bold text-walnut">
                Source page
              </span>
            </div>
          </Reveal>
        </div>

        <dl className="m-0 grid content-start sm:grid-cols-2 sm:gap-x-11">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i % 2} className="border-b border-border-soft py-6">
              <dt className="mb-[7px] font-serif text-[21px] font-semibold text-ink">{item.title}</dt>
              <dd className="m-0 text-[14.5px] leading-relaxed text-muted">{item.body}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
