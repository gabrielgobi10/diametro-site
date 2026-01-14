import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  X,
  Search,
  MapPin,
  Calendar,
  BadgeCheck,
  Construction,
  Image as ImageIcon,
} from "lucide-react";

// Reaproveita imagens que você já tem (depois você troca por fotos reais)
import CanalizacaoEmEdificios from "../assets/canalizacao-edificios.jpg";
import RedesInteriores from "../assets/redes-interiores.jpg";
import SalasTecnicas from "../assets/salas-tecnicas.jpg";
import InstalacoesEmpresas from "../assets/instalacoes-empresas.jpg";
import ManutencaoReparacoes from "../assets/manutencao-reparacoes.jpg";
import EnsaiosConformidade from "../assets/ensaios-conformidade.png";

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
  local: string; // cidade / zona
  periodo: string; // "2025" ou "Jan 2026" etc.
  resumo: string;
  servicos: string[];
  // fotos (urls locais/imports por enquanto)
  imagens: string[];
  // opcional: cliente (use só se tiver autorização)
  cliente?: string;
  // opcional: tipo de obra / segmento
  tipo?: string;
};

const OBRAS: Obra[] = [
  {
    id: "obra-001",
    titulo: "Canalização técnica em edifício residencial",
    status: "Concluída",
    categoria: "Construção Civil",
    local: "Lisboa",
    periodo: "2025",
    resumo:
      "Execução de prumadas e ligações técnicas com acabamento e testes finais.",
    servicos: ["Prumadas", "Ramais", "Ligações", "Testes finais"],
    imagens: [CanalizacaoEmEdificios, SalasTecnicas, EnsaiosConformidade],
    tipo: "Residencial",
  },
  {
    id: "obra-002",
    titulo: "Redes interiores (águas e esgotos) – reabilitação",
    status: "Em execução",
    categoria: "Infraestruturas",
    local: "Cascais",
    periodo: "Jan 2026",
    resumo:
      "Substituição de redes internas, ligação de pontos e distribuição com conformidade.",
    servicos: ["Água", "Esgotos", "Distribuição", "Substituições"],
    imagens: [RedesInteriores, ManutencaoReparacoes, EnsaiosConformidade],
    tipo: "Reabilitação",
  },
  {
    id: "obra-003",
    titulo: "Salas técnicas e coletoras – instalação e montagem",
    status: "Concluída",
    categoria: "Técnico",
    local: "Porto",
    periodo: "2025",
    resumo:
      "Montagem de tubagens, válvulas e coletoras em salas técnicas com organização e segurança.",
    servicos: ["Coletoras", "Válvulas", "Tubagens", "Organização técnica"],
    imagens: [SalasTecnicas, InstalacoesEmpresas, EnsaiosConformidade],
    tipo: "Técnico",
  },
  {
    id: "obra-004",
    titulo: "Instalações para espaço comercial",
    status: "Concluída",
    categoria: "Comercial",
    local: "Coimbra",
    periodo: "2025",
    resumo:
      "Canalização para ambiente empresarial com planeamento, prazos e conformidade.",
    servicos: ["Instalação", "Adequações", "Conformidade", "Entrega técnica"],
    imagens: [InstalacoesEmpresas, ManutencaoReparacoes, EnsaiosConformidade],
    tipo: "Comercial",
  },
  {
    id: "obra-005",
    titulo: "Manutenção preventiva e reparações programadas",
    status: "Em execução",
    categoria: "Serviços",
    local: "Lisboa",
    periodo: "2026",
    resumo:
      "Intervenções recorrentes, correções e substituições com registo e acompanhamento.",
    servicos: ["Manutenção", "Correções", "Substituições", "Assistência"],
    imagens: [ManutencaoReparacoes, RedesInteriores, EnsaiosConformidade],
    tipo: "Serviços",
  },
  {
    id: "obra-006",
    titulo: "Ensaios e conformidade – testes e verificação",
    status: "Concluída",
    categoria: "Qualidade",
    local: "Portugal",
    periodo: "2025",
    resumo:
      "Testes, verificação e entrega técnica conforme normas e boas práticas.",
    servicos: ["Testes", "Verificação", "Relatórios", "Conformidade"],
    imagens: [EnsaiosConformidade, SalasTecnicas, CanalizacaoEmEdificios],
    tipo: "Qualidade",
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
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<ObraStatus | "Todos">("Todos");
  const [categoria, setCategoria] = useState<ObraCategoria | "Todas">("Todas");
  const [selected, setSelected] = useState<Obra | null>(null);
  const [activeImg, setActiveImg] = useState(0);

  const stats = useMemo(() => {
    const total = OBRAS.length;
    const concluidas = OBRAS.filter((o) => o.status === "Concluída").length;
    const execucao = OBRAS.filter((o) => o.status === "Em execução").length;
    const cidades = new Set(OBRAS.map((o) => o.local)).size;
    return { total, concluidas, execucao, cidades };
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
        o.cliente ?? "",
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
  };

  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = "";
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

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-extrabold text-[#0B4F8A] border border-[#0B4F8A]/15 hover:bg-[#0B4F8A]/5 transition"
                >
                  Pedir orçamento
                </a>
              </div>

              <p className="mt-4 text-xs text-gray-500">
                Nota: algumas obras podem ter restrições de divulgação de fotos/cliente.
              </p>
            </div>

            {/* Stats */}
            <div className="w-full lg:w-[420px] grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5">
                <div className="text-xs font-extrabold text-gray-500 uppercase tracking-wide">
                  Total
                </div>
                <div className="mt-1 text-2xl font-extrabold text-[#1E1E1E]">
                  {stats.total}
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5">
                <div className="text-xs font-extrabold text-gray-500 uppercase tracking-wide">
                  Concluídas
                </div>
                <div className="mt-1 text-2xl font-extrabold text-[#1E1E1E]">
                  {stats.concluidas}
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5">
                <div className="text-xs font-extrabold text-gray-500 uppercase tracking-wide">
                  Em execução
                </div>
                <div className="mt-1 text-2xl font-extrabold text-[#1E1E1E]">
                  {stats.execucao}
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5">
                <div className="text-xs font-extrabold text-gray-500 uppercase tracking-wide">
                  Localizações
                </div>
                <div className="mt-1 text-2xl font-extrabold text-[#1E1E1E]">
                  {stats.cidades}
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
                    placeholder="Ex: Lisboa, reabilitação, esgotos, coletoras..."
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

          {/* Empty */}
          {filtered.length === 0 && (
            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 text-center">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 border border-gray-200">
                <Search size={20} className="text-gray-500" />
              </div>
              <h4 className="mt-4 text-lg font-extrabold text-[#1E1E1E]">
                Nenhuma obra encontrada
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Ajuste os filtros ou tente outra pesquisa.
              </p>
            </div>
          )}

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
                <a
                  href="#contact"
                  className="w-full lg:w-auto inline-flex items-center justify-center rounded-2xl bg-white text-[#0B4F8A] px-6 py-3 text-sm font-extrabold hover:brightness-105 transition"
                >
                  Pedir contacto
                </a>

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

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-[999]">
          <button
            className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
            onClick={closeModal}
            aria-label="Fechar"
          />

          <div className="absolute inset-x-0 top-10 sm:top-14 mx-auto w-[94%] max-w-5xl">
            <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-2xl">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 p-4 sm:p-6 border-b border-gray-200">
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

                  <h3 className="mt-2 text-lg sm:text-2xl font-extrabold tracking-tight text-[#1E1E1E] line-clamp-2">
                    {selected.titulo}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
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

              {/* Body */}
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
                    <div className="flex items-center gap-3 overflow-x-auto pb-2">
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
                            className="h-16 w-24 object-cover"
                            draggable={false}
                          />
                        </button>
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                      Sugestão: substitua estas imagens por fotos reais desta obra (quando permitido).
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

                    {selected.cliente && (
                      <div className="mt-2 text-sm text-gray-700">
                        <span className="font-extrabold text-gray-900">Cliente:</span>{" "}
                        {selected.cliente}
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <a
                      href="#contact"
                      onClick={closeModal}
                      className="w-full inline-flex items-center justify-center rounded-2xl bg-[#F5A623] text-white px-5 py-3 text-sm font-extrabold shadow-md shadow-[#F5A623]/25 hover:brightness-110 transition"
                    >
                      Pedir contacto sobre esta obra
                    </a>

                    <p className="mt-2 text-xs text-gray-500 text-center">
                      Se quiser, enviamos referências e detalhes mediante pedido.
                    </p>
                  </div>

                  <div className="mt-6 rounded-2xl border border-gray-200 p-4">
                    <div className="text-xs font-extrabold text-gray-600 uppercase tracking-wide">
                      Organização recomendada
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-gray-700">
                      <li>• Estado: em execução / concluída</li>
                      <li>• Localização: cidade / zona</li>
                      <li>• Categoria: tipo de serviço</li>
                      <li>• Fotos: apenas se autorizado</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Safe bottom spacing */}
            <div className="h-10" />
          </div>
        </div>
      )}
    </main>
  );
}
