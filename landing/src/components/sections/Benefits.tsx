import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const BENEFITS = [
  {
    title: "Complex documents become legible",
    body: "Long judgments and dense agreements are structured into something you can actually navigate.",
  },
  {
    title: "Research stays inside the case",
    body: "Retrieval and analysis remain connected to your matter — no context lost between tools.",
  },
  {
    title: "You can follow the reasoning",
    body: "Every AI-assisted statement carries its evidence, so verification takes seconds, not hours.",
  },
  {
    title: "Language stops being a barrier",
    body: "Work fluidly across Hindi and English content — including scanned and mixed-language files.",
  },
  {
    title: "Related cases surface themselves",
    body: "Semantically similar matters and relevant research arrive with your document, not after it.",
  },
  {
    title: "Reasoning becomes a practice",
    body: "The courtroom simulation turns argument structure into a skill you can rehearse safely.",
  },
];

/** Benefits as an editorial ledger — numbered entries on parchment. */
export function Benefits() {
  return (
    <section aria-label="Practical outcomes" className="border-t border-border bg-parchment py-24 md:py-36">
      <div className="shell">
        <SectionHeading
          eyebrow="Why it matters"
          title={
            <>
              What changes when <em>evidence leads.</em>
            </>
          }
        />
        <ol className="m-0 grid list-none p-0 md:grid-cols-2 md:gap-x-16">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i % 2}>
              <li className="flex gap-6 border-b border-walnut/20 px-1 py-[30px] transition-transform duration-300 ease-out hover:translate-x-[5px] motion-reduce:hover:translate-x-0">
                <span className="flex-none font-serif text-[26px] italic leading-[1.2] text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-1.5 font-serif text-[22px] font-semibold text-ink">{b.title}</h3>
                  <p className="max-w-[44ch] text-[14.5px] leading-relaxed text-muted">{b.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
