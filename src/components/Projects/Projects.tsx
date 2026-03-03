import { StatusBadge } from "../ui";
import { ProjectCard } from "../ui";
import { projects } from "../../config/projects";

export default function Projects() {
    return (
        <section
            id="projetos"
            className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 xl:px-32"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header — centered */}
                <div className="text-center mb-16">
                    <StatusBadge label="Portfólio" className="mb-6" />

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
                        Projetos em Destaque
                    </h2>

                    <p className="text-base leading-relaxed text-slate-400 max-w-xl mx-auto">
                        Alguns dos trabalhos que desenvolvi para empresas e clientes
                    </p>
                </div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            tags={project.tags}
                            link={project.link}
                            github={project.github}
                            lottie={project.lottie}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
