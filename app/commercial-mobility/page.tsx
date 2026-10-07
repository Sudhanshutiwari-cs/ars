import type { Metadata } from 'next'
import { SiteHeader } from '@/components/ars/site-header'
import { CommercialHero } from '@/components/ars/commercial/commercial-hero'
import { CommercialVenture } from '@/components/ars/commercial/commercial-venture'
import { CommercialVehicles } from '@/components/ars/commercial/commercial-vehicles'
import { ContactBanner } from '@/components/ars/contact-banner'
import { Faq } from '@/components/ars/faq'
import { SiteFooter } from '@/components/ars/site-footer'

export const metadata: Metadata = {
  title: 'ARS Commercial Mobility | ARS Imperial Landmark',
  description:
    'ARS Commercial Mobility delivers reliable, efficient and sustainable commercial vehicle solutions for businesses across India.',
}

export default function CommercialMobilityPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CommercialHero />
        <CommercialVenture />
        <CommercialVehicles />
        <div className="bg-white py-8">
          <ContactBanner />
        </div>
        <Faq contactHref="/contact" />
      </main>
      <SiteFooter />
    </>
  )
}
