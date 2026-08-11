// Dispara o evento de conversão do Google Ads quando alguém clica em um botão de WhatsApp
export const trackWhatsAppClick = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17048561611/kJhMCJW5-98cEMvPscE_',
    })
  }
}
