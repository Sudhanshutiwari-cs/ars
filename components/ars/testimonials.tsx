'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { Eyebrow } from './eyebrow'

const testimonials = [
  {
    name: 'Rahul Mehta',
    company: 'Tata Motors',
    image: '/images/client-rahul.png',
    quote:
      'ARS Global Automotive has been an excellent partner for our dealership. Their professionalism, support and market understanding are truly commendable.',
  },
  {
    name: 'Neha Sharma',
    company: 'KTM India',
    image: '/images/client-neha.png',
    quote:
      'We’ve seen great growth since partnering with ARS MotoCorp. Their team is responsive, proactive and always goes the extra mile.',
  },
  {
    name: 'Vikram Singh',
    company: 'Ashok Leyland',
    image: '/images/client-vikram.png',
    quote:
      'ARS Commercial Mobility has helped us find the right fleet solutions for our business. Their commitment to service and after-sales support is unmatched.',
  },
  {
    name: 'Amit Verma',
    company: 'Hyundai',
    image: '/images/client-amit.png',
    quote:
      'The entire experience with ARS has been smooth and professional. From sales to service, they truly understand what customers need.',
  },
  {
    name: 'Priya Nair',
    company: 'Mahindra',
    image: '/images/client-neha.png',
    quote:
      'A dependable partner with a strong dealership network and a genuine focus on customer satisfaction across every touchpoint.',
  },
]

export function Testimonials() {
  const track = useRef<HTMLUListElement>(null)
  const scroll = (dir: 1 | -1) =>
    track.current?.scrollBy({ left: dir * (track.current.clientWidth / 2), behavior: 'smooth' })

  return (
    <section className="relative overflow-hidden bg-[#eef3f8] py-14">
      <Image src="/images/testimonials-bg.png" alt="" fill sizes="100vw" className="object-cover opacity-80" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/10" />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-[64px]">
        <div className="flex items-end justify-between gap-6">
          <div>
            <Eyebrow>What Our Clients Say</Eyebrow>
            <h2 className="mt-2 text-balance text-3xl font-bold text-[#0d1c4a] md:ml-4 md:text-[38px]">
              Real People. Real Experiences.
            </h2>
            <p className="mt-2 max-w-[520px] text-[14px] leading-relaxed text-ink/70 md:ml-3">
              {'From seamless service to long-term partnerships, here’s what our clients have to say about working with ARS.'}
            </p>
          </div>
          <div className="mb-10 hidden gap-3 md:flex">
            <button
              type="button"
              onClick={() => scroll(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-md transition-colors hover:bg-white/80"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonials</span>
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0d1c4a] text-white shadow-md transition-colors hover:bg-[#13265f]"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonials</span>
            </button>
          </div>
        </div>

        <ul
          ref={track}
          className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="w-[82%] shrink-0 snap-start rounded-lg bg-white p-4 shadow-[0_4px_16px_rgba(15,29,58,0.08)] sm:w-[48%] lg:w-[calc(25%-9px)]"
            >
              <div className="flex gap-4">
                <Image
                  src={t.image || '/placeholder.svg'}
                  alt={`Portrait of ${t.name}`}
                  width={88}
                  height={86}
                  className="h-[86px] w-[88px] rounded-md object-cover"
                />
                <div className="pt-2">
                  <p className="text-[14px] font-semibold text-[#0d1c4a]">{t.name}</p>
                  <p className="mt-1 text-[11px] text-ink/60">{t.company}</p>
                  <div className="mt-2 flex gap-0.5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[#f5b301] text-[#f5b301]" aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </div>
              <Quote className="mt-3 h-3.5 w-3.5 rotate-180 fill-[#8aa0c0] text-[#8aa0c0]" aria-hidden="true" />
              <blockquote className="mt-1 pl-2 text-[12px] leading-[1.6] text-ink/80">
                {`“${t.quote}”`}
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
