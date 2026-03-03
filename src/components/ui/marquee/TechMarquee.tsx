import { technologies } from "../../../config/technologies";

export default function TechMarquee() {
    // Duplicate list for seamless infinite loop
    const items = [...technologies, ...technologies];

    return (
        <div className="w-full bg-[#7c3aed] overflow-hidden py-3 select-none">
            <div className="flex animate-marquee whitespace-nowrap">
                {items.map((tech, i) => (
                    <span
                        key={i}
                        className="mx-6 text-sm font-semibold text-white tracking-wide inline-flex items-center gap-3"
                    >
                        {tech}
                        <span className="text-white/40">•</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
