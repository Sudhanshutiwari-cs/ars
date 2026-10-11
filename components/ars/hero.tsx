'use client'

import { useEffect, useState, type ReactNode } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BrandStrip } from './brand-strip'
import { Eyebrow } from './eyebrow'
import { MotoBrandStrip, CommercialBrandStrip } from './hero-brand-strips'

type Slide = {
  id: string
  eyebrow: string
  title: string
  subtitle: string[]
  description: string
  stats: { title: string; text: string[] }[]
  cta: { label: string; href: string }
  image: { src: string; alt: string }
  brands: ReactNode
}

const slides: Slide[] = [
  {
    id: 'automotive',
    eyebrow: 'ARS Global Automotive',
    title: 'Driven by Excellence',
    subtitle: ['Mobility for Every Journey'],
    description:
      'Representing leading passenger vehicle brands across North and East India, ARS Global Automotive delivers trusted mobility solutions through a growing network of professional dealerships.',
    stats: [
      { title: '4-Wheeler', text: ['Passenger Vehicle', 'Segment'] },
      { title: '8+', text: ['Leading Brands', 'Represented'] },
      { title: 'North & East', text: ['India Presence'] },
      { title: 'Multiple', text: ['EV, Petrol & Diesel', 'Options'] },
    ],
    cta: { label: 'Explore ARS Global Automotive', href: '#business' },
    image: {
      src: '/images/hero.png',
      alt: 'ARS Global Automotive dealership with SUVs parked in front at sunset',
    },
    brands: <BrandStrip tone="light" />,
  },
  {
    id: 'motocorp',
    eyebrow: 'ARS MotoCorp',
    title: 'Built for the Ride',
    subtitle: ['Two-Wheeler Experiences,', 'Driven by Trust'],
    description:
      'ARS MotoCorp operates across the two-wheeler segment, representing leading motorcycle and scooter brands and delivering reliable mobility solutions through its dealership network.',
    stats: [
      { title: '2-Wheeler', text: ['Mobility Segment'] },
      { title: '11+', text: ['Leading Brands', 'Represented'] },
      { title: 'Motorcycles &', text: ['Scooters'] },
      { title: 'North & East', text: ['India Presence'] },
    ],
    cta: { label: 'Explore ARS MotoCorp', href: '#business' },
    image: {
      src: '/images/hero-motocorp.png',
      alt: 'ARS MotoCorp showroom at dusk with motorcycles and scooters lined up outside',
    },
    brands: <MotoBrandStrip />,
  },
  {
    id: 'commercial',
    eyebrow: 'ARS Commercial Mobility',
    title: 'Powering Business Mobility',
    subtitle: ['Built for Every Commercial Journey'],
    description:
      'ARS Commercial Mobility serves the commercial and heavy-duty vehicle segment through leading brands, offering dependable mobility solutions for businesses and transport needs.',
    stats: [
      { title: 'Commercial &', text: ['Heavy-Duty Vehicles'] },
      { title: '4+', text: ['Leading Brands', 'Represented'] },
      { title: 'Trucks &', text: ['Buses'] },
      { title: 'Business-Focused', text: ['Mobility Solutions'] },
    ],
    cta: { label: 'Explore ARS Commercial Mobility', href: '/commercial-mobility' },
    image: {
      src: '/images/hero-commercial.png',
      alt: 'ARS Commercial Mobility showroom at sunset with trucks and a bus parked in front',
    },
    brands: <CommercialBrandStrip />,
  },
]

const AUTOPLAY_MS = 7000

export function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = window.setTimeout(() => {
      setActive((i) => (i + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => window.clearTimeout(timer)
  }, [active, paused])

  const go = (dir: 1 | -1) => setActive((i) => (i + dir + slides.length) % slides.length)

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="ARS Imperial Landmark ventures"
      className="relative mt-2 overflow-hidden bg-navy-deep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="grid">
        {slides.map((slide, index) => {
          const isActive = index === active
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}: ${slide.eyebrow}`}
              aria-hidden={!isActive}
              inert={!isActive}
              className={cn(
                'relative col-start-1 row-start-1 transition-opacity duration-700 ease-out',
                isActive ? 'z-10 opacity-100' : 'z-0 opacity-0',
              )}
            >
              <Image
                src={slide.image.src || '/placeholder.svg'}
                alt={slide.image.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-[70%_center]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent"
              />

              <div className="relative mx-auto flex min-h-[520px] max-w-[1280px] flex-col justify-between px-6 pb-10 pt-20 md:px-[84px] md:pt-20">
                <div className="max-w-[580px] text-white">
                  <Eyebrow tone="light">{slide.eyebrow}</Eyebrow>
                  {index === 0 ? (
                    <h1 className="mt-5 text-balance">
                      <SlideHeading slide={slide} />
                    </h1>
                  ) : (
                    <h2 className="mt-5 text-balance">
                      <SlideHeading slide={slide} />
                    </h2>
                  )}
                  <p className="mt-4 max-w-[480px] text-[13px] leading-relaxed text-white/90">
                    {slide.description}
                  </p>

                  <dl className="mt-6 flex flex-wrap gap-y-4">
                    {slide.stats.map((stat, i) => (
                      <div
                        key={stat.title}
                        className={i === 0 ? 'pr-5' : 'border-l border-white/40 px-4 md:px-4'}
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
                    href={slide.cta.href}
                    className="mt-7 inline-flex items-center gap-3 rounded-sm bg-white px-4 py-2.5 text-[11px] font-medium text-ink transition-colors hover:bg-white/90"
                  >
                    {slide.cta.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>

                <div className="mt-12 pr-0 md:pr-28">{slide.brands}</div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-10 z-20">
        <div className="mx-auto flex max-w-[1280px] justify-end px-6 md:px-[84px]">
          <div className="pointer-events-auto hidden gap-2.5 md:flex">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-9 w-9 items-center justify-center border border-white/80 text-white transition-colors hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">Previous slide</span>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-9 w-9 items-center justify-center border border-white/80 text-white transition-colors hover:bg-white/10"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">Next slide</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-3 z-20 flex justify-center gap-2 md:hidden">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active}
            className={cn(
              'h-1 rounded-full transition-all',
              i === active ? 'w-6 bg-white' : 'w-3 bg-white/50',
            )}
          />
        ))}
      </div>
    </section>
  )
}

function SlideHeading({ slide }: { slide: Slide }) {
  return (
    <>
      <span className="block text-4xl font-semibold leading-tight md:text-[40px]">{slide.title}</span>
      <span className="block text-3xl font-light leading-tight md:text-[38px]">
        {slide.subtitle.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </span>
    </>
  )
}
