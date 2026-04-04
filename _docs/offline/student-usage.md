---
layout: doc
title: Student Usage
section: Offline Autograder
nav_order: 5
permalink: /docs/offline/student-usage/
prev_doc: /docs/offline/test-types-reference
prev_title: Test Types Reference
next_doc: /docs/offline/saving-and-exporting
next_title: Saving and Exporting
---

This guide covers how students use the PyAutoGrader student application to grade their Python assignments.

## Getting the App

Download the PyAutoGrader student application for your platform (Windows, macOS, or Linux) from the [Student Downloads](/student/offline/) page, or from whatever link your instructor provides. The app is a standalone executable - no Python installation is needed to run it.

You will still need Python installed on your machine to write and run your own code.

## Getting the Assignment File

Your instructor will distribute an `.agr` assignment file through your LMS (Canvas, Blackboard, etc.), email, or a shared drive. Download this file and save it somewhere convenient.

## Launching the App

Run the PyAutoGrader executable. On first launch, your OS may show a security warning:

- **Windows**: Click **More info**, then **Run anyway**.
- **macOS**: Right-click the app, select **Open**, then click **Open** in the dialog.

See [Download and Install](/docs/offline/download-and-install/) for more details on first-launch behavior.

## Loading an Assignment

1. Click **Load Assignment** (or use the file menu).
2. Browse to and select your `.agr` file.

The app remembers recently opened files. Use the **Recent Files** dropdown to quickly reload a previous assignment without browsing.

## Entering Your Identity

Before running the grader, enter your name or username. Depending on your instructor's configuration:

- **Name mode** - Type your name in the text field.
- **Username mode** - Type your student ID, email, or other identifier. It must match your instructor's roster.
- **Username or Name mode** - Type your identifier. If it matches the roster, your display name is resolved automatically. If not, it is accepted as-is.

## Selecting a Python Environment

The app auto-detects Python environments on your system (conda, venv, pyenv, system Python). Select the environment you used to develop your code from the dropdown.

## Selecting Your Assignment and File

1. Select the assignment from the **Assignment** dropdown.
2. Click **Browse** to select your `.py` file, or **drag and drop** it onto the app window.

### Multi-File Assignments

Some assignments require multiple files (e.g., `main.py` and `helpers.py`). When you select one file, the app auto-detects other expected files in the same folder.

## Running the Grader

Click the **Run** button or press **Ctrl+R** to grade your code.

The grader executes your Python script in a sandboxed environment and runs each test defined by your instructor. Results appear in real time.

## Understanding Your Results

Each test shows one of three outcomes:

| Result | Meaning |
|--------|---------|
| **Pass** (green check) | Your code met the test requirements. Full points awarded. |
| **Fail** (red X) | Your code did not meet the requirements. See the feedback message. |
| **Partial Credit** | Some sub-checks passed. Points awarded proportionally (if enabled). |

### Feedback Messages

- **Pass feedback** - A confirmation message (if your instructor configured one).
- **Fail feedback** - Explains what went wrong. Read this carefully.
- **Hint** - An optional tip shown on failure to guide you toward the fix.

Your total score is shown as points earned out of points possible, with a percentage.

## Exporting Results as PDF

Click the **Export PDF** button to save your results as a PDF file. This is useful for submitting proof of your grade to your LMS or keeping a personal record.

## Submission Behavior

Depending on your instructor's configuration, results may be submitted automatically:

- **Email** - Results are emailed to your instructor when you run the grader.
- **Server** - Results are sent to a submission server for centralized collection.
- **Google Sheets** - Grades are posted to your instructor's spreadsheet.

You do not need to do anything extra - submission happens automatically when you run the grader.

## Tips

- Make sure any data files your script reads (CSV, TXT, JSON, etc.) are in the **same folder** as your `.py` file.
- Remove or guard any `input()` calls - the grader cannot provide interactive input.
- If your script takes too long, the grader will stop it after the timeout period (set by your instructor, typically 30 seconds).
- Do not call `plt.show()` in matplotlib assignments - the grader handles display.
- Fix one failing test at a time and re-run. The grader re-executes your script fresh each time.
- Check the feedback messages for error details if your script fails to run.

For more help with common issues, see [Troubleshooting](/docs/offline/troubleshooting/).
