# Engineering architecture and technical decisions

## Decision

Use **Next.js App Router + TypeScript + static export**, with `output: 'export'`, `trailingSlash: true`, and static route parameters. GitHub Pages can serve the generated `out/` directory without a Node server.

## Architecture

- `src/app/`: static routes, metadata, sitemap, robots and 404.
- `src/components/`: shared header, footer and composition primitives.
- `src/lib/site.ts`: centralized site navigation, services and verified project summaries.
- `src/app/globals.css`: design tokens, responsive layout, accessible states and reduced-motion behavior.
- `tests/`: lightweight content and configuration regression tests.
- `.github/workflows/ci.yml`: verify pull requests and branches.
- `.github/workflows/pages.yml`: **manual production deployment from main only**.

## Static export constraints

No server actions, API routes, request-time secrets, server-rendered forms, or image optimizer runtime. Contact submission requires a verified external hosted form service or separately deployed backend with rate limiting, server-side validation and privacy policy updates. Current version makes no claim to process form submissions.

## Publishing and security

- Never publish credentials, private source, private repository URLs or internal infrastructure.
- Project entries are manually reviewed, not automatically harvested from GitHub.
- Existing website repository is **private**. GitHub Pages availability for private repositories depends on organization subscription/plan and Pages configuration. **Do not make this repository public solely to enable Pages:** doing so could expose project history and documents. If the existing GitHub plan does not support the desired private source + public Pages configuration, choose an approved alternative hosting plan.
- Cloudflare should manage DNS only once the Pages hostname and repository settings are validated.
- HTTP security headers are not defined by a Next.js server in static export; configure eligible protection at Cloudflare edge and test behavior.
- A static website does not itself provide authenticated admin or analytics capabilities.

## SEO

Canonical host `https://dedusoft.com`; static sitemap and robots; unique page metadata; descriptive navigation and project pages. Social image, Search Console verification and analytics remain owner/launch tasks.
