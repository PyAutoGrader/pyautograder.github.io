# PyAutoGrader Website

This is the source repository for [pyautograder.github.io](https://pyautograder.github.io) — the official website for the PyAutoGrader project.

Built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.

---

## Branches

| Branch | Purpose | Deploys To |
|--------|---------|------------|
| `main` | Production-ready content | `pyautograder.github.io` |
| `dev`  | Work in progress / staging | `pyautograder.github.io/dev` (via `gh-pages-dev` branch) |

**Workflow:**
1. Make changes on `dev`
2. Push to `dev` → preview builds automatically at the dev URL
3. When ready, merge `dev` → `main` → production builds automatically

---

## Local Development

### Prerequisites

- Ruby 3.x
- Bundler (`gem install bundler`)

### Setup

```bash
git clone https://github.com/PyAutoGrader/pyautograder.github.io.git
cd pyautograder.github.io
bundle install
```

### Run locally

```bash
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

Visit `http://localhost:4000` in your browser.

---

## Project Structure

```
pyautograder.github.io/
├── _config.yml            # Production Jekyll config
├── _config.dev.yml        # Dev overrides (baseurl, environment)
├── _layouts/
│   ├── default.html       # Base HTML layout
│   ├── page.html          # Standard page layout
│   └── doc.html           # Documentation layout with sidebar
├── _includes/
│   ├── nav.html           # Site navigation
│   └── footer.html        # Site footer
├── _docs/                 # Documentation (rendered as /docs/*)
│   ├── getting-started.md
│   ├── offline/
│   └── online/
├── assets/
│   ├── css/main.css       # Main stylesheet
│   ├── js/main.js         # JS (nav, accordion)
│   └── images/            # Logos, favicons, etc.
├── .github/workflows/
│   ├── deploy-production.yml   # main → production deploy
│   └── deploy-dev.yml          # dev → preview deploy
├── index.html             # Home page
├── offline.md             # Offline Autograder page
├── online.md              # Online Autograder page
├── student-downloads.md   # Student Downloads page
├── pricing.md             # Pricing page
├── faq.md                 # FAQ page
├── changelog.md           # Changelog page
├── about.md               # About page
└── contact.md             # Contact / Request Access page
```

---

## Adding Documentation

Documentation lives in `_docs/` as Markdown files. Each file needs front matter:

```yaml
---
layout: doc
title: Your Page Title
section: Section Name (shown in breadcrumb)
permalink: /docs/your-path/
prev_doc: /docs/previous-page   # optional
prev_title: Previous Page Title  # optional
next_doc: /docs/next-page        # optional
next_title: Next Page Title      # optional
---
```

Add new pages to the sidebar in `_layouts/doc.html`.

---

## Contact Form

The contact page uses [Formspree](https://formspree.io). Replace `YOUR_FORM_ID` in `contact.md` with your actual Formspree form endpoint.
