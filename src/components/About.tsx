import { Award, Shield, Users, Clock, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "25 Anos de Experiência",
    description: "Atuação contínua desde 1999",
  },
  {
    icon: Shield,
    title: "Conformidade Total",
    description: "Normas e regulamentos técnicos",
  },
  {
    icon: Users,
    title: "Equipas Qualificadas",
    description: "Profissionais certificados",
  },
  {
    icon: Clock,
    title: "Cumprimento de Prazos",
    description: "Planeamento e execução rigorosos",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-14 sm:py-18 lg:py-24 bg-white overflow-hidden"
    >
      {/* Background decor (discreto, premium) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#0B4F8A]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#F5A623]/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(#1E1E1E 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center">
          {/* Left */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#F5A623]" />
              <span className="text-sm font-semibold text-[#1E1E1E]">
                Grupo Diâmetro
              </span>
              <span className="text-sm text-gray-500">desde 1999</span>
            </div>

            <h2 className="mt-5 sm:mt-6 text-[28px] leading-[1.12] sm:text-4xl font-extrabold tracking-tight text-[#1E1E1E]">
              A Empresa
            </h2>

            {/* Accent line */}
            <div className="mt-3 sm:mt-4 h-1 w-16 rounded-full bg-[#0B4F8A]" />

            <p className="mt-5 sm:mt-6 text-[15px] sm:text-lg text-gray-700 leading-relaxed">
              O Grupo Diâmetro atua desde 1999 como referência em{" "}
              <span className="font-semibold text-[#1E1E1E]">
                canalização profissional para obras e empresas
              </span>
              , com foco em execução técnica rigorosa e entregas com qualidade.
            </p>

            <p className="mt-3 sm:mt-4 text-[15px] sm:text-lg text-gray-700 leading-relaxed">
              Trabalhamos com planeamento, segurança e conformidade regulamentar,
              garantindo projetos eficientes, bem documentados e alinhados às
              exigências do setor da construção.
            </p>

            <p className="mt-3 sm:mt-4 text-[15px] sm:text-lg text-gray-700 leading-relaxed">
              Em parceria com construtoras, promotores e empresas industriais,
              entregamos soluções adaptadas à realidade de cada obra — do início
              ao acabamento final.
            </p>

            {/* CTA (somente 1, full width no mobile) */}
            <div className="mt-7 sm:mt-8">
              <a
                href="#contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-[#0B4F8A] px-6 py-3.5 text-[15px] font-extrabold text-white shadow-md shadow-[#0B4F8A]/20 hover:brightness-110 transition"
              >
                Solicitar contacto
                <ArrowUpRight size={18} />
              </a>

              <p className="mt-3 text-xs text-gray-500">
                Resposta rápida por telefone ou email em horário comercial.
              </p>
            </div>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-gray-200 bg-white/70 p-5 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  {/* top accent */}
                  <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#0B4F8A] via-[#0B4F8A]/60 to-[#F5A623]" />

                  <div className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      {/* icon badge */}
                      <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-2xl bg-gradient-to-br from-[#F5A623] to-[#E08D00] flex items-center justify-center shadow-md shadow-[#F5A623]/25 ring-1 ring-black/5">
                        <Icon size={21} className="text-white" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-white ring-1 ring-gray-200 flex items-center justify-center">
                        <span className="h-2 w-2 rounded-full bg-[#0B4F8A]" />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[15px] sm:text-base font-extrabold text-[#1E1E1E] leading-snug">
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 sm:mt-2 text-[13px] sm:text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* subtle hover glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition">
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-[#0B4F8A]/15" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
