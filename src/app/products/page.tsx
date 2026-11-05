import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, ContactBand } from "@/components/ui";
import { projects } from "@/lib/site";
export const metadata: Metadata = {title:"Products",description:"Explore DWIIS and Eductrack, product initiatives from DeduSoft.",alternates:{canonical:"/products/"}};
export default function ProductsPage(){return <><PageIntro eyebrow="Our products" title="Built for practical needs." description="A look at the software initiatives we're developing and sharing—with clear labels for what is available and what is still evolving."/><section className="shell section compact-top"><div className="product-list">{projects.map((p,i)=><article className="product-line" key={p.slug}><div className="product-symbol" aria-hidden="true">{i===0?"D /":"E /"}</div><div><span className="project-status dark">{p.status}</span><h2>{p.name}</h2><p>{p.intro}</p><Link className="text-link" href={`/work/${p.slug}/`}>Explore product ↗</Link></div></article>)}</div></section><ContactBand /></>}
