"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Atende MEI?",
    answer:
      "Sim. A BRÁZ atende MEIs que precisam de orientação contábil, organização fiscal, regularização e apoio para crescer com mais segurança."
  },
  {
    question: "Faz abertura de empresa?",
    answer:
      "Sim. O atendimento inclui orientação sobre abertura, enquadramento, documentação e primeiros passos para operar de forma organizada."
  },
  {
    question: "Atendimento online?",
    answer:
      "Sim. O contato pode acontecer por WhatsApp e Telegram, com acompanhamento remoto e envio de documentos pelos canais combinados."
  },
  {
    question: "Regulariza empresa?",
    answer:
      "Sim. A consultoria avalia pendências, CNPJ, obrigações fiscais e caminhos para recuperar a regularidade empresarial."
  },
  {
    question: "Faz imposto de renda?",
    answer:
      "Sim. Há atendimento para imposto de renda de pessoas físicas, profissionais autônomos e empresários."
  },
  {
    question: "Como funciona o atendimento?",
    answer:
      "Você entra em contato, descreve sua demanda e recebe uma orientação inicial para entender o cenário, prioridades e próximos passos."
  }
];

export function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-brand-mist py-24 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Perguntas Frequentes">
            Respostas diretas para quem quer entender como a BRÁZ pode apoiar a
            organização contábil e estratégica do negócio.
          </SectionHeading>
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <Reveal key={faq.question} delay={index * 0.03}>
                <div className="rounded-lg border border-brand-navy/10 bg-white shadow-premium">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    onClick={() => setActive(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-brand-deep sm:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-brand-gold transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 leading-7 text-slate-600">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
