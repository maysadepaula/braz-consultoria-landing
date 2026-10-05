"use client";

import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { CONTACT, NAV_ITEMS, WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-deep/85 text-white shadow-[0_12px_50px_rgba(9,15,32,0.24)] backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a
          href="#inicio"
          className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
          aria-label="Ir para o início"
        >
          <span className="relative h-14 w-20 overflow-hidden rounded-md sm:h-16 sm:w-24">
            <Image
              src="/images/logo-white-lockup.jpg"
              alt={CONTACT.company}
              fill
              priority
              sizes="160px"
              className="object-contain"
            />
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/75 transition-colors duration-300 hover:text-brand-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-brand-gold bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-deep shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9b875]"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.07] text-white transition hover:border-brand-gold/70 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-brand-deep/95 transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="section-shell flex flex-col gap-2 py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-white/75 transition hover:bg-white/[0.08] hover:text-brand-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-brand-gold bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-deep"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
