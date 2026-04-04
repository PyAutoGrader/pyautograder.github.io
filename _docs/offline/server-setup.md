---
layout: doc
title: Server Setup
section: Offline Autograder
nav_order: 10
permalink: /docs/offline/server-setup/
prev_doc: /docs/offline/reporting-setup
prev_title: Reporting Setup
next_doc: /docs/offline/troubleshooting
next_title: Troubleshooting
---

The PyAutoGrader submission server is an optional self-hosted Flask server that provides a web dashboard for managing student submissions, analytics, plagiarism detection, code search, and grade export. See the [Server](/server/) page for a feature overview.

## Quick Start

1. Download the server executable for your platform (Windows, macOS, or Linux) from the [Downloads](/offline/) page.
2. Edit the included `server_config.json` to set your password and API key.
3. Run the executable (or double-click it on Windows/macOS).
4. Open `http://localhost:5000` in your browser.
5. Log in with the default credentials: **admin** / **changeme**.

Change the default password before use in any shared environment.

## Configuration

The server loads settings from three sources (highest priority first):

1. **CLI arguments**
2. **server_config.json** (next to the executable)
3. **Default values**

### CLI Arguments

| Flag | Default | Description |
|------|---------|-------------|
| `--username` | `admin` | Dashboard login username |
| `--password` | `changeme` | Dashboard login password |
| `--api-key` | (same as password) | API key for student app submissions |
| `--port` | `5000` | Server port |
| `--db` | `submissions.db` | SQLite database path |
| `--submissions-dir` | `submissions/` | Code file storage directory |
| `--cert` | (none) | TLS certificate file for HTTPS |
| `--key` | (none) | TLS private key file for HTTPS |

### Config File

Create a `server_config.json` file next to the executable:

```json
{
  "username": "admin",
  "password": "a-strong-password",
  "api_key": "your-api-key-here",
  "port": 5000,
  "db": "submissions.db",
  "submissions_dir": "submissions"
}
```

All fields are optional. Missing fields use defaults. If `api_key` is not set, it defaults to the password value.

---

## HTTPS Setup

Running the server on a public IP without HTTPS exposes API keys, passwords, and student data in plaintext. Always use HTTPS when accessible outside your local network.

### Caddy Reverse Proxy (Recommended)

Caddy automatically obtains and renews TLS certificates from Let's Encrypt with zero manual management.

