import type { Metadata } from 'next'
import { SiteHeader } from '@/components/ars/site-header'
import { AutomotiveHero } from '@/components/ars/global-automotive/automotive-hero'
import { AutomotiveVenture } from '@/components/ars/global-automotive/automotive-venture'
import { AutomotiveVehicles } from '@/components/ars/global-automotive/automotive-vehicles'
import { ContactBanner } from '@/components/ars/contact-banner'
import { Faq } from '@/components/ars/faq'
import { SiteFooter } from '@/components/ars/site-footer'

export const metadata: Metadata = {
  title: 'ARS Global Automotive | ARS Imperial Landmark',
  description:
    'ARS Global Automotive represents leading passenger vehicle brands across North and East India, delivering trusted mobility solutions and premium dealership experiences.',
}

export default function GlobalAutomotivePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AutomotiveHero />
        <AutomotiveVenture />
        <AutomotiveVehicles />
        <ContactBanner />
        <Faq contactHref="/contact" />
      </main>
      <SiteFooter />
    </>
  )
}
