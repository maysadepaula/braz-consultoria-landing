"use client";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
export function ContactFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => { const update = () => setShow(window.scrollY > 650); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  return show ? <a className="floating-contact" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Conversar com a BRÁZ no WhatsApp" title="Conversar pelo WhatsApp"><MessageCircle size={22} /></a> : null;
}
