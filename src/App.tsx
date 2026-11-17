import { useState } from 'react'
import { ArrowDown, ArrowRight, MessageCircle, Phone, ShieldCheck, Sparkles, Star } from 'lucide-react'
import Navbar from './components/Navbar'
import SharedDentalScene from './three/SharedDentalScene'
import DoctorsSection from './components/DoctorsSection'
import WhyChooseUs from './components/WhyChooseUs'
import GallerySection from './components/GallerySection'
import TestimonialsSection from './components/TestimonialsSection'
import FaqSection from './components/FaqSection'
import { assetUrl, IMAGES, treatments } from './data/site'

const trustPoints = [
  { icon: ShieldCheck, label: 'Patient-first care' },
  { icon: Sparkles, label: 'Modern treatments' },
  { icon: Star, label: 'Comfort-focused visits' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#f7fbf8] text-[#183b32]">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Shared page-level 3D scene — mounted once, behind all content. */}
      <SharedDentalScene />

      <main className="relative z-10">
        <section id="home" className="hero-shell relative isolate">
          <div aria-hidden="true" className="hero-orb hero-orb-one" />
          <div aria-hidden="true" className="hero-orb hero-orb-two" />

          <div className="page-container relative z-10 grid min-h-[680px] items-center gap-10 pb-20 pt-12 lg:grid-cols-[1.02fr_.98fr] lg:pb-28 lg:pt-16">
            <div className="max-w-[650px]">
              <div className="eyebrow mb-7">
                <span className="eyebrow-dot" />
                DENTAL CARE, REIMAGINED
              </div>

              <h1 className="font-display text-[clamp(3.25rem,7vw,6.6rem)] font-semibold leading-[.99] tracking-[-.075em] text-[#173b31]">
                A healthier
                <br />
                smile starts
                <br />
                <span className="text-[#63a991]">with you.</span>
              </h1>

              <p className="mt-7 max-w-[490px] text-base leading-8 text-[#688078] sm:text-lg">
                Thoughtful dental care, modern technology and a team that puts
                your comfort first. Your next confident smile starts here.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="button-primary" href="#appointment">
                  Book an appointment <ArrowRight size={17} />
                </a>
                <a className="button-secondary" href="#treatments">
                  Explore treatments
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#dce9e1] pt-7">
                {trustPoints.map(({ icon: Icon, label }) => (
                  <div className="flex items-center gap-2.5 text-sm font-medium text-[#557168]" key={label}>
                    <span className="grid size-8 place-items-center rounded-full bg-[#e5f2eb] text-[#4e947b]">
                      <Icon size={16} strokeWidth={1.8} />
                    </span>
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[610px]">
              <div className="hero-artboard relative aspect-[1/1] overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/25 backdrop-blur-[2px] shadow-[0_35px_100px_-55px_rgba(42,100,77,.45)]">
                <img
                  src={IMAGES.dentistFemale}
                  alt="AI-generated fictional portrait of a female dental surgeon — demo visual"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />

                <div className="floating-note absolute bottom-[12%] left-[7%] z-20 rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-lg shadow-[#527e67]/10 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#4b8c73]">
                    <span className="size-2 rounded-full bg-[#73b99a]" />
                    YOUR SMILE, OUR PRIORITY
                  </div>
                  <p className="mt-1 text-sm font-semibold text-[#26483d]">Care that feels different.</p>
                </div>

                <div className="absolute right-[7%] top-[12%] z-20 rounded-2xl border border-white/80 bg-white/80 px-4 py-3 shadow-lg shadow-[#527e67]/10 backdrop-blur-md">
                  <div className="flex items-center gap-1 text-[#d99b42]">
                    {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={12} fill="currentColor" strokeWidth={1} />)}
                  </div>
                  <p className="mt-1 text-xs font-semibold text-[#36584c]">A brighter experience</p>
                </div>
              </div>
              <p className="mt-4 text-center text-xs tracking-wide text-[#8aa198]">
                DEMO VISUAL · 3D MODEL FOLLOWS AS YOU SCROLL
              </p>
            </div>
          </div>

          <a href="#intro" className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-[11px] font-semibold uppercase tracking-[.2em] text-[#7e9b8e] md:flex">
            Scroll to explore <ArrowDown size={14} />
          </a>
        </section>

        <section id="intro" className="page-container scroll-mt-24 py-20 sm:py-28">
          <div className="grid gap-5 rounded-[2rem] bg-white p-8 shadow-[0_20px_70px_-55px_rgba(33,79,59,.3)] sm:grid-cols-3 sm:p-10">
            {[
              ['01', 'Care built around you', 'A welcoming experience with clear guidance at every step.'],
              ['02', 'Modern by design', 'Thoughtful treatment options supported by modern dental technology.'],
              ['03', 'Comfort comes first', 'A calm, friendly environment designed around patient comfort.'],
            ].map(([number, title, description]) => (
              <article className="border-[#e7f0ea] sm:border-r sm:px-5 last:border-0" key={number}>
                <span className="text-xs font-bold tracking-[.18em] text-[#72a990]">{number}</span>
                <h2 className="mt-4 font-display text-xl font-semibold tracking-tight">{title}</h2>
                <p className="mt-2 text-sm leading-7 text-[#71877e]">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="treatments" className="page-container scroll-mt-24 pb-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> PERSONALIZED DENTAL SOLUTIONS</div>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Care for every smile.</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#71877e]">From routine check-ups to full smile restorations — a quick look at the care we cover.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {treatments.map((item, index) => (
              <article
                key={item.name}
                className="group rounded-3xl border border-[#e2eee6] bg-white p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#a9d6bd] hover:shadow-xl hover:shadow-[#397b60]/10"
              >
                <div className="flex h-28 items-center justify-center overflow-hidden rounded-2xl bg-[#f2faf5]">
                  <img
                    src={assetUrl(`images/${item.icon}`)}
                    alt={`${item.name} treatment icon`}
                    loading="lazy"
                    className="h-full w-full object-contain p-3 mix-blend-multiply transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <span className="mt-5 block text-[10px] font-bold tracking-widest text-[#80ad94]">
                  0{index + 1}
                </span>

                <h3 className="mt-2 font-display text-base font-bold text-[#24483b]">
                  {item.name}
                </h3>

                <p className="mt-2 text-xs leading-6 text-[#7b9087]">
                  {item.description}
                </p>

                <a
                  href="#appointment"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#438565] transition-all group-hover:gap-3"
                >
                  Enquire now →
                </a>
              </article>
            ))}
          </div>
        </section>

        <DoctorsSection />

        <WhyChooseUs />

        <GallerySection />

        <TestimonialsSection />

        <section id="appointment" className="page-container scroll-mt-24 pb-24">
          <div className="grid items-center gap-8 rounded-[2rem] bg-[#dff0e5] p-8 sm:p-12 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT STEP</div>
              <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Let’s make room for your smile.</h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-[#54705f]">
                Book a visit and our team takes it from there — a calm room, a
                clear plan and care that fits your day.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="mailto:hello@example.com" className="button-primary">
                  Book appointment <ArrowRight size={17} />
                </a>
                <button
                  type="button"
                  title="Demo placeholder — phone number will be connected before launch"
                  className="button-secondary"
                >
                  Call the clinic <Phone size={16} />
                </button>
                <button
                  type="button"
                  title="Demo placeholder — WhatsApp will be connected before launch"
                  className="button-secondary"
                >
                  WhatsApp <MessageCircle size={16} />
                </button>
              </div>

              <p className="mt-5 max-w-md text-xs leading-6 text-[#668276]">
                Demo placeholders — phone, WhatsApp and clinic address will be connected with verified details before launch.
              </p>
            </div>

            <div className="relative">
              <img
                src={IMAGES.teethModel}
                alt="Demo render of a dental teeth model with a mouth mirror"
                loading="lazy"
                className="mx-auto aspect-square w-full max-w-[380px] rounded-[1.75rem] border border-white/70 object-cover shadow-[0_30px_80px_-50px_rgba(33,79,59,.5)]"
              />
              <span className="demo-pill absolute right-4 top-4">DEMO VISUAL</span>
            </div>
          </div>
        </section>

        <FaqSection />
      </main>

      <footer className="border-t border-[#e4eee7] bg-[#f1f7f2]">
        <div className="page-container flex flex-col gap-3 py-8 text-xs text-[#7b9186] sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-base font-bold tracking-tight text-[#24483b]">mint<span className="text-[#70a98f]">.</span>dental</span>
          <span>Demo concept · All people shown are fictional AI-generated demo assets. Replace with verified clinic details before launch.</span>
          <span>© {new Date().getFullYear()} Mint Dental</span>
        </div>
      </footer>
    </div>
  )
}
