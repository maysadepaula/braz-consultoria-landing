import {
  HeartHandshake,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Telescope,
  Zap
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const differentials = [
  {
    title: "Atendimento humanizado",
    description: "Orientação direta, objetiva e próxima da realidade do negócio.",
    icon: HeartHandshake
  },
  {
    title: "Visão estratégica",
    description: "Contabilidade conectada ao crescimento, não apenas à obrigação.",
    icon: Telescope
  },
  {
    title: "Suporte rápido",
    description: "Canais diretos para dúvidas, documentos e acompanhamento.",
    icon: Zap
  },
  {
    title: "Clareza nas orientações",
    description: "Explicações práticas para decisões sem ruído técnico.",
    icon: MessageSquareText
  },
  {
    title: "Segurança fiscal",
    description: "Rotina organizada para reduzir riscos e evitar surpresas.",
    icon: ShieldCheck
  },
  {
    title: "Acompanhamento profissional",
    description: "Presença consultiva para cada etapa da vida empresarial.",
    icon: Sparkles
  }
];

const metrics = [
  { value: "2", label: "registros CRC informados" },
  { value: "360°", label: "visão contábil, fiscal e estratégica" },
  { value: "100%", label: "atendimento personalizado" }
];

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative scroll-mt-24 overflow-hidden bg-brand-deep py-24 text-white sm:py-28"
    >
      <div className="premium-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-brand-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 h-full w-1/3 bg-[linear-gradient(180deg,rgba(201,163,95,0.12),transparent)]"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Diferenciais"
              title="A contabilidade deixa de ser apenas obrigação e passa a orientar decisões."
              align="left"
              dark
            >
              Um atendimento premium combina técnica, clareza e leitura
              estratégica para proteger a empresa e abrir espaço para novas
              oportunidades.
            </SectionHeading>

            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-white/10 bg-white/[0.07] p-5 backdrop-blur"
                >
                  <div className="text-3xl font-semibold text-brand-gold">
                    {metric.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {differentials.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article className="group h-full rounded-lg border border-white/10 bg-white/[0.07] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/60 hover:bg-white/[0.1]">
                    <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-brand-gold/35 text-brand-gold transition group-hover:bg-brand-gold group-hover:text-brand-deep">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-white/70">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
