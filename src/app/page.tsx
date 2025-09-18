import Hero from '@/components/Hero'
import About from '@/components/About'
import FeaturedWork from '@/components/FeaturedWork'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedWork />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}