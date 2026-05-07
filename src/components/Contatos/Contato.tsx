"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { StatusBadge, ContactCard } from "../ui";
import { contacts } from "../../config/contacts";

export default function Contatos() {
    return (
        <section
            id="contatos"
            className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 xl:px-32"
        >
            <div className="max-w-4xl mx-auto">
                {/* Header — centered */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <StatusBadge label="Contato" className="mb-6" />

                    <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white mb-4">
                        Vamos Conversar?
                    </h2>

                    <p className="text-base leading-relaxed text-slate-400 max-w-xl mx-auto">
                        Estou sempre aberto para discutir novos projetos, ideias criativas ou oportunidades de parceria.
                    </p>
                </motion.div>

                {/* Card CTA Principal */}
                <motion.div 
                    className="relative rounded-2xl overflow-hidden bg-white/[0.02] border border-[#7c3aed]/20 p-8 md:p-12 text-center mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/5 to-transparent pointer-events-none" />

                    <div className="relative z-10">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Pronto para começar seu projeto?</h3>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            Entre em contato e vamos transformar suas ideias em realidade. Respondo o mais rápido possível.
                        </p>
                        <a
                            href="https://wa.me/5584994821342"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] transition-colors text-white font-medium rounded-lg"
                        >
                            <MessageCircle size={18} />
                            Iniciar Conversa
                        </a>
                    </div>
                </motion.div>

                {/* Cards de contato menores */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {contacts.map((contact, index) => (
                        <motion.div
                            key={contact.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <ContactCard
                                name={contact.name}
                                value={contact.value}
                                link={contact.link}
                                icon={contact.icon}
                                colorClass={contact.colorClass}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
