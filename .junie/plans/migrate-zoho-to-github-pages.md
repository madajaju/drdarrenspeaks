---
sessionId: session-260609-052943-1m96
---

# Requirements

### Overview & Goals
Move `drdarrenspeaks.com` from Zoho Sites to GitHub Pages using the existing static repo, while preserving the current domain, SEO signals, and public page structure.

### In Scope
- Publish the existing static site from this repository via GitHub Pages.
- Keep `drdarrenspeaks.com` as the primary domain using the existing `CNAME` file.
- Preserve production SEO assets already present in the repo: canonical URLs, schema, `robots.txt`, and `sitemap.xml`.
- Replace or confirm any Zoho-only functionality, especially form handling.
- Validate page routing, asset loading, and domain cutover after DNS changes.

### Out of Scope
- Rewriting site content or redesigning the site.
- Replatforming to a framework or CMS.
- Building a custom backend for forms.

### Success Criteria
- GitHub Pages serves the site from the repo with the custom domain `drdarrenspeaks.com`.
- All public pages, images, CSS, JS, and video assets load correctly from production.
- Search engines see the same canonical domain and sitemap location.
- No user-facing flow still depends on Zoho hosting features.

# Technical Design

### Current Implementation
The repo is already a static website designed for this migration:

- `README.md:40-55` documents a GitHub Pages deployment model and DNS reminder.
- `CNAME:1` already contains `drdarrenspeaks.com`.
- `robots.txt:1-4` already points search engines to `https://drdarrenspeaks.com/sitemap.xml`.
- `sitemap.xml:1-73` already lists the production URLs for the public pages.
- `index.html:71-78` and `contact.html:81-88` show the site-wide navigation pattern using extensionless routes such as `/speaking`, `/workshops`, and `/contact`.
- `contact.html:104-110` is already safe for static hosting because it uses an email-first CTA instead of a backend form.
- `community.html:114-135` still contains a placeholder form with `action="#"`, which will not work on GitHub Pages without a third-party form/newsletter integration.
- `MIGRATION_NOTES.md` explicitly calls out remaining manual follow-up for images, form integration, link review, and content review.

### Key Decisions
- **Host as a pure static site on GitHub Pages.** The repo already follows that architecture with root-level HTML pages plus shared assets in `assets/`.
- **Keep the custom domain in the repo via `CNAME`.** This matches the current SEO setup and avoids domain drift.
- **Treat forms as third-party integrations.** GitHub Pages does not provide server-side form handling, so any remaining Zoho form behavior must be replaced.
- **Normalize routing for GitHub Pages compatibility before cutover.** Because the repo uses extensionless links while the source files are named `*.html`, route behavior must be verified and, if needed, converted to a directory-style structure such as `/contact/index.html`.

### Proposed Changes / Migration Checklist
1. **Audit GitHub Pages readiness of the repository**
   - Confirm the repo default branch and GitHub Pages source settings.
   - Confirm all production assets required by `index.html`, `about.html`, `book.html`, `podcasts.html`, and `assets/` are committed.
   - Verify whether a `.nojekyll` file is needed based on any future asset naming conventions.

2. **Resolve GitHub Pages routing assumptions**
   - Test whether extensionless links such as `/about` and `/contact` resolve correctly in the GitHub Pages deployment.
   - If they do not, choose one of these approaches:
     - convert each page to folder-based routing (`about/index.html`, `contact/index.html`, etc.), or
     - change internal links/canonicals/sitemap entries to explicit `.html` URLs.
   - Apply the same decision consistently across navigation, canonical tags, schema URLs, and `sitemap.xml`.

3. **Replace Zoho-dependent features**
   - Keep `contact.html` on the current email-first flow unless you want a third-party form.
   - Replace `community.html:115` placeholder form with a working provider such as Zoho Campaigns, Mailchimp, or Formspree.
   - Review any hidden Zoho embeds, scripts, analytics, or DNS records still tied to the old site.

4. **Finalize domain and DNS cutover**
   - In GitHub Pages settings, bind the custom domain `drdarrenspeaks.com`.
   - Update DNS at the registrar/DNS host so the apex domain points to GitHub Pages IPs and `www` points via CNAME as desired.
   - Remove conflicting Zoho records once GitHub Pages is ready.
   - Confirm HTTPS certificate issuance in GitHub Pages after DNS propagation.

