/**
 * PyAutoGrader — Google Sheets Webhook Script
 *
 * This Google Apps Script receives submission data from the PyAutoGrader
 * student app and appends a row to the active spreadsheet.
 *
 * SETUP INSTRUCTIONS:
 * ──────────────────
 * 1. Create a new Google Sheet (or open an existing one).
 *
 * 2. Go to  Extensions → Apps Script.
 *
 * 3. Delete any existing code in the editor and paste this entire file.
 *
 * 4. Click the disk icon (or Ctrl+S) to save. Name the project anything
 *    you like (e.g., "PyAutoGrader Webhook").
 *
 * 5. Click  Deploy → New deployment.
 *      - Type: "Web app"
 *      - Execute as: "Me"
 *      - Who has access: "Anyone"
 *      (This allows the student app to POST without Google sign-in.)
 *
 * 6. Click  Deploy  and authorize when prompted.
 *
 * 7. Copy the  Web app URL  (looks like:
 *      https://script.google.com/macros/s/ABCDEF.../exec )
 *
 * 8. In the PyAutoGrader Instructor Editor, go to:
 *      Reporting Channels → Google Sheets Webhook URL
 *    and paste the URL.
 *
 * 9. Export the .agr file for students. Done!
 *
 * HOW IT WORKS:
 * ─────────────
 * Each time a student submits, the app POSTs a JSON payload.
 * This script parses the payload and appends one row to the
 * first sheet. A header row is created automatically on first use.
 *
 * COLUMNS:
 *   Timestamp | Student | Computer | Username | Course | Section |
 *   Semester | Instructor | Assignment | File | Earned | Total |
 *   Pct | Passed | Count | [Per-test columns...]
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Create header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Received", "Student Name", "Computer", "Username",
        "Course", "Section", "Semester", "Instructor",
        "Assignment", "File", "Earned Pts", "Total Pts",
        "Percentage", "Passed Tests", "Total Tests", "Submitted"
      ];

      // Add per-test headers if tests are present
      var tests = data.tests || [];
      for (var i = 0; i < tests.length; i++) {
        headers.push(tests[i].name || ("Test " + (i + 1)));
      }

      sheet.appendRow(headers);

      // Bold the header row
      sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    }

    // Build the data row
    var row = [
      new Date().toISOString(),
      data.studentName || "",
      data.computerName || "",
      data.username || "",
      data.courseName || "",
      data.section || "",
      data.semester || "",
      data.instructor || "",
      data.assignmentName || "",
      data.studentFile || "",
      data.earnedPts || 0,
      data.totalPts || 0,
      data.pct || 0,
      data.passedCount || 0,
      data.totalCount || 0,
      data.timestamp || ""
    ];

    // Add per-test pass/fail
    var tests = data.tests || [];
    for (var i = 0; i < tests.length; i++) {
      row.push(tests[i].passed ? "PASS" : "FAIL");
    }

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Required for Apps Script web app deployment.
 * Returns a simple confirmation page if someone opens the URL in a browser.
 */
function doGet(e) {
  return ContentService
    .createTextOutput("PyAutoGrader webhook is active. POST submissions to this URL.")
    .setMimeType(ContentService.MimeType.TEXT);
}
