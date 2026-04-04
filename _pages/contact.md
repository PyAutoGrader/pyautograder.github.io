---
layout: default
title: Contact - PyAutoGrader
permalink: /contact/
---

<!-- HERO -->
<div class="page-hero">
  <div class="container" style="position:relative;">
    <h1 class="page-title">Contact</h1>
    <p class="page-subtitle">Questions, feedback, or custom test type requests.</p>
  </div>
</div>

<!-- FORM -->
<section class="landing-section">
  <div class="container">
    <div style="max-width:600px; margin:0 auto;">
      <div class="callout" style="margin-bottom:32px;">
        Have a question about PyAutoGrader, want to report a bug, or need a test type we do not support yet? Fill out the form below and we will get back to you.
      </div>

      <h2 style="font-size:1.4rem; font-weight:800; color:var(--gray-900); margin-bottom:24px;">Get in Touch</h2>

      <div class="contact-form">
        <form action="https://formspree.io/f/xpqjlrqa" method="POST">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Dr. Jane Smith" required />
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="jsmith@university.edu" required />
          </div>
          <div class="form-group">
            <label for="institution">Institution / School</label>
            <input type="text" id="institution" name="institution" placeholder="State University" required />
          </div>
          <div class="form-group">
            <label for="type">Request Type</label>
            <select id="type" name="type">
              <option value="general">General Question</option>
              <option value="custom-test">Custom Test Type Request</option>
              <option value="feedback">Feedback / Bug Report</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell us what you need..." required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
        <p class="form-note" style="margin-top:16px;">
          Want a test type we do not support? Describe what you need and we will see if we can add it.
        </p>
      </div>
    </div>
  </div>
</section>
