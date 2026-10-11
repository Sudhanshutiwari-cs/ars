import { cn } from '@/lib/utils'

export function Eyebrow({
  children,
  className,
  lineAfter = false,
  tone = 'dark',
}: {
  children: React.ReactNode
  className?: string
  lineAfter?: boolean
  tone?: 'dark' | 'light'
}) {
  const line = (
    <span
      aria-hidden="true"
      className={cn('h-px w-10 md:w-11', tone === 'light' ? 'bg-white/70' : 'bg-ink/50')}
    />
  )
  return (
    <p
      className={cn(
        'flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em]',
        tone === 'light' ? 'text-white/85' : 'text-ink/80',
        className,
      )}
    >
      {!lineAfter && line}
      {children}
      {lineAfter && line}
    </p>
  )
}
