import React, { useEffect, useState } from 'react' // v1.0.38-final-motion
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Components
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Materials from './components/Materials'
import Process from './components/Process'
import Stats from './components/Stats'
import SectionDivider from './components/SectionDivider'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="app-container">
      <div className="noise-overlay"></div>
      
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <SectionDivider flip={true} />
            <About />
            <SectionDivider />
            <Stats />
            <SectionDivider flip={true} />
            <Portfolio />
            <SectionDivider />
            <Materials />
            <SectionDivider flip={true} />
            <Process />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
