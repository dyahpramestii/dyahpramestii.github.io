import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'

import Section from './Section'
import { projects } from '../data/projects'
import { useState } from 'react'

function ProjectCard({ project }) {
  const isCarousel = project.items?.length > 0
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentItem = isCarousel
    ? project.items[currentIndex]
    : project

  const nextSlide = () => {
    setCurrentIndex((current) =>
      current === project.items.length - 1 ? 0 : current + 1
    )
  }

  const previousSlide = () => {
    setCurrentIndex((current) =>
      current === 0 ? project.items.length - 1 : current - 1
    )
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-navy/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <div className="relative overflow-hidden bg-paper-deep">

        <img
          src={currentItem.image}
          alt={`${currentItem.title} preview`}
          loading="lazy"
          className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Carousel Navigation */}
        {isCarousel && (
          <>
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous project"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-md backdrop-blur-sm transition hover:bg-white"
            >
              <ArrowLeft size={17} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next project"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-md backdrop-blur-sm transition hover:bg-white"
            >
              <ArrowRight size={17} />
            </button>

            {/* Indicator */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-navy/60 px-2.5 py-1.5 backdrop-blur-sm">
              {project.items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to ${item.title}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-4 bg-white'
                      : 'w-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Project Info */}
      <div className="flex flex-1 flex-col p-6">

        <p className="text-sm font-medium text-accent">
          {project.category}
        </p>

        <h3 className="mt-1 text-xl font-bold">
          {currentItem.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-soft">
          {project.description}
        </p>

        <ul
          className="mt-4 flex flex-wrap gap-2"
          aria-label="Tools used"
        >
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="rounded bg-paper-deep px-2 py-1 font-mono text-xs"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Featured projects"
      intro="Selected work across design, systems, and data."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </Section>
  )
}