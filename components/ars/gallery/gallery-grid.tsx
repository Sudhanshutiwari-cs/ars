'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Eye, MapPin, Maximize2, Tag, X } from 'lucide-react'
import { galleryCategories, galleryItems, GalleryItem } from '@/lib/gallery-data'
import { cn } from '@/lib/utils'

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return galleryItems
    return galleryItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const selectedItem: GalleryItem | null =
    activeImageIndex !== null && filteredItems[activeImageIndex]
      ? filteredItems[activeImageIndex]
      : null

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeImageIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImageIndex(null)
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        )
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        )
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    // Prevent background scrolling while modal is active
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeImageIndex, filteredItems.length])

  const handleNext = () => {
    if (activeImageIndex === null) return
    setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null))
  }

  const handlePrev = () => {
    if (activeImageIndex === null) return
    setActiveImageIndex((prev) =>
      prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
    )
  }

  return (
    <section className="bg-[#f8fafc] py-14 font-alt md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.25em] text-[#0c2340]">
              Curated Collections
              <span aria-hidden="true" className="h-0.5 w-10 bg-[#0c2340]" />
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0c2340] sm:text-3xl md:text-4xl">
              Explore Life at ARS Landmark
            </h2>
            <p className="mt-2 text-[14px] text-ink/70">
              Filter by category or click any photograph to view high-resolution details.
            </p>
          </div>

          <p className="text-[13px] font-medium text-ink/60">
            Showing <span className="font-semibold text-[#0c2340]">{filteredItems.length}</span> photographs
          </p>
        </div>

        {/* Category Pills */}
        <div className="mt-8 flex flex-wrap gap-2.5 border-b border-neutral-200 pb-6">
          {galleryCategories.map((category) => {
            const count =
              category === 'All'
                ? galleryItems.length
                : galleryItems.filter((item) => item.category === category).length

            const isActive = activeCategory === category

            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category)
                  setActiveImageIndex(null)
                }}
                className={cn(
                  'group flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-all',
                  isActive
                    ? 'bg-[#0b1a36] text-white shadow-sm ring-1 ring-[#0b1a36]'
                    : 'bg-white text-ink/75 hover:bg-neutral-100 border border-neutral-200 hover:text-ink'
                )}
                aria-pressed={isActive}
              >
                <span>{category}</span>
                <span
                  className={cn(
                    'inline-flex h-5 items-center justify-center rounded-full px-1.5 text-[11px] font-semibold',
                    isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-ink/60'
                  )}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveImageIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_4px_20px_rgba(11,26,54,0.06)] ring-1 ring-neutral-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-brand-green/50"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveImageIndex(index)
                }
              }}
              aria-label={`View photo: ${item.title}`}
            >
              {/* Photo Box */}
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Top badges */}
                <div className="absolute left-3.5 top-3.5 z-10 flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center rounded-full bg-brand-green px-2.5 py-1 text-[11px] font-bold tracking-wide text-[#0b1a36] shadow-md">
                    {item.brand}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#0b1a36]/85 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* Clean hover overlay with title and expand icon */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/25 to-transparent p-5 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center justify-between text-white">
                    <div className="pr-3">
                      <p className="text-sm font-bold leading-tight drop-shadow-md">
                        {item.title}
                      </p>
                      <p className="mt-1 flex items-center gap-1 text-[11px] text-brand-green drop-shadow">
                        <MapPin className="h-3 w-3 shrink-0" />
                        <span>{item.location}</span>
                      </p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0b1a36] shadow-lg transition-transform group-hover:scale-110">
                      <Maximize2 className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state safeguard */}
        {filteredItems.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-neutral-300 bg-white py-16 text-center">
            <p className="text-base font-semibold text-[#0c2340]">No photographs in this category</p>
            <p className="mt-1 text-sm text-ink/60">
              Select another category to view photographs.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory('All')}
              className="mt-4 rounded-full bg-[#0b1a36] px-5 py-2 text-xs font-semibold text-white"
            >
              View All Photos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-6 md:p-10"
        >
          {/* Modal Backdrop click listener */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setActiveImageIndex(null)}
          />

          {/* Modal Card Content */}
          <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-[#081733] text-white shadow-2xl ring-1 ring-white/10">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/20 px-3 py-1 text-[11px] font-medium text-brand-green ring-1 ring-brand-green/30">
                  <Tag className="h-3 w-3" aria-hidden="true" />
                  {selectedItem.category}
                </span>
                <span className="inline-flex items-center rounded-full bg-brand-green px-2.5 py-1 text-[11px] font-bold text-[#0b1a36]">
                  {selectedItem.brand}
                </span>
                <span className="text-[13px] text-white/60">
                  Photo <strong className="text-white">{activeImageIndex + 1}</strong> of{' '}
                  <strong className="text-white">{filteredItems.length}</strong>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveImageIndex(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Close dialog"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Media Canvas with Prev/Next buttons */}
            <div className="relative flex flex-1 items-center justify-center bg-black/60 p-2 sm:p-4">
              <div className="relative aspect-[16/10] w-full max-h-[62vh] overflow-hidden rounded-lg">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Navigation Arrows */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrev()
                }}
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/90 sm:left-6"
                aria-label="Previous photograph"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/90 sm:right-6"
                aria-label="Next photograph"
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="border-t border-white/10 bg-[#061227] px-6 py-4">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                <div>
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {selectedItem.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-2 text-xs text-brand-green">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{selectedItem.location}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-white/50">
                  <span>Use arrow keys to navigate &bull; Esc to close</span>
                </div>
              </div>

              <p className="mt-2.5 max-w-4xl text-xs leading-relaxed text-white/80 sm:text-[13px]">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
