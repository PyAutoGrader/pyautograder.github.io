---
layout: page
title: Offline Autograder
subtitle: Build once. Distribute anywhere. Grade offline.
permalink: /offline/
---

<section class="products-section" style="padding-top: 0;">
  <div class="callout">
    The Offline Autograder is completely <strong>free</strong> and always will be.
  </div>

  <h2>How It Works</h2>
  <p>
    The Offline Autograder gives instructors a way to distribute a self-contained grading 
    executable to their students. Students run the executable locally against their 
    assignment code — no internet connection or accounts needed.
  </p>

  <h2>For Instructors</h2>
  <p>
    Using PyAutoGrader's tooling, you write your test cases and then build a standalone 
    executable. You distribute this executable however you like — via your LMS, email, 
    or a class file share. Students run it themselves.
  </p>
  <ul>
    <li>Write test cases in Python</li>
    <li>Build a distributable executable with a single command</li>
    <li>No server setup or infrastructure required</li>
    <li>Works on Windows, macOS, and Linux</li>
  </ul>

  <h2>For Students</h2>
  <p>
    Students receive the executable from their instructor and run it against their 
    assignment submission. They get immediate pass/fail feedback on each test case.
  </p>
  <ul>
    <li>No installation of special software required</li>
    <li>Run the grader from the terminal or file explorer</li>
    <li>See which tests passed and which failed</li>
    <li>Works entirely offline</li>
  </ul>

  <h2>Get Started</h2>
  <p>Head to the documentation to learn how to set up and build your first grader.</p>
  <div style="display:flex; gap: 12px; flex-wrap: wrap; margin-top: 8px;">
    <a href="{{ '/docs/offline/overview' | relative_url }}" class="btn btn-primary">View Offline Docs</a>
    <a href="{{ '/docs/getting-started' | relative_url }}" class="btn btn-outline">Quick Start Guide</a>
  </div>
</section>
