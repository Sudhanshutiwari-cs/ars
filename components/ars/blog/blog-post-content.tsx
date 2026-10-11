'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  Copy,
  MessageCircle,
  Quote,
  Share2,
  Tag,
} from 'lucide-react'
import { BlogPost, blogPosts } from '@/lib/blog-data'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
    </svg>
  )
}

function XTwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const shareText = encodeURIComponent(`${post.title} via ARS Imperial Landmark`)
  const currentUrl = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''

  // Related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)

  return (
    <article className="bg-[#f8fafc] py-12 font-alt md:py-16">
      <div className="mx-auto max-w-[1000px] px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-ink/60">
            <li>
              <Link href="/" className="hover:text-ink">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-ink">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-brand-green truncate max-w-[280px] sm:max-w-md">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <div className="mt-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0c2340] hover:text-brand-green transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Articles
          </Link>
        </div>

        {/* Header Section */}
        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0b1a36] px-3.5 py-1 text-xs font-semibold text-white">
              <Tag className="h-3 w-3 text-brand-green" aria-hidden="true" />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-ink/60">
              <CalendarDays className="h-3.5 w-3.5 text-brand-green" aria-hidden="true" />
              <time>{post.date}</time>
            </span>
            <span aria-hidden="true" className="text-ink/40">&bull;</span>
            <span className="flex items-center gap-1 text-xs text-ink/60">
              <Clock className="h-3.5 w-3.5 text-neutral-400" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0c2340] sm:text-4xl md:text-5xl lg:leading-[1.18]">
            {post.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg">
            {post.excerpt}
          </p>

          {/* Author & Share Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-neutral-200 py-4">
            <div className="flex items-center gap-3.5">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-green/30">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0c2340]">{post.author.name}</p>
                <p className="text-xs text-ink/60">{post.author.role}</p>
              </div>
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink/50 mr-1 hidden sm:inline">
                Share:
              </span>
              <a
                href={`https://api.whatsapp.com/send?text=${shareText}%20${currentUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-colors hover:bg-emerald-600 hover:text-white"
                aria-label="Share on WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
                aria-label="Share on LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${currentUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors hover:bg-neutral-800 hover:text-white"
                aria-label="Share on Twitter"
              >
                <XTwitterIcon className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={handleCopyLink}
                className="flex h-9 items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 text-xs font-medium text-ink/75 hover:bg-neutral-50 transition-colors"
                aria-label="Copy link"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-100 shadow-md">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={post.coverImage}
              alt={post.alt}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="bg-white px-5 py-3 text-center text-xs text-ink/60 border-t border-neutral-100 italic">
            {post.alt}
          </div>
        </div>

        {/* Executive Takeaways Box */}
        {post.takeaways && post.takeaways.length > 0 && (
          <div className="mt-10 rounded-2xl border-l-4 border-l-brand-green border-y border-r border-neutral-200 bg-emerald-50/40 p-6 sm:p-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-900">
              Executive Takeaways &amp; Key Highlights
            </h2>
            <ul className="mt-4 space-y-2.5">
              {post.takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-ink/80">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/20 text-xs font-bold text-emerald-800">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Content Body */}
        <div className="mt-10 space-y-10 text-ink/85">
          {post.content.map((sec, i) => (
            <section key={i} className="space-y-4">
              {sec.sectionHeading && (
                <h2 className="text-2xl font-bold tracking-tight text-[#0c2340] sm:text-3xl">
                  {sec.sectionHeading}
                </h2>
              )}

              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-[15px] leading-relaxed text-ink/80 sm:text-base sm:leading-8">
                  {p}
                </p>
              ))}

              {sec.quote && (
                <div className="my-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                  <Quote className="h-8 w-8 text-brand-green/40" />
                  <blockquote className="mt-2 text-base font-semibold italic text-[#0c2340] sm:text-lg">
                    &ldquo;{sec.quote}&rdquo;
                  </blockquote>
                </div>
              )}

              {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                <ul className="my-4 space-y-2.5 pl-2">
                  {sec.bulletPoints.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-ink/80">
                      <span className="h-2 w-2 rounded-full bg-brand-green mt-2.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-neutral-200 pt-6">
          <span className="text-xs font-bold uppercase tracking-wider text-ink/60 mr-2">
            Tags:
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white px-3.5 py-1 text-xs font-medium text-ink/75 border border-neutral-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-green/30">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-green">
                Written by
              </span>
              <h3 className="text-lg font-bold text-[#0c2340]">{post.author.name}</h3>
              <p className="text-xs text-ink/60">{post.author.role}</p>
              <p className="mt-2 text-xs leading-relaxed text-ink/75 sm:text-sm">
                Passionate about shaping modern automotive retail and sharing technical clarity with vehicle
                owners across North and East India.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 border-t border-neutral-200 pt-12">
          <h2 className="text-xl font-bold text-[#0c2340] sm:text-2xl">
            Related Articles You May Like
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {relatedPosts.map((rPost) => (
              <Link
                key={rPost.slug}
                href={`/blog/${rPost.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200/80 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={rPost.coverImage}
                    alt={rPost.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <span className="text-[11px] font-semibold text-brand-green">
                    {rPost.category}
                  </span>
                  <h3 className="mt-1.5 text-sm font-bold text-[#0c2340] line-clamp-2 group-hover:text-brand-green transition-colors">
                    {rPost.title}
                  </h3>
                  <div className="mt-auto pt-3 flex items-center justify-between text-[11px] text-ink/50 border-t border-neutral-100 mt-3">
                    <span>{rPost.readTime}</span>
                    <span className="font-semibold text-brand-green group-hover:underline">Read &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
