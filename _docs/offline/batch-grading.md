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

## Tips

- Download student files with their original filenames from your LMS when possible. This helps with name extraction.
- If students submit multiple files for multi-file assignments, keep all files for each student in the same folder.
- The grader uses the same timeout settings from the `.agr` file that students experience.
- Review the Error column for files that failed to execute - common causes are syntax errors, missing imports, or `input()` calls.
