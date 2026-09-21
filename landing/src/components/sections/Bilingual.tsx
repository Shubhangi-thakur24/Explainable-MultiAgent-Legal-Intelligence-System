import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";
import { CiteChip } from "../ui/CiteChip";
import { EASE } from "../../lib/motion";
import { cn } from "../../lib/utils";

type Lang = "en" | "hi";

const CONTENT: Record<
  Lang,
  {
    head: string;
    tag: string;
    title: string;
    body: string;
    cites: string[];
  }
> = {
  en: {
    head: "Case summary",
    tag: "EN",
    title: "Summary of the possession question",
    body: "The agreement records that possession was handed over on the date of execution. The payment schedule that follows is consistent with this sequence, and no document on the record suggests a later handover.",
    cites: ["Agreement · p.6", "Annexure C · p.22"],
  },
  hi: {
    head: "मामले का सारांश",
    tag: "हिं",
    title: "क़ब्ज़े के प्रश्न का सारांश",
    body: "अनुबंध में यह दर्ज है कि क़ब्ज़ा निष्पादन की तिथि पर सौंपा गया। इसके बाद की भुगतान अनुसूची इसी क्रम के अनुरूप है, और अभिलेख में कोई भी दस्तावेज़ बाद में क़ब्ज़ा सौंपे जाने का संकेत नहीं देता।",
    cites: ["अनुबंध · पृष्ठ 6", "अनुलग्नक C · पृष्ठ 22"],
  },
};

/**
 * Bilingual experience — an authentic product interaction: a language toggle
 * that swaps the same grounded summary between English and Hindi with a
 * refined layered transition and proper Devanagari typography.
 */
export function Bilingual() {
  const [lang, setLang] = useState<Lang>("en");
  const reduceMotion = useReducedMotion();
  const doc = CONTENT[lang];

  return (
    <section
      aria-label="Bilingual experience"
      className="border-y border-border-soft bg-paper py-24 md:py-36"
      style={{
        backgroundImage:
          "radial-gradient(900px 500px at 10% 20%, rgba(233,221,200,0.5), transparent 65%)",
      }}
    >
      <div className="shell grid items-center gap-12 lg:grid-cols-[44fr_56fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow className="mb-[18px]">Bilingual by design</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-[clamp(34px,5vw,52px)] font-semibold leading-[1.12] tracking-[-0.01em] text-ink">
              Law, in the language <em className="italic text-walnut">you understand.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 max-w-[58ch] text-[17px] leading-relaxed text-muted">
              Indian legal work moves between Hindi, English and everything in between.
              KanoonDrishti reads, retrieves and explains across both — with the same
              evidence discipline in either language.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div
              role="tablist"
              aria-label="Language"
              className="mt-8 inline-flex gap-1 rounded-full border border-border bg-ivory p-1"
            >
              <button
                role="tab"
                aria-selected={lang === "en"}
                onClick={() => setLang("en")}
                className={cn(
                  "rounded-full px-[26px] py-[9px] text-[14px] font-bold transition-all duration-300",
                  lang === "en" ? "bg-navy text-ivory shadow-card" : "text-muted hover:text-ink",
                )}
              >
                English
              </button>
              <button
                role="tab"
                aria-selected={lang === "hi"}
                onClick={() => setLang("hi")}
                className={cn(
                  "rounded-full px-[26px] py-[9px] font-devanagari text-[15px] font-bold transition-all duration-300",
                  lang === "hi" ? "bg-navy text-ivory shadow-card" : "text-muted hover:text-ink",
                )}
              >
                हिन्दी
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={1}>
          <div className="relative min-h-[340px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={lang}
                lang={lang === "hi" ? "hi" : undefined}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.99 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="rounded border border-border bg-paper p-6 shadow-raised md:p-10"
              >
                <div className="mb-[22px] flex items-center justify-between border-b border-border-soft pb-3.5 text-[12px] font-extrabold uppercase tracking-[0.14em] text-muted">
                  <span className={lang === "hi" ? "font-devanagari tracking-[0.06em]" : undefined}>
                    {doc.head}
                  </span>
                  <span className="rounded-full border border-brass/30 bg-brass/10 px-2.5 py-[3px] text-[11px] tracking-[0.04em] text-walnut">
                    {doc.tag}
                  </span>
                </div>
                <h3
                  className={cn(
                    "mb-3.5 font-semibold text-ink",
                    lang === "hi"
                      ? "font-devanagari text-[clamp(21px,2.8vw,26px)] leading-[1.4]"
                      : "font-serif text-[clamp(23px,3vw,28px)] leading-tight",
                  )}
                >
                  {doc.title}
                </h3>
                <p
                  className={cn(
                    lang === "hi"
                      ? "font-devanagari text-[16px] leading-[1.95] text-[#5D564C]"
                      : "text-[15.5px] leading-[1.8] text-muted",
                  )}
                >
                  {doc.body}
                </p>
                <div className="mt-[22px] flex flex-wrap gap-2">
                  {doc.cites.map((c) => (
                    <CiteChip key={c} className={lang === "hi" ? "font-devanagari" : undefined}>
                      {c}
                    </CiteChip>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
