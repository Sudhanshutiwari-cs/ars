'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { BrandStrip } from '@/components/ars/brand-strip'

export function AutomotiveHero() {
  return (
    <section className="px-0">
      <div className="relative overflow-hidden bg-[#0a1a3a] font-alt text-white">
        <Image
          src="https://res.cloudinary.com/df01whs60/image/upload/v1791687797/ARS_Global_Automotive_at_Sunset_hychnu.png"
          alt="ARS Global Automotive luxury dealership with SUVs parked in front at sunset"
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
            ARS Global Automotive
            <span aria-hidden="true" className="h-px w-[74px] bg-white/80" />
          </p>
          <h1 className="mt-3 text-[34px] font-bold leading-[1.15] md:text-[44px]">
            ARS Global Automotive
            <span className="block text-[24px] font-light text-[#6cb6ff] md:text-[32px]">
              Passenger Mobility
            </span>
          </h1>
          <p className="mt-5 max-w-[420px] text-[13px] leading-[1.6] text-white/90">
            Representing leading passenger vehicle brands across North and East India, ARS Global Automotive delivers trusted mobility solutions through a growing network of professional dealerships.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#vehicles"
              className="inline-flex items-center gap-4 rounded-full border border-[#3b82f6]/60 bg-[#0b4aa8] px-5 py-2.5 text-[12.5px] font-medium shadow-lg shadow-[#0b4aa8]/30 transition-colors hover:bg-[#0d5ad0]"
            >
              Explore Passenger Vehicles
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/contact#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-[12.5px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Book Test Drive
            </a>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">Brands Represented</p>
            <BrandStrip tone="light" />
          </div>
        </div>
      </div>
    </section>
  )
}
