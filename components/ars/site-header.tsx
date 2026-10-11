'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Bike, Car, ChevronDown, Menu, Phone, Truck, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/', route: '/' },
  { label: 'About Us', href: '/about', route: '/about' },
  { label: 'Ventures', href: '/#business', route: '/commercial-mobility', dropdown: true },
  { label: 'Careers', href: '/#careers' },
  { label: 'Blogs', href: '/#blogs' },
  { label: 'Contact Us', href: '/contact', route: '/contact' },
]

const ventureItems = [
  {
    name: 'ARS MotoCorp',
    subtitle: 'Two-Wheeler Mobility',
    href: '/ars-motocorp',
    icon: Bike,
  },
  {
    name: 'Commercial',
    subtitle: 'ARS Commercial Mobility',
    href: '/commercial-mobility',
    icon: Truck,
  },
  {
    name: 'Global Automobiles',
    subtitle: 'ARS Global Automotive',
    href: '/global-automotive',
    icon: Car,
  },
]

export function Logo({ size = 'md' }: { size?: 'md' | 'lg' }) {
  return (
    <Link href="/" className="flex items-center gap-4" aria-label="ARS Imperial Landmark home">
      <Image
        src="https://res.cloudinary.com/df01whs60/image/upload/v1791686790/Intense_Monochrome_Wolf_Emblem_lxin4e.png"
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
  const [venturesOpen, setVenturesOpen] = useState(false)
  const [mobileVenturesOpen, setMobileVenturesOpen] = useState(true)
  const dropdownRef = useRef<HTMLLIElement>(null)
  const pathname = usePathname()
  const isVentureActive = ['/commercial-mobility', '/global-automotive', '/global-automobiles', '/ars-motocorp', '/motocorp'].includes(pathname)
  const links = navLinks.map((link) => ({
    ...link,
    active: link.dropdown ? isVentureActive : link.route === pathname,
  }))

  useEffect(() => {
    setVenturesOpen(false)
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setVenturesOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setVenturesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <header className="bg-navy">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-2.5 md:px-12">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {links.map((link) => {
              if (link.dropdown) {
                return (
                  <li
                    key={link.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setVenturesOpen(true)}
                    onMouseLeave={() => setVenturesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setVenturesOpen((v) => !v)}
                      aria-expanded={venturesOpen}
                      aria-haspopup="true"
                      className="group relative flex cursor-pointer items-center gap-1.5 py-2 text-[13px] font-normal uppercase tracking-[0.12em] text-white/90 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform duration-200',
                          venturesOpen && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute -bottom-1 left-0 h-0.5 w-full bg-brand-green transition-transform',
                          link.active || venturesOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                        )}
                      />
                    </button>

                    <div
                      className={cn(
                        'absolute left-0 top-full z-50 pt-2 transition-all duration-200',
                        venturesOpen
                          ? 'pointer-events-auto visible translate-y-0 opacity-100'
                          : 'pointer-events-none invisible -translate-y-1 opacity-0',
                      )}
                    >
                      <div className="w-72 overflow-hidden rounded-xl border border-white/15 bg-[#081733] p-2 shadow-2xl backdrop-blur-md">
                        <div className="space-y-1">
                          {ventureItems.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setVenturesOpen(false)}
                              className="group/item flex items-center gap-3.5 rounded-lg px-3.5 py-2.5 transition-colors hover:bg-white/10"
                            >
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-green transition-colors group-hover/item:bg-brand-green group-hover/item:text-navy">
                                <item.icon className="h-5 w-5" aria-hidden="true" />
                              </div>
                              <div className="flex flex-col text-left">
                                <span className="text-[13px] font-medium tracking-wide text-white transition-colors group-hover/item:text-brand-green">
                                  {item.name}
                                </span>
                                <span className="text-[10px] tracking-normal text-white/60">
                                  {item.subtitle}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>

                        <div className="mt-1 border-t border-white/10 pt-1">
                          <Link
                            href="/#business"
                            onClick={() => setVenturesOpen(false)}
                            className="flex items-center justify-between rounded-lg px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                          >
                            <span>All Ventures</span>
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              }

              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    aria-current={link.active ? 'page' : undefined}
                    className="group relative flex items-center gap-1.5 py-2 text-[13px] font-normal uppercase tracking-[0.12em] text-white/90 transition-colors hover:text-white"
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute -bottom-1 left-0 h-0.5 w-full bg-brand-green transition-transform',
                        link.active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                      )}
                    />
                  </Link>
                </li>
              )
            })}
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
            {links.map((link) => {
              if (link.dropdown) {
                return (
                  <li key={link.label} className="border-b border-white/10 py-1">
                    <button
                      type="button"
                      onClick={() => setMobileVenturesOpen((v) => !v)}
                      className="flex w-full items-center justify-between py-3 text-sm uppercase tracking-[0.12em] text-white"
                      aria-expanded={mobileVenturesOpen}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform duration-200',
                          mobileVenturesOpen && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    {mobileVenturesOpen && (
                      <div className="mb-2 space-y-1 pb-1 pl-2">
                        {ventureItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs tracking-wider text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                          >
                            <item.icon className="h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                            <div className="flex flex-col text-left">
                              <span className="font-medium text-white">{item.name}</span>
                              <span className="text-[10px] text-white/60">{item.subtitle}</span>
                            </div>
                          </Link>
                        ))}
                        <Link
                          href="/#business"
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-white/70 hover:text-white"
                        >
                          <span>All Ventures</span>
                          <ArrowRight className="h-3 w-3" aria-hidden="true" />
                        </Link>
                      </div>
                    )}
                  </li>
                )
              }

              return (
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
              )
            })}
          </ul>
          <a href="tel:6202122112" className="mt-4 flex items-center gap-3 text-white">
            <Phone className="h-5 w-5" aria-hidden="true" /> 6202122112
          </a>
        </nav>
      )}
    </header>
  )
}
