import { CalendarClock, MapPinned, Store, Warehouse } from 'lucide-react'

const stats = [
  { icon: Warehouse, value: '24+', label: 'Dealerships', detail: ['Across North & East India'] },
  { icon: Store, value: '68+', label: 'Outlets', detail: ['A strong network for', 'greater reach'] },
  {
    icon: MapPinned,
    value: '6+',
    label: 'States',
    places: [
      ['Jharkhand', 'Bihar', 'Oddisa'],
      ['Siliguri', 'Noida', 'Ghaziabad'],
    ],
  },
  {
    icon: CalendarClock,
    value: '3',
    label: 'Upcoming Locations',
    places: [['Delhi', 'Haryana', 'Chandigarh']],
  },
]

function PlaceList({ items }: { items: string[] }) {
  return (
    <p>
      {items.map((place, i) => (
        <span key={place}>
          {i > 0 && (
            <span aria-hidden="true" className="mx-1.5 text-white/35">
              |
            </span>
          )}
          {place}
        </span>
      ))}
    </p>
  )
}

export function ContactStats() {
  return (
    <section
      aria-label="ARS network at a glance"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_70%_30%,#123a6e_0%,#0a2550_45%,#071b3d_100%)] font-alt text-white"
    >
      <ul className="mx-auto grid max-w-[1180px] grid-cols-1 gap-y-12 px-6 py-16 sm:grid-cols-2 md:px-12 lg:grid-cols-4 lg:py-[70px]">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <li
              key={stat.label}
              className={`flex flex-col items-center px-4 text-center ${i > 0 ? 'lg:border-l lg:border-white/20' : ''}`}
            >
              <Icon className="h-12 w-12" strokeWidth={1.1} aria-hidden="true" />
              <p className="mt-3 text-[26px] font-extrabold leading-none">{stat.value}</p>
              <p className="mt-2 text-[14px] font-medium">{stat.label}</p>
              <span aria-hidden="true" className="mt-3 h-0.5 w-6 bg-[#3b82f6]" />
              <div className="mt-3 space-y-0.5 text-[11px] leading-relaxed text-white/80">
                {stat.detail?.map((line) => <p key={line}>{line}</p>)}
                {stat.places?.map((row) => <PlaceList key={row.join()} items={row} />)}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
