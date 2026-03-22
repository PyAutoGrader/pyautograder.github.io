---
layout: doc
title: Student Setup
section: Online Autograder
permalink: /docs/online/student-setup/
prev_doc: /docs/online/grading-and-submissions
prev_title: Grading and Submissions
---

This guide walks students through downloading the client, logging in, and submitting assignments.

## Getting Started

You need two things to get started:

1. **Login credentials** — Your instructor will provide your email and temporary password, either directly or via an automated email
2. **The student client** — Download it from the [downloads page](/downloads/) or from a link provided by your instructor

## Running the Application

The student client is a standalone desktop application. There is no installation — just download and run the executable.

### Windows

When you first run the application, Windows may show a **"Windows protected your PC"** SmartScreen warning. This is normal — the application is not signed with a commercial code-signing certificate.

1. Click **"More info"**
2. Click **"Run anyway"**

You only need to do this once.

### macOS

macOS will block the application because it is from an unidentified developer.

1. Right-click (or Control-click) the application and select **Open**
2. In the dialog that appears, click **Open**

Alternatively, go to **System Settings > Privacy & Security** and click **"Open Anyway"** next to the blocked application message.

## Logging In

1. Launch the student client
2. The server URL should be pre-filled. If not, enter the server address provided by your instructor
3. Enter your **email** and **password**
4. Click **Log In**

If this is your first time logging in with a temporary password, you will be prompted to set a new password before continuing.

### Creating an Account

If your instructor gave you a join code instead of credentials, click **Register** on the login screen:

1. Enter your email, first name, last name, and choose a password
2. Click **Register**
3. After logging in, enter the join code when prompted to join your class

### Forgot Password

Click **Forgot Password** on the login screen, enter your email, and a reset link will be sent to you.

## The Dashboard

After logging in, you will see the **Dashboard** showing:

- **Upcoming assignments** — Assignments due in the next 7 days, with warning badges for anything due within 48 hours
- **Recent grades** — Your latest graded assignments with scores

Click any item to jump directly to that assignment.

## Joining a Class

If your instructor gave you a **join code**:

1. Go to the **Classes** view
2. Click **Join Class**
3. Enter the join code
4. Click **Join**

The class and its assignments will appear immediately.

## Viewing Assignments

Click on a class to see its assignments. Each assignment card shows:

- Assignment name
- Status (open, closed, submitted, graded)
- Due date and close date
- Your current score (if you have submitted)

Click an assignment to open its detail page.

## Submitting an Assignment

### Step 1: Review the Assignment

The assignment detail page shows:

- **Description** and instructions from your instructor
- **Due date** and **close date**
- **Attempts remaining** (if your instructor set a limit)
- **Scoring method** (best score or latest score)
- **Starter files** — Download these to get started. Click any file to preview its contents, or click **Download All** to save them to your computer

### Step 2: Select Your Code Files

1. Click **Choose Python Files...**
2. Browse to your Python file(s) and select them
3. Your selected files appear as tags below the button — click the X on any tag to remove it

### Step 3: Run and Submit

1. Click **Run & Submit**
2. The grading engine runs on your computer — a progress bar shows the status
3. When grading completes, your results are automatically submitted to the server

### Step 4: View Your Results

A results dialog appears showing:

- Your **score** (points earned out of points possible)
- **Per-check results** — Each test with pass/fail status and feedback
- You can filter results to show All, Passed only, or Failed only

Close the dialog to return to the assignment. Your score is now updated.

## Important Notes

- **Grading runs locally** — Your code executes on your own computer, not on the server. Only the results (scores and check outcomes) are uploaded.
- **Late submissions** — You can submit after the due date but before the close date. These submissions are marked as late.
- **Multiple attempts** — If your instructor allows multiple attempts, you can resubmit to try for a better score. Your best score (or latest, depending on the assignment setting) is the one that counts.
- **Python interpreter** — The grading engine uses a Python interpreter installed on your machine. If you have multiple versions of Python installed, you can choose which one to use by clicking the interpreter selector below the submit button.

## Viewing Past Submissions

On the assignment detail page, go to the **Submissions** tab to see all of your previous attempts:

- Each submission shows its attempt number, timestamp, score, and whether it was late
- Click any submission to see the full check results and your submitted code
- Your best attempt is highlighted with a badge

## Checking Your Grades

Go to the **Grades** view to see an overview of all your scores across a class:

- A progress ring shows your overall percentage
- A table lists each assignment with its score and status (Not Submitted, Submitted, or Graded)
- Click any row to go to that assignment's detail page
