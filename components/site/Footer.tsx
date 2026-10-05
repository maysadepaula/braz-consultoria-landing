import Image from "next/image";
import { MessageCircle, Send } from "lucide-react";
import { CONTACT, TELEGRAM_URL, WHATSAPP_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white">
      <div className="section-shell grid gap-10 border-t border-white/10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="relative h-16 w-44 overflow-hidden rounded-md">
            <Image
              src="/images/logo-white-lockup.jpg"
              alt={CONTACT.company}
              fill
              sizes="176px"
              className="object-contain"
            />
          </div>
          <p className="mt-5 max-w-md leading-7 text-white/70">
            Estratégia, segurança e crescimento para sua empresa.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
            Contatos
          </h3>
          <div className="mt-5 space-y-3 text-sm text-white/70">
            <p>WhatsApp Business: {CONTACT.whatsappBusiness}</p>
            <p>WhatsApp: {CONTACT.whatsapp}</p>
            <p>Telegram: {CONTACT.telegram}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
            CRC
          </h3>
          <div className="mt-5 space-y-3 text-sm text-white/70">
            <p>{CONTACT.crcPrimary}</p>
            <p>{CONTACT.crcSecondary}</p>
          </div>
          <div className="mt-6 flex gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-brand-gold transition hover:border-brand-gold hover:bg-white/[0.08]"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-brand-gold transition hover:border-brand-gold hover:bg-white/[0.08]"
              aria-label="Telegram"
            >
              <Send className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="section-shell flex flex-col justify-between gap-3 text-xs text-white/60 sm:flex-row">
          <p>© 2026 BRÁZ Consultoria Estratégica.</p>
          <p>Atendimento contábil e consultivo para empresas, MEIs e autônomos.</p>
        </div>
      </div>
    </footer>
  );
}
