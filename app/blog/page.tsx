import type { Metadata } from 'next'
import { SiteHeader } from '@/components/ars/site-header'
import { BlogHero } from '@/components/ars/blog/blog-hero'
import { BlogFeatured } from '@/components/ars/blog/blog-featured'
import { BlogList } from '@/components/ars/blog/blog-list'
import { BlogNewsletter } from '@/components/ars/blog/blog-newsletter'
import { Faq } from '@/components/ars/faq'
import { SiteFooter } from '@/components/ars/site-footer'
import { blogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Automotive Blog & Mobility Insights | ARS Imperial Landmark',
  description:
    'Read the latest articles on EV adoption, vehicle care guides, commercial transport trends, and automotive retail insights from ARS Imperial Landmark experts.',
}

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0]

  return (
    <>
      <SiteHeader />
      <main>
        <BlogHero />
        <BlogFeatured post={featuredPost} />
        <BlogList />
        <BlogNewsletter />
        <Faq contactHref="/contact" />
      </main>
      <SiteFooter />
    </>
  )
}
