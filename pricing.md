---
layout: page
title: Pricing
subtitle: Simple, transparent pricing for every classroom.
permalink: /pricing/
---

<div class="pricing-section" style="padding-top: 0;">
  <div class="pricing-grid">

    <!-- Offline -->
    <div class="pricing-card">
      <div class="pricing-tier">Offline Autograder</div>
      <div class="pricing-price">Free</div>
      <div class="pricing-desc">Always free. No account needed.</div>
      <ul class="pricing-features">
        <li>Instructor builds grading executable</li>
        <li>Distribute to students directly</li>
        <li>Works completely offline</li>
        <li>Unlimited test cases</li>
        <li>Windows, macOS, Linux</li>
      </ul>
      <a href="{{ '/offline' | relative_url }}" class="btn btn-outline" style="width:100%; justify-content:center;">Get Started</a>
    </div>

    <!-- Online Free -->
    <div class="pricing-card featured">
      <div class="pricing-card-badge">Most Popular</div>
      <div class="pricing-tier">Online — Free Tier</div>
      <div class="pricing-price">Free</div>
      <div class="pricing-desc">Request an instructor account to get started.</div>
      <ul class="pricing-features">
        <li>Instructor & student clients</li>
        <li>Hosted grading server</li>
        <li>Assignment management</li>
        <li>Real-time submission results</li>
        <li class="disabled">Priority support</li>
        <li class="disabled">Advanced analytics</li>
      </ul>
      <a href="{{ '/contact' | relative_url }}" class="btn btn-primary" style="width:100%; justify-content:center;">Request Access</a>
    </div>

    <!-- Online Paid (coming soon) -->
    <div class="pricing-card" style="opacity: 0.7;">
      <div class="pricing-tier">Online — Pro Tier</div>
      <div class="pricing-price">TBD <span>/ semester</span></div>
      <div class="pricing-desc">
        <span class="badge-coming-soon">⏳ Coming Soon</span>
      </div>
      <ul class="pricing-features">
        <li>Everything in Free tier</li>
        <li>Priority support</li>
        <li>Advanced analytics</li>
        <li>Larger class sizes</li>
        <li>Custom branding options</li>
      </ul>
      <button class="btn btn-outline" style="width:100%; justify-content:center;" disabled>Coming Soon</button>
    </div>

  </div>

  <div style="text-align:center; margin-top: 48px; color: var(--text-muted); font-size: 0.9rem;">
    Have questions about pricing? <a href="{{ '/contact' | relative_url }}">Get in touch</a>.
  </div>
</div>
