import type { Metadata } from 'next'
import { SiteHeader } from '@/components/ars/site-header'
import { MotocorpHero } from '@/components/ars/motocorp/motocorp-hero'
import { MotocorpVenture } from '@/components/ars/motocorp/motocorp-venture'
import { MotocorpVehicles } from '@/components/ars/motocorp/motocorp-vehicles'
import { ContactBanner } from '@/components/ars/contact-banner'
import { Faq } from '@/components/ars/faq'
import { SiteFooter } from '@/components/ars/site-footer'

export const metadata: Metadata = {
  title: 'ARS MotoCorp | Two-Wheeler Dealerships in India',
  description:
    'Discover ARS MotoCorp, part of ARS Imperial Landmark, representing motorcycle and scooter brands including Komaki, Bajaj, TVS, Hero MotoCorp, KTM, Royal Enfield, Triumph and more.',
  keywords: [
    'ARS MotoCorp',
    'ARS MotoCorp Noida',
    'ARS Motocorp Noida contact',
    'ARS two-wheeler dealerships',
    'ARS bike dealership group',
    'ARS motorcycle dealerships',
    'ARS Group bikes',
    'Komaki Noida',
    'Bajaj dealerships',
    'TVS dealerships',
    'Royal Enfield dealerships',
    'KTM dealerships',
    'scooter and motorcycle dealerships',
  ],
  alternates: {
    canonical: 'https://arsimperiallandmark.com/ventures/ars-motocorp/',
  },
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
