export interface Project {
    title: string;
    description: string;
    image?: string;
    tags: string[];
    link: string;
    github?: string;
    lottie?: string;
    internalPage?: boolean;
}

export const projects: Project[] = [
    {
        title: "Budgy",
        description:
            "Sistema de agendamento e orçamento para pequenas empresas. Interface intuitiva com dashboard completo para gestão de clientes, tickets e serviços.",
        image: "/projects/budgy-dashboard.png",
        tags: ["React", "TypeScript", "Tailwind CSS", "UI/UX", "Responsive Design"],
        link: "https://budgy-gamma.vercel.app",
        github: "https://github.com/Freitas024/Budgy",
        internalPage: true,
    },
];
