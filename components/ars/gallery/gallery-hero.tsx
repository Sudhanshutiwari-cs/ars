import Link from 'next/link'
import { Building2, Camera, Car, ShieldCheck } from 'lucide-react'

export function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1a3a] font-alt text-white">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(59,181,74,0.18),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 py-12 md:px-12 lg:py-16">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-[12px]">
            <li>
              <Link
                href="/"
                className="relative pb-1 font-semibold text-white/90 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/40">
              /
            </li>
            <li aria-current="page" className="text-brand-green font-medium">
              Gallery
            </li>
          </ol>
        </nav>

        <div className="mt-8 max-w-3xl">
          <p className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.25em] text-[#9db8e8]">
            Visual Showcase
            <span aria-hidden="true" className="h-0.5 w-10 bg-brand-green" />
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:leading-[1.15]">
            Experience ARS Imperial Landmark Dealerships
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/80 md:text-[16px]">
            Step inside our authorized dealership network across North and East India. Explore real
            photographs of our multi-brand showroom floors, premier facades, customer delivery lounges, and
            two-wheeler experience hubs.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/15 pt-6 text-xs text-white/85">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 ring-1 ring-white/10">
            <Building2 className="h-3.5 w-3.5 text-brand-green" />
            Authorized Multi-Brand Showrooms
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 ring-1 ring-white/10">
            <Car className="h-3.5 w-3.5 text-brand-green" />
            Passenger &amp; Two-Wheeler Hubs
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 ring-1 ring-white/10">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-green" />
            World-Class Facilities
          </span>
        </div>
      </div>
    </section>
  )
}
