'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { MotoBrandStrip } from '@/components/ars/hero-brand-strips'

export function MotocorpHero() {
  return (
    <section className="px-0">
      <div className="relative overflow-hidden bg-[#0a1a3a] font-alt text-white">
        <Image
          src="https://res.cloudinary.com/df01whs60/image/upload/v1791687101/Analysis_output_1_s0ropm.png"
          alt="ARS MotoCorp showroom at dusk with motorcycles and scooters lined up outside"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0a1f4a]/95 via-[#0a1f4a]/65 via-40% to-transparent to-75%"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#0a1f4a]/45 lg:hidden" />

        <div className="relative mx-auto flex max-w-[1280px] flex-col px-6 pb-12 pt-16 md:px-14 lg:min-h-[460px] lg:pt-[90px]">
          <p className="flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.2em] text-white/90">
            ARS MotoCorp
            <span aria-hidden="true" className="h-px w-[74px] bg-white/80" />
          </p>
          <h1 className="mt-3 text-[38px] font-bold leading-[1.12] md:text-[46px]">
            Built for the Ride
            <br />
            <span className="text-[#6cb6ff]">Two-Wheeler Experiences</span>
            <br />
            Driven by Trust
          </h1>
          <p className="mt-5 max-w-[420px] text-[13px] leading-[1.6] text-white/90">
            ARS MotoCorp operates across the two-wheeler segment, representing leading motorcycle and scooter brands and delivering reliable mobility solutions through its dealership network.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#vehicles"
              className="inline-flex items-center gap-4 rounded-full border border-[#3b82f6]/60 bg-[#0b4aa8] px-5 py-2.5 text-[12.5px] font-medium shadow-lg shadow-[#0b4aa8]/30 transition-colors hover:bg-[#0d5ad0]"
            >
              Explore Motorcycles & Scooters
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/contact#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-[12.5px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Book Test Ride
            </a>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">Brands Represented</p>
            <MotoBrandStrip />
          </div>
        </div>
      </div>
    </section>
  )
}
