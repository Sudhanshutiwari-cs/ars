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
  Quote,
  Tag,
} from 'lucide-react'
import { BlogPost, blogPosts } from '@/lib/blog-data'

export function BlogPostContent({ post }: { post: BlogPost }) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }



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

            {/* Copy Article Link */}
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold text-[#0c2340] shadow-2xs transition-all hover:bg-neutral-50 active:scale-95"
              aria-label="Copy article link"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span className="font-semibold text-emerald-700">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-ink/70" />
                  <span>Copy Article Link</span>
                </>
              )}
            </button>
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
