import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollAnimations />
    </>
  )
}
