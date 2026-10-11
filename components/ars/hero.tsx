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
    cta: { label: 'Explore ARS Global Automotive', href: '/global-automotive' },
    image: {
      src: 'https://res.cloudinary.com/df01whs60/image/upload/v1791687797/ARS_Global_Automotive_at_Sunset_hychnu.png',
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
    cta: { label: 'Explore ARS MotoCorp', href: '/ars-motocorp' },
    image: {
      src: 'https://res.cloudinary.com/df01whs60/image/upload/v1791687101/Analysis_output_1_s0ropm.png',
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
      src: 'https://res.cloudinary.com/df01whs60/image/upload/v1791688094/ARS_Commercial_Mobility_at_Sunset_qemvaz.png',
      alt: 'ARS Commercial Mobility showroom at sunset with trucks and a bus parked in front',
    },
    brands: <CommercialBrandStrip />,
  },
]

const AUTOPLAY_MS = 7000

export function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)

  useEffect(() => {
    if (paused) return
    const timer = window.setTimeout(() => {
      setActive((i) => (i + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => window.clearTimeout(timer)
  }, [active, paused])

  const go = (dir: 1 | -1) => setActive((i) => (i + dir + slides.length) % slides.length)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null)
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return
    const distance = touchStartX - touchEndX
    if (distance > 45) {
      go(1) // swipe left -> next slide
    } else if (distance < -45) {
      go(-1) // swipe right -> previous slide
    }
  }

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="ARS Imperial Landmark ventures"
      className="relative overflow-hidden bg-navy-deep touch-pan-y select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
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
                isActive ? 'z-10 opacity-100' : 'z-0 opacity-0 pointer-events-none',
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
              {/* Full overlay on mobile for crystal clear text readability */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-black/65 sm:hidden"
              />
              {/* Desktop gradient overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 hidden sm:block bg-gradient-to-r from-black/85 via-black/55 to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent"
              />

              <div className="relative mx-auto flex min-h-[520px] max-w-[1280px] flex-col justify-between px-5 pb-16 pt-10 sm:px-8 sm:pb-14 sm:pt-16 md:px-[84px] md:pt-20 lg:min-h-[560px]">
                <div className="max-w-[580px] text-white">
                  <Eyebrow tone="light">{slide.eyebrow}</Eyebrow>
                  {index === 0 ? (
                    <h1 className="mt-3 text-balance sm:mt-5">
                      <SlideHeading slide={slide} />
                    </h1>
                  ) : (
                    <h2 className="mt-3 text-balance sm:mt-5">
                      <SlideHeading slide={slide} />
                    </h2>
                  )}
                  <p className="mt-3 max-w-[480px] text-xs leading-relaxed text-white/90 sm:mt-4 sm:text-[13px]">
                    {slide.description}
                  </p>

                  <dl className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-6 sm:flex sm:flex-wrap sm:gap-0">
                    {slide.stats.map((stat, i) => (
                      <div
                        key={stat.title}
                        className={cn(
                          'rounded-lg bg-white/10 p-2.5 backdrop-blur-xs sm:rounded-none sm:bg-transparent sm:p-0',
                          i === 0 ? 'sm:pr-5' : 'sm:border-l sm:border-white/40 sm:px-4 md:px-4',
                        )}
                      >
                        <dt className="text-xs font-semibold sm:text-sm">{stat.title}</dt>
                        <dd className="mt-0.5 text-[9.5px] leading-snug text-white/85 sm:text-[10px]">
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
                    className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-xs font-medium text-ink shadow-md transition-all hover:bg-white/90 active:scale-95 sm:mt-7 sm:rounded-sm sm:text-[11px]"
                  >
                    {slide.cta.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>

                <div className="mt-8 pr-0 sm:mt-10 md:mt-12 md:pr-28">
                  <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:hidden">
                    Brands Represented
                  </p>
                  {slide.brands}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Desktop Slider Controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-10 z-20 hidden md:block">
        <div className="mx-auto flex max-w-[1280px] justify-end px-6 md:px-[84px]">
          <div className="pointer-events-auto flex gap-2.5">
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

      {/* Mobile Slider Controls */}
      <div className="absolute inset-x-0 bottom-3.5 z-20 flex items-center justify-between px-5 md:hidden">
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Hero Slides">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === active}
              className="group px-1 py-2 focus:outline-none"
            >
              <span
                className={cn(
                  'block h-1.5 rounded-full transition-all duration-300',
                  i === active ? 'w-7 bg-white shadow-sm' : 'w-2.5 bg-white/40 group-hover:bg-white/70',
                )}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white backdrop-blur-xs transition-colors hover:bg-white/20 active:scale-90"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next slide"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white backdrop-blur-xs transition-colors hover:bg-white/20 active:scale-90"
          >
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}

function SlideHeading({ slide }: { slide: Slide }) {
  return (
    <>
      <span className="block text-2xl font-semibold leading-tight sm:text-3xl md:text-[40px]">
        {slide.title}
      </span>
      <span className="block text-xl font-light leading-tight sm:text-2xl md:text-[38px]">
        {slide.subtitle.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </span>
    </>
  )
}
