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

The form validates fields and prepares an email draft locally, with an email-app link and copy option. It does not send messages or store form data on a server. The recipient is `interiors@colorsofdesign.com`. Without JavaScript, visitors have direct email and telephone links. No backend credentials are needed.

## SEO and deployment

Includes page metadata, canonicals, social metadata, structured data, sitemap, robots.txt, breadcrumbs, and a custom 404. Builds with `VERCEL_ENV=preview` emit `noindex, follow`.

`src/data/redirects.json` supplies Astro's static redirect fallbacks. `vercel.json` supplies permanent HTTP redirects on Vercel and normalizes trailing slashes. Static redirect HTML alone does not provide an HTTP redirect status; port the rules when using another host. Keep both files synchronized; the checker verifies this.

**Read [the migration report](docs/site-completion-and-migration.md) before moving the original domain.** The WordPress store, Spanish pages, and older content require preservation or a separate migration decision.
