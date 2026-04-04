---
layout: doc
title: Saving and Exporting
section: Offline Autograder
nav_order: 6
permalink: /docs/offline/saving-and-exporting/
prev_doc: /docs/offline/student-usage
prev_title: Student Usage
next_doc: /docs/offline/batch-grading
next_title: Batch Grading
---

PyAutoGrader uses several file formats for different purposes. This guide covers saving your work, exporting assignments for students, and using JSON for portability.

## File Formats

| Format | Purpose | Who Uses It |
|--------|---------|-------------|
| `.agrx` | Instructor working file (encrypted) | Instructors only |
| `.agr` | Student assignment file (encrypted) | Students |
| `.json` | Portable assignment or class settings (plain text) | Instructors, server |

## Saving as .agrx

The `.agrx` file is your primary working file. It contains all assignments, tests, solution files, data files, and configuration for a course.

- **Save**: `File > Save` or `Ctrl+S`
- **Save As**: `File > Save As` to create a copy with a new name
- The editor auto-saves window position and re-opens your last file on launch

The `.agrx` file is encrypted with an instructor key. Students cannot open or read it.

## Exporting .agr for Students

When you are ready to distribute assignments to students:

1. Go to **File > Export for Students**.
2. Choose a save location and filename (e.g., `engr101_fall2026.agr`).

The exported `.agr` file contains:

- All assignments and their tests
- Bundled solution files (encrypted - students cannot view them)
- Bundled data files
- Reporting channel configuration (email, server, etc.)
- Roster data (if bundled CSV is configured)

Students load this file in the student application to run the grader.

### Distributing .agr Files

Distribute the `.agr` file through your LMS (Canvas, Blackboard, etc.), email, or a shared drive. Students download the file and place it in the same folder as the student application or in an `Assignments/` subfolder.

When you update tests or add new assignments, re-export the `.agr` file and redistribute it. Students load the new file to get the updates.

## Exporting Assignments as JSON

You can export individual assignments as plain-text JSON files for portability:

- **Export**: Select an assignment and export it as JSON from the file menu.
- **Import**: Import a JSON assignment file into any `.agrx` working file.

This is useful for:

- Sharing assignments between instructors
- Moving assignments between courses
- Keeping a plain-text backup of assignment definitions

JSON files are not encrypted - they contain test definitions and configuration in readable format. Do not distribute them to students if they contain expected values or solution references.

## Exporting Class Settings as JSON

You can export your entire class-level settings (course name, section, semester, reporting configuration) as a JSON file from the **Settings** panel:

- **Export**: Save class settings to a JSON file.
- **Import**: Load class settings from a JSON file into another `.agrx` working file.

### Pre-Configuring the Server

The class settings JSON can also be imported into the submission server to pre-configure assignments and course metadata before students start submitting. This saves you from manually setting up assignments on the server dashboard.

## When to Re-Export

You need to re-export and redistribute the `.agr` file when you:

- Add or remove assignments
- Change test definitions or point values
- Update solution files or data files
- Change reporting channel settings
- Update the bundled roster CSV

You do **not** need to re-export when:

- Adding students to a Google Sheet or server roster (these are fetched live)
- Changing server-side settings (deadlines, analytics, etc.)
