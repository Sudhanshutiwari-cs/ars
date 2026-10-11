import Image from 'next/image'

const commercialImages = [
  {
    src: 'https://res.cloudinary.com/df01whs60/image/upload/v1791715209/bajaj_outside_j3kphk.jpg',
    alt: 'ARS Commercial Mobility Bajaj Dealership Facility',
  },
  {
    src: 'https://res.cloudinary.com/df01whs60/image/upload/v1791715213/tata_outside_oyb4b4.jpg',
    alt: 'ARS Commercial Mobility Tata Motors Dealership Facility',
  },
]

export function CommercialDealershipImages() {
  return (
    <section id="commercial-dealership-images" className="bg-white py-8 md:py-12 font-alt">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {commercialImages.map((img, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_4px_20px_rgba(11,26,54,0.06)] ring-1 ring-neutral-200/80 transition-all duration-300 hover:shadow-xl md:h-[420px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
