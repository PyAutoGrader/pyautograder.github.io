---
layout: doc
title: Test Configuration
section: Online Autograder
nav_order: 4
permalink: /docs/online/test-configuration/
prev_doc: /docs/online/managing-assignments
prev_title: Managing Assignments
next_doc: /docs/online/grading-and-submissions
next_title: Grading and Submissions
---

This guide covers how to configure the automated checks that grade student code. Each check tests a specific aspect of the student's submission and awards points.

## Adding a Check

1. Open an assignment in the editor and go to the **Tests** tab
2. Click **Add Check**
3. Choose a check type from the dropdown
4. Configure the check fields
5. Set the **point value** and optionally add custom pass/fail feedback messages
6. Click **Save**

Every time you add, edit, or delete a check, a new **version** of the test configuration is created automatically.

## Common Fields

Every check type has these fields:

- **Name** — A label for the check, shown to students in their results (e.g., "Variable x has correct value")
- **Points** — How many points this check is worth
- **Pass Message** — Custom feedback shown when the check passes (optional)
- **Fail Message** — Custom feedback shown when the check fails (optional)

## Check Types

### Variable Checks

These checks inspect variables in the student's code after it executes.

**Variable Value** — Check that a variable has a specific expected value.
- Variable name, expected value, and a numeric tolerance for floating-point comparisons
- Option to show or hide the expected value in student feedback

**Variable Type** — Check that a variable is a specific type (int, float, str, list, dict, tuple, set, bool, or numpy.ndarray).

**Array Size** — Check that an array or list has the expected length. You can set an exact size, or a minimum and/or maximum.

**Array Values in Range** — Check that all elements of an array fall within a numeric range.

**Array Equals** — Check that an array matches expected values element-by-element, with tolerance for floating-point values.

**List Equals** — Check that a list matches expected values. You can choose whether order matters.

**Compare with Solution** — Compare one or more student variables against the same variables in your solution file. Specify variable names as a comma-separated list. Supports partial credit (points split evenly across variables).

**Check Relationship** — Verify a mathematical relationship between two variables using a lambda expression (e.g., `lambda x: np.sin(x)`).

### Function Checks

These checks test functions defined in the student's code.

**Function Exists** — Check that a function with a given name is defined.

**Function Called** — Check that a function was called during execution.

**Function Not Called** — Check that a function was NOT called (useful for ensuring students implement their own logic rather than using a built-in).

**Compare with Solution Function** — Test a student's function against your solution function across multiple test cases. This check has a split-panel editor:
- **Left panel** — Configure the function name and solution file
- **Right panel** — Define test cases, each with a set of arguments to pass to the function

Each test case calls both the student's function and your solution function with the same arguments, then compares the return values. Supports partial credit (points split evenly across test cases).

For arguments that should be NumPy arrays, check the **np.array** option next to the argument. This wraps the value in `np.array()` before passing it to the function.

### Code Checks

These checks inspect the source code text itself (not the execution results).

**Code Contains** — Check that the code contains a specific phrase or keyword. Case sensitivity is configurable.

**Code Not Contains** — Check that the code does NOT contain a specific phrase (e.g., to prevent use of a banned function).

**Operator Used** — Check that a specific operator appears in the code. Supports arithmetic operators (+, -, \*, /, //, %, \*\*), comparison operators (==, !=, <, >, <=, >=), and logical operators (and, or, not, in, is).

### Control Flow Checks

These checks verify that the student used specific control structures.

**For Loop Used** — Check that the code contains a `for` loop.

**While Loop Used** — Check that the code contains a `while` loop.

**If Statement Used** — Check that the code contains an `if` statement.

**Loop Iterations** — Check that a specific loop runs the expected number of times.

### Plot Checks

These checks inspect matplotlib plots created by the student's code. All plot checks reference a **figure number** (default 1, for the first figure created).

**Plot Created** — Check that at least one matplotlib plot was created.

**Plot Has X Label / Y Label / Title** — Check that the plot has a non-empty label or title. Optionally specify the exact expected text.

**Plot Line Style** — Check the style of a specific line by index (e.g., "b-" for blue solid, "r--" for red dashed).

**Plot Has Line Style** — Check if any line in the plot matches a given style.

**Plot Line Width** — Check the width of a specific plot line.

**Plot Marker Size** — Check the marker size of a specific plot line.

**Plot Data Length** — Check the number of data points in a plot line. You can specify an exact count, or a minimum and/or maximum.

**Check Multiple Lines** — Check that the plot has at least N lines.

**Check Exact Lines** — Check that the plot has exactly N lines.

**Check Function Any Line** — Check if any plotted line matches a mathematical function defined as a lambda expression.

**Plot Properties** — Check multiple plot properties at once: legend presence, grid presence, title, x-label, and y-label.

**Compare Plot with Solution** — Compare a plot line against the corresponding line in your solution's plot. You can choose which properties to compare: color, line style, line width, marker, and marker size.

## Tips

- **Start simple** — Begin with a few variable or output checks, then add more as needed.
- **Use the Test Runner** — Always run your tests locally (in the Test Runner tab) before publishing the assignment. This catches configuration errors early.
- **Upload solutions first** — If you are using solution-comparison checks, upload your solution files in the Files tab before configuring those checks.
- **Partial credit** — Solution comparison and function comparison checks can split their points across multiple variables or test cases. Enable this in the check editor.
- **Versioning is automatic** — Every save creates a new version. Students who already submitted are graded against the version they submitted to, not the latest one (unless you regrade).
