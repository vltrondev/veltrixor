import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import SynapcraftLogo from '../ui/SynapcraftLogo';
import InstagramIcon from '../ui/InstagramIcon';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../../config/contact';
import { Globe, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/#' + id);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isAuthPage = ['/login', '/register', '/forgot-password'].includes(location.pathname);

  return (
    <nav className={`sc-navbar ${isScrolled ? 'sc-navbar-scrolled' : ''} ${isMenuOpen ? 'sc-navbar-open' : ''}`}>
      <div className="sc-navbar-container">
        <Link to="/" className="sc-navbar-logo-link" aria-label="Synapcraft Home">
          <SynapcraftLogo size={36} />
        </Link>

        {!isAuthPage && (
          <div className={`sc-navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <button 
              type="button" 
              onClick={() => scrollToSection('paginas-web')} 
              className="sc-nav-btn-link"
            >
              {t('nav.websites')}
            </button>

            <button 
              type="button" 
              onClick={() => scrollToSection('rubros')} 
              className="sc-nav-btn-link"
            >
              {t('nav.rubros')}
            </button>

            <button 
              type="button" 
              onClick={() => scrollToSection('servicios')} 
              className="sc-nav-btn-link"
            >
              {t('nav.services')}
            </button>

            <button 
              type="button" 
              onClick={() => scrollToSection('dentalgrid')} 
              className="sc-nav-btn-link sc-nav-highlight"
            >
              <span className="sc-pulse-dot" />
              {t('nav.dentalgrid')}
            </button>

            <button 
              type="button" 
              onClick={() => scrollToSection('contacto')} 
              className="sc-nav-btn-link"
            >
              {t('nav.contact')}
            </button>

            {/* Mobile language and action controls */}
            <div className="sc-navbar-mobile-only">
              <div className="sc-mobile-lang-wrap">
                <Globe size={18} className="sc-lang-icon" />
                <span className="sc-mobile-lang-title">Idioma:</span>
                <div className="sc-lang-toggle">
                  <button 
                    type="button"
                    className={`sc-lang-pill ${language === 'es' ? 'active' : ''}`}
                    onClick={() => setLanguage('es')}
                  >
                    ES
                  </button>
                  <button 
                    type="button"
                    className={`sc-lang-pill ${language === 'en' ? 'active' : ''}`}
                    onClick={() => setLanguage('en')}
                  >
                    EN
                  </button>
                </div>
              </div>

              <a 
                href={CONTACT_CONFIG.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sc-mobile-instagram-btn"
              >
                <InstagramIcon size={18} />
                <span>{CONTACT_CONFIG.instagramHandle}</span>
              </a>

              <a 
                href={getWhatsAppUrl('Hola Synapcraft, vi su página web y quiero información para mi negocio en República Dominicana.')}
                target="_blank"
                rel="noopener noreferrer"
                className="sc-cta-btn sc-nav-wa-btn sc-mobile-cta"
              >
                <WhatsAppIcon size={18} />
                <span>{t('nav.quoteBtn')}</span>
              </a>
            </div>
          </div>
        )}

        <div className="sc-navbar-actions">
          {/* Language Switcher pill for Desktop */}
          <div className="sc-lang-toggle sc-desktop-only" title="Seleccionar Idioma / Select Language">
            <Globe size={15} className="sc-lang-icon" />
            <button 
              type="button"
              className={`sc-lang-pill ${language === 'es' ? 'active' : ''}`}
              onClick={() => setLanguage('es')}
              aria-label="Cambiar a Español"
            >
              ES
            </button>
            <span className="sc-lang-sep">|</span>
            <button 
              type="button"
              className={`sc-lang-pill ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Instagram direct link */}
          <a 
            href={CONTACT_CONFIG.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sc-instagram-link sc-desktop-only"
            title="Instagram @synapcraft"
          >
            <InstagramIcon size={18} />
          </a>

          {/* Main CTA: WhatsApp directo */}
          <a 
            href={getWhatsAppUrl('Hola Synapcraft, vi su página web y quiero información para mi negocio en República Dominicana.')}
            target="_blank"
            rel="noopener noreferrer"
            className="sc-cta-btn sc-nav-wa-btn sc-desktop-only"
            id="nav-whatsapp-cta"
          >
            <span className="sc-cta-inner">
              <WhatsAppIcon size={16} className="sc-cta-sparkle" />
              <span>{t('nav.quoteBtn')}</span>
              <ArrowRight size={14} className="sc-cta-arrow" />
            </span>
          </a>

          {/* Hamburger button */}
          <button 
            type="button"
            className={`sc-hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
