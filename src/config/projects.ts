export interface Project {
    title: string;
    description: string;
    image?: string;
    tags: string[];
    link: string;
    github?: string;
    lottie?: string;
}

export const projects: Project[] = [
    {
        title: "Budgy",
        description:
            "Sistema de agendamento inteligente e orçamento para pequenas empresas. Gestão completa de clientes, tickets e serviços.",
        image: "/projects/budgy.png",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        link: "https://budgy-gamma.vercel.app",
        github: "https://github.com/Freitas024/Budgy",
    },
    {
        title: "Em breve...",
        description: "Novo projeto em desenvolvimento. Fique ligado!",
        lottie: "/animations/construction.json",
        tags: ["Em breve"],
        link: "#",
    },
];
