import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import SynapcraftLogo from '../ui/SynapcraftLogo';
import InstagramIcon from '../ui/InstagramIcon';
import { Sparkles, Globe, MessageSquare, ArrowRight } from 'lucide-react';
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
              onClick={() => scrollToSection('modelo')} 
              className="sc-nav-btn-link"
            >
              {t('nav.model')}
            </button>

            <button 
              type="button" 
              onClick={() => scrollToSection('ceo')} 
              className="sc-nav-btn-link"
            >
              {t('nav.ceo')}
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
                href="https://instagram.com/synapcraft" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sc-mobile-instagram-btn"
              >
                <InstagramIcon size={18} />
                <span>@synapcraft</span>
              </a>

              <button 
                type="button" 
                className="sc-cta-btn sc-mobile-cta"
                onClick={() => scrollToSection('contacto')}
              >
                {t('nav.quoteBtn')}
                <ArrowRight size={16} />
              </button>
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
            href="https://instagram.com/synapcraft" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sc-instagram-link sc-desktop-only"
            title="Instagram @synapcraft"
          >
            <InstagramIcon size={18} />
          </a>

          {/* Main CTA */}
          <button 
            type="button"
            className="sc-cta-btn sc-desktop-only"
            onClick={() => scrollToSection('contacto')}
          >
            <span className="sc-cta-glow-pulse" />
            <span className="sc-cta-inner">
              <Sparkles size={15} className="sc-cta-sparkle" />
              <span>{t('nav.quoteBtn')}</span>
              <ArrowRight size={14} className="sc-cta-arrow" />
            </span>
          </button>

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
