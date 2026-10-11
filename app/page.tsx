import type { Metadata } from 'next'
import { SiteHeader } from '@/components/ars/site-header'
import { Hero } from '@/components/ars/hero'
import { About } from '@/components/ars/about'
import { WhyChooseUs } from '@/components/ars/why-choose-us'
import { Partners } from '@/components/ars/partners'
import { OurBusiness } from '@/components/ars/our-business'
import { Presence } from '@/components/ars/presence'
import { Testimonials } from '@/components/ars/testimonials'
import { DealershipShowcase } from '@/components/ars/dealership-showcase'
import { Careers } from '@/components/ars/careers'
import { ContactBanner } from '@/components/ars/contact-banner'
import { Blogs } from '@/components/ars/blogs'
import { Faq } from '@/components/ars/faq'
import { SiteFooter } from '@/components/ars/site-footer'

export const metadata: Metadata = {
  title: 'ARS Imperial Landmark | Automotive Group in India',
  description:
    'ARS Imperial Landmark is an automotive dealership group with 24+ dealerships and approximately 68 outlets, representing leading car, two-wheeler and commercial vehicle brands across North and East India.',
  keywords: [
    'ARS Imperial Landmark',
    'ARS Group',
    'ARS Imperial Group',
    'ARS automotive group',
    'ARS dealership group',
    'ARS Group India',
    'automotive dealerships in India',
    'ARS Imperial Noida',
  ],
  alternates: {
    canonical: 'https://arsimperiallandmark.com/',
  },
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Partners />
        <OurBusiness />
        <Presence />
        <Testimonials />
        <DealershipShowcase />
        <Careers />
        <ContactBanner />
        <Blogs />
        <Faq />
      </main>
      <SiteFooter />
    </>
  )
}
