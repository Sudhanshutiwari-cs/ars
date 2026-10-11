import type { Metadata } from 'next'
import { SiteHeader } from '@/components/ars/site-header'
import { AboutHero } from '@/components/ars/about/about-hero'
import { ChairmanMessage } from '@/components/ars/about/chairman-message'
import { ContactStats } from '@/components/ars/contact/contact-stats'
import { OurValues } from '@/components/ars/about/our-values'
import { Faq } from '@/components/ars/faq'
import { SiteFooter } from '@/components/ars/site-footer'

export const metadata: Metadata = {
  title: 'About ARS Imperial Landmark | Sahil Singh',
  description:
    "Discover the story of ARS Imperial Landmark, established in 2020 and built on a 29-year automotive dealership legacy. Learn about CMD Sahil Singh, the group's vision and its three business verticals.",
  keywords: [
    'About ARS Imperial Landmark',
    'ARS Group history',
    'ARS Imperial Group founder',
    'Sahil Singh ARS',
    'ARS founder Sahil Singh',
    'ARS Group Noida',
    'ARS automotive legacy',
    'ARS Group leadership',
  ],
  alternates: {
    canonical: 'https://arsimperiallandmark.com/about-us/',
  },
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
