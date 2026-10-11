/**
 * ============================================================================
 * ARS IMPERIAL LANDMARK - GOOGLE SHEETS FORM HANDLER
 * ============================================================================
 * 
 * This Google Apps Script automatically saves submissions from both:
 * 1. Careers Page Application Form (into a "Careers" tab)
 * 2. Contact Us Page Inquiry Form (into a "Contact Inquiries" tab)
 * 
 * ----------------------------------------------------------------------------
 * SETUP INSTRUCTIONS (Takes ~2 minutes):
 * ----------------------------------------------------------------------------
 * 1. Open Google Sheets (https://sheets.new) and name it:
 *    "ARS Imperial Landmark - Form Responses"
 * 
 * 2. In the top menu, click:
 *    Extensions > Apps Script
 * 
 * 3. Delete any default code in Code.gs, and PASTE THIS ENTIRE SCRIPT.
 * 
 * 4. Click "Save" (disk icon).
 * 
 * 5. Click "Deploy" (blue button at top right) > "New deployment".
 *    - Click the gear icon next to "Select type" and choose "Web app".
 *    - Description: "ARS Form Webhook"
 *    - Execute as: "Me (your email)"
 *    - Who has access: "Anyone"   <-- IMPORTANT! Must be "Anyone" so website can POST to it.
 *    - Click "Deploy".
 *    - (If prompted, click "Authorize access" > select your account > Advanced > Go to Untitled (unsafe) > Allow).
 * 
 * 6. Copy the "Web app URL" (it looks like https://script.google.com/macros/s/AKfy.../exec).
 * 
 * 7. In your Next.js project root, open or create `.env.local` and add:
 *    GOOGLE_SHEETS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
 * 
 * Done! All future submissions will automatically create tabs and append rows.
 * ============================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Wait up to 10 seconds for concurrent write locks

  try {
    var contents = e.postData ? e.postData.contents : '';
    if (!contents) {
      return jsonResponse({ status: 'error', message: 'No payload received' });
    }

    var json = JSON.parse(contents);
    var formType = json.formType || 'career';
    var data = json.data || json; // Support both nested data or root keys
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    if (formType === 'career') {
      handleCareerSubmission(ss, data);
    } else if (formType === 'contact') {
      handleContactSubmission(ss, data);
    } else {
      return jsonResponse({ status: 'error', message: 'Unknown formType: ' + formType });
    }

    return jsonResponse({
      status: 'success',
      message: 'Submission successfully recorded in Google Sheets'
    });

  } catch (error) {
    Logger.log('Error handling submission: ' + error.toString());
    return jsonResponse({
      status: 'error',
      message: error.toString()
    });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Health check endpoint when opening the Web App URL directly in browser.
 */
function doGet(e) {
  return jsonResponse({
    status: 'ok',
    message: 'ARS Imperial Landmark Google Sheets Webhook is active and listening for submissions.',
    timestamp: new Date().toISOString()
  });
}

/**
 * Handles Career Application submissions into the "Careers" tab.
 */
function handleCareerSubmission(ss, data) {
  var sheet = ss.getSheetByName('Careers');
  if (!sheet) {
    sheet = ss.insertSheet('Careers');
    sheet.appendRow([
      'Timestamp (IST)',
      'Application Ref',
      'Full Name',
      'Email',
      'Phone',
      'Current City',
      'Position Applied',
      'Preferred Location',
      'Experience Level',
      'Qualification',
      'Current Company',
      'Current CTC',
      'Expected CTC',
      'Notice Period',
      'LinkedIn Profile',
      'Resume File Name',
      'Cover Note / Background'
    ]);

    // Style the header row
    var headerRange = sheet.getRange(1, 1, 1, 17);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#0c2340');
    headerRange.setFontColor('#ffffff');
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, 17);
  }

  var timestamp = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyy-MM-dd HH:mm:ss');

  sheet.appendRow([
    timestamp,
    data.applicationRef || '',
    data.fullName || '',
    data.email || '',
    data.phone || '',
    data.currentCity || '',
    data.position || '',
    data.preferredLocation || '',
    data.experience || '',
    data.qualification || '',
    data.currentCompany || '',
    data.currentCtc || '',
    data.expectedCtc || '',
    data.noticePeriod || '',
    data.linkedIn || '',
    data.resumeFileName || '',
    data.coverNote || ''
  ]);
}

/**
 * Handles Contact Us inquiries into the "Contact Inquiries" tab.
 */
function handleContactSubmission(ss, data) {
  var sheet = ss.getSheetByName('Contact Inquiries');
  if (!sheet) {
    sheet = ss.insertSheet('Contact Inquiries');
    sheet.appendRow([
      'Timestamp (IST)',
      'Full Name',
      'Company Name',
      'Email',
      'Phone',
      'Designation',
      'Nature of Inquiry',
      'Message',
      'Attachment Name'
    ]);

    // Style the header row
    var headerRange = sheet.getRange(1, 1, 1, 9);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#0b2a5b');
    headerRange.setFontColor('#ffffff');
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, 9);
  }

  var timestamp = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyy-MM-dd HH:mm:ss');

  sheet.appendRow([
    timestamp,
    data.fullName || '',
    data.company || '',
    data.email || '',
    data.phone || '',
    data.designation || '',
    data.inquiryType || '',
    data.message || '',
    data.attachmentName || ''
  ]);
}

/**
 * Utility to return JSON response with CORS headers.
 */
function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
