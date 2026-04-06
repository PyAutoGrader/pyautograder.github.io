---
layout: default
title: About - PyAutoGrader
permalink: /about/
---

<!-- HERO -->
<div class="page-hero">
  <div class="container" style="position:relative;">
    <h1 class="page-title">About PyAutoGrader</h1>
    <p class="page-subtitle">Built by an educator, for educators.</p>
  </div>
</div>

<!-- ORIGIN (Combined Story + Bio) -->
<section class="landing-section">
  <div class="container">
    <div class="section-header">
      <div class="section-eyebrow">Origin</div>
      <h2 class="section-title">The Story</h2>
    </div>
    <div class="about-bio">
      <div class="about-photo-wrap">
        <div class="about-photo">
          <img src="{{ '/assets/images/jesse-sestito.png' | relative_url }}" alt="Jesse Sestito">
        </div>
        <div class="about-photo-name">
          <h3>Jesse Sestito</h3>
          <div class="about-photo-role">Engineering Professor</div>
          <div class="about-photo-university">Valparaiso University</div>
        </div>
      </div>
      <div class="about-bio-text">
        <div class="about-origin-text">
          <p>
            PyAutoGrader was born in the classroom. When our engineering department at Valparaiso
            University transitioned from MATLAB to Python, we needed an autograding solution that
            worked for our courses. The existing options were subscription-based platforms with
            per-student fees, or open-source tools that required significant infrastructure to deploy.
            Neither fit what we needed: a simple, free tool that runs on student machines.
          </p>
          <p>
            So I built one. What started as a basic script to automate variable checks for an
            introductory engineering course grew into a full autograding platform with 60+ test types,
            encrypted assignment distribution, multiple result collection channels, and a self-hosted
            submission server with analytics and plagiarism detection.
          </p>
          <p>
            The project is driven by a straightforward goal: give educators a free, capable autograding
            tool that respects their infrastructure and their students' data. No subscriptions, no
            vendor lock-in, no student data leaving your institution.
          </p>
        </div>
        <div class="about-origin-divider"></div>
        <div class="about-origin-bio">
          <p>
            I am a mechanical engineering professor at Valparaiso University with research interests
            in computational materials science, machine learning, and engineering education.
            PyAutoGrader grew from my teaching practice - I use a Mastery Based Learning approach in
            my programming courses, where students receive instant feedback and can resubmit until
            they demonstrate understanding.
          </p>
          <p>
            I use it in my own courses every semester, which means the features reflect real
            classroom needs rather than hypothetical use cases.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PHILOSOPHY -->
<section class="landing-section landing-section--alt">
  <div class="container">
    <div class="section-header">
      <div class="section-eyebrow">Principles</div>
      <h2 class="section-title">The Philosophy</h2>
    </div>
    <div class="about-principles">
      <div class="about-principle">
        <h3>Free. Always.</h3>
        <p>
          Educators already face enough budget constraints. Grading tools should not add to them.
          PyAutoGrader has no subscriptions, no per-student fees, and no premium tiers. It is free
          for everyone, permanently.
        </p>
      </div>
      <div class="about-principle">
        <h3>Real Skills</h3>
        <p>
          Students learn by setting up Python, managing packages, and running code on their own
          machines. A cloud-hosted autograder skips over these experiences. PyAutoGrader runs
          locally, so students build practical skills alongside their coursework.
        </p>
      </div>
      <div class="about-principle">
        <h3>Your Data, Your Infrastructure</h3>
        <p>
          Grading results and student code stay on your institution's infrastructure. The
          self-hosted server runs on your machines. There is no third-party data processing,
          no vendor agreements, and no FERPA concerns with external services.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- MASTERY BASED LEARNING -->
<section class="landing-section">
  <div class="container">
    <div class="section-header">
      <div class="section-eyebrow">Pedagogy</div>
      <h2 class="section-title">Mastery Based Learning</h2>
    </div>
    <div class="about-mastery-callout">
      <p>
        The core idea: students learn more effectively when they receive immediate, specific
        feedback and can iterate until they demonstrate understanding - rather than submitting
        once and receiving a grade days later.
      </p>
    </div>
    <div class="about-mastery">
      <p>
        This project grew from a Mastery Based Learning approach to teaching programming.
        PyAutoGrader supports this workflow directly. Students run the grader as many times as
        they want, see exactly which tests pass and fail, read targeted feedback on each failure,
        and fix their code incrementally. The autograder is not just a grading tool - it is a
        learning tool that helps students work toward mastery at their own pace.
      </p>
      <p>
        Instructors benefit too. With instant automated feedback, class time shifts from
        explaining what went wrong on last week's homework to working through new concepts.
        Students arrive having already iterated on their code and resolved the straightforward
        issues on their own.
      </p>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="landing-section--free">
  <div class="container" style="text-align:center; position:relative;">
    <h2 style="font-size:clamp(1.6rem,3vw,2.2rem); font-weight:800; color:var(--white); margin-bottom:12px;">Get in Touch</h2>
    <p class="about-cta-text">
      Have questions, feedback, or want to request a custom test type?
    </p>
    <div class="about-cta-actions">
      <a href="/contact/" class="btn btn-primary">Contact Us</a>
      <a href="/offline/" class="btn btn-outline" style="border-color:var(--emerald); color:var(--emerald);">Download PyAutoGrader</a>
    </div>
  </div>
</section>
