import { Award, ArrowUpRight } from 'lucide-react'
import Section from './Section'
import { certifications } from '../data/site'

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" className="!pt-0">
      <ul className="grid gap-4 sm:grid-cols-3">
        {certifications.map((c, i) => (
          <li key={i}>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-start gap-3 rounded-lg border border-navy/10 bg-white p-4 transition-colors hover:border-navy/40"
            >
              <Award size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <span className="flex-1">
                <span className="block text-sm font-semibold">{c.name}</span>
                <span className="block text-xs text-navy-soft">{c.issuer} · {c.year}</span>
              </span>
              <ArrowUpRight size={14} className="text-navy-soft" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
