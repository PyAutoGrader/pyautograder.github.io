---
layout: page
title: FAQ
subtitle: Answers to common questions about PyAutoGrader.
permalink: /faq/
---

<div class="faq-section" style="padding-top: 0;">

  <div class="section-eyebrow" style="margin-bottom: 32px;">General</div>

  <div class="faq-item">
    <button class="faq-question">What is PyAutoGrader?</button>
    <div class="faq-answer">
      PyAutoGrader is a tool that helps instructors automatically grade Python programming assignments.
      It comes in two versions: an Offline Autograder (a distributable executable) and an Online 
      Autograder (a hosted platform with instructor and student clients).
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-question">What's the difference between the Offline and Online versions?</button>
    <div class="faq-answer">
      The <strong>Offline Autograder</strong> is a standalone executable the instructor builds and 
      distributes to students. Students run it on their own machines with no internet needed.
      The <strong>Online Autograder</strong> is a hosted platform — instructors manage assignments 
      through an instructor client, and students submit work via a student client that connects to 
      a central grading server.
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-question">Is PyAutoGrader free?</button>
    <div class="faq-answer">
      The Offline Autograder is completely free, forever. The Online Autograder has a free tier 
      for instructors (by request). A paid tier with additional features is planned for the future.
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-question">What operating systems are supported?</button>
    <div class="faq-answer">
      The Offline Autograder is designed to produce executables that run on Windows, macOS, and Linux.
      The Online Autograder clients will also target all major platforms. Specific OS support details 
      will be listed on the download pages when available.
    </div>
  </div>

  <div class="section-eyebrow" style="margin: 40px 0 32px;">For Instructors</div>

  <div class="faq-item">
    <button class="faq-question">How do I get an Online Autograder account?</button>
    <div class="faq-answer">
      Instructor accounts for the Online Autograder are available by request. 
      Head to the <a href="{{ '/contact' | relative_url }}">Contact / Request Access</a> page and 
      fill out the form. You'll hear back with login details.
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-question">Do students need accounts for the Online Autograder?</button>
    <div class="faq-answer">
      Students do not sign up on their own. Their login credentials are provided by their instructor. 
      This keeps student account management simple and under the instructor's control.
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-question">Can I use both the Offline and Online versions?</button>
    <div class="faq-answer">
      Yes. They are independent tools. You could use the Offline Autograder for one course and 
      the Online Autograder for another, or transition between them over time.
    </div>
  </div>

  <div class="section-eyebrow" style="margin: 40px 0 32px;">For Students</div>

  <div class="faq-item">
    <button class="faq-question">I'm a student — how do I use PyAutoGrader?</button>
    <div class="faq-answer">
      It depends on which version your instructor uses. For the Offline Autograder, your instructor 
      will send you an executable — just run it on your machine. For the Online Autograder, 
      download the student client from the <a href="{{ '/student-downloads' | relative_url }}">Student Downloads</a> 
      page and use the login your instructor provides.
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-question">Do I need to install Python to use the Offline Autograder?</button>
    <div class="faq-answer">
      No. The offline grader is distributed as a self-contained executable — it bundles everything it 
      needs. You just run the file your instructor sends you.
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-question">Where can I get help if something isn't working?</button>
    <div class="faq-answer">
      First, check the <a href="{{ '/docs/getting-started' | relative_url }}">Documentation</a> — it covers 
      setup and common issues for both products. If you're still stuck, use the 
      <a href="{{ '/contact' | relative_url }}">Contact</a> page.
    </div>
  </div>

</div>
