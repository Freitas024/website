"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { ExternalLink, Github } from "lucide-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    tags: string[];
    link: string;
    github?: string;
    lottie?: string;
    className?: string;
}

export default function ProjectCard({
    title,
    description,
    image,
    tags,
    link,
    github,
    lottie,
    className = "",
}: ProjectCardProps) {
    return (
        <div
            className={`
        group rounded-2xl overflow-hidden
        bg-white/[0.03] border border-white/[0.08]
        hover:border-[#7c3aed]/30
        transition-all duration-300
        flex flex-col
        ${className}
      `}
        >
            {/* Image or Lottie animation */}
            <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-white/[0.02] flex items-center justify-center">
                {lottie ? (
                    <LottieArea src={lottie} />
                ) : image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                ) : null}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

                <p className="text-sm leading-relaxed text-slate-400 mb-5">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium text-[#a78bfa] bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex gap-2">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              flex-1 inline-flex items-center justify-center gap-2
              py-3 rounded-lg
              bg-[#7c3aed] text-white text-sm font-medium
              hover:bg-[#6d28d9] transition-colors duration-200
            "
                    >
                        <ExternalLink size={14} />
                        Ver Detalhes
                    </a>

                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                w-12 h-auto rounded-lg
                border border-white/[0.08] bg-white/[0.03]
                hover:border-[#7c3aed]/30 hover:bg-white/[0.06]
                transition-colors duration-200
                flex items-center justify-center text-slate-400 hover:text-[#a78bfa]
              "
                            aria-label="Ver no GitHub"
                        >
                            <Github size={18} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

import { useEffect, useState } from "react";

/* Lottie sub-component — loads JSON from public path */
function LottieArea({ src }: { src: string }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(src)
            .then((r: Response) => r.json())
            .then(setData)
            .catch(() => { });
    }, [src]);

    if (!data) return null;

    return <Lottie animationData={data} loop className="w-40 h-40" />;
}
