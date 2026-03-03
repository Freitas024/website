interface SkillCardProps {
    name: string;
    category: string;
    className?: string;
}

export default function SkillCard({
    name,
    category,
    className = "",
}: SkillCardProps) {
    return (
        <div
            className={`
        rounded-xl p-5
        bg-white/[0.03] border border-white/[0.08]
        hover:border-[#7c3aed]/30
        transition-all duration-300
        ${className}
      `}
        >
            <h3 className="text-sm font-semibold text-white mb-1">{name}</h3>
            <p className="text-xs text-[#a78bfa]">{category}</p>
        </div>
    );
}
