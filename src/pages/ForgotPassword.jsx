import { useState } from 'react';
import { Link } from 'react-router-dom';
import VeltrixorTypography from '../components/ui/VeltrixorTypography';
import VeltrixorButton from '../components/ui/VeltrixorButton';
import VeltrixorCard from '../components/ui/VeltrixorCard';
import './Auth.css';

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email');
      return;
    }

    setError('');
    setLoading(true);
    // Simulation
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="vt-auth-page">
      <VeltrixorCard className="vt-auth-card">
        <div className="vt-auth-header">
          <VeltrixorTypography variant="h2">Recover Access</VeltrixorTypography>
          <VeltrixorTypography variant="p">We'll send you recovery instructions</VeltrixorTypography>
        </div>

        {!submitted ? (
          <form className="vt-auth-form" onSubmit={handleSubmit}>
            <div className="vt-form-group">
              <label className="vt-input-label">Account email</label>
              <input 
                className={`vt-input ${error ? 'vt-input-error' : ''}`}
                type="email" 
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <span className="vt-error-text">{error}</span>}
            </div>

            <VeltrixorButton 
              variant="primary" 
              type="submit" 
              disabled={loading}
              style={{ width: '100%', marginTop: '1rem' }}
            >
              {loading ? 'Sending...' : 'Send Instructions'}
            </VeltrixorButton>

            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <Link to="/login" className="vt-auth-link">Back to sign in</Link>
            </div>
          </form>
        ) : (
          <div style={{ textAlign: 'center', animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✉️</div>
            <VeltrixorTypography variant="h3">Email Sent!</VeltrixorTypography>
            <VeltrixorTypography variant="p" style={{ marginBottom: '2rem' }}>
              If the email <strong>{email}</strong> is registered, you will receive a link to reset your password in a few minutes.
            </VeltrixorTypography>
            <Link to="/login">
              <VeltrixorButton variant="secondary" style={{ width: '100%' }}>Back to Login</VeltrixorButton>
            </Link>
          </div>
        )}
      </VeltrixorCard>
    </div>
  );
}
