import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ContactInfoRow } from './contact-info-row'

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f8fc] font-alt">
      <div className="absolute inset-y-0 right-0 hidden w-[64%] lg:block">
        <Image
          src="/images/contact-hero.png"
          alt="ARS customer support executive wearing a headset, smiling at her laptop"
          fill
          priority
          sizes="64vw"
          className="object-cover object-right"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 -left-px w-[55%] bg-gradient-to-r from-[#f5f8fc] from-10% via-[#f5f8fc]/75 to-transparent"
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 py-12 md:px-12 lg:min-h-[520px] lg:py-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-[12px]">
            <li>
              <Link href="/" className="font-semibold text-[#0b2a5b] hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-ink/40">
              /
            </li>
            <li aria-current="page" className="text-ink/55">
              Contact Us
            </li>
          </ol>
        </nav>

        <div className="mt-9 max-w-[440px]">
          <p className="flex items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0b2a5b]">
            Get in touch
            <span aria-hidden="true" className="h-px w-[60px] bg-[#0b2a5b]" />
          </p>
          <h1 className="mt-3 text-[38px] font-bold leading-[1.1] text-[#0b2a5b] md:text-[44px]">
            Connect with
            <br />
            ARS Group Team
          </h1>
          <p className="mt-6 text-[14px] leading-relaxed text-ink/60">
            {
              'Whether you’re looking for a partnership, have a business query, or need support — we’re here to help. Reach out to us and let’s build something great together.'
            }
          </p>
        </div>

        <ContactInfoRow variant="stacked" className="mt-8 max-w-[520px]" />

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0b2a5b] px-6 py-3 text-[13px] font-semibold text-white shadow-md transition-colors hover:bg-[#0e3672]"
        >
          Send Us a Message
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="relative aspect-[16/10] w-full lg:hidden">
        <Image
          src="/images/contact-hero.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>
    </section>
  )
}
