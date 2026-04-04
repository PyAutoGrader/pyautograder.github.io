---
layout: doc
title: Overview
section: Offline Autograder
nav_order: 1
permalink: /docs/offline/overview/
next_doc: /docs/offline/instructor-setup
next_title: Instructor Setup
---

PyAutoGrader lets instructors create automated Python assignments and distribute them as encrypted `.agr` files. Students run the grader on their own machines, getting instant pass/fail feedback on 42+ test types. Results can be collected via PDF export, email, Google Sheets, or a self-hosted submission server.

## Key Concepts

**Instructor Application** - A desktop app where you create assignments, configure tests, manage solution files, and set up reporting channels. Exports encrypted `.agr` files for distribution.

**Student Application** - A desktop app that loads `.agr` files and runs the grader against student code. Shows real-time results with pass/fail feedback and scores.

**.agr Files** - Encrypted assignment files containing tests, solutions, and configuration. Students cannot see solutions or expected values. Distributed via your LMS or email.

**Result Collection** - Four channels (use any combination): PDF export, email notifications, Google Sheets webhooks, or a self-hosted Flask submission server with analytics and plagiarism detection.

## Who Is This For?

- Instructors teaching Python courses at any level
- Departments looking for a free alternative to subscription-based autograders
- Educators who want students to learn real Python environment skills
- Institutions that need FERPA-friendly grading (data stays on your infrastructure)

## Next Steps

Continue to [Instructor Setup](/docs/offline/instructor-setup/) to create your first assignment.
