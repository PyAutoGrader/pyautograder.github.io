# PyAutoGrader Website — New Chat Handoff

## Prompt to Use

Paste this at the start of your new conversation:

---

I'm continuing development of the **PyAutoGrader website** — a Jekyll site hosted on GitHub Pages at `pyautograder.github.io` under the PyAutoGrader GitHub organization. I'm uploading the key files from the project so you have full context.

Here is a summary of the project and decisions already made:

### What PyAutoGrader Is
A Python autograding tool for educators with three products:

- **Offline Autograder** — instructors and students each download executables from the website. The instructor creates an assignment file (`.agr`) which the student loads into their app. The student exports a results PDF and submits to their LMS. Always free.
- **Online Autograder** — a hosted platform with separate instructor and student clients. Instructor accounts are by request only. Free tier available, paid tier coming later.
- **PyAutoGrader Classic** — a separate open-source project (its own GitHub repo, URL TBD) where instructors build and distribute their own executable. Different style, not deprecated. Low-key advertised at the bottom of the Offline page only.

### Site Architecture
- **Jekyll** site with GitHub Actions workflows for deployment
- `main` branch → deploys to `pyautograder.github.io` (production)
- `dev` branch → deploys to `pyautograder.github.io/dev` (preview)
- Both deploy to a `gh-pages` branch; GitHub Pages is set to deploy from that branch
- All page content files live in `_pages/` (except `index.html` which stays in root)
- `_config.yml` has `include: [_pages]` so Jekyll picks them up
- Documentation lives in `_docs/` as pure markdown

### Page Structure
| URL | File | Notes |
|-----|------|-------|
| `/` | `index.html` | Home/landing page |
| `/offline/` | `_pages/offline.md` | Instructor-focused, OS download detection |
| `/online/` | `_pages/online.md` | Online product page |
| `/classic/` | `_pages/classic.md` | PyAutoGrader Classic info, GitHub link placeholder |
| `/student-downloads/` | `_pages/student-downloads.md` | Hub with two cards (Offline / Online) |
| `/student/offline/` | `_pages/student/offline.md` | Student offline landing page |
| `/student/online/` | `_pages/student/online.md` | Student online landing page |
| `/pricing/` | `_pages/pricing.md` | Three-tier pricing table |
| `/contact/` | `_pages/contact.md` | Formspree contact form (ID: xpqjlrqa) |
| `/about/` | `_pages/about.md` | About page |
| `/faq/` | `_pages/faq.md` | FAQ accordion |
| `/changelog/` | `_pages/changelog.md` | Placeholder, no releases yet |
| `/docs/getting-started/` | `_docs/getting-started.md` | Docs landing |
| `/docs/offline/*` | `_docs/offline/` | Offline docs (placeholders) |
| `/docs/online/*` | `_docs/online/` | Online docs (placeholders) |

### Layout System
Each page uses a dedicated layout — **no HTML in content files**. Pages are either pure front matter (YAML key-value pairs) or pure markdown prose (docs). Layouts live in `_layouts/`:

| Layout | Used By |
|--------|---------|
| `default.html` | Base HTML shell |
| `product.html` | Generic product pages (online, classic, about) |
| `offline.html` | Offline page — includes OS detection JS + diagram |
| `student-product.html` | Student landing pages — includes OS detection JS |
| `downloads.html` | Student Downloads hub |
| `pricing.html` | Pricing page |
| `faq.html` | FAQ page |
| `contact.html` | Contact form |
| `about.html` | About page |
| `changelog.html` | Changelog |
| `doc.html` | Documentation pages with sidebar |

### Design System
- **Colors:** Navy (`#1a2744`) primary, Green (`#4ade80` / `#22c55e`) accent
- **Font:** Sora (Google Fonts) — 700/800 weights for headings
- **Mono font:** JetBrains Mono — used in code blocks and filenames
- **All styles** in `assets/css/main.css`
- **Logo:** Currently an inline SVG in `_includes/nav.html` and `_includes/footer.html`. A PNG logo can be dropped into `assets/images/logo.png` and referenced with an `<img>` tag to replace it. Favicon goes at `assets/images/favicon.png`.

### Key Conventions
- To add a new page: create a `.md` file in `_pages/`, set `layout`, `title`, `permalink`, and content fields in front matter. Add to `_config.yml` include if in a subfolder.
- To add a doc page: create a `.md` file in `_docs/`, add to sidebar in `_layouts/doc.html`
- Download URLs in `_pages/offline.md`, `_pages/student/offline.md`, `_pages/student/online.md` are placeholders (`"#"`) — replace with real GitHub Release URLs when available
- PyAutoGrader Classic GitHub URL is a placeholder (`"#"`) in `_pages/classic.md` and `_pages/offline.md`
- Formspree form ID is already set: `xpqjlrqa`

### Outstanding / Not Done Yet
- Real download links (Windows/macOS/Linux executables not yet released)
- PyAutoGrader Classic GitHub repo URL
- Real favicon and logo PNG files
- Online Autograder page needs updating when online product is further along
- Docs pages are mostly placeholders pending product release
- Paid tier pricing TBD

---

## Files to Upload

Upload these files when starting the new chat. They give Claude full context
on the current state of every part of the site.

### Essential (upload these first)
| File | Why |
|------|-----|
| `assets/css/main.css` | Full design system — colors, layout, components |
| `_layouts/default.html` | Base HTML shell |
| `_layouts/offline.html` | Most complex layout, includes OS detection |
| `_layouts/product.html` | Used by most content pages |
| `_includes/nav.html` | Navigation |
| `_includes/footer.html` | Footer |
| `_config.yml` | Jekyll config, includes, plugins |
| `index.html` | Home page |
| `_pages/offline.md` | Most developed content page |

### Upload if working on specific areas
| File | When to upload |
|------|----------------|
| `_layouts/student-product.html` | Working on student pages |
| `_layouts/pricing.html` | Working on pricing |
| `_layouts/contact.html` | Working on contact form |
| `_layouts/doc.html` | Working on documentation |
| `_pages/pricing.md` | Working on pricing content |
| `_pages/contact.md` | Working on contact content |
| `_pages/classic.md` | Working on Classic page |
| `_pages/student/offline.md` | Working on student offline page |
| `_pages/student/online.md` | Working on student online page |
| `_pages/student-downloads.md` | Working on student downloads hub |
| `_includes/offline-diagram.svg` | Working on offline workflow diagram |
| `.github/workflows/deploy-dev.yml` | Working on CI/CD |
| `.github/workflows/deploy-production.yml` | Working on CI/CD |

### Not necessary to upload
- `_docs/` files — placeholders, Claude can recreate the pattern from one example
- `about.md`, `faq.md`, `changelog.md` — simple front matter, easy to recreate
- `Gemfile`, `_config.dev.yml` — unlikely to need changes
