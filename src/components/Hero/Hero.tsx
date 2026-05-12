"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import HeroScene from "./heroscene";

const TYPING_LINES = [
  "// Frontend Developer & UI/UX specialist",
  "// React · Next.js · TypeScript",
  "// Design to Code",
];

export default function Hero() {
  const [typed, setTyped] = useState("// Design to Code");

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = TYPING_LINES[lineIndex];
      if (!deleting) {
        charIndex++;
        setTyped(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(tick, 2200);
          return;
        }
      } else {
        charIndex--;
        setTyped(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          lineIndex = (lineIndex + 1) % TYPING_LINES.length;
        }
      }
      timeout = setTimeout(tick, deleting ? 38 : 72);
    };

    timeout = setTimeout(tick, 1900);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      aria-label="Apresentação"
      className="relative min-h-screen flex items-center justify-center px-14 pt-[120px] pb-20 overflow-hidden md:px-14 max-md:px-6 max-md:pt-32"
    >
      <HeroScene />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(124,58,237,0.16) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-[2] flex flex-col items-center text-center w-full max-w-5xl">
        <p className="font-mono text-[13px] text-accent tracking-[.12em] mb-5 opacity-0 [animation:fUp_0.5s_ease_0.4s_both]">
          // Portfolio — 2026
        </p>

        <h1
          aria-label="Vinicius Freitas"
          className="font-display text-[clamp(52px,9.2vw,136px)] leading-[0.9] tracking-[0.04em] overflow-hidden text-center whitespace-nowrap"
        >
          <span className="block overflow-hidden">
            <span className="block opacity-0 [animation:wordReveal_0.85s_cubic-bezier(0.16,1,0.3,1)_0.55s_both]">
              VINICIUS FREITAS
            </span>
          </span>
        </h1>

        <div className="mt-7 opacity-0 [animation:fUp_0.5s_ease_1.1s_both] flex justify-center">
          <p className="font-mono text-[clamp(13px,1.5vw,17px)] text-muted tracking-[0.04em]">
            <span className="text-accent">{typed}</span>
            <span
              aria-hidden="true"
              className="inline-block w-0.5 h-[1em] bg-accent align-middle ml-0.5 [animation:blink_1s_step-end_infinite]"
            />
          </p>
        </div>

        <div className="mt-11 flex items-center justify-center gap-3.5 flex-wrap opacity-0 [animation:fUp_0.5s_ease_1.3s_both]">
          <a
            href="#work"
            aria-label="Ver projetos"
            className="inline-flex items-center gap-2 bg-primary text-foreground font-body text-sm font-medium px-[26px] py-[13px] rounded-md transition-all duration-200 hover:bg-[#6d28d9] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(124,58,237,0.38)] whitespace-nowrap"
          >
            Ver Projetos
            <ArrowRight size={13} />
          </a>

          <a
            href="#contact"
            aria-label="Falar comigo"
            className="inline-flex items-center gap-2 bg-transparent text-muted font-body text-sm font-medium px-[26px] py-[13px] rounded-md border border-border transition-all duration-200 hover:text-foreground hover:border-border-active whitespace-nowrap"
          >
            Falar Comigo
          </a>
        </div>
      </div>
    </section>
  );
}
