// src/components/Terms.tsx
import {
  FileText,
  Shield,
  Mail,
  Phone,
  Scale,
  Globe,
  AlertTriangle,
} from "lucide-react";

export default function Terms() {
  const lastUpdate = new Date().toLocaleDateString("pt-PT");

  // Dados (alinhados com Footer/Privacy)
  const COMPANY_NAME = "Diâmetro Canalizações";
  const COMPANY_NIF = "517731622";
  const COMPANY_EMAIL = "orcamentos@grupodiametro.pt";
  const COMPANY_PHONE_DISPLAY = "+351 939 555 074";
  const COMPANY_PHONE_TEL = "351939555074";

  return (
    <main className="pt-[92px] bg-white">
      {/* Top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0B4F8A] via-[#0B4F8A]/60 to-[#F5A623]" />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm">
          {/* Header */}
          <div className="p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#F5A623]" />
              <span className="text-sm font-semibold text-[#1E1E1E]">
                Termos • Condições
              </span>
              <span className="text-sm text-gray-500">
                Atualizado em {lastUpdate}
              </span>
            </div>

            <h1 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1E1E]">
              Termos e Condições
            </h1>

            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
              Ao aceder e utilizar este website, o utilizador concorda com os
              presentes Termos e Condições. Se não concordar, deve abster-se de
              utilizar o website.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-2xl border border-gray-200 p-4">
                <div className="flex items-center gap-2 text-sm font-extrabold text-[#1E1E1E]">
                  <FileText size={18} /> Entidade
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <div className="font-semibold text-[#1E1E1E]">
                    {COMPANY_NAME}
                  </div>
                  <div>NIF: {COMPANY_NIF}</div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 p-4">
                <div className="flex items-center gap-2 text-sm font-extrabold text-[#1E1E1E]">
                  <Mail size={18} /> Email
                </div>
                <div className="mt-2 text-sm text-gray-600 break-all">
                  <a
                    className="hover:underline text-[#0B4F8A] font-semibold"
                    href={`mailto:${COMPANY_EMAIL}`}
                  >
                    {COMPANY_EMAIL}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 p-4">
                <div className="flex items-center gap-2 text-sm font-extrabold text-[#1E1E1E]">
                  <Phone size={18} /> Telefone
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <a
                    className="hover:underline text-[#0B4F8A] font-semibold"
                    href={`tel:${COMPANY_PHONE_TEL}`}
                  >
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
                <FileText size={18} /> 1. Identificação do operador
              </h2>
              <p className="text-gray-700 leading-relaxed">
                O website é operado por <strong>{COMPANY_NAME}</strong>, NIF{" "}
                <strong>{COMPANY_NIF}</strong>.
              </p>

              <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E] mt-8 flex items-center gap-2">
                <Globe size={18} /> 2. Objeto do website
              </h2>
              <p className="text-gray-700 leading-relaxed">
                O website tem como objetivo apresentar os serviços da empresa e
                disponibilizar canais de contacto para pedidos de informação,
                orçamentos e agendamentos.
              </p>

              <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E] mt-8 flex items-center gap-2">
                <Shield size={18} /> 3. Utilização do website
              </h2>
              <ul className="text-gray-700 leading-relaxed">
                <li>
                  O utilizador compromete-se a utilizar o website de forma lícita
                  e responsável.
                </li>
                <li>
                  É proibida qualquer tentativa de acesso não autorizado,
                  interferência ou exploração de vulnerabilidades.
                </li>
                <li>
                  É proibida a utilização do website para fins fraudulentos ou
                  que possam prejudicar terceiros.
                </li>
              </ul>

              <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E] mt-8 flex items-center gap-2">
                <FileText size={18} /> 4. Propriedade intelectual
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A marca, logótipo, textos, imagens e o design do website são
                propriedade da empresa ou utilizados sob autorização/licença. É
                proibida a reprodução, distribuição ou alteração sem autorização
                prévia, salvo quando permitido por lei.
              </p>

              <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E] mt-8 flex items-center gap-2">
                <AlertTriangle size={18} /> 5. Informação e limitações de
                responsabilidade
              </h2>
              <ul className="text-gray-700 leading-relaxed">
                <li>
                  Envidamos esforços para manter a informação atualizada e
                  correta, mas não garantimos ausência total de erros.
                </li>
                <li>
                  O website pode conter conteúdos meramente informativos; a
                  disponibilidade de serviços depende de avaliação técnica e
                  proposta/orçamento.
                </li>
                <li>
                  Não nos responsabilizamos por danos resultantes de uso indevido
                  do website ou por indisponibilidades temporárias.
                </li>
              </ul>

              <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E] mt-8 flex items-center gap-2">
                <Scale size={18} /> 6. Ligações para sites de terceiros
              </h2>
              <p className="text-gray-700 leading-relaxed">
                O website pode incluir ligações para websites de terceiros. A
                empresa não controla esses conteúdos e não assume
                responsabilidade por políticas, práticas ou informações
                disponibilizadas nesses sites.
              </p>

              <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E] mt-8 flex items-center gap-2">
                <Shield size={18} /> 7. Privacidade e dados pessoais
              </h2>
              <p className="text-gray-700 leading-relaxed">
                O tratamento de dados pessoais é regulado pela nossa Política de
                Privacidade, disponível no website.
              </p>

              <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E] mt-8 flex items-center gap-2">
                <FileText size={18} /> 8. Alterações aos Termos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar estes Termos e Condições a qualquer momento. A
                data de “Última atualização” indica a versão em vigor.
              </p>

              <h2 className="text-lg sm:text-xl font-extrabold text-[#1E1E1E] mt-8 flex items-center gap-2">
                <Scale size={18} /> 9. Lei aplicável e foro
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Aplica-se a lei portuguesa. Em caso de litígio, e sem prejuízo
                de outros meios legalmente previstos, é competente o foro
                legalmente determinado.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="mt-10 rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-base sm:text-lg font-extrabold text-[#1E1E1E]">
                  Questões sobre estes Termos?
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  Contacte-nos e esclarecemos rapidamente.
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
                  href={`tel:${COMPANY_PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-[#1E1E1E] hover:bg-gray-100 transition"
                >
                  <Phone size={18} />
                  Ligar
                </a>
              </div>
            </div>

            {/* Nota curta */}
            <p className="mt-6 text-xs text-gray-500 leading-relaxed">
              Nota: Este texto é uma base prática para website institucional. Para
              contextos com requisitos específicos (ex.: contratos complexos,
              e-commerce, áreas reservadas), recomenda-se revisão jurídica.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
