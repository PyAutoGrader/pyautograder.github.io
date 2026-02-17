---
layout: page
title: Contact & Request Access
subtitle: Get in touch or request an Online Autograder instructor account.
permalink: /contact/
---

<div class="callout">
  To request an <strong>Online Autograder instructor account</strong>, fill out the form below 
  with your institution and contact details. You'll receive login credentials by email.
</div>

<h2>Request Instructor Access</h2>
<div class="contact-form">
  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
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
        <option value="instructor-account">Online Autograder — Instructor Account</option>
        <option value="general">General Question</option>
        <option value="feedback">Feedback / Bug Report</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div class="form-group">
      <label for="message">Message (optional)</label>
      <textarea id="message" name="message" placeholder="Anything else you'd like us to know..."></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Send Request</button>
  </form>

  <p style="margin-top: 24px; font-size: 0.88rem; color: var(--text-muted);">
    <strong>Note:</strong> This form uses Formspree for email delivery. Replace 
    <code>YOUR_FORM_ID</code> in the source with your actual Formspree endpoint, 
    or swap in your preferred form backend.
  </p>
</div>