5. **Preserve SEO during migration**
   - Keep `CNAME`, `robots.txt`, `sitemap.xml`, canonical tags, and JSON-LD pointing to `https://drdarrenspeaks.com`.
   - Regenerate `sitemap.xml` if any routes change during the GitHub Pages compatibility pass.
   - After cutover, resubmit the sitemap in Google Search Console and Bing Webmaster Tools.

### File Impact
Expected files/components to verify or update during migration:
- `CNAME`
- `README.md`
- `robots.txt`
- `sitemap.xml`
- All root HTML pages using extensionless internal links, especially `index.html`, `contact.html`, and the other marketing pages.
- `community.html` for newsletter form integration.
- Potentially a new `.nojekyll` and/or `404.html` depending on the final routing strategy.

### Risks
- **Broken routes after cutover:** Extensionless URLs may not map cleanly to root `*.html` files on GitHub Pages.
- **Newsletter signup failure:** `community.html` currently has no working backend.
- **DNS conflict during switch:** Old Zoho records can compete with GitHub Pages if not cleaned up.
- **SEO regression:** Route changes without matching canonical/sitemap updates can create duplicate or broken URLs.

# Testing

### Validation Approach
- Preview the static site locally before cutover.
- Validate the GitHub Pages preview URL before switching DNS.
- Recheck the production custom domain after DNS propagation.

### Key Scenarios
- Homepage, speaking pages, books, podcasts, about, contact, and privacy pages open correctly.
- Shared assets load: `assets/css/styles.css`, `assets/js/main.js`, images, and `assets/video/hero-bg.mp4`.
- `robots.txt`, `sitemap.xml`, canonical tags, and schema all reference the final domain.
- Contact flow still works through `mailto:` and newsletter signup posts to a real provider.

### Edge Cases
- Refreshing a deep link like `/government-ai-speaker` or `/contact` must not 404.
- Mobile nav from `assets/js/main.js` should continue working on the deployed site.
- Domain variants (`www` vs apex) should resolve consistently to the preferred canonical host.

# Delivery Steps

###   Step 1: Audit repository readiness for GitHub Pages hosting
The repo is confirmed as a complete static site with a clear set of migration blockers.

- Review `README.md`, `CNAME`, `robots.txt`, and `sitemap.xml` to confirm the repository already targets GitHub Pages and the production domain.
- Verify that all root HTML pages and required assets under `assets/` are committed and reference production-safe URLs.
- Inventory Zoho-dependent items still present, with special attention to the placeholder newsletter form in `community.html`.
- Validate locally that the current site can be served as a plain static site without any build step.

###   Step 2: Make the site GitHub Pages-compatible before DNS cutover
All public routes and integrations work correctly in a GitHub Pages deployment model.

- Test whether extensionless paths used throughout the site, such as `/speaking` and `/contact`, resolve correctly when deployed from root `*.html` files.
- If needed, implement a consistent routing strategy by either restructuring pages into folder-based `index.html` routes or updating links and metadata to explicit `.html` paths.
- Replace or configure any remaining non-static behavior, especially the `community.html` newsletter form, to use a third-party service.
- Recheck `sitemap.xml`, canonical tags, and internal navigation after any route decision so they remain consistent.

###   Step 3: Configure GitHub Pages and cut over the custom domain
GitHub Pages is serving `drdarrenspeaks.com` instead of Zoho Sites.

- Enable GitHub Pages for the repository’s publishing branch and confirm the existing `CNAME` file is honored.
- Update registrar/DNS settings so the apex domain points to GitHub Pages and `www` is configured to the preferred host.
- Remove or disable conflicting Zoho DNS records after GitHub Pages is ready.
- Wait for DNS propagation, then confirm GitHub Pages has issued HTTPS for the custom domain.

###   Step 4: Validate production behavior and preserve SEO signals
The live GitHub Pages site matches the intended production experience with no migration regressions.

- Open each major page on the live domain and confirm navigation, deep links, assets, and mobile menu behavior all work.
- Verify that `robots.txt`, `sitemap.xml`, canonical tags, and JSON-LD still point to `https://drdarrenspeaks.com`.
- Confirm the contact email flow and the newsletter integration both behave correctly from production.
- Resubmit the sitemap to search tools and monitor for crawl or coverage issues after launch.