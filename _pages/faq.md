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
          PyAutoGrader runs on Windows, macOS, and Linux. The instructor application, student
          application, and submission server are all available as pre-built executables for all
          three platforms.

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
          Download the instructor application and create a new .agrx working file. Add your test
          cases (60+ types available), attach solution files, and configure reporting channels.
          When ready, export an encrypted .agr file to distribute to students. See the
          <a href="/docs/offline/instructor-setup/">Instructor Setup</a> guide for a full walkthrough.

      - q: What is the difference between .agrx and .agr files?
        a: >
          The .agrx file is your instructor working file - it is editable and contains all
          assignments, solutions, and configuration. The .agr file is the encrypted student file
          exported from your .agrx - solutions are hidden and tests are locked. You work in
          .agrx and export .agr for distribution. See
          <a href="/docs/offline/saving-and-exporting/">Saving and Exporting</a> for details.

      - q: What types of tests can I create?
        a: >
          PyAutoGrader supports 60+ test types including variable checks, function testing, class
          validation, control flow detection, matplotlib plot testing, code quality analysis
          (naming conventions, complexity, docstrings), performance benchmarks, and more. See the
          <a href="/docs/offline/test-types-reference/">Test Types Reference</a> for the full catalog.

      - q: How do I collect student results?
        a: >
          Five ways - use any combination. PDF export (students upload to your LMS), email
          (results sent to you automatically), Google Sheets (grades posted via webhook),
          a self-hosted Flask server (full dashboard with analytics and plagiarism detection),
          or a custom webhook. Email and Google Sheets work as silent background notifications.
          See <a href="/docs/offline/reporting-setup/">Reporting Setup</a> for configuration.

      - q: What is the self-hosted server?
        a: >
          A Flask-based submission server you run on your own infrastructure. It provides a
          dashboard for browsing submissions, analytics (score distributions, trends, at-risk
          students), plagiarism detection with side-by-side diff, Canvas-compatible CSV export,
          roster management, and assignment deadlines. Supports HTTP and HTTPS. See
          <a href="/docs/offline/server-setup/">Server Setup</a> for full documentation.

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
          See <a href="/docs/offline/batch-grading/">Batch Grading</a> for details.

      - q: How does roster management work?
        a: >
          Roster management is optional - students can type their name freely by default. For
          validated identity, you can bundle a CSV roster in the .agr file, connect a Google
          Sheet for live updates, or use the submission server's API. These can be combined
          with a fallback chain for offline support. See
          <a href="/docs/offline/roster-setup/">Roster Setup</a> for configuration.

      - q: Can I detect plagiarism?
        a: >
          Yes. The submission server includes pairwise code similarity analysis with four
          metrics (code similarity, comment similarity, combined score, and comment-to-code
          ratio), color-coded severity thresholds, and a side-by-side diff view with syntax
          highlighting. See
          <a href="/docs/offline/server-setup/#plagiarism-detection">Plagiarism Detection</a>
          in the Server Setup docs.

  - name: For Students
    items:
      - q: I am a student - how do I use PyAutoGrader?
        a: >
          Download the student application from the <a href="/student/offline/">Student Downloads</a>
          page. Your instructor will give you a .agr assignment file. Open the app, load the file,
          select your Python script, and run the grader. You will see instant pass/fail feedback.
          See <a href="/docs/offline/student-usage/">Student Usage</a> for a full walkthrough.

      - q: Do I need to install Python?
        a: >
          You need Python installed on your machine to write and run your code, but the
          PyAutoGrader application itself is a standalone executable that does not require
          a separate Python installation.

      - q: What if I do not have internet when grading?
        a: >
          Grading works completely offline. Your results will be submitted when connectivity
          is available.

      - q: What if grading times out?
        a: >
          Your code may have an infinite loop or be taking too long. Check for while loops
          without a break condition, remove any input() calls (the grader cannot provide
          interactive input), and verify your code completes within the time limit set by
          your instructor (typically 30 seconds). See
          <a href="/docs/offline/troubleshooting/">Troubleshooting</a> for more help.

      - q: Can I see the expected answers?
        a: >
          No. Solutions and expected values are encrypted in the .agr file and are never
          visible to students. This is by design - it ensures grading integrity and prevents
          students from reverse-engineering test answers.

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
