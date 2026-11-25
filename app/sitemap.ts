import type { MetadataRoute } from "next";
import { site, projects } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.domain, priority: 1 }, ...projects.map((p) => ({ url: `${site.domain}/${p.slug}`, priority: 0.9 }))];
}
