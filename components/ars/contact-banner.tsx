import Image from 'next/image'
import { ArrowRight, MessageSquareText } from 'lucide-react'

export function ContactBanner() {
  return (
    <section id="contact" className="px-3">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-sm bg-[#0a2440]">
        <div className="absolute inset-y-0 right-0 w-full md:w-[68%]">
          <Image
            src="/images/contact.png"
            alt="ARS sales advisor helping a couple in the showroom"
            fill
            sizes="(min-width: 768px) 68vw, 100vw"
            className="object-cover"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#0a2440] via-[#0a2440]/95 via-40% to-transparent to-70%" />

        <div className="relative px-6 py-16 text-white md:min-h-[415px] md:px-[52px] md:py-[84px]">
          <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/85">
            Get in touch
            <span aria-hidden="true" className="h-px w-6 bg-brand-green" />
          </p>
          <h2 className="mt-3">
            <span className="block text-3xl font-light leading-tight md:text-[34px]">Connect with the</span>
            <span className="block text-3xl font-semibold leading-tight md:text-[34px]">ARS Group Team</span>
          </h2>
          <p className="mt-3 max-w-[380px] text-[13px] leading-relaxed text-white/85">
            {'We’re here to help. Reach out to our team for inquiries, partnerships, career opportunities or any assistance you need.'}
          </p>
          <a
            href="mailto:info@arsimperial.com"
            className="mt-6 inline-flex items-center gap-4 rounded-full border border-brand-green/80 py-3 pl-5 pr-7 text-[13px] font-medium transition-colors hover:bg-white/5"
          >
            <MessageSquareText className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            <span aria-hidden="true" className="h-6 w-px bg-white/30" />
            Contact Us
            <ArrowRight className="ml-4 h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
