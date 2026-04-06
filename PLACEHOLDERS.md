# Placeholders

A list of all placeholder content on the website that needs to be replaced with real assets.

---

## ~~1. About Page - Profile Photo~~ DONE

Replaced with `assets/images/jesse-sestito.jpg`.

---

## ~~2. Homepage - Server Analytics Screenshot~~ DONE

Replaced with CSS-only analytics mini-dashboard preview showing stat cards and chart representations based on actual server features.

---

## ~~3. Homepage - Batch Grading Screenshot~~ DONE

Replaced with `assets/images/batch-grading.png`.

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
| ~~1~~ | ~~About page~~ | ~~Profile photo~~ | ~~DONE~~ |
| ~~2~~ | ~~Homepage~~ | ~~Server analytics preview~~ | ~~DONE~~ |
| ~~3~~ | ~~Homepage~~ | ~~Batch grading screenshot~~ | ~~DONE~~ |
| 4 | Download page | Example .agrx files | Low |
| 5 | Download page | Getting Started PDF | Low |
| 6 | Download page | Example solution .py | Low |
| 7 | Download page | Example data CSV | Low |
| 8 | Download page | server_config.json template | Low |
