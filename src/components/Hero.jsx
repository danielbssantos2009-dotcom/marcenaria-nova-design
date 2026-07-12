import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const imageRef = useRef(null)
  const badgesRef = useRef([])

  useEffect(() => {
    // Continuous floating animation for badges
    badgesRef.current.forEach((badge, i) => {
      if (badge) {
        gsap.to(badge, {
          y: '+=15',
          x: '+=10',
          rotate: i % 2 === 0 ? 2 : -2,
          duration: 2 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        })
      }
    })
  }, [])

  useEffect(() => {
    const tl = gsap.timeline()

    // Intro Animation - ONLY RUNS ONCE
    tl.fromTo(imageRef.current,
      { scale: 1.3, opacity: 0 },
      { scale: 1, opacity: 0.6, duration: 2.5, ease: 'expo.out' }
    )
    .fromTo(".hero-title .line", 
      { skewX: -15, x: -30, opacity: 0 },
      { skewX: 0, x: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out' },
      "-=2"
    )
    .fromTo(".floating-badge",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.4)' },
      "-=1.5"
    )
    .from(".hero-description", {
        y: 20,
        opacity: 0,
        duration: 0.8
    }, "-=1")

  }, [])

  const badges = [
    { text: "30 Anos", sub: "de Tradição" },
    { text: "200+", sub: "Projetos" },
    { text: "Madeira", sub: "Certificada" }
  ]

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="blueprint-overlay"></div>
      
      <div className="hero-bg" ref={imageRef}>
        <img src="/images/hero.png" alt="Luxury Interior" />
      </div>
      
      <div className="container hero-content">
        <div className="hero-text-wrapper" ref={titleRef}>
          <span className="section-tag">Marcenaria de Alto Padrão</span>
          <h1 className="hero-title">
            <span className="line">Onde a <span className="masked-text">Madeira</span></span>
            <span className="line">Torna-se <span className="oak-text">Legado.</span></span>
          </h1>
          <p className="hero-description">
            30 anos transformando ambientes com a alma do artesanato e a precisão da engenharia moderna.
          </p>
          <div className="hero-actions">
            <a href="#portfolio" className="btn-premium">Ver Coleções</a>
          </div>
        </div>

        <div className="hero-badges-container">
          {badges.map((badge, idx) => (
            <div 
                key={idx} 
                className={`floating-badge b-${idx}`}
                ref={el => badgesRef.current[idx] = el}
            >
              <span className="badge-val">{badge.text}</span>
              <span className="badge-sub">{badge.sub}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Role para Explorar</span>
      </div>
    </section>
  )
}

export default Hero
