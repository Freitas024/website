import { Heart } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/[0.08] bg-[#0a0a0f] pt-16 pb-8 px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <a
                        href="#hero"
                        className="text-2xl font-bold bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-transparent bg-clip-text mb-2 transition-opacity hover:opacity-80"
                    >
                        Vinicius Freitas
                    </a>
                    <p className="text-sm text-slate-400">
                        Frontend Developer & UI/UX Specialist
                    </p>
                </div>

                <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-300">
                    <a href="#sobre" className="hover:text-[#a78bfa] transition-colors">
                        Sobre
                    </a>
                    <a href="#skills" className="hover:text-[#a78bfa] transition-colors">
                        Skills
                    </a>
                    <a href="#projetos" className="hover:text-[#a78bfa] transition-colors">
                        Projetos
                    </a>
                    <a href="#servicos" className="hover:text-[#a78bfa] transition-colors">
                        Serviços
                    </a>
                    <a href="#contatos" className="hover:text-[#a78bfa] transition-colors">
                        Contato
                    </a>
                </nav>

                <div className="flex items-center gap-2 text-sm text-slate-400">
                    <span>&copy; {currentYear} Feito com</span>
                    <Heart size={14} className="text-[#a78bfa] fill-[#a78bfa]" />
                </div>
            </div>

            <div className="pt-8 border-t border-white/[0.08] text-center">
                <p className="text-xs text-slate-500">
                    Desenvolvido por Vinicius Freitas
                </p>
            </div>
        </footer>
    );
}
