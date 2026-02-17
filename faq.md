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
          PyAutoGrader is a tool that helps instructors automatically grade Python programming assignments.
          It comes in two versions: an Offline Autograder (a distributable executable) and an Online
          Autograder (a hosted platform with instructor and student clients).

      - q: What is the difference between the Offline and Online versions?
        a: >
          The Offline Autograder is a standalone executable the instructor builds and distributes to students.
          Students run it on their own machines with no internet needed. The Online Autograder is a hosted
          platform — instructors manage assignments through an instructor client, and students submit work
          via a student client that connects to a central grading server.

      - q: Is PyAutoGrader free?
        a: >
          The Offline Autograder is completely free, forever. The Online Autograder has a free tier
          for instructors (by request). A paid tier with additional features is planned for the future.

      - q: What operating systems are supported?
        a: >
          The Offline Autograder produces executables that run on Windows, macOS, and Linux.
          The Online Autograder clients will also target all major platforms. Specific OS details
          will be listed on the download pages when available.

  - name: For Instructors
    items:
      - q: How do I get an Online Autograder account?
        a: >
          Instructor accounts are available by request. Head to the Contact page and fill out the form.
          You will receive login details by email.

      - q: Do students need to create accounts for the Online Autograder?
        a: >
          No. Students do not sign up on their own. Their login credentials are provided by their instructor,
          keeping student account management simple and under the instructor's control.

      - q: Can I use both the Offline and Online versions?
        a: >
          Yes. They are independent tools. You could use the Offline Autograder for one course and
          the Online Autograder for another, or transition between them over time.

  - name: For Students
    items:
      - q: I am a student — how do I use PyAutoGrader?
        a: >
          For the Online Autograder, download the student client from the Student Downloads page
          and use the login your instructor provides. For the Offline Autograder, your instructor
          will send you an executable directly — just run it on your machine.

      - q: Do I need to install Python to use the Offline Autograder?
        a: >
          No. The offline grader is distributed as a self-contained executable. It bundles everything it
          needs — just run the file your instructor sends you.

      - q: Where can I get help if something is not working?
        a: >
          First, check the Documentation — it covers setup and common issues for both products.
          If you are still stuck, use the Contact page to reach out.
---
