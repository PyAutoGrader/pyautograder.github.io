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

---

## First-Time Setup Checklist

Things to fill in before or shortly after going live:

- [ ] Replace `YOUR_FORM_ID` in `contact.md` with your [Formspree](https://formspree.io) endpoint
- [ ] Add a favicon at `assets/images/favicon.png` (32×32 or 64×64 PNG)
- [ ] Add your logo image to `assets/images/` if you want to replace the inline SVG in `_includes/nav.html` and `_includes/footer.html`
- [ ] Enable GitHub Pages in your repo settings (Settings → Pages → Source → GitHub Actions)
- [ ] Create a `dev` branch so the preview workflow has a target

---

## Uploading to GitHub (Fresh Repo)

If starting from scratch, the cleanest approach is one commit with all files:

```bash
# Clone your empty repo
git clone https://github.com/PyAutoGrader/pyautograder.github.io.git
cd pyautograder.github.io

# Copy all unzipped site files into this folder, then:
git add .
git commit -m "Initial site setup"
git push origin main

# Create the dev branch
git checkout -b dev
git push origin dev
```

After pushing `main`, the production workflow will fire automatically and your site will be live at `pyautograder.github.io` within a minute or two.
