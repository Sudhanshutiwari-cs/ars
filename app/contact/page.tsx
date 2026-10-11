import type { Metadata } from 'next'
import { SiteHeader } from '@/components/ars/site-header'
import { ContactHero } from '@/components/ars/contact/contact-hero'
import { ContactStats } from '@/components/ars/contact/contact-stats'
import { ContactFormSection } from '@/components/ars/contact/contact-form-section'
import { Faq } from '@/components/ars/faq'
import { SiteFooter } from '@/components/ars/site-footer'

export const metadata: Metadata = {
  title: 'Contact ARS Imperial Landmark | Noida, India',
  description:
    'Contact ARS Imperial Landmark for automotive dealership and business enquiries. Call 6202122112 or visit the listed ARS MotoCorp location in Noida, Uttar Pradesh.',
  keywords: [
    'ARS Imperial Landmark contact',
    'ARS Group Noida contact number',
    'ARS Imperial Noida contact',
    'ARS Group address',
    'ARS MotoCorp Noida contact',
    'ARS Imperial Landmark phone number',
  ],
  alternates: {
    canonical: 'https://arsimperiallandmark.com/contact-us/',
  },
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
