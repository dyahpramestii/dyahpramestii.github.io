import { GraduationCap, MapPin } from 'lucide-react'
import Section from './Section'
import Icon from './Icon'
import { capabilities } from '../data/site'

export default function About() {
  return (
    <Section id="about" title="Design that works as a system" className="bg-paper-deep/60">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-5 leading-relaxed text-navy-soft">
          <p>
            I'm an Information Systems graduate from UPN Veteran Jakarta. I design interfaces in Figma, and I also understand how those designs become working applications: the data behind them, the roles that use them, and the code that runs them.
          </p>
          <p>
            That mix lets me move between a user's screen and the database underneath it, and keep both consistent. I started with an interest in how people interact with technology, then became curious about what happens behind the interface. Today, I enjoy exploring both sides — designing experiences that make sense for users and building systems that make those experiences work.
          </p>
          <ul className="space-y-2 pt-2 text-sm text-navy">
            <li className="flex items-center gap-2"><GraduationCap size={16} aria-hidden="true" /> S1 Sistem Informasi, UPN Veteran Jakarta · GPA 3.89/4.00</li>
            <li className="flex items-center gap-2"><MapPin size={16} aria-hidden="true" /> Kota Bekasi, Indonesia</li>
          </ul>
        </div>

        <ul className="divide-y divide-navy/10 border-y border-navy/10">
          {capabilities.map((c) => (
            <li key={c.title} className="flex items-start gap-4 py-4">
              <Icon name={c.icon} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="text-sm text-navy-soft">{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
