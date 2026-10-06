import Section from './Section'
import Icon from './Icon'
import { skills } from '../data/site'

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="Design and technical skills, used together.">
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.title}>
            <h3 className="flex items-center gap-2 text-lg font-bold">
              <Icon name={g.icon} size={18} className="text-accent" /> {g.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i} className="rounded-md border border-navy/15 px-3 py-1.5 text-sm">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
