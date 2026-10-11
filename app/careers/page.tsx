import type { Metadata } from 'next'
import { SiteHeader } from '@/components/ars/site-header'
import { CareersHero } from '@/components/ars/careers/careers-hero'
import { CareersFormSection } from '@/components/ars/careers/careers-form-section'
import { CareersCulture } from '@/components/ars/careers/careers-culture'
import { CareersProcess } from '@/components/ars/careers/careers-process'
import { Faq } from '@/components/ars/faq'
import { SiteFooter } from '@/components/ars/site-footer'

export const metadata: Metadata = {
  title: 'Careers at ARS Imperial Landmark | Join Our Team',
  description:
    'Explore career opportunities at ARS Imperial Landmark across automotive retail, two-wheeler dealerships and commercial mobility. Discover opportunities to grow with the ARS team.',
  keywords: [
    'ARS Imperial Landmark careers',
    'ARS Group jobs',
    'ARS automotive careers',
    'automotive dealership jobs',
    'ARS Motocorp careers',
    'commercial vehicle jobs',
    'automotive jobs Noida',
  ],
  alternates: {
    canonical: 'https://arsimperiallandmark.com/careers/',
  },
}

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CareersHero />
        <CareersFormSection />
        <CareersCulture />
        <CareersProcess />
        <Faq contactHref="/contact" />
      </main>
      <SiteFooter />
    </>
  )
}
