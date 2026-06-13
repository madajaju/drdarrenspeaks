# drdarrenspeaks.com SEO + AI Visibility Punchlist

This punchlist is intended for Codex/Junie implementation. The goal is to turn **drdarrenspeaks.com** from a general speaker brochure into a high-converting speaker, media, and authority hub for Dr. Darren Pulsipher.

## Current Implementation Status

## Status Legend

- [x] done
- [~] partial
- [ ] open


| Area | Status | Notes |
| --- | --- | --- |
| Baseline technical setup | Partial | Static site structure, `robots.txt`, `sitemap.xml`, canonical URLs, and clean redirects are in place; no formal build/lint workflow or analytics provider found. |
| Homepage conversion rewrite | Done | Hero, proof bar, "Why Darren" section, and primary CTAs are implemented. |
| Core speaker architecture | Done | `/keynotes/` hub and all six keynote detail pages exist. |
| Workshops | Done | `/workshops/` and `/workshops/executive-aaos-workshop/` exist. |
| Media kit | Done | `/media-kit/` exists with bios, intro copy, image, and contact CTA. |
| Canonical bio / entity SEO | Done | `/about/dr-darren-pulsipher/` exists and is linked sitewide. |
| `llms.txt` | Done | File exists at site root and lists canonical pages. |
| Structured data | Done | Person, Organization/Website, Service, FAQ, Book, and Podcast schema are present on relevant pages. |
| Books | Done | `/books/` and `/books/ai-augmented-teams/` exist. |
| Podcast cleanup | Done | Old title language and duplicate copy were removed in the current HTML. |
| Testimonials / proof | Partial | Page exists, but only one approved testimonial is present and two placeholders remain. |
| Resource hub | Done | `/resources/` and the initial article set exist. |
| Navigation / footer | Done | Main nav, footer, and CTAs were simplified and aligned to booking intent. |
| Contact / booking flow | Done | Booking inquiry page exists with qualifying fields and a mailto fallback. |
| On-page SEO / GEO | Done | Titles, descriptions, canonicals, headings, and AI-friendly content are in place on major pages. |
| Redirects and cleanup | Done | Legacy `.html` pages redirect to the new clean URLs. |
| Analytics and measurement | Partial | JS tracking hooks exist, but no analytics provider/snippet was found in the repo. |

## Primary Business Goal

Increase qualified keynote, workshop, podcast, university, executive, and public-sector speaking inquiries.

## Strategic Positioning

Use this positioning consistently across the site:

> Dr. Darren Pulsipher is an AI keynote speaker, author, professor, podcast host, and enterprise technology leader helping executives, universities, and public-sector organizations become AI-augmented.

Preferred short headline:

> AI-Augmented Leadership Speaker

Preferred expanded headline:

> Helping executives, government leaders, and universities deliver reliable, defensible results in the age of AI.

## Priority 0 â€” Baseline Technical Setup

### Tasks

- [x] Confirm current site technology stack and folder structure.
- [x] Identify whether the site is static HTML, Zoho export, framework-based, or custom-generated.
- [~] Create a clean local development workflow.
- [ ] Add formatting/linting for HTML, CSS, JavaScript, and Markdown where applicable.
- [x] Preserve existing URLs unless a redirect map is created.
- [x] Add a `robots.txt` file if missing.
- [x] Add or regenerate `sitemap.xml`.
- [x] Ensure the canonical domain is consistent: `https://www.drdarrenspeaks.com/` or `https://drdarrenspeaks.com/`.
- [x] Add canonical tags to all pages.
- [x] Ensure all pages have unique title tags and meta descriptions.
- [x] Ensure all images have descriptive alt text.
- [x] Ensure primary CTA buttons are accessible and keyboard navigable.

### Acceptance Criteria

- Site builds locally without errors.
- No broken internal links.
- Every public page has a unique `<title>` and meta description.
- `robots.txt` and `sitemap.xml` are accessible.
- Canonical URLs are consistent.

---

# Phase 1 â€” Homepage Conversion Rewrite

## 1. Replace Homepage Hero

