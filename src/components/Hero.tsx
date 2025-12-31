import { ArrowRight, ChevronDown } from "lucide-react";
import { useCallback } from "react";
import hero1 from "../assets/hero/hero-1.jpg";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const handleSeeServices = useCallback(() => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section
      id="home"
      className="relative text-white pt-[76px] lg:pt-[92px]"
      style={{
        paddingTop: `calc(env(safe-area-inset-top) + 76px)`,
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={hero1}
          alt="Trabalhos de canalização e infraestruturas"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />

        {/* Overlay base */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Desktop: scrim lateral. Mobile: scrim vertical para leitura */}
        <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-black/75 lg:via-black/45 lg:to-transparent bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

        {/* Vinheta suave */}
        <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.45)]" />
      </div>

      {/* Conteúdo */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* altura mais controlada no mobile */}
        <div className="py-14 sm:py-18 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-[34px] leading-[1.06] sm:text-5xl lg:text-6xl font-black tracking-tight">
              Canalização profissional para{" "}
              <span className="text-[#F5A623]">obras e empresas</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-[15px] sm:text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl">
              Equipas qualificadas, precisão técnica e cumprimento rigoroso de
              prazos. Especialistas em infraestruturas hidráulicas para o setor
              da construção.
            </p>

            {/* CTAs: coluna no mobile, linha no desktop */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none">
              <button
                onClick={onContactClick}
                className={[
                  "inline-flex items-center justify-center gap-3",
                  "rounded-2xl px-7 py-3.5",
                  "bg-[#0B4F8A] hover:bg-[#094070]",
                  "text-white font-extrabold",
                  "shadow-lg shadow-black/30",
                  "transition-all",
                  "w-full sm:w-auto",
                ].join(" ")}
              >
                Solicitar contacto
                <ArrowRight size={20} />
              </button>

              <button
                type="button"
                onClick={handleSeeServices}
                className={[
                  "inline-flex items-center justify-center gap-2",
                  "rounded-2xl px-6 py-3.5",
                  "border border-white/20 bg-white/5 hover:bg-white/10",
                  "text-white/90 font-bold",
                  "backdrop-blur-sm",
                  "transition-all",
                  "w-full sm:w-auto",
                ].join(" ")}
              >
                Ver serviços
                <ChevronDown size={18} />
              </button>
            </div>

            <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs text-white/55">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F5A623]" />
              <span>Desça para ver os serviços</span>
            </div>
          </div>
        </div>
      </div>

      {/* Base branca */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 sm:h-28 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  );
}
