---
layout: page
title: Self-Hosted Submission Server
subtitle: A full-featured Flask server you run on your own infrastructure.
permalink: /server/
---

<div class="page-intro">
  The PyAutoGrader submission server gives you a complete dashboard for managing student
  submissions, analyzing grades, detecting plagiarism, and exporting to your LMS. Run it on
  your own machine or campus server - your data stays on your infrastructure.
</div>

## Quick Start

The server runs with Python and a few dependencies. Start it with a single command:

```
pip install -r requirements.txt
python submission_server.py --username admin --password YOUR_PASSWORD
```

That gives you a dashboard at `http://localhost:5000/` with a SQLite database that requires zero configuration.

---

## Features

### Dashboard
Browse all submissions filtered by course, assignment, or student. Click into any submission
to see full test results and the student's code.

### Analytics
- Score distribution charts
- Submission trends over time
- Assignment difficulty analysis
- Student progress tracking
- At-risk student identification

### Plagiarism Detection
Pairwise code similarity analysis across all submissions for an assignment.

- **Code similarity** - Compares functional code with comments stripped
- **Comment similarity** - Compares only comment text
- **Combined score** - Weighted metric (70% code, 30% comments)
- **Side-by-side diff view** with syntax highlighting
- Color-coded severity: red (80%+), orange (50-79%), green (below 50%)

### Code Search
Search across all submitted code for specific patterns. Useful for detecting AI-generated
code patterns or verifying students used required constructs.

### Roster Management
Upload a CSV roster, add students manually, or let the student app fetch the roster
from your server's API. Supports duplicate detection and late adds.

### Assignment Deadlines
Set per-assignment cutoff dates with per-student overrides for accommodations or extensions.

### Export
- **Canvas-compatible CSV** - Import grades directly into Canvas LMS
- **Standard CSV** - Full gradebook with all test results

---

## Require Student Submission

Instructors can configure assignments so grading is restricted unless the student is connected
to the server. This ensures all results flow through the server for tracking, analytics, and
plagiarism detection.

---

## Hosting Options

### On-Campus (HTTP)
For private or campus-only networks, run the server over plain HTTP. No certificate setup needed.

### Off-Campus (HTTPS)
For public access, enable HTTPS. Two options:

- **Caddy reverse proxy (recommended)** - Automatic Let's Encrypt certificates with zero manual management
- **Built-in TLS** - Pass `--cert` and `--key` flags for your own certificate files

---

## Database Options

- **SQLite (default)** - Zero setup, single file. Best for most deployments.
- **PostgreSQL** - For multi-server load balancing or very high concurrency.

---

## Additional Features

- **Rate limiting** - 10 submissions per 60 seconds per IP
- **Webhook notifications** - POST on each submission for external integrations
- **Duplicate detection** - SHA-256 hashing catches identical resubmissions
- **REST API** - Full API for submission, health checks, and roster management

---

## Get the Server

Download the submission server from the [Downloads](/offline/) page. See the
[Server Setup](/docs/offline/server-setup/) documentation for full installation, configuration,
and feature details.
