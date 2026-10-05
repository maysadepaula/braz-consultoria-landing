import Link from "next/link";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/NewHeader";
import { CONTACT, TELEGRAM_URL, WHATSAPP_URL } from "@/lib/constants";
export function ContactSection() {
  return <section className="contact-section" id="contato"><div className="shell contact-layout"><div>
    <p className="eyebrow" style={{ color: "#dfbb7c" }}>O próximo passo começa com uma conversa</p>
    <h2>Seu negócio merece<br />uma direção mais clara.</h2>
    <p>Conte a sua necessidade para Maurício Bráz Júnior e entenda como a BRÁZ pode apoiar a sua empresa.</p>
  </div><div className="contact-actions">
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="button">Conversar pelo WhatsApp<ArrowUpRight /></a>
    <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="button button-outline">Atendimento pelo Telegram<ArrowUpRight /></a>
    <small>Presencial em Brasília–DF · Online em todo o Brasil</small>
  </div></div></section>;
}
export function NewFooter() {
  return <footer className="footer"><div className="shell"><div className="footer-top">
    <div><Brand /><p style={{ marginTop: 23 }}>Estratégia, segurança e crescimento<br />para sua empresa.</p></div>
    <div><p className="footer-title">FALE COM A BRÁZ</p><div className="footer-links"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp Business: {CONTACT.whatsappBusiness}</a><a href="https://wa.me/5561996163461" target="_blank" rel="noopener noreferrer">WhatsApp: {CONTACT.whatsapp}</a><a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">Telegram: {CONTACT.telegram}</a></div></div>
    <div><p className="footer-title">ATENDIMENTO PROFISSIONAL</p><p>Presencial em Brasília–DF<br />Online para todo o Brasil<br />{CONTACT.crcPrimary}<br />{CONTACT.crcSecondary}</p><Link href="/privacidade">Privacidade</Link></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} BRÁZ Consultoria Estratégica</span><span>Desenvolvido por <a className="developer-credit" href="https://www.maysadesign.com.br" target="_blank" rel="noopener noreferrer">Maysa de Paula</a></span></div></div></footer>;
}
