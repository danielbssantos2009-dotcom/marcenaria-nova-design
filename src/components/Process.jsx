import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaCheckCircle } from 'react-icons/fa'
import './Process.css'

gsap.registerPlugin(ScrollTrigger)

const Process = () => {
  const containerRef = useRef(null)
  const trenaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in animations for phases
      gsap.utils.toArray('.process-phase-row').forEach((row) => {
        gsap.from(row, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: row,
            start: 'top 85%'
          }
        })
      })

      // Trena Dynamic Growth Animation
      gsap.to(trenaRef.current, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: ".process-list-v4",
          start: 'top 40%',
          end: 'bottom 60%',
          scrub: 1
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const phasesContent = [
    { 
        num: '01', 
        title: 'Consultoria', 
        desc: 'O ponto de partida onde traduzimos seus desejos em esboços arquitetônicos e escolhas de materiais.',
        img: '/images/consultancy.png',
        milestones: ['Briefing de Estilo', 'Medição Técnica']
    },
    { 
        num: '02', 
        title: 'Design 3D', 
        desc: 'Softwares de última geração para protótipos com precisão milimétrica e realismo.', 
        img: '/images/design.png',
        milestones: ['Modelagem 3D Realista', 'Plano de Corte Otimizado']
    },
    { 
        num: '03', 
        title: 'Produção', 
        desc: 'Oficina artesanal onde mestres marceneiros moldam a madeira com paixão.', 
        img: '/images/production.png',
        milestones: ['Seleção de Madeiras', 'Usinagem de Precisão']
    },
    { 
        num: '04', 
        title: 'Montagem', 
        desc: 'Conclusão da jornada: instalação cuidadosa, limpa e o fim da criação.', 
        img: '/images/installation.png',
        milestones: ['Logística Especializada', 'Garantia de Excelência']
    }
  ]

  return (
    <section className="process-v4" id="process" ref={containerRef}>
      {/* TRENA EDGE BAR - DESKTOP ONLY */}
      <div className="trena-desktop-edge">
          <div className="trena-track-v4">
              <div className="trena-bar-v4" ref={trenaRef}>
                  <div className="trena-markings-v4"></div>
              </div>
          </div>
      </div>

      <div className="container">
        <div className="process-header-v4">
          <span className="section-tag">Metodologia</span>
          <h2 className="process-title-v4">A Jornada <span className="accent-text">Nova Design</span></h2>
        </div>

        <div className="process-list-v4">
          {phasesContent.map((phase, idx) => (
            <div key={idx} className={`process-phase-row ${idx % 2 !== 0 ? 'is-reversed' : ''}`}>
              <div className="phase-visual-column">
                  {/* HIDDEN ON DESKTOP, VISIBLE ON MOBILE AS PER ORDER */}
                  <img src={phase.img} alt={phase.title} className="mobile-only-img" />
              </div>
              
              <div className="phase-text-column">
                <span className="phase-num-v4">{phase.num}</span>
                <h3 className="phase-title-v4">{phase.title}</h3>
                <p className="phase-desc-v4">{phase.desc}</p>
                
                <ul className="milestones-v4">
                    {phase.milestones.map((ms, i) => (
                        <li key={i}><FaCheckCircle className="check-v4" /> {ms}</li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default Process
