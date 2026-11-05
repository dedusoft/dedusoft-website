# DeduSoft Website

A Next.js + TypeScript statically exported company website for DeduSoft, designed for GitHub Pages and the Cloudflare-managed `dedusoft.com` domain.

## Development

```bash
npm install
npm run dev
npm run typecheck
npm test
npm run build
```

The static production artifact is emitted to `out/`. There is **no server runtime**, and the initial contact page intentionally does not claim to process submissions. Use `npm install` for now; generating and committing a verified lockfile is a follow-up before a release candidate.

## Documentation

- [Discovery & project evidence](docs/01-discovery.md)
- [Design direction](docs/02-design-proposal.md)
- [Architecture](docs/03-architecture.md)
- [GitHub Pages / Cloudflare](docs/04-deployment.md)
- [Owner actions](docs/05-owner-actions.md)

## Release safety

All implementation work takes place on a feature branch and must pass review. GitHub Pages is configured as a **manual dispatch**, restricted to `main`. DNS and repository visibility must not be changed until explicit owner approval. Privacy and legal copy are drafts.
