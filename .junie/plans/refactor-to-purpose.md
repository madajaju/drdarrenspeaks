---
sessionId: session-260608-112438-1gaq
isActive: true
---

# Requirements

# Refactor Requirements: DrDarrenSpeaks.com

## Overview & Goals
The site is being pivoted from a content-heavy "publishing" hub to a high-conversion "speaker" site. The primary goal is to generate qualified leads for keynotes, workshops, and consulting.

## Scope
### In Scope
- **Navigation Overhaul**: Implementing the 8-item menu and CSS dropdown.
- **Home Page Layout**: 7-section layout focused on authority and conversion.
- **New Resource Pages**: Media Kit, Testimonials, and a consolidated Books hub.
- **Conversion Actions**: Standardizing Primary/Secondary/Tertiary CTAs.
- **Interoperability**: Strategic linking to Paidar.ai and EmbracingDigital.org.

### Out of Scope
- Building a full CMS.
- Hosting large video/media files locally.

## Conversion Hierarchy
1. **Primary**: "Book a Free Consultation" (Redirects to Contact).
2. **Secondary**: "Download Speaker Kit" (Redirects to Media Kit).
3. **Tertiary**: "View Workshops" (Redirects to Workshops).


# Technical Design

# Technical Design: Conversion-Focused Refactor

## Current State
- The site has a flat navigation with secondary links (Podcasts, Works) cluttering the header.
- The home page lacks the dedicated "Workshop Preview" and "Speaker Reel" sections required for executive vetting.

## Key Decisions
- **CSS Dropdown**: To maintain speed and zero dependencies, the "Speaking Topics" dropdown will use CSS `:hover` logic.
- **Resource Consolidation**: `books.html` will replace `book.html` and `works.html` to streamline the "Author" authority signal.
- **Strategic Mapping**: 
  - *Speaking Topics* will map to: `ai-keynote-speaker.html` (Orgs), `ai-augmented-teams.html` (Teams), `digital-transformation-speaker.html` (Transformation), `government-ai-speaker.html` (Governance), and a new page for `future-of-work.html`.
  - *Workshops* will focus on the three core offerings in `workshops.html`.

## Proposed Changes
### Navigation Structure
- Home
- Speaking Topics (Dropdown: AI-Augmented Orgs, AI-Augmented Teams, Digital Transformation, AI Governance, Future of Work)
- Workshops
- About Darren
- Media Kit
- Testimonials
- Books
- Contact

### Home Page Sections (`index.html`)
1. **Hero**: Dual CTAs (Primary/Secondary).
2. **Authority Bar**: Standardized logos + text labels (Intel, Vanderbilt, etc.).
3. **Featured Topics**: 5-item grid/list.
4. **Workshop Preview**: 3-column highlight section.
5. **Testimonials**: Featured grid with link to full page.
6. **Speaker Reel**: Aspect-ratio-aware video container.
7. **Bottom CTA**: High-contrast "Book a Free Consultation" block.


# Delivery Steps

###   Step 1: Refactor Navigation & Global Styles
Establish the visual hierarchy and shared components for the conversion-focused site.

- Implement a CSS-only dropdown menu in `assets/css/styles.css` for "Speaking Topics".
- Update the shared header and footer in all 14+ HTML files to match the exact 8-item navigation in `purpose.md`.
- Move "Podcasts" and "Community" links to the footer to declutter the main navigation.

###   Step 2: Overhaul Home Page Layout
Transform the home page into a high-impact conversion engine.

- Update the Authority Bar in `index.html` to explicitly include Intel, Vanderbilt, Author, Podcast Host, and Open Group.
- Implement a "Workshop Preview" section highlighting the Executive, AI Governance, and Higher Education workshops.
- Add a "Speaker Reel" section with a YouTube/Vimeo embed placeholder and professional styling.
- Align all CTAs with the conversion hierarchy: Primary (Book Consultation), Secondary (Download Speaker Kit), and Tertiary (View Workshops).

###   Step 3: Implement New Resource Pages & Topic Mapping
Add essential authority-building and conversion pages.

- Create `media-kit.html` featuring professional bios, headshot downloads, AV requirements, and an introduction script.
- Create `testimonials.html` as a dedicated hub for all social proof.
- Create `books.html` by consolidating and refactoring content from `book.html` and `works.html`.
- Create/Refactor individual topic pages for "Future of Work" and "AI-Augmented Teams".

###   Step 4: Final Conversion Optimization & Cleanup
Perform a final pass to ensure executive tone and conversion efficiency.

- Update `workshops.html` to focus exclusively on the 3 core workshop offerings.
- Verify that "Book a Free Consultation" is the dominant CTA on every page.
- Update `about.html` to the "About Darren" persona and ensure all "Ecosystem" links are prominent.
- Final validation of internal link integrity, responsive design, and SEO metadata.