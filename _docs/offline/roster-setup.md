---
layout: doc
title: Roster Setup
section: Offline Autograder
nav_order: 8
permalink: /docs/offline/roster-setup/
prev_doc: /docs/offline/batch-grading
prev_title: Batch Grading
next_doc: /docs/offline/reporting-setup
next_title: Reporting Setup
---

Roster management is optional. By default, students type their name freely. If you want to validate student identity against a roster, configure one of the options below.

## Name Entry Modes

Configure the mode in the instructor editor under **Student Identity**.

| Mode | Behavior | If Not Found |
|------|----------|--------------|
| **Name** (default) | Freeform text entry. No roster needed. | N/A |
| **Username** (strict) | Student types a username/ID. Must match the roster. | Grading blocked |
| **Username or Name** | Student types a username/ID. If found, resolved to display name. If not, allowed as freeform. | Allowed as freeform |

The instructor also sets a **Field Label** (e.g., "Student ID", "Email", "Last Name") that the student sees instead of "Your Name".

## Roster Format

The roster is a simple two-column CSV mapping usernames to display names:

```csv
username,display_name
jdoe,John Doe
12345,Bob Wilson
jane.smith,Jane Smith
```

- The first row is a header (automatically skipped)
- Students type their **username** - the app resolves it to the **display name**
- Both values are recorded in submissions

---

## Option 1: Bundled CSV

Best for small classes, stable rosters, and offline-only environments.

The roster CSV is embedded directly in the `.agr` file.

### Setup

1. Create a CSV file with two columns: `username, display_name`.
2. In the instructor editor, expand **Student Identity**.
3. Set the mode to **Username** or **Username or Name**.
4. Click **Import CSV** and select your file.
5. The count updates (e.g., "25 students in bundled roster").
6. Export the `.agr` file - the roster is encrypted inside.

### Updating the Roster

To update (e.g., for late adds), re-import the CSV, re-export the `.agr` file, and redistribute to students.

### Limitations

Roster updates require redistributing the `.agr` file. Best when the roster is stable before the semester starts.

---

## Option 2: Google Sheets

Best for easy updates, late adds, and classes where students have internet access.

The student app fetches the roster live from a published Google Sheet each time an assignment is selected.

### Setup

1. Create a Google Sheet with two columns (A = username, B = display name).
2. Go to **File > Share > Publish to web**.
3. Select the specific sheet tab (not "Entire Document").
4. Change the format to **Comma-separated values (.csv)**.
5. Click **Publish** and copy the URL (contains `output=csv`).
6. In the instructor editor, expand **Student Identity**.
7. Set the mode and paste the URL into **Roster URL**.
8. Export the `.agr` file and distribute.

### Late Adds

Add the student to the Google Sheet. The next time any student selects the assignment, they get the updated roster automatically. No `.agr` redistribution needed.

### Notes

- Data stays in memory only - never cached to the student's disk.
- **Requires internet** - the fetch fails if the student is offline.
- The published CSV updates within a few minutes of editing the sheet.
- You can share the Google Sheet with TAs for editing.

---

## Option 3: REST API Server

Best for instructors already running the PyAutoGrader submission server.

The student app fetches the roster from the server's API endpoint.

### Setup

1. Start the submission server (see [Server Setup](/docs/offline/server-setup/)).
2. Open the dashboard and go to the **Roster** page.
3. Upload a CSV file or add students manually.
4. In the instructor editor, set **Roster URL** to `http://YOUR_SERVER:5000/api/roster`.
5. Make sure the **REST API Key** is set under Reporting Channels (same key is used for both submissions and roster).
6. Export the `.agr` file and distribute.

### Late Adds

Add the student via the server dashboard. No `.agr` redistribution needed.

### Server Roster Management

The server roster page provides:
- **CSV upload** - bulk import (replaces existing entries for that course/section/semester)
- **Add single student** - quick form for individual additions
- **Remove** - delete individual students
- **Duplicate detection** - warns about duplicate usernames
- **Filter** by course, section, and semester

---

## Combined Strategy: Remote URL + Bundled CSV

For maximum reliability, combine a remote roster source with a bundled CSV:

- **Remote URL** (Google Sheet or REST API) is the **primary** source - always fetched first
- **Bundled CSV** is the **offline fallback** - used when the remote fetch fails

### Setup

1. Configure the **Roster URL** (Google Sheet or REST API) as described above.
2. Also **Import CSV** to bundle a baseline roster in the `.agr` file.
3. Export and distribute.

### Fallback Chain

1. Fetch from remote URL - success? Use this roster.
2. Remote failed (offline)? Bundled CSV exists? Use bundled roster.
3. No roster available:
   - **Name** mode: Fine, no roster needed.
   - **Username or Name** mode: Falls back to freeform entry.
   - **Username** (strict) mode: **Grading blocked**.

This is recommended when using strict mode and students may not always have internet (lab environments, field settings).

---

## Troubleshooting

**"Username not found" but the student is on the roster** - Usernames are matched case-insensitively. Check for leading/trailing spaces in the roster. If using a Google Sheet, make sure the published version is up to date.

**"Cannot verify your username"** - This appears when strict mode is configured, the student is offline, and no bundled roster exists. Either import a bundled CSV for offline support, or have the student connect to the internet.

**Google Sheet URL not working** - Make sure you published as CSV (not "Web page"). The URL should contain `output=csv`. Verify the correct sheet tab is selected.

**REST API not returning data** - Verify the API key matches the server's key. Check that the course name, section, and semester match exactly what was entered in the roster dashboard. The URL should be `/api/roster` (not `/api/submit`).

**Students see different rosters** - Each `.agr` file has its own bundled roster. If you exported HW1.agr before adding a student and HW2.agr after, they will have different bundled rosters. Use a remote URL source so all `.agr` files fetch the same live roster.
