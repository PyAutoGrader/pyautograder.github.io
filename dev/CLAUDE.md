## Project Overview

PyAutoGrader is a free automated Python grading tool for educators. This repo is the marketing website (Jekyll, GitHub Pages) at pyautograder.github.io.

## Style Rules

- **Never use em dashes (-).**  Always use a regular hyphen (-) or a short dash surrounded by spaces ( - ) instead. This applies to comments, docstrings, user-facing strings, HTML, and all other text.

## Product & Branding

- The website brands the product as **"PyAutoGrader"** - no "Offline" qualifier in marketing copy. The "Offline" designation stays in repo names and technical contexts only.
- **"Free. Always."** is the primary differentiator. It should appear prominently on the homepage (hero badge + bottom callout).
- **"Built by an educator, for educators"** is the identity/trust tagline.
- The creator is Jesse Sestito, Engineering Professor at Valparaiso University. The project grew from a Mastery Based Learning approach after switching from MATLAB to Python.
- Target audience is CS/Engineering instructors at universities. Speak technically - they understand Python, grading workflows, and infrastructure.
- Do not name competitors (CodeGrade, Gradescope) directly on the site. Use "paid autograders" or "subscription-based tools" instead.

## Site Architecture

- **Jekyll** static site with navy (#1a2744) + green (#4ade80) color scheme, Sora + JetBrains Mono fonts.
- **Nav:** Features / Server / Docs / FAQ / About / Contact / [Download]
- **Homepage:** Long-form landing page with 10 scrolling sections.
- **Download flow:** Nav "Download" button goes to `/offline/` which has OS-detection buttons (auto-detects Windows/macOS/Linux). Student downloads linked from that page.
- **`/online/server-info/`** must always remain accessible - it's a functional utility page used by the Online client.

## Online Content Toggle

Online content is archived, not deleted. Controlled by `online_enabled: false` in `_config.yml`.

- Online pages have `published: false` in front matter
- Online docs have `published: false` in front matter
- Doc sidebar conditionally shows/hides Online section based on `site.online_enabled`
- To re-enable Online: set `online_enabled: true`, remove `published: false` from Online pages/docs, add pricing page back

## Key Files

- `_config.yml` - Site config including `online_enabled` toggle
- `index.html` - Homepage with 10 sections
- `_includes/nav.html` - Navigation
- `_includes/footer.html` - Footer links
- `_pages/offline.md` - Download page with OS detection (permalink: /offline/)
- `_pages/features.md` - Full test type reference
- `_pages/server.md` - Self-hosted server details
- `_pages/about.md` - Origin story
- `_pages/contact.md` - Contact form (Formspree)
- `_pages/faq.md` - FAQ with General, Instructors, Students, Privacy sections
- `_layouts/doc.html` - Docs layout with conditional Online sidebar
- `assets/css/main.css` - All styles including landing page sections

## Content Guidelines

- The self-hosted Flask server is a **feature** of the product, not a separate product.
- Email and Google Sheets are **instructor notification channels** (silent, automatic). They cannot be "required."
- The self-hosted server and PDF export **can** be required by instructors.
- Batch grading is accessed through the **instructor application GUI**, not a CLI or Python script.
- Roster management is **optional** - students can free-form enter names, or instructors can use roster validation.
- FERPA-friendly design is a selling point - grading runs locally, data stays on instructor infrastructure.
