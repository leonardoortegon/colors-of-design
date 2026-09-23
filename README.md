# Colors of Design

Astro website for Colors of Design Group. Production canonicals use `https://colorsofdesign.com`. No production deployment is performed by the build.

## Development

Requires Node 22.12 or later.

```sh
npm install
npm run astro -- dev --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
npm run build
python3 scripts/check-site.py
```

## Content

- Studio, Process, Contact: `src/pages/about-us.astro`, `work-process.astro`, `contact-us.astro`.
- Services: `src/data/services.ts`; each entry generates a detail page.
- Projects: `src/data/projects.ts`; existing gallery layouts are retained.
- Journal: Markdown pages with `src/layouts/ArticleLayout.astro`, listed in `src/data/journal.ts`.
- Shared contact details and production domain: `src/data/site.ts`.

To add an article, create a Markdown file in `src/pages/interior-design-blog/`, using the lighting article as a model. Include title, description, category, image, imageAlt, canonicalPath, and layout in the frontmatter. Add matching card details to `src/data/journal.ts`. The journal index, homepage preview, related reading, and sitemap use that list. The layout supplies the H1; use H2 headings for article sections. Add truthful publication dates when an editorial publishing workflow is established.

## Inquiries

The contact forms post to `/api/contact`, a Vercel serverless function that sends email through [Resend](https://resend.com).

Required environment variables (set in Vercel → Project → Settings → Environment Variables):

- `RESEND_API_KEY` — API key from Resend
- `CONTACT_TO_EMAIL` — destination inbox (defaults to `interiors@colorsofdesign.com`)
- `CONTACT_FROM_EMAIL` — verified Resend from address (e.g. `Colors of Design <interiors@colorsofdesign.com>`)

Recommended anti-spam environment variables:

- `PUBLIC_TURNSTILE_SITE_KEY` — public site key for a Cloudflare Turnstile widget restricted to `colorsofdesign.com` and `www.colorsofdesign.com`
- `TURNSTILE_SECRET_KEY` — private key for server-side Turnstile verification

The API also applies a honeypot, form-completion timing check, same-origin check, and a lightweight per-instance rate limit. Turnstile is only enforced when `TURNSTILE_SECRET_KEY` is configured; set both Turnstile variables together before deploying.

Copy `.env.example` for local values. For local API testing, run `vercel dev` (plain `astro dev` serves pages only).

Without JavaScript, visitors still have direct email and telephone links.

## SEO and deployment

Includes page metadata, canonicals, social metadata, structured data, sitemap, robots.txt, breadcrumbs, and a custom 404. Builds with `VERCEL_ENV=preview` emit `noindex, follow`.

`src/data/redirects.json` supplies Astro's static redirect fallbacks. `vercel.json` supplies permanent HTTP redirects on Vercel and normalizes trailing slashes. Static redirect HTML alone does not provide an HTTP redirect status; port the rules when using another host. Keep both files synchronized; the checker verifies this.

**Read [the migration report](docs/site-completion-and-migration.md) before moving the original domain.** The WordPress store, Spanish pages, and older content require preservation or a separate migration decision.
