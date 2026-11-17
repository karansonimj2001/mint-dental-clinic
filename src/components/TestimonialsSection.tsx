import { Quote } from 'lucide-react'
import { testimonials } from '../data/site'

export default function TestimonialsSection() {
  return (
    <section className="page-container pb-24">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" /> PATIENT EXPERIENCES</div>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Words we hope to earn.</h2>
        </div>
        <span className="demo-pill w-fit">DEMO REVIEWS · FICTIONAL</span>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-[2rem] border border-[#e2eee6] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#397b60]/10"
          >
            <div className="flex items-start justify-between gap-4">
              <img
                src={item.photo}
                alt={item.alt}
                loading="lazy"
                className="size-16 rounded-2xl border border-[#eef5f0] object-cover"
              />
              <Quote size={22} className="shrink-0 text-[#a9d6bd]" />
            </div>

            <p className="mt-4 text-sm leading-7 text-[#5c7568]">“{item.quote}”</p>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#eef5f0] pt-4">
              <p className="text-sm font-bold text-[#24483b]">{item.name}</p>
              <span className="demo-pill shrink-0">DEMO REVIEW</span>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-[#8aa198]">
        Fictional demo reviews with AI-generated portraits — no real patient data or ratings. Approved testimonials will replace these before launch.
      </p>
    </section>
  )
}
