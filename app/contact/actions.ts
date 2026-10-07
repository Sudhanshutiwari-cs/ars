'use server'

export type InquiryState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<string, string>>
}

const required = ['fullName', 'company', 'email', 'phone', 'designation', 'inquiryType'] as const

export async function submitInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  const errors: Record<string, string> = {}
  const value = (key: string) => String(formData.get(key) ?? '').trim()

  for (const key of required) {
    if (!value(key)) errors[key] = 'This field is required'
  }
  if (value('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value('email'))) {
    errors.email = 'Enter a valid email address'
  }
  if (value('phone') && !/^[+\d\s()-]{7,20}$/.test(value('phone'))) {
    errors.phone = 'Enter a valid phone number'
  }
  if (value('message').length > 2000) errors.message = 'Message is too long'

  const file = formData.get('attachment')
  if (file instanceof File && file.size > 5 * 1024 * 1024) {
    errors.attachment = 'Attachment must be under 5 MB'
  }

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please fix the highlighted fields.', errors }
  }

  return {
    status: 'success',
    message: 'Thank you! Our consultants will respond within 24 business hours.',
  }
}
