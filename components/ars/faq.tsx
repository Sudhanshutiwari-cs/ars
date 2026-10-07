'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'What brands do you represent under ARS Global Automotive?',
    a: 'ARS Global Automotive represents leading passenger vehicle brands including Mahindra, Toyota, Kia, Jeep, Maruti Suzuki, Tata Motors, Honda and Hyundai across North and East India.',
  },
  {
    q: 'How can I book a test drive at your dealership?',
    a: 'You can book a test drive by calling us at 6202122112, using the Book A Test Drive option below, or by visiting your nearest ARS showroom.',
  },
  {
    q: 'Do you offer financing options and exchange benefits?',
    a: 'Yes. We work with leading banks and NBFCs to offer flexible financing, and our exchange programme gives you the best value for your existing vehicle.',
  },
  {
    q: 'What is the warranty coverage on new vehicles?',
    a: 'All new vehicles come with the manufacturer’s standard warranty. Extended warranty packages are also available at our dealerships.',
  },
  {
    q: 'How can I apply for a career at ARS Imperial Landmark?',
    a: 'Visit our Careers section or reach out to our team through the Contact Us page to learn about current openings across our business verticals.',
  },
  {
    q: 'Where are your showrooms and service centers located?',
    a: 'We have showrooms and service centers across Jharkhand, Bihar, Odisha, Siliguri, Noida and Ghaziabad, with upcoming locations in Delhi, Haryana and Chandigarh.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-[#fafbfd] py-16 font-alt">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 md:px-12 lg:grid-cols-[440px_1fr] lg:gap-14">
        <div className="pt-6">
          <p className="flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.3em] text-[#0c2340]">
            Frequently asked questions
            <span aria-hidden="true" className="h-0.5 w-6 bg-[#0c2340]" />
          </p>
          <h2 className="mt-5 text-4xl font-bold leading-[1.2] text-[#0c2340] md:text-[40px]">
            Have Questions?
            <br />
            {'We’re Here to Help.'}
          </h2>
          <p className="mt-6 max-w-[360px] text-[15px] leading-relaxed text-ink/60">
            Find answers to common questions about our business verticals, products, services, and more.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#0c2340] px-9 py-3.5 text-[15px] font-semibold text-[#0c2340] transition-colors hover:bg-[#0c2340] hover:text-white"
          >
            Contact Us
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>

        <ul className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <li key={faq.q} className="rounded-md border border-neutral-200 bg-white">
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-8 py-5 text-left text-[15px] font-semibold text-[#0c2340]"
                  >
                    {faq.q}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'h-0 w-0 shrink-0 border-x-[6px] border-t-[9px] border-x-transparent border-t-[#0c2340] transition-transform',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  hidden={!isOpen}
                  className="px-8 pb-5 text-[14px] leading-relaxed text-ink/70"
                >
                  {faq.a}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
