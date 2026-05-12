import { technologies } from "../../../config/technologies";

export default function TechMarquee() {
  const items = [...technologies, ...technologies];

  return (
    <div
      className="w-full bg-bg-alt overflow-hidden py-[18px] border-t border-border border-b"
      role="region"
      aria-label="Tecnologias"
    >
      <div
        aria-hidden="true"
        className="flex w-max [animation:marquee-scroll_32s_linear_infinite] hover:[animation-play-state:paused]"
      >
        {items.map((tech, i) => (
          <span
            key={i}
            className="font-mono text-[12.5px] text-muted whitespace-nowrap px-5 tracking-[0.04em]"
          >
            {tech}
            <em className="text-primary not-italic mx-1.5">·</em>
          </span>
        ))}
      </div>
    </div>
  );
}
