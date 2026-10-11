import type { Metadata } from 'next'
import { SiteHeader } from '@/components/ars/site-header'
import { ContactHero } from '@/components/ars/contact/contact-hero'
import { ContactStats } from '@/components/ars/contact/contact-stats'
import { ContactFormSection } from '@/components/ars/contact/contact-form-section'
import { Faq } from '@/components/ars/faq'
import { SiteFooter } from '@/components/ars/site-footer'

export const metadata: Metadata = {
  title: 'Contact Us | ARS Imperial Landmark',
  description:
    'Connect with the ARS Group team for partnerships, business queries, dealership inquiries, careers or support across North and East India.',
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ContactHero />
        <ContactStats />
        <ContactFormSection />
        <Faq />
      </main>
      <SiteFooter />
    </>
  )
}
