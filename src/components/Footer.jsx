export default function Footer() {
  return (
    <footer className="bg-navy pb-8 text-sm text-paper/60">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 border-t border-paper/15 px-5 pt-6 sm:px-8">
        <p>© {new Date().getFullYear()} Dyah Pramesti</p>
        <p>Built with React, Vite, and Tailwind CSS.</p>
      </div>
    </footer>
  )
}
