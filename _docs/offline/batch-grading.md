---
layout: doc
title: Batch Grading
section: Offline Autograder
nav_order: 7
permalink: /docs/offline/batch-grading/
prev_doc: /docs/offline/saving-and-exporting
prev_title: Saving and Exporting
next_doc: /docs/offline/roster-setup
next_title: Roster Setup
---

Batch grading lets you grade a folder of student `.py` files at once and export the results as a CSV gradebook. This is useful for grading downloaded LMS submissions without having students run the grader themselves.

## Overview

1. Download student `.py` files from your LMS.
2. Open the instructor application and load your `.agr` file.
3. Select the assignment and the folder of student files.
4. Run batch grading.
5. Export the results as CSV.

Batch grading is accessed through the **instructor application GUI**.

## Running Batch Grading

1. Launch the instructor application.
2. Load the `.agr` file containing the assignment you want to grade.
3. Select the assignment from the dropdown.
4. Click **Batch Grade** and select the folder containing student `.py` files.
5. The grader runs each file against the assignment's tests and displays progress.

## CSV Output Format

The output CSV contains one row per student with the following columns:

| Column | Description |
|--------|-------------|
| Student Name | Extracted from file comments or filename |
| Filename | Original `.py` filename |
| *(test names)* | One column per test, containing points earned |
| Total Points | Sum of earned points |
| Max Points | Maximum possible points |
| Percentage | Earned / max as a percentage |
| Timestamp | When grading occurred |
| Error | Error message if the script failed to execute |

## Student Name Extraction

Names are extracted automatically using these strategies (in priority order):

1. **Comment header** - `# Name: John Smith` or `# Student: Jane Doe` in the first 10 lines of the file.
2. **Filename pattern** - `Smith_John_ForLoop1.py` becomes `Smith, John`.
3. **Fallback** - The filename without extension.

**Tip**: Tell students to include a `# Name: First Last` comment at the top of their file for reliable name extraction.

## Canvas-Compatible Export

If you are running the submission server, the dashboard provides a Canvas-compatible CSV export format. This format uses Canvas's expected column headers for direct grade import:

1. Open the submission server dashboard.
2. Filter to the desired course, section, and assignment.
3. Click **Export Canvas CSV**.
4. Import the downloaded CSV into Canvas Gradebook.

See [Server Setup](/docs/offline/server-setup/) for details on the submission server.

## Import Blocklist

When running student code in the instructor application - whether through batch grading or inline testing - the system scans each file for potentially dangerous imports before execution. If a blocked module is detected, a modal prompts you to allow or deny execution on a per-student or per-module basis. This protects your machine from student code that could open network connections, spawn processes, or modify your filesystem.

The student application has **no import restrictions**. Students can use any module freely when running the grader themselves. The blocklist applies only in the instructor application.

### How Detection Works

Before executing each student's code, the system parses it using Python's `ast` module. All `import` and `from ... import` statements are checked against the blocklist, including aliased imports like `import subprocess as sp`.

### Default Blocked Modules

| Category | Modules | Why blocked |
|----------|---------|-------------|
| Process execution | `subprocess`, `multiprocessing`, `ctypes` | Can run shell commands, spawn processes, or access C libraries |
| Networking | `socket`, `http`, `urllib`, `smtplib`, `ftplib` | Can open connections, start servers, send emails, or transfer files |
| System control | `webbrowser`, `signal` | Can open URLs in your browser or send OS signals to processes |
| File operations | `shutil`, `glob`, `tempfile`, `zipfile`, `tarfile` | Can copy/delete directory trees, enumerate files, or create archives |

### The Blocklist Modal

When a blocked import is found, the batch worker pauses and a modal appears showing:

- Which student file triggered the block
- The blocked module name
- A code preview with the import line highlighted in red and all usage sites highlighted in amber (including aliases)
- A reference count of how many times the module is used

You have three options:

1. **Allow** - permit this student's code to run (one-time, this student only).
2. **Deny** - skip grading this student entirely. The CSV row will show an error.
3. **Allow All Remaining** - allow this specific module for all remaining students in the batch. A safety warning confirms your choice. This does not carry over to other modules - if a later student uses a different blocked module, a new prompt appears.

### Common Modules NOT Blocked

Standard modules like `os`, `sys`, `math`, `numpy`, `pandas`, `matplotlib`, `re`, `json`, `csv`, `pathlib`, `collections`, `datetime`, and `random` are **not blocked**. These are commonly used in coursework and pose minimal risk during batch grading.

## Tips

- Download student files with their original filenames from your LMS when possible. This helps with name extraction.
- If students submit multiple files for multi-file assignments, keep all files for each student in the same folder.
- The grader uses the same timeout settings from the `.agr` file that students experience.
- Review the Error column for files that failed to execute - common causes are syntax errors, missing imports, or `input()` calls.
