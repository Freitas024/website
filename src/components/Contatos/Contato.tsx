"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { Linkedin, Github } from "lucide-react";
import { contacts } from "../../config/contacts";

const CONTACT_ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  WhatsApp: MessageCircle,
  LinkedIn: Linkedin,
  GitHub: Github,
  Email: Mail,
};

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay } }),
};

export default function Contato() {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleMagneticMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const d = Math.hypot(dx, dy);
    if (d < 90) {
      const f = (90 - d) / 90;
      btn.style.transform = `translate(${dx * f * 0.33}px, ${dy * f * 0.33}px)`;
    }
  };

  const handleMagneticLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = "";
  };

  return (
    <section
      id="contact"
      aria-label="Contato"
      className="bg-bg text-center px-14 py-[120px] max-md:px-6 max-md:py-20"
    >
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={reveal}
        className="font-mono text-[11px] text-primary tracking-[0.18em] uppercase mb-[14px]"
      >
        # Contato
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={reveal}
        custom={0.1}
        className="font-display text-[clamp(64px,11vw,148px)] leading-[0.9] tracking-[0.03em] mb-[22px]"
      >
        VAMOS<br />CONVERSAR?
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={reveal}
        custom={0.2}
        className="text-[17px] text-muted font-light max-w-[440px] mx-auto mb-11 leading-[1.6]"
      >
        Você tem uma ideia para discutir, algum projeto, deseja conhecer ou oportunidades de
        parceria.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={reveal}
        custom={0.3}
        ref={wrapRef}
        onMouseMove={handleMagneticMove}
        onMouseLeave={handleMagneticLeave}
        className="inline-block mb-[72px]"
      >
        <a
          ref={btnRef}
          href="https://wa.me/5584994821342"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Iniciar conversa"
          className="inline-flex items-center gap-2.5 bg-primary text-foreground font-body text-[15px] font-medium px-[38px] py-[17px] rounded-[50px] transition-[background,box-shadow] duration-200 hover:bg-[#6d28d9] hover:shadow-[0_14px_44px_rgba(124,58,237,0.52)] will-change-transform"
        >
          <Phone size={17} />
          Iniciar Conversa
        </a>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={reveal}
        custom={0.4}
        className="grid grid-cols-2 gap-3.5 max-w-[580px] mx-auto max-md:grid-cols-1"
      >
        {contacts.map((contact) => {
          const Icon = CONTACT_ICONS[contact.name];
          return (
            <a
              key={contact.name}
              href={contact.link}
              target={contact.name !== "WhatsApp" ? "_blank" : undefined}
              rel={contact.name !== "WhatsApp" ? "noopener noreferrer" : undefined}
              aria-label={`${contact.name} — ${contact.value}`}
              className="bg-bg-card border border-border rounded-xl px-[22px] py-[18px] flex items-center gap-3.5 text-left transition-[border-color,transform] duration-200 hover:border-primary/40 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 bg-primary/[0.12] rounded-[10px] flex items-center justify-center shrink-0 text-accent">
                {Icon && <Icon size={19} strokeWidth={1.5} />}
              </div>
              <div>
                <div className="font-mono text-[10px] text-primary tracking-[0.12em] uppercase mb-1">
                  {contact.name}
                </div>
                <div className="text-[13px] text-foreground font-medium">
                  {contact.value.length > 28 ? contact.value.slice(0, 28) + "…" : contact.value}
                </div>
              </div>
            </a>
          );
        })}
      </motion.div>
    </section>
  );
}
