import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image entrance
      gsap.from('.about-image', {
        x: -50,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      })

      // Text stagger reveal
      gsap.from('.about-text-content > *', {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      })

      // Decorative elements parallax
      gsap.to('.est-watermark', {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="est-watermark">EST. 1994</div>
      <div className="container about-grid">
        <div className="about-image">
          <div className="image-frame">
            <img src="/images/detail.png" alt="Mestre Marceneiro Detail" />
          </div>
          <div className="experience-badge">
            <span className="years">30</span>
            <div className="badge-text-group">
                <span className="years-text">Anos de</span>
                <span className="years-subtitle">Legado</span>
            </div>
          </div>
          <div className="image-deco-dots"></div>
        </div>

        <div className="about-text-content">
          <div className="mobile-accent-line"></div>
          <span className="section-tag">Nossa História</span>
          <h2 className="section-title">Tradição que <br /><span className="accent-text">Esculpe o Futuro</span></h2>
          
          <div className="editorial-text-wrap">
            <p className="about-p intro-p">
              A Marcenaria Nova Design não apenas fabrica móveis; nós criamos o cenário para os momentos mais importantes da sua vida. 
            </p>
            <p className="about-p">
              Com mais de três décadas de atuação em São Paulo, unimos o saber ancestral dos mestres marceneiros 
              à tecnologia de ponta em design de interiores. Cada corte é obsessão pela perfeição.
            </p>
          </div>

          <div className="signature">
            <span className="sig-name">Marcenaria Nova Design</span>
            <span className="sig-title">Bespoke Woodworking Studio</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
