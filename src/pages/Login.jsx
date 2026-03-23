import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import VeltrixorTypography from '../components/ui/VeltrixorTypography';
import VeltrixorButton from '../components/ui/VeltrixorButton';
import VeltrixorCard from '../components/ui/VeltrixorCard';
import './Auth.css';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { showSuccess, showError } = useNotification();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Minimum 6 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await login(formData.email, formData.password);
      showSuccess('Successfully signed in to Veltrixor ID');
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      showError(err.message || 'Failed to sign in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="vt-auth-page">
      <VeltrixorCard className="vt-auth-card">
        <div className="vt-auth-header">
          <div className="vt-id-badge">
            <span style={{ fontSize: '1rem' }}>🆔</span> Veltrixor ID
          </div>
          <VeltrixorTypography variant="h2">Welcome Back</VeltrixorTypography>
          <VeltrixorTypography variant="p">Access your global ecosystem account</VeltrixorTypography>
        </div>

        <form className="vt-auth-form" onSubmit={handleSubmit}>
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

          <div className="vt-auth-options">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password" style={{ color: 'var(--vt-electric-blue)', textDecoration: 'none' }}>
              Forgot your password?
            </Link>
          </div>

          <VeltrixorButton 
            variant="primary" 
            type="submit" 
            disabled={loading}
            style={{ width: '100%', marginTop: '1rem' }}
          >
            {loading ? (
              <div className="vt-button-spinner"></div>
            ) : 'Sign In'}
          </VeltrixorButton>
        </form>

        <div className="vt-divider">or continue with</div>

        <div className="vt-social-buttons">
          <button className="vt-social-btn" type="button">
             G
          </button>
          <button className="vt-social-btn" type="button">
             🐙
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.875rem' }}>
          <span style={{ color: 'var(--vt-text-secondary)' }}>Don't have an account? </span>
          <Link to="/register" className="vt-auth-link">Sign up now</Link>
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
