import { Lightbulb, ShieldCheck, Users } from 'lucide-react'

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    body: 'We do what is right, always. Integrity builds trust, strengthens relationships, and drives long-term success.',
  },
  {
    icon: Users,
    title: 'Customer First',
    body: 'Our customers are at the heart of everything we do. We listen, understand and go the extra mile to deliver exceptional experiences.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    body: 'We embrace new ideas and technologies to stay ahead, create smarter solutions, and fuel sustainable growth.',
  },
]

export function OurValues() {
  return (
    <section className="bg-white py-14 font-alt lg:py-[42px]">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_460px] lg:gap-16">
          <div>
            <p className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0b2e6b]">
              Our values
              <span aria-hidden="true" className="h-px w-12 bg-[#0b2e6b]" />
            </p>
            <h2 className="mt-1 text-[34px] font-bold leading-[1.08] text-[#0b2e6b] md:text-[36px]">
              Building a Stronger
              <br />
              Tomorrow
            </h2>
          </div>
          <p className="text-[13px] leading-[1.75] text-[#1f3d75] lg:pt-1">
            At ARS Imperial Landmark, our foundation is built on a set of core values that guide our
            decisions, shape our culture, and drive our commitment to excellence. These values not
            only define who we are, but also inspire us to create lasting value for our customers,
            partners and communities.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="rounded-md border border-[#cfe2fb] bg-white px-7 pb-9 pt-4 transition-shadow hover:shadow-md"
            >
              <Icon className="h-9 w-9 text-[#0b2e6b]" strokeWidth={1.4} aria-hidden="true" />
              <h3 className="mt-3 text-[18px] font-bold text-[#0b2e6b]">{title}</h3>
              <p className="mt-1.5 max-w-[240px] text-[12.5px] leading-[1.6] text-[#1f3d75]">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
