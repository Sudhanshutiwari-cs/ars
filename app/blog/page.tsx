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
  title: 'Automotive News & Insights | ARS Imperial Landmark',
  description:
    'Explore automotive insights, dealership updates, mobility trends, electric vehicles and business news from ARS Imperial Landmark and its automotive ventures.',
  keywords: [
    'ARS Imperial Landmark blogs',
    'ARS Group news',
    'automotive industry news India',
    'dealership industry insights',
    'electric vehicle trends India',
    'commercial vehicle industry news',
    'two-wheeler industry updates',
  ],
  alternates: {
    canonical: 'https://arsimperiallandmark.com/blogs/',
  },
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
