import { cn } from '@/lib/utils'

export const SOCIAL_LINKS = [
  {
    id: 'facebook',
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1Erpi2HVF1',
    label: 'Visit ARS Imperial Landmark on Facebook',
    brandColor: '#1877F2',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    href: 'https://www.instagram.com/arsimperiallandmarkgroup?mdxt=MWx6OXZxejB5YW81Ng==',
    label: 'Visit ARS Imperial Landmark on Instagram',
    brandColor: '#E4405F',
  },
] as const

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

const ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
}

interface SocialLinksProps {
  variant?: 'footer' | 'header' | 'light' | 'pill'
  showLabels?: boolean
  className?: string
}

export function SocialLinks({
  variant = 'footer',
  showLabels = false,
  className,
}: SocialLinksProps) {
  return (
    <ul
      role="list"
      aria-label="Social media links"
      className={cn('flex items-center gap-2.5', className)}
    >
      {SOCIAL_LINKS.map((item) => {
        const Icon = ICONS[item.id]

        if (variant === 'pill') {
          return (
            <li key={item.id}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="group inline-flex min-h-[36px] items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs text-white/90 transition-all hover:border-white/50 hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Icon className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />
                <span className="font-medium tracking-wide">{item.name}</span>
              </a>
            </li>
          )
        }

        if (variant === 'light') {
          return (
            <li key={item.id}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={cn(
                  'group inline-flex min-h-[36px] min-w-[36px] items-center justify-center rounded-full border border-[#0b2a5b]/20 bg-[#0b2a5b]/5 p-2 text-[#0b2a5b] transition-all hover:border-[#0b2a5b] hover:bg-[#0b2a5b] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b2a5b]',
                  showLabels && 'gap-2 px-3.5 py-1.5',
                )}
              >
                <Icon className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />
                {showLabels && (
                  <span className="text-xs font-semibold tracking-wide">{item.name}</span>
                )}
              </a>
            </li>
          )
        }

        if (variant === 'header') {
          return (
            <li key={item.id}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="group flex min-h-[34px] min-w-[34px] items-center justify-center rounded-full border border-white/30 bg-white/5 p-2 text-white/85 transition-all hover:border-white hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                {showLabels && <span className="ml-2 text-xs">{item.name}</span>}
              </a>
            </li>
          )
        }

        // Default 'footer' variant
        return (
          <li key={item.id}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={cn(
                'group flex min-h-[36px] min-w-[36px] items-center justify-center rounded-full border border-white/20 bg-white/5 p-2 text-white/85 transition-all duration-200 hover:border-white/60 hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
                showLabels && 'gap-2 px-3 py-1.5',
              )}
            >
              <Icon className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110" />
              {showLabels && (
                <span className="text-xs font-medium text-white/90 group-hover:text-white">
                  {item.name}
                </span>
              )}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
