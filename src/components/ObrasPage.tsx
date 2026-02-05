import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  X,
  Search,
  MapPin,
  Calendar,
  BadgeCheck,
  Construction,
  Image as ImageIcon,
} from "lucide-react";

// ✅ Fotos reais (pasta: src/assets/obras/)
// King’s (principal sem número + 2..10)
import KingsCollegeSchoolCascais from "../assets/obras/kings-college-school-cascais.jpg";
import Kings2 from "../assets/obras/kings-college-school-cascais-2.jpg";
import Kings3 from "../assets/obras/kings-college-school-cascais-3.jpg";
import Kings4 from "../assets/obras/kings-college-school-cascais-4.jpg";
import Kings5 from "../assets/obras/kings-college-school-cascais-5.jpg";
import Kings6 from "../assets/obras/kings-college-school-cascais-6.jpg";
import Kings7 from "../assets/obras/kings-college-school-cascais-7.jpg";
import Kings8 from "../assets/obras/kings-college-school-cascais-8.jpg";
import Kings9 from "../assets/obras/kings-college-school-cascais-9.jpg";
import Kings10 from "../assets/obras/kings-college-school-cascais-10.jpg";

// Outras obras
import Garridas1867 from "../assets/obras/garridas-1867.jpg";
import BayviewCascaisBay from "../assets/obras/bayview-cascais-bay.jpg";
import BayviewExtra1 from "../assets/obras/bayview-cascais-bay-1.jpeg";
import ForumMunicipalOeiras from "../assets/obras/forum-municipal-oeiras.jpg";
import SandWoods from "../assets/obras/sandwoods.jpg";
import Vivva1080Setubal from "../assets/obras/1080-vivva-setubal.jpg";

type ObraStatus = "Em execução" | "Concluída";
type ObraCategoria =
  | "Construção Civil"
  | "Infraestruturas"
  | "Técnico"
  | "Comercial"
  | "Serviços"
  | "Qualidade";

type Obra = {
  id: string;
  titulo: string;
  status: ObraStatus;
  categoria: ObraCategoria;
  local: string;
  periodo: string;
  resumo: string;
  servicos: string[];
  imagens: string[];
  tipo?: string;
  notas?: string[];
};

// ✅ Stats “marketing”
const STATS_OVERRIDE = {
  totalLabel: "30+",
};

