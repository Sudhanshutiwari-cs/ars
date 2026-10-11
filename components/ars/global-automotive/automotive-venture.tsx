import Image from 'next/image'
import { ArrowRight, Award, Car, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const highlights = [
  { icon: Car, title: '4-Wheeler Fleet', lines: ['SUVs, Sedans,', '& Electric'] },
  { icon: Award, title: 'Top OEM Brands', lines: ['Authorized', 'Dealership Network'] },
  { icon: Sparkles, title: 'EV & Petrol Tech', lines: ['Modern, Safe,', 'High Efficiency'] },
  { icon: ShieldCheck, title: 'Certified Support', lines: ['Genuine Parts &', 'Trained Experts'] },
]

export function AutomotiveVenture() {
  return (
    <section className="bg-white py-14 font-alt">
      <div className="mx-auto grid max-w-[1240px] items-center gap-8 px-6 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-7">
        <div className="relative aspect-[594/406] overflow-hidden rounded-lg">
          <Image
            src="https://res.cloudinary.com/df01whs60/image/upload/v1791688875/Luxury_Showroom_at_Sunset_ahzego.png"
            alt="ARS Global Automotive luxury passenger car showroom at sunset"
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
            ARS Global
            <br />
            Automotive
          </h2>
          <p className="mt-4 text-[15px] text-[#1f4fa3]">Delivering World-Class Passenger Vehicle Experiences</p>
          <p className="mt-4 text-[13px] leading-[1.6] text-[#3a4660]">
            ARS Global Automotive represents premier four-wheeler automotive brands across North and East India, creating memorable customer journeys from discovery to after-sales care.
          </p>
          <p className="mt-3 text-[13px] leading-[1.6] text-[#3a4660]">
            With contemporary showrooms, knowledgeable sales advisors, state-of-the-art service bays, and competitive financing solutions, we ensure every vehicle purchase is seamless and dependable.
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
            Explore Our Passenger Vehicles
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
