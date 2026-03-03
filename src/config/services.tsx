import { type ReactNode } from "react";
import { Settings, Code, Plug, Bot } from "lucide-react";

export interface Service {
    title: string;
    description: string;
    icon: ReactNode;
    highlights: string[];
}

export const services: Service[] = [
    {
        title: "Automação de Processos",
        description:
            "Elimine tarefas repetitivas e ganhe eficiência com workflows automatizados usando n8n, Zapier ou soluções customizadas.",
        icon: <Settings size={22} />,
        highlights: [
            "Automação de tarefas repetitivas",
            "Workflows inteligentes",
            "Sincronização de dados",
            "Notificações automáticas",
        ],
    },
    {
        title: "Desenvolvimento Web",
        description:
            "Aplicações web modernas e responsivas, desde landing pages até sistemas SaaS complexos com tecnologias de ponta.",
        icon: <Code size={22} />,
        highlights: [
            "React / Next.js",
            "Design responsivo",
            "Performance otimizada",
            "SEO e acessibilidade",
        ],
    },
    {
        title: "Integrações API",
        description:
            "Conecte diferentes sistemas e plataformas criando pontes de comunicação eficientes através de APIs REST e webhooks.",
        icon: <Plug size={22} />,
        highlights: [
            "APIs REST customizadas",
            "Webhooks em tempo real",
            "Integração multi-plataforma",
            "Documentação completa",
        ],
    },
    {
        title: "Agentes de IA",
        description:
            "Desenvolvimento de assistentes inteligentes e chatbots com IA para automatizar atendimento, análise de dados e tomada de decisões.",
        icon: <Bot size={22} />,
        highlights: [
            "Chatbots inteligentes",
            "Processamento de linguagem natural",
            "Análise preditiva",
            "Integração com GPT",
        ],
    },
];
