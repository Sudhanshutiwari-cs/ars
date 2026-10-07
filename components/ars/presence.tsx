import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Eyebrow } from './eyebrow'

const locations = ['Jharkhand', 'Bihar', 'Oddisa', 'Siliguri', 'Noida', 'Ghaziabad']

const pins: { label: string; x: string; y: string; side?: 'left' | 'right'; upcoming?: boolean }[] = [
  { label: 'Delhi, Haryana, Chandigarh', x: '35%', y: '27%', upcoming: true },
  { label: 'Noida', x: '38%', y: '32%' },
  { label: 'Ghaziabad', x: '37%', y: '36%', side: 'left' },
  { label: 'Siliguri', x: '68%', y: '38%' },
  { label: 'Bihar', x: '57%', y: '43%' },
  { label: 'Jharkhand', x: '58%', y: '50%' },
  { label: 'Oddisa', x: '55%', y: '58%' },
]

function SolidPin({ className }: { className?: string }) {
  return <MapPin className={cn('fill-pin text-pin [&>circle]:fill-white [&>circle]:stroke-white', className)} aria-hidden="true" />
}

export function Presence() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7f9]">
      <Image src="/images/presence-bg.png" alt="" fill sizes="100vw" className="object-cover opacity-60" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 px-6 py-14 md:px-[84px] lg:grid-cols-2">
        <div>
          <Eyebrow>Our Presence</Eyebrow>
          <h2 className="mt-3 text-ink">
            <span className="block text-4xl font-semibold leading-tight md:text-[48px]">Growing Stronger</span>
            <span className="block text-4xl font-light leading-tight md:text-[46px]">Across India</span>
          </h2>
          <p className="mt-4 max-w-[420px] text-[13px] leading-relaxed text-ink/75">
            With a growing network of dealerships and touchpoints, we are expanding our presence across
            key regions, bringing trusted mobility solutions closer to our customers.
          </p>

          <ul className="mt-7 grid max-w-[440px] grid-cols-2 gap-y-6 sm:grid-cols-3">
            {locations.map((loc, i) => (
              <li
                key={loc}
                className={cn(
                  'flex items-center gap-2.5 text-[15px] font-semibold text-ink',
                  i % 3 !== 0 && 'sm:border-l sm:border-ink/15 sm:pl-8',
                )}
              >
                <SolidPin className="h-5 w-5 shrink-0" />
                {loc}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <span className="inline-block rounded-full bg-[#fde3e3] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-pin">
              Upcoming
            </span>
            <p className="mt-2 flex items-center gap-2.5 text-[15px] font-semibold text-ink">
              <SolidPin className="h-5 w-5 shrink-0" />
              Delhi, Haryana, Chandigarh
            </p>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          <Image
            src="/images/india-map.png"
            alt="Map of India showing ARS dealership locations"
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-contain mix-blend-multiply"
          />
          {pins.map((pin) => (
            <div
              key={pin.label}
              className="absolute flex -translate-y-full items-end"
              style={{ left: pin.x, top: pin.y }}
            >
              {pin.upcoming ? (
                <MapPin className="relative -left-3 h-7 w-7 fill-pin/15 text-pin/80" strokeWidth={1.25} aria-hidden="true" />
              ) : (
                <SolidPin className="relative -left-2.5 h-5 w-5" />
              )}
              <span
                className={cn(
                  'mb-2 whitespace-nowrap rounded-sm bg-[#1f2a3a] px-1.5 py-0.5 text-[8px] font-medium leading-tight text-white shadow',
                  pin.side === 'left' ? 'absolute right-5' : 'ml-0',
                  pin.upcoming && 'absolute bottom-6 left-1 max-w-[80px] whitespace-normal py-1',
                )}
              >
                {pin.label}
              </span>
            </div>
          ))}
          <dl className="absolute bottom-[4%] right-0 space-y-2 rounded-md border border-white bg-white/70 px-4 py-3 text-[9px] text-ink shadow-sm backdrop-blur md:-right-6">
            <div className="flex items-center gap-2">
              <SolidPin className="h-4 w-4" />
              <dt>Existing Locations</dt>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-pin" strokeWidth={1.25} aria-hidden="true" />
              <dt>Upcoming Locations</dt>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
