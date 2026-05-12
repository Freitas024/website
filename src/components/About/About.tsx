"use client";

import { motion } from "framer-motion";
import { Monitor, Pen, Layers, Users } from "lucide-react";

const MINI_SERVICES = [
  { icon: Monitor, title: "Frontend Moderno", desc: "React, Next.js e TypeScript para produtos excepcionais." },
  { icon: Pen, title: "UI Design", desc: "Interfaces elegantes e consistentes que encantam." },
  { icon: Layers, title: "Design System", desc: "Componentes escaláveis e documentação completa." },
  { icon: Users, title: "UX & Acessibilidade", desc: "Experiências inclusivas seguindo WCAG." },
];

const STATS = [
  { n: "3", suffix: "+", label: "Anos exp." },
  { n: "20", suffix: "+", label: "Projetos" },
  { n: "15", suffix: "+", label: "Clientes" },
];

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay } }),
};

export default function About() {
  return (
    <section
      id="about"
      aria-label="Sobre mim"
      className="grid gap-20 items-start px-14 py-[120px] max-lg:grid-cols-1 max-lg:gap-11 max-md:px-6 max-md:py-20"
      style={{ gridTemplateColumns: "58fr 42fr" }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={reveal}
        custom={0}
      >
        <div className="font-mono text-[11px] text-primary tracking-[0.18em] uppercase mb-[14px] flex items-center gap-2.5">
          <span className="block w-[18px] h-px bg-primary shrink-0" />
          Sobre Mim
        </div>

        <h2 className="font-body text-[clamp(26px,3.8vw,46px)] font-light leading-[1.2] text-foreground">
          Transformo complexidade em
          <span
            className="font-display text-[clamp(44px,6.5vw,84px)] block leading-none mt-1 bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent"
          >
            SIMPLICIDADE
          </span>
        </h2>

        <p className="text-[15.5px] text-muted leading-[1.72] max-w-[500px] mt-5">
          Com experiência em desenvolvimento Frontend e design de interfaces, meu foco está em
          criar produtos digitais que unem estética, usabilidade e código de qualidade.
        </p>
        <p className="text-[15.5px] text-muted leading-[1.72] max-w-[500px] mt-2.5">
          Acredito que uma boa interface vai além do visual — ela precisa ser intuitiva, acessível
          e performática. Trabalho no design-to-code para entregar experiências que os usuários
          amam usar.
        </p>

        <div className="flex gap-10 mt-9 max-[480px]:gap-5">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-[42px] leading-none">
                {s.n}<em className="text-primary not-italic">{s.suffix}</em>
              </div>
              <div className="font-mono text-[10px] text-muted tracking-[0.12em] uppercase mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={reveal}
        custom={0.2}
        className="grid grid-cols-2 gap-3.5 max-[480px]:grid-cols-1"
      >
        {MINI_SERVICES.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="gradient-border bg-bg-card border border-border rounded-xl p-[22px_18px] transition-[transform,border-color] duration-300 hover:-translate-y-[5px] hover:border-transparent"
          >
            <div className="w-[34px] h-[34px] bg-primary/[0.14] rounded-lg flex items-center justify-center mb-3.5 text-accent">
              <Icon size={17} strokeWidth={1.5} />
            </div>
            <h3 className="text-[13.5px] font-semibold text-foreground mb-1.5">{title}</h3>
            <p className="text-xs text-muted leading-[1.5]">{desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
