import { Mail, Linkedin, Github, Download, Phone } from 'lucide-react'

import Button from './Button'
import { CONTACT, CV_URL } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-navy py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 id="contact-title" className="max-w-2xl text-4xl font-bold md:text-5xl">Let's build something useful.</h2>
        <p className="mt-4 max-w-xl text-paper/70">Open to junior roles in UI/UX, system analysis, and web development.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={`mailto:${CONTACT.email}`} variant="light" icon={Mail}>Email</Button>
          <Button href={CONTACT.linkedin} variant="light" icon={Linkedin}>LinkedIn</Button>
          <Button href={CONTACT.whatsapp} variant="light" icon={Phone}>WhatsApp</Button>
          <a
            href={CV_URL}
            download
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Download CV <Download size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
