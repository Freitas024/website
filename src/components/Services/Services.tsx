"use client";

import { motion } from "framer-motion";
import { Code2, Pen, Clock, Monitor } from "lucide-react";
import { services } from "../../config/services";

const SERVICE_ICONS = [Code2, Pen, Clock, Monitor];

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay } }),
};

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Serviços"
      className="bg-surface px-14 py-[120px] max-md:px-6 max-md:py-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={reveal}
        className="text-center mb-[60px]"
      >
        <div className="font-mono text-[11px] text-primary tracking-[0.18em] uppercase mb-[14px] flex items-center justify-center">
          // Como Posso Ajudar
        </div>
        <h2 className="font-display text-[clamp(44px,6.5vw,88px)] tracking-[0.03em] leading-[0.95]">
          COMO POSSO<br />AJUDAR
        </h2>
        <p className="text-base text-muted font-light leading-[1.65] mt-3.5 max-w-[460px] mx-auto">
          Soluções completas de tecnologia para automatizar, integrar e escalar seu negócio.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-[22px] max-md:grid-cols-1">
        {services.map((service, i) => {
          const Icon = SERVICE_ICONS[i];
          return (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={reveal}
              custom={i * 0.1}
              className="gradient-border relative overflow-hidden bg-bg-card border border-border rounded-2xl p-[34px_30px] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-[6px] hover:shadow-[0_22px_60px_rgba(124,58,237,0.16)] hover:border-transparent"
            >
              <span
                aria-hidden="true"
                className="font-display text-[86px] text-foreground opacity-[0.04] leading-none absolute top-3 right-5 pointer-events-none tracking-[0.02em]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="w-11 h-11 bg-primary/[0.12] rounded-[10px] flex items-center justify-center mb-[18px] text-accent">
                <Icon size={22} strokeWidth={1.5} />
              </div>

              <h3 className="text-[19px] font-semibold text-foreground mb-3.5">
                {service.title}
              </h3>

              <ul className="flex flex-col gap-2 list-none">
                {service.highlights.map((item) => (
                  <li key={item} className="text-[13px] text-muted flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
