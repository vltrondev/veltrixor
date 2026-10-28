import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  Globe2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Search, 
  MapPin, 
  Smartphone, 
  Lock, 
  Package, 
  Layers,
  BarChart3
} from 'lucide-react';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { getWhatsAppUrl } from '../config/contact';
import './Home.css';

export default function WebsitesPage() {
  const { t, isSpanish } = useLanguage();

  const getFeatureIcon = (id) => {
    switch (id) {
      case 'servicios': return <Package size={22} />;
      case 'ubicacion': return <MapPin size={22} />;
      case 'whatsapp': return <WhatsAppIcon size={22} />;
      case 'celular': return <Smartphone size={22} />;
      case 'google': return <Search size={22} />;
      case 'seguridad': return <Lock size={22} />;
      default: return <CheckCircle2 size={22} />;
    }
  };

  return (
    <div className="sc-home">
      {/* Page Header Banner */}
      <section className="sc-page-hero">
        <div className="sc-hero-glow sc-glow-cyan" />
        <div className="sc-hero-glow sc-glow-blue" />
        <div className="sc-grid-pattern" />

        <div className="sc-page-hero-container">
          <span className="sc-pill-badge">
            <Globe2 size={14} className="sc-badge-icon" />
            <span>{t('businessWebsites.badge')}</span>
          </span>

          <h1 className="sc-page-hero-title">{t('businessWebsites.title')}</h1>
          <p className="sc-page-hero-subtitle">{t('businessWebsites.text')}</p>

          <div className="sc-page-hero-actions">
            <a 
              href={getWhatsAppUrl('Hola Synapcraft, deseo cotizar el desarrollo de una página web corporativa para mi empresa.')}
              target="_blank" 
              rel="noopener noreferrer" 
              className="sc-btn-whatsapp-primary"
            >
              <WhatsAppIcon size={20} />
              <span>{isSpanish ? 'Cotizar mi Página Web' : 'Request Web Quote'}</span>
            </a>
            <Link to="/contacto" className="sc-btn-secondary">
              <span>{isSpanish ? 'Formulario de Consulta' : 'Inquiry Form'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="sc-section sc-business-section">
        <div className="sc-includes-wrapper">
          <div className="sc-section-header">
            <span className="sc-section-badge">{isSpanish ? 'ESPECIFICACIONES TÉCNICAS' : 'TECHNICAL SPECS'}</span>
            <h2 className="sc-section-title">{t('businessWebsites.includesTitle')}</h2>
          </div>

          <div className="sc-features-grid">
            {t('businessWebsites.features').map((item) => (
              <div key={item.id} className="sc-feature-card">
                <div className="sc-feature-icon-box">
                  {getFeatureIcon(item.id)}
                </div>
                <h3 className="sc-feature-title">{item.title}</h3>
                <p className="sc-feature-desc">{item.desc}</p>
                <div className="sc-feature-footer">
                  <span className="sc-feature-check">
                    <CheckCircle2 size={15} />
                    <span>{isSpanish ? 'Estándar Enterprise Incluido' : 'Enterprise Standard Included'}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Google Visibility Demo Block */}
      <section className="sc-section sc-comparison-section">
        <div className="sc-section-header">
          <span className="sc-section-badge">{isSpanish ? 'VISIBILIDAD EN GOOGLE' : 'GOOGLE SEARCH PERFORMANCE'}</span>
          <h2 className="sc-section-title">
            {isSpanish ? 'Diseñadas para liderar en los resultados de búsqueda' : 'Engineered to Rank on Google Searches'}
          </h2>
          <p className="sc-section-subtitle">
            {isSpanish 
              ? 'Cuando un cliente busca tus servicios, tu empresa aparecerá con datos verificados, reseñas y acceso directo.'
              : 'When prospects search for what you offer, your company stands out with verified metadata and instant contact channels.'}
          </p>
        </div>

        <div className="sc-hero-showcase-wrapper">
          <div className="sc-showcase-frame">
            <div className="sc-showcase-content">
              <div className="sc-simulated-result">
                <div className="sc-result-header">
                  <div className="sc-result-biz-info">
                    <div className="sc-biz-name-row">
                      <span className="sc-biz-verified-badge">✓ {isSpanish ? 'Empresa Verificada en Google' : 'Verified Google Business'}</span>
                      <span className="sc-biz-name">{isSpanish ? 'Tu Empresa en Primeros Lugares' : 'Your Business at the Top'}</span>
                    </div>
                    <div className="sc-biz-rating">
                      <span className="sc-stars">★★★★★</span>
                      <span className="sc-rating-score">5.0</span>
                      <span className="sc-reviews-count">(100+ {isSpanish ? 'opiniones verificadas' : 'verified reviews'})</span>
                      <span className="sc-biz-status">• {isSpanish ? 'Abierto ahora' : 'Open now'}</span>
                    </div>
                  </div>

                  <a 
                    href={getWhatsAppUrl('Hola Synapcraft, quiero una página web corporativa optimizada para Google.')} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="sc-result-wa-btn"
                  >
                    <WhatsAppIcon size={16} />
                    <span>{isSpanish ? 'WhatsApp en 1 Clic' : '1-Click WhatsApp'}</span>
                  </a>
                </div>

                <div className="sc-result-details">
                  <div className="sc-detail-chip">
                    <MapPin size={13} />
                    <span>{isSpanish ? 'Ubicación física & cobertura global' : 'Physical location & global reach'}</span>
                  </div>
                  <div className="sc-detail-chip">
                    <Zap size={13} />
                    <span>{isSpanish ? 'Carga ultra rápida < 0.8s' : 'Ultra-fast load < 0.8s'}</span>
                  </div>
                  <div className="sc-detail-chip sc-chip-highlight">
                    <ShieldCheck size={13} />
                    <span>{isSpanish ? 'Certificado SSL Bancario' : 'Bank-Grade SSL'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action card */}
      <section className="sc-section sc-contact-section">
        <div className="sc-rubros-custom-banner">
          <div className="sc-custom-banner-content">
            <h4>{isSpanish ? '¿Listo para lanzar tu nuevo sitio web corporativo?' : 'Ready to launch your new corporate website?'}</h4>
            <p>{isSpanish ? 'Cronograma y entregas estructuradas según el alcance del proyecto, con modelos de código a convenir y soporte técnico directo.' : 'Structured delivery roadmap tailored to project scope, flexible IP terms, and direct senior support.'}</p>
          </div>
          <a 
            href={getWhatsAppUrl('Hola Synapcraft, deseo agendar el inicio de mi sitio web corporativo.')}
            target="_blank"
            rel="noopener noreferrer"
            className="sc-btn-whatsapp-sm"
          >
            <WhatsAppIcon size={17} />
            <span>{isSpanish ? 'Conversar por WhatsApp' : 'Chat on WhatsApp'}</span>
          </a>
        </div>
      </section>
    </div>
  );
}

