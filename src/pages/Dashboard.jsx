import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import VeltrixorTypography from '../components/ui/VeltrixorTypography';
import VeltrixorButton from '../components/ui/VeltrixorButton';
import VeltrixorCard from '../components/ui/VeltrixorCard';
import VeltrixorSkeleton from '../components/ui/VeltrixorSkeleton';
import VeltrixorModal from '../components/ui/VeltrixorModal';
import VeltrixorEmptyState from '../components/ui/VeltrixorEmptyState';
import './Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [ssoProduct, setSsoProduct] = useState(null);

  const subscriptions = user?.user_metadata?.subscriptions || [];
  const hasSubscriptions = subscriptions.length > 0;
  const displayName = user?.user_metadata?.full_name || user?.email || 'User';

  const products = [
    {
      id: 'laborsignal',
      name: 'LaborSignal',
      description: 'Strategic human capital management and advanced workforce analytics.',
      icon: '📊',
      accentColor: 'var(--vt-electric-blue)',
      url: 'https://laborsignal.veltrixor.com',
      isActive: subscriptions.includes('laborsignal')
    },
    {
      id: 'pricetrackr',
      name: 'PriceTrackr',
      description: 'Real-time price monitoring and smart savings optimization.',
      icon: '💰',
      accentColor: '#00ff7f',
      url: 'https://pricetrackr.veltrixor.com',
      isActive: subscriptions.includes('pricetrackr')
    }
  ];

  const handleLaunch = (product) => {
    setSsoProduct(product);
    
    // Simulate SSO token generation and redirection
    setTimeout(() => {
      const token = 'vt_sso_' + Math.random().toString(36).substr(2, 12);
      window.open(`${product.url}?sso_token=${token}`, '_blank');
      setSsoProduct(null);
    }, 2500);
  };

  if (loading) {
    return (
      <div className="vt-dashboard">
        <div className="vt-dashboard-welcome">
          <VeltrixorSkeleton width="200px" height="2.5rem" style={{ marginBottom: '1rem' }} />
          <VeltrixorSkeleton width="400px" height="1.25rem" />
        </div>
        <div className="vt-launchpad-grid">
          {[1, 2].map(i => (
            <VeltrixorCard key={i} className="vt-launchpad-card">
              <VeltrixorSkeleton width="120px" height="1rem" style={{ marginBottom: '1.5rem' }} />
              <VeltrixorSkeleton width="60px" height="60px" variant="circle" style={{ marginBottom: '1.5rem' }} />
              <VeltrixorSkeleton width="70%" height="2rem" style={{ marginBottom: '1rem' }} />
              <VeltrixorSkeleton width="100%" height="4rem" style={{ marginBottom: '2rem' }} />
              <VeltrixorSkeleton width="100%" height="3rem" />
            </VeltrixorCard>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="vt-dashboard">
      <div className="vt-dashboard-welcome">
        <VeltrixorTypography variant="h2">
          Hello, {displayName.split(' ')[0]}
        </VeltrixorTypography>
        <VeltrixorTypography variant="p">
          {hasSubscriptions 
            ? 'Manage your subscriptions and access your professional tools from one place.' 
            : 'Welcome to your Veltrixor Launchpad. You don\'t have any active subscriptions yet.'}
        </VeltrixorTypography>
      </div>

      {!hasSubscriptions ? (
        <VeltrixorEmptyState 
          icon="🚀"
          title="Start your journey"
          description="Explore the Veltrixor ecosystem and activate the tools that will help you grow your business and optimize your finances."
          ctaText="Explore Products"
          onCtaClick={() => navigate('/')}
        />
      ) : (
        <div className="vt-launchpad-grid">
          {products.map((product) => (
            <VeltrixorCard key={product.id} className="vt-launchpad-card">
              <div className={`vt-product-status ${product.isActive ? 'status-active' : 'status-inactive'}`}>
                <div className="status-dot"></div>
                {product.isActive ? 'ACTIVE SUBSCRIPTION' : 'NO SUBSCRIPTION'}
              </div>

              <div className="vt-product-info">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{product.icon}</div>
                <VeltrixorTypography variant="h3">{product.name}</VeltrixorTypography>
                <VeltrixorTypography variant="p">
                  {product.description}
                </VeltrixorTypography>
              </div>

              <div className="vt-product-meta">
                <div className="vt-meta-item">
                  <span className="vt-meta-label">Current plan</span>
                  <span className="vt-meta-value">{product.isActive ? 'Professional' : 'None'}</span>
                </div>
                <div className="vt-meta-item" style={{ textAlign: 'right' }}>
                  <span className="vt-meta-label">Next billing</span>
                  <span className="vt-meta-value">{product.isActive ? 'Apr 12, 2026' : '--'}</span>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                {product.isActive ? (
                  <VeltrixorButton 
                    variant="primary" 
                    style={{ width: '100%', backgroundColor: product.accentColor }}
                    onClick={() => handleLaunch(product)}
                  >
                    Access Application
                  </VeltrixorButton>
                ) : (
                  <VeltrixorButton 
                    variant="secondary" 
                    style={{ width: '100%' }}
                    onClick={() => navigate(`/${product.id}`)}
                  >
                    View Plans & Activate
                  </VeltrixorButton>
                )}
              </div>
            </VeltrixorCard>
          ))}
        </div>
      )}

      <VeltrixorModal 
        isOpen={!!ssoProduct} 
        onClose={() => setSsoProduct(null)}
        title="Secure Ecosystem Access"
      >
        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <div className="vt-sso-loader">
            <div className="vt-sso-ring"></div>
            <div className="vt-sso-icon">{ssoProduct?.icon}</div>
          </div>
          <VeltrixorTypography variant="h3" style={{ marginTop: '2rem' }}>
            Authenticating with {ssoProduct?.name}...
          </VeltrixorTypography>
          <VeltrixorTypography variant="p" style={{ marginTop: '0.5rem', color: 'var(--vt-text-secondary)' }}>
            Establishing secure connection and generating session token.
          </VeltrixorTypography>
        </div>
      </VeltrixorModal>
    </div>
  );
}
