# Dr. Darren Speaks - Website Rebuild

This is the static website for Dr. Darren Pulsipher (drdarrenspeaks.com), rebuilt for speed, SEO, and executive positioning.

## Technical Details
- **Type:** Static HTML/CSS
- **Frameworks:** None (Vanilla HTML, CSS, and JS)
- **Hosting:** GitHub Pages
- **SEO:** Optimized with meta tags, Open Graph, and JSON-LD schema.

## Site Structure
- `index.html`: Home page (AI Keynote Speaker & Advisor)
- `speaking.html`: Overview of speaking topics and formats
- `ai-keynote-speaker.html`: Deep dive into AI-specific speaking
- `digital-transformation-speaker.html`: Deep dive into transformation speaking
- `workshops.html`: Executive AI workshops and briefings
- `government-ai-speaker.html`: Targeted content for public sector
- `higher-education-ai-speaker.html`: Targeted content for universities
- `book.html`: AI-Augmented Teams book details
- `works.html`: Full catalog of books, patents, and articles
- `podcasts.html`: Podcast authority and links
- `about.html`: Dr. Darren Pulsipher bio and credentials
- `community.html`: Newsletter and community signup
- `contact.html`: Booking inquiry form placeholder
- `privacy.html`: Privacy policy

## Assets
- `assets/css/styles.css`: Shared professional styles
- `assets/js/main.js`: Minimal JS for mobile navigation
- `assets/img/`: Directory for images (ensure headshots and book covers are placed here)

## Local Preview
To preview the site locally, you can use any static file server.
For example, with Python:
```bash
python -m http.server
```
Then visit `http://localhost:8000`.

## GitHub Pages Deployment
1. Push changes to the `main` branch.
2. Ensure GitHub Pages is configured to serve from the `main` branch in repository settings.
3. The `CNAME` file ensures the custom domain `drdarrenspeaks.com` is used.

## SEO & Optimization
Comprehensive SEO and AI Search Optimization reports are available:
- `SEO_AUDIT.md`: Detailed technical and semantic audit results.
- `KEYWORD_MAP.md`: Primary and secondary keyword targeting by page.
- `AI_DISCOVERABILITY_REPORT.md`: Analysis of LLM retrieval and identity reconciliation.

## Updating Schema
JSON-LD schema is included in the `<head>` of most pages. To update links (e.g., to Amazon or specific social profiles), search for `application/ld+json` in the HTML files.

## DNS Reminder
Ensure that the A records and CNAME records for `drdarrenspeaks.com` are pointing to GitHub Pages IP addresses.
