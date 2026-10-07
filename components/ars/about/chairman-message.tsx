import Image from 'next/image'

export function ChairmanMessage() {
  return (
    <section id="leadership" className="bg-[#f6f8fc] py-14 font-alt lg:py-[52px]">
      <div className="mx-auto grid max-w-[1120px] items-center gap-10 px-6 md:px-10 lg:grid-cols-[492px_1fr] lg:gap-[34px]">
        <div className="relative aspect-[492/362] overflow-hidden rounded-xl shadow-sm">
          <Image
            src="/images/chairman.png"
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
            Sahil Samrat Singh
          </h2>

          <div className="mt-5 space-y-4 text-[13px] leading-[1.6] text-[#3d4a63]">
            <p>
              Mr. Sahil Samrat Singh is the CMD of ARS Imperiall Landmark, bringing a forward-thinking
              vision and a strong commitment to building a trusted and future-ready automotive group.
              With a rich legacy of experience in the automotive industry and a deep understanding of
              the evolving mobility landscape, he leads the group with a focus on innovation,
              operational excellence, and sustainable growth.
            </p>
            <p>
              Under his leadership, ARS Imperial Landmark continues to strengthen its multi-brand
              presence, expand its footprint across India, and create greater value for customers,
              partners, employees and stakeholders. His strategic direction ensures that the group
              remains agile, customer-centric, and well-positioned for the future of mobility.
            </p>
          </div>

          <div className="mt-5 border-l-[3px] border-[#0b1f45] pl-5">
            <p className="text-[16px] font-bold text-[#0b1f45]">Sahil Samrat Singh</p>
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
