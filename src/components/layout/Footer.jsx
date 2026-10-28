import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import SynapcraftLogo from '../ui/SynapcraftLogo';
import InstagramIcon from '../ui/InstagramIcon';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { ShieldCheck, Lock, Cpu, ArrowUpRight, Mail } from 'lucide-react';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../../config/contact';
import './Footer.css';

export default function Footer() {
  const { t, isSpanish } = useLanguage();

  return (
    <footer className="sc-footer">
      <div className="sc-footer-top-glow" />
      
      {/* Trust & Guarantee Banner before footer columns */}
      <div className="sc-footer-trust-strip">
        <div className="sc-trust-strip-container">
          <div className="sc-trust-strip-item">
            <div className="sc-trust-icon-box">
              <ShieldCheck size={20} />
            </div>
            <div className="sc-trust-strip-text">
              <strong>{isSpanish ? 'Modelos Flexibles de Código' : 'Flexible Code Ownership'}</strong>
              <span>{isSpanish ? 'Cesión por contrato o infraestructura administrada según tu necesidad' : 'Contractual buyout or managed cloud tailored to your needs'}</span>
            </div>
          </div>

          <div className="sc-trust-strip-item">
            <div className="sc-trust-icon-box">
              <Lock size={20} />
            </div>
            <div className="sc-trust-strip-text">
              <strong>{isSpanish ? 'Seguridad SSL & Cifrado Cloud' : 'SSL Security & Cloud Edge'}</strong>
              <span>{isSpanish ? 'Alojamiento global blindado y protección DDoS' : 'Protected edge cloud hosting & SSL'}</span>
            </div>
          </div>

          <div className="sc-trust-strip-item">
            <div className="sc-trust-icon-box">
              <Cpu size={20} />
            </div>
            <div className="sc-trust-strip-text">
              <strong>{isSpanish ? 'Estándar Google Core Web Vitals' : 'Google Core Web Vitals'}</strong>
              <span>{isSpanish ? 'Puntuación 95-100 en velocidad y experiencia móvil' : '95-100 mobile performance score'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="sc-footer-container">
        {/* Brand Column */}
        <div className="sc-footer-brand">
          <Link to="/" className="sc-footer-logo-link" aria-label="Synapcraft">
            <SynapcraftLogo size={36} />
          </Link>
          <p className="sc-footer-desc">
            {t('footer.tagline')}
          </p>

          <div className="sc-footer-direct-contact">
            <span className="sc-contact-label">{isSpanish ? 'Atención al Cliente & Empresas:' : 'Client & Enterprise Support:'}</span>
            <a 
              href={getWhatsAppUrl('Hola Synapcraft, quiero comunicarme directamente con ustedes.')} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="sc-footer-phone-wa"
            >
              <WhatsAppIcon size={18} />
              <span>{CONTACT_CONFIG.phoneFormatted} (WhatsApp)</span>
            </a>

            <a 
              href={`mailto:${CONTACT_CONFIG.email}`} 
              className="sc-footer-email-link"
            >
              <Mail size={16} />
              <span>{CONTACT_CONFIG.email}</span>
            </a>
          </div>

          <div className="sc-footer-socials">
            <a 
              href={getWhatsAppUrl('Hola Synapcraft, quiero información sobre desarrollo para mi empresa.')}
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
            <h4>{t('footer.solutionsTitle')}</h4>
            <Link to="/paginas-web">Páginas Web Corporativas</Link>
            <Link to="/software-a-medida">Software & Sistemas a Medida</Link>
            <Link to="/sectores">Soluciones por Sector</Link>
            <Link to="/dentalgrid">DentalGrid Clinical SaaS</Link>
          </div>

          <div className="sc-footer-column">
            <h4>{t('footer.companyTitle')}</h4>
            <Link to="/nosotros">Sobre Synapcraft</Link>
            <Link to="/nosotros#ceo">Fundador: Samuel Aquino</Link>
            <a 
              href={CONTACT_CONFIG.dentalgridUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="sc-footer-highlight-link"
            >
              <span className="sc-dot-active" />
              <span>dentalgridse.com</span>
              <ArrowUpRight size={13} />
            </a>
            <a href={CONTACT_CONFIG.ceoInstagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram @srdevelop
            </a>
          </div>

          <div className="sc-footer-column">
            <h4>{t('footer.contactTitle')}</h4>
            <Link to="/contacto">Formulario de Contacto</Link>
            <a 
              href={getWhatsAppUrl('Hola Synapcraft, me gustaría agendar una reunión o consulta estratégica.')} 
              target="_blank" 
              rel="noopener noreferrer"
              className="sc-footer-wa-link"
            >
              Chat de WhatsApp en Vivo
            </a>
            <a href={`mailto:${CONTACT_CONFIG.email}`} className="sc-footer-email-inline">
              <Mail size={14} />
              <span>{CONTACT_CONFIG.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="sc-footer-bottom">
        <div className="sc-footer-bottom-container">
          <p className="sc-copyright">
            &copy; {new Date().getFullYear()} Synapcraft Studio. {t('footer.rights')}
          </p>
          <div className="sc-footer-meta">
            <span className="sc-rd-badge">
              <span>{t('footer.madeWith')}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
