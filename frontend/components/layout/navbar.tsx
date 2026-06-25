"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const expertServices = [
  { label: "IME & PQME Network", href: "/expert-services/ime-pqme-network", description: "Independent medical evaluations and qualified evaluator access." },
  { label: "Medical Record Review", href: "/expert-services/medical-record-review", description: "Chronologies, injury analysis, and expert summaries." },
  { label: "Commercial Litigation Experts", href: "/expert-services/commercial-litigation", description: "Specialists for business disputes and complex claims." },
  { label: "Economic Damages Experts", href: "/expert-services/economic-damages", description: "Loss calculations, revenue analysis, and damages reports." },
  { label: "AI Compliance & Governance", href: "/expert-services/ai-compliance-governance", description: "Risk, governance, and responsible AI implementation." },
  { label: "Healthcare Compliance Experts", href: "/expert-services/healthcare-compliance", description: "Regulatory support for healthcare organizations." },
];

const forensicsItems = [
  { label: "Digital Forensics", href: "/forensics/digital", description: "Electronic systems, devices, and digital evidence." },
  { label: "Cybersecurity Forensics", href: "/forensics/cybersecurity", description: "Cyber incidents, breaches, and security investigations." },
  { label: "Data Investigation", href: "/forensics/data-investigation", description: "Discovery and analysis of critical digital information." },
];

