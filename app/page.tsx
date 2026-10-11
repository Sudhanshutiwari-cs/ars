import { SiteHeader } from '@/components/ars/site-header'
import { Hero } from '@/components/ars/hero'
import { About } from '@/components/ars/about'
import { WhyChooseUs } from '@/components/ars/why-choose-us'
import { Partners } from '@/components/ars/partners'
import { OurBusiness } from '@/components/ars/our-business'
import { Presence } from '@/components/ars/presence'
import { Testimonials } from '@/components/ars/testimonials'
import { Careers } from '@/components/ars/careers'
import { ContactBanner } from '@/components/ars/contact-banner'
import { Blogs } from '@/components/ars/blogs'
import { Faq } from '@/components/ars/faq'
import { SiteFooter } from '@/components/ars/site-footer'

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
        <Careers />
        <ContactBanner />
        <Blogs />
        <Faq />
      </main>
      <SiteFooter />
    </>
  )
}
