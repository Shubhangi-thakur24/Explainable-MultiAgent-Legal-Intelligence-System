import { Wordmark } from "./ui/Wordmark";

const PLATFORM_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Courtroom", href: "#courtroom" },
];

const TRUST_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Responsible AI", href: "#" },
];

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="group relative w-fit text-[14.5px] text-ivory/[0.68] no-underline transition-colors duration-200 hover:text-ivory"
    >
      {label}
      <span
        aria-hidden
        className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-brass transition-transform duration-300 ease-out group-hover:scale-x-100"
      />
    </a>
  );
}

export function Footer() {
  return (
    <footer aria-label="Footer" className="bg-navy-deep pt-16 text-ivory/70 md:pt-[88px]">
      <div className="shell grid gap-11 pb-[52px] md:grid-cols-[1.6fr_1fr_1fr] md:gap-16">
        <div>
          <Wordmark light />
          <p className="mt-[18px] max-w-[40ch] text-[14px] leading-[1.7] text-ivory/55">
            An explainable, bilingual, multi-agent legal intelligence platform — connecting
            documents, knowledge, evidence and understanding.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="grid content-start gap-3">
          <h4 className="mb-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-brass-soft">
            Platform
          </h4>
          {PLATFORM_LINKS.map((l) => (
            <FooterLink key={l.label} {...l} />
          ))}
        </nav>
        <nav aria-label="Legal links" className="grid content-start gap-3">
          <h4 className="mb-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-brass-soft">
            Trust
          </h4>
          {TRUST_LINKS.map((l) => (
            <FooterLink key={l.label} {...l} />
          ))}
        </nav>
      </div>
      <div className="shell flex flex-wrap justify-between gap-x-6 gap-y-2.5 border-t border-ivory/10 py-6 text-[12.5px] text-ivory/[0.42]">
        <span>© 2026 KanoonDrishti AI</span>
        <span>Assists legal understanding · Does not provide legal advice</span>
      </div>
    </footer>
  );
}
