"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
export function Brand() {
  return <Link className="brand" href="/" aria-label="BRÁZ Consultoria Estratégica — início">
    <Image className="brand-mark" src="/images/braz-symbol.jpg" alt="" width={54} height={52} />
    <span><span className="brand-name">BRÁZ</span><span className="brand-sub">Consultoria Estratégica</span></span>
  </Link>;
}
export function NewHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return <><a className="skip-link" href="#conteudo">Ir para o conteúdo</a><header className="header"><div className="shell header-inner">
    <Brand />
    <nav id="main-nav" aria-label="Navegação principal" className={"nav" + (open ? " is-open" : "")} hidden={false}>
      {[["Soluções", "/#servicos"], ["A BRÁZ", "/#sobre"], ["Como funciona", "/#atendimento"], ["Dúvidas", "/#faq"]].map(([label, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
    </nav>
    <a className="button header-cta" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Falar com um especialista<ArrowUpRight /></a>
    <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav" aria-label={open ? "Fechar menu" : "Abrir menu"} title={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button>
  </div></header></>;
}
