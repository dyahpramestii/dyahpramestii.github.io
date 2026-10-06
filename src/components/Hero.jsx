import { ArrowDown, Download } from 'lucide-react'
import Button from './Button'
import { CV_URL } from '../data/site'

const BASE = import.meta.env.BASE_URL
const PORTRAIT_SRC = `${BASE}images/portrait.png`
const PORTRAIT_FALLBACK = `${BASE}images/portrait-placeholder.svg`

function Portrait() {
  return (
    <div className="relative isolate mx-auto w-full max-w-md lg:max-w-none">
      {/* Aurora mesh gradient*/}
      <div
        aria-hidden="true"
        className="aurora pointer-events-none absolute -inset-[20%] -z-10"
      />

      <img
        src={PORTRAIT_SRC}
        onError={(e) => {
          e.currentTarget.onerror = null
          e.currentTarget.src = PORTRAIT_FALLBACK
        }}
        alt="Portrait of Dyah Pramesti"
        width="800"
        height="1000"
        fetchPriority="high"
        className="relative z-10 block h-auto w-full"
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="overflow-hidden pt-16 md:pt-24">
      <div className="mx-auto grid max-w-6xl items-end gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div className="lg:self-center lg:py-16">
          <p className="hero-rise text-lg font-medium">Dyah Pramesti</p>
          <h1 id="hero-title" className="hero-rise-2 mt-4 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-6xl">
            UI/UX &amp; IT Systems
          </h1>
          <p className="hero-rise-2 mt-6 max-w-xl text-lg leading-relaxed text-navy-soft">
            Information Systems graduate with experience in UI/UX design, system analysis, web development, and data-driven projects.
          </p>
          <div className="hero-rise-2 mt-9 flex flex-wrap gap-3">
            <Button href="#projects" icon={ArrowDown}>View Projects</Button>
            <Button href={CV_URL} variant="outline" icon={Download} download>Download CV</Button>
          </div>
        </div>
        <Portrait />
      </div>
    </section>
  )
}
