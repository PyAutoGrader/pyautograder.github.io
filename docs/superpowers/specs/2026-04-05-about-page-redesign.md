# About Page Redesign - Design Spec

## Context

The About page is visually flat compared to the rest of the site - walls of body text, emoji icons, and a cramped bio section. The homepage has animated cards, workflow steps, and product screenshots. This redesign gives the About page its own identity: academic and honest rather than marketing-forward. It combines two redundant sections, replaces emoji with clean cards, and adds a definition callout for the Mastery section.

## Design Direction

**Academic / honest.** The About page should feel like an engineering professor wrote it, not a marketing team. Text-driven, generous whitespace, minimal visual widgets. Let the writing carry the page.

## Files to Modify

- `_pages/about.md` - Full HTML restructure
- `assets/css/main.css` - Replace existing ABOUT PAGE styles, add new ones

## Page Structure (5 sections)

### 1. Hero - Minimal

Keep the existing `.page-hero` pattern. Dark background with grid pattern overlay, title + subtitle. No stats, no cards, no visual.

- Title: "About PyAutoGrader"
- Subtitle: "Built by an educator, for educators."
- No changes to the hero markup or CSS.

### 2. Origin - Combined Story + Bio

Merges the old "The Story" and "The Developer" sections into one. Photo sits alongside the narrative text in a two-column grid.

**Layout:**
- Section header: eyebrow "Origin" + title "The Story" (centered, existing `.section-header` pattern)
- Grid: `240px 1fr`, gap 40px, max-width 820px, centered
- Left column: Photo (240x300px) with emerald border (2px solid `--emerald-dark`) and decorative offset rectangle behind it (absolute positioned, 8px offset, emerald border at 25% opacity). Name, title, university below photo, centered.
- Right column: Original story text (3 paragraphs at 15px/1.85 line-height in `--text-muted`). Then a subtle emerald divider (48px wide, 2px tall, gradient to transparent). Then bio paragraphs (14px, lighter `--gray-500` color) providing personal/academic context.
- Remove the "open source" line from bio text (project is not open source).
- Background: white (default `.landing-section`)

**Responsive (900px):** Stack to single column, center photo, center text.

### 3. Philosophy - Minimal Stacked Cards

Three principles as vertically stacked bordered cards with no icons.

**Layout:**
- Section header: eyebrow "Principles" + title "The Philosophy" (centered)
- Vertical flex column, gap 12px, max-width 620px, centered
- Each card: padding 20px 24px, border 1.5px solid `--gray-200`, border-radius `--radius-lg`, white background
- Card content: bold title (font-size ~1.05rem, weight 700, `--gray-900`) + paragraph (font-size ~0.88rem, `--text-muted`, line-height 1.65)
- No hover effects, no icons, no emoji
- Background: `--bg-light-alt` (alternating section)

**Content (unchanged):**
1. "Free. Always." - Educators already face enough budget constraints...
2. "Real Skills" - Students learn by setting up Python...
3. "Your Data, Your Infrastructure" - Grading results and student code stay...

**Responsive (900px):** Cards already stack naturally since they're vertical.

### 4. Mastery Based Learning - Definition Callout + Split Cards

**Layout:**
- Section header: eyebrow "Pedagogy" + title "Mastery Based Learning" (centered)
- Definition callout: border-left 3px solid `--emerald`, padding 16px 24px, subtle emerald background tint (rgba emerald ~0.04), border-radius 0 8px 8px 0. Italic text defining the core idea. Max-width 660px, centered.
- Below callout: two-column grid (1fr 1fr), gap 14px, max-width 660px, centered
  - "For Students" card: title + paragraph about running grader, getting feedback, iterating
  - "For Instructors" card: title + paragraph about class time shifting to new concepts
- Cards: padding 20px, `--bg-light-alt` background, border 1.5px solid `--gray-200`, border-radius `--radius-lg`
- Background: white (default `.landing-section`)

**Responsive (768px):** Split cards stack to single column.

### 5. CTA - Get in Touch

Keep existing structure. Dark background with grid pattern, centered heading, subtitle, two buttons (Contact Us primary, Download outline). Clean up inline styles to use proper CSS classes.

## Content Changes

- **Remove from bio:** The sentence "The project is open source and actively maintained." (first sentence of the third bio paragraph). The remainder of that paragraph ("I use it in my own courses every semester, which means the features reflect real classroom needs rather than hypothetical use cases.") is kept as its own paragraph.
- **All other copy preserved exactly** as written in the current page.
- No em dashes anywhere (per style rules). Use hyphens or spaced short dashes.

## New CSS Classes

All styles go in the ABOUT PAGE section of `main.css`, replacing existing about styles.

**Origin section:**
- `.about-origin` - The two-column grid container
- `.about-origin-photo` - Photo wrapper with emerald border + decorative offset
- `.about-origin-name` - Name/title/university block below photo
- `.about-origin-text` - Narrative text column
- `.about-origin-divider` - Emerald gradient divider between story and bio
- `.about-origin-bio` - Bio paragraphs (smaller, lighter text)

**Philosophy section:**
- `.about-principles` (updated) - Vertical flex column instead of 3-column grid
- `.about-principle` (updated) - Remove text-align center, remove hover effects
- `.about-principle-icon` - Remove entirely (no more emoji icons)

**Mastery section:**
- `.about-mastery-callout` - Definition callout with emerald left border
- `.about-mastery-cards` - Two-column grid for student/instructor cards
- `.about-mastery-card` - Individual benefit card

**Responsive updates at 900px:**
- `.about-origin` stacks to single column, centers photo
- `.about-mastery-cards` stacks to single column at 768px

## Verification

1. Run Jekyll server (`bundle exec jekyll serve --port 4001`)
2. Check `/about/` at desktop width - all 5 sections render correctly
3. Verify photo displays properly with emerald border treatment
4. Check at 768px and 375px for responsive stacking
5. Verify no content was lost from the original page
6. Confirm "open source" line is removed
7. Confirm no em dashes in any text
