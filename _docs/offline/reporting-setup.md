---
layout: doc
title: Reporting Setup
section: Offline Autograder
nav_order: 9
permalink: /docs/offline/reporting-setup/
prev_doc: /docs/offline/roster-setup
prev_title: Roster Setup
next_doc: /docs/offline/server-setup
next_title: Server Setup
---

PyAutoGrader supports multiple reporting channels for collecting student submission results. Configure any combination in the instructor editor under **Reporting Channels**.

## Channel Overview

| Channel | What It Collects | Can Be Required? | Needs Internet? |
|---------|-----------------|-----------------|-----------------|
| **PDF Export** | Results summary as PDF | Yes | No |
| **Email** | Scores + code to your inbox | No (silent notification) | Yes |
| **Google Sheets** | Scores to a spreadsheet | No (silent notification) | Yes |
| **Submission Server** | Full results + code to dashboard | Yes | Yes |
| **Webhook** | JSON payload to a custom URL | No (silent notification) | Yes |

PDF export and the submission server **can be required** by instructors - students must export or submit before grading completes. Email and Google Sheets are **silent background notifications** - they happen automatically and cannot be required.

Each channel operates independently. If one fails (no internet), submissions are queued locally and retried automatically on the next app launch or every 5 minutes.

---

## Email

Student results are emailed to you automatically on each submission. Each email includes the student's name, scores, per-test results, and the full student code as both inline text and an attachment.

### Gmail Setup

1. **Enable 2-Step Verification** on your Google account at [myaccount.google.com/security](https://myaccount.google.com/security).
2. **Create an App Password** at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords):
   - Select app: **Mail**
   - Select device: **Other** (type "PyAutoGrader")
   - Click **Generate** and copy the 16-character password
3. **Configure** in the instructor editor under **Email Settings**:

   | Field | Value |
   |-------|-------|
   | SMTP Server | `smtp.gmail.com` |
   | SMTP Port | `587` |
   | From Email | Your Gmail address |
   | Password | The 16-character App Password |
   | To Email | Where you want submissions sent |

### Outlook / Office 365

| Field | Value |
|-------|-------|
| SMTP Server | `smtp.office365.com` |
| SMTP Port | `587` |
| From Email | Your Outlook address |
| Password | Your Outlook password (or App Password if MFA is enabled) |
| To Email | Where you want submissions sent |

Some institutions block SMTP access. Check with your IT department if emails are not being delivered.

### Institutional / Custom SMTP

| Field | Value |
|-------|-------|
| SMTP Server | Your institution's SMTP host (e.g., `smtp.university.edu`) |
| SMTP Port | `587` (TLS) or `465` (SSL) - check with IT |
| From Email | Your institutional email address |
| Password | Your email password or app-specific password |
| To Email | Where you want submissions sent |

### Email Tips

- Create an inbox rule to move PyAutoGrader emails to a folder. The subject line format (`Course, Assignment, Student, Timestamp`) makes filtering easy.
- The "From" and "To" can be the same address - you can send submissions to yourself.
- SMTP credentials are stored inside the encrypted `.agr` file. Students cannot read them.
- If the student is offline, emails are queued locally and sent on the next app launch with internet.

---

## Google Sheets

Student scores are posted to a Google Sheet via an Apps Script web app. This gives you a live spreadsheet gradebook that updates as students submit.

### Setup

1. **Create a Google Sheet** at [sheets.google.com](https://sheets.google.com).
2. **Open Apps Script**: Go to `Extensions > Apps Script`.
3. **Paste the script**: Delete any existing code and paste the contents of the `google_sheets_apps_script.js` file (included in the PyAutoGrader download).
4. **Save** the script (`Ctrl+S`).
5. **Deploy**: Click `Deploy > New deployment`:
   - Type: **Web app**
   - Execute as: **Me** (your Google account)
   - Who has access: **Anyone**
6. **Authorize** the script when prompted.
7. **Copy the URL** (looks like `https://script.google.com/macros/s/.../exec`).
8. **Configure** in the instructor editor: paste the URL into `Reporting Channels > Google Sheets Webhook URL`.
9. **Export** the `.agr` file for students.

### What You Get

Each submission adds a row with: student name, computer name, username, course, section, semester, instructor, assignment name, filename, points earned/total, percentage, and per-test PASS/FAIL columns.

### Updating the Script

If you update the Apps Script code, you must create a **new deployment** (not just save). Go to `Deploy > Manage deployments` and edit the existing one, or create a new deployment and update the URL in the instructor editor.

---

## Submission Server

The self-hosted submission server collects full results including student code, provides a web dashboard, analytics, plagiarism detection, and CSV export. This is the most feature-rich option.

### Setup

1. Download and start the submission server (see [Server Setup](/docs/offline/server-setup/)).
2. In the instructor editor, configure under **Reporting Channels**:
   - **REST API URL**: `http://YOUR_SERVER:5000/api/submit`
   - **API Key**: The server's API key (defaults to the server password if not set separately)
3. Export the `.agr` file for students.

### What You Get

- Full test results with scores
- Student code files (stored on your server)
- Dashboard with analytics, plagiarism detection, and code search
- Canvas-compatible CSV export
- Assignment deadlines and roster management

See [Server Setup](/docs/offline/server-setup/) for full installation and feature documentation.

---

## Webhook

For custom integrations, set a webhook URL to receive a POST request with a JSON payload on each student submission.

Configure in the instructor editor under **Reporting Channels > Webhook URL**. The payload includes all submission data (student info, scores, test results).

---

## Combining Channels

Common combinations:

- **PDF + Email** - Simple setup. Students export PDF for your LMS, email gives you a backup.
- **Server only** - Full-featured single solution with dashboard, analytics, and plagiarism detection.
- **Server + Google Sheets** - Server for detailed analysis, Sheets for a quick glance at grades.
- **All channels** - Maximum redundancy. Each operates independently.

---

## Troubleshooting

**Google Sheets not receiving data** - Verify the URL is the deployment URL (contains `/exec`), not the script editor URL. Make sure the deployment access is set to "Anyone". Check the Apps Script execution log under `Extensions > Apps Script > Executions`.

**Server not receiving data** - Verify the student app can reach the server (check firewall, port). The API key in the `.agr` must match the server's key. The submit URL must end with `/api/submit`.

**Submissions not being sent** - The queue flushes on app startup and every 5 minutes. Check the queue file:
- Windows: `%APPDATA%\PyAutoGrader\Offline\submission_queue.jsonl`
- macOS: `~/Library/Application Support/PyAutoGrader/Offline/submission_queue.jsonl`
- Linux: `~/.config/PyAutoGrader/Offline/submission_queue.jsonl`

If the file has entries, submissions are queued but have not been delivered yet (likely a network issue).
