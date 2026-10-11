import type { Metadata } from 'next'
import { SiteHeader } from '@/components/ars/site-header'
import { CommercialHero } from '@/components/ars/commercial/commercial-hero'
import { CommercialVenture } from '@/components/ars/commercial/commercial-venture'
import { CommercialVehicles } from '@/components/ars/commercial/commercial-vehicles'
import { CommercialDealershipImages } from '@/components/ars/commercial/commercial-dealership-images'
import { ContactBanner } from '@/components/ars/contact-banner'
import { Faq } from '@/components/ars/faq'
import { SiteFooter } from '@/components/ars/site-footer'

export const metadata: Metadata = {
  title: 'ARS Commercial Mobility | Trucks, Buses & EVs',
  description:
    'Explore ARS Commercial Mobility, part of ARS Imperial Landmark, representing commercial and heavy-duty vehicle brands including Mahindra Commercial Vehicles, Tata Motors Commercial Vehicles, Ashok Leyland and Altigreen.',
  keywords: [
    'ARS Commercial Mobility',
    'ARS Commercial',
    'ARS heavy vehicles',
    'ARS commercial vehicles',
    'ARS trucks and buses',
    'ARS commercial dealership group',
    'ARS commercial mobility India',
    'commercial vehicle dealerships India',
    'heavy-duty trucks',
    'commercial buses',
    'electric commercial vehicles',
    'fleet mobility solutions',
  ],
  alternates: {
    canonical: 'https://arsimperiallandmark.com/ventures/ars-commercial-mobility/',
  },
}

export default function CommercialMobilityPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CommercialHero />
        <CommercialVenture />
        <CommercialVehicles />
        <CommercialDealershipImages />
        <ContactBanner />
        <Faq contactHref="/contact" />
      </main>
      <SiteFooter />
    </>
  )
}