### Current Problem

The homepage headline is too generic. â€œSpeaker, Innovator, Motivatorâ€ does not differentiate Darren from other speakers.

### Replace Hero Copy With

```text
AI-Augmented Leadership Speaker

Helping executives, government leaders, and universities deliver reliable, defensible results in the age of AI.

Dr. Darren Pulsipher
Chief Enterprise Architect Â· Vanderbilt Professor Â· Author Â· Podcast Host
```

### CTA Buttons

Use two primary buttons:

```text
Book Darren
View Keynotes
```

Optional third text link:

```text
Download Media Kit
```

### Implementation Tasks

- [x] Update homepage H1 to `AI-Augmented Leadership Speaker`.
- [x] Add strong subheadline focused on outcomes.
- [x] Add credibility line immediately below the subheadline.
- [x] Add primary CTA: `Book Darren` linking to `/book-darren//` or `/book-darren/`.
- [x] Add secondary CTA: `View Keynotes` linking to `/keynotes`.
- [x] Add tertiary link: `Download Media Kit` linking to `/media-kit`.
- [x] Ensure hero image is optimized and has alt text.

### Acceptance Criteria

- H1 clearly contains â€œAIâ€ and â€œspeaker.â€
- Visitor can understand who Darren is and why he matters in under 10 seconds.
- Booking CTA appears above the fold on desktop and mobile.

---

## 2. Add Credibility Bar

Add a proof bar directly under the hero.

### Suggested Items

```text
Intel Chief Enterprise Architect
Vanderbilt University Faculty
Author of AI-Augmented Teams
Host of Embracing Digital Transformation
8 Patents
Global Speaker
```

### Tasks

- [x] Add horizontal credibility bar on desktop.
- [x] Convert to stacked cards or scrolling row on mobile.
- [x] Use text first; logos can be added later if usage rights are clear.
- [x] Avoid overusing company logos without permission.

### Acceptance Criteria

- Credibility is visible without scrolling far.
- Layout works on mobile.
- Claims are phrased consistently across the site.

---

## 3. Add â€œWhy Darrenâ€ Section

### Suggested Copy

```text
Dr. Darren Pulsipher helps leaders move beyond AI hype and into reliable execution. His work connects enterprise architecture, public-sector modernization, AI governance, human accountability, and practical adoption.

Audiences leave with a clear understanding of how to use AI to improve decisions, accelerate work, and preserve trust.
```

### Tasks

- [x] Add section after credibility bar.
- [x] Include three cards:
    - AI-Augmented Leadership
    - Public-Sector and Enterprise Transformation
    - Reliable, Defensible AI Outcomes
- [x] Each card should link to a relevant keynote or topic page.

### Acceptance Criteria

- Section explains what makes Darren different.
- Each card links to deeper content.

---

# Phase 2 â€” Create Core Speaker Architecture

## 4. Create `/keynotes/` Landing Page

### Page Purpose

Show Darrenâ€™s main keynote topics and route buyers to the right offering.

### URL

```text
/keynotes/
```

### Target SEO Title

```text
AI Keynote Speaker | Dr. Darren Pulsipher
```

### Meta Description

```text
Book Dr. Darren Pulsipher for keynotes on AI-augmented leadership, generative AI strategy, public-sector modernization, digital transformation, and the future of work.
```

### Keynote Cards

Create cards for:

1. AI-Augmented Leadership
2. Becoming an AI-Augmented Organization
3. Reliable AI Execution
4. Public Sector AI and Digital Transformation
5. The Future of Work in the Age of AI
6. Generative AI Strategy for Executives

### Tasks

- [x] Create `/keynotes/index.html` or equivalent route.
- [x] Add overview copy.
- [x] Add keynote cards with title, audience, outcomes, duration, and CTA.
- [x] Link each card to a detail page.
- [x] Add CTA block at bottom.

### Acceptance Criteria

- All keynote pages are reachable from homepage and navigation.
- `/keynotes/` acts as a clean speaker-topic hub.

---

## 5. Create Individual Keynote Detail Pages

