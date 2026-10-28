import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import SynapcraftLogo from '../ui/SynapcraftLogo';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { getWhatsAppUrl } from '../../config/contact';
import { Globe, ArrowRight, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t, isSpanish } = useLanguage();
  const location = useLocation();

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

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <header className={`sc-navbar ${isScrolled ? 'sc-navbar-scrolled' : ''} ${isMenuOpen ? 'sc-navbar-open' : ''}`}>
      {/* Top micro-announcement banner */}
      <div className="sc-top-announcement">
        <div className="sc-announcement-container">
          <span className="sc-announcement-badge">
            <span className="sc-pulse-live" />
            <span>{isSpanish ? 'DISPONIBILIDAD INMEDIATA' : 'GLOBAL CAPACITY OPEN'}</span>
          </span>
          <span className="sc-announcement-text">
            {isSpanish ? 'Desarrollo web corporativo, software a medida & plataformas en la nube' : 'Corporate web development, bespoke software & cloud platforms'}
          </span>
          <Link to="/contacto" className="sc-announcement-link">
            <span>{isSpanish ? 'Agendar consulta' : 'Schedule inquiry'}</span>
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      <div className="sc-navbar-container">
        <Link to="/" className="sc-navbar-logo-link" aria-label="Synapcraft Home">
          <SynapcraftLogo size={36} />
        </Link>

        <nav className={`sc-navbar-links ${isMenuOpen ? 'active' : ''}`} aria-label="Navegación principal">
          <NavLink 
            to="/" 
            className={({ isActive }) => `sc-nav-btn-link ${isActive ? 'sc-nav-active' : ''}`}
            end
          >
            {t('nav.home')}
          </NavLink>

          <NavLink 
            to="/paginas-web" 
            className={({ isActive }) => `sc-nav-btn-link ${isActive ? 'sc-nav-active' : ''}`}
          >
            {t('nav.websites')}
          </NavLink>

          <NavLink 
            to="/software-a-medida" 
            className={({ isActive }) => `sc-nav-btn-link ${isActive ? 'sc-nav-active' : ''}`}
          >
            {t('nav.software')}
          </NavLink>

          <NavLink 
            to="/sectores" 
            className={({ isActive }) => `sc-nav-btn-link ${isActive ? 'sc-nav-active' : ''}`}
          >
            {t('nav.sectors')}
          </NavLink>

          <NavLink 
            to="/dentalgrid" 
            className={({ isActive }) => `sc-nav-btn-link sc-nav-highlight ${isActive ? 'sc-nav-active' : ''}`}
          >
            <span className="sc-pulse-dot" />
            <span>DentalGrid</span>
          </NavLink>

          <NavLink 
            to="/nosotros" 
            className={({ isActive }) => `sc-nav-btn-link ${isActive ? 'sc-nav-active' : ''}`}
          >
            {t('nav.about')}
          </NavLink>

          <NavLink 
            to="/contacto" 
            className={({ isActive }) => `sc-nav-btn-link ${isActive ? 'sc-nav-active' : ''}`}
          >
            {t('nav.contact')}
          </NavLink>

          {/* Mobile language and action controls */}
          <div className="sc-navbar-mobile-only">
            <button 
              type="button" 
              onClick={toggleLanguage} 
              className="sc-lang-btn-mobile"
              aria-label="Cambiar idioma"
            >
              <Globe size={18} />
              <span>{language === 'es' ? 'English (EN)' : 'Español (ES)'}</span>
            </button>

            <a 
              href={getWhatsAppUrl('Hola Synapcraft, quiero hablar con un especialista sobre el desarrollo para mi empresa.')} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="sc-wa-mobile-btn"
            >
              <WhatsAppIcon size={20} />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </nav>

        {/* Desktop Controls */}
        <div className="sc-navbar-actions">
          <button 
            type="button" 
            onClick={toggleLanguage} 
            className="sc-lang-toggle-btn" 
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            aria-label="Selector de idioma"
          >
            <Globe size={15} />
            <span className="sc-lang-text">{language === 'es' ? 'EN' : 'ES'}</span>
          </button>

          {/* Icon-Only WhatsApp Action Button */}
          <a 
            href={getWhatsAppUrl('Hola Synapcraft, quiero hablar con un especialista sobre el desarrollo para mi empresa.')} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sc-wa-nav-btn"
            id="navbar-wa-cta"
            title="Escríbenos por WhatsApp"
            aria-label="Contactar por WhatsApp"
          >
            <WhatsAppIcon size={22} />
          </a>

          {/* Mobile hamburger toggle */}
          <button 
            type="button" 
            className="sc-hamburger-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
