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
                <div className="text-center mb-16">
                    <StatusBadge label="Serviços" className="mb-6" />

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
                        Como Posso Ajudar
                    </h2>

                    <p className="text-base leading-relaxed text-slate-400 max-w-xl mx-auto">
                        Soluções completas de tecnologia para automatizar, integrar e
                        escalar seu negócio
                    </p>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.title}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            highlights={service.highlights}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
