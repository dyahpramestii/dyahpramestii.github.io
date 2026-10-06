import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import Button from './Button'
import { CV_URL } from '../data/site'

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const ids = ['home', ...links.map((l) => l.id), 'certifications']
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const isActive = (id) => active === id || (id === 'skills' && active === 'certifications')
  const linkClass = (id) =>
    `relative py-1 text-sm transition-colors duration-200 ${
      isActive(id) ? 'font-medium text-navy' : 'text-navy-soft hover:text-navy'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-paper/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-lg font-bold">Dyah Pramesti</a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={linkClass(l.id)} aria-current={isActive(l.id) ? 'true' : undefined}>
                {l.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    isActive(l.id) ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href={CV_URL} icon={Download} download>Download CV</Button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-all duration-300 md:hidden ${
          open ? 'grid-rows-[1fr] border-t border-navy/10' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
        <ul className="space-y-1 px-5 pb-5 pt-3" {...(!open && { inert: '' })}>
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={() => setOpen(false)} className={`block py-2 ${linkClass(l.id)}`}>
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Button href={CV_URL} icon={Download} className="w-full" download>Download CV</Button>
          </li>
        </ul>
        </div>
      </div>
    </header>
  )
}
