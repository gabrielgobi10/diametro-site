import { useCallback } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Dados oficiais
  const COMPANY_PHONE_DISPLAY = "+351 939 555 074";
  const COMPANY_PHONE_TEL = "351939555074"; // tel: (sem +)
  const COMPANY_WA = "351939555074"; // wa.me (sem + e sem espaços)
  const COMPANY_EMAIL = "orcamentos@grupodiametro.pt";

  // Redes sociais
  const COMPANY_LINKEDIN =
    "https://www.linkedin.com/company/grupodiametro/?viewAsMember=true";
  const COMPANY_INSTAGRAM = "https://www.instagram.com/grupodiametro/";

  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = useCallback(
    (section: string) => {
      const targetHash = `#${section}`;

      if (location.pathname !== "/") {
        navigate(`/${targetHash}`);
        return;
      }

      const el = document.getElementById(section);
      if (!el) return;

      const offsetTop = el.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    },
    [location.pathname, navigate]
  );

  return (
    <footer className="bg-[#141414] text-white">
      {/* Top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0B4F8A] via-[#0B4F8A]/60 to-[#F5A623]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Brand / Summary */}
          <div className="lg:col-span-1">
            <div className="text-xl font-extrabold tracking-tight">DIÂMETRO</div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Canalização profissional para obras e empresas. Planeamento técnico,
              conformidade e cumprimento rigoroso de prazos.
            </p>

            {/* CTAs (menos ruído, mais foco) */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => goToSection("contact")}
                className="inline-flex items-center justify-center rounded-xl bg-[#0B4F8A] px-4 py-2.5 text-sm font-semibold text-white hover:brightness-110 transition"
              >
                Solicitar contacto
              </button>

              <a
                href={`https://wa.me/${COMPANY_WA}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                WhatsApp
              </a>

              {/* Redes sociais (apenas aqui, sem duplicar em "Contactos") */}
              <div className="flex items-center gap-2">
                <a
                  href={COMPANY_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Grupo Diâmetro"
                  title="LinkedIn"
                  className="inline-flex items-center justify-center rounded-xl bg-white/5 px-3 py-2.5 text-white hover:bg-white/10 transition ring-1 ring-white/10"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href={COMPANY_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Grupo Diâmetro"
                  title="Instagram"
                  className="inline-flex items-center justify-center rounded-xl bg-white/5 px-3 py-2.5 text-white hover:bg-white/10 transition ring-1 ring-white/10"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-extrabold tracking-wide uppercase text-white/90">
              Navegação
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <button
                  type="button"
                  onClick={() => goToSection("services")}
                  className="hover:text-[#F5A623] transition text-left"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goToSection("projects")}
                  className="hover:text-[#F5A623] transition text-left"
                >
                  Obras
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goToSection("about")}
                  className="hover:text-[#F5A623] transition text-left"
                >
                  A Empresa
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goToSection("recruitment")}
                  className="hover:text-[#F5A623] transition text-left"
                >
                  Recrutamento
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goToSection("contact")}
                  className="hover:text-[#F5A623] transition text-left"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts (somente o essencial) */}
          <div>
            <h3 className="text-sm font-extrabold tracking-wide uppercase text-white/90">
              Contactos
            </h3>

            <ul className="mt-4 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <Phone size={18} />
                </span>
                <div>
                  <div className="text-white/90 font-semibold">Telefone</div>
                  <a
                    href={`tel:${COMPANY_PHONE_TEL}`}
                    className="hover:text-[#F5A623] transition"
                  >
                    {COMPANY_PHONE_DISPLAY}
                  </a>

                  <div className="mt-2">
                    <a
                      href={`https://wa.me/${COMPANY_WA}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/75 hover:text-[#F5A623] transition"
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <Mail size={18} />
                </span>
                <div>
                  <div className="text-white/90 font-semibold">Email</div>
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="hover:text-[#F5A623] transition break-all"
                  >
                    {COMPANY_EMAIL}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <MapPin size={18} />
                </span>
                <div>
                  <div className="text-white/90 font-semibold">Atuação</div>
                  <div>Portugal</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="text-sm font-extrabold tracking-wide uppercase text-white/90">
              Horário
            </h3>

            <div className="mt-4 space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <Clock size={18} />
                </span>
                <div>
                  <div className="text-white/90 font-semibold">Seg–Sex</div>
                  <div>08:00 – 18:00</div>
                </div>
              </div>

              <div className="pl-12">
                <div className="text-white/90 font-semibold">Sábado</div>
                <div>09:00 – 13:00</div>
              </div>

              <div className="pl-12">
                <div className="text-white/90 font-semibold">Domingo</div>
                <div>Encerrado</div>
              </div>

              <div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                <div className="text-xs text-white/80 font-semibold">
                  Dados empresariais
                </div>
                <div className="mt-1 space-y-1 text-xs text-white/60">
                  <div>
                    <span className="text-white/80 font-semibold">NIF:</span>{" "}
                    517731622
                  </div>
                  <div>
                    <span className="text-white/80 font-semibold">Alvará:</span>{" "}
                    146534 - PUB
                  </div>
                  <div>
                    <span className="text-white/80 font-semibold">CAE:</span>{" "}
                    43221
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/55">
          <p>&copy; {currentYear} Diâmetro. Todos os direitos reservados.</p>

          <div className="flex items-center gap-4">
            <Link to="/privacidade" className="hover:text-white transition">
              Política de Privacidade
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/termos" className="hover:text-white transition">
              Termos e Condições
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
