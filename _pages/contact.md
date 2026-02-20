---
layout: contact
title: Contact & Request Access
subtitle: Get in touch or request an Online Autograder instructor account.
permalink: /contact/

notice: To request an <strong>Online Autograder instructor account</strong>, fill out the form below with your institution and contact details. You will receive login credentials by email.

form_title: Request Instructor Access
form_action: "https://formspree.io/f/xpqjlrqa"
submit_label: Send Request

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
      - value: instructor-account
        label: "Online Autograder — Instructor Account"
      - value: general
        label: General Question
      - value: feedback
        label: Feedback / Bug Report
      - value: other
        label: Other

  - id: message
    label: Message (optional)
    type: textarea
    placeholder: "Anything else you'd like us to know..."

form_note: >
  This form uses Formspree for email delivery.
---
