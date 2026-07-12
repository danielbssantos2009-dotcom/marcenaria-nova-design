import React from 'react'
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-watermark">NOVA</div>
      
      <div className="container">
        <div className="footer-cta-card">
          <div className="cta-left">
            <span className="section-tag">Próximo Passo</span>
            <h2 className="footer-title">Vamos esculpir seu <br /><span className="accent-text">próximo legado?</span></h2>
          </div>
          <div className="cta-right">
            <p className="footer-p">Cada projeto começa com uma conversa. Agende sua consultoria exclusiva agora mesmo e transforme sua visão em realidade com maestria.</p>
            <a href="https://wa.me/5511964449067" target="_blank" rel="noopener noreferrer" className="btn-premium">
              Falar pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-main-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">NOVA</span>
              <span className="logo-subtext">DESIGN</span>
            </div>
            <p className="brand-tagline">Mobiliário premium para mentes exigentes. Desde 1994 transformando ambientes com maestria e precisão industrial.</p>
          </div>

          <div className="footer-info-links">
            <div className="footer-col">
              <h4>Contato</h4>
              <a href="mailto:moveisnovadesigne@gmail.com"><FaEnvelope /> moveisnovadesigne@gmail.com</a>
              <a href="https://wa.me/5511964449067"><FaWhatsapp /> (11) 96444-9067</a>
            </div>

            <div className="footer-col">
              <h4>Social</h4>
              <a href="https://instagram.com/marcenaria.novadesign" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
              <a href="#"><FaWhatsapp /> WhatsApp</a>
            </div>

            <div className="footer-col">
              <h4>Endereço</h4>
              <p><FaMapMarkerAlt /> São Paulo, SP — Brasil</p>
              <p className="address-sub">Atendimento exclusivo com hora marcada em nosso showroom.</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="bottom-flex">
            <p>&copy; {new Date().getFullYear()} Marcenaria Nova Design. Todos os direitos reservados. </p>
            <div className="legal-links">
              <a href="#">Privacidade</a>
              <a href="#">Termos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
