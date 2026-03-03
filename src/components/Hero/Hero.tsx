import { Phone } from "lucide-react";
import { Button, StatusBadge } from "../ui";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32 overflow-hidden"
        >
            {/* Purple ambient glow — top right */}
            <div
                className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-15"
                style={{
                    background:
                        "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
                }}
                aria-hidden
            />

            {/* Content */}
            <div className="relative z-10 max-w-2xl">
                {/* Status badge */}
                <StatusBadge label="Disponível para projetos" className="mb-8" />

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
                    Desenvolvedor de{" "}
                    <span className="text-[#a78bfa]">Software</span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg leading-relaxed text-slate-400 max-w-xl mb-10">
                    Especializado em automação de processos, integrações complexas e
                    desenvolvimento de agentes de IA para transformar ideias em
                    soluções escaláveis.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4">
                    <Button
                        variant="primary"
                        href="https://wa.me/5584994821342"
                        target="_blank"
                        rel="noopener noreferrer"
                        icon={<Phone size={16} />}
                    >
                        Entrar em Contato
                    </Button>

                    <Button variant="outline" href="#projetos">
                        Ver Projetos
                    </Button>
                </div>
            </div>

            {/* Decorative divider line — right side */}
            <div
                className="hidden md:block absolute top-1/2 right-[15%] -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                aria-hidden
            />
        </section>
    );
}
