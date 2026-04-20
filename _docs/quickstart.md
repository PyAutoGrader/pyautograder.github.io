---
layout: doc
title: Get started in 5 minutes
section: Getting Started
nav_order: 2
permalink: /docs/quickstart/
description: Go from download to a graded student submission in five steps. The fastest path to seeing PyAutoGrader in action before building your own course.
prev_doc: /docs/getting-started
prev_title: Introduction
next_doc: /docs/offline/overview
next_title: Overview
---

Five steps from a fresh download to a graded student submission, each about a minute. No course build-out required - you will use the bundled example.

## 1. Download the instructor application

Head to the [download page](/offline/) and grab the instructor application for your operating system. The page auto-detects Windows, macOS, or Linux. Install it the way you install any other desktop application.

## 2. Download the example course

On the same download page, scroll to "See What an Assignment Looks Like" and download [PyAutoGrader-Example.zip](/assets/downloads/PyAutoGrader-Example.zip). Extract it anywhere on your machine. Inside you will find a course file and a folder of student submissions.

## 3. Open the `.agrx` course in the instructor app

Launch the instructor application and open the extracted `.agrx` file. The course loads with its assignments already built - tests, rubrics, solution files, and preview output. Nothing has to be configured; the example is ready to grade.

## 4. Batch grade the included student submissions

From the loaded course, point batch grading at the `student submissions` folder that came in the ZIP. The instructor app runs every submission through the configured tests and gives you per-student scores, pass/fail output, and the graded code. This is the same workflow you will use at the end of a real assignment.

## 5. Export an `.agr` file for distribution

With the course open, export the assignment as an `.agr` file. This encrypted file is what students actually receive. It contains the tests, rubric, and student-facing view - nothing else.

## 6. Try it from the student's side

Download the [student application](/student/offline/), open the `.agr` file you just exported, and run the grader against the sample code in the example ZIP (or write your own solution). You will see exactly what a student sees when they run their submission.

## How distribution works

In real courses, you email or post the `.agr` file through your LMS. Point students at the [student download page](/student/offline/) for the grader application - they download it once and reuse it for every assignment. When they run the grader on their submission, results go wherever you configured: PDF, email, Google Sheets, or your self-hosted server.

## What's next

- [Overview](/docs/offline/overview/) - How the instructor, student, and server applications fit together
- [Instructor Setup](/docs/offline/instructor-setup/) - Build your own course from scratch
- [Test Types Reference](/docs/offline/test-types-reference/) - Full catalog of 60+ available tests
- [Reporting Setup](/docs/offline/reporting-setup/) - Configure PDF, email, Google Sheets, server submissions
- [Batch Grading](/docs/offline/batch-grading/) - Detailed batch workflow and CSV output
