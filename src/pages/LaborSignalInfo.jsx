import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import useReveal from '../hooks/useReveal';
import VeltrixorTypography from '../components/ui/VeltrixorTypography';
import VeltrixorButton from '../components/ui/VeltrixorButton';
import VeltrixorCard from '../components/ui/VeltrixorCard';
import VeltrixorCheckout from '../components/ui/VeltrixorCheckout';
import './LaborSignalInfo.css';

export default function LaborSignalInfo() {
  useReveal();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const product = {
    id: 'laborsignal',
    name: 'LaborSignal'
  };

  const handlePlanSelect = (plan) => {
    if (user) {
      setSelectedPlan(plan);
      setIsCheckoutOpen(true);
    } else {
      navigate('/register');
    }
  };

  return (
    <div className="ls-page">
      {/* Hero */}
      <section className="ls-hero">
        <VeltrixorTypography variant="h1" style={{ color: 'var(--vt-electric-blue)' }}>LaborSignal</VeltrixorTypography>
        <VeltrixorTypography variant="h2">Layoff & Hiring Impact Intelligence</VeltrixorTypography>
        <VeltrixorTypography variant="p" style={{ maxWidth: '800px', margin: '1rem auto' }}>
          Monitor the global workforce in real-time. LaborSignal provides a comprehensive dashboard 
          tracking layoff impacts from individual events to thousands, while simultaneously 
          identifying who is hiring and where the opportunities are.
        </VeltrixorTypography>
        {!user ? (
          <VeltrixorButton 
            variant="primary" 
            style={{ marginTop: '2rem' }}
            onClick={() => handlePlanSelect({ name: 'Pro Plan', price: '$15/mo' })}
          >
            Access Workforce Insights
          </VeltrixorButton>
        ) : (
          <VeltrixorButton 
            variant="primary" 
            style={{ marginTop: '2rem' }}
            onClick={() => navigate('/dashboard')}
          >
            Go to LaborSignal
          </VeltrixorButton>
        )}
      </section>

      {/* Benefits */}
      <section className="ls-section">
        <VeltrixorTypography variant="h2" style={{ textAlign: 'center' }} className="reveal">Why LaborSignal?</VeltrixorTypography>
        <div className="ls-grid">
          <div className="reveal">
            <VeltrixorCard>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📉</div>
              <VeltrixorTypography variant="h3">Layoff Tracking</VeltrixorTypography>
              <VeltrixorTypography variant="p">
                Real-time monitoring of downsizing events. See exactly which companies are reducing staff and at what scale.
              </VeltrixorTypography>
            </VeltrixorCard>
          </div>
          <div className="reveal">
            <VeltrixorCard>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📈</div>
              <VeltrixorTypography variant="h3">Hiring Intelligence</VeltrixorTypography>
              <VeltrixorTypography variant="p">
                Identify growing companies. Track vacancies, vacancy counts, and direct links to hiring announcements.
              </VeltrixorTypography>
            </VeltrixorCard>
          </div>
          <div className="reveal">
            <VeltrixorCard>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔍</div>
              <VeltrixorTypography variant="h3">Granular Filters</VeltrixorTypography>
              <VeltrixorTypography variant="p">
                Filter insights by country, state, or labor sector to find the most relevant workforce data for your needs.
              </VeltrixorTypography>
            </VeltrixorCard>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="ls-section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '8rem 2rem' }}>
        <VeltrixorTypography variant="h2" style={{ textAlign: 'center' }} className="reveal">Ecosystem Plans</VeltrixorTypography>
        <div className="ls-pricing-grid">
          <div className="reveal">
            <VeltrixorCard className="vt-pricing-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <VeltrixorTypography variant="h3">Free Plan</VeltrixorTypography>
              <VeltrixorTypography variant="p">Basic workforce monitoring.</VeltrixorTypography>
              <div className="ls-price">$0<span>/mo</span></div>
              <ul className="ls-feature-list">
                <li className="ls-feature-item"><span className="ls-check">✓</span> Layoff Impacts Dashboard</li>
                <li className="ls-feature-item"><span className="ls-check">✓</span> Corporate Layoff Monitoring</li>
              </ul>
              <VeltrixorButton 
                variant="secondary" 
                style={{ width: '100%', marginTop: 'auto' }}
                onClick={() => handlePlanSelect({ name: 'Free Plan', price: '$0/mo' })}
              >
                Get Started
              </VeltrixorButton>
            </VeltrixorCard>
          </div>

          <div className="reveal">
            <VeltrixorCard className="ls-card-featured" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div className="ls-badge">RECOMMENDED</div>
              <VeltrixorTypography variant="h3">Pro Plan</VeltrixorTypography>
              <VeltrixorTypography variant="p">Full market intelligence.</VeltrixorTypography>
              <div className="ls-price">$15<span>/mo</span></div>
              <ul className="ls-feature-list">
                <li className="ls-feature-item"><span className="ls-check">✓</span> Everything in Free</li>
                <li className="ls-feature-item"><span className="ls-check">✓</span> Full Hiring Dashboard</li>
                <li className="ls-feature-item"><span className="ls-check">✓</span> Advanced Sector & Region Filters</li>
                <li className="ls-feature-item"><span className="ls-check">✓</span> Real-time App Notifications</li>
                <li className="ls-feature-item"><span className="ls-check">✓</span> Personalized Email Alerts</li>
              </ul>
              <VeltrixorButton 
                variant="primary" 
                style={{ width: '100%', marginTop: 'auto' }}
                onClick={() => handlePlanSelect({ name: 'Pro Plan', price: '$15/mo' })}
              >
                Upgrade to Pro
              </VeltrixorButton>
            </VeltrixorCard>
          </div>

          <div className="reveal">
            <VeltrixorCard className="vt-pricing-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <VeltrixorTypography variant="h3">Enterprise</VeltrixorTypography>
              <VeltrixorTypography variant="p">For data-driven teams.</VeltrixorTypography>
              <div className="ls-price">$300<span>/mo</span></div>
              <ul className="ls-feature-list">
                <li className="ls-feature-item"><span className="ls-check">✓</span> Everything in Pro</li>
                <li className="ls-feature-item"><span className="ls-check">✓</span> Full Data Export (CSV/JSON)</li>
                <li className="ls-feature-item"><span className="ls-check">✓</span> Priority Support</li>
              </ul>
              <VeltrixorButton 
                variant="secondary" 
                style={{ width: '100%', marginTop: 'auto' }}
                onClick={() => handlePlanSelect({ name: 'Enterprise Plan', price: '$300/mo' })}
              >
                Contact Sales
              </VeltrixorButton>
            </VeltrixorCard>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ls-section">
        <VeltrixorTypography variant="h2" style={{ textAlign: 'center' }} className="reveal">Frequently Asked Questions</VeltrixorTypography>
        <div className="ls-faq-container">
          <div className="ls-faq-item reveal">
            <VeltrixorTypography variant="h3">How often is the data updated?</VeltrixorTypography>
            <VeltrixorTypography variant="p">
              Our workforce datasets are updated in real-time. Layoff impacts and hiring announcements 
              are processed as they are made public or reported through our network.
            </VeltrixorTypography>
          </div>
          <div className="ls-faq-item reveal">
            <VeltrixorTypography variant="h3">Can I track specific companies?</VeltrixorTypography>
            <VeltrixorTypography variant="p">
              Yes, with a Pro account you can set up personalized alerts for specific sectors or countries 
              to ensure you never miss a significant workforce shift.
            </VeltrixorTypography>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="ls-section" style={{ textAlign: 'center', padding: '10rem 2rem' }}>
        <div className="reveal">
          <VeltrixorTypography variant="h2" style={{ marginBottom: '2rem' }}>
            {user ? 'Empower your recruitment strategy now' : 'Ready to master workforce intelligence?'}
          </VeltrixorTypography>
          {!user ? (
            <VeltrixorButton 
              variant="primary" 
              onClick={() => handlePlanSelect({ name: 'Pro Plan', price: '$15/mo' })}
            >
              Get Started with LaborSignal
            </VeltrixorButton>
          ) : (
            <VeltrixorButton 
              variant="primary" 
              onClick={() => navigate('/dashboard')}
            >
              Go to LaborSignal
            </VeltrixorButton>
          )}
        </div>
      </section>

      <VeltrixorCheckout 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        product={product} 
        plan={selectedPlan} 
      />
    </div>
  );
}
