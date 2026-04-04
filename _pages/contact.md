---
layout: contact
title: Contact
subtitle: Questions, feedback, or custom test type requests.
permalink: /contact/

notice: Have a question about PyAutoGrader, want to report a bug, or need a test type we do not support yet? Fill out the form below and we will get back to you.

form_title: Get in Touch
form_action: "https://formspree.io/f/xpqjlrqa"
submit_label: Send Message

fields:
  - id: name
    label: Full Name
    type: text
    placeholder: "Dr. Jane Smith"
    required: true

  - id: email
    label: Email Address
    type: email
    placeholder: "jsmith@university.edu"
    required: true

  - id: institution
    label: Institution / School
    type: text
    placeholder: "State University"
    required: true

  - id: type
    label: Request Type
    type: select
    options:
      - value: general
        label: General Question
      - value: custom-test
        label: Custom Test Type Request
      - value: feedback
        label: Feedback / Bug Report
      - value: other
        label: Other

  - id: message
    label: Message
    type: textarea
    placeholder: "Tell us what you need..."
    required: true

form_note: >
  Want a test type we do not support? Describe what you need and we will see if we can add it.
---
