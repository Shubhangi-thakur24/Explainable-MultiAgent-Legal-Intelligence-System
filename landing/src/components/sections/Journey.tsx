import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { EASE } from "../../lib/motion";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";

const STAGES = [
  {
    index: "01",
    title: "Documents",
    body: "Judgments, petitions, FIRs and affidavits — scanned or digital, in Hindi or English.",
    fragment: "Judgment_Appeal_2021.pdf · 42 pages",
  },
  {
    index: "02",
    title: "Legal Knowledge",
    body: "Provisions, entities and relationships identified within the text itself.",
    fragment: "Clause 7 · Possession · 4 entities",
  },
  {
    index: "03",
    title: "Case Context",
    body: "Every document read within the matter it belongs to — never in isolation.",
    fragment: "Matter № 217 · Civil Appeal",
  },
  {
    index: "04",
    title: "Evidence",
    body: "Relevant passages retrieved, cited and pinned to their exact page.",
    fragment: "Evidence · Page 14 · E1, E2",
  },
  {
    index: "05",
    title: "Intelligence",
    body: "Multi-agent analysis that reasons across documents, knowledge and precedent.",
    fragment: "3 agents · cross-checked",
  },
  {
    index: "06",
    title: "Understanding",
    body: "Explainable answers you can interrogate — with every source in view.",
    fragment: "Grounded · every source cited",
  },
] as const;

function Stage({ stage, i }: { stage: (typeof STAGES)[number]; i: number }) {
  return (
    <motion.li
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30% 0px -30% 0px" }}
      variants={{
        hidden: { opacity: 0.25, x: 16 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
      }}
      className="relative pl-10 md:grid md:grid-cols-[110px_1fr_auto] md:items-baseline md:gap-10 md:pl-16"
    >
      {/* Node dot on the rail */}
      <motion.span
        aria-hidden
        variants={{
          hidden: {
            backgroundColor: "#F6F1E7",
            borderColor: "#D8CCB8",
            boxShadow: "0 0 0 0px rgba(162,122,76,0)",
          },
          visible: {
            backgroundColor: "#A27A4C",
            borderColor: "#A27A4C",
            boxShadow: "0 0 0 5px rgba(162,122,76,0.15)",
            transition: { duration: 0.5, ease: EASE, delay: 0.2 },
          },
        }}
        className="absolute left-[2.5px] top-[10px] h-[11px] w-[11px] rounded-full border-[1.5px]"
      />
      <span className="font-serif text-[clamp(28px,3vw,38px)] italic leading-none text-brass/80">
        {stage.index}
      </span>
      <div className="mt-1 md:mt-0">
        <h3 className="font-serif text-[clamp(26px,3.4vw,34px)] font-semibold leading-tight text-ink">
          {stage.title}
        </h3>
        <p className="mt-1.5 max-w-[52ch] text-[15.5px] leading-relaxed text-muted">{stage.body}</p>
      </div>
      {/* Document fragment — a small paper artefact per stage */}
      <span
        className={[
          "mt-3 hidden rounded-sm border border-border-soft bg-paper px-3.5 py-2 text-[11.5px] font-bold tracking-[0.04em] text-walnut shadow-card lg:inline-block",
          i % 2 === 1 ? "rotate-[0.6deg]" : "-rotate-[0.6deg]",
        ].join(" ")}
        aria-hidden
      >
        {stage.fragment}
      </span>
    </motion.li>
  );
}

/**
 * The conceptual journey: Documents → Legal Knowledge → Case Context →
 * Evidence → Intelligence → Understanding. A vertical brass rail fills as the
 * reader scrolls; each stage activates in sequence rather than appearing as
 * six repetitive cards.
 */
export function Journey() {
  const trackRef = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.8", "end 0.5"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const fillHeight = useTransform(fill, (v) => `${Math.round(v * 100)}%`);

  return (
    <section id="about" aria-label="How KanoonDrishti thinks" className="bg-ivory py-24 md:py-36">
      <div className="shell">
        <div className="mb-14 max-w-[780px] md:mb-24">
          <Reveal>
            <Eyebrow className="mb-[18px]">One connected line of reasoning</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-[clamp(34px,5vw,52px)] font-semibold leading-[1.12] tracking-[-0.01em] text-ink">
              Legal understanding is not a search result.
              <br className="hidden md:inline" />{" "}
              <em className="italic text-walnut">It is a chain of connected context.</em>
            </h2>
          </Reveal>
        </div>

        <div className="relative mx-auto max-w-[880px]">
          {/* Vertical rail with scroll-linked brass fill */}
          <div aria-hidden className="absolute bottom-3 left-[7px] top-3 w-[1.5px] bg-border">
            <motion.span
              className="block w-full bg-brass"
              style={reduceMotion ? { height: "100%" } : { height: fillHeight }}
            />
          </div>

          <ol ref={trackRef} className="grid list-none gap-12 p-0 md:gap-16">
            {STAGES.map((s, i) => (
              <Stage key={s.index} stage={s} i={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
