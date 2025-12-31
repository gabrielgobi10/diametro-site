import { ArrowUpRight, Building2, Droplets, Wrench, Handshake } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Canalização em Obras",
    badge: "Obra nova e reabilitação",
    description:
      "Instalação completa de sistemas hidráulicos em construções novas e reabilitações. Execução conforme projeto, com materiais certificados e equipas especializadas.",
  },
  {
    icon: Droplets,
    title: "Infraestruturas Hidráulicas",
    badge: "Redes de águas e esgotos",
    description:
      "Desenvolvimento de redes de águas e esgotos, sistemas de drenagem e distribuição. Dimensionamento técnico e implementação para projetos de grande escala.",
  },
  {
    icon: Wrench,
    title: "Manutenção Técnica",
    badge: "Preventiva e corretiva",
    description:
      "Intervenções preventivas e corretivas em instalações industriais e comerciais. Diagnóstico, reparação e otimização de sistemas hidráulicos existentes.",
  },
  {
    icon: Handshake,
    title: "Apoio a Construtoras",
    badge: "Coordenação e execução",
    description:
      "Parceria técnica para empresas de construção. Planeamento, coordenação e execução integrada em obras de construção civil e industrial.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1E1E]">
            Serviços Técnicos
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Soluções especializadas para o setor da construção e indústria
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={index}
                className={[
                  "group relative overflow-hidden",
                  "rounded-2xl bg-white",
                  "border border-gray-100",
                  "p-7 sm:p-8",
                  "shadow-sm",
                  "transition-all duration-300",
                  "hover:-translate-y-0.5 hover:shadow-md",
                ].join(" ")}
              >
                {/* Accent top line */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0B4F8A] to-[#F5A623] opacity-0 group-hover:opacity-100 transition" />

                <div className="flex items-start gap-5">
                  {/* Icon badge */}
                  <div
                    className={[
                      "shrink-0",
                      "h-14 w-14 rounded-2xl",
                      "bg-[#0B4F8A]",
                      "flex items-center justify-center",
                      "shadow-sm ring-1 ring-black/5",
                      "transition-transform duration-300",
                      "group-hover:scale-[1.03]",
                    ].join(" ")}
                  >
                    <Icon size={26} className="text-white" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E]">
                        {service.title}
                      </h3>

                      {/* Badge */}
                      <span
                        className={[
                          "inline-flex items-center",
                          "rounded-full px-2.5 py-1",
                          "text-[11px] font-extrabold uppercase tracking-wide",
                          "bg-[#0B4F8A]/5 text-[#0B4F8A]",
                          "ring-1 ring-[#0B4F8A]/10",
                        ].join(" ")}
                      >
                        {service.badge}
                      </span>
                    </div>

                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Micro CTA */}
                    <div className="mt-6">
                      <a
                        href="#contact"
                        className={[
                          "inline-flex items-center gap-2",
                          "text-sm font-semibold text-[#0B4F8A]",
                          "opacity-0 translate-x-2",
                          "group-hover:opacity-100 group-hover:translate-x-0",
                          "transition-all duration-300",
                        ].join(" ")}
                      >
                        Pedir orçamento <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Micro background glow */}
                <div
                  className={[
                    "pointer-events-none absolute -right-20 -bottom-20 h-48 w-48 rounded-full",
                    "bg-[#0B4F8A]/10 blur-2xl",
                    "opacity-0 group-hover:opacity-100 transition",
                  ].join(" ")}
                />
              </article>
            );
          })}
        </div>

        {/* Optional: mini footer line (credibilidade) */}
        <div className="mt-10 text-center text-sm text-gray-500">
          Execução técnica rigorosa, materiais certificados e cumprimento de prazos.
        </div>
      </div>
    </section>
  );
}
