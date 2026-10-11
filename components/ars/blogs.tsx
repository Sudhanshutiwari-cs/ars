import Image from 'next/image'
import { ArrowRight, CalendarDays } from 'lucide-react'

const posts = [
  {
    date: '24 June 2025',
    title: 'The Rise of EVs in India – What It Means for Dealerships',
    excerpt:
      'The electric vehicle revolution is reshaping the automotive landscape. Learn how it impacts dealerships, customers and the future of mobility in India.',
    image: '/images/blog-ev.png',
    alt: 'Multi-brand car showroom with Toyota and Jeep SUVs',
  },
  {
    date: '20 June 2025',
    title: 'How After-Sales Service Builds Long-Term Trust',
    excerpt:
      'Discover how our service network, trained professionals and genuine parts help us deliver a seamless ownership experience.',
    image: '/images/blog-service.png',
    alt: 'ARS technician fitting a wheel on an SUV',
  },
  {
    date: '17 June 2025',
    title: 'Building a Sustainable Automotive Future',
    excerpt:
      'From eco-friendly practices to green mobility solutions, learn how ARS Imperial Landmark is driving a cleaner and sustainable tomorrow.',
    image: '/images/blog-team.png',
    alt: 'ARS Imperial Landmark team in the office',
  },
]

export function Blogs() {
  return (
    <section id="blogs" className="bg-[#f9fafc] py-16 font-alt">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="text-center">
          <p className="flex items-center justify-center gap-4 text-[13px] font-semibold uppercase tracking-[0.25em] text-[#0c2340]">
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

        <ul className="mt-14 grid gap-7 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.title}>
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-[0_2px_10px_rgba(12,35,64,0.04)]">
                <div className="relative aspect-[372/218]">
                  <Image src={post.image || '/placeholder.svg'} alt={post.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col px-7 pb-7 pt-6">
                  <p className="flex items-center gap-2 text-[13px] text-ink/70">
                    <CalendarDays className="h-4 w-4 text-[#0c2340]" aria-hidden="true" />
                    <time>{post.date}</time>
                    <span aria-hidden="true">·</span>
                    Admin
                  </p>
                  <h3 className="mt-4 text-[20px] font-semibold leading-snug text-[#0c2340]">{post.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink/70">{post.excerpt}</p>
                  <a
                    href="#blogs"
                    className="mt-auto inline-flex items-center gap-3 pt-7 text-[15px] font-semibold text-[#0c2340] hover:underline"
                  >
                    Read More
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    <span className="sr-only">about {post.title}</span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
