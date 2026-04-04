---
published: false
layout: doc
title: Instructor Setup
section: Online Autograder
nav_order: 2
permalink: /docs/online/instructor-setup/
prev_doc: /docs/online/overview
prev_title: Overview
next_doc: /docs/online/managing-assignments
next_title: Managing Assignments
---

This guide walks you through setting up the instructor client, creating your first class, and enrolling students.

## Prerequisites

- An instructor account (request one at [/contact](/contact/))
- The instructor client downloaded from the [downloads page](/downloads/)

## Running the Application

The instructor client is a standalone desktop application. There is no installation process — just download and run the executable.

### Windows

When you first run the application, Windows may show a **"Windows protected your PC"** SmartScreen warning because the application is not signed with a commercial code-signing certificate. This is expected.

1. Click **"More info"**
2. Click **"Run anyway"**

You will only need to do this once.

### macOS

macOS will block the application because it is from an unidentified developer.

1. Right-click (or Control-click) the application and select **Open**
2. In the dialog that appears, click **Open**

Alternatively, go to **System Settings > Privacy & Security** and click **"Open Anyway"** next to the blocked application message.

## Logging In

1. Launch the instructor client
2. The server URL should be pre-filled. If not, enter the server address provided to you
3. Enter your **email** and **password**
4. Click **Log In**

If this is your first time logging in with a temporary password, you will be prompted to change it before continuing.

### Forgot Password

If you have forgotten your password, click **Forgot Password** on the login screen, enter your email address, and a reset link will be sent to you.

## The Dashboard

After logging in, you will see the **Dashboard**. This is your home screen showing:

- **Statistics** — Total classes, students, assignments, and pending submissions at a glance
- **Favorite Classes** — Classes you have starred for quick access
- **All Classes** — Every class you are an instructor on

Click any class card to navigate into that class.

## Creating a Class

1. From the Dashboard, click **New Class**
2. Fill in the class details:
   - **Name** (required) — e.g., "Introduction to Programming"
   - **Course Number** — e.g., "CS 101"
   - **Section** — e.g., "001"
   - **Term** — e.g., "Fall 2026"
   - **Timezone** — Used for displaying due dates and close dates to students
3. Click **Create**

The class starts in **draft** status. You can set it up fully before publishing it to students.

### Publishing a Class

When your class is ready for students, publish it:

1. Navigate into the class
2. Click **Publish** (or use the context menu on the class card)

Published classes are visible to enrolled students. You can unpublish a class at any time to hide it temporarily.

## Enrolling Students

Navigate to the **People** tab within a class to manage enrollment. There are three ways to add students:

### Option 1: Individual Enrollment

1. Click **Enroll Student**
2. Enter the student's **email address** and optionally their first and last name
3. Choose whether to send a notification email
4. Click **Enroll**

If the student does not already have an account, one will be created automatically with a temporary password. The notification email includes their login credentials.

### Option 2: Bulk Enrollment (CSV)

1. Click **Bulk Enroll**
2. Paste or upload a CSV with columns: `email`, `first_name`, `last_name`
3. Review the preview and click **Enroll All**

Students without existing accounts will have accounts created automatically.

### Option 3: Canvas Roster Import

If you use Canvas LMS, you can import your roster directly:

1. Export your roster from Canvas as a CSV (from the People or Gradebook page)
2. In the People tab, click **Import Canvas Roster**
3. Select the exported CSV file
4. The system will parse student names and emails, filtering out non-student roles
5. Review the preview and click **Enroll All**

### Option 4: Join Code

You can generate a join code that students use to self-enroll:

1. In the People tab, click **Join Code**
2. Click **Generate Code**
3. Optionally set an expiration date or maximum number of uses
4. Share the code with your students

Students enter this code in their student client to join the class.

## Managing Instructors

If you are the class owner, you can add other instructors as collaborators:

1. In the People tab, scroll to the **Instructors** section
2. Click **Add Instructor**
3. Enter their email address and select a role
4. Click **Invite**

You can also **transfer ownership** of a class to another instructor from this section.

## Next Steps

Once your class is set up and students are enrolled, you are ready to [create and manage assignments](/docs/online/managing-assignments/).
