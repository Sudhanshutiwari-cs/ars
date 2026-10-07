'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Leaf, MapPinned, Settings, Truck } from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  { icon: Truck, title: 'Reliable Fleet', text: 'On-Time, Every Time' },
  { icon: Settings, title: 'Operational Efficiency', text: 'Smarter. Faster. Better.' },
  { icon: Leaf, title: 'Sustainable Mobility', text: 'Lower Emissions, Greener Tomorrow' },
  { icon: MapPinned, title: 'Nationwide Presence', text: 'Serving Every Corner of India' },
]

const SLIDE_COUNT = 4

export function CommercialHero() {
  const [slide, setSlide] = useState(0)
  const go = (dir: number) => setSlide((s) => (s + dir + SLIDE_COUNT) % SLIDE_COUNT)

  return (
    <section className="px-0">
      <div className="relative overflow-hidden bg-[#0a1a3a] font-alt text-white">
        <Image
          src="/images/cm-hero.png"
          alt="ARS Commercial Mobility truck driving on an Indian highway at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0a1f4a]/90 via-[#0a1f4a]/55 via-35% to-transparent to-60%"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#0a1f4a]/45 lg:hidden" />

        <div className="relative mx-auto flex max-w-[1280px] flex-col px-6 pb-10 pt-16 md:px-14 lg:min-h-[520px] lg:pt-[90px]">
          <p className="flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.2em] text-white/90">
            ARS Commercial Mobility
            <span aria-hidden="true" className="h-px w-[74px] bg-white/80" />
          </p>
          <h1 className="mt-3 text-[38px] font-bold leading-[1.12] md:text-[46px]">
            Powering
            <br />
            <span className="text-[#6cb6ff]">Commercial Mobility</span>
            <br />
            Across India
          </h1>
          <p className="mt-5 max-w-[350px] text-[13px] leading-[1.6] text-white/90">
            {"ARS Commercial Mobility delivers reliable, efficient, and sustainable mobility solutions for businesses, keeping India's economy moving forward."}
          </p>
          <a
            href="#vehicles"
            className="mt-6 inline-flex w-fit items-center gap-4 rounded-full border border-[#3b82f6]/60 bg-[#0b4aa8] px-5 py-2.5 text-[12.5px] font-medium shadow-lg shadow-[#0b4aa8]/30 transition-colors hover:bg-[#0d5ad0]"
          >
            Explore Our Mobility Solutions
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <div className="mt-12 flex flex-col gap-8 lg:mt-auto lg:flex-row lg:items-end lg:justify-between lg:pt-14">
            <ul className="grid grid-cols-2 gap-6 md:flex md:items-center md:gap-0">
              {features.map(({ icon: Icon, title, text }, i) => (
                <li
                  key={title}
                  className={cn(
                    'flex items-center gap-3 md:px-6',
                    i === 0 && 'md:pl-0',
                    i > 0 && 'md:border-l md:border-white/40',
                  )}
                >
                  <Icon className="h-7 w-7 shrink-0" strokeWidth={1.3} aria-hidden="true" />
                  <div>
                    <p className="text-[11.5px] font-semibold">{title}</p>
                    <p className="mt-0.5 text-[9px] text-white/80">{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-end gap-4">
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous slide"
                  className="flex h-8 w-8 items-center justify-center border border-white/80 transition-colors hover:bg-white hover:text-[#0a1a3a]"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next slide"
                  className="flex h-8 w-8 items-center justify-center border border-white/80 transition-colors hover:bg-white hover:text-[#0a1a3a]"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <div className="flex gap-1.5" role="tablist" aria-label="Slides">
                {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={slide === i}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => setSlide(i)}
                    className={cn(
                      'h-[3px] rounded-full transition-all',
                      slide === i ? 'w-6 bg-[#3b9bff]' : 'w-2.5 bg-white/50',
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
