import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/ars/site-header'
import { BlogPostContent } from '@/components/ars/blog/blog-post-content'
import { SiteFooter } from '@/components/ars/site-footer'
import { blogPosts } from '@/lib/blog-data'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Article Not Found | ARS Imperial Landmark',
    }
  }

  return {
    title: `${post.title} | ARS Imperial Landmark`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <SiteHeader />
      <main>
        <BlogPostContent post={post} />
      </main>
      <SiteFooter />
    </>
  )
}
