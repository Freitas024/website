export interface ProjectGalleryItem {
  bg: string;
  label: string;
}

export interface Project {
  key: string;
  title: string;
  sub: string;
  description: string;
  image?: string;
  tags: string[];
  link: string;
  github?: string;
  gallery: ProjectGalleryItem[];
  problem: string;
  solution: string;
  motivation: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    key: "budgy",
    title: "BUDGY",
    sub: "Dashboard financeiro para pequenas empresas",
    description:
      "Dashboard financeiro completo para pequenas empresas com relatórios gerenciais, gráficos customizados e gestão de finanças de forma simples e intuitiva.",
    image: "/projects/budgy-dashboard.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "UI/UX", "Responsive Design"],
    link: "https://budgy-gamma.vercel.app/",
    github: "https://github.com/Freitas024/Budgy",
    gallery: [
      { bg: "linear-gradient(135deg,#1e0840 0%,#0f0d1e 48%,#180a36 100%)", label: "Screenshot 01 — Dashboard Principal" },
      { bg: "linear-gradient(135deg,#120838 0%,#1a0f40 100%)", label: "Screenshot 02 — Relatórios" },
      { bg: "linear-gradient(135deg,#22083e 0%,#0a0f22 100%)", label: "Screenshot 03 — Transações" },
      { bg: "linear-gradient(135deg,#0a1a3e 0%,#160830 100%)", label: "Screenshot 04 — Configurações" },
    ],
    problem:
      "Pequenas empresas perdiam horas gerenciando planilhas complexas e softwares caros. A falta de visibilidade financeira causava decisões baseadas em achismo, não em dados reais.",
    solution:
      "Dashboard intuitivo com relatórios automatizados, gráficos em tempo real e alertas inteligentes. Reduz o tempo de análise em 70% e elimina erros manuais de registro.",
    motivation:
      "Após observar amigos empreendedores lutando com controle financeiro, percebi que a maioria dos softwares existentes eram complexos demais ou caros demais para pequenas empresas. O Budgy nasceu da necessidade real de democratizar a inteligência financeira para quem mais precisa.",
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "Recharts", "React Query", "Zustand", "Vite", "Figma"],
  },
  {
    key: "budgy-finance",
    title: "BUDGY FINANCE",
    sub: "App de finanças pessoais automatizado",
    description:
      "App de finanças pessoais automatizado para o dia a dia. Gerencie suas contas com inteligência — insights e dados da sua carteira sem análise manual.",
    image: "/projects/budgy-finance.png",
    tags: ["React", "TypeScript", "Next.js", "UI/UX"],
    link: "https://budgy-finance.vercel.app/login",
    github: "https://github.com/Freitas024/budgy-finance.git",
    gallery: [
      { bg: "linear-gradient(135deg,#081a3c 0%,#0a0d1e 48%,#08102e 100%)", label: "Screenshot 01 — Home Feed" },
      { bg: "linear-gradient(135deg,#0a0f30 0%,#081a40 100%)", label: "Screenshot 02 — Carteira" },
      { bg: "linear-gradient(135deg,#051030 0%,#0a1a38 100%)", label: "Screenshot 03 — Insights IA" },
      { bg: "linear-gradient(135deg,#0a1530 0%,#05102c 100%)", label: "Screenshot 04 — Metas" },
    ],
    problem:
      "Pessoas sem conhecimento financeiro não conseguiam ter clareza sobre gastos, metas e evolução patrimonial. Os aplicativos existentes eram confusos e pouco inteligentes para o usuário comum.",
    solution:
      "Aplicativo que automatiza a categorização de transações, gera insights inteligentes e apresenta a saúde financeira de forma visual e compreensível para qualquer perfil de usuário.",
    motivation:
      "A saúde financeira é um direito de todos, não apenas de quem entende de finanças. O Budgy Finance foi criado para ser o copiloto financeiro de qualquer pessoa, usando automação para simplificar o complexo e tornar o controle financeiro algo acessível e até prazeroso.",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Prisma", "PostgreSQL", "OpenAI API", "Figma"],
  },
];
