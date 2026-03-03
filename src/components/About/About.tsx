import { Code, Cloud, Settings, Zap } from "lucide-react";
import { StatusBadge, FeatureCard } from "../ui";

const features = [
    {
        title: "Full Stack",
        description: "Desenvolvimento completo com React, Node.js e PostgreSQL",
        icon: <Code size={22} />,
    },
    {
        title: "SaaS & Cloud",
        description: "Soluções escaláveis em arquiteturas serverless",
        icon: <Cloud size={22} />,
    },
    {
        title: "n8n Specialist",
        description: "Automação avançada e workflows inteligentes",
        icon: <Settings size={22} />,
    },
    {
        title: "APIs & Integrations",
        description: "Conectando sistemas com APIs REST e webhooks",
        icon: <Zap size={22} />,
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
                            Com anos de experiência em desenvolvimento de software, meu foco
                            está em criar soluções que realmente fazem a diferença nos
                            processos de negócio.
                        </p>
                        <p>
                            Especializado em automação inteligente, desenvolvo desde
                            integrações complexas entre sistemas até agentes de IA que
                            otimizam operações e geram insights valiosos.
                        </p>
                        <p>
                            Cada projeto é uma oportunidade de aplicar as melhores práticas e
                            tecnologias de ponta para entregar resultados que superam
                            expectativas.
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
