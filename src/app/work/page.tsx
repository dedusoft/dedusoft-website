import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, ContactBand } from "@/components/ui";
import { projects } from "@/lib/site";
export const metadata: Metadata = {title:"Selected work",description:"Explore verified public DeduSoft initiatives and product development work.",alternates:{canonical:"/work/"}};
export default function WorkPage(){return <><PageIntro eyebrow="Selected work" title="Useful work, shown clearly." description="A small selection of projects with enough verified context to share responsibly. More case studies will appear when ownership, contribution and disclosure are confirmed."/><section className="shell section compact-top"><div className="work-list">{projects.map((p,i)=><Link className="work-row" href={`/work/${p.slug}/`} key={p.slug}><span className="item-number">0{i+1}</span><div><span className="project-status dark">{p.status}</span><h2>{p.name}</h2><p>{p.intro}</p></div><span className="work-arrow" aria-hidden="true">↗</span></Link>)}</div></section><ContactBand /></>}
