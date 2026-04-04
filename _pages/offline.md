---
layout: offline
title: Download PyAutoGrader
subtitle: Free automated Python grading for educators.
permalink: /offline/
badge: Always Free

notice: PyAutoGrader is completely <strong>free</strong> and always will be. No subscriptions, no per-student fees.

workflow:
  title: How It Works
  body: >
    PyAutoGrader has two applications - one for instructors and one for students.
    The instructor creates an assignment file (.agr) with tests, solutions, and configuration.
    Students load the .agr file into their app, run the grader on their code, and get instant
    feedback. Results can be collected via PDF export, email, Google Sheets, or a self-hosted server.

download:
  title: Instructor Download
  body: >
    Download the instructor executable to create and manage assignment files (.agr).
    Your students will download their own executable separately from the Student Downloads page.
  # Replace these URLs with your actual release download links
  # e.g. https://github.com/PyAutoGrader/releases/download/v1.0.0/PyAutoGrader-Instructor-Windows.exe
  windows: "https://github.com/PyAutoGrader/pyautograder-offline-releases/releases/latest/download/PyAutoGrader-Offline-Instructor.exe"
  mac: "https://github.com/PyAutoGrader/pyautograder-offline-releases/releases/latest/download/PyAutoGrader-Offline-Instructor.zip"
  linux: "https://github.com/PyAutoGrader/pyautograder-offline-releases/releases/latest/download/PyAutoGrader-Offline-Instructor"
  note: >
    Always links to the latest release. Older versions are available in the
    <a href="https://github.com/PyAutoGrader/pyautograder-offline-releases/releases">releases archive</a>.

steps:
  title: Instructor Workflow
  items:
    - title: Download the Instructor Executable
      body: Download the instructor executable for your operating system from this page.
    - title: Create an Assignment File
      body: >
        Open the instructor app and create a new assignment. Add your test cases and configure
        grading criteria. Save the assignment as a .agr file.
    - title: Share the Assignment File
      body: >
        Distribute the .agr file to your students via your LMS, email, or any file sharing method.
        Students download the student executable separately from the Student Downloads page.
    - title: Collect Results
      body: >
        Students export a PDF of their grading results and submit it to your LMS or send it to you directly.

student:
  title: Are You a Student?
  body: >
    If your instructor uses PyAutoGrader, head to the Student Downloads page
    to download your app and get setup instructions.
  cta:
    - label: Student Downloads
      url: /student/offline/
      style: btn-primary

---
