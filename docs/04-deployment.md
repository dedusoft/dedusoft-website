# GitHub Pages + Cloudflare deployment runbook

**Do not deploy without owner approval.**

## Preflight

1. Review all website copy, project descriptions and legal wording.
2. Confirm Pages support for the current **private** organization repository and GitHub plan. Do not change repository visibility without a separate, explicit approval.
3. Ensure the required GitHub Actions permissions and Pages source are configured (GitHub Actions). Enable the `github-pages` environment and any approval rules.
4. Install dependencies with `npm ci` and verify `npm run typecheck`, `npm test` and `npm run build`.
5. Inspect `out/index.html`, `out/404.html`, `out/sitemap.xml`, `out/robots.txt` and `out/CNAME` locally.
6. Complete all owner checklist items.

## Publish

1. Merge the approved feature PR into `main`.
2. Configure repository Settings → Pages → Source: GitHub Actions.
3. In Pages settings, set custom domain to `dedusoft.com` after determining the platform-assigned Pages hostname.
4. Verify availability of the `github-pages` environment and protection rules.
5. Manually start the workflow **Deploy GitHub Pages (approved only)** on `main`.
6. Record the Pages deployment URL and confirmed GitHub-hosted target before changing Cloudflare records.
7. At Cloudflare, apply the official GitHub Pages apex-domain DNS instructions for the verified host; do not invent IPs or overwrite unrelated records.
8. Preserve all MX, SPF, DKIM and DMARC records. Configure HTTPS, test certificate issuance and settle on `dedusoft.com` as the canonical host.
9. If using Cloudflare proxying, validate TLS, cache behavior, redirects and that the GitHub Pages certificate challenge succeeds.

## Post-launch

- Check homepage, all pages, nested project route refreshes, navigation and the 404 page.
- Verify DNS, HTTPS, `www` redirect if enabled, canonical URLs, sitemap/robots and social share metadata.
- Test keyboard navigation, mobile layouts, contrast and Core Web Vitals.
- Confirm any public contact mechanism actually reaches the owner before announcing it.
- Register Search Console only with domain owner authorization.

## Rollback

Deploy a previously reviewed commit on `main` using an approved rollback PR or restore the last known-good Pages artifact. Avoid force-pushing `main`; keep the last known-good release tag and deployment audit trail.
