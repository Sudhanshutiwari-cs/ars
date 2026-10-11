import Link from 'next/link'
import { ArrowRight, MapPin, Phone, ShieldCheck } from 'lucide-react'

export function GalleryCta() {
  return (
    <section className="bg-[#0b1a36] py-14 font-alt text-white md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#081733] via-[#0b1a36] to-[#0d2249] p-8 md:p-14 shadow-2xl">
          <div aria-hidden="true" className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/20 px-3.5 py-1 text-xs font-semibold text-brand-green ring-1 ring-brand-green/30">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Visit In Person
            </span>

            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Experience the Craftsmanship &amp; Hospitality at Our Showrooms
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-white/80">
              Photos only tell part of the story. Visit one of our authorized showrooms across North and
              East India to test-drive your dream vehicle, explore tailored financing packages, and meet our
              passionate automotive team.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact#contact"
                className="inline-flex items-center gap-3 rounded-full bg-brand-green px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0b1a36] shadow-lg transition-transform hover:scale-105 hover:bg-white"
              >
                Book a Showroom Visit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
              >
                <MapPin className="h-4 w-4 text-brand-green" aria-hidden="true" />
                Find Nearest Dealership
              </Link>

              <a
                href="tel:6202122112"
                className="inline-flex items-center gap-2 text-xs font-medium text-white/80 hover:text-white"
              >
                <Phone className="h-4 w-4 text-brand-green" aria-hidden="true" />
                Call: 6202122112
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
