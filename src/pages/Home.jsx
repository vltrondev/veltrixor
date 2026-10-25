import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Building2, 
  Globe2, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Calendar, 
  UserCheck, 
  Activity, 
  Send,
  Code2,
  Database,
  Bot,
  Stethoscope
} from 'lucide-react';
import InstagramIcon from '../components/ui/InstagramIcon';
import './Home.css';

export default function Home() {
  const { t, language, isSpanish } = useLanguage();

  // DentalGrid Interactive Mockup State
  const [selectedTooth, setSelectedTooth] = useState(16);
  const [toothStatus, setToothStatus] = useState({
    16: { label: isSpanish ? 'Corona de Zirconio' : 'Zirconia Crown', state: 'completed', color: '#00d4ff' },
    11: { label: isSpanish ? 'Limpieza Ultrasónica' : 'Ultrasonic Cleaning', state: 'healthy', color: '#10b981' },
    24: { label: isSpanish ? 'Endodoncia Programada' : 'Scheduled Root Canal', state: 'pending', color: '#f59e0b' },
    36: { label: isSpanish ? 'Restauración Estética' : 'Esthetic Restoration', state: 'completed', color: '#00d4ff' }
  });

  // Contact Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'software-corporativo',
    budget: '$3k-$10k',
    message: ''
  });

  const handleToothClick = (num) => {
    setSelectedTooth(num);
  };

  const encodeFormData = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({
          'form-name': 'contact',
          ...formData
        })
      });
      setFormSubmitted(true);
    } catch (err) {
      console.error('Error submitting form to Netlify:', err);
      // Still show success to client
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const teethList = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28];

  return (
    <div className="sc-home">
      {/* ========================================================
          1. HERO SECTION
         ======================================================== */}
      <section className="sc-hero-section">
        {/* Background Ambient Glows */}
        <div className="sc-hero-glow sc-glow-cyan" />
        <div className="sc-hero-glow sc-glow-blue" />
        <div className="sc-grid-pattern" />

        <div className="sc-hero-container">
          {/* Top Pill Badge */}
          <div className="sc-badge-wrapper">
            <span className="sc-pill-badge">
              <span className="sc-badge-indicator" />
              <Sparkles size={14} className="sc-badge-icon" />
              <span>{t('hero.badge')}</span>
            </span>
          </div>

          {/* Hero Typography */}
          <h1 className="sc-hero-title">
            {t('hero.titleLine1')}{' '}
            <span className="sc-hero-gradient">{t('hero.titleHighlight')}</span>{' '}
            {t('hero.titleLine2')}
          </h1>

          <p className="sc-hero-subtitle">
            {t('hero.subtitle')}
          </p>

          {/* Action Buttons */}
          <div className="sc-hero-actions">
            <a href="#contacto" className="sc-btn-primary">
              <span className="sc-btn-shine" />
              <span className="sc-btn-content">
                <span>{t('hero.ctaPrimary')}</span>
                <ArrowRight size={18} className="sc-btn-arrow" />
              </span>
            </a>

            <a href="#dentalgrid" className="sc-btn-secondary">
              <Stethoscope size={18} className="sc-dental-icon" />
              <span>{t('hero.ctaSecondary')}</span>
            </a>
          </div>

          {/* 3D Neural Synapse Hero Visual Display */}
          <div className="sc-hero-visual-card">
            <div className="sc-synapse-visual-container">
              {/* Floating Tech Badges */}
              <div className="sc-floating-tag sc-tag-top-left">
                <Building2 size={16} />
                <span>Enterprise Systems</span>
              </div>
              <div className="sc-floating-tag sc-tag-top-right">
                <Globe2 size={16} />
                <span>Modern Web & High SEO</span>
              </div>
              <div className="sc-floating-tag sc-tag-bottom-left">
                <Bot size={16} />
                <span>AI Agents & I/O</span>
              </div>
              <div className="sc-floating-tag sc-tag-bottom-right">
                <Stethoscope size={16} />
                <span>DentalGrid SaaS</span>
              </div>

              {/* Central Glowing Synapcraft 3D Node */}
              <div className="sc-synapse-core">
                <div className="sc-synapse-pulse-ring" />
                <div className="sc-synapse-pulse-ring-outer" />
                <img 
                  src="/synapcraft-icon.png" 
                  alt="Synapcraft Neural Architecture" 
                  className="sc-synapse-icon-hero" 
                />
              </div>
            </div>

            {/* Metrics Strip */}
            <div className="sc-hero-metrics">
              <div className="sc-metric-col">
                <span className="sc-metric-num">{t('hero.stat1Number')}</span>
                <span className="sc-metric-lbl">{t('hero.stat1Label')}</span>
              </div>
              <div className="sc-metric-sep" />
              <div className="sc-metric-col">
                <span className="sc-metric-num">{t('hero.stat2Number')}</span>
                <span className="sc-metric-lbl">{t('hero.stat2Label')}</span>
              </div>
              <div className="sc-metric-sep" />
              <div className="sc-metric-col">
                <span className="sc-metric-num">{t('hero.stat3Number')}</span>
                <span className="sc-metric-lbl">{t('hero.stat3Label')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. CORE SERVICES SECTION
         ======================================================== */}
      <section id="servicios" className="sc-section sc-services-section">
        <div className="sc-section-header">
          <span className="sc-section-badge">{t('services.sectionBadge')}</span>
          <h2 className="sc-section-title">{t('services.title')}</h2>
          <p className="sc-section-subtitle">{t('services.subtitle')}</p>
        </div>

        <div className="sc-services-grid">
          {/* Service 1: Software Corporativo */}
          <div className="sc-service-card">
            <div className="sc-service-top">
              <div className="sc-service-icon-box">
                <Building2 size={28} />
              </div>
              <span className="sc-service-tag">{t('services.service1.tag')}</span>
            </div>
            <h3 className="sc-service-heading">{t('services.service1.title')}</h3>
            <p className="sc-service-description">{t('services.service1.description')}</p>
            <ul className="sc-service-checklist">
              {t('services.service1.features').map((item, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="sc-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="sc-service-footer">
              <a href="#contacto" className="sc-service-link">
                <span>{isSpanish ? 'Cotizar Software' : 'Request Software'}</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Service 2: Sitios Web para Negocios */}
          <div className="sc-service-card sc-card-featured">
            <div className="sc-featured-ribbon">
              <span>{isSpanish ? 'ALTO IMPACTO' : 'HIGH IMPACT'}</span>
            </div>
            <div className="sc-service-top">
              <div className="sc-service-icon-box sc-icon-cyan">
                <Globe2 size={28} />
              </div>
              <span className="sc-service-tag">{t('services.service2.tag')}</span>
            </div>
            <h3 className="sc-service-heading">{t('services.service2.title')}</h3>
            <p className="sc-service-description">{t('services.service2.description')}</p>
            <ul className="sc-service-checklist">
              {t('services.service2.features').map((item, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="sc-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="sc-service-footer">
              <a href="#contacto" className="sc-service-link sc-link-cyan">
                <span>{isSpanish ? 'Diseñar mi Sitio Web' : 'Build My Website'}</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Service 3: Integraciones de IA e IO */}
          <div className="sc-service-card">
            <div className="sc-service-top">
              <div className="sc-service-icon-box">
                <Cpu size={28} />
              </div>
              <span className="sc-service-tag">{t('services.service3.tag')}</span>
            </div>
            <h3 className="sc-service-heading">{t('services.service3.title')}</h3>
            <p className="sc-service-description">{t('services.service3.description')}</p>
            <ul className="sc-service-checklist">
              {t('services.service3.features').map((item, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="sc-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="sc-service-footer">
              <a href="#contacto" className="sc-service-link">
                <span>{isSpanish ? 'Integrar Inteligencia Artificial' : 'Integrate AI Systems'}</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. FLAGSHIP PRODUCT: DENTALGRID (dentalgridse.com)
         ======================================================== */}
      <section id="dentalgrid" className="sc-section sc-dentalgrid-section">
        <div className="sc-dentalgrid-glow" />
        
        <div className="sc-dentalgrid-layout">
          {/* Left Column: Product Info & Direct Link */}
          <div className="sc-dentalgrid-info">
            <div className="sc-dentalgrid-header-badge">
              <Stethoscope size={16} />
              <span>{t('dentalgrid.badge')}</span>
            </div>

            <h2 className="sc-dentalgrid-title">
              {t('dentalgrid.title')}
            </h2>

            <div className="sc-domain-badge">
              <span className="sc-live-dot" />
              <span>dentalgridse.com</span>
              <span className="sc-domain-status">({t('dentalgrid.status')})</span>
            </div>

            <p className="sc-dentalgrid-desc">
              {t('dentalgrid.description')}
            </p>

            <div className="sc-dental-feature-pills">
              <div className="sc-pill-item">
                <CheckCircle2 size={16} className="sc-check-icon" />
                <span>{t('dentalgrid.card1Title')}</span>
              </div>
              <div className="sc-pill-item">
                <CheckCircle2 size={16} className="sc-check-icon" />
                <span>{t('dentalgrid.card2Title')}</span>
              </div>
              <div className="sc-pill-item">
                <CheckCircle2 size={16} className="sc-check-icon" />
                <span>{t('dentalgrid.card3Title')}</span>
              </div>
            </div>

            <div className="sc-dentalgrid-actions">
              <a 
                href="https://dentalgridse.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sc-dentalgrid-btn"
                id="btn-visit-dentalgrid"
              >
                <span className="sc-dg-btn-halo" />
                <span className="sc-dg-btn-shine" />
                <span className="sc-dg-btn-inner">
                  <span className="sc-dg-beacon-dot" />
                  <span className="sc-dg-btn-text">{t('dentalgrid.ctaVisit')}</span>
                  <ExternalLink size={19} className="sc-dg-btn-icon" />
                </span>
              </a>
              <span className="sc-dental-subtext">
                {isSpanish ? 'Software propio creado y operado por Synapcraft' : 'Proprietary software built and operated by Synapcraft'}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive DentalGrid Dashboard Simulator */}
          <div className="sc-dentalgrid-preview">
            <div className="sc-mockup-browser">
              <div className="sc-browser-header">
                <div className="sc-browser-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="sc-browser-url-bar">
                  <span className="sc-url-lock">🔒</span>
                  <span className="sc-url-text">https://dentalgridse.com/app/clinical-records</span>
                </div>
                <span className="sc-browser-badge">DentalGrid v2.4</span>
              </div>

              <div className="sc-browser-body">
                {/* App Topbar */}
                <div className="sc-mock-topbar">
                  <div className="sc-mock-logo">
                    <span className="sc-dg-logo-mark">DG</span>
                    <span className="sc-dg-title">DentalGrid SE</span>
                  </div>
                  <div className="sc-mock-user">
                    <span className="sc-mock-clinic">Clínica Dental San Lucas</span>
                    <div className="sc-mock-avatar">DR</div>
                  </div>
                </div>

                {/* Patient Header */}
                <div className="sc-patient-banner">
                  <div className="sc-patient-meta">
                    <span className="sc-patient-name">Carlos Mendoza</span>
                    <span className="sc-patient-sub">Exp: #DG-4092 • {isSpanish ? 'Cita Hoy' : 'Today'} 10:30 AM</span>
                  </div>
                  <span className="sc-wa-reminder-badge">
                    ✓ WhatsApp {isSpanish ? 'Recordatorio Enviado' : 'Reminder Sent'}
                  </span>
                </div>

                {/* Interactive Odontogram Chart */}
                <div className="sc-odontogram-box">
                  <div className="sc-odontogram-title-bar">
                    <span>{isSpanish ? 'Odontograma Clínico Interactivo' : 'Interactive Clinical Odontogram'}</span>
                    <span className="sc-click-hint">{isSpanish ? 'Haz clic en una pieza:' : 'Click on a tooth:'}</span>
                  </div>

                  <div className="sc-teeth-row">
                    {teethList.map((tooth) => {
                      const isSelected = selectedTooth === tooth;
                      const hasData = toothStatus[tooth];
                      return (
                        <button
                          key={tooth}
                          type="button"
                          className={`sc-tooth-btn ${isSelected ? 'selected' : ''} ${hasData ? 'has-data' : ''}`}
                          onClick={() => handleToothClick(tooth)}
                        >
                          <span className="sc-tooth-icon">🦷</span>
                          <span className="sc-tooth-num">{tooth}</span>
                          {hasData && (
                            <span 
                              className="sc-tooth-dot" 
                              style={{ backgroundColor: hasData.color }} 
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Tooth Details Pane */}
                  <div className="sc-tooth-details">
                    <div className="sc-tooth-header">
                      <span className="sc-tooth-title">
                        {isSpanish ? 'Pieza Dental' : 'Tooth'} #{selectedTooth}
                      </span>
                      {toothStatus[selectedTooth] ? (
                        <span className="sc-tooth-status-tag" style={{ color: toothStatus[selectedTooth].color, borderColor: toothStatus[selectedTooth].color }}>
                          {toothStatus[selectedTooth].label}
                        </span>
                      ) : (
                        <span className="sc-tooth-status-tag healthy">
                          {isSpanish ? 'Sano / Sin Patología' : 'Healthy / Normal'}
                        </span>
                      )}
                    </div>
                    <div className="sc-tooth-action-row">
                      <span className="sc-diag-text">
                        {toothStatus[selectedTooth] 
                          ? (isSpanish ? 'Historial actualizado. Control radiográfico adjunto.' : 'Record updated. Radiographic evaluation attached.')
                          : (isSpanish ? 'Pieza apta para profilaxis preventiva estándar.' : 'Piece clean, standard preventive care recommended.')}
                      </span>
                      <button type="button" className="sc-mini-action-btn">
                        {isSpanish ? 'Ver Ficha' : 'View Chart'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Metrics */}
                <div className="sc-mock-footer-stats">
                  <div className="sc-stat-chip">
                    <Calendar size={14} />
                    <span>8 {isSpanish ? 'Citas Hoy' : 'Appointments Today'}</span>
                  </div>
                  <div className="sc-stat-chip">
                    <UserCheck size={14} />
                    <span>98% {isSpanish ? 'Asistencia' : 'Attendance'}</span>
                  </div>
                  <div className="sc-stat-chip">
                    <Activity size={14} />
                    <span>{isSpanish ? 'Caja al Día' : 'Balance Updated'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. DUAL MODEL: PROPRIETARY PRODUCTS + CLIENT SOLUTIONS
         ======================================================== */}
      <section id="modelo" className="sc-section sc-model-section">
        <div className="sc-section-header">
          <span className="sc-section-badge">{t('businessModel.badge')}</span>
          <h2 className="sc-section-title">{t('businessModel.title')}</h2>
          <p className="sc-section-subtitle">{t('businessModel.subtitle')}</p>
        </div>

        <div className="sc-model-grid">
          {/* Card 1: Productos Propios */}
          <div className="sc-model-card">
            <div className="sc-model-icon-box">
              <Layers size={32} />
            </div>
            <h3 className="sc-model-heading">{t('businessModel.ownProductsTitle')}</h3>
            <p className="sc-model-desc">{t('businessModel.ownProductsDesc')}</p>
            <div className="sc-model-evidence">
              <div className="sc-evidence-item">
                <span className="sc-evidence-dot" />
                <span>DentalGrid (dentalgridse.com)</span>
              </div>
              <div className="sc-evidence-item">
                <span className="sc-evidence-dot" />
                <span>{isSpanish ? 'Infraestructura SaaS multi-inquilino' : 'Multi-tenant SaaS cloud infra'}</span>
              </div>
              <div className="sc-evidence-item">
                <span className="sc-evidence-dot" />
                <span>{isSpanish ? 'Iteración continua basada en usuarios reales' : 'Continuous iteration driven by real users'}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Ingeniería para Clientes */}
          <div className="sc-model-card sc-model-card-client">
            <div className="sc-model-icon-box sc-icon-cyan">
              <Code2 size={32} />
            </div>
            <h3 className="sc-model-heading">{t('businessModel.clientSolutionsTitle')}</h3>
            <p className="sc-model-desc">{t('businessModel.clientSolutionsDesc')}</p>
            <div className="sc-model-evidence">
              <div className="sc-evidence-item">
                <span className="sc-evidence-dot" />
                <span>{isSpanish ? 'Software corporativo sin limitaciones' : 'Custom uncompromised enterprise software'}</span>
              </div>
              <div className="sc-evidence-item">
                <span className="sc-evidence-dot" />
                <span>{isSpanish ? 'Propiedad total del código para tu negocio' : '100% intellectual property & code ownership'}</span>
              </div>
              <div className="sc-evidence-item">
                <span className="sc-evidence-dot" />
                <span>{isSpanish ? 'Integraciones de IA e interfaces comerciales' : 'AI integrations & sales-optimized frontends'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. CEO & LEADERSHIP: SAMUEL AQUINO
         ======================================================== */}
      <section id="ceo" className="sc-section sc-ceo-section">
        <div className="sc-ceo-card">
          <div className="sc-ceo-grid">
            <div className="sc-ceo-avatar-wrap">
              <div className="sc-ceo-avatar-frame">
                <img 
                  src="/samuel-aquino.jpg" 
                  alt="Samuel Aquino - CEO & Founder de Synapcraft" 
                  className="sc-ceo-photo"
                  loading="lazy"
                />
                <div className="sc-ceo-glow" />
              </div>
              <div className="sc-ceo-badge-floating">
                <ShieldCheck size={16} />
                <span>Founder & CEO</span>
              </div>
            </div>

            <div className="sc-ceo-content">
              <span className="sc-section-badge">{t('ceo.badge')}</span>
              <h2 className="sc-ceo-name">{t('ceo.name')}</h2>
              <h3 className="sc-ceo-role">{t('ceo.role')}</h3>
              <p className="sc-ceo-bio">{t('ceo.bio')}</p>

              <div className="sc-ceo-social-strip">
                <span className="sc-social-label">{t('ceo.socialText')}</span>
                <a 
                  href={t('ceo.instagramUrl')} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="sc-instagram-ceo-btn"
                  title="Instagram Samuel Aquino (@srdevelop)"
                >
                  <InstagramIcon size={20} />
                  <span>{t('ceo.instagramHandle')}</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. CONTACT & PROJECT ESTIMATOR
         ======================================================== */}
      <section id="contacto" className="sc-section sc-contact-section">
        <div className="sc-section-header">
          <span className="sc-section-badge">{t('contact.badge')}</span>
          <h2 className="sc-section-title">{t('contact.title')}</h2>
          <p className="sc-section-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="sc-contact-container">
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
            className="sc-contact-form" 
            onSubmit={handleFormSubmit}
          >
            {/* Netlify Form Bot & Identity Detection */}
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: 'none' }}>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            {formSubmitted ? (
              <div className="sc-form-success">
                <CheckCircle2 size={54} className="sc-success-icon" />
                <h3>{isSpanish ? '¡Solicitud Recibida!' : 'Inquiry Received!'}</h3>
                <p>{t('contact.form.successMsg')}</p>
                <div className="sc-success-actions">
                  <a 
                    href="https://instagram.com/synapcraft" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="sc-instagram-direct-btn"
                  >
                    <InstagramIcon size={18} />
                    <span>{t('contact.instagramCta')}</span>
                  </a>
                  <button 
                    type="button" 
                    className="sc-reset-form-btn"
                    onClick={() => setFormSubmitted(false)}
                  >
                    {isSpanish ? 'Enviar otra consulta' : 'Submit another inquiry'}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="sc-form-row">
                  <div className="sc-form-group">
                    <label>{t('contact.form.nameLabel')}</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder={t('contact.form.namePlaceholder')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="sc-form-group">
                    <label>{t('contact.form.emailLabel')}</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder={t('contact.form.emailPlaceholder')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="sc-form-row">
                  <div className="sc-form-group">
                    <label>{t('contact.form.serviceLabel')}</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="software-corporativo">{t('contact.form.serviceOpt1')}</option>
                      <option value="sitio-web">{t('contact.form.serviceOpt2')}</option>
                      <option value="integracion-ia">{t('contact.form.serviceOpt3')}</option>
                      <option value="dentalgrid">{t('contact.form.serviceOpt4')}</option>
                      <option value="desarrollo-completo">{t('contact.form.serviceOpt5')}</option>
                    </select>
                  </div>

                  <div className="sc-form-group">
                    <label>{t('contact.form.budgetLabel')}</label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option value="<1k">{t('contact.form.budgetOpt1')}</option>
                      <option value="1k-3k">{t('contact.form.budgetOpt2')}</option>
                      <option value="3k-10k">{t('contact.form.budgetOpt3')}</option>
                      <option value="10k+">{t('contact.form.budgetOpt4')}</option>
                    </select>
                  </div>
                </div>

                <div className="sc-form-group">
                  <label>{t('contact.form.messageLabel')}</label>
                  <textarea 
                    rows={4}
                    name="message"
                    required
                    placeholder={t('contact.form.messagePlaceholder')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="sc-form-submit-row">
                  <button type="submit" className="sc-submit-btn" disabled={isSubmitting}>
                    <span>{isSubmitting ? (isSpanish ? 'Enviando...' : 'Sending...') : t('contact.form.submitBtn')}</span>
                    <Send size={18} />
                  </button>

                  <a 
                    href="https://instagram.com/synapcraft" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="sc-contact-alt-instagram"
                  >
                    <InstagramIcon size={18} />
                    <span>{t('contact.instagramCta')}</span>
                  </a>
                </div>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
