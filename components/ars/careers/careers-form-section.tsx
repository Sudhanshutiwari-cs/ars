'use client'

import { useState } from 'react'
import {
  Briefcase,
  CheckCircle2,
  FileText,
  GraduationCap,
  HeartHandshake,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Upload,
  User,
} from 'lucide-react'

const availablePositions = [
  'Senior Sales Consultant – Passenger Vehicles',
  'Two-Wheeler Sales Consultant – ARS MotoCorp',
  'Commercial Fleet Sales Manager',
  'Certified Master Diagnostic Technician',
  'Workshop Service Advisor',
  'Customer Relationship Executive (CRM)',
  'Spare Parts & Inventory Lead',
  'Dealership Accountant & Finance Executive',
  'Branch / Showroom General Manager',
  'General Open Application (All Departments)',
]

const availableLocations = [
  'Lucknow, Uttar Pradesh',
  'Patna, Bihar',
  'Delhi NCR',
  'Ranchi, Jharkhand',
  'Kolkata, West Bengal',
  'Guwahati, Assam',
  'Varanasi, Uttar Pradesh',
  'Open to Any Location',
]

const experienceRanges = [
  'Fresher / Trainee',
  '1 - 2 Years',
  '2 - 4 Years',
  '4 - 7 Years',
  '7+ Years (Senior / Leadership)',
]

const qualificationOptions = [
  'Diploma / ITI Automobile Engineering',
  'Diploma Mechanical / Electrical',
  'B.Tech / B.E. (Automobile / Mechanical)',
  'Bachelor’s Degree (B.Com / B.Sc / BA / BBA)',
  'Master’s Degree / MBA',
  'Other / High School Graduate',
]

const noticePeriods = [
  'Immediate Joiner',
  '15 Days or less',
  '30 Days',
  '60 Days or Serving Notice',
]

