---
layout: doc
title: Download and Install
section: Offline Autograder
nav_order: 2
permalink: /docs/offline/download-and-install/
prev_doc: /docs/offline/overview
prev_title: Overview
next_doc: /docs/offline/instructor-setup
next_title: Instructor Setup
---

PyAutoGrader is distributed as pre-built executables for Windows, macOS, and Linux. No Python installation, no pip, no build step required to run the applications.

## Applications

PyAutoGrader includes three standalone applications:

### Instructor Application (Assignment Editor)

The desktop editor where you create assignments, add tests, attach solution files, configure reporting channels, and manage student identity settings. Also includes batch grading for folders of student submissions.

Download the instructor application from the [Downloads](/offline/) page.

### Student Application (AutoGrader)

The student-facing app that loads encrypted `.agr` assignment files and runs the grader against student code. Shows real-time pass/fail feedback with scores.

Students download from the [Student Downloads](/student/offline/) page, or from whatever link you provide in your LMS.

### Submission Server (Optional)

A self-hosted Flask server that provides a web dashboard for browsing submissions, analytics, plagiarism detection, code search, roster management, and CSV/Canvas export. Only needed if you want centralized result collection beyond email or Google Sheets.

Download the server from the [Downloads](/offline/) page. See [Server Setup](/docs/offline/server-setup/) for installation and configuration.

## System Requirements

All three applications are standalone executables that include their own runtime.

| Platform | Instructor App | Student App | Server |
|----------|---------------|-------------|--------|
| **Windows** | Windows 10+ | Windows 10+ | Windows 10+ |
| **macOS** | macOS 11+ | macOS 11+ | macOS 11+ |
| **Linux** | Ubuntu 20.04+ or equivalent | Ubuntu 20.04+ or equivalent | Ubuntu 20.04+ or equivalent |

Students need Python installed on their machine to write and run their own code, but **not** to run the PyAutoGrader application itself.

## First Launch

### Windows

Windows may show a SmartScreen warning ("Windows protected your PC") when you first run the application. Click **More info**, then **Run anyway**. This happens because the application is not signed with a commercial code signing certificate.

### macOS

macOS Gatekeeper may block the application on first launch. Right-click (or Control-click) the app and select **Open**, then click **Open** in the confirmation dialog. You only need to do this once per application.

Alternatively, go to **System Preferences > Privacy & Security** and click **Open Anyway** after the blocked launch attempt.

### Linux

Make sure the downloaded file is executable:

```bash
chmod +x PyAutoGrader-*
./PyAutoGrader-*
```

On some distributions, you may need to install tkinter separately if it is not bundled with your Python installation.

## Verifying Installation

Launch each application and confirm it opens without errors:

- **Instructor App** - You should see the assignment editor with a menu bar and empty workspace.
- **Student App** - You should see the grading interface with fields for name, assignment selection, and file selection.
- **Server** - After starting, open `http://localhost:5000` in your browser and confirm the login page appears.

## Next Steps

- **Instructors**: Continue to [Instructor Setup](/docs/offline/instructor-setup/) to create your first assignment.
- **Students**: See [Student Usage](/docs/offline/student-usage/) for a walkthrough of the grading process.