1. Install Caddy from [caddyserver.com](https://caddyserver.com/docs/install).
2. Create a `Caddyfile`:

   ```
   grader.yourdomain.com {
       reverse_proxy localhost:5000
   }
   ```

3. Run `caddy run`.
4. Start the submission server on localhost (no TLS flags needed).

Students and instructors connect to `https://grader.yourdomain.com` and Caddy forwards requests to the server.

### Built-in TLS (Advanced)

If you already have TLS certificate files (`.pem` format):

```bash
./PyAutoGrader-Offline-SubmissionServer --cert /path/to/cert.pem --key /path/to/key.pem --password mysecret
```

### HTTP Only (Campus Networks)

For private or campus-only networks where traffic does not leave the local network, plain HTTP is acceptable. No certificate setup needed.

---

## Database Options

### SQLite (Default)

Zero setup. Creates a `submissions.db` file in the current directory. Works well for most deployments and handles thousands of submissions without issues.

- **Backup**: Copy the `submissions.db` file.
- **Reset**: Delete the file - a new one is created on next start.

### PostgreSQL

For multi-server deployments or very high concurrency. Set `database_url` in `server_config.json`:

```json
{
  "password": "dashboard-password",
  "api_key": "your-api-key",
  "database_url": "postgresql://grader:db-password@localhost:5432/autograder"
}
```

The server creates all tables automatically on first launch. Most instructors should stick with SQLite unless you need multiple server instances sharing the same database or your institution already runs PostgreSQL.

---

## Dashboard

Access the dashboard at `http://localhost:5000/` (or your domain). Log in with the configured username and password.

### Pages

- **Dashboard** - Analytics overview with charts for score distribution, submission trends, assignment difficulty, and at-risk students.
- **Submissions** - Filterable table with pagination. View modes: all submissions, latest per student, or highest per student. Click any row to see full test results and student code.
- **Classes** - Organize courses by course/section/semester. Drill into a class for per-class analytics, submissions, roster, and assignments.
- **Search** - Search across all submitted code for specific patterns or keywords. Useful for detecting AI-generated code patterns or verifying required constructs.
- **Plagiarism** - Pairwise code similarity analysis (see below).

---

## Analytics

The dashboard provides analytics scoped to the entire server or to a specific class:

- **Score distributions** - Histogram of student scores per assignment
- **Submission trends** - Submissions over time (useful for tracking procrastination patterns)
- **Assignment difficulty** - Average scores and failure rates per assignment
- **Student progress** - Individual student performance across assignments
- **At-risk identification** - Students with low or declining scores

---

## Plagiarism Detection

The built-in plagiarism tool performs pairwise code similarity analysis across student submissions for a given assignment.

### Running an Analysis

1. Go to the **Plagiarism** page.
2. Select the course and assignment.
3. Set the **minimum similarity threshold** (default: 50%).
4. Click **Analyze**.

The server compares the latest submission per student for the selected assignment.

### Similarity Metrics

Each student pair is evaluated with four metrics:

| Metric | What It Compares |
|--------|-----------------|
| **Code Similarity** | Functional code with comments stripped (primary indicator) |
| **Comment Similarity** | Only comment text from both files |
| **Combined Score** | Weighted: 70% code + 30% comments |
| **Comment-to-Code Ratio** | Percentage of lines with comments per student |

### Color Coding

| Color | Range | Interpretation |
|-------|-------|----------------|
| Red | 80%+ | Very likely copied |
| Orange | 50-79% | Warrants investigation |
| Green | Below 50% | Likely independent work |

Short assignments naturally produce higher similarity scores. Use your judgment alongside the diff view.

### Side-by-Side Diff View

Click **View** on any pair to see both students' code side-by-side with syntax highlighting and highlighted differences. This is the most reliable way to confirm or dismiss suspected plagiarism.

### Tips

- Run analysis after a submission deadline when all students have submitted.
- Lower the threshold to 30-40% for longer assignments where coincidental similarity is less likely.
- Raise the threshold to 70-80% for short assignments where similarity is expected.
- Check the diff view before drawing conclusions.

---

## Assignment Deadlines

Assignments are auto-discovered as students submit. On the **Assignments** tab within a class:

- Set a **cutoff date/time** for each assignment.
- Set **per-student overrides** for accommodations or extensions.
- Late submissions are flagged with a "Late" badge in the UI.
- Exports include an "Is Late" column and an option to exclude late submissions.

---

## Roster Management

The server provides a roster management interface under each class:

- **CSV upload** - Bulk import (replaces existing entries for that course/section/semester).
- **Add single student** - Quick form for individual additions.
- **Remove** - Delete individual students.
- **Sync unmatched** - Link submissions from students not yet in the roster.
- **Duplicate detection** - Warns about duplicate usernames.

The server also exposes a REST API endpoint (`/api/roster`) that the student app can use to fetch the roster at grading time. See [Roster Setup](/docs/offline/roster-setup/) for configuration.

---

## Requiring Server Submission

Instructors can configure assignments so that grading is restricted unless the student is connected to the server. This ensures all results flow through the server for tracking, analytics, and plagiarism detection.

Configure this in the instructor editor under **Reporting Channels** when setting up the REST API submission.

---

## Export

- **CSV Gradebook** - Full submission data with all fields.
- **Canvas CSV** - Canvas LMS-compatible format with one row per student, one column per assignment. Import directly into Canvas Gradebook.
- Both exports respect the current view mode (all/latest/highest) and filter settings.
- "Exclude late submissions" checkbox available for both export types.

---

## File Storage

Student code files are saved in an organized folder structure:

```
submissions/
  ENGR101_Spring2026/
    HW1_ForLoops/
      Doe_John_20260329143000.py
      Smith_Jane_20260329151200.py
```

You can browse these files directly or use system tools to search across them.

---

## Running on a Remote Server (Linux)

The server binds to `0.0.0.0` by default, so it is accessible remotely. Make sure the port is open in your firewall:

```bash
# Ubuntu/Debian
sudo ufw allow 5000

# CentOS/RHEL
sudo firewall-cmd --add-port=5000/tcp --permanent
sudo firewall-cmd --reload
```

To keep the server running after you disconnect:

```bash
# Simple approach
nohup ./PyAutoGrader-Offline-SubmissionServer --password YOUR_PASSWORD &
```

For production use, consider setting up a systemd service for automatic restart on failure or reboot.
