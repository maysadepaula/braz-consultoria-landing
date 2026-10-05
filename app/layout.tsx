import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { NewHeader } from "@/components/NewHeader";
import { NewFooter } from "@/components/NewFooter";
import { ContactFloat } from "@/components/ContactFloat";
import { StructuredData } from "@/components/StructuredData";
import { SITE_URL, organizationSchema } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "BRÁZ Consultoria Estratégica | Contabilidade em Brasília", template: "%s | BRÁZ Consultoria Estratégica" },
  description:
    "Contabilidade e consultoria estratégica em Brasília–DF, com atendimento online para todo o Brasil. Soluções para empresas, MEIs e profissionais autônomos.",
  applicationName: "BRÁZ Consultoria Estratégica",
  authors: [{ name: "BRÁZ Consultoria Estratégica" }],
  keywords: [
    "consultoria contábil",
    "contabilidade estratégica",
    "abertura de empresa",
    "regularização de CNPJ",
    "MEI",
    "gestão fiscal",
    "imposto de renda",
    "Maurício Bráz Júnior"
  ],
  openGraph: {
    title: "BRÁZ Consultoria Estratégica",
    description:
      "Contabilidade e consultoria estratégica em Brasília–DF. Atendimento presencial e online para todo o Brasil.",
    url: SITE_URL,
    siteName: "BRÁZ Consultoria Estratégica",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/logo-fundoazul.jpg",
        width: 1536,
        height: 1024,
        alt: "Logo da BRÁZ Consultoria Estratégica"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 }
  }
};

export const viewport: Viewport = {
  themeColor: "#1F2947",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <StructuredData data={{ "@context": "https://schema.org", "@graph": [organizationSchema(), { "@type": "WebSite", "@id": SITE_URL + "/#site", url: SITE_URL, name: "BRÁZ Consultoria Estratégica", inLanguage: "pt-BR", publisher: { "@id": SITE_URL + "/#empresa" } }] }} />
        <NewHeader />
        {children}
        <NewFooter />
        <ContactFloat />
      </body>
    </html>
  );
}
