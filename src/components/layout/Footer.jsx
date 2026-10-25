import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import SynapcraftLogo from '../ui/SynapcraftLogo';
import InstagramIcon from '../ui/InstagramIcon';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../../config/contact';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="sc-footer">
      <div className="sc-footer-top-glow" />
      <div className="sc-footer-container">
        {/* Brand Column */}
        <div className="sc-footer-brand">
          <Link to="/" className="sc-footer-logo-link">
            <SynapcraftLogo size={34} />
          </Link>
          <p className="sc-footer-desc">
            {t('footer.tagline')}
          </p>
          <div className="sc-footer-socials">
            <a 
              href={getWhatsAppUrl('Hola Synapcraft, quiero información sobre desarrollo web para mi negocio.')}
              target="_blank" 
              rel="noopener noreferrer" 
              className="sc-social-btn sc-social-wa"
              title="WhatsApp Synapcraft"
            >
              <WhatsAppIcon size={17} />
              <span>WhatsApp Directo</span>
            </a>

            <a 
              href={CONTACT_CONFIG.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="sc-social-btn"
              title="Instagram @synapcraft"
            >
              <InstagramIcon size={17} />
              <span>{CONTACT_CONFIG.instagramHandle}</span>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="sc-footer-grid">
          <div className="sc-footer-column">
            <h4>{t('footer.servicesTitle')}</h4>
            <button type="button" onClick={() => scrollToSection('paginas-web')}>Páginas Web para Negocios</button>
            <button type="button" onClick={() => scrollToSection('rubros')}>Soluciones por Rubro</button>
            <button type="button" onClick={() => scrollToSection('servicios')}>Sistemas Sencillos a Medida</button>
            <button type="button" onClick={() => scrollToSection('servicios')}>Soporte Continuo</button>
          </div>

          <div className="sc-footer-column">
            <h4>{t('footer.productsTitle')}</h4>
            <a 
              href={CONTACT_CONFIG.dentalgridUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="sc-footer-highlight-link"
            >
              <span>DentalGrid (dentalgridse.com)</span>
              <ExternalLink size={13} />
            </a>
            <button type="button" onClick={() => scrollToSection('dentalgrid')}>Respaldo DentalGrid en RD</button>
            <button type="button" onClick={() => scrollToSection('paginas-web')}>Optimización Google & Celular</button>
          </div>

          <div className="sc-footer-column">
            <h4>{t('footer.companyTitle')}</h4>
            <a 
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="sc-footer-wa-link"
            >
              Escríbenos por WhatsApp
            </a>
            <button type="button" onClick={() => scrollToSection('ceo')}>
              Fundador: Samuel Aquino
            </button>
            <a href={CONTACT_CONFIG.ceoInstagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram @srdevelop
            </a>
            <button type="button" onClick={() => scrollToSection('contacto')}>
              {t('nav.contact')}
            </button>
          </div>
        </div>
      </div>

      <div className="sc-footer-bottom">
        <div className="sc-footer-bottom-container">
          <p className="sc-footer-copy">
            &copy; {new Date().getFullYear()} Synapcraft. {t('footer.rights')}
          </p>
          <div className="sc-footer-bottom-meta">
            <span className="sc-ceo-badge">República Dominicana</span>
            <span className="sc-dot-sep">•</span>
            <span className="sc-meta-tag">{t('footer.madeWith')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
