---
layout: doc
title: Offline Autograder Overview
section: Offline Autograder
permalink: /docs/offline/overview/
next_doc: /docs/offline/instructor-setup
next_title: Instructor Setup
---

The Offline Autograder lets instructors build a self-contained grading executable and distribute it to students. Students run it on their local machine — no internet connection or accounts required.

## Key Concepts

**Test Cases** — You write test cases in Python that validate student submissions. These get bundled into the executable.

**Executable** — A single file the instructor builds and hands to students. Contains all grading logic.

**Results** — When a student runs the executable against their code, they see which tests passed and which failed, along with a final score.

## When to Use the Offline Autograder

- You don't want to manage server infrastructure
- Students should be able to run the grader without internet
- You want a quick, low-friction setup
- Your class is small or you prefer manual grade collection

## Next Steps

Continue to [Instructor Setup](/docs/offline/instructor-setup/) to get started.
