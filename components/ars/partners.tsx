'use client'

import { useState } from 'react'
import { Leaf } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Eyebrow } from './eyebrow'

type Category = 'cars' | 'two' | 'commercial'

type Partner = { name: string; categories: Category[]; render: () => React.ReactNode }

const Icon = ({ src, className }: { src: string; className?: string }) => (
  <img src={src || '/placeholder.svg'} alt="" className={cn('object-contain', className)} />
)

const partners: Partner[] = [
  {
    name: 'Mahindra',
    categories: ['cars'],
    render: () => (
      <div className="flex flex-col items-center gap-1">
        <Icon src="/logos/mahindra.svg" className="h-6 w-9" />
        <span className="text-[11px] text-neutral-700">mahindra</span>
      </div>
    ),
  },
  {
    name: 'Toyota',
    categories: ['cars'],
    render: () => (
      <div className="flex flex-col items-center gap-0.5">
        <Icon src="/logos/toyota-mono.svg" className="h-7 w-10 opacity-70" />
        <span className="text-[12px] font-bold tracking-wide text-[#e00b1c]">TOYOTA</span>
      </div>
    ),
  },
  { name: 'Kia', categories: ['cars'], render: () => <Icon src="/logos/kia-mono.svg" className="h-12 w-20" /> },
  { name: 'Jeep', categories: ['cars'], render: () => <Icon src="/logos/jeep-mono.svg" className="h-12 w-16" /> },
  {
    name: 'Maruti Suzuki',
    categories: ['cars'],
    render: () => (
      <div className="flex flex-col items-center gap-1">
        <Icon src="/logos/suzuki-mono.svg" className="h-6 w-6 [filter:invert(17%)_sepia(80%)_saturate(3000%)_hue-rotate(225deg)]" />
        <span className="text-[11px] font-bold tracking-wide text-[#1a3d9a]">MARUTI SUZUKI</span>
      </div>
    ),
  },
  {
    name: 'Tata Motors',
    categories: ['cars', 'commercial'],
    render: () => (
      <div className="flex flex-col items-center gap-0.5">
        <Icon src="/logos/tata.svg" className="h-7 w-10" />
        <span className="text-[12px] font-extrabold tracking-wide text-[#1c4489]">TATA MOTORS</span>
      </div>
    ),
  },
  {
    name: 'Honda',
    categories: ['two', 'cars'],
    render: () => (
      <div className="flex flex-col items-center gap-0.5">
        <Icon src="/logos/honda.svg" className="h-8 w-12" />
        <span className="text-[11px] font-bold tracking-[0.15em] text-[#e40521]">HONDA</span>
      </div>
    ),
  },
  {
    name: 'Hyundai',
    categories: ['cars'],
    render: () => (
      <div className="flex flex-col items-center gap-0.5">
        <Icon src="/logos/hyundai.svg" className="h-7 w-11" />
        <span className="text-[12px] font-semibold tracking-[0.12em] text-[#002c5e]">HYUNDAI</span>
      </div>
    ),
  },
  {
    name: 'AltiGreen',
    categories: ['commercial'],
    render: () => (
      <div className="flex items-center gap-1.5">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#43a047]">
          <Leaf className="h-3.5 w-3.5 text-white" aria-hidden="true" />
        </span>
        <span className="text-[15px] font-medium text-neutral-800">AltiGreen</span>
      </div>
    ),
  },
  {
    name: 'Ashok Leyland',
    categories: ['commercial'],
    render: () => (
      <div className="flex flex-col items-center gap-1">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-[#1d64b5]">
          <span className="h-2 w-2 rounded-full bg-[#1d64b5]" />
        </span>
        <span className="text-[10px] font-bold tracking-wide text-[#1d64b5]">ASHOK LEYLAND</span>
      </div>
    ),
  },
  {
    name: 'Mahindra Commercial Vehicles',
    categories: ['commercial'],
    render: () => (
      <div className="flex flex-col items-center leading-none">
        <span className="text-[17px] font-black text-[#e31b23]">Mahindra</span>
        <span className="mt-1 text-[7.5px] font-semibold tracking-wide text-neutral-800">COMMERCIAL VEHICLES</span>
      </div>
    ),
  },
  {
    name: 'Tata Motors Commercial Vehicles',
    categories: ['commercial'],
    render: () => (
      <div className="flex flex-col items-center leading-none">
        <span className="text-[14px] font-extrabold text-[#1c4489]">TATA MOTORS</span>
        <span className="mt-1 text-[7.5px] font-semibold tracking-wide text-[#1c4489]">COMMERCIAL VEHICLES</span>
      </div>
    ),
  },
  {
    name: 'TVS',
    categories: ['two'],
    render: () => (
      <div className="flex items-center gap-1">
        <span className="text-[20px] font-black italic tracking-wider text-[#1b3a8a]">TVS</span>
        <span className="h-1.5 w-8 -skew-x-[30deg] rounded-sm bg-[#e31b23]" aria-hidden="true" />
      </div>
    ),
  },
  { name: 'Bajaj', categories: ['two'], render: () => <Icon src="/logos/bajaj-auto.svg" className="h-8 w-24" /> },
  { name: 'Hero', categories: ['two'], render: () => <Icon src="/logos/hero-motocorp.svg" className="h-9 w-24" /> },
]

const tabs: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'Cars & Passenger Vehicles' },
  { id: 'two', label: 'Two-Wheelers' },
  { id: 'commercial', label: 'Commercial Vehicles' },
]

export function Partners() {
  const [active, setActive] = useState<Category | 'all'>('all')
  const visible = active === 'all' ? partners : partners.filter((p) => p.categories.includes(active))

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f7f8fa] to-[#eef0f3] py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-full w-[60%] bg-gradient-to-br from-transparent via-white/70 to-transparent [clip-path:polygon(30%_0,45%_0,15%_100%,0_100%)]"
      />
      <div className="relative mx-auto max-w-[1280px] px-6 text-center">
        <Eyebrow className="justify-center">Our Partners</Eyebrow>
        <h2 className="mt-4 text-balance text-3xl font-semibold text-ink md:text-[36px]">
          Trusted Brands. Stronger Together.
        </h2>
        <p className="mx-auto mt-3 max-w-[470px] text-[13px] leading-relaxed text-ink/70">
          We partner with leading automotive brands to bring you a diverse range of mobility solutions
          across cars, bikes and commercial vehicles.
        </p>

        <div role="tablist" aria-label="Partner categories" className="mt-6 flex flex-wrap items-center justify-center">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                'relative px-8 py-2 text-[11px] transition-colors',
                i !== 0 && 'before:absolute before:left-0 before:top-1/2 before:h-5 before:w-px before:-translate-y-1/2 before:bg-ink/20',
                active === tab.id ? 'font-medium text-ink' : 'text-ink/60 hover:text-ink',
              )}
            >
              <span
                className={cn(
                  'pb-2',
                  active === tab.id && 'border-b-2 border-brand-green',
                )}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        <ul className="mx-auto mt-6 grid max-w-[830px] grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {visible.map((partner) => (
            <li
              key={partner.name}
              className="flex h-[70px] items-center justify-center rounded-md bg-white/90 shadow-[0_1px_3px_rgba(15,29,58,0.05)] transition-shadow hover:shadow-md"
            >
              <span className="sr-only">{partner.name}</span>
              <span aria-hidden="true">{partner.render()}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
