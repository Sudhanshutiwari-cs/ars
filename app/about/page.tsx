import type { Metadata } from 'next'
import { SiteHeader } from '@/components/ars/site-header'
import { AboutHero } from '@/components/ars/about/about-hero'
import { ChairmanMessage } from '@/components/ars/about/chairman-message'
import { ContactStats } from '@/components/ars/contact/contact-stats'
import { OurValues } from '@/components/ars/about/our-values'
import { Faq } from '@/components/ars/faq'
import { SiteFooter } from '@/components/ars/site-footer'

export const metadata: Metadata = {
  title: 'About Us | ARS Imperial Landmark',
  description:
    'ARS Imperial Landmark is a leading automotive dealership group in North & East India, driving progress through mobility with a customer-first approach.',
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutHero />
        <ChairmanMessage />
        <ContactStats />
        <OurValues />
        <Faq contactHref="/contact" />
      </main>
      <SiteFooter />
    </>
  )
}
