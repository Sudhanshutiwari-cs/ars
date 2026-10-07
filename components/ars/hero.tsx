import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { BrandStrip } from './brand-strip'
import { Eyebrow } from './eyebrow'

const stats = [
  { title: '4-Wheeler', text: ['Passenger Vehicle', 'Segment'] },
  { title: '8+', text: ['Leading Brands', 'Represented'] },
  { title: 'North & East', text: ['India Presence'] },
  { title: 'Multiple', text: ['EV, Petrol & Diesel', 'Options'] },
]

export function Hero() {
  return (
    <section id="home" className="relative mt-2 overflow-hidden bg-navy-deep">
      <Image
        src="/images/hero.png"
        alt="ARS Global Automotive dealership with SUVs parked in front at sunset"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="relative mx-auto flex min-h-[520px] max-w-[1280px] flex-col justify-between px-6 pb-10 pt-20 md:px-[84px] md:pt-20">
        <div className="max-w-[560px] text-white">
          <Eyebrow tone="light">ARS Global Automotive</Eyebrow>
          <h1 className="mt-5 text-balance">
            <span className="block text-4xl font-semibold leading-tight md:text-[40px]">
              Driven by Excellence
            </span>
            <span className="block text-3xl font-light leading-tight md:text-[38px]">
              Mobility for Every Journey
            </span>
          </h1>
          <p className="mt-4 max-w-[460px] text-[13px] leading-relaxed text-white/90">
            Representing leading passenger vehicle brands across North and East India, ARS Global
            Automotive delivers trusted mobility solutions through a growing network of professional
            dealerships.
          </p>

          <dl className="mt-6 flex flex-wrap gap-y-4">
            {stats.map((stat, i) => (
              <div
                key={stat.title}
                className={i === 0 ? 'pr-6' : 'border-l border-white/40 px-4 md:px-5'}
              >
                <dt className="text-sm font-semibold">{stat.title}</dt>
                <dd className="mt-0.5 text-[10px] leading-snug text-white/85">
                  {stat.text.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="#business"
            className="mt-7 inline-flex items-center gap-3 rounded-sm bg-white px-4 py-2.5 text-[11px] font-medium text-ink transition-colors hover:bg-white/90"
          >
            Explore ARS Global Automotive
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-12 flex items-end justify-between gap-6">
          <BrandStrip tone="light" />
          <div className="hidden gap-2.5 md:flex">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center border border-white/80 text-white transition-colors hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center border border-white/80 text-white transition-colors hover:bg-white/10"
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
