---
layout: default
title: Privacy - PyAutoGrader
permalink: /privacy/
description: Privacy practices for pyautograder.github.io and the PyAutoGrader desktop applications. Cookieless analytics, opt-in anonymous app telemetry, no student data collection.
---

<!-- HERO -->
<div class="page-hero">
  <div class="container" style="position:relative;">
    <h1 class="page-title">Privacy</h1>
    <p class="page-subtitle">What this site collects, what the applications do and do not collect, and where your data lives.</p>
  </div>
</div>

<!-- SITE -->
<section class="landing-section">
  <div class="container">
    <div class="section-header">
      <div class="section-eyebrow">pyautograder.github.io</div>
      <h2 class="section-title">This website</h2>
    </div>
    <div class="diff-cards">
      <div class="diff-card">
        <div class="diff-icon">&#x1f4ca;</div>
        <h3>Analytics</h3>
        <p><a href="https://www.cloudflare.com/web-analytics/" target="_blank" rel="noopener">Cloudflare Web Analytics</a> measures aggregate traffic (visits, top pages, referrers). It is cookieless, uses no fingerprinting, and collects no personal data. No cookie banner is needed because nothing is tracked at the individual level.</p>
      </div>
      <div class="diff-card">
        <div class="diff-icon">&#x2709;&#xfe0f;</div>
        <h3>Contact form</h3>
        <p>The <a href="{{ '/contact' | relative_url }}">contact page</a> submits through <a href="https://formspree.io/" target="_blank" rel="noopener">Formspree</a>, which emails the message to the site owner. Formspree stores your name, email, and message according to its own <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener">privacy policy</a>. Submissions are only used to reply to you.</p>
      </div>
      <div class="diff-card">
        <div class="diff-icon">&#x1f524;</div>
        <h3>Fonts</h3>
        <p>Typography is loaded from Google Fonts. Your browser makes a request to Google's servers when loading pages on this site. No account or cookie is required.</p>
      </div>
    </div>
  </div>
</section>

<!-- APPLICATIONS -->
<section class="landing-section landing-section--alt">
  <div class="container">
    <div class="section-header">
      <div class="section-eyebrow">Desktop applications</div>
      <h2 class="section-title">The PyAutoGrader apps</h2>
      <p class="section-subtitle">Grading runs entirely on the user's own machine. The creator never touches student data.</p>
    </div>
    <div class="diff-cards">
      <div class="diff-card">
        <div class="diff-icon">&#x1f393;</div>
        <h3>Student application</h3>
        <p>Zero telemetry. No network calls back to the creator. The student grader runs assignments locally and sends results only to the destinations the instructor configured (PDF, email, Google Sheets, or a self-hosted server).</p>
      </div>
      <div class="diff-card">
        <div class="diff-icon">&#x1f9d1;&#x200d;&#x1f3eb;</div>
        <h3>Instructor application</h3>
        <p>Ships with opt-in anonymous usage telemetry, <strong>disabled by default</strong>. Turn it on in Settings if you want to help improve the product; leave it off and the application makes no analytics calls.</p>
      </div>
      <div class="diff-card">
        <div class="diff-icon">&#x1f5a5;&#xfe0f;</div>
        <h3>Submission server</h3>
        <p>The optional self-hosted Flask server runs on your own infrastructure. Student submissions stay on hardware you control. Nothing is sent to the creator.</p>
      </div>
    </div>
  </div>
</section>

<!-- TELEMETRY DETAIL -->
<section class="landing-section">
  <div class="container" style="max-width: 860px;">
    <div class="section-header">
      <div class="section-eyebrow">Instructor telemetry detail</div>
      <h2 class="section-title">What opt-in telemetry collects</h2>
      <p class="section-subtitle">Only aggregate feature-use signals. No student data, no assignment content, no names, no file contents.</p>
    </div>
    <div class="dl-notice" style="text-align:left;">
      <p style="margin:0 0 12px;"><strong>Collected when enabled:</strong></p>
      <ul style="margin:0 0 16px 20px; padding:0;">
        <li>A random anonymous ID generated on your machine (no account, no email, no name).</li>
        <li>App version, operating system, and Python version.</li>
        <li>Aggregate assignment counts and test-type counts when you export an <code>.agr</code>.</li>
        <li>Which reporting channels are configured (true/false for email, Google Sheets, server). Not the addresses themselves.</li>
        <li>Approximate country/region from a one-time IP lookup at app launch (the IP itself is not stored).</li>
      </ul>
      <p style="margin:0 0 12px;"><strong>Never collected:</strong></p>
      <ul style="margin:0 0 16px 20px; padding:0;">
        <li>Student names, student IDs, rosters, or submissions.</li>
        <li>Assignment contents, test code, solution code, or graded output.</li>
        <li>Email addresses, webhook URLs, or server credentials.</li>
        <li>File paths or file contents.</li>
      </ul>
      <p style="margin:0;">Telemetry is controlled by a single toggle in the instructor app's Settings. Turn it off at any time and no further events are sent.</p>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section class="landing-section landing-section--alt">
  <div class="container" style="max-width: 700px; text-align:center;">
    <div class="section-header">
      <h2 class="section-title">Questions?</h2>
      <p class="section-subtitle">
        Send privacy questions or requests through the <a href="{{ '/contact' | relative_url }}">contact page</a>.
      </p>
    </div>
  </div>
</section>
