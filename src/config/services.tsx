import { type ReactNode } from "react";
import { Layout, Code, Paintbrush, Sparkles } from "lucide-react";

export interface Service {
    title: string;
    description: string;
    icon: ReactNode;
    highlights: string[];
}

export const services: Service[] = [
    {
        title: "Desenvolvimento Frontend",
        description:
            "Sites e aplicações web modernas, responsivas e otimizadas, construídas com React, Next.js e as melhores práticas do mercado.",
        icon: <Code size={22} />,
        highlights: [
            "React / Next.js",
            "Totalmente responsivo",
            "Performance otimizada",
            "Código limpo e mantível",
        ],
    },
    {
        title: "UI Design",
        description:
            "Criação de interfaces visuais limpas, modernas e consistentes que reforçam a identidade da sua marca e encantam os usuários.",
        icon: <Paintbrush size={22} />,
        highlights: [
            "Design moderno e consistente",
            "Identidade visual forte",
            "Componentes reutilizáveis",
            "Handoff para desenvolvimento",
        ],
    },
    {
        title: "Redesign & Otimização",
        description:
            "Melhoria de interfaces existentes com foco em performance, acessibilidade e experiência do usuário (Core Web Vitals, WCAG).",
        icon: <Layout size={22} />,
        highlights: [
            "Otimização de performance",
            "Acessibilidade (WCAG)",
            "Refatoração de código",
            "Melhoria de UX",
        ],
    },
    {
        title: "Prototipação",
        description:
            "Do wireframe ao protótipo interativo no Figma, validando ideias e fluxos antes do desenvolvimento para economizar tempo e recursos.",
        icon: <Sparkles size={22} />,
        highlights: [
            "Wireframes e mockups",
            "Protótipos interativos",
            "Figma → Código",
            "Validação de conceitos",
        ],
    },
];
