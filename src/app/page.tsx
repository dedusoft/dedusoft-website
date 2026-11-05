import Link from "next/link";
import { Eyebrow, ContactBand } from "@/components/ui";
import { projects, services } from "@/lib/site";

export default function Home() {
  return <>
    <section className="hero shell">
      <div className="hero-copy"><Eyebrow>Independent software & digital solutions</Eyebrow><h1>Good software starts with <em>understanding.</em></h1><p>We help teams turn operational challenges into clear plans, useful applications, and thoughtful digital experiences.</p><div className="button-row"><Link className="button-primary" href="/contact/">Discuss a project <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/work/">Explore our work <span aria-hidden="true">↗</span></Link></div></div>
      <div className="hero-visual" aria-label="Illustration of a structured software delivery process" role="img">
        <div className="visual-label">The way we work <span>01 / 04</span></div><div className="visual-steps"><div><span>01</span><strong>Understand</strong><small>Know the problem</small></div><div><span>02</span><strong>Design</strong><small>Find the right structure</small></div><div><span>03</span><strong>Build</strong><small>Make it useful</small></div><div><span>04</span><strong>Improve</strong><small>Keep it working</small></div></div><div className="visual-signature">Thought before technology <span>↗</span></div>
      </div>
    </section>
    <section className="section shell"><div className="section-heading"><div><Eyebrow>What we do</Eyebrow><h2>From first question<br />to working solution.</h2></div><Link className="text-link" href="/services/">All services ↗</Link></div><div className="service-grid">{services.map(s => <article className="service-item" key={s.number}><span className="item-number">{s.number} /</span><h3>{s.title}</h3><p>{s.description}</p></article>)}</div></section>
    <section className="section section-ink"><div className="shell"><div className="section-heading"><div><Eyebrow>Selected initiatives</Eyebrow><h2>Products with<br /><em>a purpose.</em></h2></div><p className="heading-aside">Software shaped by practical needs, developed with care, and described with transparency.</p></div><div className="project-grid">{projects.map((project,i) => <Link key={project.slug} href={`/work/${project.slug}/`} className={`project-card project-card-${i + 1}`}><div className="project-card-top"><span>{project.category}</span><span aria-hidden="true">↗</span></div><div><span className="project-status">{project.status}</span><h3>{project.name}</h3><p>{project.intro}</p></div></Link>)}</div><div className="section-end"><Link className="text-link invert" href="/work/">See selected work ↗</Link></div></div></section>
    <section className="section shell philosophy"><div><Eyebrow>Our approach</Eyebrow><h2>Less noise.<br />More <em>intention.</em></h2></div><div className="philosophy-copy"><p>We believe useful software is the result of good questions, careful decisions, and an honest understanding of constraints.</p><p>That means starting with discovery, communicating clearly, documenting the important decisions, and building systems that can evolve.</p><Link className="text-link" href="/about/">Get to know DeduSoft ↗</Link></div></section>
    <ContactBand />
  </>;
}
