import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, CalendarDays } from 'lucide-react'

const posts = [
  {
    slug: 'rise-of-evs-in-india',
    date: '18 September 2026',
    title: 'The Rise of EVs in India – What It Means for Dealerships & Buyers',
    excerpt:
      'The electric vehicle revolution is reshaping the automotive landscape. Learn how next-gen dealerships and charging infrastructure are powering the shift.',
    image: '/images/blog-ev.png',
    alt: 'Multi-brand car showroom with Toyota and Jeep SUVs',
  },
  {
    slug: 'after-sales-service-trust',
    date: '04 September 2026',
    title: 'How After-Sales Service Builds Long-Term Customer Trust',
    excerpt:
      'Discover how our certified service network, high-voltage diagnostics and genuine parts deliver an unmatched ownership experience.',
    image: '/images/blog-service.png',
    alt: 'ARS technician fitting a wheel on an SUV',
  },
  {
    slug: 'sustainable-automotive-dealerships',
    date: '01 July 2026',
    title: 'Building a Sustainable Automotive Future',
    excerpt:
      'From rooftop solar installations to water-recycling car wash plants, learn how ARS Imperial Landmark is driving cleaner mobility.',
    image: '/images/blog-team.png',
    alt: 'ARS Imperial Landmark team in the office',
  },
]

export function Blogs() {
  return (
    <section id="blogs" className="bg-[#f9fafc] py-16 font-alt">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="flex items-center justify-center gap-4 text-[13px] font-semibold uppercase tracking-[0.25em] text-[#0c2340] sm:justify-start">
              Latest Blogs
              <span aria-hidden="true" className="h-0.5 w-12 bg-[#0c2340]" />
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-[#0c2340] md:text-[36px]">
              Insights. Stories. Forward Motion.
            </h2>
            <p className="mt-3 text-[15px] text-ink/70">
              Explore the latest trends, industry updates and expert insights from the world of mobility.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-[#0b1a36] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-green hover:text-white"
          >
            <BookOpen className="h-3.5 w-3.5 text-brand-green" />
            View All Articles
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-7 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.title}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_2px_10px_rgba(12,35,64,0.04)] transition-all hover:-translate-y-1 hover:shadow-lg">
                <Link href={`/blog/${post.slug}`} className="relative aspect-[372/218] block overflow-hidden">
                  <Image
                    src={post.image || '/placeholder.svg'}
                    alt={post.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col px-7 pb-7 pt-6">
                  <p className="flex items-center gap-2 text-[13px] text-ink/70">
                    <CalendarDays className="h-4 w-4 text-[#0c2340]" aria-hidden="true" />
                    <time>{post.date}</time>
                    <span aria-hidden="true">·</span>
                    Mobility Insights
                  </p>
                  <h3 className="mt-4 text-[20px] font-semibold leading-snug text-[#0c2340] hover:text-brand-green transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink/70">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-auto inline-flex items-center gap-3 pt-7 text-[15px] font-semibold text-[#0c2340] hover:text-brand-green transition-colors"
                  >
                    Read More
                    <ArrowRight className="h-5 w-5 text-brand-green" aria-hidden="true" />
                    <span className="sr-only">about {post.title}</span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
