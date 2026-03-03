import { type ReactNode } from "react";

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    className?: string;
}

export default function FeatureCard({
    icon,
    title,
    description,
    className = "",
}: FeatureCardProps) {
    return (
        <div
            className={`
        group rounded-xl p-6
        bg-white/[0.03] border border-white/[0.08]
        hover:bg-white/[0.06] hover:border-[#7c3aed]/30
        transition-all duration-300
        ${className}
      `}
        >
            {/* Icon */}
            <div className="w-12 h-12 rounded-lg bg-[#7c3aed]/10 border border-[#7c3aed]/20 flex items-center justify-center text-[#a78bfa] mb-5 group-hover:bg-[#7c3aed]/20 transition-colors duration-300">
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-white mb-2">{title}</h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-slate-400">{description}</p>
        </div>
    );
}
