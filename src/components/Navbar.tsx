import type { Dispatch, SetStateAction } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

type NavbarProps = {
  menuOpen: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}

const links = [
  ['Home', '#home'],
  ['Treatments', '#treatments'],
  ['Doctors', '#doctors'],
  ['Gallery', '#gallery'],
  ['FAQ', '#faq'],
  ['Contact', '#appointment'],
]

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e8f0ea]/80 bg-[#f7fbf8]/85 backdrop-blur-xl">
      <nav className="page-container flex h-[76px] items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="font-display text-[1.45rem] font-extrabold tracking-[-.07em] text-[#1e4437]">
          mint<span className="text-[#70aa8f]">.</span>dental
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
        </div>

        <a href="#appointment" className="button-nav hidden sm:inline-flex">
          Book a visit <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-[#dce9e0] text-[#315b49] lg:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-[#e5eee7] bg-[#f7fbf8] px-6 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold text-[#45675a] hover:bg-[#eaf4ed]">
                {label}
              </a>
            ))}
            <a href="#appointment" onClick={() => setMenuOpen(false)} className="button-primary mt-3 justify-center">
              Book a visit <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}