import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Clock, Sparkles, Tag } from 'lucide-react'
import { BlogPost } from '@/lib/blog-data'

export function BlogFeatured({ post }: { post: BlogPost }) {
  return (
    <section className="bg-white py-12 font-alt md:py-16">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 rounded-full bg-brand-green/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 ring-1 ring-brand-green/30">
            <Sparkles className="h-3.5 w-3.5 text-brand-green" aria-hidden="true" />
            Featured Story
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-ink/50">
            Editor&apos;s Pick
          </span>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border border-neutral-200/80 bg-[#081733] text-white shadow-2xl transition-all hover:shadow-3xl lg:grid lg:grid-cols-12 lg:items-stretch">
          {/* Image Side */}
          <div className="relative aspect-[16/10] w-full lg:col-span-7 lg:aspect-auto lg:min-h-[440px]">
            <Image
              src={post.coverImage}
              alt={post.alt}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#081733] via-[#081733]/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#081733]"
            />
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-between p-7 sm:p-9 lg:col-span-5 lg:p-12">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-white/70">
                <span className="inline-flex items-center gap-1 font-semibold text-brand-green">
                  <Tag className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.category}
                </span>
                <span aria-hidden="true">&bull;</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.readTime}
                </span>
                <span aria-hidden="true">&bull;</span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.date}
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold leading-tight text-white transition-colors hover:text-brand-green sm:text-3xl">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="mt-4 text-[14px] leading-relaxed text-white/80">
                {post.excerpt}
              </p>

              {post.takeaways && post.takeaways.length > 0 && (
                <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-white/85">
                  <p className="font-semibold text-brand-green uppercase tracking-wider text-[11px]">
                    Key Takeaway:
                  </p>
                  <p className="mt-1 leading-relaxed">{post.takeaways[0]}</p>
                </div>
              )}
            </div>

            {/* Author & CTA */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-green/30">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{post.author.name}</p>
                  <p className="text-[11px] text-white/60">{post.author.role}</p>
                </div>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0b1a36] shadow-md transition-all hover:bg-white"
              >
                Read Story
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
