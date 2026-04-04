# Placeholders

A list of all placeholder content on the website that needs to be replaced with real assets.

---

## 1. About Page - Profile Photo

**Page:** `/about/`
**File:** `_pages/about.md` (line ~50)

Currently shows a dashed box with "Photo coming soon" text.

**What to add:** A headshot photo of Jesse Sestito.

**How to add it:**
1. Save the image to `assets/images/` (e.g., `jesse-sestito.jpg`). Recommended size: 560x680px or similar portrait aspect ratio.
2. In `_pages/about.md`, find the `about-photo` div and replace its contents:

```html
<!-- Replace this: -->
<div class="about-photo">
  <div class="about-photo-icon">👤</div>
  <span>Photo coming soon</span>
</div>

<!-- With this: -->
<div class="about-photo" style="border:none; background:none;">
  <img src="/assets/images/jesse-sestito.jpg" alt="Jesse Sestito" />
</div>
```

The CSS already handles `img` inside `.about-photo` (full width, object-fit cover, border-radius).

---

## 2. Homepage - Server Analytics Screenshot

**Page:** `/` (homepage)
**File:** `index.html` (line ~199)

Currently shows a dashed box with "Screenshot: Server analytics dashboard" text inside the Server Spotlight section.

**What to add:** A screenshot of the submission server's analytics dashboard showing score distributions, trends, or similar.

**How to add it:**
1. Save the screenshot to `assets/images/` (e.g., `server-dashboard.png`). Recommended width: 800-1200px.
2. In `index.html`, find the `screenshot-placeholder` div and replace it:

```html
<!-- Replace this: -->
<div class="screenshot-placeholder">
  Screenshot: Server analytics dashboard
</div>

<!-- With this: -->
<img src="/assets/images/server-dashboard.png" alt="Server analytics dashboard" style="width:100%; border-radius:12px; border:1px solid var(--gray-200);" />
```

---

## 3. Homepage - Batch Grading Screenshot

**Page:** `/` (homepage)
**File:** `index.html` (line ~264)

Currently shows a dashed box with "Screenshot: Batch grading interface in instructor app" text.

**What to add:** A screenshot of the instructor application's batch grading interface.

**How to add it:**
1. Save the screenshot to `assets/images/` (e.g., `batch-grading.png`). Recommended width: 640-960px.
2. In `index.html`, find the second `screenshot-placeholder` div and replace it:

```html
<!-- Replace this: -->
<div class="screenshot-placeholder" style="max-width: 640px; margin: 32px auto 0;">
  Screenshot: Batch grading interface in instructor app
</div>

<!-- With this: -->
<img src="/assets/images/batch-grading.png" alt="Batch grading interface" style="max-width:640px; width:100%; margin:32px auto 0; display:block; border-radius:12px; border:1px solid var(--gray-200);" />
```

---

## 4. Download Page - Example .agrx Files

**Page:** `/offline/`
**File:** `_pages/offline.md` (line ~102)

Currently shows a "Coming Soon" disabled button.

**What to add:** Example .agrx files that instructors can open in the editor to see how tests are configured.

**How to add it:**
1. Attach the files to a GitHub release, or host them in the repo under `assets/examples/`.
2. In `_pages/offline.md`, replace the disabled span with a real link:

```html
<!-- Replace this: -->
<span class="btn btn-sm btn-disabled">Coming Soon</span>

<!-- With this: -->
<a href="URL_TO_FILE" class="btn btn-outline btn-sm">Download</a>
```

---

## 5. Download Page - Getting Started Guide (PDF)

**Page:** `/offline/`
**File:** `_pages/offline.md` (line ~108)

Currently shows a "Coming Soon" disabled button.

**What to add:** A step-by-step PDF guide for creating a first assignment and distributing it to students.

**How to add it:**
Same as above. Save the PDF to `assets/examples/` or attach to a GitHub release, then replace the disabled span with a download link.

---

## 6. Download Page - Example Solution File

**Page:** `/offline/`
**File:** `_pages/offline.md` (line ~114)

Currently shows a "Coming Soon" disabled button.

**What to add:** A sample .py solution file showing how to structure code for solution-comparison tests.

**How to add it:**
Same pattern as items 4-5.

---

## 7. Download Page - Example Data File

**Page:** `/offline/`
**File:** `_pages/offline.md` (line ~120)

Currently shows a "Coming Soon" disabled button.

**What to add:** A sample CSV data file demonstrating how bundled data files work with student assignments.

**How to add it:**
Same pattern as items 4-5.

---

## 8. Download Page - Server Config Template

**Page:** `/offline/`
**File:** `_pages/offline.md` (line ~126)

Currently shows a "Coming Soon" disabled button.

**What to add:** A starter `server_config.json` with documented fields.

**How to add it:**
Same pattern as items 4-5.

---

## Summary

| # | Location | What's Needed | Priority |
|---|----------|---------------|----------|
| 1 | About page | Profile photo | Medium |
| 2 | Homepage | Server dashboard screenshot | High |
| 3 | Homepage | Batch grading screenshot | High |
| 4 | Download page | Example .agrx files | Low |
| 5 | Download page | Getting Started PDF | Low |
| 6 | Download page | Example solution .py | Low |
| 7 | Download page | Example data CSV | Low |
| 8 | Download page | server_config.json template | Low |
