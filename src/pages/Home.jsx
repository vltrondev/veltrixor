import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  Building2, 
  Globe2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Zap, 
  Search, 
  MapPin, 
  Clock, 
  Smartphone, 
  Boxes, 
  Calendar, 
  CreditCard, 
  Lock, 
  Cpu, 
  Layers, 
  ChevronRight 
} from 'lucide-react';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config/contact';
import './Home.css';

export default function Home() {
  const { t, isSpanish } = useLanguage();
  const [activeHeroTab, setActiveHeroTab] = useState('google');

  return (
    <div className="sc-home">
      {/* ========================================================
          1. HERO SECTION (GLOBAL EXECUTIVE & HIGH TRUST)
         ======================================================== */}
      <section className="sc-hero-section">
        {/* Illumination Meshes */}
        <div className="sc-hero-glow sc-glow-cyan" />
        <div className="sc-hero-glow sc-glow-green" />
        <div className="sc-hero-glow sc-glow-blue" />
        <div className="sc-grid-pattern" />

        <div className="sc-hero-container">
          {/* Eyebrow Pill Badge */}
          <div className="sc-badge-wrapper">
            <span className="sc-pill-badge">
              <span className="sc-badge-indicator" />
              <ShieldCheck size={14} className="sc-badge-icon" />
              <span>{t('hero.eyebrow')}</span>
            </span>
          </div>

          {/* Hero Titular */}
          <h1 className="sc-hero-title">
            {t('hero.titleStart')}{' '}
            <span className="sc-hero-sub-phrase">
              {t('hero.titleAnd')}{' '}
              <span className="sc-hero-gradient-highlight">{t('hero.titleHighlight')}</span>
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="sc-hero-subtitle">
            {t('hero.subtitle')}
          </p>

          {/* Action Buttons & Response Badge */}
          <div className="sc-hero-actions-group">
            <div className="sc-hero-actions">
              <a 
                href={getWhatsAppUrl('Hola Synapcraft, quiero hablar con un especialista sobre el desarrollo de software o web para mi empresa.')}
                target="_blank" 
                rel="noopener noreferrer" 
                className="sc-btn-whatsapp-primary"
                id="hero-whatsapp-btn"
              >
                <span className="sc-wa-beacon" />
                <WhatsAppIcon size={20} className="sc-wa-icon" />
                <span>{t('hero.ctaPrimary')}</span>
              </a>

              <Link to="/paginas-web" className="sc-btn-secondary">
                <span>{t('hero.ctaSecondary')}</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="sc-response-time-pill">
              <span className="sc-online-dot" />
              <span>{t('hero.responseBadge')}</span>
            </div>
          </div>

          {/* Interactive Multi-Tab Digital Showcase */}
          <div className="sc-hero-showcase-wrapper">
            <div className="sc-showcase-frame">
              {/* Window Header */}
              <div className="sc-showcase-window-bar">
                <div className="sc-window-dots">
                  <span className="sc-dot sc-dot-red" />
                  <span className="sc-dot sc-dot-yellow" />
                  <span className="sc-dot sc-dot-green" />
                </div>

                {/* Interactive Showcase Tabs */}
                <div className="sc-showcase-tabs">
                  <button 
                    type="button"
                    className={`sc-tab-btn ${activeHeroTab === 'google' ? 'active' : ''}`}
                    onClick={() => setActiveHeroTab('google')}
                  >
                    <Search size={13} />
                    <span>{t('hero.previewTabs.google')}</span>
                  </button>

                  <button 
                    type="button"
                    className={`sc-tab-btn ${activeHeroTab === 'software' ? 'active' : ''}`}
                    onClick={() => setActiveHeroTab('software')}
                  >
                    <Boxes size={13} />
                    <span>{t('hero.previewTabs.software')}</span>
                  </button>

                  <button 
                    type="button"
                    className={`sc-tab-btn ${activeHeroTab === 'speed' ? 'active' : ''}`}
                    onClick={() => setActiveHeroTab('speed')}
                  >
                    <Zap size={13} />
                    <span>{t('hero.previewTabs.speed')}</span>
                  </button>
                </div>

                <div className="sc-window-ssl">
                  <Lock size={12} className="sc-lock-icon" />
                  <span>https://synapcraft.com/enterprise</span>
                </div>
              </div>

              {/* Showcase Body Dynamic based on Tab */}
              <div className="sc-showcase-content">
                {activeHeroTab === 'google' && (
                  <div className="sc-tab-content-google">
                    <div className="sc-google-bar">
                      <div className="sc-google-logo-wrapper">
                        <span className="sc-google-g">G</span>
                        <span className="sc-google-o1">o</span>
                        <span className="sc-google-o2">o</span>
                        <span className="sc-google-g2">g</span>
                        <span className="sc-google-l">l</span>
                        <span className="sc-google-e">e</span>
                      </div>
                      <div className="sc-google-search-input">
                        <Search size={15} className="sc-search-icon-sm" />
                        <span className="sc-typed-text">
                          {isSpanish 
                            ? 'empresas de software, clínicas y servicios corporativos' 
                            : 'best enterprise web & healthcare software near me'}
                        </span>
                        <span className="sc-cursor-blink">|</span>
                      </div>
                    </div>

                    <div className="sc-simulated-result">
                      <div className="sc-result-header">
                        <div className="sc-result-biz-info">
                          <div className="sc-biz-name-row">
                            <span className="sc-biz-verified-badge">✓ {isSpanish ? 'Empresa Verificada en Google' : 'Verified Google Business'}</span>
                            <span className="sc-biz-name">{isSpanish ? 'Tu Empresa en la Cima de Búsquedas' : 'Your Business Ranking #1'}</span>
                          </div>
                          <div className="sc-biz-rating">
                            <span className="sc-stars">★★★★★</span>
                            <span className="sc-rating-score">5.0</span>
                            <span className="sc-reviews-count">(120+ {isSpanish ? 'opiniones verificadas' : 'verified client reviews'})</span>
                            <span className="sc-biz-status">• {isSpanish ? 'Abierto ahora' : 'Open now'}</span>
                          </div>
                        </div>

                        <a 
                          href={getWhatsAppUrl('Hola Synapcraft, vi la demostración en Google y quiero mi plataforma corporativa.')} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="sc-result-wa-btn"
                        >
                          <WhatsAppIcon size={16} />
                          <span>{isSpanish ? 'WhatsApp en 1 Clic' : 'Direct WhatsApp'}</span>
                        </a>
                      </div>

                      <div className="sc-result-details">
                        <div className="sc-detail-chip">
                          <MapPin size={13} />
                          <span>{isSpanish ? 'Presencia Internacional & Sedes' : 'Global Presence & Branches'}</span>
                        </div>
                        <div className="sc-detail-chip">
                          <Clock size={13} />
                          <span>{isSpanish ? 'Atención al Cliente Inmediata' : 'Immediate Customer Support'}</span>
                        </div>
                        <div className="sc-detail-chip sc-chip-highlight">
                          <Smartphone size={13} />
                          <span>{isSpanish ? 'Cotizaciones Digitales en Tiempo Real' : 'Instant Digital Quotes'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeHeroTab === 'software' && (
                  <div className="sc-tab-content-software">
                    <div className="sc-software-preview-grid">
                      <div className="sc-software-stat-card">
                        <span className="sc-soft-stat-lbl">{isSpanish ? 'Transacciones & Pacientes' : 'Active Transactions'}</span>
                        <span className="sc-soft-stat-val">24,500+</span>
                        <span className="sc-soft-stat-sub text-green">↑ {isSpanish ? '+38% en producción' : '+38% in production'}</span>
                      </div>
                      <div className="sc-software-stat-card">
                        <span className="sc-soft-stat-lbl">{isSpanish ? 'Cifrado de Datos' : 'Security Level'}</span>
                        <span className="sc-soft-stat-val">256-bit</span>
                        <span className="sc-soft-stat-sub text-blue">AES Cloud Shield</span>
                      </div>
                      <div className="sc-software-stat-card">
                        <span className="sc-soft-stat-lbl">{isSpanish ? 'Disponibilidad en Nube' : 'Cloud Availability'}</span>
                        <span className="sc-soft-stat-val">99.99%</span>
                        <span className="sc-soft-stat-sub text-green">Enterprise SLA</span>
                      </div>
                    </div>

                    <div className="sc-software-footer-banner">
                      <div className="sc-soft-banner-info">
                        <ShieldCheck size={20} className="sc-icon-cyan" />
                        <div>
                          <strong>DentalGrid Clinical SaaS Platform</strong>
                          <p>{isSpanish ? 'Manejo integral de expedientes clínicos, facturación y agendas médicas en la nube.' : 'Comprehensive cloud clinical charts, invoicing, and appointments.'}</p>
                        </div>
                      </div>
                      <Link to="/dentalgrid" className="sc-btn-outline-sm">
                        <span>{isSpanish ? 'Ver DentalGrid' : 'View DentalGrid'}</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                )}

                {activeHeroTab === 'speed' && (
                  <div className="sc-tab-content-speed">
                    <div className="sc-speed-scores-row">
                      <div className="sc-score-circle-card">
                        <div className="sc-score-circle sc-circle-green">
                          <span className="sc-score-number">100</span>
                        </div>
                        <span className="sc-score-title">{isSpanish ? 'Rendimiento Global' : 'Performance'}</span>
                        <span className="sc-score-desc">Google Core Web Vitals</span>
                      </div>

                      <div className="sc-score-circle-card">
                        <div className="sc-score-circle sc-circle-green">
                          <span className="sc-score-number">100</span>
                        </div>
                        <span className="sc-score-title">{isSpanish ? 'Accesibilidad UI' : 'Accessibility'}</span>
                        <span className="sc-score-desc">WCAG AA Standard</span>
                      </div>

                      <div className="sc-score-circle-card">
                        <div className="sc-score-circle sc-circle-green">
                          <span className="sc-score-number">100</span>
                        </div>
                        <span className="sc-score-title">{isSpanish ? 'Mejores Prácticas' : 'Best Practices'}</span>
                        <span className="sc-score-desc">HTTPS & Security</span>
                      </div>

                      <div className="sc-score-circle-card">
                        <div className="sc-score-circle sc-circle-green">
                          <span className="sc-score-number">100</span>
                        </div>
                        <span className="sc-score-title">{isSpanish ? 'SEO Técnico' : 'Technical SEO'}</span>
                        <span className="sc-score-desc">Schema.org & Metas</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Trust Metric Strip Under Showcase */}
              <div className="sc-hero-metrics-strip">
                <div className="sc-metric-col">
                  <span className="sc-metric-big-val">{t('hero.trustStat1Value')}</span>
                  <span className="sc-metric-lbl">{t('hero.trustStat1Label')}</span>
                </div>
                <div className="sc-metric-col">
                  <span className="sc-metric-big-val text-green">{t('hero.trustStat2Value')}</span>
                  <span className="sc-metric-lbl">{t('hero.trustStat2Label')}</span>
                </div>
                <div className="sc-metric-col">
                  <span className="sc-metric-big-val text-cyan">{t('hero.trustStat3Value')}</span>
                  <span className="sc-metric-lbl">{t('hero.trustStat3Label')}</span>
                </div>
                <div className="sc-metric-col">
                  <span className="sc-metric-big-val">{t('hero.trustStat4Value')}</span>
                  <span className="sc-metric-lbl">{t('hero.trustStat4Label')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. GLOBAL SECTORS TRUST BAR
         ======================================================== */}
      <section className="sc-sectors-trust-bar">
        <div className="sc-trust-bar-container">
          <p className="sc-trust-bar-heading">{t('trustBar.title')}</p>
          <div className="sc-trust-chips-row">
            <div className="sc-trust-chip">
              <ShieldCheck size={15} />
              <span>{t('trustBar.item1')}</span>
            </div>
            <div className="sc-trust-chip">
              <Boxes size={15} />
              <span>{t('trustBar.item2')}</span>
            </div>
            <div className="sc-trust-chip">
              <Globe2 size={15} />
              <span>{t('trustBar.item3')}</span>
            </div>
            <div className="sc-trust-chip">
              <Zap size={15} />
              <span>{t('trustBar.item4')}</span>
            </div>
            <div className="sc-trust-chip">
              <Building2 size={15} />
              <span>{t('trustBar.item5')}</span>
            </div>
            <div className="sc-trust-chip">
              <Layers size={15} />
              <span>{t('trustBar.item6')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SOLUTIONS OVERVIEW (PORTAL NAVIGATION CARDS)
         ======================================================== */}
      <section className="sc-section sc-services-section">
        <div className="sc-section-header">
          <span className="sc-section-badge">{t('homeSolutions.badge')}</span>
          <h2 className="sc-section-title">{t('homeSolutions.title')}</h2>
          <p className="sc-section-subtitle">{t('homeSolutions.subtitle')}</p>
        </div>

        <div className="sc-solutions-grid">
          {/* Card 1: Páginas Web */}
          <div className="sc-solution-portal-card sc-card-featured">
            <div className="sc-portal-card-top">
              <div className="sc-service-icon-box sc-icon-cyan">
                <Globe2 size={26} />
              </div>
              <span className="sc-service-tag sc-tag-featured">{isSpanish ? 'MÁS SOLICITADO' : 'POPULAR'}</span>
            </div>
            <h3 className="sc-portal-card-title">{t('homeSolutions.card1Title')}</h3>
            <p className="sc-portal-card-desc">{t('homeSolutions.card1Desc')}</p>
            <div className="sc-portal-card-footer">
              <Link to="/paginas-web" className="sc-portal-link">
                <span>{t('homeSolutions.card1Cta')}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Card 2: Software a Medida */}
          <div className="sc-solution-portal-card">
            <div className="sc-portal-card-top">
              <div className="sc-service-icon-box">
                <Boxes size={26} />
              </div>
              <span className="sc-service-tag">{isSpanish ? 'ORDEN & ESCALA' : 'SCALE'}</span>
            </div>
            <h3 className="sc-portal-card-title">{t('homeSolutions.card2Title')}</h3>
            <p className="sc-portal-card-desc">{t('homeSolutions.card2Desc')}</p>
            <div className="sc-portal-card-footer">
              <Link to="/software-a-medida" className="sc-portal-link">
                <span>{t('homeSolutions.card2Cta')}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Card 3: Soluciones por Sector */}
          <div className="sc-solution-portal-card">
            <div className="sc-portal-card-top">
              <div className="sc-service-icon-box">
                <Building2 size={26} />
              </div>
              <span className="sc-service-tag">{isSpanish ? 'ESPECIALIZADO' : 'SECTORS'}</span>
            </div>
            <h3 className="sc-portal-card-title">{t('homeSolutions.card3Title')}</h3>
            <p className="sc-portal-card-desc">{t('homeSolutions.card3Desc')}</p>
            <div className="sc-portal-card-footer">
              <Link to="/sectores" className="sc-portal-link">
                <span>{t('homeSolutions.card3Cta')}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Card 4: DentalGrid Clinical SaaS */}
          <div className="sc-solution-portal-card">
            <div className="sc-portal-card-top">
              <div className="sc-service-icon-box">
                <ShieldCheck size={26} />
              </div>
              <span className="sc-service-tag">{isSpanish ? 'SAAS MÉDICO' : 'HEALTHCARE'}</span>
            </div>
            <h3 className="sc-portal-card-title">{t('homeSolutions.card4Title')}</h3>
            <p className="sc-portal-card-desc">{t('homeSolutions.card4Desc')}</p>
            <div className="sc-portal-card-footer">
              <Link to="/dentalgrid" className="sc-portal-link">
                <span>{t('homeSolutions.card4Cta')}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. PROPRIETARY CLINICAL SOFTWARE BACKING PREVIEW
         ======================================================== */}
      <section className="sc-section sc-backing-section">
        <div className="sc-backing-container">
          <div className="sc-backing-card">
            <div className="sc-backing-header-badge">
              <ShieldCheck size={16} />
              <span>{t('dentalgridBacking.badge')}</span>
            </div>

            <div className="sc-backing-grid">
              <div className="sc-backing-content">
                <span className="sc-backing-tagline">{t('dentalgridBacking.tagline')}</span>
                <h3 className="sc-backing-title">{t('dentalgridBacking.title')}</h3>
                <p className="sc-backing-text">{t('dentalgridBacking.text')}</p>

                <div className="sc-backing-cta-row">
                  <Link to="/dentalgrid" className="sc-backing-btn-primary">
                    <span>{isSpanish ? 'Ver detalles de DentalGrid' : 'View DentalGrid Details'}</span>
                    <ArrowRight size={15} />
                  </Link>

                  <a 
                    href={CONTACT_CONFIG.dentalgridUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="sc-backing-btn-wa"
                  >
                    <span>{t('dentalgridBacking.domain')}</span>
                    <ExternalLink size={14} />
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
                    <span className="sc-clinic-status-pill">SaaS Active</span>
                  </div>

                  <div className="sc-clinic-mockup-stats">
                    <div className="sc-clinic-stat-item">
                      <Calendar size={18} className="sc-stat-icon-blue" />
                      <div>
                        <span className="sc-stat-num">99.8%</span>
                        <span className="sc-stat-lbl">{isSpanish ? 'Citas y turnos a tiempo' : 'Appointments on time'}</span>
                      </div>
                    </div>
                    <div className="sc-clinic-stat-item">
                      <CreditCard size={18} className="sc-stat-icon-green" />
                      <div>
                        <span className="sc-stat-num">100%</span>
                        <span className="sc-stat-lbl">{isSpanish ? 'Control de facturación' : 'Billing control'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. ABOUT & VALUES TEASER
         ======================================================== */}
      <section className="sc-section sc-ceo-section">
        <div className="sc-ceo-card">
          <div className="sc-ceo-grid">
            <div className="sc-ceo-avatar-wrap">
              <div className="sc-ceo-avatar-frame">
                <img 
                  src="/samuel-aquino.jpg" 
                  alt="Samuel Aquino - Fundador de Synapcraft" 
                  className="sc-ceo-photo"
                  loading="lazy"
                />
                <div className="sc-ceo-glow" />
              </div>
              <div className="sc-ceo-badge-floating">
                <ShieldCheck size={16} />
                <span>Founder & Lead Engineer</span>
              </div>
            </div>

            <div className="sc-ceo-content">
              <span className="sc-section-badge">{t('ceo.badge')}</span>
              <h2 className="sc-ceo-name">{t('ceo.name')}</h2>
              <h3 className="sc-ceo-role">{t('ceo.role')}</h3>
              <p className="sc-ceo-bio">{t('ceo.bio')}</p>

              <div className="sc-ceo-social-strip">
                <Link to="/nosotros" className="sc-btn-outline-sm" style={{ padding: '10px 18px', fontSize: '0.9rem' }}>
                  <span>{isSpanish ? 'Conocer más sobre nosotros' : 'Learn more about us'}</span>
                  <ArrowRight size={14} />
                </Link>
                <a 
                  href={CONTACT_CONFIG.ceoInstagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="sc-instagram-ceo-btn"
                >
                  <span>{CONTACT_CONFIG.ceoInstagramHandle}</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. EXECUTIVE CTA BANNER
         ======================================================== */}
      <section className="sc-section sc-contact-section">
        <div className="sc-contact-container">
          <div className="sc-whatsapp-callout-card">
            <div className="sc-wa-callout-glow" />
            <div className="sc-wa-callout-content">
              <div className="sc-wa-callout-icon-wrap">
                <WhatsAppIcon size={38} className="sc-wa-big-icon" />
              </div>
              <div className="sc-wa-callout-text">
                <h3>{isSpanish ? '¿Listo para iniciar tu próximo proyecto digital?' : 'Ready to begin your next digital platform?'}</h3>
                <p>{isSpanish ? 'Conversa directamente con nuestros ingenieros. Te orientamos sobre costos, arquitectura y tiempos de entrega.' : 'Connect directly with our engineering team. We provide clear guidance on costs, architecture, and timelines.'}</p>
              </div>
              <a 
                href={getWhatsAppUrl('Hola Synapcraft, quiero hablar con ustedes sobre una página web o sistema para mi negocio.')}
                target="_blank" 
                rel="noopener noreferrer" 
                className="sc-wa-big-btn"
              >
                <WhatsAppIcon size={22} />
                <span>{t('contact.whatsappBtn')}</span>
              </a>
            </div>
            <span className="sc-wa-callout-sub">{t('contact.whatsappSubtext')}</span>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Quick Access */}
      <div className="sc-floating-wa-container">
        <a 
          href={getWhatsAppUrl('Hola Synapcraft, vi su sitio web y me gustaría hacer una consulta para mi empresa.')}
          target="_blank"
          rel="noopener noreferrer"
          className="sc-floating-wa-btn"
          aria-label="Contactar por WhatsApp"
        >
          <span className="sc-floating-dot-pulse" />
          <WhatsAppIcon size={24} />
          <span className="sc-floating-wa-label">{isSpanish ? '¿Hablamos por WhatsApp?' : 'Chat on WhatsApp'}</span>
        </a>
      </div>
    </div>
  );
}