const industriesItems = [
  { label: "Legal & Litigation", href: "/industries/legal-litigation" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Technology", href: "/industries/technology" },
  { label: "Corporate Organizations", href: "/industries/corporate" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Expert Services", href: "/expert-services", mega: true, items: expertServices },
  { label: "Forensics", href: "/forensics", dropdown: true, items: forensicsItems },
  { label: "Industries", href: "/industries", dropdown: true, items: industriesItems },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

function ElnLogo({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="44" cy="44" r="42" stroke="#0B1F3A" strokeWidth="3" fill="white" />
      <path d="M44 6 A38 38 0 0 1 82 44" stroke="#C09B5B" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M44 82 A38 38 0 0 1 6 44" stroke="#C09B5B" strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="44" y="56" textAnchor="middle" fontFamily="Georgia, serif" fontSize="28" fontWeight="700" fill="#0B1F3A" letterSpacing="-1">ELN</text>
      <line x1="28" y1="30" x2="60" y2="30" stroke="#0B1F3A" strokeWidth="1.5" />
      <line x1="44" y1="18" x2="44" y2="30" stroke="#0B1F3A" strokeWidth="1.5" />
      <line x1="32" y1="30" x2="28" y2="26" stroke="#0B1F3A" strokeWidth="1.2" />
      <line x1="56" y1="30" x2="60" y2="26" stroke="#0B1F3A" strokeWidth="1.2" />
      <path d="M26 26 Q30 23 34 26" stroke="#0B1F3A" strokeWidth="1.2" fill="none" />
      <path d="M54 26 Q58 23 62 26" stroke="#0B1F3A" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!activeMenu) return;

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveMenu(null);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeMenu]);

  const toggleMenu = (label: string) => {
    setActiveMenu((current) => (current === label ? null : label));
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${scrolled ? "shadow-[0_8px_28px_rgba(11,31,58,0.08)]" : ""}`}>
      <div className={`hidden lg:block bg-[#071225] overflow-hidden transition-all duration-300 ${scrolled ? "h-0 opacity-0" : "h-9 opacity-100"}`}>
        <div className="mx-auto flex h-9 max-w-[88rem] items-center justify-between px-8">
          <div className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/45">
            {["Expertise", "Evidence", "Results", "Trusted"].map((t, i) => (
              <span key={t} className="flex items-center gap-2">
                <span>{t}</span>
                {i < 3 && <span className="text-[#C09B5B]/60">&middot;</span>}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a href="tel:+18005550100" className="text-[11px] font-medium text-white/50 transition hover:text-white/90">
              (800) 555-0100
            </a>
            <Link href="/contact" className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#C09B5B] transition hover:text-[#D4B483]">
              Request Consultation
            </Link>
          </div>
        </div>
      </div>

      <nav ref={navRef} className="relative border-b border-[#E5EAF1] bg-white">
        <div className="mx-auto flex h-[78px] max-w-[88rem] items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="mr-3 flex min-w-0 shrink-0 items-center gap-2.5 lg:mr-8 lg:gap-3">
            <span className="shrink-0">
              <ElnLogo size={44} />
            </span>

            <span className="block min-w-0 leading-none">
              <span className="block font-heading text-[0.78rem] font-semibold leading-tight tracking-wide text-[#0B1F3A] uppercase sm:text-[1.1rem]">
                Expert Legal
              </span>
              <span className="block font-heading text-[0.95rem] font-bold leading-tight tracking-[0.04em] text-[#C09B5B] uppercase sm:text-[1.35rem] sm:tracking-[0.05em]">
                Network
              </span>
              <span className="mt-[1px] block max-w-[128px] truncate text-[0.42rem] font-bold uppercase tracking-[0.14em] text-[#0B1F3A]/40 sm:max-w-none sm:text-[0.5rem] sm:tracking-[0.22em]">
                Expertise &middot; Evidence &middot; Results
              </span>
            </span>
          </Link>

          <ul className="hidden h-full flex-1 items-center justify-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label} className="flex h-full items-center">
                {link.mega || link.dropdown ? (
                  <button
                    type="button"
                    onClick={() => toggleMenu(link.label)}
                    className={`group relative flex h-full items-center gap-1.5 px-3 text-[12px] font-bold uppercase tracking-[0.08em] transition-colors ${
                      activeMenu === link.label || isActive(link.href)
                        ? "text-[#0B1F3A]"
                        : "text-[#3D5470] hover:text-[#0B1F3A]"
                    }`}
                    aria-haspopup="menu"
                    aria-expanded={activeMenu === link.label}
                  >
                    {link.label}
                    <svg className={`size-[10px] transition-transform duration-200 ${activeMenu === link.label ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={`absolute bottom-0 left-3 right-3 h-[2px] origin-left bg-[#C09B5B] transition-transform duration-200 ${
                      activeMenu === link.label || isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`group relative flex h-full items-center px-3 text-[12px] font-bold uppercase tracking-[0.08em] transition-colors ${
                      isActive(link.href) ? "text-[#0B1F3A]" : "text-[#3D5470] hover:text-[#0B1F3A]"
                    }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-3 right-3 h-[2px] origin-left bg-[#C09B5B] transition-transform duration-200 ${
                      isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} />
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="ml-auto flex shrink-0 items-center gap-3">
            <Link
              href="/contact"
              className="hidden h-[42px] items-center bg-[#0B1F3A] px-6 text-[11px] font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#C09B5B] lg:inline-flex"
            >
              Get Started
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="grid size-10 shrink-0 place-items-center border border-[#D6DDE8] lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span className="grid gap-[5px]">
                <span className={`block h-[1.5px] w-[18px] bg-[#0B1F3A] transition-all duration-300 ${mobileOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
                <span className={`block h-[1.5px] w-[18px] bg-[#0B1F3A] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-[1.5px] w-[18px] bg-[#0B1F3A] transition-all duration-300 ${mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        {activeMenu === "Expert Services" && (
          <div className="absolute left-0 right-0 top-full z-50 border-t-2 border-[#C09B5B] bg-[#071225] shadow-[0_24px_60px_rgba(7,18,37,0.28)]">
            <div className="mx-auto grid max-w-[88rem] grid-cols-[300px_1fr] px-8 py-9">
              <div className="border-r border-white/10 pr-10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C09B5B]">Expert Services</p>
                <h2 className="mt-4 font-heading text-[2rem] font-light leading-[1.15] text-white">
                  Specialized support for complex legal matters.
                </h2>
                <p className="mt-4 text-[13px] leading-7 text-white/55">
                  Connect with independent experts across medical, commercial, financial, compliance, and forensic disciplines.
                </p>
                <Link href="/expert-services" className="mt-6 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#D4B483] transition hover:opacity-70">
                  View all services -&gt;
                </Link>
              </div>

              <div className="ml-px grid grid-cols-3 gap-px bg-white/[0.06]">
                {expertServices.map((item) => (
                  <Link key={item.href} href={item.href} className="group bg-[#071225] px-7 py-6 transition hover:bg-[#0B1F3A]">
                    <span className="block font-heading text-[1.1rem] font-medium leading-snug text-white transition group-hover:text-[#D4B483]">{item.label}</span>
                    <span className="mt-2 block text-[12.5px] leading-[1.65] text-white/45">{item.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {navLinks
          .filter((link) => link.dropdown && activeMenu === link.label)
          .map((link) => (
            <div
              key={link.label}
              className="absolute left-1/2 top-full z-50 w-full max-w-[88rem] -translate-x-1/2 px-8"
            >
              <div className="ml-[560px] w-[272px] border-t-2 border-[#C09B5B] bg-white py-2 shadow-[0_16px_48px_rgba(11,31,58,0.14)]">
                {link.items?.map((item) => (
                  <Link key={item.href} href={item.href} className="group flex flex-col px-5 py-3.5 transition hover:bg-[#F5F6F8]">
                    <span className="text-[13px] font-bold text-[#0B1F3A] transition group-hover:text-[#C09B5B]">{item.label}</span>
                    {"description" in item && (
                      <span className="mt-0.5 text-[11.5px] leading-5 text-[#6B82A0]">{item.description}</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </nav>

      <div className={`fixed inset-y-0 right-0 z-[80] w-full max-w-[420px] bg-white shadow-[0_0_60px_rgba(11,31,58,0.18)] transition-transform duration-500 lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex h-full flex-col">
          <div className="flex h-[80px] items-center justify-between border-b border-[#E5EAF1] px-5">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="shrink-0">
                <ElnLogo size={40} />
              </span>

              <span className="block min-w-0 leading-none">
                <span className="block font-heading text-[0.8rem] font-semibold uppercase tracking-wide text-[#0B1F3A]">
                  Expert Legal
                </span>
                <span className="block font-heading text-[1rem] font-bold uppercase tracking-[0.05em] text-[#C09B5B]">
                  Network
                </span>
                <span className="mt-[1px] block truncate text-[0.42rem] font-bold uppercase tracking-[0.14em] text-[#0B1F3A]/40">
                  Expertise &middot; Evidence &middot; Results
                </span>
              </span>
            </div>

            <button onClick={() => setMobileOpen(false)} className="grid size-9 shrink-0 place-items-center border border-[#D6DDE8] text-xl leading-none text-[#3D5470]">
              &times;
            </button>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-[#E5EAF1]">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.mega || link.dropdown ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between px-5 py-4 text-left text-[13px] font-bold uppercase tracking-[0.08em] text-[#0B1F3A]"
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                    >
                      {link.label}
                      <svg className={`size-4 text-[#6B82A0] transition-transform duration-200 ${mobileExpanded === link.label ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {mobileExpanded === link.label && (
                      <div className="bg-[#F5F6F8] px-5 pb-3 pt-1">
                        {link.items?.map((item) => (
                          <Link key={item.href} href={item.href} className="block border-b border-[#E5EAF1] py-3 text-[13px] text-[#3D5470] transition-colors last:border-b-0 hover:text-[#C09B5B]">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href} className="flex items-center px-5 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-[#0B1F3A] transition-colors hover:text-[#C09B5B]">
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-[#E5EAF1] p-5">
            <Link href="/contact" className="flex h-12 items-center justify-center bg-[#0B1F3A] text-[11px] font-black uppercase tracking-[0.18em] text-white transition hover:bg-[#C09B5B]">
              Request Consultation
            </Link>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <button aria-label="Close menu" className="fixed inset-0 z-[70] bg-[#071225]/55 backdrop-blur-[2px] lg:hidden" onClick={() => setMobileOpen(false)} />
      )}
    </header>
  );
}