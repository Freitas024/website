import { StatusBadge } from "../ui";
import { SkillCard } from "../ui";
import { skills } from "../../config/skills";

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 xl:px-32"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header — centered */}
                <div className="text-center mb-16">
                    <StatusBadge label="Habilidades Técnicas" className="mb-6" />

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
                        Stack Tecnológico
                    </h2>

                    <p className="text-base leading-relaxed text-slate-400 max-w-xl mx-auto">
                        Ferramentas e tecnologias que utilizo para criar soluções robustas e
                        escaláveis
                    </p>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {skills.map((skill) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            category={skill.category}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
