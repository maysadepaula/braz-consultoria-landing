import { services } from "@/lib/services";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://braz-consultoria-landing.vercel.app").replace(/\/$/, "");
export const SITE_NAME = "BRÁZ Consultoria Estratégica";
export function organizationSchema() {
  return {
    "@type": "AccountingService", "@id": SITE_URL + "/#empresa",
    name: SITE_NAME, url: SITE_URL,
    description: "Consultoria contábil e estratégica com atendimento presencial em Brasília–DF e online para todo o Brasil.",
    image: SITE_URL + "/images/mauricio-profissa.png",
    telephone: "+55-61-3047-4024",
    areaServed: [{ "@type": "City", name: "Brasília", containedInPlace: { "@type": "AdministrativeArea", name: "Distrito Federal" } }, { "@type": "Country", name: "Brasil" }],
    contactPoint: [
      { "@type": "ContactPoint", telephone: "+55-61-3047-4024", contactType: "Atendimento", availableLanguage: "pt-BR" },
      { "@type": "ContactPoint", telephone: "+55-61-99616-3461", contactType: "Atendimento", availableLanguage: "pt-BR" }
    ],
    sameAs: ["https://t.me/Mbrazjr"],
    founder: { "@type": "Person", "@id": SITE_URL + "/#mauricio", name: "Maurício Bráz Júnior", identifier: ["CRC DF 095.808", "CRC DF 1720-O"] },
    hasOfferCatalog: { "@type": "OfferCatalog", name: "Serviços contábeis e estratégicos", itemListElement: services.map(s => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, url: SITE_URL + "/servicos/" + s.slug, provider: { "@id": SITE_URL + "/#empresa" } } })) }
  };
}
