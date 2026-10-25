import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import SynapcraftLogo from '../ui/SynapcraftLogo';
import InstagramIcon from '../ui/InstagramIcon';
import { Globe, Sparkles, ExternalLink, Mail, ShieldCheck } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const { t, language, setLanguage } = useLanguage();

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
              href="https://instagram.com/synapcraft" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="sc-social-btn"
              title="Instagram @synapcraft"
            >
              <InstagramIcon size={18} />
              <span>@synapcraft</span>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="sc-footer-grid">
          <div className="sc-footer-column">
            <h4>{t('footer.servicesTitle')}</h4>
            <button type="button" onClick={() => scrollToSection('servicios')}>Software Corporativo</button>
            <button type="button" onClick={() => scrollToSection('servicios')}>Sitios Web para Negocios</button>
            <button type="button" onClick={() => scrollToSection('servicios')}>Integraciones de IA e IO</button>
            <button type="button" onClick={() => scrollToSection('contacto')}>Arquitectura en la Nube</button>
          </div>

          <div className="sc-footer-column">
            <h4>{t('footer.productsTitle')}</h4>
            <a 
              href="https://dentalgridse.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="sc-footer-highlight-link"
            >
              <span>DentalGrid</span>
              <ExternalLink size={13} />
            </a>
            <button type="button" onClick={() => scrollToSection('modelo')}>Modelo Dual SaaS</button>
            <button type="button" onClick={() => scrollToSection('dentalgrid')}>Software Odontológico</button>
          </div>

          <div className="sc-footer-column">
            <h4>{t('footer.companyTitle')}</h4>
            <button type="button" onClick={() => scrollToSection('ceo')}>
              CEO: Samuel Aquino
            </button>
            <button type="button" onClick={() => scrollToSection('modelo')}>
              {t('footer.aboutUs')}
            </button>
            <a href="https://instagram.com/synapcraft" target="_blank" rel="noopener noreferrer">
              Instagram @synapcraft
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
            <span className="sc-ceo-badge">CEO: Samuel Aquino</span>
            <span className="sc-dot-sep">•</span>
            <span className="sc-meta-tag">{t('footer.madeWith')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
