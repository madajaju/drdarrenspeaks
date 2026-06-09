# Migration Notes - Website Rebuild

## Summary
The website has been rebuilt as a lightweight, static HTML/CSS site to improve performance, accessibility, and SEO. The architecture has been moved from a heavy framework/bloated HTML to a clean, semantic structure.

## Changes
- **New Page Structure:** 14 core pages created with unique SEO targets and professional executive copy.
- **Legacy Content Migration:** Integrated 8 patents, 3 legacy books, and Medium article links into a new `works.html` page.
- **Community Engagement:** Added a new `community.html` page for newsletter sign-up, matching original site fields.
- **Testimonials:** Integrated high-authority testimonials (e.g., U.S. Census Bureau) directly into the homepage.
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
2. **Form Integration:** The contact form in `contact.html` and the newsletter form in `community.html` are placeholders. You will need to connect them to a service like [Formspree](https://formspree.io/), [Netlify Forms](https://www.netlify.com/products/forms/), or your preferred email marketing tool (e.g., Zoho Campaigns, Mailchimp).
3. **Links:** 
    - Check and update Amazon links in `book.html`.
    - Check and update any specific social media or podcast links in the schema and footer.
4. **Content Review:** Review the generated copy to ensure it perfectly aligns with Dr. Pulsipher's voice and current focus.
