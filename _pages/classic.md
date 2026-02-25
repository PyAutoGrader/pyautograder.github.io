---
layout: product
title: PyAutoGrader Offline Classic
subtitle: The build-it-yourself approach to Python autograding.
permalink: /classic/
badge: Offline Classic

notice: PyAutoGrader Offline Classic is a separate project from the main Offline Autograder. It is best suited for instructors who are comfortable with Python and want full control over their grading setup.

sections:
  - title: What Is PyAutoGrader Classic?
    body: >
      PyAutoGrader Classic is a standalone project that takes a different approach
      to offline autograding. Instead of downloading a pre-built app and loading an assignment file,
      you write configure the test cases, configure the grader yourself, and compile
      your own executable to distribute to students. It gives you complete control over every
      aspect of the grading process — but requires more setup than the standard Offline Autograder.

  - title: Who Is It For?
    body: >
      Classic is a good fit if you are comfortable working in Python and want to customize
      your grading logic beyond what the standard Offline Autograder supports. It is not
      recommended for instructors who want a quick setup — the standard Offline Autograder
      is the better choice for most people.
    items:
      - Instructors comfortable with Python development
      - Users who prefer to distribute the packages and Python students will need
      - Anyone who wants to self-host and fully own their setup

  - title: How It Works
    body: >
      The Classic workflow is entirely managed by the instructor on their own machine.
      There is no app to download from this site.
    items:
      - Download PyAutoGrader Classic from the GitHub repository
      - Launch the Assignment Editor GUI
      - Setup all the assignments, tests, and other settings
      - Build a self-contained executable using the build command
      - Distribute the executable directly to your students
      - Students run the executable against their code and receive results

  - title: Get Started
    body: >
      PyAutoGrader Offline Classic is hosted on GitHub. Full setup instructions and documentation
      are available in the repository README.
    cta:
      # Replace url below with the GitHub repo URL when ready
      # e.g. https://github.com/PyAutoGrader/pyautograder-classic
      - label: View on GitHub →
        url: "https://github.com/PyAutoGrader/PyAutoGrader-Offline-v1"
        style: btn-primary
      - label: Back to Offline Autograder
        url: /offline/
        style: btn-outline
---