Create the following pages.

### 5.1 `/keynotes/aaos-ai-augmented-leadership/`

#### H1

```text
AI-Augmented Leadership Keynote
```

#### Audience

Executives, boards, senior leaders, university leaders, public-sector leaders.

#### Outcomes

- Understand what AI-augmented leadership means.
- Learn how leaders preserve accountability while increasing speed.
- Identify where AI improves decision quality.
- Understand how teams deliver reliable, defensible outcomes.

#### CTA

```text
Book This Keynote
```

---

### 5.2 `/keynotes/aaos-ai-augmented-leadership/`

#### H1

```text
Becoming an AI-Augmented Organization
```

#### Audience

Executives, transformation leaders, government agencies, universities, enterprise teams.

#### Outcomes

- Understand the path from AI experimentation to AI operating model.
- Identify organizational friction points.
- Learn how governance, workflows, and adoption connect.
- Build a roadmap for responsible AI execution.

---

### 5.3 `/keynotes/reliable-ai-execution/`

#### H1

```text
Reliable AI Execution
```

#### Audience

CIOs, CTOs, enterprise architects, AI program leaders, operations leaders.

#### Outcomes

- Move from AI pilots to production outcomes.
- Reduce hallucination, rework, and decision risk.
- Understand the role of validation and Integrity Packets.
- Build trust in AI-supported workflows.

---

### 5.4 `/keynotes/public-sector-ai/`

#### H1

```text
Public Sector AI and Digital Transformation
```

#### Audience

Government, defense, education, public agencies, civic technology groups.

#### Outcomes

- Understand public-sector AI constraints.
- Align AI adoption with mission, compliance, procurement, and trust.
- Modernize through the compute continuum.
- Improve services while preserving accountability.

---

### 5.5 `/keynotes/future-of-work/`

#### H1

```text
The Future of Work in the Age of AI
```

#### Audience

HR leaders, executives, universities, workforce boards, professional associations.

#### Outcomes

- Understand how AI changes knowledge work.
- Separate augmentation from automation.
- Prepare teams for AI-supported roles.
- Build human-centered AI adoption patterns.

---

### 5.6 `/keynotes/ai-governance/`

#### H1

```text
Generative AI Strategy for Executives
```

#### Audience

Executives, strategy teams, business unit leaders, innovation teams.

#### Outcomes

- Understand generative AI opportunities and risks.
- Build an executive AI strategy.
- Align use cases to business value.
- Avoid tool-first adoption traps.

### Common Keynote Page Requirements

Each keynote page must include:

- [x] H1 with target keyword.
- [x] Short executive summary.
- [x] Best-fit audience.
- [x] 4â€“6 audience takeaways.
- [x] Suggested duration options: 30, 45, 60, 90 minutes.
- [x] Optional workshop extension.
- [x] CTA button.
- [x] FAQ section.
- [x] Internal links to related pages.
- [x] Speaker schema or service schema where appropriate.

---

# Phase 3 â€” Workshops and Consulting Adjacent Offers

## 6. Create `/workshops/` Landing Page

### Purpose

Position Darren as a speaker who can also lead practical executive and team workshops.

### Suggested Workshop Cards

1. AI Executive Workshop
2. AI-Augmented Organization Workshop
3. Generative AI Hands-On Workshop
4. AI Governance and Policy Workshop
5. Public Sector Modernization Workshop
6. AI Readiness and Strategy Workshop

### Tasks

- [x] Create `/workshops/`.
- [x] Add overview and workshop cards.
- [x] Connect workshops to Paidar.ai for consulting depth where appropriate.
- [x] Keep drdarrenspeaks.com focused on booking and speaking.

### Acceptance Criteria

- Workshops feel like bookable sessions, not a consulting services catalog.
- Each workshop has clear duration and buyer outcome.

---

## 7. Create `/workshops/executive-aaos-workshop/`

### H1

```text
AI Executive Workshop
```

### Include

- Executive audience description.
- Half-day and full-day options.
- Outcomes:
    - AI opportunity map.
    - Risk and governance discussion.
    - Prioritized use cases.
    - Next-step roadmap.
