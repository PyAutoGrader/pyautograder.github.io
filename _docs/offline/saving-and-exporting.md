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

## Sharing via JSON

JSON is the plain-text format for sharing assignments and class configuration between instructors, courses, and the submission server. JSON files are not encrypted, so they are safe to share with other instructors, but do not distribute them to students (they contain test definitions, expected values, and solution references).

### Export Tiers

Open the overflow menu (the `...` button in the top bar of the instructor editor) to find the **Instructor Sharing (JSON)** options:

- **Export Class** - full course metadata, execution settings, and every assignment. Use this to hand off or back up an entire course, or when pre-configuring the submission server.
- **Export All Assignments** - every assignment without course metadata. Use this to share an assignment bank without overwriting the recipient's course settings.
- **Export Selected Assignment** - the currently selected assignment only. Use for quick one-off sharing.

### What's Included

- **Included**: assignment definitions, tests, point values, expected files, extra-file references, and solution file references (by relative path).
- **Excluded**: passwords, API keys, webhook URLs, roster data, and solution file contents. JSON files are safe to share publicly.

### Example

A Class-tier export for a course with one assignment looks like this:

```json
{
  "file_info": {
    "format": "pyautograder",
    "export_version": "1.0",
    "exported_at": "2026-04-15T14:30:00.123456+00:00"
  },
  "class_info": {
    "course_name": "ENGR 101",
    "section": "001",
    "semester": "Fall 2026",
    "instructor": "Dr. Smith",
    "timeout_seconds": 60,
    "allowed_packages": ["numpy"],
    "require_server_submission": true
  },
  "assignments": {
    "Beam Deflection": {
      "tests": [
        {
          "id": "3f9a8c2e-1b4d-4a6c-9e8f-0a1b2c3d4e5f",
          "type": "compare_output",
          "name": "Prints beam length",
          "points": 5,
          "expected_output": "Length: 10.0 m"
        }
      ],
      "expected_files": ["beam.py"],
      "description": "Compute beam deflection under a point load.",
      "main_file_label": "beam.py"
    }
  }
}
```

Fields at default values (such as `timeout_seconds: 30` or an empty `allowed_packages`) are omitted to keep exports clean. The `class_info` block is absent entirely from All Assignments and Selected Assignment exports.

### Importing JSON

From the same overflow menu, choose **Import from JSON**. The editor validates the file, applies class settings if present, and adds the assignments. If an imported assignment name conflicts with one already in your working file, you are prompted per-assignment to keep the existing assignment, replace it, or append the imported one as a new copy.

### Pre-Configuring the Server

A Class-tier JSON file can be uploaded through the submission server dashboard to pre-create the course and assignments before students start submitting. This saves you from manually setting up assignments on the server dashboard. You must use the **Export Class** tier for this - the other tiers omit course metadata and cannot create a course on the server.

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
