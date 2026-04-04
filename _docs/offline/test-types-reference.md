---
layout: doc
title: Test Types Reference
section: Offline Autograder
nav_order: 4
permalink: /docs/offline/test-types-reference/
prev_doc: /docs/offline/instructor-setup
prev_title: Instructor Setup
next_doc: /docs/offline/student-usage
next_title: Student Usage
---

PyAutoGrader supports 55+ test types organized by category. Each test has type-specific configuration fields plus the [common fields](/docs/offline/instructor-setup/#common-test-fields) shared by all tests (description, pass/fail feedback, hint, points, target file, split points, show expected).

## Variable Tests

### variable_value
Check that a variable has a specific value after execution.
- **variable_name** (required) - name of the variable
- **expected_value** - the value to compare against
- **tolerance** - numeric tolerance for float comparisons

### variable_type
Check the type of a variable.
- **variable_name** (required) - name of the variable
- **expected_value** - expected type name (e.g., `list`, `int`, `float`)

### list_equals
Check that a list variable matches expected contents.
- **variable_name** (required) - name of the list variable
- **expected_list** - the expected list value
- **order_matters** - whether element order is checked (default: true)
- **tolerance** - numeric tolerance for float elements

### array_equals
Check that a NumPy array matches expected values.
- **variable_name** (required) - name of the array variable
- **expected_array** - the expected array value
- **tolerance** - numeric tolerance

### array_size
Check the size of a NumPy array.
- **variable_name** (required) - name of the array variable
- **min_size** - minimum acceptable size
- **max_size** - maximum acceptable size
- **exact_size** - exact required size

### array_values_in_range
Check that all array values fall within a range.
- **variable_name** (required) - name of the array variable
- **min_value** - minimum allowed value
- **max_value** - maximum allowed value

### dict_equals
Check that a dictionary matches expected contents.
- **variable_name** (required) - name of the dict variable
- **expected_dict** - the expected dictionary
- **tolerance** - numeric tolerance for float values

### compare_solution
Compare student variables against an instructor solution file.
- **solution_file_id** (required) - ID of the uploaded solution file
- **variables_to_compare** - comma-separated list of variable names
- **tolerance** - numeric tolerance
- **require_same_type** - require matching types (not just values)

### check_relationship
Check a mathematical relationship between two variables.
- **var1_name** (required) - first variable name
- **var2_name** - second variable name
- **relationship** - relationship operator (e.g., `>`, `<`, `==`, `2*`)
- **tolerance** - numeric tolerance

---

## Function Tests

### function_exists
Verify a function is defined in student code.
- **function_name** (required) - name of the function

### function_called
Verify a function is called during execution.
- **function_name** (required) - name of the function
- **match_any_prefix** - match any function starting with this prefix

### function_not_called
Verify a function is NOT called during execution. Useful for detecting unauthorized library calls or AI-generated helper functions.
- **function_name** (required) - name of the function
- **match_any_prefix** - match any function starting with this prefix

### test_function_solution
Test a student function against the instructor's solution function with specific inputs.
- **function_name** (required) - name of the function to test
- **solution_file_id** - ID of the solution file containing the reference function
- **test_inputs** - list of input argument sets to test
- **tolerance** - numeric tolerance for comparing outputs

---

## Class Tests

### class_exists
Verify a class is defined.
- **class_name** (required) - name of the class

### class_has_method
Verify a class has a specific method.
- **class_name** (required) - name of the class
- **method_name** - name of the method

### class_has_attribute
Verify a class has a specific attribute.
- **class_name** (required) - name of the class
- **attribute_name** - name of the attribute

---

## Control Flow Tests

### for_loop_used
Check that a `for` loop is present in the code. No type-specific fields.

### while_loop_used
Check that a `while` loop is present. No type-specific fields.

### if_statement_used
Check that an `if` statement is present. No type-specific fields.

### loop_iterations
Check the number of times a loop iterates.
- **loop_variable** (required) - the loop variable to track
- **expected_count** - expected iteration count

### exception_raised
Check that specific code raises an exception.
- **code_snippet** (required) - Python code to execute
- **exception_type** - expected exception class name (e.g., `ValueError`)

---

## Code Pattern Tests

### code_contains
Check that the source code contains a specific phrase.
- **phrase** (required) - text to search for
- **case_sensitive** - whether the search is case-sensitive

### code_not_contains
Check that the source code does NOT contain a phrase.
- **phrase** (required) - text that must be absent
- **case_sensitive** - whether the search is case-sensitive

### operator_used
Check that a specific operator appears in the code.
- **operator** (required) - the operator string (e.g., `+=`, `**`, `//`)

### stdout_contains
Check that printed output contains expected text.
- **expected_text** (required) - text to look for in stdout
- **case_sensitive** - whether the search is case-sensitive

---

## Plot Tests

### plot_created
Check that a matplotlib plot was created. No type-specific fields.

### plot_properties
Check multiple plot properties at once.
- **title** - expected plot title
- **xlabel** - expected x-axis label
- **ylabel** - expected y-axis label
- **has_legend** - whether a legend is required
- **has_grid** - whether a grid is required

### plot_has_xlabel / plot_has_ylabel / plot_has_title
Check that the plot has an x-label, y-label, or title set. No type-specific fields.

### plot_data_length
Check the number of data points in a plot line.
- **min_length** - minimum number of points
- **max_length** - maximum number of points
- **exact_length** - exact required count
- **line_index** - which line to check (0-based)

### plot_line_style
Check the line style of a specific plot line by index.
- **expected_style** (required) - matplotlib style string (e.g., `--`, `-.`, `:`)
- **line_index** - which line to check (0-based)

### plot_has_line_style
Check that any line in the plot uses a given style.
- **expected_style** (required) - matplotlib style string

### plot_line_width
Check a line's width.
- **expected_width** (required) - expected line width value
- **line_index** - which line to check (0-based)
- **tolerance** - numeric tolerance

### plot_marker_size
Check a marker's size.
- **expected_size** (required) - expected marker size value
- **line_index** - which line to check (0-based)
- **tolerance** - numeric tolerance

### compare_plot_solution
Compare a student's plot against the instructor's solution plot.
- **solution_file_id** (required) - ID of the solution file
- **line_index** - which line to compare
- **check_color** - compare line colors
- **check_linestyle** - compare line styles
- **check_linewidth** - compare line widths
- **check_marker** - compare markers
- **check_markersize** - compare marker sizes
- **linewidth_tolerance** - tolerance for width comparison
- **markersize_tolerance** - tolerance for marker size comparison

### check_multiple_lines
Check that a plot has at least a minimum number of lines.
- **min_lines** (required) - minimum number of lines expected

### check_exact_lines
Check that a plot has an exact number of lines.
- **exact_lines** (required) - exact number of lines expected

### check_function_any_line
Check that a mathematical function matches any line in the plot.
- **function** (required) - Python expression to evaluate (e.g., `2*x + 1`)
- **min_length** - minimum data points to check
- **tolerance** - numeric tolerance

---

## Code Quality Tests

These tests analyze code structure and style using static analysis. They do not execute student code, making them fast and safe.

### naming_convention
Check that variable, function, and class names follow naming conventions.
- **conventions** (required) - comma-separated list: `snake_case`, `camelCase`, `PascalCase`, `SCREAMING_SNAKE_CASE`, `custom`
- **custom_pattern** - regex pattern (only used when `custom` is selected)
- **check_variables** - check variable names (default: true)
- **check_functions** - check function names (default: true)
- **check_classes** - check class names (default: true)
- **exceptions** - comma-separated names to skip (default: `i,j,k,x,y,n,_`)

### no_single_letter_vars
Check that no variables use single-character names.
- **exceptions** - comma-separated single-letter names to allow (default: `i,j,k,x,y,n,_`)

### line_length
Check that no line exceeds a maximum character length.
- **max_length** - maximum characters per line (default: 100)
- **tolerance_lines** - number of lines allowed to exceed before failing (default: 0)

### code_spacing
Check whitespace conventions within lines. Enable one or more rules:
- **space_around_operators** - require spaces around `=`, `+`, `-`, `==`, etc. (default: false)
- **space_after_commas** - require a space after every comma (default: false)
- **space_after_colons** - require a space after colons in dicts (default: false)
- **no_trailing_whitespace** - no trailing spaces at end of lines (default: false)
- **tolerance_lines** - number of violations allowed before failing (default: 0)

### has_docstrings
Check that functions and/or classes have docstrings.
- **scope** (required) - which to check: `all_functions`, `public_only`, `specific`
- **function_names** - comma-separated names (only with scope `specific`)
- **min_length** - minimum word count for docstrings (default: 1)

### has_module_docstring
Check that the file starts with a module-level docstring.
- **min_length** - minimum word count (default: 1)

### min_comment_density
Check that code has a minimum percentage of commented lines.
- **min_percentage** (required) - minimum percentage of non-blank lines with comments (0-100)

### max_function_length
Check that no function exceeds a maximum line count.
- **max_lines** - maximum lines per function (default: 30)
- **include_docstring** - whether docstring lines count toward the limit (default: false)

### max_nesting_depth
Check that code does not nest beyond a maximum depth.
- **max_depth** - maximum nesting depth for if/for/while/with/try blocks (default: 4)

### cyclomatic_complexity
Check that functions do not exceed a cyclomatic complexity threshold.
- **max_complexity** - maximum McCabe complexity score per function (default: 10)

### no_wildcard_imports
Check that the code does not use wildcard imports (`from x import *`). No type-specific fields.

### imports_at_top
Check that all import statements appear at the top of the file.
- **allow_conditional** - whether imports inside if/try blocks are acceptable (default: false)

---

## Performance Tests

### performance
Check that a function completes within a time limit.
- **function_name** (required) - function to time
- **max_seconds** (required) - maximum execution time in seconds
- **test_inputs** - inputs to pass to the function

### performance_script
Check that the full script completes within a time limit.
- **max_seconds** (required) - maximum execution time in seconds

### performance_compare_function
Compare a function's execution time against the instructor solution.
- **solution_file_id** (required) - the solution file to compare against
- **function_name** (required) - the function to time in both student and solution code
- **max_additional_seconds** (required) - how many seconds slower the student code is allowed to be
- **test_inputs** - inputs to pass to the function
- **num_runs** - number of runs to average (default: 3)

### performance_compare_script
Compare the full script execution time against the instructor solution.
- **solution_file_id** (required) - the solution file to compare against
- **max_additional_seconds** (required) - how many seconds slower the student code is allowed to be
- **num_runs** - number of runs to average (default: 3)

---

## File Tests

### file_name
Check the submitted filename format.
- **expected_name** (required) - the name or pattern to match
- **match_mode** - one of: `exact`, `prefix`, `suffix`, `contains`
- **case_sensitive** - whether matching is case-sensitive

### file_naming_convention
Check that the submitted filename follows a naming convention.
- **conventions** (required) - comma-separated list: `snake_case`, `camelCase`, `PascalCase`, `SCREAMING_SNAKE_CASE`, `Train-Case`, `kebab-case`, `custom`
- **custom_pattern** - regex pattern (only used when `custom` is selected)
- **check_extension** - whether to include the file extension in the check (default: false)

---

## Missing a Test Type?

If you need a test type that is not listed here, use the [Contact](/contact/) page to request it.
