interface StatusBadgeProps {
    label: string;
    className?: string;
}

export default function StatusBadge({ label, className = "" }: StatusBadgeProps) {
    return (
        <span
            className={`
        inline-flex items-center gap-2
        px-4 py-1.5 rounded-full
        text-xs font-medium text-slate-300 tracking-wide
        border border-white/[0.1]
        bg-white/[0.04]
        ${className}
      `}
        >
            {/* Neon purple dot */}
            <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a78bfa] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a78bfa] shadow-[0_0_8px_2px_rgba(167,139,250,0.6)]" />
            </span>
            {label}
        </span>
    );
}
