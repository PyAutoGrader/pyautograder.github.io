---
layout: offline
title: Offline Autograder
subtitle: Automated Python grading with no server required.
permalink: /offline/
badge: Always Free

notice: The Offline Autograder is completely <strong>free</strong> and always will be.

workflow:
  title: How It Works
  body: >
    The Offline Autograder consists of two executables — one for instructors and one for students.
    Both are downloaded directly from this site. The instructor creates an assignment file (.agr)
    which the student loads into their executable. After completing the assignment, the student
    exports a results PDF and submits it to the LMS or sends it to their instructor.

download:
  title: Instructor Download
  body: >
    Download the instructor executable to create and manage assignment files (.agr).
    Your students will download their own executable separately from the Student Downloads page.
  # Replace these URLs with your actual release download links
  # e.g. https://github.com/PyAutoGrader/releases/download/v1.0.0/PyAutoGrader-Instructor-Windows.exe
  windows: "https://github.com/PyAutoGrader/pyautograder-offline-releases/releases/latest/download/PyAutoGrader-Offline-Instructor-Windows.exe"
  mac: "https://github.com/PyAutoGrader/pyautograder-offline-releases/releases/latest/download/PyAutoGrader-Offline-Instructor-macOS.zip"
  linux: "https://github.com/PyAutoGrader/pyautograder-offline-releases/releases/latest/download/PyAutoGrader-Offline-Instructor-Linux"
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
    If your instructor uses the Offline Autograder, head to the Student Downloads page
    to download your executable and get setup instructions.
  cta:
    - label: Student Downloads
      url: /student/offline/
      style: btn-primary

classic:
  # Replace url below with the GitHub repo URL when ready
  # e.g. https://github.com/PyAutoGrader/pyautograder-classic
  url: "/classic/"
  text: >-
    Prefer to build your own? PyAutoGrader Classic is a separate project that lets you
    write test cases and compile your own grading executable from scratch.
---
