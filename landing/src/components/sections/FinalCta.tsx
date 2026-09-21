import ctaWood from "../../assets/cta-wood.jpg";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";
import { ButtonLink } from "../ui/Button";

/** Final CTA — powerful but restrained, over dark walnut and navy paneling. */
export function FinalCta() {
  return (
    <section
      id="final-cta"
      aria-label="Get started"
      className="relative overflow-hidden py-28 text-center text-ivory md:py-48"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaWood})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(17,26,39,0.72), rgba(17,26,39,0.55) 45%, rgba(17,26,39,0.8))",
        }}
      />
      <div className="shell relative z-[2]">
        <Reveal>
          <Eyebrow tone="light" className="mb-[18px]">
            KanoonDrishti AI
          </Eyebrow>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-serif text-[clamp(38px,6.5vw,66px)] font-semibold leading-[1.08] tracking-[-0.01em]">
            Understand the law.
            <br />
            <em className="italic text-brass-soft">Start with the evidence.</em>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-6 max-w-[54ch] text-[17px] leading-relaxed text-ivory/[0.78]">
            Explore a more connected way to work with legal documents, research and
            evidence — where every answer keeps its sources in sight.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-10 flex flex-wrap justify-center gap-3.5">
            <ButtonLink to="/register" variant="brass" size="lg">
              Explore KanoonDrishti
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="outlineLight" size="lg">
              See How It Works
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
