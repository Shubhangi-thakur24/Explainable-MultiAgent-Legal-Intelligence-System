import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { EASE } from "../../lib/motion";
import { cn } from "../../lib/utils";

const FAQS = [
  {
    q: "What is KanoonDrishti AI?",
    a: "KanoonDrishti AI is an explainable, bilingual, multi-agent legal intelligence platform. It helps you understand legal documents, discover relevant legal knowledge and similar cases, and see the evidence behind every AI-assisted analysis — in Hindi and English.",
  },
  {
    q: "What types of legal documents does it support?",
    a: "Judgments, petitions, FIRs, affidavits, agreements and related case documents — both born-digital files and scanned pages, which are processed through OCR before analysis.",
  },
  {
    q: "Does it work in Hindi and English?",
    a: "Yes. The platform is bilingual throughout — it reads, retrieves and explains across Hindi, English and mixed Hindi-English (Hinglish) content, using multilingual legal language models.",
  },
  {
    q: "How does evidence grounding work?",
    a: "Before generating analysis, the system retrieves relevant passages from your documents and legal sources. Generated statements are then linked to those passages, and each citation carries its document, page and excerpt so you can verify it directly.",
  },
  {
    q: "Does KanoonDrishti replace a lawyer?",
    a: "No. KanoonDrishti is a research and understanding tool. It does not provide legal advice, and its output should not be treated as a substitute for the judgment of a qualified legal professional.",
  },
  {
    q: "Does it predict court decisions?",
    a: "No. The courtroom simulation is an educational exercise in argument structure and evidence use. The platform does not predict, estimate or guarantee the outcome of any real proceeding.",
  },
  {
    q: "How is my information handled?",
    a: "Access is authenticated with role-based controls, and documents are isolated at the case level — material from one matter is not used to answer questions in another.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-border">
      <button
        id={buttonId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-5 px-1 py-6 text-left font-serif text-[clamp(19px,2.4vw,23px)] font-semibold text-ink transition-colors duration-200 hover:text-walnut"
      >
        <span>{q}</span>
        <span
          aria-hidden
          className={cn(
            "grid h-[26px] w-[26px] flex-none place-items-center rounded-full border transition-all duration-300 ease-out",
            open ? "rotate-45 border-navy bg-navy text-ivory" : "border-border text-walnut",
          )}
        >
          <Plus size={13} strokeWidth={2.4} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-[68ch] px-1 pb-[26px] pr-11 text-[15px] leading-[1.75] text-muted">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  return (
    <section aria-label="Frequently asked questions" className="bg-ivory py-24 md:py-36">
      <div className="mx-auto w-full max-w-[820px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Questions, answered"
          title={
            <>
              Before you <em>explore.</em>
            </>
          }
        />
        <Reveal>
          <div className="border-t border-border">
            {FAQS.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
