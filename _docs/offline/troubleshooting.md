---
layout: doc
title: Troubleshooting
section: Offline Autograder
nav_order: 11
permalink: /docs/offline/troubleshooting/
prev_doc: /docs/offline/server-setup
prev_title: Server Setup
---

Common issues and solutions for students and instructors.

## Student Issues

### "File not found" Errors

**Symptom**: Your script runs fine in your IDE but fails in the grader with `FileNotFoundError`.

**Cause**: The grader runs your script from its file location. If your code reads a data file (e.g., `data.csv`), that file must be in the same directory as your `.py` file.

**Fix**: Move all data files (CSV, TXT, JSON, etc.) to the same folder as your Python script. Use relative paths - `open("data.csv")` not `open("C:/Users/me/Desktop/data.csv")`.

### Timeout Errors

**Symptom**: The grader stops and reports a timeout.

**Cause**: Your script took longer than the allowed time limit (set by your instructor, typically 30 seconds). Common reasons:

- Infinite loops (`while True` without a break condition)
- Waiting for user input (`input()` calls) - the grader cannot type responses
- Very large computations

**Fix**: Remove or guard any `input()` calls. Check for infinite loops by adding print statements to track loop iterations. If your computation is legitimately slow, ask your instructor to increase the timeout.

### Import Errors

**Symptom**: `ModuleNotFoundError: No module named 'some_package'`

**Cause**: Your script uses a package that is not available in the grader's Python environment.

**Fix**: Make sure you have selected the correct Python environment in the app's environment dropdown. Common scientific packages (NumPy, Matplotlib) are available when using most Python distributions. Check for typos in your import statement.

### Plot Tests Failing Unexpectedly

**Symptom**: Your plot looks correct visually but plot tests fail.

**Cause**: The grader inspects matplotlib plot objects programmatically, not visually. Common issues:

- Labels or titles have extra whitespace or different capitalization than expected
- Plot is created in a different figure than expected
- `plt.show()` is called before the grader can inspect the plot

**Fix**: Match the exact label text specified in the assignment (case and whitespace matter). Do not call `plt.show()` - the grader handles display.

---

## Instructor Issues

### Email Delivery Problems

**Symptom**: Student submissions are not arriving by email.

**Possible causes**:

1. **Wrong SMTP settings** - Verify server address, port (typically 587 for TLS), and credentials in the assignment settings.
2. **App-specific password required** - Gmail and other providers require app-specific passwords, not your regular login password. See [Reporting Setup](/docs/offline/reporting-setup/) for Gmail setup.
3. **Firewall blocking port 587** - Check that outbound SMTP traffic is allowed on your network.
4. **Emails going to spam** - Check your spam folder. Add the sender address to your contacts.

### Google Sheets Webhook Errors

**Symptom**: Submissions are not appearing in your Google Sheet.

**Possible causes**:

1. **Wrong URL** - The URL must be the deployment URL (contains `/exec`), not the script editor URL.
2. **Access not set** - The deployment must be set to "Anyone" access.
3. **Script error** - Check the Apps Script execution log: `Extensions > Apps Script > Executions`.
4. **Stale deployment** - If you updated the script, you must create a new deployment (not just save).

### Server Connection Problems

**Symptom**: Student app shows "Connection failed" or "Server unreachable" when submitting.

**Possible causes**:

1. **Server not running** - Verify the submission server process is active.
2. **Wrong API URL** - The URL in the `.agr` file must match the server's address and port exactly, including the `/api/submit` path.
3. **API key mismatch** - The API key in the `.agr` file must match the server's `--api-key` or password.
4. **Firewall/network** - Ensure the server port is open and accessible from the student's network.
5. **HTTPS required** - If using a reverse proxy with TLS, make sure the API URL uses `https://`.

### Rate Limit Exceeded (429)

**Symptom**: Server returns "Rate limit exceeded. Try again later."

**Cause**: More than 10 submissions from the same IP address within 60 seconds. This protects against accidental or intentional flooding.

**Fix**: Wait 60 seconds and try again. If students share a network (lab computers behind NAT), the limit applies to the shared IP.

### Database Locked Errors

**Symptom**: Server logs show SQLite "database is locked" errors under heavy load.

**Cause**: SQLite handles moderate concurrency but has a single-writer limit.

**Fix**: For classes larger than about 100 concurrent submitters, consider running separate server instances with separate databases per section, or switch to PostgreSQL. See [Server Setup](/docs/offline/server-setup/) for database options.

---

## Getting Help

If your issue is not listed here, use the [Contact](/contact/) page to reach out.
