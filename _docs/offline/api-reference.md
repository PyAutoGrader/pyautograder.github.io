---
layout: doc
title: Server API Reference
section: Offline Autograder
nav_order: 11
permalink: /docs/offline/api-reference/
prev_doc: /docs/offline/server-setup
prev_title: Server Setup
next_doc: /docs/offline/troubleshooting
next_title: Troubleshooting
---

REST API reference for the PyAutoGrader submission server. All endpoints require Bearer token authentication.

Base URL: `http://localhost:5000` (or your configured host/port)

## Authentication

All API endpoints require a Bearer token in the `Authorization` header:

```
Authorization: Bearer your-api-key-here
```

The API key is set via `--api-key` on the command line or `api_key` in `server_config.json`. If not explicitly set, the dashboard password is used as the API key.

---

## Endpoints

### POST /api/submit

Receive a student submission. This is the endpoint the student app calls after grading.

**Request body (JSON):**

| Field | Required | Description |
|-------|----------|-------------|
| `studentName` | Yes | Student's name or display name |
| `assignmentName` | Yes | Assignment identifier |
| `courseName` | No | Course name (e.g., "ENGR 101") |
| `section` | No | Section number |
| `semester` | No | Semester string (e.g., "Fall 2026") |
| `instructor` | No | Instructor name |
| `studentFile` | No | Original filename of the student's .py file |
| `studentCode` | No | Full source code of the student's file |
| `earnedPts` | No | Points earned |
| `totalPts` | No | Total possible points |
| `pct` | No | Score percentage |
| `passedCount` | No | Number of tests passed |
| `totalCount` | No | Total number of tests |
| `tests` | No | Array of per-test results (see below) |
| `timestamp` | No | Submission timestamp |
| `computerName` | No | Student's computer hostname |
| `username` | No | Instructor-configured username |
| `studentUsername` | No | Student's system username |
| `additionalCode` | No | Object mapping filenames to code (multi-file submissions) |

**Per-test object format:**

| Field | Description |
|-------|-------------|
| `name` | Test name/description |
| `passed` | Boolean pass/fail |
| `points` | Points earned for this test |
| `totalPts` | Points possible for this test |
| `feedback` | Feedback message |

**Success response (200):**

```json
{
  "ok": true,
  "id": 42
}
```

**Duplicate warning (200):**

```json
{
  "ok": true,
  "id": 43,
  "warning": "Duplicate submission detected (identical code submitted recently)."
}
```

**Error responses:**

| Status | Cause |
|--------|-------|
| 400 | Request body is not valid JSON or missing required fields |
| 401 | No Bearer token provided |
| 403 | API key does not match |
| 429 | Rate limit exceeded (see below) |

---

### GET /api/health

Health check endpoint. Used by the student app for pre-flight server verification.

**Response (200):**

```json
{
  "ok": true,
  "status": "healthy"
}
```

---

### GET /api/roster

Fetch the student roster for a given course/section/semester. Used by the student app to populate a name dropdown when [roster validation](/docs/offline/roster-setup/) is configured.

**Query parameters:**

| Parameter | Description |
|-----------|-------------|
| `course` | Course name (e.g., "ENGR 101") |
| `section` | Section number (e.g., "001") |
| `semester` | Semester string (e.g., "Fall 2026") |

**Response (200):**

```json
{
  "roster": [
    {"username": "jsmith", "displayName": "John Smith"},
    {"username": "jdoe", "displayName": "Jane Doe"}
  ]
}
```

---

## Rate Limiting

The server enforces a rate limit of **10 submissions per 60 seconds per IP address**. When exceeded, the server returns HTTP 429. The counter resets after 60 seconds of inactivity from that IP.

Rate limiting applies only to `/api/submit`. Health checks and roster queries are not rate-limited.

If students share a network (lab computers behind NAT), the limit applies to the shared public IP.

---

## Webhook Notifications

When `webhook_url` is configured in `server_config.json`, the server sends a POST request to that URL after each submission is stored.

### Configuration

Add `webhook_url` to your `server_config.json`:

```json
{
  "password": "your-password",
  "webhook_url": "https://your-service.com/hook"
}
```

### Payload

```json
{
  "event": "submission",
  "id": 42,
  "studentName": "John Smith",
  "assignmentName": "HW1",
  "courseName": "ENGR 101",
  "section": "001",
  "earnedPts": 80,
  "totalPts": 100,
  "pct": 80.0,
  "timestamp": "2026-03-15 14:30:00"
}
```

The webhook payload does not include student code or detailed test results to keep it small. Use the dashboard or database for full submission details.

### Behavior

- Webhooks are fire-and-forget. Failures are silently ignored.
- No retry logic. If the target is down, the notification is lost.
- The POST is sent after the submission is stored in the database.

### Use Cases

- Slack/Discord notifications when students submit
- Custom dashboards or monitoring systems
- Triggering downstream workflows (CI, LMS sync, etc.)

---

## Assignment Auto-Discovery

When a submission includes `courseName` and `assignmentName`, the server automatically registers that assignment in the database if it has not been seen before. This populates the Assignments tab in the class detail view, where instructors can set cutoff dates.

No action is required from the API client. Auto-discovery is transparent.

---

## Late Flagging

If an assignment has a cutoff date set (via the dashboard), new submissions are automatically evaluated as late or on-time based on their `timestamp` field. The `is_late` status is stored on the submission record and shown in the dashboard and exports.

Per-student deadline overrides (set via the dashboard) take precedence over the assignment-level cutoff.

---

## Duplicate Detection

When a submission is received, the server hashes the student code (SHA-256) and checks it against submissions from the same student and assignment within the last 5 minutes. If a match is found, the submission is still stored but the response includes a `warning` field.

Duplicates are never rejected. The warning is informational only, allowing the student app to notify the user.
