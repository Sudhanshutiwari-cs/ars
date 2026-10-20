import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Clock, MapPin, MessageCircle, Phone, ShipWheel as Steering, Store, UserRoundCog } from 'lucide-react'
import { SocialLinks } from './social-links'

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
      { label: 'Gallery', href: '/gallery' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blogs', href: '/blog' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Ventures',
    links: [
      { label: 'ARS Global Automotive', href: '/global-automotive' },
      { label: 'ARS MotoCorp', href: '/ars-motocorp' },
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
      { label: 'Careers', href: '/careers' },
      { label: 'Locate Us', href: '/contact' },
    ],
  },
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

      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-8 md:px-10 lg:grid-cols-[340px_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <Image src="https://res.cloudinary.com/df01whs60/image/upload/v1791686790/Intense_Monochrome_Wolf_Emblem_lxin4e.png" alt="" width={72} height={72} className="h-[72px] w-[72px] object-cover mix-blend-screen" />
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
            <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3">
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/70">
                Follow Us
              </span>
              <SocialLinks variant="footer" />
            </div>
          </div>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:pl-16">
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
      </div>

      <div className="border-t border-white/10 bg-[#051126] py-4">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-3 px-6 text-[11px] text-white/60 sm:flex-row md:px-10">
          <p>© {new Date().getFullYear()} ARS Imperial Landmark. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-wider text-white/60">Connect With Us:</span>
            <SocialLinks variant="footer" />
          </div>
        </div>
      </div>
    </footer>
  )
}
