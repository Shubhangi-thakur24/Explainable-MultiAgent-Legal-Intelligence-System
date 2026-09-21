import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Sparkles } from "lucide-react";
import heroImage from "../../assets/hero-courtroom.jpg";
import { ButtonLink } from "../ui/Button";
import { EASE } from "../../lib/motion";

const copyVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay: 0.05 + i * 0.12 },
  }),
};

/**
 * Hero — asymmetric editorial composition.
 * Left: staggered copy. Right: cinematic courtroom photograph with a layered
 * document card in which an evidence passage highlights itself, then a thin
 * indigo line traces up to an "AI Analysis" chip.
 */
export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Choreography: highlight sweeps in, then the trace draws, then AI chip lands.
  const [evidenceOn, setEvidenceOn] = useState(false);
  const [traceOn, setTraceOn] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setEvidenceOn(true);
      setTraceOn(true);
      return;
    }
    const t1 = window.setTimeout(() => setEvidenceOn(true), 1600);
    const t2 = window.setTimeout(() => setTraceOn(true), 2500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [reduceMotion]);

  // Restrained scroll parallax — photograph and document layers drift at
  // slightly different speeds as the hero scrolls away.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 60]);
  const docY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -34]);
  const chipY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -58]);

  return (
    <section
      ref={sectionRef}
      aria-label="Introduction"
      className="relative overflow-hidden bg-ivory pb-24 pt-[calc(76px+clamp(40px,8vh,96px))] md:pb-32"
      style={{
        backgroundImage:
          "radial-gradient(1200px 600px at 85% -10%, rgba(233,221,200,0.55), transparent 60%)",
      }}
    >
      <div className="shell grid items-center gap-14 lg:grid-cols-[46fr_54fr] lg:gap-10">
        {/* ---- Copy column ---- */}
        <div className="max-w-[560px]">
          <motion.p
            custom={0}
            variants={copyVariants}
            initial="hidden"
            animate="visible"
            className="mb-[18px] font-sans text-eyebrow font-bold uppercase text-brass"
          >
            Legal Intelligence, Reimagined
          </motion.p>

          <motion.h1
            custom={1}
            variants={copyVariants}
            initial="hidden"
            animate="visible"
            className="font-serif text-[clamp(44px,7.4vw,76px)] font-semibold leading-[1.04] tracking-[-0.015em] text-ink"
          >
            See the Law.
            <br />
            <em className="italic text-walnut">Understand the Evidence.</em>
          </motion.h1>

          <motion.p
            custom={2}
            variants={copyVariants}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-[50ch] text-[17.5px] leading-[1.7] text-muted"
          >
            KanoonDrishti connects legal documents, legal knowledge, case context and
            evidence-grounded AI analysis in one intelligent workspace — so every
            insight can be traced back to the page it came from.
          </motion.p>

          <motion.div
            custom={3}
            variants={copyVariants}
            initial="hidden"
            animate="visible"
            className="mt-9 flex flex-wrap gap-3.5"
          >
            <ButtonLink href="#final-cta" variant="primary" size="lg">
              Explore KanoonDrishti
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="outline" size="lg">
              See How It Works
            </ButtonLink>
          </motion.div>

          <motion.ul
            custom={4}
            variants={copyVariants}
            initial="hidden"
            animate="visible"
            aria-label="Platform characteristics"
            className="mt-10 flex list-none flex-wrap items-center gap-y-2 p-0 text-[12.5px] font-bold uppercase tracking-[0.1em] text-muted"
          >
            {["Hindi · English · Hinglish", "Evidence-grounded", "Explainable by design"].map(
              (item, i) => (
                <li key={item} className="flex items-center">
                  {i > 0 && (
                    <span aria-hidden className="mx-3.5 h-1 w-1 rounded-full bg-brass" />
                  )}
                  {item}
                </li>
              ),
            )}
          </motion.ul>
        </div>

        {/* ---- Visual column ---- */}
        <div className="relative mb-12 min-h-[420px] lg:mb-0" aria-hidden="true">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.9, ease: EASE }}
            style={{ y: photoY }}
            className="relative overflow-hidden rounded-lg border border-walnut/20 shadow-deep"
          >
            <motion.img
              src={heroImage}
              alt=""
              width={1408}
              height={768}
              initial={reduceMotion ? {} : { scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.6, ease: EASE }}
              className="h-[clamp(320px,44vw,520px)] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/30" />
          </motion.div>

          {/* Layered document card */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease: EASE, delay: 0.75 }}
            style={{ y: docY }}
            className="absolute -bottom-9 left-0 w-[min(330px,80%)] rounded border border-border bg-paper p-5 shadow-deep lg:-left-6"
          >
            <div className="mb-3.5 flex items-baseline justify-between gap-3 border-b border-border-soft pb-2.5">
              <span className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-walnut">
                Judgment · Civil Appeal
              </span>
              <span className="whitespace-nowrap text-[11px] font-semibold text-muted">
                Page 14 of 42
              </span>
            </div>
            <div className="my-2 h-[7px] w-[90%] rounded-[3px] bg-parchment" />
            <div className="my-2 h-[7px] w-full rounded-[3px] bg-parchment" />
            <p className="my-3 font-serif text-[15.5px] leading-[1.6] text-ink">
              …the record indicates that{" "}
              <mark className={`evidence-sweep bg-transparent text-ink ${evidenceOn ? "is-on" : ""}`}>
                possession was handed over on the date recorded in Clause 7 of the
                agreement
              </mark>
              , a fact not disputed by either party during…
            </p>
            <div className="my-2 h-[7px] w-[95%] rounded-[3px] bg-parchment" />
            <div className="my-2 h-[7px] w-[60%] rounded-[3px] bg-parchment" />

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={evidenceOn ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
              className="mt-2 inline-flex items-center gap-[7px] rounded-full border border-brass/30 bg-brass/10 px-[11px] py-[5px] text-[11px] font-bold uppercase tracking-[0.08em] text-walnut"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brass" />
              Evidence · Page 14
            </motion.div>
          </motion.div>

          {/* Tracing line: evidence → AI analysis */}
          <svg
            className="pointer-events-none absolute right-[clamp(40px,8vw,110px)] top-[clamp(58px,9vw,96px)] h-[clamp(120px,18vw,190px)] w-[clamp(70px,10vw,120px)] text-indigo-ai opacity-85"
            viewBox="0 0 120 190"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M84 182 C 100 80, 60 30, 6 6"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeDasharray="4 5"
              initial={{ pathLength: 0 }}
              animate={traceOn ? { pathLength: 1 } : {}}
              transition={{ duration: reduceMotion ? 0 : 1.6, ease: EASE }}
            />
          </svg>

          {/* AI analysis chip */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={traceOn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: reduceMotion ? 0 : 1.2 }}
            style={{ y: chipY }}
            className="absolute right-0 top-3 flex items-center gap-3 rounded border border-indigo-ai/35 border-l-[3px] border-l-indigo-ai bg-paper py-3 pl-3.5 pr-[18px] shadow-raised lg:-right-4 lg:top-12"
          >
            <span className="relative grid h-7 w-7 flex-none place-items-center rounded-full bg-indigo-soft text-indigo-ai">
              <Sparkles size={14} strokeWidth={2.2} />
            </span>
            <div>
              <span className="block text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-indigo-ai">
                AI Analysis
              </span>
              <span className="block text-[12.5px] text-muted">
                Grounded in 1 source passage
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
    </section>
  );
}
