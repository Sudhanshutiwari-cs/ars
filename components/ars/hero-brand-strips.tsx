import { cn } from '@/lib/utils'

const whiteLogo = 'object-contain brightness-0 invert'

export function MotoBrandStrip() {
  return (
    <ul
      aria-label="Two-wheeler brands we represent"
      className="flex w-full min-w-0 max-w-full items-center gap-x-5 overflow-x-auto pb-1 text-white scrollbar-none sm:flex-wrap sm:gap-x-7 sm:gap-y-4 xl:flex-nowrap xl:gap-x-9"
    >
      <li className="shrink-0">
        <span className="text-[13px] sm:text-[15px] font-black italic tracking-wider">KOMAKI</span>
      </li>
      <li className="flex shrink-0 flex-col items-center gap-0.5">
        <img src="/logos/bajaj-auto.svg" alt="" className={cn(whiteLogo, 'h-4 w-5 sm:h-5 sm:w-6')} />
        <span className="text-[7px] font-bold tracking-[0.2em]">BAJAJ</span>
      </li>
      <li className="shrink-0">
        <img src="/logos/tvs-motor.png" alt="TVS Motor" className={cn(whiteLogo, 'h-4 w-auto sm:h-5')} />
      </li>
      <li className="shrink-0">
        <img src="/logos/hero-motocorp.svg" alt="Hero" className={cn(whiteLogo, 'h-5 w-12 sm:h-6 sm:w-16')} />
      </li>
      <li className="flex shrink-0 flex-col items-center gap-0.5">
        <img src="/logos/honda-mono.svg" alt="" className={cn(whiteLogo, 'h-5 w-7 sm:h-6 sm:w-8')} />
        <span className="text-[7px] font-bold tracking-[0.15em]">HONDA</span>
      </li>
      <li className="shrink-0">
        <span className="text-[17px] sm:text-[22px] font-black italic leading-none tracking-tighter">KTM</span>
      </li>
      <li className="flex shrink-0 flex-col items-center font-serif leading-none">
        <span className="text-[10px] sm:text-[11px] font-bold tracking-wide">ROYAL</span>
        <span className="text-[10px] sm:text-[11px] font-bold tracking-wide">ENFIELD</span>
      </li>
      <li className="shrink-0">
        <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white text-[5px] sm:text-[6px] font-bold tracking-wider">
          TRIUMPH
        </span>
      </li>
      <li className="flex shrink-0 flex-col items-center leading-none">
        <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.25em]">BRIXTON</span>
        <span className="mt-0.5 text-[5px] tracking-[0.3em]">MOTORCYCLES</span>
      </li>
      <li className="shrink-0">
        <span className="font-serif text-[16px] sm:text-[18px] font-bold italic">Vespa</span>
      </li>
      <li className="shrink-0">
        <span className="text-[15px] sm:text-[17px] font-medium tracking-tight">aprilia</span>
      </li>
    </ul>
  )
}

export function CommercialBrandStrip() {
  return (
    <ul
      aria-label="Commercial vehicle brands we represent"
      className="flex w-full min-w-0 max-w-full items-center overflow-x-auto pb-1 text-white scrollbar-none sm:flex-wrap sm:gap-y-4"
    >
      <li className="flex shrink-0 items-center pr-4 sm:pr-7">
        <img
          src="https://res.cloudinary.com/df01whs60/image/upload/v1792528091/WhatsApp_Image_2026-10-12_at_2.18.51_PM_nsejit.jpg"
          alt="Altigreen"
          className="h-6 w-auto rounded bg-white px-2 py-0.5 object-contain sm:h-7"
        />
      </li>
      <li className="flex shrink-0 items-center border-l border-white/30 px-4 sm:px-7">
        <img
          src="https://res.cloudinary.com/df01whs60/image/upload/v1792528106/WhatsApp_Image_2026-10-12_at_2.19.15_PM_njx8r0.jpg"
          alt="Mahindra Commercial Vehicles"
          className="h-8 w-auto object-contain mix-blend-screen sm:h-9"
        />
      </li>
      <li className="flex shrink-0 flex-col items-start border-l border-white/30 px-4 sm:px-7">
        <span className="flex items-center gap-1.5">
          <img src="/logos/tata-mono.svg" alt="" className={cn(whiteLogo, 'h-3.5 w-4.5 sm:h-4 sm:w-5')} />
          <span className="text-[10px] sm:text-[11px] font-bold leading-none tracking-wide">TATA MOTORS</span>
        </span>
        <span className="mt-0.5 text-[6px] tracking-[0.2em]">COMMERCIAL VEHICLES</span>
      </li>
      <li className="flex shrink-0 items-center border-x border-white/30 px-4 sm:px-7">
        <img
          src="https://res.cloudinary.com/df01whs60/image/upload/v1792528230/Ashok_Leyland-Logo.wine_dcoded.png"
          alt="Ashok Leyland"
          className={cn(whiteLogo, 'h-6 w-auto sm:h-7')}
        />
      </li>
    </ul>
  )
}
