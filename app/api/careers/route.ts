import { NextResponse } from 'next/server'
import { saveToGoogleSheets } from '@/lib/google-sheets'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    const { fullName, email, phone } = body
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'Full name, email, and phone number are required.' },
        { status: 400 }
      )
    }

    const applicationRef = body.applicationRef || `ARS-APP-${Math.floor(10000 + Math.random() * 90000)}`

    const result = await saveToGoogleSheets('career', {
      ...body,
      applicationRef,
    })

    return NextResponse.json({
      success: true,
      applicationRef,
      message: result.message,
    })
  } catch (error) {
    console.error('Error processing career application:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error processing application.' },
      { status: 500 }
    )
  }
}
