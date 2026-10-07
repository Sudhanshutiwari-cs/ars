import { cn } from '@/lib/utils'

type StripBrand = {
  name: string
  icon?: string
  label?: string
  iconClass?: string
}

const brands: StripBrand[] = [
  { name: 'Mahindra', icon: '/logos/mahindra-mono.svg', label: 'mahindra' },
  { name: 'Toyota', icon: '/logos/toyota-mono.svg', label: 'TOYOTA' },
  { name: 'Kia', icon: '/logos/kia-mono.svg', iconClass: 'h-9 w-14' },
  { name: 'Jeep', icon: '/logos/jeep-mono.svg', iconClass: 'h-9 w-14' },
  { name: 'Maruti Suzuki', icon: '/logos/suzuki-mono.svg', label: 'MARUTI SUZUKI', iconClass: 'h-4 w-4' },
  { name: 'Tata Motors', icon: '/logos/tata-mono.svg', label: 'TATA MOTORS' },
  { name: 'Honda', icon: '/logos/honda-mono.svg', label: 'HONDA' },
  { name: 'Hyundai', icon: '/logos/hyundai-mono.svg', label: 'HYUNDAI' },
]

export function BrandStrip({
  tone = 'light',
  showMore = false,
  className,
}: {
  tone?: 'light' | 'dark'
  showMore?: boolean
  className?: string
}) {
  const isLight = tone === 'light'
  return (
    <ul
      className={cn('flex flex-wrap items-center gap-y-4 xl:flex-nowrap', className)}
      aria-label="Brands we represent"
    >
      {brands.map((brand, i) => {
        const horizontal = brand.name === 'Maruti Suzuki'
        return (
          <li
            key={brand.name}
            className={cn(
              'flex items-center first:pl-0',
              isLight ? 'px-4 md:px-5' : 'px-2 xl:px-2.5',
              i !== 0 && (isLight ? 'border-l border-white/25' : 'border-l border-transparent'),
            )}
          >
            <div
              className={cn(
                'flex items-center justify-center',
                horizontal ? 'flex-row gap-1.5' : 'flex-col gap-0.5',
              )}
            >
              {brand.icon && (
                <img
                  src={brand.icon || '/placeholder.svg'}
                  alt={brand.label ? '' : brand.name}
                  className={cn(
                    'object-contain',
                    brand.iconClass ?? 'h-5 w-7',
                    isLight ? 'brightness-0 invert' : 'brightness-0 opacity-85',
                  )}
                />
              )}
              {brand.label && (
                <span
                  className={cn(
                    'whitespace-nowrap font-semibold leading-none tracking-wide',
                    horizontal ? 'text-[9px]' : 'text-[8px]',
                    brand.name === 'Mahindra' && 'font-medium tracking-normal normal-case',
                    isLight ? 'text-white' : 'text-ink',
                  )}
                >
                  {brand.label}
                </span>
              )}
            </div>
          </li>
        )
      })}
      {showMore && (
        <li className="flex items-center border-l border-ink/25 pl-4 text-xs text-ink/70">& More</li>
      )}
    </ul>
  )
}
