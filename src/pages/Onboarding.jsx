import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import VeltrixorTypography from '../components/ui/VeltrixorTypography';
import VeltrixorButton from '../components/ui/VeltrixorButton';
import VeltrixorCard from '../components/ui/VeltrixorCard';
import './Onboarding.css';

export default function Onboarding() {
  const navigate = useNavigate();
  const { user, updateSubscriptions } = useAuth();

  const handleSelectProduct = (productId) => {
    updateSubscriptions(productId);
    navigate('/dashboard');
  };

  const displayName = user?.user_metadata?.full_name || user?.email || 'User';

  return (
    <div className="vt-onboarding">
      <div className="vt-onboarding-header">
        <VeltrixorTypography variant="h1">Welcome to Veltrixor, {displayName.split(' ')[0]}!</VeltrixorTypography>
        <VeltrixorTypography variant="p">
          Your global account has been created successfully. Choose your first product to get started.
        </VeltrixorTypography>
      </div>

      <div className="vt-onboarding-grid">
        <VeltrixorCard className="vt-onboarding-card">
          <div className="vt-onboarding-icon">📊</div>
          <VeltrixorTypography variant="h3">LaborSignal</VeltrixorTypography>
          <VeltrixorTypography variant="p">
            Strategic human capital management and workforce optimization.
          </VeltrixorTypography>
          <div style={{ marginTop: 'auto' }}>
            <VeltrixorButton 
              variant="primary" 
              onClick={() => handleSelectProduct('laborsignal')}
              style={{ width: '100%' }}
            >
              Activate LaborSignal
            </VeltrixorButton>
          </div>
        </VeltrixorCard>

        <VeltrixorCard className="vt-onboarding-card">
          <div className="vt-onboarding-icon">💰</div>
          <VeltrixorTypography variant="h3">PriceTrackr</VeltrixorTypography>
          <VeltrixorTypography variant="p">
            Real-time price monitoring and smart savings optimization.
          </VeltrixorTypography>
          <div style={{ marginTop: 'auto' }}>
            <VeltrixorButton 
              variant="primary" 
              onClick={() => handleSelectProduct('pricetrackr')}
              style={{ width: '100%', backgroundColor: '#00ff7f', color: '#0a0a0a' }}
            >
              Activate PriceTrackr
            </VeltrixorButton>
          </div>
        </VeltrixorCard>
      </div>

      <div style={{ marginTop: '4rem' }}>
        <VeltrixorButton variant="ghost" onClick={() => navigate('/dashboard')}>
          Set up later
        </VeltrixorButton>
      </div>
    </div>
  );
}
