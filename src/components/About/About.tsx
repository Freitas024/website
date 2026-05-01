import { Code, Cloud, Settings, Zap } from "lucide-react";
import { StatusBadge, FeatureCard } from "../ui";

const features = [
    {
        title: "Frontend Moderno",
        description: "React, Next.js e TypeScript com foco em performance",
        icon: <Code size={22} />,
    },
    {
        title: "UI Design",
        description: "Interfaces visuais limpas e consistentes",
        icon: <Settings size={22} />,
    },
    {
        title: "Design System",
        description: "Componentes reutilizáveis e documentação",
        icon: <Zap size={22} />,
    },
    {
        title: "UX & Acessibilidade",
        description: "Experiências intuitivas e acessíveis (WCAG)",
        icon: <Cloud size={22} />,
    },
];

export default function About() {
    return (
        <section
            id="sobre"
            className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 xl:px-32"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-20">
                {/* Left: Text content */}
                <div className="flex-1 max-w-lg">
                    <StatusBadge label="Sobre Mim" className="mb-8" />

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-8">
                        Transformando complexidade em{" "}
                        <span className="text-[#a78bfa]">simplicidade</span>
                    </h2>

                    <div className="space-y-5 text-base leading-relaxed text-slate-400">
                        <p>
                            Com experiência em desenvolvimento frontend e design de
                            interfaces, meu foco está em criar produtos digitais que unem
                            estética, usabilidade e código de qualidade.
                        </p>
                        <p>
                            Acredito que uma boa interface vai além do visual: precisa ser
                            intuitiva, acessível e performática. Trabalho do design ao
                            código para entregar experiências que os usuários amam usar.
                        </p>
                        <p>
                            Cada projeto é uma oportunidade de equilibrar design e técnica
                            para entregar resultados que superam expectativas.
                        </p>
                    </div>
                </div>

                {/* Right: Feature cards grid */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 content-center">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
