import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal delay={50}>
          <Projects />
        </Reveal>

        <Reveal delay={50}>
          <Experience />
        </Reveal>

        <Reveal delay={50}>
          <Skills />
        </Reveal>

        <Reveal delay={50}>
          <Certifications />
        </Reveal>
      </main>

      <Reveal>
        <Contact />
      </Reveal>

      <Footer />
    </>
  )
}