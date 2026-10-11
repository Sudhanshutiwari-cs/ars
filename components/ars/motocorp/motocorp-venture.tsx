import Image from 'next/image'
import { ArrowRight, Award, Bike, CheckCircle2, ShieldCheck, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const highlights = [
  { icon: Bike, title: 'Two-Wheeler Fleet', lines: ['Motorcycles,', 'Scooters & EVs'] },
  { icon: Award, title: '11+ Global Brands', lines: ['Authorized', 'Dealership Network'] },
  { icon: Zap, title: 'Electric Mobility', lines: ['Eco-Friendly,', 'Smart Battery Tech'] },
  { icon: ShieldCheck, title: 'Dedicated Service', lines: ['Genuine Spares &', 'Trained Mechanics'] },
]

export function MotocorpVenture() {
  return (
    <section className="bg-white py-14 font-alt">
      <div className="mx-auto grid max-w-[1240px] items-center gap-8 px-6 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-7">
        <div className="relative aspect-[594/406] overflow-hidden rounded-lg">
          <Image
            src="https://res.cloudinary.com/df01whs60/image/upload/v1791689039/High-End_Motorcycle_Showroom_Display_kcppgn.png"
            alt="ARS MotoCorp high-end motorcycle showroom display"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="flex items-center gap-4 text-[12px] font-bold uppercase tracking-[0.12em] text-[#0b3a8c]">
            Our Venture
            <span aria-hidden="true" className="h-0.5 w-[74px] bg-[#0b3a8c]" />
          </p>
          <h2 className="mt-2 text-[36px] font-bold leading-[1.1] text-[#0b2a6b] md:text-[40px]">
            ARS MotoCorp
          </h2>
          <p className="mt-4 text-[15px] text-[#1f4fa3]">Two-Wheeler Mobility Across Commuter, Performance & EV Segments</p>
          <p className="mt-4 text-[13px] leading-[1.6] text-[#3a4660]">
            ARS MotoCorp brings the joy of two-wheeler riding to thousands of daily commuters and leisure riders across North and East India, representing trusted motorcycle and scooter brands.
          </p>
          <p className="mt-3 text-[13px] leading-[1.6] text-[#3a4660]">
            From reliable fuel-efficient commuter bikes and iconic cruisers to high-speed electric scooters and adventure tourers, our state-of-the-art dealerships provide transparent buying, quick finance, and genuine spare parts.
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
            {highlights.map(({ icon: Icon, title, lines }, i) => (
              <li
                key={title}
                className={cn('px-1 sm:px-0 sm:pl-0', i > 0 && 'sm:border-l sm:border-[#c9d6ec] sm:pl-7')}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b3a8c] text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <p className="mt-3 text-[11px] font-semibold text-[#0b2a6b]">{title}</p>
                <p className="mt-1 text-[9.5px] leading-[1.5] text-[#4a5570]">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </p>
              </li>
            ))}
          </ul>

          <a
            href="#vehicles"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#0b2f75] px-6 py-2.5 text-[11px] font-semibold text-white transition-colors hover:bg-[#0b3a8c]"
          >
            Explore Our Two-Wheelers
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
