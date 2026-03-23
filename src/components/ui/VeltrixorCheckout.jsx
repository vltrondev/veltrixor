import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNotification } from '../../context/NotificationContext';
import VeltrixorTypography from './VeltrixorTypography';
import VeltrixorButton from './VeltrixorButton';
import VeltrixorModal from './VeltrixorModal';
import './VeltrixorCheckout.css';

export default function VeltrixorCheckout({ isOpen, onClose, product, plan }) {
  const navigate = useNavigate();
  const { updateSubscriptions } = useAuth();
  const { showSuccess, showError } = useNotification();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '**** **** **** 4242',
    expiry: '12/28',
    cvv: '***',
    name: ''
  });

  const handlePay = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    try {
      await updateSubscriptions(product.id);
      setIsSuccess(true);
      setIsProcessing(false);
      showSuccess(`Successfully subscribed to ${product.name}`);
      
      // Close and redirect after 2 seconds on success
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        navigate('/dashboard');
      }, 2000);
    } catch (error) {
      console.error("Payment simulation error:", error);
      showError('Payment processing failed. Please try again.');
      setIsProcessing(false);
    }
  };

  if (!product || !plan) return null;

  return (
    <VeltrixorModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={isSuccess ? "Payment Successful" : "Secure Checkout"}
    >
      <div className="vt-checkout">
        {isSuccess ? (
          <div className="vt-checkout-success">
            <div className="vt-success-icon">✓</div>
            <VeltrixorTypography variant="h3">Subscription Activated!</VeltrixorTypography>
            <VeltrixorTypography variant="p" style={{ marginTop: '1rem' }}>
              Welcome to {product.name} {plan.name}. You are being redirected to your dashboard.
            </VeltrixorTypography>
          </div>
        ) : (
          <>
            <div className="vt-checkout-id-branding">
              <div className="vt-id-badge" style={{ marginBottom: 0 }}>
                <span style={{ fontSize: '1rem' }}>🆔</span> Veltrixor ID
              </div>
            </div>
            
            <div className="vt-checkout-summary">
              <div className="vt-summary-item">
                <span className="vt-summary-label">Product</span>
                <span className="vt-summary-value">{product.name}</span>
              </div>
              <div className="vt-summary-item">
                <span className="vt-summary-label">Plan</span>
                <span className="vt-summary-value">{plan.name}</span>
              </div>
              <div className="vt-summary-item vt-summary-total">
                <span className="vt-summary-label">Total</span>
                <span className="vt-summary-value">{plan.price}</span>
              </div>
            </div>

            <form className="vt-checkout-form" onSubmit={handlePay}>
              <div className="vt-form-group">
                <label>Cardholder Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  required 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="vt-form-group">
                <label>Card Number</label>
                <div className="vt-input-with-icon">
                  <input type="text" value={formData.cardNumber} readOnly />
                  <span className="vt-card-icon">💳</span>
                </div>
              </div>
              <div className="vt-form-row">
                <div className="vt-form-group">
                  <label>Expiry Date</label>
                  <input type="text" value={formData.expiry} readOnly />
                </div>
                <div className="vt-form-group">
                  <label>CVV</label>
                  <input type="password" value={formData.cvv} readOnly />
                </div>
              </div>

              <div className="vt-checkout-notice">
                <p>This is a secure, encrypted transaction. Your data is protected by Veltrixor Security.</p>
              </div>

              <VeltrixorButton 
                type="submit" 
                variant="primary" 
                style={{ width: '100%', marginTop: '1.5rem' }}
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing Securely...' : `Pay ${plan.price}`}
              </VeltrixorButton>
            </form>
          </>
        )}
      </div>
    </VeltrixorModal>
  );
}
