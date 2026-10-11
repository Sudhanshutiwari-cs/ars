import type { Metadata } from 'next'
import { SiteHeader } from '@/components/ars/site-header'
import { AutomotiveHero } from '@/components/ars/global-automotive/automotive-hero'
import { AutomotiveVenture } from '@/components/ars/global-automotive/automotive-venture'
import { AutomotiveVehicles } from '@/components/ars/global-automotive/automotive-vehicles'
import { ContactBanner } from '@/components/ars/contact-banner'
import { Faq } from '@/components/ars/faq'
import { SiteFooter } from '@/components/ars/site-footer'

export const metadata: Metadata = {
  title: 'ARS Global Automotive | Car Dealership Group India',
  description:
    'Explore ARS Global Automotive, part of ARS Imperial Landmark, representing leading passenger vehicle brands including Mahindra, Toyota, Kia, Jeep, Maruti Suzuki, Tata Motors, Honda and Hyundai.',
  keywords: [
    'ARS Global Automotive',
    'ARS Imperial cars',
    'ARS car dealership group',
    'ARS four-wheeler dealerships',
    'ARS automotive dealerships India',
    'ARS passenger vehicles',
    'ARS Group cars',
    'Mahindra dealership group',
    'Toyota dealership group',
    'Kia dealerships',
    'Jeep dealerships',
    'passenger vehicles India',
  ],
  alternates: {
    canonical: 'https://arsimperiallandmark.com/ventures/ars-global-automotive/',
  },
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
