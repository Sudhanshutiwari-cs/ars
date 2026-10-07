import Image from 'next/image'
import {
  ArrowRight,
  Award,
  Handshake,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { Eyebrow } from './eyebrow'

const features: { icon: LucideIcon; title: string; text: string[] }[] = [
  { icon: ShieldCheck, title: 'Trusted Partnerships', text: ['Representing world-class brands', 'across multiple segments.'] },
  { icon: Users, title: 'Customer First', text: ['Your satisfaction drives', 'everything we do.'] },
  { icon: Award, title: 'Proven Legacy', text: ['Built on 29 years of industry', 'experience through ARS Automotive.'] },
  { icon: Lightbulb, title: 'Innovation & Growth', text: ['Embracing new opportunities', 'for a stronger tomorrow.'] },
  { icon: MapPin, title: 'Wide Network', text: ['24+ dealerships across', 'North and East India.'] },
  { icon: Handshake, title: 'Long-Term Relationships', text: ['Growing together with our', 'customers and partners.'] },
]

const panels = [
  { src: '/images/panel-car.png', alt: 'Black SUV at sunset', className: 'left-[3%] top-[30%] h-[44%] w-[24%]' },
  { src: '/images/panel-bike.png', alt: 'Sport motorcycle in showroom', className: 'left-[20%] top-[28%] h-[47%] w-[24%]' },
  { src: '/images/panel-truck.png', alt: 'White commercial truck', className: 'left-[38%] top-[24%] h-[51%] w-[24%]' },
]

export function WhyChooseUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-[#0d1117] text-white">
      <Image
        src="/images/why-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-right"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#0b0f16] via-[#0b0f16]/80 to-transparent" />

      <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
        <div className="absolute left-[34%] top-[8%] h-[30%] w-[22%] bg-white/10 backdrop-blur-[2px] [clip-path:polygon(40%_0,100%_0,60%_100%,0_100%)]" />
        {panels.map((panel) => (
          <div
            key={panel.src}
            className={`absolute overflow-hidden shadow-2xl [clip-path:polygon(38%_0,100%_0,62%_100%,0_100%)] ${panel.className}`}
          >
            <Image src={panel.src || '/placeholder.svg'} alt={panel.alt} fill sizes="25vw" className="object-cover" />
          </div>
        ))}
        <p className="absolute bottom-[16%] right-[14%] flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/80">
          <span className="h-px w-10 bg-white/60" />
          Trust <span className="text-white/50">/</span> Innovation <span className="text-white/50">/</span> Growth
        </p>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 py-16 md:px-[92px]">
        <div className="max-w-[500px]">
          <Eyebrow tone="light">Why Choose Us</Eyebrow>
          <h2 className="mt-5">
            <span className="block text-4xl font-semibold leading-tight md:text-[34px]">
              More Than a Group,
            </span>
            <span className="block text-3xl font-light leading-tight md:text-[32px]">
              A Commitment to Excellence
            </span>
          </h2>
          <p className="mt-5 max-w-[370px] text-[11.5px] leading-[1.75] text-white/85">
            At ARS Imperial Landmark, we go beyond business. With a legacy of trust, seamless
            partnerships and a customer-first approach, we deliver reliable mobility solutions that
            create lasting value — today and for tomorrow.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-y-8 sm:grid-cols-3">
            {features.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className={i % 3 === 0 ? 'sm:pr-5' : 'sm:border-l sm:border-white/10 sm:px-6'}
              >
                <Icon className="h-6 w-6" strokeWidth={1.25} aria-hidden="true" />
                <h3 className="mt-3 text-[11px] font-semibold">{title}</h3>
                <p className="mt-1 text-[8.5px] leading-relaxed text-white/75">
                  {text.map((line) => (
                    <span key={line} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>

          <a
            href="/about"
            className="mt-8 inline-flex items-center gap-3 rounded-sm bg-white px-4 py-2.5 text-[11px] font-semibold text-ink transition-colors hover:bg-white/90"
          >
            Discover Our Story
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
