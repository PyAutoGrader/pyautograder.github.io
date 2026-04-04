---
layout: page
title: Features
subtitle: Everything PyAutoGrader can do for your Python classroom.
permalink: /features/
---

<div class="page-intro">
  PyAutoGrader supports 42+ test types, multi-file assignments, encrypted distribution, and
  flexible result collection. Here is a detailed look at what you can test and how assignments work.
</div>

## Assignment Creation

Build assignments in the instructor application. Each assignment contains test cases, optional solution
files, and configuration for how students identify themselves and how results are collected.

- **Encrypted .agr files** - Assignments are exported as encrypted files that students cannot reverse-engineer. Solutions and expected values are never visible to students.
- **Multi-file support** - Target tests to specific files. The student app auto-detects related files in the same directory.
- **Bundled data files** - Include CSV files, text files, or other data your students' code needs.
- **Partial credit** - Award proportional points when sub-checks partially pass.
- **Custom feedback** - Configure pass/fail messages and hints for each test to guide students toward the right solution.

---

## Test Types

### Variables and Data
- **variable_value** - Check that a variable equals an expected value (with optional tolerance)
- **variable_type** - Verify variable types (int, float, str, list, dict, tuple, etc.)
- **list_equals** - Compare lists with optional order checking
- **array_equals** - NumPy array comparison with tolerance
- **array_size** - Check array dimensions (min, max, or exact)
- **array_values_in_range** - Verify all array values fall within bounds
- **dict_equals** - Dictionary comparison with tolerance
- **compare_solution** - Compare student variables against your solution file
- **check_relationship** - Verify mathematical relationships between variables
- **dataframe_columns** - Check pandas DataFrame has expected columns

### Functions and Classes
- **function_exists** - Verify a function is defined
- **function_called** - Check if a function was called during execution
- **function_not_called** - Verify a function was NOT called
- **test_function_solution** - Test student function against your solution with specific inputs
- **function_signature** - Check function parameters and defaults
- **return_type** - Verify function return type
- **class_exists** - Verify class definition
- **class_has_method** - Check method existence
- **class_has_attribute** - Check attribute existence

### Control Flow
- **for_loop_used** - Detect presence of for loops
- **while_loop_used** - Detect presence of while loops
- **if_statement_used** - Detect presence of if statements
- **loop_iterations** - Verify exact loop iteration count
- **exception_raised** - Check that code raises specific exception types

### Code Patterns
- **code_contains** - Search for a phrase in source code
- **code_not_contains** - Verify a phrase is absent
- **operator_used** - Detect specific operators (+=, **, //, etc.)
- **stdout_contains** - Verify printed output contains text
- **import_used** - Verify a module was imported

### Matplotlib Plots
- **plot_created** - Verify a matplotlib plot was generated
- **plot_properties** - Check title, xlabel, ylabel, legend, and grid all at once
- **plot_has_xlabel / plot_has_ylabel / plot_has_title** - Individual label checks
- **plot_data_length** - Verify number of data points per line
- **plot_line_style** - Check line style (solid, dashed, dotted, dashdot)
- **plot_line_width** - Check line width with tolerance
- **plot_marker_size** - Check marker size with tolerance
- **compare_plot_solution** - Compare against your solution plot (color, style, width, markers)
- **check_multiple_lines / check_exact_lines** - Verify line count

### Code Quality
- **naming_convention** - Enforce snake_case, camelCase, PascalCase, or custom regex
- **no_single_letter_vars** - Block single-character names (with common exceptions like i, j, k)
- **line_length** - Maximum characters per line
- **code_spacing** - Whitespace around operators, after commas/colons, no trailing whitespace
- **has_docstrings** - Require docstrings on functions and classes
- **has_module_docstring** - Require file-level docstring
- **min_comment_density** - Minimum percentage of commented lines
- **max_function_length** - Maximum lines per function
- **max_nesting_depth** - Maximum nesting level for control structures
- **cyclomatic_complexity** - McCabe complexity threshold
- **no_wildcard_imports** - Block `from x import *`
- **imports_at_top** - Require imports at file top
- **no_global_variables** - Disallow global scope variables

### Performance
- **performance** - Function must complete within a time limit
- **performance_script** - Full script must complete within a time limit
- **performance_compare_function** - Compare function speed to your solution
- **performance_compare_script** - Compare script speed to your solution

### File Naming
- **file_name** - Check submission filename (exact match, regex, prefix, suffix, contains)
- **file_naming_convention** - Enforce filename conventions (snake_case, kebab-case, etc.)

---

## Missing a Test Type?

If you need a test type that PyAutoGrader does not support yet,
[let us know](/contact/). We actively add new test types based on instructor feedback.
