---
layout: doc
title: Grading and Submissions
section: Online Autograder
permalink: /docs/online/grading-and-submissions/
prev_doc: /docs/online/test-configuration
prev_title: Test Configuration
next_doc: /docs/online/student-setup
next_title: Student Setup
---

This guide covers how to review student submissions, regrade work, manage attempt overrides, and export grades.

## Viewing Submissions

Open an assignment in the editor and go to the **Submissions** tab. The left panel shows a list of students who have submitted, along with their best score and number of attempts.

### Student Submissions

Click on a student to see all of their submissions. Each submission shows:

- **Attempt number** and timestamp
- **Score** and max score
- **Late badge** if submitted after the due date
- **Best attempt badge** for the highest-scoring submission (when using best-score grading)

### Submission Detail

Select a specific submission to see:

- **Per-check results** — Each check with its pass/fail status, points earned, and feedback
- **Submitted files** — The code files the student submitted, with a preview viewer
- **Filter controls** — Filter checks by All, Passed, or Failed

You can also download the student's submitted files for local review.

## Regrading

When you update your test configuration, existing submissions remain graded against the version they were originally submitted to. You may want to regrade submissions against a newer version.

### Regrade a Single Submission

1. Select a student and submission in the Submissions tab
2. Click **Regrade**
3. Choose a scoring policy:
   - **Use new score** — Replace the old score with the new result
   - **Use best score** — Keep whichever score is higher (old or new)
4. Optionally add a reason for the regrade
5. Click **Regrade**

The grading engine runs locally on your machine and sends the new results to the server.

### Bulk Regrade

To regrade all submissions for an assignment at once:

1. Click **Bulk Regrade** in the Submissions tab
2. Select the version to grade against (defaults to the latest)
3. Choose a scoring policy
4. Click **Start Regrade**

A progress overlay shows completion status as each submission is regraded. You can cancel at any time. The regrade runs in the background — each student's code is downloaded, graded locally, and the results are sent back to the server.

## Attempt Overrides

If a student needs extra attempts beyond the assignment's maximum:

1. Select the student in the Submissions tab
2. Click **Grant Extra Attempts**
3. Enter the number of additional attempts and optionally a reason
4. Click **Grant**

You can view and delete overrides from the same interface.

## Gradebook

Navigate to the **Gradebook** tab in the sidebar to see a class-wide view of all grades.

### What You See

- **Class statistics** — Total students, average percentage, median percentage, and completion rate
- **Grade table** — Each row is a student, each column is an assignment. Cells are color-coded:
  - Green (90%+), Yellow (70-89%), Orange (50-69%), Red (below 50%)
- **Search** — Filter students by name or email

### Exporting Grades

Click **Export** to download the gradebook. Two formats are available:

**Standard CSV** — A straightforward spreadsheet with student names, emails, and scores for each assignment.

**Canvas CSV** — A CSV formatted for import into Canvas LMS. Column headers and student identifiers match Canvas's expected format so you can upload grades directly.

After choosing a format, you will be prompted to save the file to your computer.
