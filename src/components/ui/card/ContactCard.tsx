import { type ReactNode } from "react";

interface ContactCardProps {
    name: string;
    value: string;
    link: string;
    icon: ReactNode;
    colorClass: string;
    className?: string;
}

export default function ContactCard({
    name,
    value,
    link,
    icon,
    colorClass,
    className = "",
}: ContactCardProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
        group flex items-center gap-4 rounded-xl p-5
        bg-white/[0.03] border border-white/[0.08]
        hover:border-[#7c3aed]/30
        transition-all duration-300
        ${className}
      `}
        >
            {/* Icon Area */}
            <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-colors duration-300 ${colorClass}`}
            >
                {icon}
            </div>

            {/* Text Area */}
            <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-400 mb-1">{name}</span>
                <span className="text-base font-semibold text-white group-hover:text-[#a78bfa] transition-colors duration-200 truncate max-w-[200px] sm:max-w-[250px]">
                    {value}
                </span>
            </div>
        </a>
    );
}
