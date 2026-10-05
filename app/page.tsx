import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Building2, ShieldCheck, MapPin, Monitor, Check, Plus, Compass, FileCheck2, Calculator, Landmark, UsersRound, ClipboardCheck, BadgeDollarSign } from "lucide-react";
import { Entrance } from "@/components/Entrance";
import { ContactSection } from "@/components/NewFooter";
import { StructuredData } from "@/components/StructuredData";
import { faqs, services } from "@/lib/services";
import { WHATSAPP_URL, TELEGRAM_URL } from "@/lib/constants";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "BRÁZ Consultoria Estratégica | Contabilidade em Brasília",
  description: "Contabilidade e consultoria estratégica em Brasília–DF. Abertura de empresa, regularização de CNPJ, MEI e Imposto de Renda. Atendimento online em todo o Brasil.",
  alternates: { canonical: "/" }
};
const icons = [Building2, FileCheck2, BadgeDollarSign, Compass, ClipboardCheck, Calculator, Landmark, UsersRound];
export default function Home() {
  return <main id="conteudo">
    <StructuredData data={{ "@context": "https://schema.org", "@type": "FAQPage", "@id": SITE_URL + "/#faq", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
    <section className="hero">
      <div className="hero-photo"><Image src="/images/mauricio-profissa.png" alt="Maurício Bráz Júnior, da BRÁZ Consultoria Estratégica" fill priority sizes="(min-width: 801px) 58vw, 100vw" /></div>
      <div className="shell"><div className="hero-content">
        <p className="eyebrow">Brasília–DF · Atendimento nacional</p>
        <h1>Consultoria contábil<br />e estratégica.<br /><span>Clareza para crescer.</span></h1>
        <p className="hero-intro">Mais que cumprir obrigações: entender o seu negócio. Contabilidade, organização fiscal e orientação para decisões mais seguras.</p>
        <div className="hero-actions"><a className="button" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Falar no WhatsApp<ArrowUpRight /></a><Link className="button button-outline" href="#servicos">Conhecer as soluções<ArrowUpRight /></Link></div>
        <div className="hero-signature"><ShieldCheck /><span>Maurício Bráz Júnior · CRC DF 095.808 · CRC DF 1720-O</span></div>
      </div></div>
    </section>
    <div className="trust-strip"><div className="shell trust-inner">
      <div className="trust-item"><MapPin /><div><strong>Presença em Brasília</strong><span>Atendimento presencial no Distrito Federal</span></div></div>
      <div className="trust-item"><Monitor /><div><strong>Proximidade em qualquer lugar</strong><span>Atendimento online para todo o Brasil</span></div></div>
      <div className="trust-item"><Building2 /><div><strong>O apoio que faz sentido para você</strong><span>Empresas, MEIs e profissionais autônomos</span></div></div>
    </div></div>
    <section className="section" id="servicos"><div className="shell">
      <Entrance><div className="section-head"><div><p className="eyebrow">Soluções para cada momento</p><h2>Do primeiro CNPJ<br />ao próximo grande passo.</h2></div><p>Uma empresa muda. Suas necessidades também. Encontre o apoio contábil e estratégico para organizar o presente e preparar o que vem depois.</p></div></Entrance>
      <div className="service-grid">{services.map((s, i) => { const Icon = icons[i]; return <Link className="service-card" key={s.slug} href={"/servicos/" + s.slug}><div className="service-top"><Icon /><span>0{i + 1}</span></div><h3>{s.title}</h3><p>{s.short}</p><span className="service-link">Conhecer o serviço<ArrowUpRight /></span></Link>; })}</div>
    </div></section>
    <section className="section light-section"><div className="shell challenge-layout"><Entrance><div><p className="eyebrow">O que está no seu caminho?</p><h2>Menos incerteza.<br />Mais espaço para<br />o seu negócio evoluir.</h2><p>Uma pendência fiscal, uma dúvida sobre o CNPJ ou a falta de organização podem tirar o foco da empresa. O primeiro passo é entender o cenário e definir o que precisa de atenção.</p><a className="button button-dark" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Conversar sobre minha empresa<ArrowUpRight /></a></div></Entrance><ul className="challenge-list">{["Impostos e obrigações em atraso", "Pendências ou irregularidades no CNPJ", "Documentos e prazos sem organização", "Dúvidas sobre enquadramento tributário", "Decisões de crescimento sem orientação"].map(t => <li key={t}>{t}<Check /></li>)}</ul></div></section>
    <section className="section dark-section"><div className="shell"><Entrance><div className="section-head"><div><p className="eyebrow">A forma BRÁZ de trabalhar</p><h2>Técnica nos números.<br />Proximidade nas decisões.</h2></div><p>Um relacionamento consultivo, com atenção à realidade de cada negócio e orientações que você consegue entender e colocar em prática.</p></div></Entrance><div className="principles">
      {[["01", "Escuta antes da solução", "Cada empresa tem uma história. O atendimento começa pelo entendimento da sua atividade, dos seus desafios e do que você quer construir."], ["02", "Clareza em cada etapa", "Orientações objetivas, prioridades definidas e explicações sobre o que precisa ser feito. Você acompanha as decisões com mais contexto."], ["03", "Visão além da obrigação", "A organização contábil e fiscal se conecta à gestão. O objetivo é dar uma base mais consistente para os próximos passos do negócio."]].map(([n,t,p]) => <div className="principle" key={n}><span className="number">{n} / NOSSO COMPROMISSO</span><h3>{t}</h3><p>{p}</p></div>)}
    </div></div></section>
    <section className="section" id="sobre"><div className="shell about-layout">
      <div className="about-visual"><div className="about-photo"><Image src="/images/mauricio-profissa.png" alt="Maurício Bráz Júnior" fill sizes="(min-width: 801px) 500px, 90vw" /></div><div className="about-caption"><strong>Maurício Bráz Júnior</strong><span>BRÁZ Consultoria Estratégica</span></div></div>
      <Entrance><div className="about-copy"><p className="eyebrow">Quem está ao seu lado</p><h2>Uma visão estratégica.<br />Um atendimento pessoal.</h2><p>A BRÁZ Consultoria Estratégica reúne contabilidade, organização fiscal e orientação empresarial para apoiar empresas, MEIs e profissionais autônomos.</p><p>À frente do atendimento está Maurício Bráz Júnior. A proposta é compreender cada cenário, organizar informações e orientar decisões com clareza, responsabilidade e proximidade.</p><p>O atendimento acontece presencialmente em Brasília–DF e online para todo o Brasil, com o formato e o acompanhamento definidos conforme a sua necessidade.</p><div className="credentials"><span>CRC DF 095.808</span><span>CRC DF 1720-O</span></div><a href={WHATSAPP_URL} className="button button-dark" target="_blank" rel="noopener noreferrer">Falar com Maurício<ArrowUpRight /></a></div></Entrance>
    </div></section>
    <section className="section light-section" id="atendimento"><div className="shell"><div className="section-head"><div><p className="eyebrow">Um começo simples</p><h2>Da primeira conversa<br />a um caminho definido.</h2></div><p>Presencial em Brasília ou online em todo o Brasil. O atendimento se adapta à sua necessidade, com o escopo explicado desde o início.</p></div><div className="steps">{[["01", "Conte o seu momento", "Entre em contato por WhatsApp ou Telegram e explique o que você precisa: começar, regularizar, organizar ou planejar."], ["02", "Entenda as prioridades", "Maurício avalia as informações iniciais e orienta os documentos necessários para compreender o seu caso."], ["03", "Defina os próximos passos", "Você recebe uma proposta de atendimento com escopo e condições, para decidir com clareza como seguir."]].map(([n,t,p]) => <div className="step" key={n}><span>ETAPA {n}</span><h3>{t}</h3><p>{p}</p></div>)}</div></div></section>
    <section className="section" id="faq"><div className="shell faq-layout"><div><p className="eyebrow">Respostas para começar</p><h2>Uma boa decisão<br />começa sem dúvidas.</h2><p>Encontre respostas sobre o atendimento da BRÁZ e os serviços disponíveis para sua empresa.</p><a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="button button-dark">Tirar uma dúvida<ArrowUpRight /></a></div><div className="faq-list">{faqs.map(f => <details key={f.question}><summary>{f.question}<Plus /></summary><p>{f.answer}</p></details>)}</div></div></section>
    <ContactSection />
  </main>;
}
