import type { Metadata } from 'next'
import { SiteHeader } from '@/components/ars/site-header'
import { GalleryHero } from '@/components/ars/gallery/gallery-hero'
import { GalleryGrid } from '@/components/ars/gallery/gallery-grid'
import { GalleryCta } from '@/components/ars/gallery/gallery-cta'
import { Faq } from '@/components/ars/faq'
import { SiteFooter } from '@/components/ars/site-footer'

export const metadata: Metadata = {
  title: 'Gallery & Experience Centre | ARS Imperial Landmark',
  description:
    'Explore our high-resolution photo gallery showcasing modern showrooms, celebratory customer deliveries, state-of-the-art service bays, and commercial fleet operations across India.',
}

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <GalleryHero />
        <GalleryGrid />
        <GalleryCta />
        <Faq contactHref="/contact" />
      </main>
      <SiteFooter />
    </>
  )
}
