import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow"><span className="eyebrow-line" aria-hidden="true" />{children}</p>;
}
export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-intro shell"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p className="lead">{description}</p></section>;
}
export function ContactBand({ title = "Have something worth building?", description = "Start with the problem. We can work toward the right solution together." }: {title?: string; description?: string}) {
  return <section className="contact-band"><div className="shell contact-band-inner"><div><Eyebrow>Start a conversation</Eyebrow><h2>{title}</h2><p>{description}</p></div><Link href="/contact/" className="light-button">Get in touch <span aria-hidden="true">↗</span></Link></div></section>;
}
