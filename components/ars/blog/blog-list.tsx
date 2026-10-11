'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock,
  Filter,
  Search,
  Tag,
  User,
} from 'lucide-react'
import { blogCategories, BlogPost, blogPosts } from '@/lib/blog-data'
import { cn } from '@/lib/utils'

export function BlogList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory

      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  return (
    <section className="bg-[#f8fafc] py-14 font-alt md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        {/* Section Heading & Search */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.25em] text-[#0c2340]">
              Browse Library
              <span aria-hidden="true" className="h-0.5 w-10 bg-brand-green" />
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0c2340] sm:text-3xl md:text-4xl">
              All Articles &amp; Insights
            </h2>
            <p className="mt-2 text-[14px] text-ink/70">
              Filter by topic or search specific automotive trends and maintenance guides.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-sm">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
              aria-hidden="true"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, topics or tags..."
              className="w-full rounded-full border border-neutral-300 bg-white py-2.5 pl-10 pr-4 text-sm text-ink shadow-sm outline-none transition-colors focus:border-[#0b1a36] focus:ring-1 focus:ring-[#0b1a36]"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-8 flex flex-wrap gap-2.5 border-b border-neutral-200 pb-6">
          {blogCategories.map((category) => {
            const count =
              category === 'All'
                ? blogPosts.length
                : blogPosts.filter((p) => p.category === category).length

            const isActive = selectedCategory === category

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'group flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-all',
                  isActive
                    ? 'bg-[#0b1a36] text-white shadow-sm ring-1 ring-[#0b1a36]'
                    : 'bg-white text-ink/75 hover:bg-neutral-100 border border-neutral-200 hover:text-ink'
                )}
                aria-pressed={isActive}
              >
                <span>{category}</span>
                <span
                  className={cn(
                    'inline-flex h-5 items-center justify-center rounded-full px-1.5 text-[11px] font-semibold',
                    isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-ink/60'
                  )}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active search notification */}
        <div className="mt-4 flex items-center justify-between text-xs text-ink/60">
          <p>
            Showing <strong className="text-[#0c2340]">{filteredPosts.length}</strong> publication
            {filteredPosts.length === 1 ? '' : 's'}
          </p>
          {(searchQuery || selectedCategory !== 'All') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
              }}
              className="font-medium text-brand-green hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Blog Post Grid */}
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-[0_2px_12px_rgba(11,26,54,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Cover Image */}
              <Link
                href={`/blog/${post.slug}`}
                className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100"
              >
                <Image
                  src={post.coverImage}
                  alt={post.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-3.5 top-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0b1a36]/85 px-3 py-1 text-[11px] font-medium tracking-wide text-white backdrop-blur-md">
                    <Tag className="h-3 w-3 text-brand-green" aria-hidden="true" />
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs text-ink/60">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5 text-brand-green" aria-hidden="true" />
                    <time>{post.date}</time>
                  </span>
                  <span aria-hidden="true">&bull;</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-neutral-400" aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-bold leading-snug text-[#0c2340] group-hover:text-brand-green transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/70">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-neutral-100 px-2.5 py-0.5 text-[10px] font-medium text-ink/70"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author and Read link */}
                <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-5 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-neutral-200">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-semibold text-[#0c2340]">
                      {post.author.name}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green group-hover:underline"
                  >
                    Read
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-neutral-300 bg-white py-16 text-center">
            <BookOpen className="mx-auto h-10 w-10 text-neutral-400" />
            <h3 className="mt-3 text-lg font-bold text-[#0c2340]">No articles matched your search</h3>
            <p className="mt-1 text-sm text-ink/60">
              Try different keywords or select another topic category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
              }}
              className="mt-4 rounded-full bg-[#0b1a36] px-5 py-2 text-xs font-semibold text-white"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
