import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import VeltrixorTypography from '../components/ui/VeltrixorTypography';
import VeltrixorButton from '../components/ui/VeltrixorButton';
import VeltrixorCard from '../components/ui/VeltrixorCard';
import './Auth.css';

export default function Register() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const { showSuccess, showError } = useNotification();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ 
    fullName: '', 
    email: '', 
    password: '', 
    confirmPassword: '',
    terms: false
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Minimum 6 characters';
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.terms) newErrors.terms = 'You must accept the terms';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const data = await signup(formData.email, formData.password, formData.fullName);
      // Supabase might require email confirmation
      if (data.session) {
        showSuccess('Account created successfully!');
        navigate('/onboarding');
      } else {
        setSuccess(true);
        showSuccess('Confirmation email sent');
      }
    } catch (err) {
      console.error(err);
      showError(err.message || 'Failed to register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="vt-auth-page">
        <VeltrixorCard className="vt-auth-card">
          <div className="vt-auth-header">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📧</div>
            <VeltrixorTypography variant="h2">Almost there!</VeltrixorTypography>
            <VeltrixorTypography variant="p">
              We've sent a confirmation link to <strong>{formData.email}</strong>. 
              Please check your email to activate your account.
            </VeltrixorTypography>
          </div>
          <Link to="/login">
            <VeltrixorButton variant="secondary" style={{ width: '100%' }}>Back to Login</VeltrixorButton>
          </Link>
        </VeltrixorCard>
      </div>
    );
  }

  return (
    <div className="vt-auth-page">
      <VeltrixorCard className="vt-auth-card">
        <div className="vt-auth-header">
          <div className="vt-id-badge">
            <span style={{ fontSize: '1rem' }}>🆔</span> Veltrixor ID
          </div>
          <VeltrixorTypography variant="h2">Create Your Account</VeltrixorTypography>
          <VeltrixorTypography variant="p">Join the Veltrixor global ecosystem</VeltrixorTypography>
        </div>

        <form className="vt-auth-form" onSubmit={handleSubmit}>
          <div className="vt-form-group">
            <label className="vt-input-label">Full Name</label>
            <input 
              className={`vt-input ${errors.fullName ? 'vt-input-error' : ''}`}
              type="text" 
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
            {errors.fullName && <span className="vt-error-text">{errors.fullName}</span>}
          </div>

          <div className="vt-form-group">
            <label className="vt-input-label">Corporate Email</label>
            <input 
              className={`vt-input ${errors.email ? 'vt-input-error' : ''}`}
              type="email" 
              placeholder="name@company.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            {errors.email && <span className="vt-error-text">{errors.email}</span>}
          </div>

          <div className="vt-form-group">
            <label className="vt-input-label">Password</label>
            <input 
              className={`vt-input ${errors.password ? 'vt-input-error' : ''}`}
              type="password" 
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            {errors.password && <span className="vt-error-text">{errors.password}</span>}
          </div>

          <div className="vt-form-group">
            <label className="vt-input-label">Confirm Password</label>
            <input 
              className={`vt-input ${errors.confirmPassword ? 'vt-input-error' : ''}`}
              type="password" 
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
            {errors.confirmPassword && <span className="vt-error-text">{errors.confirmPassword}</span>}
          </div>

          <div className="vt-form-group">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem' }}>
              <input 
                type="checkbox" 
                checked={formData.terms}
                onChange={(e) => setFormData({...formData, terms: e.target.checked})}
              /> 
              I agree to Veltrixor's terms and conditions
            </label>
            {errors.terms && <span className="vt-error-text">{errors.terms}</span>}
          </div>

          <VeltrixorButton 
            variant="primary" 
            type="submit" 
            disabled={loading}
            style={{ width: '100%', marginTop: '1rem' }}
          >
            {loading ? (
              <div className="vt-button-spinner"></div>
            ) : 'Sign Up'}
          </VeltrixorButton>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.875rem' }}>
          <span style={{ color: 'var(--vt-text-secondary)' }}>Already have an account? </span>
          <Link to="/login" className="vt-auth-link">Sign In</Link>
        </div>
      </VeltrixorCard>
      <style>{`
        .vt-button-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
