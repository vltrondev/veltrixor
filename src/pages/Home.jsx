import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import useReveal from '../hooks/useReveal';
import VeltrixorTypography from '../components/ui/VeltrixorTypography';
import VeltrixorButton from '../components/ui/VeltrixorButton';
import VeltrixorCard from '../components/ui/VeltrixorCard';
import './Home.css';

export default function Home() {
  useReveal();
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="vt-home">
      {/* Hero Section */}
      <section className="vt-hero">
        <VeltrixorTypography variant="h1" className="vt-hero-title">
          Evolve Your Life <br /> Ecosystem & Business
        </VeltrixorTypography>
        <VeltrixorTypography variant="p" className="vt-hero-subtitle">
          Veltrixor is the central platform that unifies talent management and smart savings. 
          One single account to master all your professional tools.
        </VeltrixorTypography>
        <div className="vt-hero-actions">
          <VeltrixorButton variant="primary" onClick={() => document.getElementById('ecosystem').scrollIntoView({ behavior: 'smooth' })}>
            Explore Ecosystem
          </VeltrixorButton>
          {!user ? (
            <Link to="/register">
              <VeltrixorButton variant="secondary">Create Global Account</VeltrixorButton>
            </Link>
          ) : (
            <VeltrixorButton variant="secondary" onClick={() => navigate('/dashboard')}>
              Go to Dashboard
            </VeltrixorButton>
          )}
        </div>
      </section>

      {/* Products Showcase */}
      <section id="ecosystem" className="vt-section">
        <div className="vt-section-header reveal">
          <VeltrixorTypography variant="h2">Our Solutions</VeltrixorTypography>
          <VeltrixorTypography variant="p">
            Tools designed to maximize efficiency and growth.
          </VeltrixorTypography>
        </div>

        <div className="vt-product-grid">
          <div className="reveal">
            <VeltrixorCard>
              <div className="vt-product-card-content">
                <div className="vt-product-icon">📊</div>
                <VeltrixorTypography variant="h3">LaborSignal</VeltrixorTypography>
                <VeltrixorTypography variant="p">
                  Strategic human capital management. Make data-driven decisions on hiring and workforce optimization.
                </VeltrixorTypography>
                <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                  <Link to="/laborsignal" style={{ flex: 1 }}>
                    <VeltrixorButton variant="secondary" style={{ width: '100%' }}>Learn More</VeltrixorButton>
                  </Link>
                  {user && (
                    <VeltrixorButton variant="primary" style={{ flex: 1 }} onClick={() => navigate('/dashboard')}>
                      Go to App
                    </VeltrixorButton>
                  )}
                </div>
              </div>
            </VeltrixorCard>
          </div>

          <div className="reveal">
            <VeltrixorCard>
              <div className="vt-product-card-content">
                <div className="vt-product-icon">💰</div>
                <VeltrixorTypography variant="h3">PriceTrackr</VeltrixorTypography>
                <VeltrixorTypography variant="p">
                  Proactive price monitoring and smart savings. Maximize your budget with real-time alerts.
                </VeltrixorTypography>
                <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                  <Link to="/pricetrackr" style={{ flex: 1 }}>
                    <VeltrixorButton variant="secondary" style={{ width: '100%' }}>Learn More</VeltrixorButton>
                  </Link>
                  {user && (
                    <VeltrixorButton variant="primary" style={{ flex: 1, backgroundColor: '#00ff7f', color: '#0a0a0a' }} onClick={() => navigate('/dashboard')}>
                      Go to App
                    </VeltrixorButton>
                  )}
                </div>
              </div>
            </VeltrixorCard>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="vt-section">
        <div className="vt-section-header reveal">
          <VeltrixorTypography variant="h2">The Veltrixor Edge</VeltrixorTypography>
        </div>
        
        <div className="vt-benefits-grid">
          <div className="vt-benefit-item reveal">
            <VeltrixorTypography variant="span" style={{ color: 'var(--vt-electric-blue)', fontSize: '2rem' }}>01</VeltrixorTypography>
            <VeltrixorTypography variant="h3">Single Sign-On (SSO)</VeltrixorTypography>
            <VeltrixorTypography variant="p">
              Access all current and future Veltrixor products with a single digital identity.
            </VeltrixorTypography>
          </div>
          <div className="vt-benefit-item reveal">
            <VeltrixorTypography variant="span" style={{ color: 'var(--vt-electric-blue)', fontSize: '2rem' }}>02</VeltrixorTypography>
            <VeltrixorTypography variant="h3">Premium Design</VeltrixorTypography>
            <VeltrixorTypography variant="p">
              Modern and fluid interfaces designed to reduce friction and enhance productivity.
            </VeltrixorTypography>
          </div>
          <div className="vt-benefit-item reveal">
            <VeltrixorTypography variant="span" style={{ color: 'var(--vt-electric-blue)', fontSize: '2rem' }}>03</VeltrixorTypography>
            <VeltrixorTypography variant="h3">Global Security</VeltrixorTypography>
            <VeltrixorTypography variant="p">
              Your data is protected by enterprise-grade security standards across the entire network.
            </VeltrixorTypography>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="vt-final-cta">
        <div className="reveal">
          <VeltrixorTypography variant="h2" style={{ marginBottom: '2rem' }}>
            {user ? 'Explore your active tools' : 'Ready to transform your workflow?'}
          </VeltrixorTypography>
          {!user ? (
            <Link to="/register">
              <VeltrixorButton variant="primary">Start Now For Free</VeltrixorButton>
            </Link>
          ) : (
            <VeltrixorButton variant="primary" onClick={() => navigate('/dashboard')}>
              Go to Launchpad
            </VeltrixorButton>
          )}
        </div>
      </section>
    </div>
  );
}
