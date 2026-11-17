import { Clock, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react'

const points = [
  { icon: ShieldCheck, title: 'Hygiene first', text: 'Sterilized instruments and strict safety protocols for every visit.' },
  { icon: Sparkles, title: 'Modern & gentle', text: 'Contemporary equipment and techniques chosen for comfort.' },
  { icon: HeartHandshake, title: 'Comfort-led care', text: 'Calm rooms, clear explanations and patient-first planning.' },
  { icon: Clock, title: 'Respect for time', text: 'Organised scheduling that keeps waits short and visits smooth.' },
]

export default function WhyChooseUs() {
  return (
    <section className="page-container pb-24">
      <div className="max-w-xl">
        <div className="eyebrow"><span className="eyebrow-dot" /> WHY MINT DENTAL</div>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Built around your comfort.</h2>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {points.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-3xl border border-[#e2eee6] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#a9d6bd] hover:shadow-lg hover:shadow-[#397b60]/10"
          >
            <span className="grid size-11 place-items-center rounded-full bg-[#e5f2eb] text-[#4e947b]">
              <Icon size={19} strokeWidth={1.8} />
            </span>
            <h3 className="mt-5 font-display text-lg font-bold text-[#24483b]">{title}</h3>
            <p className="mt-2 text-sm leading-7 text-[#71877e]">{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
