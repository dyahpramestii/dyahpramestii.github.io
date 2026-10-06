export default function Section({ id, title, intro, className = '', children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 id={`${id}-title`} className="text-3xl font-bold md:text-4xl">{title}</h2>
          {intro && <p className="mt-3 text-navy-soft">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
