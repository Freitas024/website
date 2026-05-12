"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "../../config/experiences";

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

export default function Experience() {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const active =
    experiences.find((e) => e.id === activeId) ?? experiences[0];
  const activeIndex = experiences.findIndex((e) => e.id === active.id);

  return (
    <section
      id="experience"
      aria-label="Experiência profissional"
      className="px-14 py-[120px] max-md:px-6 max-md:py-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={reveal}
        className="max-w-[640px]"
      >
        <div className="font-mono text-[11px] text-primary tracking-[0.18em] uppercase mb-[14px] flex items-center gap-2.5">
          <span className="block w-[18px] h-px bg-primary shrink-0" />
          Trajetória
        </div>

        <h2 className="font-display text-[clamp(44px,6.8vw,92px)] tracking-[0.02em] leading-[0.95]">
          EXPERIÊNCIA<br />PROFISSIONAL
        </h2>

        <p className="text-[15.5px] text-muted leading-[1.72] max-w-[460px] mt-5">
          Empresas e projetos que moldaram minha visão de produto e tecnologia.
        </p>
      </motion.div>

      <div className="grid gap-14 mt-[70px] max-lg:grid-cols-1 max-lg:gap-10" style={{ gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.35fr)" }}>
        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={reveal}
          custom={0.1}
          className="relative list-none pl-7"
          aria-label="Linha do tempo de experiências"
        >
          <span
            aria-hidden="true"
            className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-border"
          />

          {experiences.map((exp) => {
            const isActive = exp.id === active.id;
            return (
              <li key={exp.id} className="relative mb-9 last:mb-0">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[26px] top-[7px] w-[11px] h-[11px] rounded-full border transition-colors duration-300 ${
                    isActive
                      ? "bg-primary border-primary shadow-[0_0_0_4px_rgba(124,58,237,0.18)]"
                      : "bg-bg border-border"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setActiveId(exp.id)}
                  aria-pressed={isActive}
                  className="text-left w-full group block"
                >
                  <div className="font-mono text-[11px] text-primary tracking-[0.16em] uppercase mb-1.5 opacity-90">
                    {exp.period}
                  </div>
                  <div
                    className={`text-[15px] font-semibold leading-snug transition-colors duration-200 ${
                      isActive
                        ? "text-accent"
                        : "text-foreground group-hover:text-accent"
                    }`}
                  >
                    {exp.role}
                  </div>
                  <div className="font-mono text-[12px] text-muted mt-1">
                    {exp.company}
                  </div>
                </button>
              </li>
            );
          })}
        </motion.ol>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={reveal}
          custom={0.2}
          className="gradient-border bg-bg-card border border-border rounded-2xl p-[38px_36px] max-md:p-[28px_22px] transition-[border-color] duration-300 hover:border-transparent"
        >
          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="font-mono text-[11px] text-primary tracking-[0.18em] uppercase mb-[14px]">
                // Experiência {String(activeIndex + 1).padStart(2, "0")}
              </div>

              <h3 className="font-display text-[clamp(28px,3.6vw,44px)] tracking-[0.02em] leading-[1] uppercase">
                {active.role}
              </h3>

              <div className="text-accent text-[15px] font-medium mt-2.5">
                {active.company}
              </div>

              <div className="font-mono text-[11.5px] text-muted tracking-[0.06em] mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <span>{active.period}</span>
                <span aria-hidden="true" className="opacity-50">·</span>
                <span>{active.location}</span>
                <span aria-hidden="true" className="opacity-50">·</span>
                <span>{active.mode}</span>
              </div>

              <p className="text-[14.5px] text-muted leading-[1.72] mt-6">
                {active.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-7">
                {active.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11.5px] text-accent border border-border-active/60 rounded-md px-2.5 py-1 bg-primary/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
