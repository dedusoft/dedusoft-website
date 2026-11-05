import Link from "next/link";
import { navigation } from "@/lib/site";

export function Header() {
  return <header className="site-header">
    <div className="shell header-inner">
      <Link className="brand" href="/" aria-label="DeduSoft homepage"><img className="brand-logo" src="/brand/dedusoft-logo.svg" width="180" height="42" alt="DeduSoft" /></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <Link className="header-cta" href="/contact/">Start a conversation <span aria-hidden="true">↗</span></Link>
      <details className="mobile-nav">
        <summary aria-label="Toggle navigation">Menu <span aria-hidden="true">＋</span></summary>
        <nav aria-label="Mobile navigation">
          {navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/contact/">Contact ↗</Link>
        </nav>
      </details>
    </div>
  </header>;
}
