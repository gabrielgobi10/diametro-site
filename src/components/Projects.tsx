import CanalizacaoEmEdificios from "../assets/canalizacao-edificios.jpg";
import RedesInteriores from "../assets/redes-interiores.jpg";
import SalasTecnicas from "../assets/salas-tecnicas.jpg";
import InstalacoesEmpresas from "../assets/instalacoes-empresas.jpg";
import ManutencaoReparacoes from "../assets/manutencao-reparacoes.jpg";
import EnsaiosConformidade from "../assets/ensaios-conformidade.png";


const areas = [
  {
    image: CanalizacaoEmEdificios,
    title: "Canalização em Edifícios",
    category: "Construção Civil",
    description:
      "Prumadas, colunas, ramais e ligações técnicas em prédios e condomínios.",
    tags: "Prumadas • Ramais • Ligações",
  },
  {
    image: RedesInteriores,
    title: "Redes Interiores (Águas e Esgotos)",
    category: "Infraestruturas",
    description:
      "Execução e substituição de redes internas, ligação de pontos e distribuição.",
    tags: "Água • Esgotos • Distribuição",
  },
  {
    image: SalasTecnicas,
    title: "Salas Técnicas e Tubagens",
    category: "Técnico",
    description:
      "Montagem de tubagens, coletoras e componentes técnicos em salas técnicas.",
    tags: "Coletoras • Válvulas • Salas técnicas",
  },
  {
    image: InstalacoesEmpresas,
    title: "Instalações para Empresas",
    category: "Comercial",
    description:
      "Canalização para espaços comerciais e instalações em ambiente empresarial.",
    tags: "Comercial • Escritórios • Lojas",
  },
  {
    image: ManutencaoReparacoes,
    title: "Manutenção e Reparações",
    category: "Serviços",
    description:
      "Intervenções técnicas, correções, substituições e manutenção programada.",
    tags: "Correções • Substituições • Assistência",
  },
  {
    image: EnsaiosConformidade,
    title: "Ensaios e Conformidade",
    category: "Qualidade",
    description:
      "Testes, verificação e entrega técnica conforme normas e boas práticas.",
    tags: "Testes • Verificação • Conformidade",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-14 sm:py-18 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-[28px] leading-[1.12] sm:text-4xl font-extrabold tracking-tight text-[#1E1E1E]">
            Áreas de Atuação
          </h2>

          <p className="mt-3 text-[15px] sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Serviços de canalização e instalações técnicas com rigor, qualidade e
            conformidade.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-gray-500">
            Portfólio e referências disponíveis mediante pedido.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((item, index) => (
            <article
              key={index}
              className={[
                "group relative overflow-hidden",
                "rounded-2xl bg-white",
                "border border-gray-100",
                "shadow-sm",
                "transition-all duration-300",
                "hover:-translate-y-0.5 hover:shadow-md",
              ].join(" ")}
            >
              {/* Image */}
              <div className="relative h-52 sm:h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={[
                    "h-full w-full object-cover",
                    "transition-transform duration-500 ease-out",
                    "group-hover:scale-[1.06]",
                  ].join(" ")}
                  loading="lazy"
                  draggable={false}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/0" />
                <div className="absolute inset-0 shadow-[inset_0_-80px_120px_rgba(0,0,0,0.55)]" />

                {/* Category pill */}
                <div className="absolute top-4 left-4">
                  <span
                    className={[
                      "inline-flex items-center",
                      "rounded-full px-3 py-1",
                      "text-[11px] font-extrabold tracking-wide uppercase",
                      "bg-white/10 text-white",
                      "ring-1 ring-white/20",
                      "backdrop-blur-md",
                    ].join(" ")}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Accent line */}
                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#0B4F8A] to-[#F5A623]" />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-[16px] sm:text-lg font-extrabold text-[#1E1E1E] tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-2 text-[13px] sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-gray-500 truncate">
                    {item.tags}
                  </span>

                  <a
                    href="#contact"
                    className="shrink-0 text-xs font-extrabold text-[#0B4F8A] hover:underline"
                  >
                    Pedir contacto
                  </a>
                </div>
              </div>

              {/* subtle glow */}
              <div className="pointer-events-none absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-[#0B4F8A]/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