- CTA: `Discuss This Workshop`.

### Acceptance Criteria

- Page is useful to event planners and executives.
- Clear handoff to Paidar.ai for implementation engagements.

---

# Phase 4 â€” Media Kit

## 8. Create `/media-kit/`

### Purpose

Reduce friction for event organizers.

### Page Sections

1. Short Bio
2. Medium Bio
3. Long Bio
4. Intro Script for Event Hosts
5. Headshots
6. Speaking Photos
7. Approved Topics
8. Books
9. Podcasts
10. Contact Information

### Suggested Short Bio

```text
Dr. Darren Pulsipher is an AI keynote speaker, author, professor, podcast host, and enterprise technology leader. He helps executives, universities, and public-sector organizations become AI-augmented by connecting strategy, governance, workflows, and human accountability.
```

### Suggested Event Intro

```text
Please welcome Dr. Darren Pulsipher, an AI keynote speaker, author, professor, podcast host, and enterprise technology leader. Darren helps organizations move beyond AI hype and into reliable execution by aligning people, process, governance, and technology.
```

### Tasks

- [x] Create `/media-kit/` page.
- [~] Add downloadable text snippets.
- [~] Add optimized images.
- [ ] Add image download buttons if files are available.
- [x] Add contact CTA.
- [x] Add `Person` schema.

### Acceptance Criteria

- Event organizer can copy a bio and intro in under 60 seconds.
- Media kit has clear contact path.

---

# Phase 5 â€” Entity SEO and AI Visibility

## 9. Create Canonical Darren Entity Page

### URL

```text
/about/dr-darren-pulsipher/
```

### SEO Title

```text
Dr. Darren Pulsipher | AI Speaker, Author, Professor, Podcast Host
```

### Meta Description

```text
Dr. Darren Pulsipher is an AI keynote speaker, author, professor, podcast host, and enterprise technology leader focused on AI-augmented organizations and digital transformation.
```

### Page Sections

- Overview
- Current Roles
- Speaking Topics
- Books
- Podcasts
- Academic Work
- Patents
- Public Sector and Enterprise Experience
- Boards and Working Groups
- Contact CTA

### Suggested Opening

```text
Dr. Darren Pulsipher helps leaders turn AI disruption into reliable execution. His work combines enterprise architecture, public-sector modernization, digital transformation, AI governance, and human-centered adoption.
```

### Tasks

- [x] Create canonical bio page.
- [x] Link to it from homepage, footer, media kit, and keynotes.
- [x] Add structured data using `Person` schema.
- [x] Include `sameAs` links to LinkedIn, podcast pages, books, Paidar.ai, and Embracing Digital where available.
- [x] Include current title consistently.

### Acceptance Criteria

- This page becomes the most complete web source about Darren as a speaker.
- AI systems can extract a clear entity description from it.

---

## 10. Add `llms.txt`

### URL

```text
/llms.txt
```

### Purpose

Give AI crawlers a concise map of the site and the preferred entity descriptions.

### Suggested File Content

```text
# DrDarrenSpeaks.com

DrDarrenSpeaks.com is the official speaking and media site for Dr. Darren Pulsipher.

Dr. Darren Pulsipher is an AI keynote speaker, author, professor, podcast host, and enterprise technology leader. He helps executives, universities, and public-sector organizations become AI-augmented by connecting strategy, governance, workflows, and human accountability.

Primary topics:
- AI-Augmented Leadership
- Becoming an AI-Augmented Organization
- Generative AI Strategy
- Public Sector AI and Digital Transformation
- Reliable AI Execution
- Future of Work
- AI Governance
- Digital Transformation

Important pages:
- /about/dr-darren-pulsipher/
- /keynotes/
- /keynotes/aaos-ai-augmented-leadership/
- /keynotes/reliable-ai-execution/
- /keynotes/public-sector-ai/
- /keynotes/future-of-work/
- /keynotes/ai-governance/
- /workshops/
- /media-kit/
- /books/
- /podcasts/
- /book-darren//

Related properties:
- https://paidar.ai/
- https://embracingdigital.org/
```

