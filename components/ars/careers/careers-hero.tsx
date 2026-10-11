import Link from 'next/link'
import { ArrowDown, CheckCircle2, FileText, ShieldCheck, Sparkles } from 'lucide-react'

export function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1a3a] font-alt text-white">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(59,181,74,0.18),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 py-12 md:px-12 lg:py-16">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-[12px]">
            <li>
              <Link href="/" className="font-semibold text-white/90 hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/40">
              /
            </li>
            <li aria-current="page" className="text-brand-green font-medium">
              Careers
            </li>
          </ol>
        </nav>

        <div className="mt-8 max-w-3xl">
          <p className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.25em] text-[#9db8e8]">
            Career Opportunities
            <span aria-hidden="true" className="h-0.5 w-10 bg-brand-green" />
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:leading-[1.15]">
            Join Our Team &bull; Apply for Your Next Role
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/80 md:text-[16px]">
            At ARS Imperial Landmark, we empower talent across passenger vehicles, two-wheelers, and
            commercial mobility. Fill out the application form below to share your experience and profile
            with our Talent Acquisition team.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#application-form"
              className="inline-flex items-center gap-3 rounded-full bg-brand-green px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0b1a36] shadow-lg transition-transform hover:scale-105 hover:bg-white"
            >
              <FileText className="h-4 w-4" />
              Fill Application Form
              <ArrowDown className="h-4 w-4" />
            </a>

            <a
              href="#culture"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
            >
              Why Work With Us
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/15 pt-6 text-xs text-white/85">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 ring-1 ring-white/10">
            <CheckCircle2 className="h-3.5 w-3.5 text-brand-green" />
            Direct Application
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 ring-1 ring-white/10">
            <Sparkles className="h-3.5 w-3.5 text-brand-green" />
            Prompt Screening &amp; Review
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 ring-1 ring-white/10">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-green" />
            Equal Opportunity Employer
          </span>
        </div>
      </div>
    </section>
  )
}
