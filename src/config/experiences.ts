export type Experience = {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  mode: string;
  description: string;
  stack: string[];
};

export const experiences: Experience[] = [
  {
    id: "winstons",
    period: "2025 — Início de 2026",
    role: "Desenvolvedor de Software",
    company: "Winstons Inteligência",
    location: "CLT",
    mode: "Remoto",
    description:
      "Liderança técnica no desenvolvimento de plataformas de Business Intelligence para a Prefeitura de Natal. Atuação no ciclo completo do produto: prototipação de interfaces no Figma, desenvolvimento frontend em React e Next.js, e integração com APIs para tratamento de grandes volumes de dados em dashboards corporativos.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Git"],
  },
  {
    id: "nassausoft",
    period: "2023 — 2024",
    role: "Desenvolvedor de Software Junior",
    company: "Nassausoft",
    location: "CLT",
    mode: "Presencial",
    description:
      "Desenvolvimento e manutenção de aplicações web atuando tanto em frontend quanto em backend, em equipe ágil. Participação no ciclo completo de desenvolvimento, da implementação de novas features à correção de bugs em produção.",
    stack: ["JavaScript", "React", "Node.js", "HTML/CSS", "Figma", "Git"],
  },
];
