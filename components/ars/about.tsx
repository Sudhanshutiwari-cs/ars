import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'
import { BrandStrip } from './brand-strip'
import { Eyebrow } from './eyebrow'

const stats = [
  { value: '24+', label: 'Dealerships' },
  { value: '68', label: 'Approx. Outlets' },
  { value: '29 Years', label: 'Industry Legacy' },
  { value: '3', label: 'Business Verticals' },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-[#f6f7f9] to-[#eef0f3]">
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 hidden h-[48%] w-[24%] bg-gradient-to-br from-[#3a4250] to-[#1b212b] [clip-path:polygon(100%_0,100%_100%,0_100%)] lg:block"
      />
      <div className="relative mx-auto grid max-w-[1280px] gap-12 px-6 py-16 md:px-24 lg:grid-cols-[1fr_540px] lg:gap-16">
        <div>
          <Eyebrow>About ARS Imperial Landmark</Eyebrow>
          <h2 className="mt-4 text-ink">
            <span className="block text-4xl font-semibold leading-tight md:text-[40px]">
              A Legacy of Trust,
            </span>
            <span className="block text-3xl font-light leading-tight md:text-[38px]">
              A Vision for Tomorrow
            </span>
          </h2>
          <p className="mt-5 max-w-[445px] text-[12.5px] leading-[1.75] text-ink/75">
            ARS operates a diverse network of automotive dealerships across North and East India,
            representing leading brands such as Mahindra &amp; Mahindra, Toyota, Jeep, Triumph, KTM,
            and Royal Enfield, along with several other premium and luxury automotive brands. Our
            portfolio spans passenger and commercial vehicles across EV, petrol, and diesel segments,
            delivering trusted mobility solutions and exceptional customer experiences through our
            strong dealership network.
          </p>

          <dl className="mt-7 flex flex-wrap gap-y-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className={i === 0 ? 'pr-7' : 'border-l border-ink/15 px-5'}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-base font-semibold text-ink">{stat.value}</span>
                  <span className="block text-[11px] text-ink/70">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="/about"
            className="mt-9 inline-flex items-center gap-2 rounded-sm border border-ink/10 bg-white px-4 py-2.5 pr-8 text-[11px] font-semibold text-ink shadow-sm transition-colors hover:bg-white/80"
          >
            Discover Our Story
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <BrandStrip tone="dark" showMore className="mt-10" />
        </div>

        <div className="relative pb-20">
          <div className="relative aspect-[540/315] overflow-hidden rounded-md shadow-2xl">
            <Image
              src="/images/about.png"
              alt="ARS Imperial Landmark dealership at sunset"
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-black/15" />
            <button
              type="button"
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 text-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/90 transition-transform hover:scale-105">
                <Play className="h-4 w-4 fill-white" aria-hidden="true" />
              </span>
              <span className="text-[11px] font-medium tracking-[0.25em]">OUR JOURNEY</span>
            </button>
          </div>
          <div className="absolute bottom-0 right-0 w-[64%] rounded-sm bg-[#1d2430]/95 px-6 pb-8 pt-6 text-[11px] leading-relaxed text-white/90 shadow-xl">
            From a legacy of 29 years to a growing future,
            <br />
            we continue to move forward — together.
          </div>
          <p
            aria-hidden="true"
            className="absolute -right-10 top-6 hidden items-center gap-4 text-[8px] font-semibold uppercase tracking-[0.25em] text-ink [writing-mode:vertical-rl] rotate-180 xl:flex"
          >
            <span className="h-14 w-px bg-ink/40" />
            ARS Imperial Landmark
            <span className="h-14 w-px bg-ink/40" />
          </p>
        </div>
      </div>
    </section>
  )
}
