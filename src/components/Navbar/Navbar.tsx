"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#home", label: "home", n: "01" },
  { href: "#work", label: "work", n: "02" },
  { href: "#services", label: "services", n: "03" },
  { href: "#contact", label: "contact", n: "04" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const pos = window.scrollY + 110;
      document.querySelectorAll<HTMLElement>("section[id]").forEach((sec) => {
        if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
          setActiveSection(sec.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        aria-label="Menu principal"
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 bg-bg z-[890] flex flex-col items-center justify-center gap-7 transition-transform duration-[450ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMobile}
            className="font-display text-[clamp(44px,12vw,72px)] tracking-[0.04em] uppercase transition-colors duration-200 hover:text-primary"
          >
            <span className="font-mono text-xs text-primary mr-2">{link.n}</span>
            {link.label}
          </a>
        ))}
      </nav>

      <header>
        <nav
          aria-label="Navegação principal"
          className={`fixed top-0 left-0 right-0 z-[800] flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "px-14 py-4 bg-bg/[0.88] backdrop-blur-[14px] border-b border-border max-md:px-6"
              : "px-14 py-[26px] max-md:px-6"
          }`}
        >
          <a
            href="#home"
            aria-label="Vinicius Freitas — Home"
            className="font-mono text-[17px] tracking-[0.06em] font-medium"
          >
            vf<em className="text-primary not-italic">._</em>
          </a>

          <ul className="hidden md:flex gap-1 list-none">
            {links.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-label={link.label}
                    className={`font-mono text-[11.5px] tracking-[0.06em] px-[13px] py-[7px] relative inline-block transition-colors duration-200 hover:text-foreground ${
                      isActive ? "text-foreground" : "text-muted"
                    }`}
                  >
                    <span className="text-primary opacity-55 mr-[5px]">{link.n}</span>
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-[13px] right-[13px] h-px bg-primary" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            className="md:hidden flex flex-col gap-[5px] bg-transparent border-none p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-[22px] h-[1.5px] bg-foreground transition-transform duration-300 ${
                mobileOpen ? "rotate-45 translate-x-[4.5px] translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-[1.5px] bg-foreground transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-[1.5px] bg-foreground transition-transform duration-300 ${
                mobileOpen ? "-rotate-45 translate-x-[4.5px] -translate-y-[4.5px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>
    </>
  );
}
