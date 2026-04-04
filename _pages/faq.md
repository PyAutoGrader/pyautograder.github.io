---
layout: faq
title: FAQ
subtitle: Answers to common questions about PyAutoGrader.
permalink: /faq/

groups:
  - name: General
    items:
      - q: What is PyAutoGrader?
        a: >
          PyAutoGrader is a free tool that helps instructors automatically grade Python programming
          assignments. Instructors create assignments with test cases, distribute a single encrypted
          file to students, and students run the grader on their own machines.

      - q: Is PyAutoGrader free?
        a: >
          Yes. PyAutoGrader is completely free and always will be. No subscriptions, no per-student
          fees, no premium tiers.

      - q: What operating systems are supported?
        a: >
          PyAutoGrader runs on Windows, macOS, and Linux. Both the instructor and student
          applications are available for all three platforms.

      - q: How does this compare to paid autograders?
        a: >
          Unlike subscription-based autograding platforms, PyAutoGrader is free, runs grading on
          student machines (not a cloud server), and keeps all data on your institution's
          infrastructure. You do not need to negotiate contracts, sign data processing agreements,
          or worry about FERPA compliance with a third-party vendor.

  - name: For Instructors
    items:
      - q: How do I create assignments?
        a: >
          Download the instructor application, create a new assignment file, add your test cases
          (42+ types available), and export an encrypted .agr file to distribute to students.

      - q: What types of tests can I create?
        a: >
          PyAutoGrader supports 42+ test types including variable checks, function testing, class
          validation, control flow detection, matplotlib plot testing, code quality analysis
          (naming conventions, complexity, docstrings), performance benchmarks, and more. See the
          Features page for the full list.

      - q: How do I collect student results?
        a: >
          Four ways - use any combination. PDF export (students upload to your LMS), email
          (results sent to you automatically), Google Sheets (grades posted via webhook), or
          a self-hosted Flask server (full dashboard with analytics and plagiarism detection).
          Email and Google Sheets work as silent background notifications.

      - q: What is the self-hosted server?
        a: >
          A Flask-based submission server you run on your own infrastructure. It provides a
          dashboard for browsing submissions, analytics (score distributions, trends, at-risk
          students), plagiarism detection with side-by-side diff, Canvas-compatible CSV export,
          roster management, and assignment deadlines. Supports HTTP and HTTPS.

      - q: Can I require students to submit to my server?
        a: >
          Yes. Instructors can configure assignments so that grading is restricted unless the
          student is connected to and has submitted results to the server.

      - q: Does it support multi-file assignments?
        a: >
          Yes. You can target tests to specific files, and the student app auto-detects related
          files in the same directory.

      - q: Can I grade assignments in batch?
        a: >
          Yes. The instructor application includes batch grading. Download student .py files from
          your LMS, load them into the instructor app, and export a CSV with per-test scores.

  - name: For Students
    items:
      - q: I am a student - how do I use PyAutoGrader?
        a: >
          Download the student application from the Student Downloads page. Your instructor will
          give you a .agr assignment file. Open the app, load the file, select your Python
          script, and run the grader. You will see instant pass/fail feedback.

      - q: Do I need to install Python?
        a: >
          You need Python installed on your machine to write and run your code, but the
          PyAutoGrader application itself is a standalone executable that does not require
          a separate Python installation.

      - q: What if I do not have internet when grading?
        a: >
          Grading works completely offline. If your instructor has email or server submission
          configured, your results will be queued locally and sent automatically the next time
          you have internet.

  - name: Privacy and Compliance
    items:
      - q: Is PyAutoGrader FERPA-compliant?
        a: >
          PyAutoGrader is FERPA-friendly by design. Grading runs on the student's own machine,
          not on a cloud server. The self-hosted server keeps data on your institution's
          infrastructure. There is no third-party data processing agreement needed.

      - q: Where is student data stored?
        a: >
          Grading results are generated locally on the student's machine. Depending on how you
          configure result collection, data may be sent via email (to your inbox), posted to
          your Google Sheet, or submitted to a server you host. At no point does student data
          pass through PyAutoGrader's infrastructure.
---
