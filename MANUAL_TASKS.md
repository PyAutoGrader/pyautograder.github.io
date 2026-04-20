# Pre-Release Manual Tasks

Things that cannot be done through code edits. Each item explains what to do, how to do it, and what happens if you skip it.

Delete this file after everything is done (or keep it as a changelog).

---

## 1. Compress the heavy homepage images

**What:** Reduce file size on the images that load above the first scroll.

**Format rules:**
- **Logo** stays PNG (or SVG if you have the vector). Logos leak into social unfurls, email signatures, PDF embeds, and screenshot tools that handle WebP inconsistently.
- **Photos** convert to WebP. ~30% smaller than JPEG at equivalent quality for faces.
- **UI screenshots** stay PNG but run through **lossless compression (OxiPNG)**. Preserves crisp text edges. Users who zoom in or click "open image in new tab" still get pristine detail. Tradeoff: smaller savings than WebP, but zero quality loss.

**How:**
1. Open [Squoosh](https://squoosh.app/) (free, browser-based).
2. For each file below, drag it in. On the right-side panel, change "Compress" to the target format and set the quality slider (if applicable) to the value in the table.
3. Download the output and save to `assets/images/`. Files that stay PNG keep their filename - no HTML changes needed. Files converted to WebP need their `<img src>` references updated (see below).

**OxiPNG effort setting:** When you pick OxiPNG, Squoosh shows an "Effort" slider (0-6). Set it to **4**. The slider controls how many compression strategies OxiPNG tries - higher = smaller output at the cost of processing time. Effort 0 barely compresses at all; effort 2 (the default) is OK; effort 4 is the sweet spot (~25-35% savings, few seconds per image); effort 6 only saves another 1-2% for much longer runtime. For 4-5 one-time images, go with 4 or 6.

**Targets:**

| File | Current | Target | Format | Quality | Notes |
|---|---|---|---|---|---|
| `LogoFullSize.png` | 217 KB | under 100 KB | **PNG** (OxiPNG) or **SVG** | lossless | Convert to SVG if you have the vector source; otherwise OxiPNG. |
| `jesse-sestito.png` | 287 KB | under 150 KB | **WebP** | 75-80 | Photo of a face; WebP handles faces well at lower quality. |
| `instructor-gui.png` | 149 KB | under 120 KB | **PNG** (OxiPNG) | lossless | Screenshot with code/UI text. Preserves every pixel. |
| `student-gui.png` | 113 KB | under 90 KB | **PNG** (OxiPNG) | lossless | Screenshot with text. |
| `batch-grading.png` | 78 KB | optional | **PNG** (OxiPNG) | lossless | Already reasonable; below the fold with lazy loading. |

**Tip for screenshots - 2x for crisp retina + zoom:** If you can retake the screenshots at 2x the display size (e.g. export a 1200px-wide screenshot for an image that renders at 600px), do it. Browsers downscale automatically for normal view; retina Macs get sharp rendering; users who zoom or open in a new tab see real detail. Then run through OxiPNG.

**Update references after conversion (WebP only):**

Only `jesse-sestito.png` converts to `.webp` under this plan. Find and replace:
- `jesse-sestito.png` -> `jesse-sestito.webp` in `index.html` (social-proof band) and `_pages/about.md`.

Screenshots stay as `.png` - no HTML changes.

**Why it matters:** About 650 KB of image weight loads before users see the fold. On a slow connection that is 5+ seconds of waiting.

**What happens if you skip it:** The site still works. Lighthouse performance score drops, first-paint is slower, mobile users on spotty wifi will have a worse experience. Not a blocker for a soft launch.

---

## 2. Create the social share image (og:image)

**What:** One 1200x630 PNG that appears when someone shares the site on Twitter, LinkedIn, Slack, Facebook, iMessage.

**How:**
1. Create a new 1200x630 canvas in Figma, Canva, Photopea, or any design tool. Ignore any DPI field - pixel dimensions are what matter for web.
2. Put the PyAutoGrader logo on it, large and centered or left-aligned.
3. Add the tagline "Automated Python grading for educators."
4. Add a "Free. Always." badge in the emerald color (#34d399).
5. Use the navy background (#1a2744) or a navy-to-emerald gradient.
6. Export as PNG and save to `assets/images/og-image.png`.

**Fonts and sizes (match the site):**

| Element | Font | Weight | Size (px) | Size (pt, at 72 DPI) | Size (pt, at 96 DPI) |
|---|---|---|---|---|---|
| Brand name "PyAutoGrader" | Plus Jakarta Sans | 800 (ExtraBold) | 110-130 | 110-130 pt | 83-98 pt |
| Tagline | Plus Jakarta Sans | 500-600 (Medium/SemiBold) | 46-56 | 46-56 pt | 35-42 pt |
| "Free. Always." badge | Plus Jakarta Sans | 700 (Bold) | 24-30 | 24-30 pt | 18-23 pt |

**Which DPI do I use?** Affinity Designer's default DPI for new web documents is **72 DPI**, which makes pt and px interchangeable - just use the px numbers as pt numbers. If you already set your document to 96 DPI (Windows print-ish default) or 300 DPI (print), use the conversion: `pt = px × (72 / document_DPI)`. Check your document DPI at **Document -> Document Setup** (or **File -> Document Setup** in older versions).

**Easier recommendation:** set your document to 72 DPI. pt matches px exactly, no mental math.

Plus Jakarta Sans is free on [Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans) - download the family before you start designing if your tool does not have it. Badge text uses uppercase, tracked letter-spacing ~0.12em, inside the emerald pill.

**Layout and legibility:**
- Keep all text at least 60-80 px inside each edge. Social platforms sometimes crop the outer margins.
- Minimum readable body size at thumbnail preview (~400 px wide) is ~46 px in the source file. Below that it turns to mush in chat clients.
- High contrast: white text on navy, or navy text on the emerald badge. Do not put emerald text on navy - color contrast will fail WCAG.
- Leave negative space. Do not fill all 1200x630 with content. A 40-60% text-coverage feel reads as premium.

**Color palette:**

| Element | Color | Value |
|---|---|---|
| Background | Navy | `#1a2744` |
| Brand name - primary letters | White | `#ffffff` |
| Brand name - accent letters | Emerald | `#34d399` |
| Tagline | Muted white (~70% opacity) | `#b8c5d6` or `rgba(255, 255, 255, 0.70)` |
| Badge fill | Emerald | `#34d399` |
| Badge text | Navy | `#1a2744` |
| Badge glow (optional) | Emerald at 40% | `rgba(52, 211, 153, 0.40)` |

**Where the emerald accent goes:** Color a portion of "PyAutoGrader" itself in emerald. This is a design choice specific to the og:image - on the actual site nav/footer the brand stays solid white, but for a large-scale social share graphic a split-color wordmark reads as more memorable and punchy. Three portion options, ranked:

1. **Last word `Grader`** - recommended. Creates a clean bisected look: "PyAuto" (setup) + "Grader" (payoff). Most legible at thumbnail size.
2. **First two letters `Py`** - nods to Python but can read as if "Py" is the brand and "AutoGrader" is a description.
3. **Middle word `Auto`** - sandwich effect (white-green-white) looks busier. Skip unless you have a specific reason.

**How to color part of "PyAutoGrader" in Affinity Designer:**

1. Select the Artistic Text Tool (`T`).
2. Click on the canvas and type the full brand name in one text frame: `PyAutoGrader`.
3. Still in text-edit mode, drag-select just the portion you want accented. For option 1, drag across the last 6 characters: `Grader`. Double-click a word to quickly select a whole word.
4. With those characters selected, open the Color panel (**Window -> Color**), make sure the **Fill** swatch is active (solid-fill icon, not stroke), and paste `#34d399` into the hex field.
5. Click outside the text frame to finish.

Keep both portions at the same weight (ExtraBold 800) and the same size. The accent should come from color alone, not from making one part smaller or lighter - that keeps the wordmark readable. If coloring the entire text instead of selected letters, you are probably using the Move Tool; switch back to the Text Tool and double-click inside the text first to enter character-edit mode.

**How to build the "Free. Always." pill in Affinity Designer:**

The pill is two separate layered objects - the rounded rectangle shape (the fill) and the text that sits on top (the text). Build them independently so you can adjust either without affecting the other.

1. **Draw the pill shape.** Grab the **Rounded Rectangle Tool** (`M` or from the toolbox). Draw a rectangle at approximately 260 px wide by 56 px tall (adjust after you see the text). In the top toolbar or the **Corner** panel, crank the corner radius all the way up (drag the slider to max, or type a value ~28 px or higher) - this gives you a fully rounded pill shape rather than a "rounded rectangle." Set its **Fill** to `#34d399` (emerald) via the Color panel. Set its **Stroke** to "None" (click the red-slash icon on the stroke swatch).
2. **Add the text on top.** Grab the **Artistic Text Tool** (`T`). Click above or beside the pill and type `FREE. ALWAYS.` (uppercase - badge convention). In the **Character panel** (**Window -> Character**): font Plus Jakarta Sans, weight Bold (700), size 24-30 px, letter-spacing (tracking) ~120 (Affinity shows tracking in thousandths of an em, so 120 = 0.12em). Set the text **Fill** to `#1a2744` (navy).
3. **Center the text inside the pill.** Select both objects (click pill, shift-click text). Open the **Align** toolbar at the top or the **Arrange -> Align** menu. Click **Align Center Horizontally** and **Align Center Vertically** to snap them centered on each other.
4. **Group them** (Cmd/Ctrl+G) so you can move or resize the badge as a single unit later.
5. **Padding check.** The text should have ~14 px of breathing room top/bottom and ~24 px left/right inside the pill. If the pill is too tight, widen or heighten the rectangle (keep the corner radius maxed so it stays a pill).

**How to add the emerald glow behind the badge in Affinity Designer:**

1. Select the badge pill shape (the emerald rounded rectangle).
2. Open the **Effects** panel. If it is not visible, go to **Window -> Effects** (or it may already be in the right-side Studio panel under "FX").
3. Enable **Outer Glow** by checking its box.
4. Click the gear/settings icon next to "Outer Glow" to expand the options.
5. Configure:
   - **Blend Mode:** Screen (for luminous effect) or Normal (for a softer glow)
   - **Opacity:** 40%
   - **Radius:** 50 px
   - **Intensity:** 40%
   - **Color:** `#34d399` (click the color swatch and paste the hex)
6. Click outside the panel to apply.

**Fallback method if the Effects panel glow does not give you the look you want:**

1. Duplicate the pill shape (Cmd/Ctrl+J).
2. Move the duplicate behind the original (Arrange -> Move to Back, or Cmd/Ctrl+Shift+[).
3. With the duplicate selected, apply **Filters -> Blur -> Gaussian Blur** at radius ~50 px.
4. Set its fill to emerald `#34d399` and its opacity to 40%.
5. If the glow feels too tight, scale the duplicate up ~10-15% before blurring.

This manual approach gives you more control over the glow shape and spread than the Effects panel.

**Affinity tip - preview at actual rasterized pixels:** Turn on pixel preview with **View -> View Mode -> Pixel** while designing. The standard vector view lies about how edges and glows will actually render when exported. Pixel preview shows you exactly what the exported PNG will look like at 100% scale. Do the final legibility check in pixel preview before exporting.

The `_config.yml` already points at that filename, so once the file exists, jekyll-seo-tag will inject it into the proper meta tags automatically.

**Why it matters:** Every link someone shares publicly on social or in Slack/Discord/Teams pulls this image. Without it, previews look empty or show a stock broken-image icon.

**What happens if you skip it:** Shared links look bland or broken. The site still works. People clicking through still land fine. A big deal during your "broader announcement" phase, nearly invisible during quiet publish.

---

## 3. Create apple-touch-icon.png

**What:** A 180x180 PNG version of the PyAutoGrader logo for iPhone/iPad home screens.

**How:**
1. Take the existing logo, resize to 180x180 on a square background. Use the brand emerald `#34d399` (or the darker accent `#059669`) or plain white, whichever looks best against the logo.
2. Save as `assets/images/apple-touch-icon.png`.

The `<link rel="apple-touch-icon">` is already in `_layouts/default.html`; it just references a file that does not exist yet.

**Why it matters:** When a user adds the site to their iOS home screen, this is the tile icon.

**What happens if you skip it:** iOS falls back to a blurry screenshot of the site. On Apple devices only. Very low stakes.

---

## 4. Set up Cloudflare Web Analytics

**What:** Free, cookieless, privacy-friendly traffic analytics.

**How:**
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) and create an account if you do not have one.
2. In the sidebar: **Analytics & Logs** -> **Web Analytics**.
3. Click **Add a site** -> **Manual setup**. Do NOT pick "With Cloudflare" (that one requires your DNS to point at Cloudflare, which is impossible for `*.github.io` domains).
4. Enter `pyautograder.github.io` as the hostname.
5. Cloudflare gives you a `<script>` beacon tag. Copy it.
6. Open `_layouts/default.html`. Find the `{% comment %}` block near the bottom of `<body>` that starts with "Cloudflare Web Analytics". Replace the commented example with your actual beacon tag.
7. Commit, push, wait for GitHub Pages to redeploy, then visit the live site from an incognito window. Within ~60 seconds the visit should appear in the Cloudflare dashboard.

**Why it matters:** Without this you have zero visibility into who is visiting, where they are coming from, which pages they read, and which ones they bounce from. Google Search Console only tells you what search queries bring people in - not what they do once they arrive.

**What happens if you skip it:** You launch blind. You still get: Search Console (search queries), GitHub repo Insights (basic visit counts), Formspree (contact form submissions), GitHub Releases (download counts). That is enough for a quiet publish. Missing analytics starts to hurt once you want to know "is the broader announcement working" or "which referrer is sending the best visitors."

---

## 5. Email Valpo communications about the logo

**What:** Get written permission to use the Valparaiso University wordmark or logo on the homepage social-proof band.

**Who to email:**
- **First try:** Valpo's central University Communications / Marketing office. Most universities gate brand asset use there. Search "Valparaiso University brand guidelines" or "Valparaiso University marketing office" for the current contact.
- **Alternative:** The College of Engineering communications contact, if Valpo has a college-level brand rep. They can forward you or advocate with central marketing.
- **Copy your department chair** as a courtesy if this is your first request like this. It signals the project is real and supported at the department level.

**Email draft (edit to match your tone):**

> Subject: Brand asset permission request - PyAutoGrader (faculty project)
>
> Hello,
>
> My name is Jesse Sestito. I am an Engineering Professor at Valparaiso University.
>
> I have developed a free Python grading tool called PyAutoGrader that I use in my own engineering courses. Other universities have begun asking about it, so I have set up a marketing website at https://pyautograder.github.io/ to make it easier for faculty elsewhere to adopt.
>
> The homepage includes a short "in use at Valparaiso University" acknowledgment (screenshot attached). It currently shows my photo and a text line. I would like to add the official Valpo wordmark or logo to that area so visiting faculty recognize the institutional context.
>
> Could you let me know whether this use is permitted, and if so, send me the preferred logo file and any usage guidelines? I am happy to make adjustments to match Valpo's brand standards, add any attribution language you require, or move the placement.
>
> The tool is free and will remain free - there is no commercial intent. I simply want to accurately credit the institution where the work has grown up.
>
> Thanks for your time. Let me know if any additional context would help.
>
> Best,
> Jesse Sestito
> Engineering Professor, Valparaiso University
> [department] | [campus phone or email]

OR

> "I'm Jesse Sestito, faculty in [department]. I created PyAutoGrader, a free open-source Python grading tool I use in my own courses. My marketing site acknowledges that it is used at Valpo. I would like permission to display the Valpo wordmark/logo on this page [link]. Happy to follow any brand guideline requirements."


**Attachments:** one screenshot of the homepage social-proof band showing exactly where the logo would sit, plus a link to the live site.

**Expected turnaround:** 1-3 weeks is typical. Universities are slow but generally say yes for legitimate faculty projects. They may send you a specific logo file with usage rules (minimum display size, clear space around the mark, approved color variants). Follow whatever they send.

**Install once permission arrives (3 steps):**

1. **Save the logo file** they send you to `assets/images/`. Name it something obvious like `valpo-logo.png` (or `.svg` if they send a vector - that is ideal; or `.webp` if you choose to compress a raster version). If they provide a specific approved filename, use that.

2. **Fill the HTML slot.** Open `index.html`, find the `social-proof-logo-slot` div around line 104. Replace:

   ```html
   <div class="social-proof-logo-slot" aria-hidden="true">
     <!-- Valpo logo goes here once permission is granted. Unhide via CSS when ready. -->
   </div>
   ```

   With:

   ```html
   <div class="social-proof-logo-slot">
     <img src="{{ '/assets/images/valpo-logo.png' | relative_url }}" alt="Valparaiso University">
   </div>
   ```

   Note the removal of `aria-hidden="true"` - it is now real visible content, not a placeholder.

3. **Unhide the slot.** Open `assets/css/main.css`, find the `.social-proof-logo-slot` rule around line 3254, change `display: none;` to `display: flex;`.

That is it. Responsive behavior, sizing (max 48 px tall), and spacing are already in place. On mobile the logo stacks below Jesse's card with a top border separator.

**Why it matters:** An institution logo is stronger social proof than a text mention. Visitors who do not know Jesse personally anchor credibility in the university name.

**What happens if you skip it:** The social-proof band still shows Jesse's photo and the "In daily use at Valparaiso University's College of Engineering" line. Perfectly serviceable. Never a launch blocker. Add the logo post-launch whenever permission comes through - the code slot is already in place.

---

## Summary: what is safe to skip for a quiet launch?

| Task | Skip for quiet publish? | Skip for broader announcement? |
|---|---|---|
| Compress images | Yes (worse perf, still works) | No (hurts first impression) |
| og:image | Yes (no one is sharing yet) | No (shared links look broken) |
| apple-touch-icon | Yes | Probably still yes |
| Cloudflare Analytics | Yes (Search Console covers baseline) | No (you need to measure the announcement) |
| Valpo logo | Yes (text is adequate) | Yes (text is adequate; logo is a bonus) |

Priority order if you only have time for three: **Cloudflare analytics -> og:image -> compress images.**
