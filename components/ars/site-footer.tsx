import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Clock, MapPin, MessageCircle, Phone, ShipWheel as Steering, Store, UserRoundCog } from 'lucide-react'

const ctas = [
  { icon: UserRoundCog, title: 'Enquire Now', text: 'Get quick assistance from our team.', href: '/contact#contact' },
  { icon: Steering, title: 'Book A Test Drive', text: 'Experience the difference yourself.', href: '/contact#contact' },
  { icon: Store, title: 'Find A Store Near You', text: 'Visit our showrooms across India.', href: '/contact' },
]

type FooterLink = { label: string; href?: string }

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Ventures', href: '/#business' },
      { label: 'Careers', href: '/#careers' },
      { label: 'Blogs', href: '/#blogs' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Ventures',
    links: [
      { label: 'ARS Global Automotive', href: '/#business' },
      { label: 'ARS MotoCorp', href: '/#business' },
      { label: 'ARS Commercial Mobility', href: '/commercial-mobility' },
    ],
  },
  {
    title: 'Useful Links',
    links: [
      { label: 'Privacy Policy' },
      { label: 'Terms of Service' },
      { label: 'Shipping Policy' },
      { label: 'Return Policy' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Get in Touch', href: '/contact#contact' },
      { label: 'Careers', href: '/#careers' },
      { label: 'Locate Us', href: '/contact' },
    ],
  },
]

const socials = [
  { label: 'YouTube', path: 'M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z' },
  { label: 'Facebook', path: 'M14 8.5V6.6c0-.8.2-1.3 1.4-1.3H17V2.2C16.7 2.1 15.6 2 14.3 2 11.6 2 9.8 3.6 9.8 6.6v1.9H7v3.4h2.8V22H14V11.9h2.8l.4-3.4H14z' },
  { label: 'X', path: 'M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.8-6.3L5.4 21H2.3l7.3-8.3L2 3h6.3l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z' },
  { label: 'Instagram', path: 'M12 7.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3zm0 7.8a3.1 3.1 0 1 1 3.1-3.1 3.1 3.1 0 0 1-3.1 3.1zm6-8a1.1 1.1 0 1 1-1.1-1.1A1.1 1.1 0 0 1 18 7.1zM21.9 8a5.4 5.4 0 0 0-1.5-3.9A5.5 5.5 0 0 0 16.6 2.6C15 2.5 9 2.5 7.4 2.6a5.5 5.5 0 0 0-3.9 1.5A5.5 5.5 0 0 0 2 8c-.1 1.6-.1 6.4 0 8a5.4 5.4 0 0 0 1.5 3.9 5.5 5.5 0 0 0 3.9 1.5c1.6.1 7.6.1 9.2 0a5.4 5.4 0 0 0 3.9-1.5 5.5 5.5 0 0 0 1.5-3.9c.1-1.6.1-6.4 0-8z' },
  { label: 'LinkedIn', path: 'M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 2.1-2.1 2.1 2.1 0 0 1-2.1 2.1zM7.1 20.5H3.6V9h3.5v11.5zM22.2 0H1.8A1.8 1.8 0 0 0 0 1.7v20.6A1.8 1.8 0 0 0 1.8 24h20.4a1.8 1.8 0 0 0 1.8-1.7V1.7A1.8 1.8 0 0 0 22.2 0z' },
]

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white">
      {children}
      <span aria-hidden="true" className="mt-3 block h-0.5 w-6 bg-[#4b7bd8]" />
    </h3>
  )
}

export function SiteFooter() {
  return (
    <footer className="mt-3 bg-[#081733] font-alt text-white">
      <div className="border-b border-white/10 bg-[#0a1b3c]">
        <ul className="mx-auto flex max-w-[1240px] flex-col items-center justify-center gap-6 px-6 py-6 md:flex-row md:gap-0">
          {ctas.map(({ icon: Icon, title, text, href }, i) => (
            <li key={title} className={i !== 0 ? 'md:border-l md:border-white/20 md:pl-8' : 'md:pr-8'}>
              <Link href={href} className="flex items-center gap-3 md:pr-8">
                <Icon className="h-8 w-8" strokeWidth={1.1} aria-hidden="true" />
                <span>
                  <span className="block text-[13px] font-medium">{title}</span>
                  <span className="block text-[9px] text-white/75">{text}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-8 md:px-10 lg:grid-cols-[330px_1fr_200px]">
        <div>
          <div className="flex items-center gap-4">
            <Image src="/images/wolf-logo.png" alt="" width={72} height={72} className="h-[72px] w-[72px] object-cover mix-blend-screen" />
            <span className="flex flex-col leading-none">
              <span className="text-[26px] tracking-[0.12em]">ARS</span>
              <span className="mt-1 text-[8px] tracking-[0.28em]">IMPERIAL LANDMARK</span>
            </span>
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-white/80">
            Driving mobility. <span className="ml-4">Building tomorrow.</span>
            <br />
            Across India.
          </p>
          <div className="mt-3 border-t border-white/15 pt-4">
            <div className="grid grid-cols-[1fr_auto] gap-4">
              <ul className="space-y-2.5 text-[9px] text-white/90">
                <li>
                  <a href="tel:6202122112" className="flex items-center gap-3">
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" /> 6202122112
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/916202122112" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp 6202122112" className="flex items-center gap-3">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" /> 6202122112
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <address className="not-italic leading-relaxed">
                    KOMAKI Noida (ARS MOTOCORP)
                    <br />
                    Pillar Number 99, Dadri Main Rd,
                    <br />
                    Bhangel, Goyal Colony, Salarpur Khadar,
                    <br />
                    Salarpur, Noida, Uttar Pradesh 201301
                  </address>
                </li>
              </ul>
              <div className="flex gap-2 self-end border-l border-white/15 pb-6 pl-4 text-[9px]">
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-medium">Business Timings</p>
                  <p className="mt-1.5 text-white/75">10 AM - 7 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:pl-12">
          {columns.map((col) => (
            <div key={col.title}>
              <ColumnTitle>{col.title}</ColumnTitle>
              <ul className="mt-5 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <Link href={link.href} className="inline-flex items-center gap-1 text-[11px] text-white/90 hover:text-white">
                        {link.label}
                        {col.title === 'Quick Links' && link.label === 'Ventures' && (
                          <ChevronRight className="h-3 w-3" aria-hidden="true" />
                        )}
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] text-white/60">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="lg:border-l lg:border-white/15 lg:pl-8">
          <ColumnTitle>Stay Connected</ColumnTitle>
          <p className="mt-5 text-[11px] leading-relaxed text-white/80">
            Follow our journey for the latest updates, events and more.
          </p>
          <ul className="mt-4 flex gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href="#home"
                  aria-label={s.label}
                  className="flex h-6 w-6 items-center justify-center rounded-full border border-white/60 transition-colors hover:bg-white/10"
                >
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-white" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
