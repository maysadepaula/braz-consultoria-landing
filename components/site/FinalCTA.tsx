import { MessageCircle, Send, Sparkles } from "lucide-react";
import { CONTACT, TELEGRAM_URL, WHATSAPP_URL } from "@/lib/constants";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-deep py-24 text-white sm:py-28">
      <div className="premium-grid absolute inset-0 opacity-65" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-gold/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.1),transparent_30%)]"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-8 inline-flex h-14 w-14 items-center justify-center rounded-lg border border-brand-gold/35 bg-brand-gold/10 text-brand-gold">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="font-display text-3xl font-semibold leading-tight text-balance sm:text-5xl">
              Transforme a gestão da sua empresa com apoio estratégico
              especializado.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Fale agora com {CONTACT.professional} e receba uma orientação
              personalizada para sua empresa.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
