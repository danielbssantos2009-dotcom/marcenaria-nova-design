import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { FaTimes, FaAngleRight } from 'react-icons/fa'
import { trackWhatsAppClick } from '../utils/tracking'
import './Portfolio.css'

const projects = [
  { id: 1, title: 'Cozinha Nogueira', client: 'Dra. Beatriz', avatar: 'https://i.pravatar.cc/150?u=beatriz', img: '/images/hero.png', detail: 'Uma obra-prima em nogueira maciça com iluminação cênica integrada.', story: 'O desafio foi criar um ambiente que suportasse o uso intenso de uma chef profissional sem perder o calor de uma residência familiar. Utilizamos sistemas de amortecimento alemães e pedras naturais selecionadas.' },
  { id: 2, title: 'Home Office Zen', client: 'Ricardo S.', avatar: 'https://i.pravatar.cc/150?u=ricardo', img: '/images/portfolio_office.png', detail: 'Minimalismo escandinavo com isolamento acústico premium.', story: 'Projetamos painéis ripados que servem tanto para a estética quanto para o tratamento acústico das chamadas de vídeo do cliente, ocultando toda a fiação em compartimentos magnéticos.' },
  { id: 3, title: 'Closet Master', client: 'Família Arvenis', avatar: 'https://i.pravatar.cc/150?u=arvenis', img: '/images/portfolio_closet.png', detail: 'Luxo funcional com sistema de iluminação automática.', story: 'Um closet de 40m² onde cada gaveta foi dimensionada para itens específicos da coleção da família, com acabamento em couro e sensores de presença.' },
  { id: 4, title: 'Adega Particular', client: 'Sérgio T.', avatar: 'https://i.pravatar.cc/150?u=sergio', img: '/images/portfolio_wine_cellar.png', detail: 'Estruturas de nogueira maciça com climatização embutida.', story: 'A marcenaria aqui precisou ser tratada quimicamente para resistir à umidade constante da adega, mantendo a elegância visual exigida pelo colecionador.' }
]

const Portfolio = () => {
  const marqueeRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const totalWidth = marquee.scrollWidth / 2
    
    const animation = gsap.to(marquee, {
      x: -totalWidth,
      duration: 25,
      ease: 'none',
      repeat: -1,
    })

    animationRef.current = animation
    return () => animation.kill()
  }, [])

  useEffect(() => {
    if (animationRef.current) {
      if (selectedProject) {
        animationRef.current.pause()
      } else {
        animationRef.current.play()
      }
    }
  }, [selectedProject])

  const openProject = (project) => {
    setSelectedProject(project)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  return (
    <section className="portfolio-marquee-section" id="portfolio">
      <div className="container">
        <div className="portfolio-header-v3">
          <span className="section-tag">Obras-Primas</span>
          <h2 className="portfolio-title-v3">Coleções <span className="accent-text">Exclusivas</span></h2>
          <p className="portfolio-subtitle">30 anos de precisão absoluta em marcenaria de alto padrão.</p>
        </div>
      </div>

      <div className={`marquee-outer-v3 ${selectedProject ? 'is-viewing' : ''}`}>
        <div className="marquee-inner-v3" ref={marqueeRef}>
           {[...projects, ...projects].map((item, idx) => (
            <div 
                key={`${item.id}-${idx}`} 
                className={`project-card-v3 ${selectedProject?.id === item.id ? 'is-active' : ''}`}
                onClick={() => openProject(item)}
            >
              <div className="card-media">
                <img src={item.img} alt={item.title} />
                <div className="card-v3-overlay">
                    <div className="card-v3-meta">
                        <span className="v3-client">{item.client}</span>
                        <h3 className="v3-title">{item.title}</h3>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT INFO MODAL / TELINHA */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={closeProject}>
            <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={closeProject}><FaTimes /></button>
                
                <div className="modal-grid">
                    <div className="modal-image-side">
                        <img src={selectedProject.img} alt={selectedProject.title} />
                    </div>
                    <div className="modal-info-side">
                        <span className="modal-tag">Legado #{selectedProject.id}</span>
                        <h2 className="modal-title">{selectedProject.title}</h2>
                        <div className="modal-client-row">
                            <img src={selectedProject.avatar} alt={selectedProject.client} />
                            <span>Projeto para: <strong>{selectedProject.client}</strong></span>
                        </div>
                        <p className="modal-desc">{selectedProject.story}</p>
                        
                        <div className="modal-footer-cta">
                            <a href={`https://wa.me/5511964449067?text=Gostei do projeto ${selectedProject.title}`} target="_blank" rel="noopener noreferrer" className="btn-modal-solicitar" onClick={trackWhatsAppClick}>
                                Solicitar Orçamento similar <FaAngleRight />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio
