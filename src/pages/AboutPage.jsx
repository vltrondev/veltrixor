import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  ExternalLink, 
  Cpu, 
  Layers, 
  Search, 
  Zap,
  ArrowRight
} from 'lucide-react';
import InstagramIcon from '../components/ui/InstagramIcon';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config/contact';
import './Home.css';

export default function AboutPage() {
  const { t, isSpanish } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? -1 : idx);
  };

  const faqItems = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') }
  ];

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
            <span>{isSpanish ? 'SOBRE SYNAPCRAFT' : 'ABOUT SYNAPCRAFT'}</span>
          </span>

          <h1 className="sc-page-hero-title">
            {isSpanish ? 'Ingeniería con Propósito, Transparencia y Trato Directo' : 'Purpose-Driven Engineering, Transparency & Direct Partnership'}
          </h1>
          <p className="sc-page-hero-subtitle">
            {isSpanish 
              ? 'Somos un estudio boutique de ingeniería de software y desarrollo web. Ayudamos a empresas a construir infraestructura digital de alto impacto que genera confianza y multiplica clientes sin ataduras.'
              : 'We are a boutique software engineering studio. We help enterprises build high-impact digital platforms that generate authority and scale revenue with zero vendor lock-in.'}
          </p>
        </div>
      </section>

      {/* Founder & Leadership Section */}
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
                <span>Founder & Lead Engineer</span>
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

      {/* Comparison Table */}
      <section className="sc-section sc-comparison-section">
        <div className="sc-section-header">
          <span className="sc-section-badge">{t('comparison.badge')}</span>
          <h2 className="sc-section-title">{t('comparison.title')}</h2>
          <p className="sc-section-subtitle">{t('comparison.subtitle')}</p>
        </div>

        <div className="sc-comparison-container">
          <div className="sc-comparison-table-wrap">
            <table className="sc-comparison-table">
              <thead>
                <tr>
                  <th className="sc-th-feature">{t('comparison.headers.feature')}</th>
                  <th className="sc-th-synap">
                    <div className="sc-th-synap-inner">
                      <Sparkles size={16} />
                      <span>{t('comparison.headers.synapcraft')}</span>
                      <span className="sc-th-badge">{isSpanish ? 'Estándar Superior' : 'Top Standard'}</span>
                    </div>
                  </th>
                  <th className="sc-th-others">{t('comparison.headers.others')}</th>
                </tr>
              </thead>
              <tbody>
                {t('comparison.rows').map((row, idx) => (
                  <tr key={idx}>
                    <td className="sc-td-feature">
                      <strong>{row.title}</strong>
                    </td>
                    <td className="sc-td-synap">
                      <div className="sc-td-val-good">
                        <CheckCircle2 size={18} className="sc-icon-check-good" />
                        <span>{row.synap}</span>
                      </div>
                    </td>
                    <td className="sc-td-others">
                      <div className="sc-td-val-poor">
                        <span className="sc-cross-indicator">✕</span>
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4-Step Methodology */}
      <section className="sc-section sc-process-section">
        <div className="sc-section-header">
          <span className="sc-section-badge">{t('process.badge')}</span>
          <h2 className="sc-section-title">{t('process.title')}</h2>
          <p className="sc-section-subtitle">{t('process.subtitle')}</p>
        </div>

        <div className="sc-process-grid">
          <div className="sc-process-card">
            <span className="sc-step-num">01</span>
            <div className="sc-step-icon-wrap">
              <Search size={22} />
            </div>
            <h4>{t('process.step1Title')}</h4>
            <p>{t('process.step1Desc')}</p>
          </div>

          <div className="sc-process-card">
            <span className="sc-step-num">02</span>
            <div className="sc-step-icon-wrap">
              <Layers size={22} />
            </div>
            <h4>{t('process.step2Title')}</h4>
            <p>{t('process.step2Desc')}</p>
          </div>

          <div className="sc-process-card">
            <span className="sc-step-num">03</span>
            <div className="sc-step-icon-wrap">
              <Cpu size={22} />
            </div>
            <h4>{t('process.step3Title')}</h4>
            <p>{t('process.step3Desc')}</p>
          </div>

          <div className="sc-process-card">
            <span className="sc-step-num">04</span>
            <div className="sc-step-icon-wrap">
              <Zap size={22} />
            </div>
            <h4>{t('process.step4Title')}</h4>
            <p>{t('process.step4Desc')}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="sc-section sc-faq-section">
        <div className="sc-section-header">
          <span className="sc-section-badge">{t('faq.badge')}</span>
          <h2 className="sc-section-title">{t('faq.title')}</h2>
          <p className="sc-section-subtitle">{t('faq.subtitle')}</p>
        </div>

        <div className="sc-faq-container">
          <div className="sc-faq-list">
            {faqItems.map((item, idx) => (
              <div 
                key={idx} 
                className={`sc-faq-item ${openFaqIndex === idx ? 'open' : ''}`}
              >
                <button 
                  type="button" 
                  className="sc-faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaqIndex === idx}
                >
                  <span className="sc-faq-q-text">{item.q}</span>
                  <ChevronDown size={20} className="sc-faq-chevron" />
                </button>
                {openFaqIndex === idx && (
                  <div className="sc-faq-answer-content">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

