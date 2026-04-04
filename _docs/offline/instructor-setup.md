---
layout: doc
title: Instructor Setup
section: Offline Autograder
nav_order: 3
permalink: /docs/offline/instructor-setup/
prev_doc: /docs/offline/download-and-install
prev_title: Download and Install
next_doc: /docs/offline/test-types-reference
next_title: Test Types Reference
---

The instructor application is where you create assignments, add tests, attach solution files, and configure how results are collected. This guide covers the core workflow from creating an assignment to exporting it for students.

## Creating a New Assignment File

1. Launch the instructor editor.
2. Go to **File > New** to create a new `.agrx` file.
3. Fill in the course metadata: course name, section, semester, and instructor name.
4. Save the file - this is your working file (`.agrx` format, encrypted with the instructor key).

The `.agrx` file is your editable working file. Students never see this file. When you are ready to distribute, you export an encrypted `.agr` file for students (see [Saving and Exporting](/docs/offline/saving-and-exporting/)).

The editor auto-saves window position and re-opens your last file on launch.

## Adding Tests

Click **Add Test** to create a new test for the selected assignment. Choose a test type from the category dropdown:

| Category | What It Tests | Example Types |
|----------|--------------|---------------|
| **Variable** | Variable values, types, lists, arrays, dicts | `variable_value`, `list_equals`, `compare_solution` |
| **Function** | Function existence, calls, output comparison | `function_exists`, `test_function_solution` |
| **Class** | Class definitions, methods, attributes | `class_exists`, `class_has_method` |
| **Control Flow** | Loops, conditionals, iteration counts, exceptions | `for_loop_used`, `loop_iterations` |
| **Code Patterns** | Source code content, operators, printed output | `code_contains`, `stdout_contains` |
| **Plot** | Matplotlib plot labels, styles, data, comparison | `plot_properties`, `compare_plot_solution` |
| **Code Quality** | Naming, documentation, complexity, style | `naming_convention`, `cyclomatic_complexity` |
| **Performance** | Execution time limits and solution comparison | `performance`, `performance_compare_function` |
| **File** | Submitted filename format and conventions | `file_name`, `file_naming_convention` |

See the [Test Types Reference](/docs/offline/test-types-reference/) for the full catalog of 60+ test types with configuration details.

### Common Test Fields

All test types share these optional fields:

| Field | Purpose |
|-------|---------|
| **Description** | Displayed to the student before running |
| **Pass Feedback** | Custom message shown when the test passes |
| **Fail Feedback** | Custom message shown when the test fails |
| **Hint** | Optional tip shown on failure to guide the student |
| **Points** | Point value for the test (default: 10) |
| **Target File** | Which file to test (for multi-file assignments) |
| **Split Points** | Award partial credit proportionally across sub-checks |
| **Show Expected** | Show expected values in failure messages |

## Solution Files

Some test types compare student output against an instructor solution. To use these:

1. Click **Add File** in the assignment's file list.
2. Upload your solution `.py` file.
3. When configuring a solution-based test (like `compare_solution`, `test_function_solution`, or `compare_plot_solution`), select the uploaded solution file from the dropdown.

Solution files are encrypted inside the `.agr` export. Students cannot view them.

## Bundled Data Files

If your assignment requires data files (CSV, TXT, JSON, etc.) that students' code reads at runtime:

1. Click **Add File** and upload the data file.
2. Mark it as a **data file** (not a solution file).
3. The data file will be bundled in the `.agr` export and extracted alongside the student's code at grading time.

This way students do not need to separately download data files.

## Multi-File Assignments

You can target individual tests to specific files within an assignment. Set the **Target File** field on each test to specify which file that test should grade. The student app auto-detects related files in the same folder when the student selects one of them.

## Configuring Student Identity

Under **Student Identity** in the sidebar, configure how students identify themselves:

| Mode | Behavior |
|------|----------|
| **Name** (default) | Freeform text entry. No roster needed. |
| **Username** (strict) | Must match a roster entry. Grading blocked if not found. |
| **Username or Name** | Resolved from roster if matched, otherwise allowed as freeform. |

For roster-based modes, you can import a CSV roster, connect a Google Sheet, or use the submission server's API. See [Roster Setup](/docs/offline/roster-setup/) for detailed configuration.

## Configuring Result Collection

Under **Reporting Channels** in the sidebar, configure how student results are collected. You can enable any combination:

| Channel | What It Does | Can Be Required? |
|---------|-------------|-----------------|
| **PDF Export** | Students export results as PDF to upload to your LMS | Yes |
| **Email** | Results emailed to you silently on each submission | No (notification only) |
| **Google Sheets** | Grades posted to a Google Sheet via webhook | No (notification only) |
| **Submission Server** | Full results and code sent to your server | Yes |
| **Webhook** | POST notification to a custom URL | No (notification only) |

See [Reporting Setup](/docs/offline/reporting-setup/) for channel-specific configuration steps.

## Partial Credit and Custom Feedback

- **Split Points** - Enable on any test to award partial credit proportionally. If a test has 10 points and 5 sub-checks, each sub-check is worth 2 points.
- **Pass/Fail Feedback** - Write custom messages for each test. Students see the pass feedback on success and the fail feedback (plus optional hint) on failure.
- **Show Expected** - Toggle whether students see the expected value in failure messages. Useful for variable and function tests where seeing the target helps learning.

## Next Steps

- [Test Types Reference](/docs/offline/test-types-reference/) - Full details on every test type
- [Saving and Exporting](/docs/offline/saving-and-exporting/) - Export `.agr` files, JSON import/export
- [Reporting Setup](/docs/offline/reporting-setup/) - Configure email, Google Sheets, and server channels
