import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Hero } from "../components/sections/Hero";
import { Journey } from "../components/sections/Journey";
import { Capabilities } from "../components/sections/Capabilities";
import { EvidenceFirst } from "../components/sections/EvidenceFirst";
import { Bilingual } from "../components/sections/Bilingual";
import { Research } from "../components/sections/Research";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Courtroom } from "../components/sections/Courtroom";
import { Trust } from "../components/sections/Trust";
import { Benefits } from "../components/sections/Benefits";
import { Faq } from "../components/sections/Faq";
import { FinalCta } from "../components/sections/FinalCta";

/**
 * KanoonDrishti AI landing page.
 * Narrative order: Law → Documents → Evidence → Intelligence → Understanding → Exploration.
 */
export default function LandingPage() {
  return (
    <>
      <a
        href="#main"
        className="absolute -left-full top-0 z-[200] rounded-br-lg bg-navy px-4 py-2.5 text-sm text-paper no-underline focus:left-0"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Journey />
        <Capabilities />
        <EvidenceFirst />
        <Bilingual />
        <Research />
        <HowItWorks />
        <Courtroom />
        <Trust />
        <Benefits />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
