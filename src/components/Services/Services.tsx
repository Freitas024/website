"use client";

import { motion } from "framer-motion";
import { StatusBadge } from "../ui";
import { ServiceCard } from "../ui";
import { services } from "../../config/services";

export default function Services() {
    return (
        <section
            id="servicos"
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
                    <StatusBadge label="Serviços" className="mb-6" />

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
                        Como Posso Ajudar
                    </h2>

                    <p className="text-base leading-relaxed text-slate-400 max-w-xl mx-auto">
                        Soluções completas de tecnologia para automatizar, integrar e
                        escalar seu negócio
                    </p>
                </motion.div>

                {/* Services grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <ServiceCard
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                highlights={service.highlights}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
