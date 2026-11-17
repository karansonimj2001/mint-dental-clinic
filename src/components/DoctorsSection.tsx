import { ArrowRight } from 'lucide-react'
import { doctors, IMAGES } from '../data/site'

export default function DoctorsSection() {
  return (
    <section id="doctors" className="page-container scroll-mt-24 pb-24">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" /> MEET THE TEAM</div>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Care from people who listen.</h2>
        </div>
        <span className="demo-pill w-fit">DEMO PROFILES · FICTIONAL</span>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <article
            key={doctor.name}
            className="group overflow-hidden rounded-[2rem] border border-[#e2eee6] bg-white shadow-[0_20px_70px_-55px_rgba(33,79,59,.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#397b60]/10"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#eef7f1]">
              <img
                src={doctor.photo}
                alt={doctor.alt}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="demo-pill absolute left-4 top-4">DEMO PROFILE</span>
            </div>

            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-[#24483b]">{doctor.name}</h3>
              <p className="mt-1 text-xs font-bold text-[#438565]">{doctor.role}</p>
              <p className="mt-3 text-sm leading-7 text-[#71877e]">{doctor.intro}</p>
              <a
                href="#appointment"
                className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#438565] transition-all group-hover:gap-3"
              >
                Book consultation <ArrowRight size={14} />
              </a>
            </div>
          </article>
        ))}

        <article className="relative min-h-[300px] overflow-hidden rounded-[2rem] border border-[#e2eee6] bg-white shadow-[0_20px_70px_-55px_rgba(33,79,59,.3)]">
          <img
            src={IMAGES.dentalTeam}
            alt="AI-generated fictional dental team group photo — demo visual"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#12291f]/85 via-[#12291f]/35 to-transparent p-6 pt-20">
            <span className="demo-pill">DEMO TEAM VISUAL</span>
            <p className="mt-3 font-display text-lg font-bold text-white">The wider team</p>
            <p className="mt-1 text-xs leading-6 text-white/80">
              Supporting demo visual. The final team page will be built with clinic-approved photos and profiles.
            </p>
          </div>
        </article>
      </div>

      <p className="mt-6 text-center text-xs text-[#8aa198]">
        AI-generated demo portraits with fictional names — not real clinic staff. Real profiles will replace these before launch.
      </p>
    </section>
  )
}
