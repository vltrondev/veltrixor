import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  Boxes, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Layers, 
  Database, 
  BarChart3, 
  Calendar, 
  Lock 
} from 'lucide-react';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { getWhatsAppUrl } from '../config/contact';
import './Home.css';

export default function SoftwarePage() {
  const { t, isSpanish } = useLanguage();

  return (
    <div className="sc-home">
      {/* Page Hero */}
      <section className="sc-page-hero">
        <div className="sc-hero-glow sc-glow-cyan" />
        <div className="sc-hero-glow sc-glow-green" />
        <div className="sc-grid-pattern" />

        <div className="sc-page-hero-container">
          <span className="sc-pill-badge">
            <Boxes size={14} className="sc-badge-icon" />
            <span>{t('softwarePage.badge')}</span>
          </span>

          <h1 className="sc-page-hero-title">{t('softwarePage.title')}</h1>
          <p className="sc-page-hero-subtitle">{t('softwarePage.subtitle')}</p>

          <div className="sc-page-hero-actions">
            <a 
              href={getWhatsAppUrl('Hola Synapcraft, deseo consultar sobre el desarrollo de un software o sistema web a medida para mi empresa.')}
              target="_blank" 
              rel="noopener noreferrer" 
              className="sc-btn-whatsapp-primary"
            >
              <WhatsAppIcon size={20} />
              <span>{isSpanish ? 'Consultar Sistema a Medida' : 'Consult Custom Software'}</span>
            </a>
            <Link to="/contacto" className="sc-btn-secondary">
              <span>{isSpanish ? 'Agendar Reunión' : 'Schedule Meeting'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Software Capabilities Grid */}
      <section className="sc-section sc-services-section">
        <div className="sc-section-header">
          <span className="sc-section-badge">{isSpanish ? 'CAPACIDADES DE SOFTWARE' : 'SOFTWARE CAPABILITIES'}</span>
          <h2 className="sc-section-title">{isSpanish ? 'Módulos diseñados para tu flujo real' : 'Modules Tailored to Your Real Workflow'}</h2>
          <p className="sc-section-subtitle">
            {isSpanish 
              ? 'No forzamos tu empresa a adaptarse a un software rígido. Construimos la herramienta alrededor de tu proceso operativo.'
              : 'We never force your enterprise into rigid software. We engineer the system around your actual business operations.'}
          </p>
        </div>

        <div className="sc-services-grid">
          {t('softwarePage.features').map((feat, idx) => (
            <div key={idx} className="sc-service-card">
              <div className="sc-service-top">
                <div className="sc-service-icon-box">
                  {idx === 0 && <Layers size={26} />}
                  {idx === 1 && <BarChart3 size={26} />}
                  {idx === 2 && <Calendar size={26} />}
                  {idx === 3 && <Lock size={26} />}
                </div>
                <span className="sc-service-tag">{isSpanish ? 'NATIVO EN LA NUBE' : 'CLOUD NATIVE'}</span>
              </div>
              <h3 className="sc-service-heading">{feat.title}</h3>
              <p className="sc-service-description">{feat.desc}</p>
              <ul className="sc-service-checklist">
                <li>
                  <CheckCircle2 size={16} className="sc-check-icon" />
                  <span>{isSpanish ? 'Diseño intuitivo sin curvas difíciles' : 'Intuitive interface, fast learning curve'}</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="sc-check-icon" />
                  <span>{isSpanish ? 'Base de datos encriptada y respaldos diarios' : 'Encrypted databases & daily backups'}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Cloud Architecture Banner */}
      <section className="sc-section sc-backing-section">
        <div className="sc-backing-container">
          <div className="sc-backing-card">
            <div className="sc-backing-header-badge">
              <Cpu size={16} />
              <span>{isSpanish ? 'ARQUITECTURA & SEGURIDAD' : 'ARCHITECTURE & SECURITY'}</span>
            </div>

            <div className="sc-backing-grid">
              <div className="sc-backing-content">
                <h3 className="sc-backing-title">
                  {isSpanish ? 'Infraestructura robusta sin caídas' : 'Robust Cloud Architecture with Zero Downtime'}
                </h3>
                <p className="sc-backing-text">
                  {isSpanish 
                    ? 'Desarrollamos con tecnologías modernas (React, Node, PostgreSQL, Edge Cloud), garantizando que tu sistema soporte miles de operaciones sin ralentizarse y con propiedad 100% del código para tu empresa.'
                    : 'We engineer using modern technology stacks (React, Node, PostgreSQL, Edge Cloud), ensuring your system processes thousands of transactions with high reliability and full IP ownership.'}
                </p>

                <div className="sc-backing-cta-row">
                  <a 
                    href={getWhatsAppUrl('Hola Synapcraft, quiero una asesoría técnica para un software empresarial.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sc-backing-btn-primary"
                  >
                    <span>{isSpanish ? 'Hablar con un Ingeniero' : 'Talk with an Engineer'}</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>

              <div className="sc-backing-visual">
                <div className="sc-clinic-card-mockup">
                  <div className="sc-clinic-mockup-header">
                    <strong>Enterprise Stack</strong>
                    <span className="sc-clinic-status-pill">Active Cloud</span>
                  </div>
                  <div className="sc-clinic-mockup-stats">
                    <div className="sc-clinic-stat-item">
                      <Zap size={18} className="sc-stat-icon-blue" />
                      <div>
                        <span className="sc-stat-num">99.99%</span>
                        <span className="sc-stat-lbl">Uptime SLA</span>
                      </div>
                    </div>
                    <div className="sc-clinic-stat-item">
                      <ShieldCheck size={18} className="sc-stat-icon-green" />
                      <div>
                        <span className="sc-stat-num">256-bit</span>
                        <span className="sc-stat-lbl">AES Encryption</span>
                      </div>
                    </div>
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

