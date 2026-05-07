"use client";

import { motion } from "framer-motion";
import { StatusBadge, SkillCard } from "../ui";
import { skills } from "../../config/skills";

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 xl:px-32"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header — centered */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <StatusBadge label="Habilidades Técnicas" className="mb-6" />

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
                        Stack Tecnológico
                    </h2>

                    <p className="text-base leading-relaxed text-slate-400 max-w-xl mx-auto">
                        Ferramentas e tecnologias que utilizo para criar soluções robustas e
                        escaláveis
                    </p>
                </motion.div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <SkillCard
                                name={skill.name}
                                category={skill.category}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
