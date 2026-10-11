'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, BatteryCharging, Bike, Fuel, Gauge, Shield, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

type Vehicle = {
  name: string
  price: string
  image: string
  specs: { icon: typeof Fuel; label: string }[]
}

const vehicles: Vehicle[] = [
  {
    name: 'Komaki Ranger Electric',
    price: '1.68 Lakh',
    image: '/images/panel-bike.png',
    specs: [
      { icon: Zap, label: 'Electric Cruiser' },
      { icon: BatteryCharging, label: '200 km Range' },
      { icon: Shield, label: 'Smart Tech' },
    ],
  },
  {
    name: 'Royal Enfield Classic 350',
    price: '1.93 Lakh',
    image: '/images/biz-motocorp.png',
    specs: [
      { icon: Fuel, label: '349cc J-Series' },
      { icon: Gauge, label: 'Dual ABS' },
      { icon: Bike, label: '5-Speed Manual' },
    ],
  },
  {
    name: 'TVS Apache RTR 160 4V',
    price: '1.24 Lakh',
    image: '/images/hero-motocorp.png',
    specs: [
      { icon: Fuel, label: '160cc 4-Valve' },
      { icon: Gauge, label: 'Ride Modes' },
      { icon: Shield, label: 'SmartXonnect' },
    ],
  },
  {
    name: 'Hero Splendor+ XTEC',
    price: '79,911',
    image: 'https://res.cloudinary.com/df01whs60/image/upload/v1791689039/High-End_Motorcycle_Showroom_Display_kcppgn.png',
    specs: [
      { icon: Fuel, label: '97.2cc i3S' },
      { icon: Gauge, label: 'Digital Cluster' },
      { icon: Shield, label: 'High Mileage' },
    ],
  },
]

const PAGES = 3

export function MotocorpVehicles() {
  const [page, setPage] = useState(0)
  const go = (dir: number) => setPage((p) => (p + dir + PAGES) % PAGES)
  const ordered = vehicles.map((_, i) => vehicles[(i + page) % vehicles.length])

  return (
    <section id="vehicles" className="relative overflow-hidden bg-[#f1f5fb] py-12 font-alt">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-[420px] w-[320px] -skew-x-[30deg] bg-gradient-to-b from-[#dbe6f5] to-transparent opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-24 h-[340px] w-[260px] skew-x-[30deg] bg-gradient-to-b from-[#dbe6f5] to-transparent opacity-70"
      />

      <div className="relative mx-auto max-w-[1240px] px-6 md:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center gap-4 text-[12px] font-bold uppercase tracking-[0.12em] text-[#1f5fc7]">
            <span aria-hidden="true" className="h-px w-12 bg-[#1f5fc7]" />
            Latest Picks
            <span aria-hidden="true" className="h-px w-12 bg-[#1f5fc7]" />
          </p>
          <h2 className="mt-2 text-[28px] font-bold text-[#0b2a6b] md:text-[32px]">Explore Our Two-Wheelers</h2>
          <p className="mt-1 text-[16px] text-[#4a5a78]">Motorcycles. Scooters. Electric Rides. Built for Every Road.</p>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous vehicles"
            className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[#0b2f75] text-white transition-colors hover:bg-[#0b3a8c] md:flex"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>

          <ul className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
            {ordered.slice(0, 3).map((v, i) => (
              <li
                key={v.name}
                className={cn(
                  'flex items-center gap-3 md:px-3',
                  i > 0 && 'md:border-l md:border-[#cfd9ea]',
                )}
              >
                <div className="relative aspect-[4/3] w-[55%] shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    sizes="(min-width: 768px) 18vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[14px] font-bold text-[#0b2a6b]">{v.name}</h3>
                  <p className="mt-1.5 text-[16px] font-semibold text-[#0b2a6b]">{`₹ ${v.price}`}</p>
                  <p className="text-[9.5px] text-[#4a5a78]">*(Ex-showroom price)</p>
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                    {v.specs.map(({ icon: Icon, label }) => (
                      <li key={label} className="flex items-center gap-1.5 text-[9.5px] text-[#1c2b4a]">
                        <Icon className="h-3.5 w-3.5 text-[#0b2a6b]" aria-hidden="true" />
                        {label}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact#contact"
                    className="mt-3 inline-flex items-center gap-2.5 rounded-sm bg-[#0b2f75] px-4 py-2 text-[9px] font-semibold uppercase text-white transition-colors hover:bg-[#0b3a8c]"
                  >
                    Explore More
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    <span className="sr-only">{`about ${v.name}`}</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next vehicles"
            className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[#0b2f75] text-white transition-colors hover:bg-[#0b3a8c] md:flex"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-1.5">
          {Array.from({ length: PAGES }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show page ${i + 1}`}
              aria-current={page === i}
              onClick={() => setPage(i)}
              className={cn('h-1 rounded-full transition-all', page === i ? 'w-4 bg-[#0b2f75]' : 'w-3 bg-[#c7d3e6]')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
