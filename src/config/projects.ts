export interface ProjectGalleryItem {
  bg: string;
  label: string;
  image?: string;
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
    image: "/projects/budgy/Screenshot_2026-05-12_08-16-55.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "UI/UX", "Responsive Design"],
    link: "https://budgy-gamma.vercel.app/",
    github: "https://github.com/Freitas024/Budgy",
    gallery: [
      { bg: "linear-gradient(135deg,#22083e 0%,#0a0f22 100%)", label: "Screenshot 07", image: "/projects/budgy/Screenshot_2026-05-12_08-16-55.png" },
      { bg: "linear-gradient(135deg,#120838 0%,#1a0f40 100%)", label: "Screenshot 02", image: "/projects/budgy/Screenshot_2026-05-12_08-14-40.png" },
      { bg: "linear-gradient(135deg,#22083e 0%,#0a0f22 100%)", label: "Screenshot 03", image: "/projects/budgy/Screenshot_2026-05-12_08-14-46.png" },
      { bg: "linear-gradient(135deg,#0a1a3e 0%,#160830 100%)", label: "Screenshot 04", image: "/projects/budgy/Screenshot_2026-05-12_08-14-52.png" },
      { bg: "linear-gradient(135deg,#1e0840 0%,#0f0d1e 48%,#180a36 100%)", label: "Screenshot 05", image: "/projects/budgy/Screenshot_2026-05-12_08-15-01.png" },
      { bg: "linear-gradient(135deg,#120838 0%,#1a0f40 100%)", label: "Screenshot 06", image: "/projects/budgy/Screenshot_2026-05-12_08-15-11.png" },
      { bg: "linear-gradient(135deg,#1e0840 0%,#0f0d1e 48%,#180a36 100%)", label: "Screenshot 01", image: "/projects/budgy/Screenshot_2026-05-12_08-14-34.png" },
    ],
    problem:
      "Pequenas empresas perdiam horas gerenciando planilhas complexas e softwares caros. A falta de visibilidade financeira causava decisões baseadas em achismo, não em dados reais.",
    solution:
      "Dashboard intuitivo com relatórios automatizados, gráficos em tempo real e alertas inteligentes. Reduz o tempo de análise em 70% e elimina erros manuais de registro.",
    motivation:
      "O Budgy é uma plataforma completa pensada para lojistas e prestadores de serviços que precisam organizar seus clientes, orçamentos e serviços em um só lugar. Com uma interface moderna, escura e responsiva, o sistema roda em qualquer dispositivo e conecta-se a um banco PostgreSQL em tempo real.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Figma", "Prisma", "PostgreSQL", "Vercel"],
  },
  {
    key: "budgy-finance",
    title: "BUDGY FINANCE",
    sub: "App de finanças pessoais automatizado",
    description:
      "App de finanças pessoais automatizado para o dia a dia. Gerencie suas contas com inteligência — insights e dados da sua carteira sem análise manual.",
    image: "/projects/budgy-finance/Screenshot_2026-05-12_09-34-26.png",
    tags: ["React", "TypeScript", "Next.js", "UI/UX"],
    link: "https://budgy-finance.vercel.app/login",
    github: "https://github.com/Freitas024/budgy-finance.git",
    gallery: [
      { bg: "linear-gradient(135deg,#0a0f30 0%,#081a40 100%)", label: "Screenshot 02", image: "/projects/budgy-finance/Screenshot_2026-05-12_09-34-26.png" },
      { bg: "linear-gradient(135deg,#051030 0%,#0a1a38 100%)", label: "Screenshot 03", image: "/projects/budgy-finance/Screenshot_2026-05-12_09-34-40.png" },
      { bg: "linear-gradient(135deg,#0a1530 0%,#05102c 100%)", label: "Screenshot 04", image: "/projects/budgy-finance/Screenshot_2026-05-12_09-35-21.png" },
      { bg: "linear-gradient(135deg,#081a3c 0%,#0a0d1e 48%,#08102e 100%)", label: "Screenshot 05", image: "/projects/budgy-finance/Screenshot_2026-05-12_09-35-33.png" },
      { bg: "linear-gradient(135deg,#0a0f30 0%,#081a40 100%)", label: "Screenshot 06", image: "/projects/budgy-finance/Screenshot_2026-05-12_09-35-42.png" },
      { bg: "linear-gradient(135deg,#051030 0%,#0a1a38 100%)", label: "Screenshot 07", image: "/projects/budgy-finance/Screenshot_2026-05-12_09-35-57.png" },
      { bg: "linear-gradient(135deg,#0a1530 0%,#05102c 100%)", label: "Screenshot 08", image: "/projects/budgy-finance/Screenshot_2026-05-12_09-36-07.png" },
    ],
    problem:
      "Pessoas sem conhecimento financeiro não conseguiam ter clareza sobre gastos, metas e evolução patrimonial. Os aplicativos existentes eram confusos e pouco inteligentes para o usuário comum.",
    solution:
      "Aplicativo que automatiza a categorização de transações, gera insights inteligentes e apresenta a saúde financeira de forma visual e compreensível para qualquer perfil de usuário.",
    motivation:
      "A saúde financeira é um direito de todos, não apenas de quem entende de finanças. O Budgy Finance foi criado para ser o copiloto financeiro de qualquer pessoa, usando automação para simplificar o complexo e tornar o controle financeiro algo acessível e até prazeroso.",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion","Figma", "supabase", "vercel"],
  },
];
