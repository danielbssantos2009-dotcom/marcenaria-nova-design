import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Preloader.css'

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null)
  const logoRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: 'power4.inOut',
          onComplete: onComplete
        })
      }
    })

    tl.fromTo(logoRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    )
    .fromTo(lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1, ease: 'power3.inOut' },
      "-=0.5"
    )
    .to(logoRef.current, { opacity: 0, y: -20, duration: 0.8, ease: 'power3.in', delay: 0.5 })
    .to(lineRef.current, { scaleX: 0, duration: 0.8, ease: 'power3.in' }, "-=0.8")

  }, [onComplete])

  return (
    <div className="preloader" ref={containerRef}>
      <div className="preloader-content">
        <div className="logo-wrapper" ref={logoRef}>
          <span className="logo-text">NOVA</span>
          <span className="logo-subtext">DESIGN</span>
        </div>
        <div className="loader-line" ref={lineRef}></div>
      </div>
    </div>
  )
}

export default Preloader