### Tasks

- [x] Add `/llms.txt` at site root.
- [x] Ensure it is accessible publicly.
- [x] Link to canonical pages.

### Acceptance Criteria

- `/llms.txt` loads as plain text.
- It contains concise and accurate descriptions.

---

## 11. Add Structured Data

### Required Schema Types

Add JSON-LD schema where applicable.

#### Global Organization / Website Schema

- [x] Add `WebSite` schema.
- [x] Add `Organization` or `ProfessionalService` schema.

#### Person Schema

Add on homepage, media kit, and bio page.

Include:

- `name`
- `honorificPrefix`
- `jobTitle`
- `description`
- `url`
- `sameAs`
- `knowsAbout`
- `worksFor` where appropriate
- `alumniOf` if appropriate

#### Speaker / Service Schema

For keynote pages:

- [x] Add `Service` schema.
- [x] Add `FAQPage` schema.

#### Book Schema

For book pages:

- [x] Add `Book` schema.

#### Podcast Schema

For podcast page:

- [x] Add `PodcastSeries` or relevant schema if supported.

### Acceptance Criteria

- JSON-LD validates in Google Rich Results Test where applicable.
- No duplicate/conflicting entity descriptions.

---

# Phase 6 â€” Books as Authority Assets

## 12. Create `/books/`

### Purpose

Use Darrenâ€™s books as credibility and conversion assets.

### Books to Include

- AI-Augmented Teams
- Becoming AI-Augmented
- Secrets of the Change Agent
- Art of ClearCase Deployment
- Implementing IBM Rational ClearQuest

### Tasks

- [x] Create `/books/` landing page.
- [x] Add book cards.
- [~] Link each book to a detail page.
- [x] Include book covers if available.
- [x] Add CTA: `Invite Darren to Speak on This Topic`.

---

## 13. Create `/books/ai-augmented-teams/`

### H1

```text
AI-Augmented Teams
```

### Include

- Short book description.
- Who it is for.
- Why it matters to keynote buyers.
- Link to buy.
- Link to related keynote.
- Link to related workshop.
- Review/testimonial section.
- Book schema.

### Acceptance Criteria

- Book page strengthens Darrenâ€™s authority as an AI speaker.
- Page links naturally to keynote and workshop offers.

---

# Phase 7 â€” Podcast Authority Cleanup

## 14. Rewrite `/podcasts/`

### Current Problems

- Repeated sentence on Embracing Digital Transformation.
- Outdated title: â€œChief Solution Architect.â€
- Podcast content does not fully support speaker authority.

### Tasks

- [x] Replace outdated title references with consistent current phrasing.
- [x] Remove duplicate sentences.
- [x] Reframe podcasts as proof of ongoing thought leadership.
- [~] Add links to latest episodes.
- [x] Add link to Embracing Digital Transformation site/feed.
- [x] Add link to relevant keynote pages.

### Suggested Intro

```text
Dr. Darren Pulsipher hosts conversations with executives, technologists, researchers, educators, and public-sector leaders on digital transformation, AI adoption, leadership, cybersecurity, data, and the future of work. These shows extend the same practical, outcome-driven perspective Darren brings to keynotes and workshops.
```

### Acceptance Criteria

- Podcast page supports booking Darren.
- No duplicate text.
- No outdated titles.

---

# Phase 8 â€” Testimonials, Proof, and Trust

## 15. Create `/testimonials/`

### Include

- Executive testimonials.
- University testimonials.
- Public-sector testimonials.
- Podcast guest quotes if appropriate.
- Workshop participant feedback.

### Tasks

- [x] Add testimonial cards.
- [x] Include person name, role, organization, and quote where approved.
- [x] Add CTA after every 3â€“5 testimonials.
- [~] Add schema if appropriate.

### Acceptance Criteria

- At least 3 testimonials are present.
- Testimonials are specific, not generic.

---

## 16. Add Featured Organizations Section

### Suggested Section Title

