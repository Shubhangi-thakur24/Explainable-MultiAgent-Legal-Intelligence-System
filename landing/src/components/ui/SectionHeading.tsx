import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { rise, VIEWPORT } from "../../lib/motion";
import { Eyebrow } from "./Eyebrow";
import { cn } from "../../lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}

/** Standard editorial section header with staggered scroll reveal. */
export function SectionHeading({ eyebrow, title, sub, tone = "dark", className }: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <div className={cn("mb-12 max-w-[760px] md:mb-20", className)}>
      <motion.div variants={rise} initial="hidden" whileInView="visible" viewport={VIEWPORT} custom={0}>
        <Eyebrow tone={light ? "light" : "brass"} className="mb-[18px]">
          {eyebrow}
        </Eyebrow>
      </motion.div>
      <motion.h2
        variants={rise}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        custom={1}
        className={cn(
          "font-serif text-[clamp(34px,5vw,52px)] font-semibold leading-[1.12] tracking-[-0.01em]",
          light ? "text-ivory" : "text-ink",
          "[&_em]:italic",
          light ? "[&_em]:text-brass-soft" : "[&_em]:text-walnut",
        )}
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          custom={2}
          className={cn(
            "mt-5 max-w-[58ch] text-[17px] leading-relaxed",
            light ? "text-ivory/65" : "text-muted",
          )}
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
