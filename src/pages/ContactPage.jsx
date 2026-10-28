import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Globe2, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import InstagramIcon from '../components/ui/InstagramIcon';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config/contact';
import './Home.css';

export default function ContactPage() {
  const { t, isSpanish } = useLanguage();
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
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="sc-home">
      {/* Page Hero */}
      <section className="sc-page-hero">
        <div className="sc-hero-glow sc-glow-cyan" />
        <div className="sc-hero-glow sc-glow-green" />
        <div className="sc-grid-pattern" />

        <div className="sc-page-hero-container">
          <span className="sc-pill-badge">
            <MessageSquare size={14} className="sc-badge-icon" />
            <span>{t('contact.badge')}</span>
          </span>

          <h1 className="sc-page-hero-title">{t('contact.title')}</h1>
          <p className="sc-page-hero-subtitle">{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Main Contact Container */}
      <section className="sc-section sc-contact-section" style={{ paddingTop: '1rem' }}>
        <div className="sc-contact-container">
          {/* Main Direct WhatsApp Callout Banner */}
          <div className="sc-whatsapp-callout-card">
            <div className="sc-wa-callout-glow" />
            <div className="sc-wa-callout-content">
              <div className="sc-wa-callout-icon-wrap">
                <WhatsAppIcon size={38} className="sc-wa-big-icon" />
              </div>
              <div className="sc-wa-callout-text">
                <h3>{isSpanish ? '¿Prefieres conversar directamente por WhatsApp?' : 'Prefer to chat directly on WhatsApp?'}</h3>
                <p>
                  {isSpanish 
                    ? 'Escríbenos en cualquier momento. Te orientamos sobre costos, tiempos de entrega y la mejor alternativa para tu empresa.' 
                    : 'Message us anytime. We will guide you regarding costs, delivery timelines, and the best technical architecture.'}
                </p>
              </div>
              <a 
                href={getWhatsAppUrl('Hola Synapcraft, quiero hablar con un especialista sobre un proyecto de software o web.')}
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

          {/* Netlify Strategic Form */}
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
            className="sc-contact-form" 
            onSubmit={handleFormSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: 'none' }}>
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>

            {formSubmitted ? (
              <div className="sc-form-success">
                <CheckCircle2 size={54} className="sc-success-icon" />
                <h3>{isSpanish ? '¡Consulta Enviada con Éxito!' : 'Inquiry Successfully Received!'}</h3>
                <p>{t('contact.form.successMsg')}</p>
                <div className="sc-success-actions">
                  <a 
                    href={getWhatsAppUrl('Hola Synapcraft, acabo de enviar el formulario corporativo y les escribo por aquí.')} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="sc-btn-whatsapp-sm"
                  >
                    <WhatsAppIcon size={18} />
                    <span>{isSpanish ? 'Escribir también por WhatsApp' : 'Message on WhatsApp too'}</span>
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

