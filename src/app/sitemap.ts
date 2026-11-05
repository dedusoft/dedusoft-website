export const dynamic = 'force-static';
import type { MetadataRoute } from "next";
import { projects, site } from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{
  const paths=["","/about/","/services/","/work/","/products/","/insights/","/contact/","/privacy/","/terms/",...projects.map(p=>`/work/${p.slug}/`)];
  return paths.map(path=>({url:`${site.url}${path}`,changeFrequency:"monthly" as const,priority:path===""?1:0.6}));
}
