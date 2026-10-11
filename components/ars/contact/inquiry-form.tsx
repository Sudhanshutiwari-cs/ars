'use client'

import { useActionState, useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { submitInquiry, type InquiryState } from '@/app/contact/actions'
import { cn } from '@/lib/utils'

const initialState: InquiryState = { status: 'idle' }

const inputClass =
  'w-full rounded-[3px] border border-[#cfd8e3] bg-white px-3 py-2.5 text-[11px] text-ink outline-none transition-colors placeholder:text-ink/45 focus:border-[#0b2a5b] focus:ring-1 focus:ring-[#0b2a5b]'

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[11px] font-semibold text-[#0b2a5b]">
        {label}
        {required && <span aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-[10px] text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

export function InquiryForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState)
  const [fileName, setFileName] = useState('No file selected.')
  const errors = state.errors ?? {}

  const aria = (key: string) => ({
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `${key}-error` : undefined,
  })

  return (
    <div className="rounded-md border border-[#dbe3ee] bg-white/70 p-6 font-alt shadow-[0_2px_20px_rgba(11,42,91,0.04)] md:px-5 md:py-4">
      <h2 className="text-[28px] font-bold leading-tight text-[#0b2a5b]">Send Us a Message</h2>
      <p className="mt-1 max-w-[290px] text-[12px] leading-relaxed text-ink/60">
        Fill out the form and our specialized consultants will respond within 24 business hours.
      </p>

      <form action={formAction} className="mt-5 grid grid-cols-1 gap-x-3.5 gap-y-4 sm:grid-cols-2" noValidate>
        <Field id="fullName" label="Full Name" required error={errors.fullName}>
          <input id="fullName" name="fullName" autoComplete="name" placeholder="Enter your full name" className={inputClass} {...aria('fullName')} />
        </Field>
        <Field id="company" label="Company Name" required error={errors.company}>
          <input id="company" name="company" autoComplete="organization" placeholder="Enter your company name" className={inputClass} {...aria('company')} />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="Enter your email address" className={inputClass} {...aria('email')} />
        </Field>
        <Field id="phone" label="Phone" required error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone number" className={inputClass} {...aria('phone')} />
        </Field>
        <Field id="designation" label="Designation" required error={errors.designation}>
          <input id="designation" name="designation" autoComplete="organization-title" placeholder="Enter your designation" className={inputClass} {...aria('designation')} />
        </Field>
        <Field id="inquiryType" label="Nature of Inquiry" required error={errors.inquiryType}>
          <div className="relative">
            <select id="inquiryType" name="inquiryType" defaultValue="" className={cn(inputClass, 'appearance-none pr-8')} {...aria('inquiryType')}>
              <option value="" disabled>
                Select inquiry type
              </option>
              <option>Business Partnership</option>
              <option>Dealership Inquiry</option>
              <option>Vehicle Purchase</option>
              <option>Service & Support</option>
              <option>Careers</option>
              <option>Other</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink/60" aria-hidden="true" />
          </div>
        </Field>

        <div className="sm:col-span-2">
          <Field id="message" label="Message" error={errors.message}>
            <textarea id="message" name="message" rows={3} maxLength={2000} placeholder="Write your message here..." className={cn(inputClass, 'resize-y')} {...aria('message')} />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field id="attachment" label="Attachment" error={errors.attachment}>
            <div className="flex items-stretch overflow-hidden rounded-[3px] border border-[#cfd8e3] bg-white text-[11px]">
              <label
                htmlFor="attachment"
                className="cursor-pointer border-r border-[#cfd8e3] bg-[#eef1f5] px-2.5 py-2 text-ink/80 hover:bg-[#e3e8ef]"
              >
                Browse...
              </label>
              <span className="truncate px-3 py-2 text-ink/60">{fileName}</span>
              <input
                id="attachment"
                name="attachment"
                type="file"
                className="sr-only"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? 'No file selected.')}
                {...aria('attachment')}
              />
            </div>
          </Field>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={pending}
            className="inline-flex min-w-[165px] items-center justify-center gap-2 rounded-[4px] bg-[#0b2a5b] px-6 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-[#0e3672] disabled:opacity-70"
          >
            {pending ? 'Submitting...' : 'Submit Inquiry'}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <p
            role="status"
            aria-live="polite"
            className={cn(
              'mt-3 text-[12px]',
              state.status === 'success' ? 'text-green-700' : 'text-red-600',
            )}
          >
            {state.message}
          </p>
        </div>
      </form>
    </div>
  )
}
