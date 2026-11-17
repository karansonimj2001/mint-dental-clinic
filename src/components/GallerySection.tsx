import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { galleryImages } from '../data/site'

export default function GallerySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    if (openIndex === null) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenIndex(null)
      if (event.key === 'ArrowRight') {
        setOpenIndex((current) => (current === null ? null : (current + 1) % galleryImages.length))
      }
      if (event.key === 'ArrowLeft') {
        setOpenIndex((current) => (current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length))
      }
    }

    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIndex])

  const active = openIndex === null ? null : galleryImages[openIndex]

  return (
    <section id="gallery" className="page-container scroll-mt-24 pb-24">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" /> INSIDE THE CLINIC</div>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-.05em] sm:text-5xl">A calm, modern space.</h2>
        </div>
        <span className="demo-pill w-fit">DEMO VISUALS · AI-GENERATED</span>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[190px]">
        {galleryImages.map((image, index) => (
          <button
            type="button"
            key={image.src}
            onClick={() => setOpenIndex(index)}
            aria-label={`View larger: ${image.caption}`}
            className={`group relative h-60 overflow-hidden rounded-[1.5rem] border border-[#e2eee6] bg-white lg:h-full ${image.span}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[10px] font-bold tracking-widest text-[#2d684f] backdrop-blur">
              {image.caption}
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[#0e2a1f]/90 p-4 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close viewer"
            className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setOpenIndex((current) => (current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length))
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25 sm:left-6"
          >
            <ChevronLeft size={20} />
          </button>

          <figure className="max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[78vh] w-auto max-w-full rounded-[1.5rem] object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm font-semibold text-white/85">
              {active.caption} · Demo visual
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setOpenIndex((current) => (current === null ? null : (current + 1) % galleryImages.length))
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25 sm:right-6"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </section>
  )
}
