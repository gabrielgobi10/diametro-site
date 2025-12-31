import { Briefcase, TrendingUp, CheckCircle, ArrowUpRight } from "lucide-react";

const positions = [
  {
    title: "Canalizadores",
    requirements: ["Experiência comprovada", "Conhecimento técnico", "Autonomia"],
  },
  {
    title: "Oficiais",
    requirements: ["Certificação profissional", "Liderança de equipa", "Planeamento"],
  },
  {
    title: "Ajudantes",
    requirements: ["Disponibilidade imediata", "Vontade de aprender", "Responsabilidade"],
  },
];

interface RecruitmentProps {
  onContactClick: () => void;
}

export default function Recruitment({ onContactClick }: RecruitmentProps) {
  return (
    <section id="recruitment" className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1E1E]">
            Junte-se à Nossa Equipa
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Procuramos profissionais qualificados para integrar uma empresa sólida e em crescimento
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 mb-12">
          {positions.map((position, index) => (
            <article
              key={index}
              className={[
                "group relative overflow-hidden",
                "rounded-2xl bg-white",
                "border border-gray-100",
                "shadow-sm",
                "p-7 sm:p-8",
                "transition-all duration-300",
                "hover:-translate-y-0.5 hover:shadow-md",
              ].join(" ")}
            >
              {/* Accent line */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0B4F8A] to-[#F5A623] opacity-0 group-hover:opacity-100 transition" />

              {/* Icon */}
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B4F8A] shadow-sm">
                  <Briefcase size={22} className="text-white" />
                </div>

                <span className="text-[11px] font-extrabold uppercase tracking-wide text-gray-400">
                  Vaga
                </span>
              </div>

              <h3 className="mt-5 text-xl font-extrabold tracking-tight text-[#1E1E1E]">
                {position.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {position.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-gray-600">
                    <CheckCircle
                      size={18}
                      className="text-[#F5A623] mt-0.5 flex-shrink-0"
                    />
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>

              {/* Micro CTA */}
              <button
                type="button"
                onClick={onContactClick}
                className={[
                  "mt-6 inline-flex items-center gap-2",
                  "text-sm font-semibold text-[#0B4F8A]",
                  "opacity-0 translate-x-2",
                  "group-hover:opacity-100 group-hover:translate-x-0",
                  "transition-all duration-300",
                ].join(" ")}
              >
                Candidatar <ArrowUpRight size={16} />
              </button>

              {/* subtle glow */}
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-[#0B4F8A]/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={[
            "relative overflow-hidden rounded-3xl",
            "border border-gray-100",
            "bg-gradient-to-br from-[#0B4F8A] via-[#0B4F8A] to-[#08355d]",
            "p-8 sm:p-10 lg:p-12",
            "text-white",
          ].join(" ")}
        >
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-[#F5A623]/20 blur-3xl" />

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-sm mb-6">
              <TrendingUp size={28} className="text-[#F5A623]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Evolução Profissional e Estabilidade
            </h3>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              Oferecemos formação contínua, ambiente de trabalho profissional e oportunidades de
              crescimento numa empresa com mais de 25 anos de experiência.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onContactClick}
                className={[
                  "inline-flex items-center justify-center gap-2",
                  "rounded-2xl px-7 py-3.5",
                  "bg-[#F5A623] hover:bg-[#e09615]",
                  "text-white font-extrabold",
                  "shadow-lg shadow-black/25",
                  "transition-all",
                  "w-full sm:w-auto",
                ].join(" ")}
              >
                Candidate-se Agora <ArrowUpRight size={18} />
              </button>

              <a
                href="#contact"
                className={[
                  "inline-flex items-center justify-center",
                  "rounded-2xl px-7 py-3.5",
                  "border border-white/20 bg-white/10 hover:bg-white/15",
                  "text-white font-semibold",
                  "backdrop-blur-md transition-all",
                  "w-full sm:w-auto",
                ].join(" ")}
              >
                Falar com a equipa
              </a>
            </div>

            <p className="mt-5 text-xs text-white/60">
              Resposta rápida. Tratamento profissional e confidencial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
