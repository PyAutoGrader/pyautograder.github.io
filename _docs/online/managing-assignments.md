---
published: false
layout: doc
title: Managing Assignments
section: Online Autograder
nav_order: 3
permalink: /docs/online/managing-assignments/
prev_doc: /docs/online/instructor-setup
prev_title: Instructor Setup
next_doc: /docs/online/test-configuration
next_title: Test Configuration
---

This guide covers creating assignments, configuring settings, managing files, and running the test runner to verify your tests before publishing.

## Creating an Assignment

1. Navigate into a class and click the **Assignments** tab in the sidebar
2. Click **New Assignment**
3. Enter a name for the assignment
4. Click **Create**

The assignment starts in **draft** status. Students cannot see draft assignments.

## The Assignment Editor

Click **Edit** on any assignment to open the assignment editor. The editor has five tabs:

### Settings Tab

Configure the basic details of your assignment:

- **Name** — The assignment title visible to students
- **Description** — Instructions or context for the assignment (shown to students)
- **Due Date** — When the assignment is due (displayed in the class timezone)
- **Close Date** — When submissions stop being accepted. Students can still submit after the due date but before the close date; these are marked as late
- **Max Attempts** — The maximum number of times a student can submit. Leave blank for unlimited attempts
- **Scoring Method** — How the final score is calculated (e.g., best score across all attempts)

Changes auto-save when you switch tabs, or you can click **Save** manually.

### Files Tab

Manage the files associated with your assignment. There are four categories:

**Starter Code** — Template files that students download to begin their work. These might include function stubs, class skeletons, or partially completed code.

**Data Files** — Supporting files needed during grading. These are made available to the grading engine when tests run (e.g., CSV data files, text input files).

**Instructions** — Additional documentation files for the assignment.

**Solutions** — Your reference solution files. These are used by the grading engine for solution-comparison checks (e.g., comparing a student's function output against your solution's output). Solutions are never visible to students.

For each file you can:
- **Upload** a new file from your computer
- **Download** a copy to your local machine
- **Preview** the file contents in the editor
- **Delete** the file

### Tests Tab

This is where you define the automated checks that grade student code. See the [Test Configuration](/docs/online/test-configuration/) guide for detailed information on check types and setup.

The Tests tab shows a summary of all checks with their point values. You can:

- **Add** a new check
- **Edit** an existing check
- **Delete** a check
- **Reorder** checks via drag-and-drop or move buttons

Every change to your test configuration creates a new **version**. This means you can safely edit tests after students have submitted — their submissions are tied to the version they were graded against.

### Test Runner Tab

The test runner lets you verify your test configuration before publishing the assignment. It runs the grading engine locally on your machine, exactly the way it will run on students' machines.

1. Add test files — either browse for local Python files or use files already uploaded to the server
2. Select a **Python interpreter** from the dropdown (the runner will detect interpreters installed on your machine)
3. Click **Run**

The runner executes each test file and shows per-check results with scores, pass/fail status, and any error messages. Use this to verify that your checks, solutions, and configuration are all working correctly before students see the assignment.

### Submissions Tab

Once students begin submitting, this tab shows their results. See [Grading and Submissions](/docs/online/grading-and-submissions/) for details.

## Publishing an Assignment

When your assignment is configured and tested:

1. Click the **Publish** button in the editor header (or use the context menu from the assignments list)
2. The assignment becomes visible to enrolled students immediately

You can **unpublish** an assignment at any time to hide it from students. Existing submissions are preserved.

## Other Assignment Actions

From the assignments list, right-click or use the menu on any assignment to:

- **Duplicate** — Create a copy with a new name (includes all test configuration and files)
- **Delete** — Soft-delete the assignment (can be restored if needed)
- **Reorder** — Drag assignments to change their display order

## Exporting and Importing

### Export

Click **Export** to download all assignments in the current class as a JSON file. This includes assignment settings, test configurations, and version history. Use this to back up your work or transfer assignments between classes.

### Import

Click **Import** to load assignments from a JSON file. The importer supports two formats:

- **Online export format** — JSON exported from another online autograder class
- **Offline autograder format** — JSON exported from the offline PyAutoGrader. If the imported config references solution files, you will be prompted to upload them

## Next Steps

Learn how to configure individual test checks in [Test Configuration](/docs/online/test-configuration/).
