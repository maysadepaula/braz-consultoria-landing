import {
  AlertTriangle,
  Building2,
  CircleHelp,
  ClipboardList,
  ReceiptText,
  TrendingUp
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const problems = [
  {
    title: "Impostos atrasados",
    description: "Pendências fiscais que tiram previsibilidade do caixa.",
    icon: ReceiptText
  },
  {
    title: "Multas fiscais",
    description: "Riscos que poderiam ser evitados com acompanhamento técnico.",
    icon: AlertTriangle
  },
  {
    title: "Falta de organização",
    description: "Documentos, prazos e obrigações sem uma rotina clara.",
    icon: ClipboardList
  },
  {
    title: "Dúvidas tributárias",
    description: "Insegurança sobre regime, notas, declarações e impostos.",
    icon: CircleHelp
  },
  {
    title: "Problemas com CNPJ",
    description: "Empresa parada, irregular ou travando novas oportunidades.",
    icon: Building2
  },
  {
    title: "Dificuldade para crescer",
    description: "Falta de visão estratégica para decidir com segurança.",
    icon: TrendingUp
  }
];

export function Problems() {
  return (
    <section id="desafios" className="scroll-mt-24 bg-brand-mist py-24 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Diagnóstico"
            title="Sua empresa enfrenta algum desses desafios?"
          >
            A BRÁZ atua para transformar pendências, dúvidas e desorganização em
            uma gestão fiscal clara, acompanhada e pronta para crescer.
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <Reveal key={problem.title} delay={index * 0.05}>
                <article className="group h-full rounded-lg border border-brand-navy/10 bg-white p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/55 hover:shadow-gold">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-brand-gold/30 bg-brand-gold/10 text-brand-gold transition-colors group-hover:bg-brand-gold group-hover:text-brand-deep">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-deep">
                    {problem.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {problem.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
