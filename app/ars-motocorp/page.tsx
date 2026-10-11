import type { Metadata } from 'next'
import { SiteHeader } from '@/components/ars/site-header'
import { MotocorpHero } from '@/components/ars/motocorp/motocorp-hero'
import { MotocorpVenture } from '@/components/ars/motocorp/motocorp-venture'
import { MotocorpVehicles } from '@/components/ars/motocorp/motocorp-vehicles'
import { ContactBanner } from '@/components/ars/contact-banner'
import { Faq } from '@/components/ars/faq'
import { SiteFooter } from '@/components/ars/site-footer'

export const metadata: Metadata = {
  title: 'ARS MotoCorp | ARS Imperial Landmark',
  description:
    'ARS MotoCorp delivers exceptional two-wheeler experiences, representing leading motorcycle, scooter and EV brands across North and East India.',
}

export default function MotocorpPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <MotocorpHero />
        <MotocorpVenture />
        <MotocorpVehicles />
        <ContactBanner />
        <Faq contactHref="/contact" />
      </main>
      <SiteFooter />
    </>
  )
}
