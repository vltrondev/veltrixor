import { useState } from 'react';
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
  Send,
  Search,
  MapPin,
  Clock,
  Smartphone,
  MessageCircle,
  Pill,
  Wrench,
  Dumbbell,
  Package,
  Boxes,
  Headphones,
  ChevronRight
} from 'lucide-react';
import InstagramIcon from '../components/ui/InstagramIcon';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config/contact';
import './Home.css';

export default function Home() {
  const { t, isSpanish } = useLanguage();

  // Contact Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    service: 'pagina-web',
    rubro: 'farmacia',
    message: ''
  });

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

  const getRubroIcon = (id) => {
    switch (id) {
      case 'farmacias':
        return <Pill size={26} className="sc-rubro-icon-svg" />;
      case 'ferreterias':
        return <Wrench size={26} className="sc-rubro-icon-svg" />;
      case 'gimnasios':
        return <Dumbbell size={26} className="sc-rubro-icon-svg" />;
      default:
        return <Building2 size={26} className="sc-rubro-icon-svg" />;
    }
  };

  const getFeatureIcon = (id) => {
    switch (id) {
      case 'servicios':
        return <Package size={22} />;
      case 'ubicacion':
        return <MapPin size={22} />;
      case 'whatsapp':
        return <WhatsAppIcon size={22} />;
      case 'celular':
        return <Smartphone size={22} />;
      case 'google':
        return <Search size={22} />;
      default:
        return <CheckCircle2 size={22} />;
    }
  };

  return (
    <div className="sc-home">
      {/* ========================================================
          1. HERO SECTION (REEMPLAZADO)
         ======================================================== */}
      <section className="sc-hero-section">
        {/* Background Ambient Glows */}
        <div className="sc-hero-glow sc-glow-cyan" />
        <div className="sc-hero-glow sc-glow-green" />
        <div className="sc-grid-pattern" />

        <div className="sc-hero-container">
          {/* Eyebrow Badge */}
          <div className="sc-badge-wrapper">
            <span className="sc-pill-badge">
              <span className="sc-badge-indicator" />
              <Sparkles size={14} className="sc-badge-icon" />
              <span>{t('hero.eyebrow')}</span>
            </span>
          </div>

          {/* Hero Titular */}
          <h1 className="sc-hero-title">
            {t('hero.titleStart')}{' '}
            <span className="sc-hero-sub-phrase">
              {t('hero.titleAnd')}{' '}
              <span className="sc-hero-gradient-wa">{t('hero.titleHighlight')}</span>
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="sc-hero-subtitle">
            {t('hero.subtitle')}
          </p>

          {/* Action Buttons */}
          <div className="sc-hero-actions">
            <a 
              href={getWhatsAppUrl('Hola Synapcraft, quiero una página web para mi negocio en República Dominicana.')}
              target="_blank" 
              rel="noopener noreferrer" 
              className="sc-btn-whatsapp-primary"
              id="hero-whatsapp-btn"
            >
              <span className="sc-wa-beacon" />
              <WhatsAppIcon size={20} className="sc-wa-icon" />
              <span>{t('hero.ctaPrimary')}</span>
            </a>

            <a href="#paginas-web" className="sc-btn-secondary">
              <span>{t('hero.ctaSecondary')}</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Interactive Dominican Business & Google Simulation Card */}
          <div className="sc-hero-visual-card">
            <div className="sc-simulation-container">
              {/* Google Search Mockup Bar */}
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
                      ? 'farmacias y ferreterías en República Dominicana' 
                      : 'best business & store near me Dominican Republic'}
                  </span>
                  <span className="sc-cursor-blink">|</span>
                </div>
              </div>

              {/* Simulated Google Maps / Local Business Result */}
              <div className="sc-simulated-result">
                <div className="sc-result-header">
                  <div className="sc-result-biz-info">
                    <div className="sc-biz-name-row">
                      <span className="sc-biz-verified-badge">✓ Verificado en Google</span>
                      <span className="sc-biz-name">Tu Negocio en República Dominicana</span>
                    </div>
                    <div className="sc-biz-rating">
                      <span className="sc-stars">★★★★★</span>
                      <span className="sc-rating-score">4.9</span>
                      <span className="sc-reviews-count">(85+ opiniones)</span>
                      <span className="sc-biz-status">• Abierto ahora</span>
                    </div>
                  </div>

                  <a 
                    href={getWhatsAppUrl('Hola Synapcraft, vi su demostración de cómo se ve un negocio en Google y quiero mi página web.')} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="sc-result-wa-btn"
                    title="Probar contacto directo por WhatsApp"
                  >
                    <WhatsAppIcon size={16} />
                    <span>WhatsApp en 1 clic</span>
                  </a>
                </div>

                {/* Features Pills inside simulation */}
                <div className="sc-result-details">
                  <div className="sc-detail-chip">
                    <MapPin size={13} />
                    <span>Santo Domingo / Santiago / Todo RD</span>
                  </div>
                  <div className="sc-detail-chip">
                    <Clock size={13} />
                    <span>Horario: Lun - Sáb: 8:00 AM - 7:00 PM</span>
                  </div>
                  <div className="sc-detail-chip sc-chip-highlight">
                    <Smartphone size={13} />
                    <span>Catálogo & Pedidos al instante</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Strip */}
            <div className="sc-hero-metrics">
              <div className="sc-metric-col">
                <Search size={18} className="sc-metric-icon" />
                <span className="sc-metric-lbl">{t('hero.badge1')}</span>
              </div>
              <div className="sc-metric-sep" />
              <div className="sc-metric-col">
                <WhatsAppIcon size={18} className="sc-metric-icon sc-icon-green" />
                <span className="sc-metric-lbl">{t('hero.badge2')}</span>
              </div>
              <div className="sc-metric-sep" />
              <div className="sc-metric-col">
                <Smartphone size={18} className="sc-metric-icon sc-icon-cyan" />
                <span className="sc-metric-lbl">{t('hero.badge3')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. SECCIÓN: PÁGINAS WEB PARA NEGOCIOS
         ======================================================== */}
      <section id="paginas-web" className="sc-section sc-business-section">
        <div className="sc-section-header">
          <span className="sc-section-badge">{t('businessWebsites.badge')}</span>
          <h2 className="sc-section-title">{t('businessWebsites.title')}</h2>
          <p className="sc-section-subtitle sc-section-readable-p">
            {t('businessWebsites.text')}
          </p>
        </div>

        {/* Qué Incluye Grid */}
        <div className="sc-includes-wrapper">
          <h3 className="sc-includes-heading">
            <Sparkles size={20} className="sc-sparkle-cyan" />
            <span>{t('businessWebsites.includesTitle')}</span>
          </h3>

          <div className="sc-features-grid">
            {t('businessWebsites.features').map((item) => (
              <div key={item.id} className="sc-feature-card">
                <div className="sc-feature-icon-box">
                  {getFeatureIcon(item.id)}
                </div>
                <h4 className="sc-feature-title">{item.title}</h4>
                <p className="sc-feature-desc">{item.desc}</p>
                <div className="sc-feature-footer">
                  <span className="sc-feature-check">
                    <CheckCircle2 size={15} />
                    <span>Listo para usar</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SECCIÓN: POR RUBRO (BLOQUES CORTOS)
         ======================================================== */}
      <section id="rubros" className="sc-section sc-rubros-section">
        <div className="sc-section-header">
          <span className="sc-section-badge">{t('rubros.badge')}</span>
          <h2 className="sc-section-title">{t('rubros.title')}</h2>
          <p className="sc-section-subtitle">{t('rubros.subtitle')}</p>
        </div>

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
                  href={getWhatsAppUrl(`Hola Synapcraft, tengo un negocio de ${rubro.name} en República Dominicana y quiero información para mi página web.`)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="sc-rubro-link"
                >
                  <WhatsAppIcon size={16} />
                  <span>Cotizar para {rubro.name}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic call to other business types */}
        <div className="sc-rubros-custom-banner">
          <div className="sc-custom-banner-content">
            <h4>¿Tienes otro tipo de negocio o comercio en República Dominicana?</h4>
            <p>Talleres, reposterías, restaurantes, servicios profesionales o tiendas. Adaptamos la web a lo que vendes.</p>
          </div>
          <a 
            href={getWhatsAppUrl('Hola Synapcraft, tengo un negocio en República Dominicana y quiero saber cómo quedaría mi página web.')}
            target="_blank" 
            rel="noopener noreferrer"
            className="sc-btn-whatsapp-sm"
          >
            <WhatsAppIcon size={17} />
            <span>Consultar mi Negocio por WhatsApp</span>
          </a>
        </div>
      </section>

      {/* ========================================================
          4. SECCIÓN: SERVICIOS (TONO NUEVO)
         ======================================================== */}
      <section id="servicios" className="sc-section sc-services-section">
        <div className="sc-section-header">
          <span className="sc-section-badge">{t('services.badge')}</span>
          <h2 className="sc-section-title">{t('services.title')}</h2>
          <p className="sc-section-subtitle">{t('services.subtitle')}</p>
        </div>

        <div className="sc-services-grid">
          {/* Servicio 1: Páginas web para negocios (Al frente, destacada) */}
          <div className="sc-service-card sc-card-featured">
            <div className="sc-service-top">
              <div className="sc-service-icon-box sc-icon-cyan">
                <Globe2 size={28} />
              </div>
              <span className="sc-service-tag sc-tag-featured">{t('services.service1.tag')}</span>
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
              <a 
                href={getWhatsAppUrl('Hola Synapcraft, me interesa el servicio de Páginas Web para Negocios.')}
                target="_blank" 
                rel="noopener noreferrer"
                className="sc-service-link sc-link-wa"
              >
                <WhatsAppIcon size={16} />
                <span>Pedir Página Web por WhatsApp</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Servicio 2: Sistemas sencillos a medida */}
          <div className="sc-service-card">
            <div className="sc-service-top">
              <div className="sc-service-icon-box">
                <Boxes size={28} />
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
              <a 
                href={getWhatsAppUrl('Hola Synapcraft, me interesa un sistema sencillo a medida (inventario / contabilidad / citas).')}
                target="_blank" 
                rel="noopener noreferrer"
                className="sc-service-link"
              >
                <span>Consultar Sistema Simple</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Servicio 3: Soporte continuo */}
          <div className="sc-service-card">
            <div className="sc-service-top">
              <div className="sc-service-icon-box">
                <Headphones size={28} />
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
              <a 
                href={getWhatsAppUrl('Hola Synapcraft, quiero conocer los planes de soporte continuo y actualización.')}
                target="_blank" 
                rel="noopener noreferrer"
                className="sc-service-link"
              >
                <span>Preguntar por Soporte</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. RESPALDO DENTALGRID (UNA LÍNEA, NO EL FOCO)
         ======================================================== */}
      <section id="dentalgrid" className="sc-section-compact sc-backing-section">
        <div className="sc-backing-container">
          <div className="sc-backing-card">
            <div className="sc-backing-left">
              <div className="sc-backing-badge">
                <ShieldCheck size={16} />
                <span>{t('dentalgridBacking.badge')}</span>
              </div>
              <p className="sc-backing-text">
                {t('dentalgridBacking.text')}
              </p>
            </div>

            <div className="sc-backing-right">
              <a 
                href={CONTACT_CONFIG.dentalgridUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="sc-backing-btn"
                title="Visitar software dentalgridse.com"
              >
                <span className="sc-backing-dot" />
                <span className="sc-backing-domain">{t('dentalgridBacking.domain')}</span>
                <span className="sc-backing-cta">{t('dentalgridBacking.cta')}</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. FUNDADOR & LIDERAZGO: SAMUEL AQUINO
         ======================================================== */}
      <section id="ceo" className="sc-section sc-ceo-section">
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
                <span>Founder & Lead Dev</span>
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
                  href={CONTACT_CONFIG.ceoInstagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="sc-instagram-ceo-btn"
                  title="Instagram Samuel Aquino (@srdevelop)"
                >
                  <InstagramIcon size={18} />
                  <span>{CONTACT_CONFIG.ceoInstagramHandle}</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. LLAMADO A LA ACCIÓN (WHATSAPP + FORMULARIO ALTERNATIVO)
         ======================================================== */}
      <section id="contacto" className="sc-section sc-contact-section">
        <div className="sc-section-header">
          <span className="sc-section-badge">{t('contact.badge')}</span>
          <h2 className="sc-section-title">{t('contact.title')}</h2>
          <p className="sc-section-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="sc-contact-container">
          {/* Main Direct WhatsApp Callout Banner */}
          <div className="sc-whatsapp-callout-card">
            <div className="sc-wa-callout-glow" />
            <div className="sc-wa-callout-content">
              <div className="sc-wa-callout-icon-wrap">
                <WhatsAppIcon size={38} className="sc-wa-big-icon" />
              </div>
              <div className="sc-wa-callout-text">
                <h3>¿Prefieres hablar directamente?</h3>
                <p>Escríbenos ahora mismo. Te respondemos con amabilidad y te orientamos sobre la mejor opción para tu negocio en RD.</p>
              </div>
              <a 
                href={getWhatsAppUrl('Hola Synapcraft, quiero hablar con ustedes sobre una página web o sistema para mi negocio.')}
                target="_blank" 
                rel="noopener noreferrer" 
                className="sc-wa-big-btn"
                id="main-cta-whatsapp-btn"
              >
                <WhatsAppIcon size={22} />
                <span>{t('contact.whatsappBtn')}</span>
              </a>
            </div>
            <span className="sc-wa-callout-sub">{t('contact.whatsappSubtext')}</span>
          </div>

          {/* Alternative Divider */}
          <div className="sc-alternative-divider">
            <span className="sc-divider-line" />
            <span className="sc-divider-text">{t('contact.orAlternative')}</span>
            <span className="sc-divider-line" />
          </div>

          {/* Alternative Netlify Form */}
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
                <h3>{isSpanish ? '¡Mensaje Enviado!' : 'Inquiry Received!'}</h3>
                <p>{t('contact.form.successMsg')}</p>
                <div className="sc-success-actions">
                  <a 
                    href={getWhatsAppUrl('Hola Synapcraft, acabo de enviar el formulario web pero también les escribo por aquí.')} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="sc-btn-whatsapp-sm"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Escribir también por WhatsApp</span>
                  </a>
                  <button 
                    type="button" 
                    className="sc-reset-form-btn"
                    onClick={() => setFormSubmitted(false)}
                  >
                    {isSpanish ? 'Enviar otro mensaje' : 'Submit another inquiry'}
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
                      type="text" 
                      name="contactInfo"
                      required
                      placeholder={t('contact.form.emailPlaceholder')}
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
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
                      <option value="pagina-web">{t('contact.form.serviceOpt1')}</option>
                      <option value="sistema-medida">{t('contact.form.serviceOpt2')}</option>
                      <option value="soporte">{t('contact.form.serviceOpt3')}</option>
                      <option value="dentalgrid">{t('contact.form.serviceOpt4')}</option>
                    </select>
                  </div>

                  <div className="sc-form-group">
                    <label>{t('contact.form.budgetLabel')}</label>
                    <select 
                      name="rubro"
                      value={formData.rubro}
                      onChange={(e) => setFormData({ ...formData, rubro: e.target.value })}
                    >
                      <option value="farmacia">{t('contact.form.budgetOpt1')}</option>
                      <option value="ferreteria">{t('contact.form.budgetOpt2')}</option>
                      <option value="gimnasio">{t('contact.form.budgetOpt3')}</option>
                      <option value="otro">{t('contact.form.budgetOpt4')}</option>
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
                    href={CONTACT_CONFIG.instagramUrl} 
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
