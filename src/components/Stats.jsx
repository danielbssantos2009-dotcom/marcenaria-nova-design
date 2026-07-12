import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Stats.css'

// V2: Compact Responsive Grid
const Stats = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stats = gsap.utils.toArray('.stat-number')

      stats.forEach((stat) => {
        const val = parseInt(stat.innerText)
        gsap.fromTo(stat, 
          { innerText: 0 },
          { 
            innerText: val, 
            duration: 2.5, // Subtle change in duration to force refresh
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stat,
              start: 'top 90%',
            },
            onUpdate: function() {
              stat.innerText = Math.floor(stat.innerText) + (stat.dataset.suffix || '')
            }
          }
        )
      })

      gsap.from('.stat-item', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%'
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="stats" ref={containerRef}>
      <div className="container stats-grid">
        <div className="stat-item">
          <span className="stat-label">Legado</span>
          <h2 className="stat-number" data-suffix="+">30</h2>
          <p className="stat-text">Anos de Transformação</p>
        </div>
        
        {/* Dividers will be hidden on mobile via CSS */}
        <div className="divider"></div>

        <div className="stat-item">
          <span className="stat-label">Confiança</span>
          <h2 className="stat-number" data-suffix="+">200</h2>
          <p className="stat-text">Projetos Entregues</p>
        </div>

        <div className="divider"></div>

        <div className="stat-item">
          <span className="stat-label">Precisão</span>
          <h2 className="stat-number" data-suffix="%">100</h2>
          <p className="stat-text">Satisfação Garantida</p>
        </div>
      </div>
    </section>
  )
}

export default Stats
