import fs from 'fs'
import path from 'path'

export type FormType = 'career' | 'contact'

export type GoogleSheetsPayload = {
  formType: FormType
  [key: string]: any
}

/**
 * Saves submission data to a local backup file so submissions are never lost.
 */
function saveLocalBackup(formType: FormType, data: Record<string, any>) {
  try {
    const backupDir = path.join(process.cwd(), 'data', 'submissions')
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true })
    }
    const backupFile = path.join(backupDir, `${formType}-submissions.jsonl`)
    const line = JSON.stringify({ timestamp: new Date().toISOString(), ...data }) + '\n'
    fs.appendFileSync(backupFile, line, 'utf8')
  } catch (err) {
    console.error(`[LocalBackup] Failed to save local backup for ${formType}:`, err)
  }
}

/**
 * Sends form response data to Google Sheets via Google Apps Script Web App or Webhook.
 */
export async function saveToGoogleSheets(
  formType: FormType,
  data: Record<string, any>
): Promise<{ success: boolean; message: string; backedUpLocally?: boolean }> {
  // Always create a local server backup first
  saveLocalBackup(formType, data)

  // Resolve target endpoint URL (specific URL has priority, fallback to shared URL)
  const targetUrl =
    formType === 'career'
      ? process.env.GOOGLE_SHEETS_CAREERS_URL || process.env.GOOGLE_SHEETS_SCRIPT_URL
      : process.env.GOOGLE_SHEETS_CONTACT_URL || process.env.GOOGLE_SHEETS_SCRIPT_URL

  if (!targetUrl || targetUrl.trim() === '') {
    console.info(
      `[GoogleSheets] Note: No Google Sheets URL configured for ${formType} submissions.\n` +
      `Response saved to local backup. To sync with Google Sheets, set GOOGLE_SHEETS_SCRIPT_URL in .env.local.`
    )
    return {
      success: true,
      message: 'Submission saved successfully (backed up locally).',
      backedUpLocally: true,
    }
  }

  try {
    // Both flat keys and nested data are provided for maximum compatibility
    const payload: GoogleSheetsPayload = {
      formType,
      ...data,
      data,
      submittedAt: data.submittedAt || new Date().toISOString(),
    }

    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
    })

    if (!response.ok && response.status !== 302) {
      console.error(`[GoogleSheets] Script responded with HTTP ${response.status}`)
      return {
        success: false,
        message: `Google Sheets responded with HTTP ${response.status}`,
        backedUpLocally: true,
      }
    }

    console.log(`[GoogleSheets] Successfully posted ${formType} submission to Google Sheets`)
    return {
      success: true,
      message: 'Successfully saved to Google Sheets.',
      backedUpLocally: true,
    }
  } catch (error) {
    console.error('[GoogleSheets] Failed to send submission to Google Sheets:', error)
    return {
      success: false,
      message: 'Google Sheets request failed, but response is saved to local backup.',
      backedUpLocally: true,
    }
  }
}