// ✅ As 6 obras que vão aparecer por enquanto
const OBRAS: Obra[] = [
  {
    id: "obra-kings-college-school-cascais",
    titulo: "King’s College School, Cascais",
    status: "Concluída",
    categoria: "Construção Civil",
    local: "Cascais",
    periodo: "2025",
    resumo:
      "Intervenções hidráulicas em contexto escolar: instalação e organização de redes, validações técnicas e entrega conforme boas práticas.",
    servicos: [
      "Redes de águas",
      "Redes de esgotos",
      "Montagens técnicas",
      "Testes e verificação",
      "Apoio a frentes de obra",
    ],
    imagens: [
      KingsCollegeSchoolCascais,
      Kings2,
      Kings3,
      Kings4,
      Kings5,
      Kings6,
      Kings7,
      Kings8,
      Kings9,
      Kings10,
    ],
    tipo: "Educação (escola)",
    notas: [
      "Execução por zonas e fases, com coordenação em obra",
      "Organização e identificação de linhas para manutenção futura",
      "Ensaios e validações finais antes de entrega",
    ],
  },
  {
    id: "obra-garridas-1867",
    titulo: "Garridas 1867",
    status: "Em execução",
    categoria: "Infraestruturas",
    local: "Lisboa",
    periodo: "2026",
    resumo:
      "Trabalhos de canalização/hidráulica em obra ativa, com acompanhamento por frentes e foco em prazos, qualidade e segurança.",
    servicos: [
      "Redes interiores",
      "Distribuição",
      "Substituições",
      "Correções técnicas",
      "Acompanhamento de obra",
    ],
    imagens: [Garridas1867],
    tipo: "Obra ativa",
    notas: [
      "Acompanhamento contínuo e registo de progresso",
      "Execução com controlo de qualidade por etapa",
      "Preparação para testes e validações finais",
    ],
  },
  {
    id: "obra-bayview-cascais-bay",
    titulo: "Bayview Cascais Bay",
    status: "Em execução",
    categoria: "Construção Civil",
    local: "Cascais",
    periodo: "2026",
    resumo:
      "Execução de redes hidráulicas em ambiente residencial, com montagem faseada e verificação de estanqueidade.",
    servicos: [
      "Prumadas",
      "Ramais",
      "Montagem",
      "Testes",
      "Ajustes e acabamentos",
    ],
    imagens: [BayviewCascaisBay, BayviewExtra1],
    tipo: "Residencial",
    notas: [
      "Execução por fases para compatibilizar com outras especialidades",
      "Ensaios de estanqueidade e validações em campo",
      "Organização técnica para facilitar manutenção",
    ],
  },
  {
    id: "obra-forum-municipal-oeiras",
    titulo: "Fórum Municipal de Oeiras",
    status: "Concluída",
    categoria: "Técnico",
    local: "Oeiras",
    periodo: "2025",
    resumo:
      "Intervenções técnicas em redes e pontos hidráulicos, com foco em organização, segurança e conformidade na entrega.",
    servicos: ["Redes interiores", "Adequações", "Verificação", "Entrega técnica"],
    imagens: [ForumMunicipalOeiras],
    tipo: "Equipamento municipal",
    notas: [
      "Trabalho técnico com atenção a normas e boas práticas",
      "Verificações antes de entrega e documentação de apoio",
      "Intervenções orientadas a operação e manutenção",
    ],
  },
  {
    id: "obra-sandwoods",
    titulo: "SandWoods",
    status: "Concluída",
    categoria: "Construção Civil",
    local: "Cascais",
    periodo: "2025",
    resumo:
      "Execução de redes hidráulicas e acabamentos técnicos, garantindo conformidade e qualidade final.",
    servicos: ["Águas", "Esgotos", "Montagem", "Testes finais"],
    imagens: [SandWoods],
    tipo: "Residencial",
    notas: [
      "Foco em qualidade de montagem e acabamento",
      "Validações finais e preparação para entrega",
      "Compatibilização com outras equipas em obra",
    ],
  },
  {
    id: "obra-1080-vivva-setubal",
    titulo: "1080 Vivva Setúbal",
    status: "Em execução",
    categoria: "Infraestruturas",
    local: "Setúbal",
    periodo: "2026",
    resumo:
      "Execução e acompanhamento de redes hidráulicas em obra ativa, com coordenação em campo e validações por etapa.",
    servicos: ["Águas", "Esgotos", "Distribuição", "Acompanhamento de obra"],
    imagens: [Vivva1080Setubal],
    tipo: "Obra ativa",
    notas: [
      "Execução por frentes e planeamento semanal",
      "Controlo de qualidade por etapa",
      "Preparação para testes e comissionamento",
    ],
  },
];

const CATEGORIAS: Array<ObraCategoria | "Todas"> = [
  "Todas",
  "Construção Civil",
  "Infraestruturas",
  "Técnico",
  "Comercial",
  "Serviços",
  "Qualidade",
];

const STATUS: Array<ObraStatus | "Todos"> = ["Todos", "Em execução", "Concluída"];

function classNames(...xs: Array<string | false | undefined | null>) {
  return xs.filter(Boolean).join(" ");
}

