import { Menu, X, Phone } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import logo from "../assets/logo-diametro.png";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo(
    () => [
      { id: "home", label: "Início" },
      { id: "services", label: "Serviços" },
      { id: "about", label: "A Empresa" },
      { id: "projects", label: "Obras" },
      { id: "recruitment", label: "Recrutamento" },
      { id: "contact", label: "Contacto" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-[0_14px_40px_-28px_rgba(0,0,0,0.35)]"
          : "bg-white border-b border-transparent",
      ].join(" ")}
      style={{
        paddingTop: "env(safe-area-inset-top)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* altura responsiva */}
        <div className="h-[72px] lg:h-[88px] flex items-center justify-between">
          {/* Brand */}
          <button
            onClick={() => handleNavigate("home")}
            className="flex items-center"
            aria-label="Ir para o início"
          >
            <div className="h-[44px] lg:h-[56px] w-[170px] lg:w-[210px] flex items-center">
              <img
                src={logo}
                alt="Diâmetro"
                draggable={false}
                className="h-full w-full object-contain select-none"
              />
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={[
                    "relative px-4 py-2 rounded-full text-[13px] font-semibold transition",
                    active
                      ? "text-[#0B4F8A] bg-[#0B4F8A]/6"
                      : "text-gray-700 hover:text-[#0B4F8A] hover:bg-gray-50",
                  ].join(" ")}
                >
                  {item.label}
                  <span
                    className={[
                      "absolute left-4 right-4 -bottom-1 h-[2px] rounded-full transition-all duration-300",
                      active ? "bg-[#F5A623]" : "bg-transparent",
                    ].join(" ")}
                  />
                </button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Mobile: botão ícone */}
            <a
              href="tel:+351000000000"
              className={[
                "md:hidden inline-flex items-center justify-center",
                "h-12 w-12 rounded-2xl",
                "bg-[#F5A623] text-white",
                "shadow-md shadow-[#F5A623]/25 hover:brightness-110 transition",
              ].join(" ")}
              aria-label="Contactar"
            >
              <Phone size={18} />
            </a>

            {/* Tablet/Desktop: botão completo */}
            <a
              href="tel:+351000000000"
              className={[
                "hidden md:inline-flex items-center gap-2",
                "rounded-2xl bg-[#F5A623] text-white px-5 py-3",
                "text-sm font-extrabold",
                "shadow-md shadow-[#F5A623]/25 hover:brightness-110 transition",
              ].join(" ")}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/10">
                <Phone size={18} />
              </span>
              <span>Contactar</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden inline-flex items-center justify-center h-12 w-12 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 transition"
              aria-label="Abrir menu"
            >
              <Menu size={22} className="text-gray-800" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <button
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px]"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fechar menu"
          />

          <div
            className="fixed right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl border-l border-gray-200"
            style={{
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            <div className="h-[72px] px-4 flex items-center justify-between border-b border-gray-200">
              <button
                onClick={() => handleNavigate("home")}
                className="flex items-center"
                aria-label="Ir para o início"
              >
                <div className="h-[44px] w-[170px] flex items-center">
                  <img
                    src={logo}
                    alt="Diâmetro"
                    draggable={false}
                    className="h-full w-full object-contain select-none"
                  />
                </div>
              </button>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center h-12 w-12 rounded-2xl border border-gray-200 hover:bg-gray-50 transition"
                aria-label="Fechar menu"
              >
                <X size={22} className="text-gray-800" />
              </button>
            </div>

            <div className="p-4">
              <nav className="space-y-2">
                {navItems.map((item) => {
                  const active = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigate(item.id)}
                      className={[
                        "w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-[15px] font-extrabold transition",
                        active
                          ? "bg-[#0B4F8A] text-white"
                          : "text-gray-800 hover:bg-gray-50",
                      ].join(" ")}
                    >
                      <span>{item.label}</span>
                      <span
                        className={[
                          "h-2 w-2 rounded-full",
                          active ? "bg-[#F5A623]" : "bg-gray-300",
                        ].join(" ")}
                      />
                    </button>
                  );
                })}
              </nav>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <a
                  href="tel:+351000000000"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#F5A623] text-white px-5 py-3.5 text-[15px] font-extrabold shadow-md shadow-[#F5A623]/25 hover:brightness-110 transition"
                >
                  <Phone size={18} />
                  <span>Contactar</span>
                </a>

                <p className="mt-2 text-xs text-gray-500 text-center">
                  Resposta rápida por telefone em horário comercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
