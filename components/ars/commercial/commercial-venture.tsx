import Image from 'next/image'
import { ArrowRight, Leaf, MapPinned, Settings, Truck } from 'lucide-react'
import { cn } from '@/lib/utils'

const highlights = [
  { icon: Truck, title: 'Reliable Fleet', lines: ['On-Time,', 'Every Time'] },
  { icon: Leaf, title: 'Sustainable Mobility', lines: ['Lower Emissions,', 'Greener Tomorrow'] },
  { icon: Settings, title: 'Advanced Technology', lines: ['Smarter. Safer.', 'More Efficient.'] },
  { icon: MapPinned, title: 'Nationwide Support', lines: ['Serving Every', 'Corner of India'] },
]

export function CommercialVenture() {
  return (
    <section className="bg-white py-14 font-alt">
      <div className="mx-auto grid max-w-[1240px] items-center gap-8 px-6 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-7">
        <div className="relative aspect-[594/406] overflow-hidden rounded-lg">
          <Image
            src="/images/cm-venture.png"
            alt="ARS Commercial Mobility truck at a logistics warehouse loading dock"
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
            ARS Commercial
            <br />
            Mobility
          </h2>
          <p className="mt-4 text-[15px] text-[#1f4fa3]">Clean, Efficient and Sustainable Mobility Solutions</p>
          <p className="mt-4 text-[13px] leading-[1.6] text-[#3a4660]">
            {"ARS Commercial Mobility delivers reliable, efficient, and sustainable mobility solutions for businesses, keeping India's economy moving forward."}
          </p>
          <p className="mt-3 text-[13px] leading-[1.6] text-[#3a4660]">
            With a focus on clean energy, advanced technology, and customer-centric service, we provide
            modern commercial vehicle solutions that reduce emissions, improve operational efficiency, and
            support a greener tomorrow.
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
            Explore Our Commercial Mobility Solutions
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
