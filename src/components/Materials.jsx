import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Materials.css'

const Materials = () => {
  const sectionRef = useRef(null)

  const row1 = [
    { name: 'Nogueira Americana', type: 'Premium', img: '/images/walnut.png' },
    { name: 'Carvalho Europeu', type: 'Clássico', img: '/images/oak.png' },
    { name: 'Freijó Natural', type: 'Orgânico', img: '/images/ash.png' },
    { name: 'Mogno Africano', type: 'Exótico', img: '/images/portfolio1.png' },
    { name: 'Marfim Real', type: 'Nobre', img: '/images/portfolio2.png' },
  ]

  const row2 = [
    { name: 'Ébano Profundo', type: 'Luxo', img: '/images/portfolio3.png' },
    { name: 'Pinho Silvestre', type: 'Rústico', img: '/images/pine.png' },
    { name: 'Cedro Rosa', type: 'Aromático', img: '/images/detail.png' },
    { name: 'Cerejeira Nacional', type: 'Suave', img: '/images/cherry.png' },
    { name: 'Imbuia Nobre', type: 'Raro', img: '/images/hero.png' },
  ]

  const row3 = [
    { name: 'Sumaúma', type: 'Sustentável', img: '/images/texture.png' },
    { name: 'Angelim Pedra', type: 'Resistente', img: '/images/portfolio_closet.png' },
    { name: 'Ipê Tabaco', type: 'Firme', img: '/images/portfolio_office.png' },
    { name: 'Peroba Rosa', type: 'Histórico', img: '/images/walnut.png' },
    { name: 'Jatobá', type: 'Denso', img: '/images/oak.png' },
  ]

  const MarqueeRow = ({ items, direction }) => (
    <div className={`marquee-row ${direction}`}>
      <div className="marquee-content">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="material-card">
            <div className="material-image">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="material-info">
              <span className="mat-type">{item.type}</span>
              <h4 className="mat-name">{item.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="materials" id="materials" ref={sectionRef}>
      <div className="materials-header">
        <span className="section-tag">A Matéria-Prima</span>
        <h2 className="section-title">A Alma do <span className="accent-text">Projeto</span></h2>
        <p className="materials-p">As melhores madeiras, selecionadas a dedo para transformar cada ambiente em uma obra de arte única.</p>
      </div>

      <div className="marquee-container">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
        <MarqueeRow items={row3} direction="left" />
      </div>
    </section>
  )
}

export default Materials
