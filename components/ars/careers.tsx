import Image from 'next/image'

const cards = [
  { title: 'Professional Growth', text: 'Learn. Develop. Lead.', image: '/images/career-growth.png', alt: 'Smiling professional working on a laptop at the ARS office', span: 'md:col-span-8' },
  { title: 'Our People', text: 'The driving force behind our success.', image: '/images/career-people.png', alt: 'ARS team members gathered around a laptop', span: 'md:col-span-5' },
]

export function Careers() {
  return (
    <section id="careers" className="bg-white px-3 py-3 font-alt">
      <div className="mx-auto max-w-[1280px] rounded-lg border border-neutral-200 px-6 py-8 md:px-9">
        <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-ink/70">Careers</p>
        <h2 className="mt-1 text-3xl font-semibold text-[#0c2340] md:text-[36px]">
          Be a Part of Our Growth Journey
        </h2>
        <span aria-hidden="true" className="mt-3 block h-0.5 w-14 bg-brand-green" />
        <p className="mt-4 text-[14px] text-ink/70">
          Empowering motivated individuals to grow with our diversified businesses.
        </p>

        <ul className="mt-4 grid gap-4 md:grid-cols-[1.62fr_1fr]">
          {cards.map((card) => (
            <li key={card.title}>
              <a href="#contact" className="group relative block aspect-[4/3] overflow-hidden md:aspect-auto md:h-[346px]">
                <Image
                  src={card.image || '/placeholder.svg'}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="absolute bottom-5 left-4 text-white md:left-5">
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                  <p className="mt-1 text-[13px] text-white/90">{card.text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
