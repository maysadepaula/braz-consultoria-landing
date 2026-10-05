import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Plus } from "lucide-react";
import { services } from "@/lib/services";
import { SITE_URL } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";
import { ContactSection } from "@/components/NewFooter";
import { WHATSAPP_URL } from "@/lib/constants";
export const dynamicParams = false;
export function generateStaticParams() { return services.map(s => ({ slug: s.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find(s => s.slug === params.slug);
  if (!service) return {};
  return { title: service.title + " em Brasília e online", description: service.description, alternates: { canonical: "/servicos/" + service.slug }, openGraph: { title: service.title + " | BRÁZ", description: service.description, url: "/servicos/" + service.slug, siteName: "BRÁZ Consultoria Estratégica", type: "website", locale: "pt_BR", images: [{ url: "/images/logo-fundoazul.jpg", width: 1536, height: 1024, alt: "BRÁZ Consultoria Estratégica" }] } };
}
export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);
  if (!service) notFound();
  const url = SITE_URL + "/servicos/" + service.slug;
  return <main id="conteudo">
    <StructuredData data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "Service", "@id": url + "#servico", name: service.title, description: service.description, url, provider: { "@id": SITE_URL + "/#empresa" }, areaServed: { "@type": "Country", name: "Brasil" } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: SITE_URL }, { "@type": "ListItem", position: 2, name: service.title, item: url }] },
      { "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: service.question, acceptedAnswer: { "@type": "Answer", text: service.answer } }] }
    ] }} />
    <section className="service-hero"><div className="shell"><nav className="breadcrumbs" aria-label="Caminho da página"><Link href="/">Início</Link><span>/</span><Link href="/#servicos">Soluções</Link><span>/</span><span aria-current="page">{service.title}</span></nav><p className="eyebrow" style={{ color: "#dfbb7c" }}>Brasília–DF · Online em todo o Brasil</p><h1>{service.title}<br />com orientação profissional.</h1><p>{service.description}</p><a href={WHATSAPP_URL} className="button" target="_blank" rel="noopener noreferrer">Conversar sobre este serviço<ArrowUpRight /></a></div></section>
    <section className="section"><div className="shell article-layout"><article className="article"><h2>Para quem é este atendimento?</h2><p>{service.audience}</p><h2>Como a BRÁZ pode apoiar você</h2><ul>{service.scope.map(s => <li key={s}>{s}</li>)}</ul><h2>O que preparar para a primeira conversa</h2><p>Não é preciso ter tudo pronto para entrar em contato. Estas informações ajudam a entender o cenário; documentos adicionais podem ser solicitados após a análise inicial.</p><ul>{service.documents.map(d => <li key={d}>{d}</li>)}</ul><h2>Presencial em Brasília. Online em todo o Brasil.</h2><p>Você pode conversar com Maurício Bráz Júnior por WhatsApp ou Telegram. Para atendimento presencial em Brasília–DF, confirme o local e a disponibilidade. No atendimento online, o envio de documentos e o acompanhamento são combinados conforme o serviço.</p><h2>Dúvida frequente</h2><div className="faq-list"><details open><summary>{service.question}<Plus /></summary><p>{service.answer}</p></details></div><h2>Outras soluções para sua empresa</h2><div className="related">{services.filter(s => s.slug !== service.slug).slice(0,3).map(s => <Link key={s.slug} href={"/servicos/" + s.slug}>{s.title}</Link>)}</div></article><aside className="service-aside"><p className="eyebrow">Atendimento BRÁZ</p><h2>Entenda o próximo passo para o seu caso.</h2><p>Conte a sua necessidade. A BRÁZ orienta a análise inicial e apresenta o escopo do atendimento.</p><a href={WHATSAPP_URL} className="button" target="_blank" rel="noopener noreferrer">Falar com Maurício<ArrowUpRight /></a><p style={{ marginTop: 24, fontSize: 12 }}>CRC DF 095.808<br />CRC DF 1720-O</p></aside></div></section>
    <ContactSection />
  </main>;
}
