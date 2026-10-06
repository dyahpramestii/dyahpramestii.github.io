import Section from './Section'
import { experience } from '../data/site'

export default function Experience() {
  return (
    <Section id="experience" title="Experience" className="bg-paper-deep/60">
      <ol className="relative max-w-3xl space-y-10 border-l border-navy/20 pl-8">
        {experience.map((e) => (
          <li key={e.org} className="relative">
            <span className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-paper" aria-hidden="true" />
            <p className="text-sm text-navy-soft">{e.period}</p>
            <h3 className="mt-1 text-xl font-bold">{e.org}</h3>
            <p className="text-sm font-medium">{e.role}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-navy-soft">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
