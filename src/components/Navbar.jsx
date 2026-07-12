import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [hoverStyle, setHoverStyle] = useState({ opacity: 0, left: 0, width: 0 })
  const linksParentRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (e) => {
    const target = e.currentTarget
    
    // Using offsetLeft/Width relative to the UL parent for precision
    setHoverStyle({
      opacity: 1,
      left: target.offsetLeft,
      width: target.offsetWidth
    })
  }

  const handleMouseLeave = () => {
    setHoverStyle(prev => ({ ...prev, opacity: 0 }))
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-capsule">
          <div className="nav-logo">
            <span className="logo-text">NOVA</span>
          </div>
          
          <div className="nav-links-wrapper">
            <ul className="nav-links" ref={linksParentRef}>
              {/* The Liquid Blob Indicator - Moved inside UL to match offset parent */}
              <div 
                className="nav-blob" 
                style={{ 
                  opacity: hoverStyle.opacity,
                  transform: `translateX(${hoverStyle.left}px)`,
                  width: `${hoverStyle.width}px`
                }}
              ></div>

              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a href="#hero">Início</a>
              </li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a href="#about">Legado</a>
              </li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a href="#portfolio">Coleções</a>
              </li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a href="#materials">Materiais</a>
              </li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <div className="nav-cta">
            <a href="https://wa.me/5511964449067" target="_blank" rel="noopener noreferrer" className="nav-btn">
              Solicitar
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
