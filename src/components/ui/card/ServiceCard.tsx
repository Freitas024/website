import { type ReactNode } from "react";

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    highlights: string[];
    className?: string;
}

export default function ServiceCard({
    icon,
    title,
    description,
    highlights,
    className = "",
}: ServiceCardProps) {
    return (
        <div
            className={`
        group rounded-2xl p-7
        bg-white/[0.03] border border-white/[0.08]
        hover:border-[#7c3aed]/30
        transition-all duration-300
        ${className}
      `}
        >
            {/* Icon */}
            <div className="w-12 h-12 rounded-lg bg-[#7c3aed]/10 border border-[#7c3aed]/20 flex items-center justify-center text-[#a78bfa] mb-6 group-hover:bg-[#7c3aed]/20 transition-colors duration-300">
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-slate-400 mb-5">
                {description}
            </p>

            {/* Highlights */}
            <ul className="space-y-2.5">
                {highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] flex-shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
