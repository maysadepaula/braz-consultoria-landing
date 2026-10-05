import Image from "next/image";
import { Award, BadgeCheck, FileText, Shield } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="sobre" className="relative scroll-mt-24 overflow-hidden bg-white py-24 sm:py-28">
      <div
        className="absolute left-0 top-0 h-full w-1/3 bg-brand-mist"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-12 right-12 h-72 w-72 rounded-full bg-brand-gold/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-shell relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="relative mx-auto max-w-[430px]">
            <div className="absolute -left-5 -top-5 h-full w-full rounded-lg border border-brand-gold/45" />
            <div className="relative overflow-hidden rounded-lg border border-brand-navy/10 bg-brand-deep p-3 shadow-premium">
              <div className="aspect-[4/5] overflow-hidden rounded-md">
                <Image
                  src="/images/mauricio-profissa.png"
                  alt="Maurício Bráz Júnior, responsável pela BRÁZ Consultoria Estratégica"
                  width={1024}
                  height={1536}
                  sizes="(min-width: 1024px) 420px, 88vw"
                  className="h-full w-full object-cover object-[50%_30%]"
                />
              </div>
            </div>

            <div className="absolute -bottom-7 right-4 rounded-lg border border-brand-gold/40 bg-white p-5 shadow-gold">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-brand-gold" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Responsável
                  </p>
                  <p className="font-semibold text-brand-deep">CRC registrado</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <SectionHeading
            eyebrow="Sobre"
            title="Sobre a BRÁZ Consultoria Estratégica"
            align="left"
          >
            <p>
              A BRÁZ Consultoria Estratégica une contabilidade, organização
              fiscal e leitura consultiva para apoiar empresas, MEIs e
              profissionais autônomos em decisões mais seguras.
            </p>
            <p className="mt-4">
              Sob a condução de Maurício Bráz Júnior, o atendimento combina
              rigor técnico, proximidade e visão empresarial para transformar
              números, obrigações e prazos em uma base sólida de crescimento.
            </p>
          </SectionHeading>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Confiança",
                text: "orientação segura"
              },
              {
                icon: BadgeCheck,
                title: "Autoridade",
                text: "registro profissional"
              },
              {
                icon: FileText,
                title: "Clareza",
                text: "rotina organizada"
              }
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-lg border border-brand-navy/10 bg-brand-mist p-5"
                >
                  <Icon className="mb-4 h-5 w-5 text-brand-gold" />
                  <h3 className="font-semibold text-brand-deep">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-lg border border-brand-gold/30 bg-white p-5 shadow-premium">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Registros profissionais
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-lg border border-brand-navy/10 bg-brand-deep px-4 py-2 text-sm font-semibold text-white">
                {CONTACT.crcPrimary}
              </span>
              <span className="rounded-lg border border-brand-navy/10 bg-brand-deep px-4 py-2 text-sm font-semibold text-white">
                {CONTACT.crcSecondary}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
