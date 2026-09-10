# Website completion and URL migration

Reviewed September 9, 2026 against the original site and its page, services, projects, and post XML sitemaps. These four sitemaps contain 129 URLs: see [url-migration.csv](url-migration.csv). This is a public-sitemap audit, not a full Search Console or server-log inventory. Product and taxonomy sitemaps are outside the marketing-page inventory.

## Design and content

The serif/sans pairing, warm cream backgrounds, editorial spacing, restrained links, and project photography continue through the Studio, Process, Contact, service detail, and Journal pages. The home hero and work/gallery compositions remain intact. Navigation and calls to action link to real pages. A footer and skip link connect the site. The mobile menu supports keyboard focus containment, Escape, and background inertness.

The former homepage shop block had blank images and sample inventory/prices. It is replaced with a furnishings feature using existing photography. WooCommerce has not been recreated. The language control previously changed only its label; it is removed until translated routes are implemented.

Two articles are included: a newly written consultation guide at the original guide URL and a new lighting article. New copy is ready for client editorial review. No invented reviews, staff credentials, or publication dates were added. Existing project claims, years, and descriptions were not independently verified against client records.

Founder background and business details come from the [original About page](https://colorsofdesign.com/about-us/) and [Contact page](https://colorsofdesign.com/contact-us/). Process stages follow the [original process](https://colorsofdesign.com/work-process/). The privacy page describes this marketing website and email drafts; it does not replace the store's policies or sales terms.

## Naming and URLs

“Journal” fits the visual identity, with the existing `/interior-design-blog/` URL and descriptive metadata. Google does not require “Blog” as a menu label. The implementation follows the [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide): useful content, crawlable links, clear titles, and a sensible hierarchy.

| Original route | New handling |
| --- | --- |
| `/about-us/`, `/contact-us/`, `/work-process/` | Preserved |
| `/interior-design-blog/` | Preserved; navigation label Journal |
| `/privacy-policy/` | Preserved with marketing-site-specific content |
| `/miami-interior-design-services/` | Permanent redirect to `/services/` |
| `/interior-design-portfolio/`, `/projects-item/` | Permanent redirect to `/work/` |
| `/services/{service}/` | Preserved detail pages; `fengshui` redirects to `feng-shui` |
| `/projects-item/delray-beach/` | Redirect to `/work/delray-beach-interior-design/` |
| `/projects-item/asheville-north-carolina/` | Redirect to `/work/asheville/` |
| `/projects-item/coral-gables/` | Redirect to `/work/coral-gables-estate/`; confirm identity before cutover |
| Original consultation article | Preserved at its `/home-decor-tips/…/` URL |
| `/about`, `/studio`, `/contact`, `/process`, `/blog`, `/journal` | Convenience redirects to canonical pages |

Canonicals, structured data, and sitemap use `https://colorsofdesign.com/` with trailing slashes for pages. Vercel uses permanent HTTP redirects (308); Astro supplies static fallbacks for local review. Unknown URLs receive the custom 404, not a catch-all homepage redirect.

The sitemap excludes redirects and the 404. Automatic build-time `lastmod` values were removed because deployment alone does not mean content changed. See Google's [URL migration guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

## Before a domain cutover

The marketing website is implemented locally. Handle the legacy URLs marked in the CSV before replacing WordPress:

1. Preserve the working store, products, cart, account, checkout, policies, and assets on a reachable origin or separately migrate commerce. Switching the domain to this build without a routing plan would break them.
2. Preserve or migrate Spanish content. Do not redirect Spanish pages to English just to avoid 404s or advertise unimplemented translations.
3. Review old articles, projects, location pages, awards, and consultations. Migrate valuable content at its original URL; redirect only to an equivalent replacement; return 404/410 for intentionally retired content. Use Search Console and analytics to prioritize traffic and backlinks.
4. Confirm identity for the project redirects, review new copy, and confirm contact details with the client.
5. Deploy when routing is ready, verify actual HTTP statuses/canonicals on the final host, submit `/sitemap.xml` in Search Console, and monitor indexing. Preserve search verification records and files.

No DNS, production deployment, external publishing, or message delivery was performed.

## Validation

Run `npm run build` and `python3 scripts/check-site.py`. Checks cover unique titles/canonicals, one H1/main landmark per page, descriptions, local links/fragments, image paths/alt text, JSON-LD syntax, sitemap coverage, redirect destinations, and parity between Astro/Vercel rules. Browser QA covers desktop/mobile layouts, navigation, FAQ interaction, form validation, and email draft preparation without sending email.