```text
Darren has spoken, taught, advised, or collaborated across enterprise, higher education, and public sector organizations.
```

### Tasks

- [x] Add section to homepage.
- [x] Add to media kit and about page.
- [x] Use text list first if logo permissions are uncertain.
- [x] Avoid implying endorsement where none exists.

### Acceptance Criteria

- Section builds credibility without overstating relationships.

---

# Phase 9 â€” Resource Hub for SEO

## 17. Create `/resources/`

### Purpose

Build organic search visibility and AI citation surface area.

### Initial Resource Articles

Create these pages:

1. `/resources/ai-augmented-organizations/`
2. `/resources/ai-augmented-organizations/`
3. `/resources/ai-governance/`
4. `/resources/ai-governance/`
5. `/resources/ai-operating-model/`
6. `/resources/reliable-ai-execution/`
7. `/resources/public-sector-ai/`
8. `/resources/ai-workforce-transformation/`

### Article Template

Each resource page should include:

- H1
- Definition
- Why it matters
- Common challenges
- Practical framework
- Executive checklist
- Related keynote CTA
- Related workshop CTA
- FAQ

### Acceptance Criteria

- Each article targets one clear search intent.
- Each article links to a keynote or workshop page.
- Resource pages are educational, not sales-heavy.

---

# Phase 10 â€” Navigation and Funnel Improvements

## 18. Update Main Navigation

### Recommended Navigation

```text
Home
Keynotes
Workshops
Media Kit
About
Books
Podcasts
Resources
Contact
```

### Tasks

- [x] Simplify existing navigation.
- [x] Replace vague labels like â€œWorksâ€ with clearer labels.
- [x] Ensure `Book Darren` CTA appears in nav.
- [x] Make mobile menu clean and accessible.

### Acceptance Criteria

- User can find keynotes, media kit, and contact quickly.
- Navigation labels match buyer intent.

---

## 19. Footer Redesign

### Footer Columns

1. Book Darren
2. Keynotes
3. Authority
4. Related Sites
5. Contact

### Include Links To

- `/keynotes/`
- `/workshops/`
- `/media-kit/`
- `/about/dr-darren-pulsipher/`
- `/books/`
- `/podcasts/`
- `/resources/`
- `/book-darren//`
- `https://paidar.ai/`
- `https://embracingdigital.org/`

### Acceptance Criteria

- Footer improves internal linking.
- Footer reinforces site purpose.

---

# Phase 11 â€” Contact and Booking Flow

## 20. Improve `/book-darren//` or Create `/book-darren//`

### Recommended Form Fields

- Name
- Organization
- Email
- Phone
- Event date
- Event location
- In-person / virtual / hybrid
- Audience size
- Topic of interest
- Budget range
- Message

### CTA Copy

```text
Bring Dr. Darren Pulsipher to your next executive event, university program, conference, or leadership workshop.
```

### Tasks

- [x] Create or improve booking form.
- [x] Add email and phone backup contact.
- [x] Add privacy reassurance.
- [x] Add confirmation message.
- [x] Track submissions.

### Acceptance Criteria

- Booking path is obvious from every page.
- Form captures enough information to qualify leads.

---

# Phase 12 â€” On-Page SEO Standards

## 21. Global SEO Rules

Apply to every page.

### Title Tag Pattern

```text
Primary Keyword | Dr. Darren Pulsipher
```

### Meta Description Rules

- 140â€“160 characters where practical.
- Include AI/speaker/topic keywords.
- Include audience or outcome.

### Heading Rules

- One H1 per page.
- H2s should describe page sections clearly.
- Avoid vague headings like â€œLearn More.â€

### Internal Linking Rules

Every major page should link to:

- One booking/book-darren// page.
- One authority page.
- One related keynote/workshop.
- One related resource.

### Image Rules

- Use descriptive filenames.
- Use alt text that describes the image and context.
- Compress images.
- Prefer WebP where possible.

---

# Phase 13 â€” AI Visibility / GEO Standards

## 22. LLM-Friendly Content Rules

On important pages, include explicit statements that AI systems can extract.

