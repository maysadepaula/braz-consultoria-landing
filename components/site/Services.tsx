import {
  BadgeDollarSign,
  Building2,
  Calculator,
  ClipboardCheck,
  Compass,
  FileCheck2,
  Landmark,
  UsersRound
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Abertura de Empresa",
    description: "Estruturação inicial com orientação sobre enquadramento e obrigações.",
    icon: Building2
  },
  {
    title: "Regularização de CNPJ",
    description: "Organização de pendências para retomar a segurança operacional.",
    icon: FileCheck2
  },
  {
    title: "Contabilidade para MEI",
    description: "Suporte simples, claro e profissional para o microempreendedor.",
    icon: BadgeDollarSign
  },
  {
    title: "Consultoria Estratégica",
    description: "Leitura contábil conectada a decisões de crescimento e gestão.",
    icon: Compass
  },
  {
    title: "Gestão Fiscal",
    description: "Controle de prazos, declarações e riscos fiscais do negócio.",
    icon: ClipboardCheck
  },
  {
    title: "Imposto de Renda",
    description: "Atendimento para pessoas físicas, autônomos e empresários.",
    icon: Calculator
  },
  {
    title: "Planejamento Tributário",
    description: "Análise para reduzir riscos e buscar eficiência dentro da lei.",
    icon: Landmark
  },
  {
    title: "Folha de Pagamento",
    description: "Rotinas trabalhistas com organização e acompanhamento profissional.",
    icon: UsersRound
  }
];

export function Services() {
  return (
    <section id="servicos" className="relative scroll-mt-24 overflow-hidden bg-white py-24 sm:py-28">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gold-line"
        aria-hidden="true"
      />
      <div
        className="absolute -right-28 top-20 h-72 w-72 rounded-full bg-brand-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="section-shell relative">
        <Reveal>
          <SectionHeading
            eyebrow="Serviços"
            title="Soluções Estratégicas para sua Empresa"
          >
            Da abertura ao acompanhamento fiscal, cada solução é pensada para
            entregar clareza, conformidade e visão de negócio.
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <article className="group flex min-h-[250px] flex-col rounded-lg border border-brand-navy/10 bg-gradient-to-b from-white to-brand-mist p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/65 hover:bg-white hover:shadow-gold">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-deep text-brand-gold transition-all duration-300 group-hover:bg-brand-gold group-hover:text-brand-deep">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold leading-tight text-brand-deep">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <span className="mt-auto pt-5 text-sm font-semibold text-brand-gold">
                    Atendimento personalizado
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
