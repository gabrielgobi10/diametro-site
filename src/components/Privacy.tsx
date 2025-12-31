// src/components/Privacy.tsx
import { Shield, FileText, Mail, Phone, Clock, Globe, Cookie } from "lucide-react";

export default function Privacy() {
  const lastUpdate = new Date().toLocaleDateString("pt-PT");

  // Dados (os mesmos do teu Footer)
  const COMPANY_NAME = "Diâmetro Canalizações";
  const COMPANY_NIF = "517731622";
  const COMPANY_EMAIL = "orcamentos@diametrocanalizacoes.com";
  const COMPANY_PHONE_DISPLAY = "+351 939 555 074";

  return (
    <main className="pt-[92px] bg-white">
      {/* Top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0B4F8A] via-[#0B4F8A]/60 to-[#F5A623]" />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Header */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#F5A623]" />
              <span className="text-sm font-semibold text-[#1E1E1E]">
                RGPD • Privacidade
              </span>
              <span className="text-sm text-gray-500">Atualizado em {lastUpdate}</span>
            </div>

            <h1 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1E1E]">
              Política de Privacidade
            </h1>

            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
              Esta Política explica como tratamos dados pessoais quando utiliza o nosso website
              e quando nos contacta para informações, orçamentos ou marcações de serviços.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-2xl border border-gray-200 p-4">
                <div className="flex items-center gap-2 text-sm font-extrabold text-[#1E1E1E]">
                  <Shield size={18} /> Responsável
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <div className="font-semibold text-[#1E1E1E]">{COMPANY_NAME}</div>
                  <div>NIF: {COMPANY_NIF}</div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 p-4">
                <div className="flex items-center gap-2 text-sm font-extrabold text-[#1E1E1E]">
                  <Mail size={18} /> Contacto
                </div>
                <div className="mt-2 text-sm text-gray-600 break-all">
                  <a className="hover:underline text-[#0B4F8A] font-semibold" href={`mailto:${COMPANY_EMAIL}`}>
                    {COMPANY_EMAIL}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 p-4">
                <div className="flex items-center gap-2 text-sm font-extrabold text-[#1E1E1E]">
                  <Phone size={18} /> Telefone
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <a className="hover:underline text-[#0B4F8A] font-semibold" href="tel:351939555074">
                    {COMPANY_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="border-t border-gray-200 p-6 sm:p-8">
            <div className="prose prose-gray max-w-none">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E] flex items-center gap-2">
                <FileText size={18} /> 1. Âmbito
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Aplicamos esta Política ao tratamento de dados pessoais recolhidos através do website
                (por exemplo, formulário de contacto) e de comunicações iniciadas pelo utilizador
                (email, telefone ou WhatsApp).
              </p>

              <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E] mt-8 flex items-center gap-2">
                <Globe size={18} /> 2. Dados pessoais que podemos tratar
              </h2>
              <ul className="text-gray-700 leading-relaxed">
                <li><strong>Identificação e contacto:</strong> nome, email, telefone.</li>
                <li><strong>Conteúdo da mensagem:</strong> pedido/orçamento, detalhes enviados pelo utilizador.</li>
                <li>
                  <strong>Dados técnicos:</strong> endereço IP, tipo de navegador/dispositivo,
                  páginas visitadas e dados de segurança (quando aplicável).
                </li>
              </ul>

              <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E] mt-8 flex items-center gap-2">
                <Clock size={18} /> 3. Finalidades e base legal
              </h2>
              <ul className="text-gray-700 leading-relaxed">
                <li>
                  <strong>Resposta a contactos e pedidos de orçamento</strong> (diligências pré-contratuais e/ou execução de contrato).
                </li>
                <li>
                  <strong>Comunicações com o utilizador</strong> (interesse legítimo e/ou diligências pré-contratuais).
                </li>
                <li>
                  <strong>Cumprimento de obrigações legais</strong> (quando aplicável).
                </li>
                <li>
                  <strong>Segurança e melhoria do website</strong> (interesse legítimo).
                </li>
              </ul>

              <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E] mt-8 flex items-center gap-2">
                <Shield size={18} /> 4. Partilha de dados
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Não vendemos dados pessoais. Poderemos partilhar dados apenas quando necessário para:
                (i) prestadores de serviços técnicos (ex.: alojamento/infraestrutura), sob deveres de confidencialidade,
                e/ou (ii) cumprimento de obrigações legais.
              </p>

              <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E] mt-8 flex items-center gap-2">
                <Clock size={18} /> 5. Prazo de conservação
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Conservamos os dados pelo tempo necessário às finalidades descritas e, quando aplicável,
                pelos prazos legais. Pedidos de contacto/orçamento são normalmente mantidos pelo período
                necessário para gestão do pedido e histórico operacional.
              </p>

              <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E] mt-8 flex items-center gap-2">
                <Shield size={18} /> 6. Direitos do titular dos dados
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nos termos do RGPD, pode solicitar: acesso, retificação, apagamento, limitação,
                oposição e portabilidade. Para exercer direitos, contacte:
                {" "}
                <a className="font-semibold text-[#0B4F8A] hover:underline" href={`mailto:${COMPANY_EMAIL}`}>
                  {COMPANY_EMAIL}
                </a>
                .
              </p>
              <p className="text-gray-700 leading-relaxed">
                Pode também apresentar reclamação junto da <strong>CNPD</strong> (Comissão Nacional de Proteção de Dados).
              </p>

              <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E] mt-8 flex items-center gap-2">
                <Cookie size={18} /> 7. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                O website pode utilizar cookies estritamente necessários ao funcionamento e, quando aplicável,
                cookies de medição/estatística mediante consentimento. Pode gerir cookies através das definições
                do seu navegador.
              </p>

              <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E] mt-8 flex items-center gap-2">
                <Shield size={18} /> 8. Segurança
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Aplicamos medidas técnicas e organizativas adequadas para proteger os dados contra acesso não autorizado,
                alteração, perda ou divulgação indevida.
              </p>

              <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E] mt-8">
                9. Alterações a esta Política
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar esta Política para refletir melhorias do serviço ou alterações legais.
                A data de “Última atualização” indica a versão em vigor.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="mt-10 rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-base sm:text-lg font-extrabold text-[#1E1E1E]">
                  Precisa de esclarecer algo sobre privacidade?
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  Responderemos com a maior brevidade possível.
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0B4F8A] px-5 py-3 text-sm font-semibold text-white hover:brightness-110 transition"
                >
                  <Mail size={18} />
                  Enviar email
                </a>
                <a
                  href="tel:351939555074"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-[#1E1E1E] hover:bg-gray-100 transition"
                >
                  <Phone size={18} />
                  Ligar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
