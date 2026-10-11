import { Award, Briefcase, GraduationCap, Heart, Laptop, TrendingUp } from 'lucide-react'

const pillars = [
  {
    icon: TrendingUp,
    title: 'Fast-Track Promotions',
    description:
      'We believe in promoting from within. The majority of our dealership General Managers began their careers as frontline sales or service advisors.',
  },
  {
    icon: GraduationCap,
    title: 'Certified Learning Academies',
    description:
      'Sponsored technical and management certifications from leading OEMs (Hyundai, Tata, Hero, Toyota, Bajaj) to continuously elevate your skill profile.',
  },
  {
    icon: Award,
    title: 'Uncapped Rewards & Recognition',
    description:
      'Industry-leading incentive plans, monthly high-performer felicitations, and all-expenses-paid annual leadership retreats for top achievers.',
  },
  {
    icon: Heart,
    title: 'Family Health & Wellness',
    description:
      'Holistic healthcare coverage for you and your dependents, annual preventive wellness checkups, and generous personal leave policies.',
  },
  {
    icon: Laptop,
    title: 'Modern Digital Infrastructure',
    description:
      'Work with state-of-the-art diagnostic scanners, cloud-based CRM suites, and beautifully designed, climate-controlled showroom lounges.',
  },
  {
    icon: Briefcase,
    title: 'Diverse Mobility Portfolio',
    description:
      'Gain unmatched cross-domain experience across premium passenger vehicles, next-gen electric vehicles, commercial haulage, and two-wheelers.',
  },
]

export function CareersCulture() {
  return (
    <section id="culture" className="bg-[#f8fafc] py-16 font-alt md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 text-[13px] font-semibold uppercase tracking-[0.25em] text-[#0c2340]">
            The ARS Advantage
            <span aria-hidden="true" className="h-0.5 w-10 bg-brand-green" />
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0c2340] sm:text-3xl md:text-4xl">
            Why Professionals Choose ARS Imperial Landmark
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-ink/70">
            We provide a workplace where talent is celebrated, ideas are heard, and career aspirations are
            met with genuine mentorship and structured growth opportunities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="group relative rounded-2xl border border-neutral-200/80 bg-white p-7 shadow-[0_2px_12px_rgba(11,26,54,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b1a36]/5 text-[#0b1a36] ring-1 ring-[#0b1a36]/10 transition-colors group-hover:bg-brand-green group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#0c2340] group-hover:text-brand-green transition-colors">
                  {pillar.title}
                </h3>

                <p className="mt-2 text-[14px] leading-relaxed text-ink/70">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
