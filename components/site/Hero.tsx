"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BarChart3,
  CircleDollarSign,
  MessageCircle,
  Send,
  ShieldCheck
} from "lucide-react";
import { CONTACT, TELEGRAM_URL, WHATSAPP_URL } from "@/lib/constants";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Reveal } from "@/components/ui/Reveal";

const trustItems = [
  "CRC ativo no DF",
  "Atendimento para MEI e empresas",
  "Consultoria fiscal e estratégica"
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand-deep pt-28 text-white sm:pt-32"
    >
      <div className="premium-grid absolute inset-0 opacity-80" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-premium-radial opacity-95"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-20 h-56 w-56 -translate-x-1/2 rounded-full bg-brand-gold/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(115deg,transparent,rgba(201,163,95,0.08))]"
        aria-hidden="true"
      />

      <div className="section-shell relative z-10 grid items-center gap-12 pb-14 lg:min-h-[760px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:pb-20">
        <div className="max-w-3xl">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-3 rounded-lg border border-brand-gold/35 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold backdrop-blur">
              <ShieldCheck className="h-4 w-4" />
              Estratégia contábil de alto padrão
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
              Consultoria Contábil e Estratégica para Empresas que Querem
              Crescer com Segurança
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              Soluções contábeis inteligentes, organização fiscal e suporte
              estratégico para empresas, MEIs e profissionais autônomos.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PremiumButton href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </PremiumButton>
              <PremiumButton
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                variant="outline"
              >
                <Send className="h-4 w-4" />
                Atendimento via Telegram
              </PremiumButton>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="gold-shine rounded-lg border border-white/15 bg-white/[0.07] px-4 py-3 text-sm text-white/75 backdrop-blur"
                >
                  <BadgeCheck className="mb-2 h-4 w-4 text-brand-gold" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative min-h-[560px] lg:min-h-[680px]">
          <motion.div
            className="absolute -right-8 top-2 hidden h-36 w-36 rounded-full border border-brand-gold/20 bg-brand-gold/10 blur-2xl lg:block"
            animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.72, 0.45] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />

          <Reveal delay={0.16} className="relative mx-auto max-w-[520px]">
            <div className="relative overflow-hidden rounded-lg border border-white/15 bg-white/[0.06] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(201,163,95,0.22),transparent_34%)]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-brand-navy">
                <Image
                  src="/images/mauricio-profissa.png"
                  alt="Maurício Bráz Júnior"
                  fill
                  priority
                  sizes="(min-width: 1024px) 500px, 88vw"
                  className="object-cover object-[50%_32%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/60 via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>

          <motion.div
            className="absolute left-0 top-10 w-48 rounded-lg border border-white/15 bg-white/[0.09] p-4 shadow-gold backdrop-blur-xl sm:left-3 lg:-left-8"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <CircleDollarSign className="mb-3 h-6 w-6 text-brand-gold" />
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">
              Gestão Fiscal
            </p>
            <p className="mt-1 text-lg font-semibold">clareza para decidir</p>
          </motion.div>

          <motion.div
            className="absolute bottom-20 right-0 w-56 rounded-lg border border-brand-gold/35 bg-brand-deep/80 p-4 shadow-gold backdrop-blur-xl lg:-right-6"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <BarChart3 className="mb-3 h-6 w-6 text-brand-gold" />
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">
              Consultoria
            </p>
            <p className="mt-1 text-lg font-semibold">estratégia para crescer</p>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-6 w-[min(86%,360px)] rounded-lg border border-white/15 bg-white/[0.08] p-4 backdrop-blur-xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">
                  Responsável técnico
                </p>
                <p className="mt-1 font-semibold">{CONTACT.professional}</p>
              </div>
              <div className="text-right text-xs leading-5 text-white/70">
                <p>{CONTACT.crcPrimary}</p>
                <p>{CONTACT.crcSecondary}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 border-y border-white/10 bg-white/[0.06] backdrop-blur">
        <div className="section-shell grid gap-3 py-5 text-sm text-white/70 sm:grid-cols-3">
          <span>Regularização empresarial sem ruído</span>
          <span>Planejamento tributário com visão de negócio</span>
          <span>Atendimento direto por WhatsApp e Telegram</span>
        </div>
      </div>
    </section>
  );
}
