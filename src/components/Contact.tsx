import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  MessageCircle,
  Loader2,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { useMemo, useState } from "react";

export default function Contact() {
  const COMPANY_PHONE_DISPLAY = "+351 939 555 074";
  const COMPANY_PHONE_TEL = "351939555074"; // tel: (sem +)
  const COMPANY_WA = "351939555074"; // wa.me (sem + e sem espaços)
  const COMPANY_EMAIL = "orcamentos@diametrocanalizacoes.com";

  // Formspree endpoint (o que aparece no seu painel)
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqeazyqy";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const whatsappHref = useMemo(() => {
    const txt = [
      "Olá! Gostaria de solicitar um orçamento.",
      "",
      `Nome: ${formData.name || "-"}`,
      `Email: ${formData.email || "-"}`,
      `Telefone: ${formData.phone || "-"}`,
      `Empresa: ${formData.company || "-"}`,
      `Mensagem: ${formData.message || "-"}`,
    ].join("\n");

    return `https://wa.me/${COMPANY_WA}?text=${encodeURIComponent(txt)}`;
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setStatus(null);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        setStatus("error");
        setSending(false);
        return;
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative bg-gray-50 py-20 sm:py-24">
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,79,138,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,166,35,0.06),transparent_55%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="mx-auto mb-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#0B4F8A] to-[#F5A623]" />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1E1E]">
            Contacto
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Entre em contacto para orçamentos, parcerias ou esclarecimentos
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className={[
                "rounded-3xl bg-white",
                "border border-gray-100",
                "shadow-sm",
                "p-7 sm:p-8",
              ].join(" ")}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E]">
                    Solicitar contacto
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Resposta rápida em horário comercial.
                  </p>
                </div>

                <span className="hidden sm:inline-flex items-center rounded-full bg-[#0B4F8A]/5 text-[#0B4F8A] ring-1 ring-[#0B4F8A]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wide">
                  Orçamentos / Parcerias
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <Field label="Nome completo" htmlFor="name">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ex.: João Silva"
                    className={inputClass}
                  />
                </Field>

                <Field label="Email" htmlFor="email">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="email@empresa.pt"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <Field label="Telefone" htmlFor="phone">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+351 ..."
                    className={inputClass}
                  />
                </Field>

                <Field label="Empresa (opcional)" htmlFor="company">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nome da empresa"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mb-6">
                <Field label="Mensagem" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Descreva o seu pedido (tipo de obra, localização, prazos, etc.)"
                    className={[inputClass, "resize-none"].join(" ")}
                  />
                </Field>
              </div>

              {/* Status inline */}
              {status && (
                <div
                  className={[
                    "mb-4 rounded-2xl px-4 py-3 text-sm font-semibold",
                    status === "success"
                      ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200"
                      : "bg-amber-50 text-amber-900 ring-1 ring-amber-200",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-2">
                    {status === "success" ? (
                      <CheckCircle2 size={18} className="mt-0.5" />
                    ) : (
                      <AlertTriangle size={18} className="mt-0.5" />
                    )}
                    <div>
                      {status === "success" ? (
                        <>
                          Mensagem enviada com sucesso. Entraremos em contacto em
                          breve.
                        </>
                      ) : (
                        <>
                          Não foi possível enviar agora. Tente novamente ou use
                          o WhatsApp.
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={sending}
                  className={[
                    "inline-flex w-full items-center justify-center gap-2",
                    "rounded-2xl px-6 py-3.5",
                    sending
                      ? "bg-[#0B4F8A]/70 cursor-not-allowed"
                      : "bg-[#0B4F8A] hover:bg-[#094070]",
                    "text-white font-extrabold",
                    "shadow-md shadow-black/10",
                    "transition-all",
                  ].join(" ")}
                >
                  {sending ? (
                    <>
                      A enviar <Loader2 size={18} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Enviar mensagem <Send size={18} />
                    </>
                  )}
                </button>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    "inline-flex w-full items-center justify-center gap-2",
                    "rounded-2xl px-6 py-3.5",
                    "border border-gray-200 bg-white hover:bg-gray-50",
                    "text-[#1E1E1E] font-extrabold",
                    "transition-all",
                  ].join(" ")}
                >
                  WhatsApp
                  <MessageCircle size={18} className="text-[#F5A623]" />
                </a>
              </div>

              <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                Ao submeter, concorda em ser contactado pela nossa equipa para
                dar seguimento ao pedido.
              </p>
            </form>
          </div>

          {/* Side cards */}
          <div className="space-y-6">
            <InfoCard
              icon={<Phone size={22} className="text-white" />}
              title="Telefone"
              accent="bg-[#F5A623]"
            >
              <p className="text-gray-600 font-semibold">
                {COMPANY_PHONE_DISPLAY}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={`tel:${COMPANY_PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gray-100 hover:bg-gray-200 px-4 py-2 text-sm font-bold text-[#1E1E1E] transition"
                >
                  Ligar <ArrowUpRight size={16} />
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0B4F8A] hover:bg-[#094070] px-4 py-2 text-sm font-bold text-white transition"
                >
                  WhatsApp <ArrowUpRight size={16} />
                </a>
              </div>
            </InfoCard>

            <InfoCard
              icon={<Mail size={22} className="text-white" />}
              title="Email"
              accent="bg-[#F5A623]"
            >
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="text-gray-600 hover:text-[#0B4F8A] transition-colors font-semibold break-all"
              >
                {COMPANY_EMAIL}
              </a>
              <p className="mt-2 text-sm text-gray-500">
                Ideal para pedidos com anexos ou documentação.
              </p>

              <div className="mt-3">
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gray-100 hover:bg-gray-200 px-4 py-2 text-sm font-bold text-[#1E1E1E] transition"
                >
                  Enviar email <ArrowUpRight size={16} />
                </a>
              </div>
            </InfoCard>

            <InfoCard
              icon={<MapPin size={22} className="text-white" />}
              title="Localização"
              accent="bg-[#F5A623]"
            >
              <p className="text-gray-600 font-semibold">Portugal</p>
              <p className="mt-2 text-sm text-gray-500">
                Atuação nacional. Obras e indústria.
              </p>
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =======================
   UI Helpers
======================= */

const inputClass =
  "w-full rounded-2xl border border-gray-200 bg-gray-50/60 px-4 py-3 text-gray-900 placeholder:text-gray-400 " +
  "outline-none transition " +
  "focus:bg-white focus:border-[#0B4F8A]/40 focus:ring-4 focus:ring-[#0B4F8A]/15";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-extrabold text-gray-800 mb-2"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function InfoCard({
  icon,
  title,
  accent,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white border border-gray-100 shadow-sm p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className={`h-12 w-12 rounded-2xl ${accent} flex items-center justify-center shadow-sm`}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-[#1E1E1E]">{title}</h3>
            <div className="mt-0.5 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#0B4F8A] to-[#F5A623]" />
          </div>
        </div>
      </div>

      <div className="mt-4">{children}</div>
    </div>
  );
}
