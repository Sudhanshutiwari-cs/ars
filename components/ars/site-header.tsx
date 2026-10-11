'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, ChevronDown, Menu, Phone, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/', route: '/' },
  { label: 'About Us', href: '/about', route: '/about' },
  { label: 'Ventures', href: '/#business', route: '/commercial-mobility', dropdown: true },
  { label: 'Careers', href: '/#careers' },
  { label: 'Blogs', href: '/#blogs' },
  { label: 'Contact Us', href: '/contact', route: '/contact' },
]

export function Logo({ size = 'md' }: { size?: 'md' | 'lg' }) {
  return (
    <Link href="/" className="flex items-center gap-4" aria-label="ARS Imperial Landmark home">
      <Image
        src="/images/wolf-logo.png"
        alt=""
        width={80}
        height={80}
        className={cn(
          'rounded-md object-cover mix-blend-screen',
          size === 'lg' ? 'h-20 w-20' : 'h-16 w-16 md:h-[78px] md:w-[78px]',
        )}
        priority
      />
      {size === 'md' && <span aria-hidden="true" className="hidden h-12 w-px bg-white/40 sm:block" />}
      <span className="flex flex-col leading-none text-white">
        <span className="text-3xl font-normal tracking-[0.12em] md:text-[34px]">ARS</span>
        <span className="mt-1 text-[10px] font-normal tracking-[0.28em] md:text-[11px]">
          IMPERIAL LANDMARK
        </span>
      </span>
    </Link>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const links = navLinks.map((link) => ({ ...link, active: link.route === pathname }))

  return (
    <header className="border-b-4 border-white bg-navy">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-2.5 md:px-12">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={link.active ? 'page' : undefined}
                  className="group relative flex items-center gap-1.5 py-2 text-[13px] font-normal uppercase tracking-[0.12em] text-white/90 transition-colors hover:text-white"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="h-4 w-4" aria-hidden="true" />}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute -bottom-1 left-0 h-0.5 w-full bg-brand-green transition-transform',
                      link.active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="tel:6202122112"
          className="hidden items-center gap-4 rounded-full border border-white/40 py-2 pl-5 pr-2 text-white transition-colors hover:bg-white/5 md:flex"
        >
          <Phone className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          <span className="flex flex-col leading-tight">
            <span className="text-[8px] uppercase tracking-[0.15em] text-white/80">Call us</span>
            <span className="text-sm tracking-wider">6202122112</span>
          </span>
          <span className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/40">
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 px-6 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={link.active ? 'page' : undefined}
                  className="block border-b border-white/10 py-3 text-sm uppercase tracking-[0.12em] text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href="tel:6202122112" className="mt-4 flex items-center gap-3 text-white">
            <Phone className="h-5 w-5" aria-hidden="true" /> 6202122112
          </a>
        </nav>
      )}
    </header>
  )
}
