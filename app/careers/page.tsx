import type { Metadata } from 'next'
import { SiteHeader } from '@/components/ars/site-header'
import { CareersHero } from '@/components/ars/careers/careers-hero'
import { CareersFormSection } from '@/components/ars/careers/careers-form-section'
import { CareersCulture } from '@/components/ars/careers/careers-culture'
import { CareersProcess } from '@/components/ars/careers/careers-process'
import { Faq } from '@/components/ars/faq'
import { SiteFooter } from '@/components/ars/site-footer'

export const metadata: Metadata = {
  title: 'Careers & Job Application | ARS Imperial Landmark',
  description:
    'Apply to join ARS Imperial Landmark. Fill out our online career application form for opportunities across sales, service diagnostics, customer relations, logistics, and management.',
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
