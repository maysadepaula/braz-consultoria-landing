import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { services } from "@/lib/services";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL, changeFrequency: "monthly", priority: 1 }, ...services.map(s => ({ url: SITE_URL + "/servicos/" + s.slug, changeFrequency: "monthly" as const, priority: .8 })), { url: SITE_URL + "/privacidade", changeFrequency: "yearly", priority: .2 }];
}