export function CareersFormSection({
  selectedRole,
}: {
  selectedRole?: string
}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [fileName, setFileName] = useState<string>('')
  const [applicationRef, setApplicationRef] = useState<string>('')

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentCity: '',
    position: selectedRole || availablePositions[0],
    preferredLocation: availableLocations[0],
    experience: experienceRanges[1],
    qualification: qualificationOptions[0],
    currentCompany: '',
    currentCtc: '',
    expectedCtc: '',
    noticePeriod: noticePeriods[0],
    linkedIn: '',
    coverNote: '',
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Generate reference code
    const randomCode = `ARS-APP-${Math.floor(10000 + Math.random() * 90000)}`
    setApplicationRef(randomCode)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1000)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFileName('')
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      currentCity: '',
      position: availablePositions[0],
      preferredLocation: availableLocations[0],
      experience: experienceRanges[1],
      qualification: qualificationOptions[0],
      currentCompany: '',
      currentCtc: '',
      expectedCtc: '',
      noticePeriod: noticePeriods[0],
      linkedIn: '',
      coverNote: '',
    })
  }

  return (
    <section id="application-form" className="scroll-mt-6 bg-[#f8fafc] py-14 font-alt md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Why Apply & Information Panel */}
          <div className="space-y-6 lg:col-span-4">
            <div>
              <p className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.25em] text-[#0c2340]">
                Candidate Portal
                <span aria-hidden="true" className="h-0.5 w-10 bg-brand-green" />
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0c2340] sm:text-3xl">
                Start Your Journey With Us
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Complete this application form to be considered across our passenger vehicles, two-wheeler,
                and commercial dealerships.
              </p>
            </div>

            {/* What we offer card */}
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0c2340]">
                Why Apply to ARS Imperial Landmark?
              </h3>

              <ul className="mt-4 space-y-3.5 text-xs text-ink/80">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-green mt-0.5" />
                  <span>
                    <strong className="text-ink">Merit-Based Growth:</strong> Clear promotion ladders with structured internal appraisals.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <GraduationCap className="h-4 w-4 shrink-0 text-brand-green mt-0.5" />
                  <span>
                    <strong className="text-ink">OEM Certified Academies:</strong> Sponsored factory training across leading automotive brands.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <HeartHandshake className="h-4 w-4 shrink-0 text-brand-green mt-0.5" />
                  <span>
                    <strong className="text-ink">Comprehensive Benefits:</strong> Family medical insurance, performance incentives, and leave benefits.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-brand-green mt-0.5" />
                  <span>
                    <strong className="text-ink">Respectful Workplace:</strong> Transparent policies, modern facilities, and collaborative team culture.
                  </span>
                </li>
              </ul>
            </div>

            {/* HR Help Desk Card */}
            <div className="rounded-2xl border border-neutral-200/80 bg-[#081733] p-6 text-white shadow-sm">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-green">
                Need Help Applying?
              </span>
              <h4 className="mt-1 text-base font-bold">HR Talent Acquisition Desk</h4>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                Have specific queries regarding job locations or apprenticeship programs? Reach out to our
                recruitment team directly.
              </p>

              <div className="mt-5 space-y-2.5 text-xs">
                <a
                  href="mailto:careers@arsimperial.com"
                  className="flex items-center gap-2.5 text-white/90 hover:text-brand-green transition-colors"
                >
                  <Mail className="h-4 w-4 text-brand-green shrink-0" />
                  <span>careers@arsimperial.com</span>
                </a>
                <a
                  href="tel:6202122112"
                  className="flex items-center gap-2.5 text-white/90 hover:text-brand-green transition-colors"
                >
                  <Phone className="h-4 w-4 text-brand-green shrink-0" />
                  <span>+91 6202122112</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: The Full Form */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-neutral-200/80 bg-white p-7 shadow-lg md:p-10">
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 ring-8 ring-emerald-50">
                    <CheckCircle2 className="h-12 w-12" aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#0c2340] sm:text-3xl">
                    Application Submitted Successfully!
                  </h3>

                  <p className="mx-auto mt-3 max-w-lg text-sm text-ink/70">
                    Thank you, <strong className="text-[#0c2340]">{formData.fullName}</strong>. We have
                    received your job application for{' '}
                    <strong className="text-brand-green">{formData.position}</strong>.
                  </p>

                  <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-3 text-xs text-ink/80">
                    <span>Application Reference ID:</span>
                    <strong className="font-mono text-sm font-bold text-[#0c2340]">
                      {applicationRef}
                    </strong>
                  </div>

                  <div className="mx-auto mt-6 max-w-md rounded-xl bg-emerald-50/70 p-4 text-left text-xs text-emerald-900 border border-emerald-200">
                    <p className="font-bold">Next Steps:</p>
                    <ul className="mt-1.5 list-disc pl-4 space-y-1">
                      <li>Our HR team will review your qualifications against open requisitions.</li>
                      <li>Selected candidates will be invited for an initial telephonic discussion.</li>
                      <li>
                        A confirmation notification has been recorded for your email (
                        {formData.email}).
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 flex justify-center gap-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="rounded-full bg-[#0b1a36] px-8 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:bg-brand-green transition-colors"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#0c2340] sm:text-2xl">
                      Career Application Form
                    </h3>
                    <p className="mt-1 text-xs text-ink/60">
                      Fields marked with an asterisk (<span className="text-red-500">*</span>) are mandatory.
                    </p>
                  </div>

                  {/* Section 1: Personal Details */}
                  <div className="border-t border-neutral-200/80 pt-5">
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0c2340]">
                      <User className="h-4 w-4 text-brand-green" />
                      1. Personal Information
                    </h4>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-semibold uppercase tracking-wider text-ink/80"
                        >
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className="mt-1.5 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-[#0b1a36] focus:ring-1 focus:ring-[#0b1a36]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-semibold uppercase tracking-wider text-ink/80"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. ramesh@example.com"
                          className="mt-1.5 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-[#0b1a36] focus:ring-1 focus:ring-[#0b1a36]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-semibold uppercase tracking-wider text-ink/80"
                        >
                          Mobile / Phone Number *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className="mt-1.5 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-[#0b1a36] focus:ring-1 focus:ring-[#0b1a36]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="currentCity"
                          className="block text-xs font-semibold uppercase tracking-wider text-ink/80"
                        >
                          Current City &amp; State *
                        </label>
                        <input
                          id="currentCity"
                          type="text"
                          required
                          value={formData.currentCity}
                          onChange={(e) => setFormData({ ...formData, currentCity: e.target.value })}
                          placeholder="e.g. Lucknow, UP"
                          className="mt-1.5 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-[#0b1a36] focus:ring-1 focus:ring-[#0b1a36]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Role & Preferences */}
                  <div className="border-t border-neutral-200/80 pt-5">
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0c2340]">
                      <Briefcase className="h-4 w-4 text-brand-green" />
                      2. Role &amp; Location Preference
                    </h4>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="position"
                          className="block text-xs font-semibold uppercase tracking-wider text-ink/80"
                        >
                          Position Applying For *
                        </label>
                        <select
                          id="position"
                          value={formData.position}
                          onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                          className="mt-1.5 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-[#0b1a36] focus:ring-1 focus:ring-[#0b1a36]"
                        >
                          {availablePositions.map((pos) => (
                            <option key={pos} value={pos}>
                              {pos}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="preferredLocation"
                          className="block text-xs font-semibold uppercase tracking-wider text-ink/80"
                        >
                          Preferred Working Location *
                        </label>
                        <select
                          id="preferredLocation"
                          value={formData.preferredLocation}
                          onChange={(e) =>
                            setFormData({ ...formData, preferredLocation: e.target.value })
                          }
                          className="mt-1.5 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-[#0b1a36] focus:ring-1 focus:ring-[#0b1a36]"
                        >
                          {availableLocations.map((loc) => (
                            <option key={loc} value={loc}>
                              {loc}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="experience"
                          className="block text-xs font-semibold uppercase tracking-wider text-ink/80"
                        >
                          Total Experience *
                        </label>
                        <select
                          id="experience"
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="mt-1.5 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-[#0b1a36] focus:ring-1 focus:ring-[#0b1a36]"
                        >
                          {experienceRanges.map((exp) => (
                            <option key={exp} value={exp}>
                              {exp}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="qualification"
                          className="block text-xs font-semibold uppercase tracking-wider text-ink/80"
                        >
                          Highest Qualification *
                        </label>
                        <select
                          id="qualification"
                          value={formData.qualification}
                          onChange={(e) =>
                            setFormData({ ...formData, qualification: e.target.value })
                          }
                          className="mt-1.5 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-[#0b1a36] focus:ring-1 focus:ring-[#0b1a36]"
                        >
                          {qualificationOptions.map((q) => (
                            <option key={q} value={q}>
                              {q}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="noticePeriod"
                          className="block text-xs font-semibold uppercase tracking-wider text-ink/80"
                        >
                          Notice Period / Availability *
                        </label>
                        <select
                          id="noticePeriod"
                          value={formData.noticePeriod}
                          onChange={(e) =>
                            setFormData({ ...formData, noticePeriod: e.target.value })
                          }
                          className="mt-1.5 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-[#0b1a36] focus:ring-1 focus:ring-[#0b1a36]"
                        >
                          {noticePeriods.map((np) => (
                            <option key={np} value={np}>
                              {np}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Current Employment & Compensation (Optional) */}
                  <div className="border-t border-neutral-200/80 pt-5">
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0c2340]">
                      <FileText className="h-4 w-4 text-brand-green" />
                      3. Employment &amp; Compensation (Optional)
                    </h4>

                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                      <div>
                        <label
                          htmlFor="currentCompany"
                          className="block text-xs font-semibold uppercase tracking-wider text-ink/80"
                        >
                          Current / Last Company
                        </label>
                        <input
                          id="currentCompany"
                          type="text"
                          value={formData.currentCompany}
                          onChange={(e) =>
                            setFormData({ ...formData, currentCompany: e.target.value })
                          }
                          placeholder="e.g. ABC Motors"
                          className="mt-1.5 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-[#0b1a36] focus:ring-1 focus:ring-[#0b1a36]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="currentCtc"
                          className="block text-xs font-semibold uppercase tracking-wider text-ink/80"
                        >
                          Current CTC (Annual)
                        </label>
                        <input
                          id="currentCtc"
                          type="text"
                          value={formData.currentCtc}
                          onChange={(e) =>
                            setFormData({ ...formData, currentCtc: e.target.value })
                          }
                          placeholder="e.g. 4.5 LPA"
                          className="mt-1.5 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-[#0b1a36] focus:ring-1 focus:ring-[#0b1a36]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="expectedCtc"
                          className="block text-xs font-semibold uppercase tracking-wider text-ink/80"
                        >
                          Expected CTC (Annual)
                        </label>
                        <input
                          id="expectedCtc"
                          type="text"
                          value={formData.expectedCtc}
                          onChange={(e) =>
                            setFormData({ ...formData, expectedCtc: e.target.value })
                          }
                          placeholder="e.g. 6.0 LPA"
                          className="mt-1.5 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-[#0b1a36] focus:ring-1 focus:ring-[#0b1a36]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Resume & Links */}
                  <div className="border-t border-neutral-200/80 pt-5">
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0c2340]">
                      <Upload className="h-4 w-4 text-brand-green" />
                      4. Resume &amp; Links
                    </h4>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-ink/80">
                          Upload Resume / CV (PDF, DOC, DOCX) *
                        </label>
                        <div className="mt-1.5 flex items-center rounded-xl border border-dashed border-neutral-300 bg-neutral-50/70 p-3">
                          <label
                            htmlFor="resumeUpload"
                            className="cursor-pointer rounded-lg bg-[#0b1a36] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-brand-green transition-colors shrink-0"
                          >
                            Browse File
                          </label>
                          <span className="ml-3 truncate text-xs text-ink/70">
                            {fileName || 'No file chosen yet'}
                          </span>
                          <input
                            id="resumeUpload"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="sr-only"
                            onChange={handleFileChange}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="linkedIn"
                          className="block text-xs font-semibold uppercase tracking-wider text-ink/80"
                        >
                          LinkedIn / Profile Link (Optional)
                        </label>
                        <input
                          id="linkedIn"
                          type="url"
                          value={formData.linkedIn}
                          onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                          placeholder="https://linkedin.com/in/username"
                          className="mt-1.5 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-[#0b1a36] focus:ring-1 focus:ring-[#0b1a36]"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label
                        htmlFor="coverNote"
                        className="block text-xs font-semibold uppercase tracking-wider text-ink/80"
                      >
                        Brief Summary / Why ARS Imperial Landmark? *
                      </label>
                      <textarea
                        id="coverNote"
                        rows={3}
                        required
                        value={formData.coverNote}
                        onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                        placeholder="Share a brief overview of your background, achievements, and why you are interested in this position..."
                        className="mt-1.5 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-[#0b1a36] focus:ring-1 focus:ring-[#0b1a36]"
                      />
                    </div>
                  </div>

                  {/* Submission */}
                  <div className="border-t border-neutral-200/80 pt-5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b1a36] py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-brand-green hover:text-white disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Submit Job Application
                        </>
                      )}
                    </button>
                    <p className="mt-2 text-center text-[11px] text-ink/50">
                      By submitting, you agree to allow ARS Imperial Landmark to process your details for
                      recruitment purposes.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
