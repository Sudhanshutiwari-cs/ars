import { Mail, MapPin, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const items = [
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 120 456 7890', 'Mon – Sat, 9 AM – 6 PM'],
    href: 'tel:+911204567890',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['hello@arsgroup.in', 'We reply within 24 hours'],
    href: 'mailto:hello@arsgroup.in',
  },
  {
    icon: MapPin,
    title: 'Office Address',
    lines: ['ARS Group, Sector 62,', 'Noida, Uttar Pradesh – 201309,', 'India'],
  },
]

export function ContactInfoRow({
  variant,
  className,
}: {
  variant: 'stacked' | 'inline'
  className?: string
}) {
  const stacked = variant === 'stacked'
  return (
    <ul className={cn('flex flex-col gap-6 sm:flex-row sm:gap-0', className)}>
      {items.map((item, i) => {
        const Icon = item.icon
        return (
          <li
            key={item.title}
            className={cn(
              'flex',
              stacked ? 'flex-col gap-3 sm:px-5' : 'items-start gap-3 sm:px-4 [&_p]:whitespace-nowrap',
              i === 0 && 'sm:pl-0',
              i > 0 && 'sm:border-l sm:border-ink/15',
              i === items.length - 1 && 'sm:flex-[1.3]',
              i < items.length - 1 && 'sm:flex-1',
            )}
          >
            <span
              className={cn(
                'flex shrink-0 items-center justify-center rounded-full bg-[#0b2a5b] text-white',
                stacked ? 'h-[26px] w-[26px]' : 'h-9 w-9',
              )}
            >
              <Icon className={stacked ? 'h-3 w-3' : 'h-4 w-4'} strokeWidth={2} aria-hidden="true" />
            </span>
            <div className="text-[11px] leading-[1.7] text-ink/60">
              <p className="text-[12px] font-bold text-[#0b2a5b]">{item.title}</p>
              {item.href ? (
                <a href={item.href} className="block hover:text-[#0b2a5b]">
                  {item.lines[0]}
                </a>
              ) : (
                <p>{item.lines[0]}</p>
              )}
              {item.lines.slice(1).map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
