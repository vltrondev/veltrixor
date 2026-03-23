import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import useReveal from '../hooks/useReveal';
import VeltrixorTypography from '../components/ui/VeltrixorTypography';
import VeltrixorButton from '../components/ui/VeltrixorButton';
import VeltrixorCard from '../components/ui/VeltrixorCard';
import VeltrixorCheckout from '../components/ui/VeltrixorCheckout';
import './PriceTrackrInfo.css';

export default function PriceTrackrInfo() {
  useReveal();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isAnnual, setIsAnnual] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const product = {
    id: 'pricetrackr',
    name: 'PriceTrackr'
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
    <div className="pt-page">
      {/* Hero */}
      <section className="pt-hero">
        <VeltrixorTypography variant="h1" style={{ color: '#00ff7f' }}>PriceTrackr</VeltrixorTypography>
        <VeltrixorTypography variant="h2">Master Smart Savings</VeltrixorTypography>
        <VeltrixorTypography variant="p" style={{ maxWidth: '800px', margin: '1rem auto' }}>
          The ultimate tool for the savvy shopper. Monitor prices in real-time, receive alerts on historical drops, 
          and optimize your personal budget with advanced analytics.
        </VeltrixorTypography>
        {!user ? (
          <VeltrixorButton 
            variant="primary" 
            style={{ marginTop: '2rem', backgroundColor: '#00ff7f', color: '#0a0a0a', boxShadow: '0 0 15px rgba(0, 255, 127, 0.3)' }}
            onClick={() => handlePlanSelect({ name: 'Premium Plan', price: isAnnual ? '$7.99/mo' : '$9.99/mo' })}
          >
            Start Saving
          </VeltrixorButton>
        ) : (
          <VeltrixorButton 
            variant="primary" 
            style={{ marginTop: '2rem', backgroundColor: '#00ff7f', color: '#0a0a0a', boxShadow: '0 0 15px rgba(0, 255, 127, 0.3)' }}
            onClick={() => navigate('/dashboard')}
          >
            Go to PriceTrackr
          </VeltrixorButton>
        )}
      </section>

      {/* Features highlight */}
      <section className="pt-section">
        <div className="pt-feature-grid">
          <div className="pt-feature-card reveal">
            <div className="pt-icon-wrapper">🔔</div>
            <VeltrixorTypography variant="h3">Proactive Alerts</VeltrixorTypography>
            <VeltrixorTypography variant="p">Receive immediate notifications when the product you want drops in price.</VeltrixorTypography>
          </div>
          <div className="pt-feature-card reveal">
            <div className="pt-icon-wrapper">📉</div>
            <VeltrixorTypography variant="h3">Price History</VeltrixorTypography>
            <VeltrixorTypography variant="p">Analyze price trends over the last 12 months to buy at the perfect time.</VeltrixorTypography>
          </div>
          <div className="pt-feature-card reveal">
            <div className="pt-icon-wrapper">🛒</div>
            <VeltrixorTypography variant="h3">Smart Cart</VeltrixorTypography>
            <VeltrixorTypography variant="p">Organize your future purchases and let our system find the best discounts.</VeltrixorTypography>
          </div>
        </div>
      </section>

      {/* Pricing with Toggle */}
      <section className="pt-section" style={{ textAlign: 'center', backgroundColor: 'rgba(0, 255, 127, 0.02)' }}>
        <VeltrixorTypography variant="h2" className="reveal">Choose Your Savings Plan</VeltrixorTypography>
        
        <div className="pt-pricing-toggle reveal">
          <span className={`pt-toggle-label ${!isAnnual ? 'active' : ''}`}>Monthly</span>
          <label className="pt-switch">
            <input type="checkbox" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
            <span className="pt-slider"></span>
          </label>
          <span className={`pt-toggle-label ${isAnnual ? 'active' : ''}`}>Annual <span style={{ color: '#00ff7f' }}>(Save 20%)</span></span>
        </div>

        <div className="pt-pricing-grid">
          <div className="reveal">
            <VeltrixorCard className="vt-pricing-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <VeltrixorTypography variant="h3">Free Plan</VeltrixorTypography>
              <VeltrixorTypography variant="p">For occasional shoppers.</VeltrixorTypography>
              <div className="pt-price-value">$0<span>/forever</span></div>
              <ul className="pt-list">
                <li className="pt-list-item"><span className="pt-check">✓</span> Up to 5 products</li>
                <li className="pt-list-item"><span className="pt-check">✓</span> Email alerts</li>
                <li className="pt-list-item"><span className="pt-check">✓</span> 30-day history</li>
              </ul>
              <VeltrixorButton 
                variant="secondary" 
                style={{ width: '100%', marginTop: 'auto' }}
                onClick={() => handlePlanSelect({ name: 'Free Plan', price: '$0/forever' })}
              >
                Start for Free
              </VeltrixorButton>
            </VeltrixorCard>
          </div>

          <div className="reveal">
            <VeltrixorCard className="vt-pricing-card pt-card-featured" style={{ borderColor: '#00ff7f', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#00ff7f', color: '#0a0a0a', padding: '2px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '800' }}>RECOMMENDED</div>
              <VeltrixorTypography variant="h3">Premium Plan</VeltrixorTypography>
              <VeltrixorTypography variant="p">Unlimited and advanced savings.</VeltrixorTypography>
              <div className="pt-price-value">
                {isAnnual ? '$7.99' : '$9.99'}<span>/mo</span>
              </div>
              <ul className="pt-list">
                <li className="pt-list-item"><span className="pt-check">✓</span> Unlimited products</li>
                <li className="pt-list-item"><span className="pt-check">✓</span> Push & SMS alerts</li>
                <li className="pt-list-item"><span className="pt-check">✓</span> Full 1-year history</li>
                <li className="pt-list-item"><span className="pt-check">✓</span> Multi-store comparison</li>
              </ul>
              <VeltrixorButton 
                variant="primary" 
                style={{ width: '100%', backgroundColor: '#00ff7f', color: '#0a0a0a', marginTop: 'auto' }}
                onClick={() => handlePlanSelect({ name: 'Premium Plan', price: isAnnual ? '$7.99/mo' : '$9.99/mo' })}
              >
                Get Premium
              </VeltrixorButton>
            </VeltrixorCard>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pt-section" style={{ textAlign: 'center', padding: '10rem 2rem' }}>
        <div className="reveal">
          <VeltrixorTypography variant="h2" style={{ marginBottom: '2rem' }}>
            {user ? 'Start saving with your PriceTrackr tools' : 'Start saving today with PriceTrackr'}
          </VeltrixorTypography>
          {!user ? (
            <VeltrixorButton 
              variant="primary" 
              style={{ backgroundColor: '#00ff7f', color: '#0a0a0a' }}
              onClick={() => handlePlanSelect({ name: 'Free Plan', price: '$0' })}
            >
              Create Free Account
            </VeltrixorButton>
          ) : (
            <VeltrixorButton 
              variant="primary" 
              style={{ backgroundColor: '#00ff7f', color: '#0a0a0a' }}
              onClick={() => navigate('/dashboard')}
            >
              Go to PriceTrackr
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
