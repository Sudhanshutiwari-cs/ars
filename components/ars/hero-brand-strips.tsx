import { Leaf } from 'lucide-react'
import { cn } from '@/lib/utils'

const whiteLogo = 'object-contain brightness-0 invert'

export function MotoBrandStrip() {
  return (
    <ul
      aria-label="Two-wheeler brands we represent"
      className="flex items-center gap-x-6 overflow-x-auto pb-1 text-white scrollbar-none sm:flex-wrap sm:gap-x-7 sm:gap-y-4 xl:flex-nowrap xl:gap-x-9"
    >
      <li className="shrink-0">
        <span className="text-[15px] font-black italic tracking-wider">KOMAKI</span>
      </li>
      <li className="flex shrink-0 flex-col items-center gap-0.5">
        <img src="/logos/bajaj-auto.svg" alt="" className={cn(whiteLogo, 'h-5 w-6')} />
        <span className="text-[7px] font-bold tracking-[0.2em]">BAJAJ</span>
      </li>
      <li className="shrink-0">
        <span className="text-[17px] font-black italic tracking-tight">TVS</span>
        <span className="sr-only"> Motor</span>
      </li>
      <li className="shrink-0">
        <img src="/logos/hero-motocorp.svg" alt="Hero" className={cn(whiteLogo, 'h-6 w-16')} />
      </li>
      <li className="flex shrink-0 flex-col items-center gap-0.5">
        <img src="/logos/honda-mono.svg" alt="" className={cn(whiteLogo, 'h-6 w-8')} />
        <span className="text-[7px] font-bold tracking-[0.15em]">HONDA</span>
      </li>
      <li className="shrink-0">
        <span className="text-[22px] font-black italic leading-none tracking-tighter">KTM</span>
      </li>
      <li className="flex shrink-0 flex-col items-center font-serif leading-none">
        <span className="text-[11px] font-bold tracking-wide">ROYAL</span>
        <span className="text-[11px] font-bold tracking-wide">ENFIELD</span>
      </li>
      <li className="shrink-0">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-[6px] font-bold tracking-wider">
          TRIUMPH
        </span>
      </li>
      <li className="flex shrink-0 flex-col items-center leading-none">
        <span className="text-[12px] font-semibold tracking-[0.25em]">BRIXTON</span>
        <span className="mt-1 text-[5px] tracking-[0.3em]">MOTORCYCLES</span>
      </li>
      <li className="shrink-0">
        <span className="font-serif text-[18px] font-bold italic">Vespa</span>
      </li>
      <li className="shrink-0">
        <span className="text-[17px] font-medium tracking-tight">aprilia</span>
      </li>
    </ul>
  )
}

export function CommercialBrandStrip() {
  return (
    <ul
      aria-label="Commercial vehicle brands we represent"
      className="flex items-center overflow-x-auto pb-1 text-white scrollbar-none sm:flex-wrap sm:gap-y-4"
    >
      <li className="flex shrink-0 flex-col items-start pr-5 sm:pr-7">
        <Leaf className="h-5 w-5" aria-hidden="true" />
        <span className="mt-1 text-[10px] font-semibold leading-none tracking-wide">
          ALTI<span className="font-light">GREEN</span>
        </span>
      </li>
      <li className="flex shrink-0 flex-col items-start border-l border-white/30 px-5 sm:px-7">
        <span className="text-[15px] font-bold leading-none tracking-wide">Mahindra</span>
        <span className="mt-1 text-[6px] tracking-[0.2em]">COMMERCIAL VEHICLES</span>
      </li>
      <li className="flex shrink-0 flex-col items-start border-l border-white/30 px-5 sm:px-7">
        <span className="flex items-center gap-1.5">
          <img src="/logos/tata-mono.svg" alt="" className={cn(whiteLogo, 'h-4 w-5')} />
          <span className="text-[11px] font-bold leading-none tracking-wide">TATA MOTORS</span>
        </span>
        <span className="mt-1 text-[6px] tracking-[0.2em]">COMMERCIAL VEHICLES</span>
      </li>
      <li className="flex shrink-0 flex-col items-center border-x border-white/30 px-5 sm:px-7">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white text-[9px] font-bold">
          AL
        </span>
        <span className="mt-1 text-[7px] font-semibold tracking-[0.15em]">ASHOK LEYLAND</span>
      </li>
    </ul>
  )
}
