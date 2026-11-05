import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="site-footer">
    <div className="shell">
      <div className="footer-main">
        <div><Link href="/" className="footer-brand">DeduSoft<span className="accent">.</span></Link><p>Considered software.<br />Built for the work that matters.</p></div>
        <div className="footer-links"><div><strong>Explore</strong><Link href="/services/">Services</Link><Link href="/work/">Selected work</Link><Link href="/products/">Products</Link><Link href="/about/">About</Link></div><div><strong>Connect</strong><Link href="/contact/">Get in touch</Link><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><Link href="/insights/">Insights</Link></div></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} DeduSoft. All rights reserved.</span><span><Link href="/privacy/">Privacy</Link><Link href="/terms/">Terms</Link></span></div>
    </div>
  </footer>;
}
