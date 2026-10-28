import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  Building2, 
  Pill, 
  Wrench, 
  Dumbbell, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { getWhatsAppUrl } from '../config/contact';
import './Home.css';

export default function SectorsPage() {
  const { t, isSpanish } = useLanguage();

  const getRubroIcon = (id) => {
    switch (id) {
      case 'farmacias': return <Pill size={24} className="sc-rubro-icon-svg" />;
      case 'ferreterias': return <Wrench size={24} className="sc-rubro-icon-svg" />;
      case 'gimnasios': return <Dumbbell size={24} className="sc-rubro-icon-svg" />;
      case 'corporativo': return <Building2 size={24} className="sc-rubro-icon-svg" />;
      default: return <Building2 size={24} className="sc-rubro-icon-svg" />;
    }
  };

  return (
    <div className="sc-home">
      {/* Page Hero */}
      <section className="sc-page-hero">
        <div className="sc-hero-glow sc-glow-cyan" />
        <div className="sc-hero-glow sc-glow-blue" />
        <div className="sc-grid-pattern" />

        <div className="sc-page-hero-container">
          <span className="sc-pill-badge">
            <Building2 size={14} className="sc-badge-icon" />
            <span>{t('rubros.badge')}</span>
          </span>

          <h1 className="sc-page-hero-title">{t('rubros.title')}</h1>
          <p className="sc-page-hero-subtitle">{t('rubros.subtitle')}</p>

          <div className="sc-page-hero-actions">
            <a 
              href={getWhatsAppUrl('Hola Synapcraft, deseo consultar una solución adaptada a la industria de mi empresa.')}
              target="_blank" 
              rel="noopener noreferrer" 
              className="sc-btn-whatsapp-primary"
            >
              <WhatsAppIcon size={20} />
              <span>{isSpanish ? 'Cotizar para mi Industria' : 'Quote for My Industry'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="sc-section sc-rubros-section">
        <div className="sc-rubros-grid">
          {t('rubros.items').map((rubro) => (
            <div key={rubro.id} className={`sc-rubro-card sc-rubro-${rubro.id}`}>
              <div className="sc-rubro-header">
                <div className="sc-rubro-icon-box">
                  {getRubroIcon(rubro.id)}
                </div>
                <span className="sc-rubro-tag">{rubro.tag}</span>
              </div>

              <h3 className="sc-rubro-name">{rubro.name}</h3>
              <p className="sc-rubro-text">{rubro.text}</p>

              <div className="sc-rubro-highlight-box">
                <span className="sc-rubro-dot" />
                <span className="sc-rubro-highlight-text">{rubro.highlight}</span>
              </div>

              <div className="sc-rubro-footer">
                <a 
                  href={getWhatsAppUrl(`Hola Synapcraft, tengo una empresa en el rubro de ${rubro.name} y quiero asesoría para mi plataforma web o sistema.`)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="sc-rubro-link"
                >
                  <WhatsAppIcon size={16} />
                  <span>{isSpanish ? `Cotizar para ${rubro.name}` : `Quote for ${rubro.name}`}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Industry Callout */}
        <div className="sc-rubros-custom-banner">
          <div className="sc-custom-banner-content">
            <h4>{isSpanish ? '¿Perteneces a otro sector o industria especializada?' : 'Do you operate in another specialized sector?'}</h4>
            <p>
              {isSpanish 
                ? 'Empresas de logística, manufactura, despachos contables, constructoras o retail global. Diseñamos la arquitectura tecnológica adecuada.' 
                : 'Logistics, manufacturing, accounting, construction, or global retail firms. We architect technology tailored to your exact operational reality.'}
            </p>
          </div>
          <a 
            href={getWhatsAppUrl('Hola Synapcraft, pertenezco a un sector especializado y quiero asesoría para mi proyecto.')}
            target="_blank" 
            rel="noopener noreferrer"
            className="sc-btn-whatsapp-sm"
          >
            <WhatsAppIcon size={17} />
            <span>{isSpanish ? 'Consultar mi Caso' : 'Discuss My Use Case'}</span>
          </a>
        </div>
      </section>
    </div>
  );
}

