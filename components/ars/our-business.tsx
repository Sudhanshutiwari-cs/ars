import Image from 'next/image'
import Link from 'next/link'

const businesses = [
  { id: 'global-automotive', title: 'ARS Global Automotive', image: 'https://res.cloudinary.com/df01whs60/image/upload/v1791688875/Luxury_Showroom_at_Sunset_ahzego.png', alt: 'ARS Global Automotive car dealership', href: '/contact#contact' },
  { id: 'motocorp', title: 'ARS MotoCorp', image: 'https://res.cloudinary.com/df01whs60/image/upload/v1791689039/High-End_Motorcycle_Showroom_Display_kcppgn.png', alt: 'ARS MotoCorp motorcycle showroom', href: '/contact#contact' },
  { id: 'commercial-mobility', title: 'ARS Commercial Mobility', image: 'https://res.cloudinary.com/df01whs60/image/upload/v1791689220/Sunset_ARS_Commercial_Mobility_Showroom_i1zy1v.png', alt: 'ARS Commercial Mobility trucks and bus', href: '/commercial-mobility' },
]

export function OurBusiness() {
  return (
    <section id="business" className="bg-white py-20 scroll-mt-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-[62px]">
        <h2 className="flex items-center gap-4 text-3xl font-semibold text-ink md:text-[32px]">
          <span aria-hidden="true" className="h-px w-10 bg-ink" />
          Our Business
        </h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {businesses.map((biz) => (
            <li key={biz.title} id={biz.id} className="scroll-mt-28">
              <Link href={biz.href} className="group relative block aspect-[373/284] overflow-hidden">
                <Image
                  src={biz.image || '/placeholder.svg'}
                  alt={biz.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy via-navy/70 to-transparent" />
                <h3 className="absolute bottom-5 left-6 text-lg font-semibold text-white">{biz.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
