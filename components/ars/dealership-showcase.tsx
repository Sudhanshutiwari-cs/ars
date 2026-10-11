import Image from 'next/image'

const showcaseImages = [
  {
    src: 'https://res.cloudinary.com/df01whs60/image/upload/v1791715640/Toyota_5_ufsd9g.jpg',
    alt: 'ARS Imperial Toyota Showroom and Customer Delivery Arena',
  },
  {
    src: 'https://res.cloudinary.com/df01whs60/image/upload/v1791715638/Toyota_1_bssqkg.jpg',
    alt: 'ARS Imperial Toyota Premium Showroom Floor and Vehicle Display',
  },
]

export function DealershipShowcase() {
  return (
    <section id="dealership-images" className="bg-white py-8 md:py-12">
      <div className="mx-auto max-w-[1280px] px-6 md:px-[64px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {showcaseImages.map((img, index) => (
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
