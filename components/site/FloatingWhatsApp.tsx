"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a BRÁZ Consultoria Estratégica pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-lg border border-white/25 bg-brand-gold text-brand-deep shadow-gold transition hover:-translate-y-1 hover:bg-[#d9b875]"
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 18,
        scale: visible ? 1 : 0.96,
        pointerEvents: visible ? "auto" : "none"
      }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}
