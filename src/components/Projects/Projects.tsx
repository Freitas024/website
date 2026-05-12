"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import { projects, type Project } from "../../config/projects";

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [lightboxBg, setLightboxBg] = useState<string | null>(null);

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="mod-title"
        tabIndex={-1}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        className="fixed inset-0 z-[2000] bg-[rgba(8,8,14,0.82)] backdrop-blur-[10px] flex items-start justify-center px-4 pt-9 pb-[60px] overflow-y-auto"
      >
        <div className="bg-bg-card border border-border rounded-[20px] w-full max-w-[920px] overflow-hidden relative">
          <button
            onClick={onClose}
            aria-label="Fechar modal"
            className="absolute top-[18px] right-[18px] z-[5] w-[38px] h-[38px] bg-primary/10 border border-border rounded-full flex items-center justify-center transition-[background,border-color] duration-200 hover:bg-primary/25 hover:border-primary text-foreground"
          >
            <X size={15} strokeWidth={2} />
          </button>

          <div className="px-11 pt-11 pb-7 border-b border-border max-md:px-6 max-md:pt-9 max-md:pb-5">
            <div className="flex flex-wrap gap-[7px] mb-3.5">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-[10px] text-accent bg-primary/10 border border-primary/20 px-[9px] py-[3px] rounded-[4px] tracking-[0.04em]">
                  {tag}
                </span>
              ))}
            </div>
            <h2
              id="mod-title"
              className="font-display text-[clamp(44px,7vw,84px)] tracking-[0.02em] leading-none mb-2.5"
            >
              {project.title}
            </h2>
            <p className="text-[15px] text-muted font-light">{project.sub}</p>
          </div>

          <div className="px-11 pb-11 max-md:px-6 max-md:pb-8">
            <div className="py-7 border-b border-border">
              <div className="font-mono text-[10.5px] text-primary tracking-[0.18em] uppercase mb-[18px]">
                // Galeria de Screenshots
              </div>
              <div className="grid grid-cols-2 gap-[11px] max-md:grid-cols-1">
                {project.gallery.map((item, i) => (
                  <div
                    key={i}
                    role="button"
                    tabIndex={0}
                    aria-label={item.label}
                    onClick={() => setLightboxBg(item.bg)}
                    onKeyDown={(e) => { if (e.key === "Enter") setLightboxBg(item.bg); }}
                    className={`aspect-[16/10] rounded-lg overflow-hidden flex items-center justify-center transition-[filter,transform] duration-200 hover:brightness-125 hover:scale-[1.02] ${i === 0 ? "col-span-2 max-md:col-span-1" : ""}`}
                    style={{ background: item.bg }}
                  >
                    <span className="font-mono text-[10.5px] text-foreground/40 tracking-[0.1em]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="py-7 border-b border-border">
              <div className="font-mono text-[10.5px] text-primary tracking-[0.18em] uppercase mb-[18px]">
                // Demonstração do Projeto em Funcionamento
              </div>
              <div className="rounded-xl overflow-hidden border border-border bg-bg">
                <div className="aspect-video bg-gradient-to-br from-[#1a083a] to-[#0a0a0f] flex flex-col items-center justify-center gap-3.5">
                  <div
                    role="button"
                    aria-label="Reproduzir demonstração"
                    className="w-[62px] h-[62px] bg-primary/[0.18] border-2 border-primary rounded-full flex items-center justify-center transition-[background,transform] duration-200 hover:bg-primary/[0.38] hover:scale-110"
                  >
                    <div
                      aria-hidden="true"
                      className="w-0 h-0 border-solid border-[9px_0_9px_16px] border-transparent border-l-accent ml-1"
                    />
                  </div>
                  <p className="font-mono text-[11px] text-muted tracking-[0.1em]">
                    [vídeo de demonstração do projeto]
                  </p>
                </div>
              </div>
            </div>

            <div className="py-7 border-b border-border">
              <div className="font-mono text-[10.5px] text-primary tracking-[0.18em] uppercase mb-[18px]">
                // Problema &amp; Solução
              </div>
              <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
                {[
                  { label: "O Problema", content: project.problem },
                  { label: "A Solução", content: project.solution },
                ].map((col) => (
                  <div key={col.label} className="bg-bg border border-border rounded-[10px] p-[22px]">
                    <h4 className="font-mono text-[10.5px] text-primary tracking-[0.12em] uppercase mb-2.5">
                      {col.label}
                    </h4>
                    <p className="text-[13.5px] text-muted leading-[1.65]">{col.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="py-7 border-b border-border">
              <div className="font-mono text-[10.5px] text-primary tracking-[0.18em] uppercase mb-[18px]">
                // Por Que Foi Feito
              </div>
              <p className="text-[14.5px] text-muted leading-[1.72]">{project.motivation}</p>
            </div>

            <div className="py-7 border-b border-border">
              <div className="font-mono text-[10.5px] text-primary tracking-[0.18em] uppercase mb-[18px]">
                // Stack Técnica
              </div>
              <div className="flex flex-wrap gap-[9px]">
                {project.techStack.map((tech) => (
                  <span key={tech} className="font-mono text-[11.5px] text-foreground bg-primary/[0.12] border border-primary/[0.28] px-[15px] py-[7px] rounded-md tracking-[0.04em]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-7">
              <div className="font-mono text-[10.5px] text-primary tracking-[0.18em] uppercase mb-[18px]">
                // Links
              </div>
              <div className="flex gap-3.5 flex-wrap">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver ao vivo"
                  className="inline-flex items-center gap-2 bg-primary text-foreground font-body text-sm font-medium px-[26px] py-[13px] rounded-md transition-[background,transform] duration-200 hover:bg-[#6d28d9] hover:-translate-y-0.5"
                >
                  <ExternalLink size={14} />
                  Ver ao Vivo
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver no GitHub"
                    className="inline-flex items-center gap-2 bg-transparent text-muted font-body text-sm font-medium px-[26px] py-[13px] rounded-md border border-border transition-[color,border-color] duration-200 hover:text-foreground hover:border-border-active"
                  >
                      Ver no GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxBg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Visualizar imagem"
            onClick={() => setLightboxBg(null)}
            className="fixed inset-0 z-[3000] bg-black/[0.96] flex items-center justify-center"
          >
            <div
              className="w-[80vw] max-w-[960px] aspect-[16/10] rounded-[10px]"
              style={{ background: lightboxBg }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const CARD_BG = [
  "linear-gradient(135deg,#1a083a 0%,#0f0d1e 45%,#160a30 100%)",
  "linear-gradient(135deg,#081a3a 0%,#0a0d1e 45%,#080f2e 100%)",
];

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay } }),
};

export default function Projects() {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const activeProject = projects.find((p) => p.key === openProject) ?? null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenProject(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openProject]);

  return (
    <>
      <section
        id="work"
        aria-label="Projetos em destaque"
        className="px-14 py-[120px] max-md:px-6 max-md:py-20"
        style={{ background: "linear-gradient(180deg, var(--bg), #0c0c15)" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={reveal}
          className="text-center mb-[60px]"
        >
          <div className="font-mono text-[11px] text-primary tracking-[0.18em] uppercase mb-[14px] flex items-center justify-center">
            // Ver Trabalhos
          </div>
          <h2 className="font-display text-[clamp(44px,6.5vw,88px)] tracking-[0.03em] leading-[0.95]">
            PROJETOS EM<br />DESTAQUE
          </h2>
          <p className="text-base text-muted font-light leading-[1.65] mt-3.5 max-w-[460px] mx-auto">
            Alguns dos trabalhos que desenvolvi para empresas e clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-[22px] max-md:grid-cols-1">
          {projects.map((project, i) => (
            <motion.article
              key={project.key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={reveal}
              custom={i * 0.1}
              className="bg-bg-card border border-border rounded-2xl overflow-hidden transition-[transform,box-shadow,border-color] duration-300 hover:scale-[1.022] hover:shadow-[0_22px_64px_rgba(124,58,237,0.22)] hover:border-primary/40"
            >
              <div className="w-full aspect-[16/10] overflow-hidden relative">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: CARD_BG[i % CARD_BG.length] }}
                  >
                    <div className="w-[78%] h-[72%] border border-primary/[0.18] rounded-lg bg-[rgba(17,17,24,0.75)] flex flex-col items-center justify-center gap-2.5">
                      {[58, 40, 50].map((w, j) => (
                        <div
                          key={j}
                          className="h-[3.5px] bg-primary/[0.28] rounded-sm"
                          style={{ width: `${w}%`, opacity: j === 0 ? 1 : j === 1 ? 0.55 : 0.35 }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-[22px]">
                <div className="flex flex-wrap gap-[7px] mb-3.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] text-accent bg-primary/10 border border-primary/20 px-[9px] py-[3px] rounded-[4px] tracking-[0.04em]">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-[clamp(28px,3.8vw,44px)] tracking-[0.02em] mb-2">
                  {project.title}
                </h3>

                <p className="text-[13.5px] text-muted leading-[1.62] mb-[18px]">
                  {project.description}
                </p>

                <button
                  onClick={() => setOpenProject(project.key)}
                  aria-label={`Ver detalhes do projeto ${project.title}`}
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-accent bg-primary/10 border border-primary/[0.22] px-[18px] py-[9px] rounded-md transition-[background,border-color,transform] duration-200 hover:bg-primary/[0.22] hover:border-primary hover:translate-x-1"
                >
                  Ver Detalhes
                  <ArrowRight size={12} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            key="modal-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32 }}
          >
            <ProjectModal project={activeProject} onClose={() => setOpenProject(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