export default function ObrasPage() {
  const navigate = useNavigate();

  const [q, setQ] = useState("");
  const [status, setStatus] = useState<ObraStatus | "Todos">("Todos");
  const [categoria, setCategoria] = useState<ObraCategoria | "Todas">("Todas");
  const [selected, setSelected] = useState<Obra | null>(null);
  const [activeImg, setActiveImg] = useState(0);

  const stats = useMemo(() => {
    return { totalLabel: STATS_OVERRIDE.totalLabel };
  }, []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return OBRAS.filter((o) => {
      if (status !== "Todos" && o.status !== status) return false;
      if (categoria !== "Todas" && o.categoria !== categoria) return false;

      if (!query) return true;

      const hay = [
        o.titulo,
        o.status,
        o.categoria,
        o.local,
        o.periodo,
        o.resumo,
        o.tipo ?? "",
        ...(o.servicos ?? []),
        ...(o.notas ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return hay.includes(query);
    });
  }, [q, status, categoria]);

  const openModal = (obra: Obra) => {
    setSelected(obra);
    setActiveImg(0);
    document.body.style.overflow = "hidden";
    // garante abertura "limpa" no mobile
    window.scrollTo({ top: 0, behavior: "instant" as any });
  };

  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = "";
  };

  const goToContact = () => {
    const tryScroll = () => {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
      return false;
    };

    if (tryScroll()) return;

    navigate("/");

    let tries = 0;
    const interval = setInterval(() => {
      tries += 1;
      if (tryScroll() || tries >= 20) clearInterval(interval);
    }, 80);
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B4F8A]/8 via-white to-white" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#F5A623]/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#0B4F8A]/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10">
          <div className="flex items-start justify-between gap-6 flex-col lg:flex-row">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0B4F8A]/10 text-[#0B4F8A] px-4 py-2 text-xs font-extrabold">
                <Construction size={16} />
                Portfólio de obras e serviços realizados
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1E1E1E]">
                Obras e Projetos
              </h1>

              <p className="mt-3 text-gray-600 text-base sm:text-lg leading-relaxed">
                Aqui encontra uma seleção das nossas intervenções. Organizamos por
                tipo de serviço, estado e localização para facilitar a consulta.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#lista"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#0B4F8A] px-6 py-3 text-sm font-extrabold text-white shadow-md shadow-[#0B4F8A]/20 hover:brightness-110 transition"
                >
                  Ver lista de obras
                </a>

                <button
                  type="button"
                  onClick={goToContact}
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-extrabold text-[#0B4F8A] border border-[#0B4F8A]/15 hover:bg-[#0B4F8A]/5 transition"
                >
                  Pedir orçamento
                </button>
              </div>

              <p className="mt-4 text-xs text-gray-500">
                Nota: algumas obras podem ter restrições de divulgação de fotos/cliente.
              </p>
            </div>

            {/* Stats (só Total 30+) */}
            <div className="w-full lg:w-[420px]">
              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                <div className="text-xs font-extrabold text-gray-500 uppercase tracking-wide">
                  Total
                </div>
                <div className="mt-2 text-4xl font-extrabold text-[#1E1E1E]">
                  {stats.totalLabel}
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Obras e intervenções realizadas (seleção parcial apresentada abaixo).
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section id="lista" className="bg-gray-50 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-4 sm:p-6">
            <div className="flex items-start justify-between gap-4 flex-col lg:flex-row">
              <div className="w-full lg:max-w-md">
                <label className="text-xs font-extrabold text-gray-600 uppercase tracking-wide">
                  Pesquisa
                </label>
                <div className="mt-2 relative">
                  <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Ex: Cascais, escola, reabilitação, esgotos..."
                    className="w-full rounded-2xl border border-gray-200 bg-white pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0B4F8A]/25 focus:border-[#0B4F8A]/30"
                  />
                </div>
              </div>

              <div className="w-full grid sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:max-w-xl">
                <div>
                  <label className="text-xs font-extrabold text-gray-600 uppercase tracking-wide">
                    Estado
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0B4F8A]/25 focus:border-[#0B4F8A]/30"
                  >
                    {STATUS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-extrabold text-gray-600 uppercase tracking-wide">
                    Categoria
                  </label>
                  <select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value as any)}
                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0B4F8A]/25 focus:border-[#0B4F8A]/30"
                  >
                    {CATEGORIAS.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="w-full lg:w-auto">
                <div className="text-xs font-extrabold text-gray-600 uppercase tracking-wide">
                  Resultados
                </div>
                <div className="mt-2 inline-flex items-center gap-2 rounded-2xl bg-[#0B4F8A]/8 text-[#0B4F8A] px-4 py-3 text-sm font-extrabold">
                  <BadgeCheck size={18} />
                  {filtered.length} obra(s)
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-6 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((obra) => (
              <button
                key={obra.id}
                onClick={() => openModal(obra)}
                className={classNames(
                  "group text-left",
                  "rounded-2xl overflow-hidden bg-white",
                  "border border-gray-100 shadow-sm",
                  "transition-all duration-300",
                  "hover:-translate-y-0.5 hover:shadow-md"
                )}
              >
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img
                    src={obra.imagens[0]}
                    alt={obra.titulo}
                    className={classNames(
                      "h-full w-full object-cover",
                      "transition-transform duration-500 ease-out",
                      "group-hover:scale-[1.06]"
                    )}
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/0" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md">
                      {obra.categoria}
                    </span>
                    <span
                      className={classNames(
                        "rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase ring-1 backdrop-blur-md",
                        obra.status === "Concluída"
                          ? "bg-emerald-500/15 text-emerald-50 ring-emerald-300/30"
                          : "bg-amber-500/15 text-amber-50 ring-amber-300/30"
                      )}
                    >
                      {obra.status}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#0B4F8A] to-[#F5A623]" />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-[16px] sm:text-lg font-extrabold text-[#1E1E1E] tracking-tight">
                    {obra.titulo}
                  </h3>

                  <p className="mt-2 text-[13px] sm:text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {obra.resumo}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={14} />
                      {obra.local}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Calendar size={14} />
                      {obra.periodo}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {obra.servicos.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-[11px] font-semibold"
                      >
                        {s}
                      </span>
                    ))}
                    {obra.servicos.length > 3 && (
                      <span className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-[11px] font-semibold">
                        +{obra.servicos.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* CTA bottom */}
          <div className="mt-10 rounded-2xl bg-[#0B4F8A] text-white p-6 sm:p-8 overflow-hidden relative">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  Quer um orçamento rápido para a sua obra?
                </h3>
                <p className="mt-2 text-white/80 text-sm sm:text-base">
                  Descreva o serviço e a localização. Respondemos com proposta e prazos.
                </p>
              </div>

              <div className="flex gap-3 w-full lg:w-auto">
                <button
                  type="button"
                  onClick={goToContact}
                  className="w-full lg:w-auto inline-flex items-center justify-center rounded-2xl bg-white text-[#0B4F8A] px-6 py-3 text-sm font-extrabold hover:brightness-105 transition"
                >
                  Pedir contacto
                </button>

                <Link
                  to="/"
                  className="w-full lg:w-auto inline-flex items-center justify-center rounded-2xl bg-white/10 text-white px-6 py-3 text-sm font-extrabold ring-1 ring-white/15 hover:bg-white/15 transition"
                >
                  Voltar ao site
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Modal (corrigido para mobile) */}
      {selected && (
        <div className="fixed inset-0 z-[999]">
          <button
            className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
            onClick={closeModal}
            aria-label="Fechar"
          />

          <div className="absolute inset-x-0 top-4 sm:top-10 mx-auto w-[94%] max-w-5xl">
            <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-2xl max-h-[92vh] flex flex-col">
              {/* Header sticky */}
              <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
                <div className="flex items-start justify-between gap-3 p-4 sm:p-6">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase bg-[#0B4F8A]/10 text-[#0B4F8A]">
                        {selected.categoria}
                      </span>

                      <span
                        className={classNames(
                          "rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase",
                          selected.status === "Concluída"
                            ? "bg-emerald-500/10 text-emerald-700"
                            : "bg-amber-500/10 text-amber-800"
                        )}
                      >
                        {selected.status}
                      </span>

                      <span className="rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase bg-gray-100 text-gray-700">
                        {selected.local}
                      </span>

                      <span className="rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase bg-gray-100 text-gray-700">
                        {selected.periodo}
                      </span>
                    </div>

                    <h3 className="mt-2 text-base sm:text-2xl font-extrabold tracking-tight text-[#1E1E1E] leading-tight">
                      {selected.titulo}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {selected.resumo}
                    </p>
                  </div>

                  <button
                    onClick={closeModal}
                    className="shrink-0 inline-flex items-center justify-center h-11 w-11 rounded-2xl border border-gray-200 hover:bg-gray-50 transition"
                    aria-label="Fechar"
                  >
                    <X size={20} className="text-gray-800" />
                  </button>
                </div>
              </div>

              {/* Body com scroll interno */}
              <div className="overflow-y-auto">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Gallery */}
                  <div className="lg:col-span-3 bg-black/5">
                    <div className="relative">
                      <div className="aspect-[16/10] w-full bg-black/10">
                        {selected.imagens[activeImg] ? (
                          <img
                            src={selected.imagens[activeImg]}
                            alt={`Imagem da obra ${activeImg + 1}`}
                            className="h-full w-full object-cover"
                            draggable={false}
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center text-gray-500">
                            <ImageIcon size={20} />
                          </div>
                        )}
                      </div>

                      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#0B4F8A] to-[#F5A623]" />
                    </div>

                    <div className="p-4 sm:p-6">
                      <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2">
                        {selected.imagens.map((img, idx) => (
                          <button
                            key={`${selected.id}-thumb-${idx}`}
                            onClick={() => setActiveImg(idx)}
                            className={classNames(
                              "shrink-0 rounded-xl overflow-hidden border transition",
                              idx === activeImg
                                ? "border-[#0B4F8A] ring-2 ring-[#0B4F8A]/20"
                                : "border-gray-200 hover:border-gray-300"
                            )}
                            aria-label={`Ver imagem ${idx + 1}`}
                          >
                            <img
                              src={img}
                              alt={`Thumb ${idx + 1}`}
                              className="h-14 w-20 sm:h-16 sm:w-24 object-cover"
                              draggable={false}
                            />
                          </button>
                        ))}
                      </div>
                      <p className="mt-2 text-xs text-gray-500">
                        Algumas imagens podem estar limitadas por autorização de divulgação.
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-2 p-4 sm:p-6">
                    <div className="rounded-2xl bg-gray-50 border border-gray-200 p-4">
                      <div className="text-xs font-extrabold text-gray-600 uppercase tracking-wide">
                        Serviços incluídos
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {selected.servicos.map((s) => (
                          <span
                            key={`${selected.id}-${s}`}
                            className="rounded-full bg-white border border-gray-200 text-gray-800 px-3 py-1 text-[12px] font-semibold"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      {selected.tipo && (
                        <div className="mt-4 text-sm text-gray-700">
                          <span className="font-extrabold text-gray-900">Tipo:</span>{" "}
                          {selected.tipo}
                        </div>
                      )}
                    </div>

                    {selected.notas && selected.notas.length > 0 && (
                      <div className="mt-4 rounded-2xl border border-gray-200 p-4">
                        <div className="text-xs font-extrabold text-gray-600 uppercase tracking-wide">
                          Destaques
                        </div>
                        <ul className="mt-3 space-y-2 text-sm text-gray-700">
                          {selected.notas.map((n, i) => (
                            <li key={`${selected.id}-nota-${i}`}>• {n}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => {
                          closeModal();
                          goToContact();
                        }}
                        className="w-full inline-flex items-center justify-center rounded-2xl bg-[#F5A623] text-white px-5 py-3 text-sm font-extrabold shadow-md shadow-[#F5A623]/25 hover:brightness-110 transition"
                      >
                        Pedir contacto sobre esta obra
                      </button>

                      <p className="mt-2 text-xs text-gray-500 text-center">
                        Se necessário, enviamos referências e detalhes mediante pedido.
                      </p>
                    </div>

                    <div className="h-4 sm:h-0" />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-4 sm:h-10" />
          </div>
        </div>
      )}
    </main>
  );
}
