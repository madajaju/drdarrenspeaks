# Migration Notes - Website Rebuild

## Summary
The website has been rebuilt as a lightweight, static HTML/CSS site to improve performance, accessibility, and SEO. The architecture has been moved from a heavy framework/bloated HTML to a clean, semantic structure.

## Changes
- **New Page Structure:** Canonical AAOS pages created for the home page, AAOS hub, keynote hub, workshop hub, media kit, books, resources, testimonials, about, and booking flow.
- **Legacy Content Migration:** Retired the old flat pages and old topic routes in favor of the AAOS directory structure.
- **Testimonials:** Integrated high-authority testimonials and proof into the homepage and testimonial page.
- **Shared CSS:** A new `assets/css/styles.css` provides a consistent, mobile-first design.
- **Minimal JS:** `assets/js/main.js` handles mobile navigation only.
- **SEO Optimization:** 
    - Unique titles, meta descriptions, and canonical tags for every page.
    - Open Graph and Twitter Card tags added.
    - Robots.txt and Sitemap.xml included.
- **Structured Data:** Unified JSON-LD schema graph added for Person, Organization, WebSite, BreadcrumbList, Service, Book, and FAQ.
- **AI Search Optimization:** Added authority blocks and fact-dense content to improve LLM retrieval (ChatGPT, Perplexity, etc.).
- **Infrastructure:** CNAME added for `drdarrenspeaks.com`.

## Preserved Items
- **Images:** Any existing images from the previous site should be moved to `assets/img/`.
- **Privacy Policy:** The core privacy policy content has been preserved but styled with the new layout.

## Manual Follow-up Needed
1. **Images:** Upload high-resolution headshots and book covers to `assets/img/`. Update the `src` attributes in the HTML files if the filenames differ from the placeholders used.
2. **Form Integration:** The booking form in `book-darren/index.html` is a mailto-based inquiry flow. Connect it to a form service if you want server-side submission handling.
3. **Links:** 
    - Check and update any external social media or podcast links in the schema and footer.
4. **Content Review:** Review the generated copy to ensure it perfectly aligns with Dr. Pulsipher's voice and current focus.
