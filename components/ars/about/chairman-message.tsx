import Image from 'next/image'

export function ChairmanMessage() {
  return (
    <section id="leadership" className="bg-[#f6f8fc] py-14 font-alt lg:py-[52px]">
      <div className="mx-auto grid max-w-[1120px] items-center gap-10 px-6 md:px-10 lg:grid-cols-[492px_1fr] lg:gap-[34px]">
        <div className="relative aspect-[492/362] overflow-hidden rounded-xl shadow-sm">
          <Image
            src="https://res.cloudinary.com/df01whs60/image/upload/v1791686016/ars_founder_nbmcyv.png"
            alt="Sahil Samrat Singh, Chairman and Managing Director of ARS Imperial Landmark, seated at his office desk"
            fill
            sizes="(min-width: 1024px) 492px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0b1f45]">
            Chairman &amp; Managing Director
            <span aria-hidden="true" className="h-px w-11 bg-[#0b1f45]" />
          </p>
          <h2 className="mt-2 text-[30px] font-bold leading-tight text-[#0b1f45] md:text-[32px]">
            Sahil Singh
          </h2>

          <div className="mt-5 space-y-4 text-[13px] leading-[1.6] text-[#3d4a63]">
            <p>
              Established in 2020 and built on a rich 29-year automotive dealership legacy, ARS Imperial Landmark
              is led by Chairman &amp; Managing Director Mr. Sahil Singh. Bringing a forward-thinking vision and an
              uncompromising commitment to customer trust, he spearheads the group’s expansion across North and East India.
            </p>
            <p>
              Under CMD Sahil Singh’s strategic direction, ARS Imperial Landmark drives operational excellence
              across its three dedicated business verticals — ARS Global Automotive (passenger cars), ARS MotoCorp
              (two-wheelers), and ARS Commercial Mobility (trucks, buses &amp; EVs) — representing leading domestic
              and international vehicle manufacturers with over 24+ dealerships and 68+ outlets.
            </p>
          </div>

          <div className="mt-5 border-l-[3px] border-[#0b1f45] pl-5">
            <p className="text-[16px] font-bold text-[#0b1f45]">Sahil Singh</p>
            <p className="mt-1 text-[11px] leading-relaxed text-[#0b1f45]/85">
              Chairman &amp; Managing Director
              <br />
              ARS Imperial Landmark
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
