import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Handshake } from 'lucide-react'

const heroStats = [
  { value: '24+', label: 'Dealerships' },
  { value: '68+', label: 'Outlets' },
]

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1a3a] font-alt text-white">
      <Image
        src="/images/about-hero.png"
        alt="ARS sales executive showing vehicle details on a tablet to a smiling couple inside a modern ARS showroom"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#0a1a3a] via-[#0a1a3a]/85 via-40% to-transparent to-75%"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#0a1a3a]/40 lg:hidden" />

      <div className="relative mx-auto max-w-[1280px] px-6 py-12 md:px-12 lg:min-h-[470px] lg:py-[46px]">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-[12px]">
            <li>
              <Link
                href="/"
                className="relative pb-2 font-semibold text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-white/70 hover:text-white/80"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/50">
              /
            </li>
            <li aria-current="page" className="text-white/60">
              About Us
            </li>
          </ol>
        </nav>

        <div className="mt-12 max-w-[440px]">
          <p className="flex items-center gap-3 text-[14px] font-medium uppercase tracking-[0.22em] text-[#9db8e8]">
            About us
            <span aria-hidden="true" className="h-px w-5 bg-[#9db8e8]" />
          </p>
          <h1 className="mt-2 text-[38px] font-bold leading-[1.18] md:text-[44px]">
            Driving Progress
            <br />
            Through Mobility
          </h1>
          <p className="mt-6 max-w-[300px] text-[12.5px] leading-[1.75] text-white/85 sm:max-w-[290px] md:text-[12px]">
            ARS Imperial Landmark is a leading automotive dealership group in North &amp; East India,
            committed to delivering exceptional mobility solutions. With a strong legacy, a diverse
            portfolio and a customer-first approach, we drive progress for a better tomorrow.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-6">
          <a
            href="#leadership"
            className="inline-flex items-center gap-5 rounded-full border border-white/80 px-5 py-2.5 text-[12px] font-medium transition-colors hover:bg-white hover:text-[#0a1a3a]"
          >
            Our Journey
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <ul className="flex items-center">
            {heroStats.map((stat, i) => (
              <li
                key={stat.label}
                className={`border-l border-white/30 px-4 ${i === heroStats.length - 1 ? 'border-r' : ''}`}
              >
                <p className="text-[16px] font-bold leading-none">{stat.value}</p>
                <p className="mt-1.5 text-[10px] text-white/85">{stat.label}</p>
              </li>
            ))}
            <li className="flex items-center gap-3 pl-6">
              <Handshake className="h-7 w-7" strokeWidth={1.2} aria-hidden="true" />
              <p className="text-[9px] leading-snug text-white/85">
                Trusted by
                <br />
                Thousands
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
