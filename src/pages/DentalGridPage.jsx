import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  CreditCard, 
  FileText, 
  Activity, 
  Lock, 
  Users, 
  Zap, 
  ArrowRight 
} from 'lucide-react';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config/contact';
import './Home.css';

export default function DentalGridPage() {
  const { t, isSpanish } = useLanguage();

  return (
    <div className="sc-home">
      {/* Page Hero */}
      <section className="sc-page-hero">
        <div className="sc-hero-glow sc-glow-cyan" />
        <div className="sc-hero-glow sc-glow-blue" />
        <div className="sc-grid-pattern" />

        <div className="sc-page-hero-container">
          <span className="sc-pill-badge">
            <ShieldCheck size={14} className="sc-badge-icon" />
            <span>{t('dentalgridBacking.badge')}</span>
          </span>

          <h1 className="sc-page-hero-title">{t('dentalgridBacking.title')}</h1>
          <p className="sc-page-hero-subtitle">{t('dentalgridBacking.text')}</p>

          <div className="sc-page-hero-actions">
            <a 
              href={CONTACT_CONFIG.dentalgridUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="sc-btn-whatsapp-primary"
            >
              <span>{t('dentalgridBacking.cta')}</span>
              <ExternalLink size={16} />
            </a>
            <a 
              href={getWhatsAppUrl('Hola Synapcraft, deseo conocer más sobre la plataforma DentalGrid para clínicas.')}
              target="_blank" 
              rel="noopener noreferrer" 
              className="sc-btn-secondary"
            >
              <WhatsAppIcon size={18} />
              <span>{isSpanish ? 'Asesoría para Clínicas' : 'Healthcare Inquiry'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Deep Clinical Features Section */}
      <section className="sc-section sc-backing-section">
        <div className="sc-backing-container">
          <div className="sc-backing-card">
            <div className="sc-backing-header-badge">
              <Activity size={16} />
              <span>{isSpanish ? 'ARQUITECTURA DE GRADO CLÍNICO' : 'CLINICAL GRADE ARCHITECTURE'}</span>
            </div>

            <div className="sc-backing-grid">
              <div className="sc-backing-content">
                <span className="sc-backing-tagline">{t('dentalgridBacking.tagline')}</span>
                <h3 className="sc-backing-title">
                  {isSpanish ? 'Software en la nube para clínicas de salud' : 'High-Availability Healthcare Cloud Platform'}
                </h3>
                <p className="sc-backing-text">
                  {isSpanish 
                    ? 'DentalGrid es el testimonio vivo de la calidad de ingeniería de Synapcraft. Diseñado para soportar historias médicas, citas de pacientes, facturación e inventario médico con seguridad de nivel hospitalario.'
                    : 'DentalGrid serves as living proof of Synapcraft\'s engineering maturity. Crafted to power clinical records, patient appointment scheduling, billing, and supplies under hospital-grade security.'}
                </p>

                <div className="sc-backing-features-row">
                  <div className="sc-back-feat">
                    <CheckCircle2 size={16} className="sc-icon-green" />
                    <span>{isSpanish ? 'Expedientes clínicos y odontogramas interactivos' : 'Electronic medical charts & interactive records'}</span>
                  </div>
                  <div className="sc-back-feat">
                    <CheckCircle2 size={16} className="sc-icon-green" />
                    <span>{isSpanish ? 'Facturación, cobranza y reportes de rentabilidad' : 'Billing, collections & revenue analytics'}</span>
                  </div>
                  <div className="sc-back-feat">
                    <CheckCircle2 size={16} className="sc-icon-green" />
                    <span>{isSpanish ? 'Recordatorios automáticos por WhatsApp y SMS' : 'Automated WhatsApp & SMS reminders'}</span>
                  </div>
                  <div className="sc-back-feat">
                    <CheckCircle2 size={16} className="sc-icon-green" />
                    <span>{isSpanish ? 'Cifrado de datos de extremo a extremo' : 'End-to-end clinical data encryption'}</span>
                  </div>
                </div>

                <div className="sc-backing-cta-row">
                  <a 
                    href={CONTACT_CONFIG.dentalgridUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="sc-backing-btn-primary"
                  >
                    <span>{isSpanish ? 'Ir a dentalgridse.com' : 'Visit dentalgridse.com'}</span>
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>

              <div className="sc-backing-visual">
                <div className="sc-clinic-card-mockup">
                  <div className="sc-clinic-mockup-header">
                    <div className="sc-clinic-brand-row">
                      <div className="sc-clinic-logo-dot" />
                      <strong>DentalGrid Platform</strong>
                    </div>
                    <span className="sc-clinic-status-pill">{isSpanish ? 'En Producción' : 'Live Production'}</span>
                  </div>

                  <div className="sc-clinic-mockup-stats">
                    <div className="sc-clinic-stat-item">
                      <Calendar size={18} className="sc-stat-icon-blue" />
                      <div>
                        <span className="sc-stat-num">99.8%</span>
                        <span className="sc-stat-lbl">{isSpanish ? 'Puntualidad en agenda' : 'Schedule reliability'}</span>
                      </div>
                    </div>
                    <div className="sc-clinic-stat-item">
                      <CreditCard size={18} className="sc-stat-icon-green" />
                      <div>
                        <span className="sc-stat-num">0%</span>
                        <span className="sc-stat-lbl">{isSpanish ? 'Extravío de fichas' : 'Data loss rate'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="sc-clinic-trust-quote">
                    <p>{isSpanish 
                      ? '"DentalGrid demuestra la capacidad de Synapcraft para construir plataformas SaaS seguras, complejas y de alta demanda."' 
                      : '"DentalGrid demonstrates Synapcraft\'s ability to engineer mission-critical, high-demand cloud software."'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

