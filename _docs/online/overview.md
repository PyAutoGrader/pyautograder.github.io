---
layout: doc
title: Online Autograder Overview
section: Online Autograder
nav_order: 1
permalink: /docs/online/overview/
next_doc: /docs/online/instructor-setup
next_title: Instructor Setup
---

The Online Autograder is a hosted grading platform for Python programming assignments. Instructors create and manage assignments through a desktop client. Students submit their work through a separate desktop client and receive immediate feedback. All results are stored centrally on the grading server.

## How It Works

1. **Instructors** create assignments, define test cases, and upload solution files using the instructor client
2. **Students** download starter files, write their code, and submit through the student client
3. **Grading runs locally** on the student's machine — their code never leaves their computer
4. **Results are submitted** to the server so instructors can track scores, view submissions, and export grades

## Components

**Instructor Client** — A desktop application for instructors. Create classes, manage student enrollment, build assignments with automated test cases, review submissions, and export grades.

**Student Client** — A desktop application for students. Join classes, view assignments, download starter files, run the grader against your code, and submit results.

**Grading Server** — Hosted and managed by PyAutoGrader. Stores class data, assignments, enrollment, and grading results. You do not need to run your own server.

## Key Features

- **Client-side grading** — Student code executes on the student's own machine, not on the server. This keeps the server lightweight and avoids security concerns with running untrusted code.
- **Versioned test configurations** — Every change to an assignment's test cases is versioned, so you can track what changed and regrade against any version.
- **Multiple check types** — Output matching, variable checks, function return value checks, function-with-solution comparison, and more.
- **Immediate feedback** — Students see their score and per-check results as soon as grading finishes.
- **Gradebook and export** — View class-wide grades and export to CSV or Canvas-compatible format.

## When to Use the Online Autograder

- You want centralized result tracking across your class
- You have a larger class and want submissions organized in one place
- You want students to submit through a structured workflow rather than running a standalone executable
- You want to review individual student submissions and regrade when needed

## Getting Access

Instructor accounts are available by request. [Contact us](/contact/) to get set up.
