import { CheckCircle2, FileSearch, Handshake, Mail, Phone, Users2 } from 'lucide-react'

const steps = [
  {
    step: 'Step One',
    icon: FileSearch,
    title: 'Application & Screening',
    description:
      'Our Talent Acquisition team reviews your background to match your profile with relevant openings across our network.',
  },
  {
    step: 'Step Two',
    icon: Users2,
    title: 'Conversational Interview',
    description:
      'A relaxed phone or video discussion focusing on your career ambitions, values, and past dealership accomplishments.',
  },
  {
    step: 'Step Three',
    icon: CheckCircle2,
    title: 'Technical & Practical Round',
    description:
      'Depending on the role, a showroom walkthrough simulation, diagnostic troubleshooting test, or case presentation.',
  },
  {
    step: 'Step Four',
    icon: Handshake,
    title: 'Offer & Seamless Onboarding',
    description:
      'Transparent compensation offer, welcome kit, OEM academy induction schedule, and mentorship pairing.',
  },
]

export function CareersProcess() {
  return (
    <section className="bg-white py-16 font-alt md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 text-[13px] font-semibold uppercase tracking-[0.25em] text-[#0c2340]">
            Transparent &amp; Respectful
            <span aria-hidden="true" className="h-0.5 w-10 bg-brand-green" />
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0c2340] sm:text-3xl md:text-4xl">
            Our Hiring Journey
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-ink/70">
            We value your time. We keep our selection process streamlined, communicative, and transparent
            from day one.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="relative rounded-2xl border border-neutral-200/80 bg-[#f8fafc] p-6 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-green">{item.step}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#0b1a36] shadow-sm ring-1 ring-neutral-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="mt-4 text-base font-bold text-[#0c2340]">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/70">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* HR Contact Banner */}
        <div className="mt-16 rounded-2xl bg-[#081733] p-8 text-white md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">
                Have Questions About Careers?
              </span>
              <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                Connect Directly With Our Talent Acquisition Team
              </h3>
              <p className="mt-2 max-w-xl text-xs leading-relaxed text-white/75 sm:text-sm">
                Have questions about compensation, relocation assistance, or apprenticeship programs? Our
                human resources team is here to assist you.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:careers@arsimperial.com"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-xs font-semibold tracking-wide text-white ring-1 ring-white/20 hover:bg-white hover:text-[#0b1a36] transition-colors"
              >
                <Mail className="h-4 w-4 text-brand-green" aria-hidden="true" />
                careers@arsimperial.com
              </a>
              <a
                href="tel:6202122112"
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0b1a36] shadow-md hover:bg-white transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call HR: 6202122112
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
