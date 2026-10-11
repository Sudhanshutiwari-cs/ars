import { NextResponse } from 'next/server'
import { saveToGoogleSheets } from '@/lib/google-sheets'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { fullName, email, phone, company, inquiryType, designation, message } = body
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'Full name, email, and phone number are required.' },
        { status: 400 }
      )
    }

    const result = await saveToGoogleSheets('contact', {
      fullName,
      email,
      phone,
      company: company || '',
      designation: designation || '',
      inquiryType: inquiryType || 'General Inquiry',
      message: message || '',
      attachmentName: body.attachmentName || '',
    })

    return NextResponse.json({
      success: true,
      message: result.message,
    })
  } catch (error) {
    console.error('Error processing contact form submission:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error processing contact submission.' },
      { status: 500 }
    )
  }
}
