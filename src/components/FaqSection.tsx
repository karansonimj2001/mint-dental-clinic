import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { faqs } from '../data/site'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="page-container scroll-mt-24 pb-24">
      <div className="max-w-xl">
        <div className="eyebrow"><span className="eyebrow-dot" /> QUESTIONS, ANSWERED</div>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Good to know.</h2>
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {faqs.map((faq, index) => {
          const open = openIndex === index
          return (
            <article
              key={faq.question}
              className={`overflow-hidden rounded-3xl border bg-white transition-colors duration-300 ${open ? 'border-[#a9d6bd]' : 'border-[#e2eee6]'}`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-display text-base font-bold text-[#24483b]">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[#438565] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                />
              </button>
              {open && <p className="px-5 pb-5 text-sm leading-7 text-[#71877e]">{faq.answer}</p>}
            </article>
          )
        })}
      </div>

      <p className="mt-6 text-center text-xs text-[#8aa198]">
        Demo answers — final FAQ content will be reviewed and approved with the clinic.
      </p>
    </section>
  )
}