### Example Entity Statement

```text
Dr. Darren Pulsipher is an AI keynote speaker, author, professor, podcast host, and enterprise technology leader focused on AI-augmented organizations, digital transformation, and reliable AI execution.
```

### Example Topic Statement

```text
AI-augmented leadership is the practice of using AI to improve decision quality, speed, and consistency while preserving human accountability.
```

### Tasks

- [x] Add concise definitions to resource and keynote pages.
- [x] Add FAQ sections with direct answers.
- [x] Add â€œRelated Topicsâ€ blocks.
- [x] Add schema.
- [x] Add llms.txt.

### Acceptance Criteria

- Each important page contains extractable definitions.
- FAQs answer common buyer and AI-search questions directly.

---

# Phase 14 â€” Redirects and Cleanup

## 23. Fix Existing Content Issues

### Known Issues

- [x] Update â€œChief Solution Architectâ€ to current preferred title.
- [x] Remove duplicate sentence on podcast page.
- [x] Replace generic â€œSpeaker, Innovator, Motivator.â€
- [x] Review all â€œBook Nowâ€ buttons for correct destination.
- [x] Fix inconsistent navigation label: â€œSpeakerâ€ vs â€œSpeaking.â€
- [x] Fix typo: â€œWhat to find out more?â€ should be â€œWant to find out more?â€
- [~] Review all pages for grammar, spacing, and punctuation.
- [~] Update copyright and business entity text if needed.

### Acceptance Criteria

- Site is consistent, professional, and current.

---

# Phase 15 â€” Analytics and Measurement

## 24. Add Conversion Tracking

### Events To Track

- Booking form submissions.
- Clicks on `Book Darren`.
- Clicks on `Download Media Kit`.
- Clicks on `Schedule a Call`.
- Clicks to Paidar.ai.
- Clicks to Embracing Digital.
- Book purchase clicks.

### Tasks

- [~] Add analytics if not already present.
- [x] Add event tracking for CTAs.
- [ ] Add UTM conventions for cross-site links.
- [x] Create thank-you page for form submissions.

### Acceptance Criteria

- Darren can see which pages and CTAs generate leads.

---

# Recommended Implementation Order

## Sprint 1 â€” Immediate Conversion Fixes

- [x] Homepage hero rewrite.
- [x] Credibility bar.
- [x] Navigation cleanup.
- [x] Booking CTA.
- [x] Fix podcast duplicate/outdated title.
- [x] Footer links.

## Sprint 2 â€” Core Speaker Pages

- [x] `/keynotes/`
- [x] Six keynote detail pages.
- [x] `/workshops/`
- [x] `/workshops/executive-aaos-workshop/`

## Sprint 3 â€” Authority and AI Visibility

- [x] `/about/dr-darren-pulsipher/`
- [x] `/media-kit/`
- [x] `/llms.txt`
- [x] Person schema.
- [x] Website schema.
- [x] FAQ schema.

## Sprint 4 â€” Books and Resources

- [x] `/books/`
- [x] `/books/ai-augmented-teams/`
- [x] `/resources/`
- [x] First 4 resource articles.

## Sprint 5 â€” Polish and Measurement

- [x] Testimonials.
- [x] Featured organizations.
- [~] Analytics events.
- [x] Sitemap and redirects.
- [~] Accessibility pass.
- [~] Performance pass.

---

# Definition of Done

The implementation is complete when:

- [x] Homepage clearly positions Darren as an AI keynote speaker.
- [x] Keynotes and workshops have dedicated pages.
- [x] Booking CTA is visible on every major page.
- [x] Media kit exists and is useful to event organizers.
- [x] Canonical bio page exists and strengthens entity SEO.
- [x] `llms.txt` exists.
- [x] Structured data exists on major pages.
- [x] Podcast page is cleaned up.
- [x] Books support speaking authority.
- [x] Resources section supports SEO and AI visibility.
- [x] Cross-links connect drdarrenspeaks.com, paidar.ai, and embracingdigital.org.
- [~] Analytics can track booking intent.

