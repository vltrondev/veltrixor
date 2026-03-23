import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import VeltrixorButton from '../ui/VeltrixorButton';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (err) {
      console.error('Failed to logout:', err);
    }
  };

  const isAuthPage = ['/login', '/register', '/forgot-password'].includes(location.pathname);

  return (
    <nav className={`vt-navbar ${isScrolled ? 'vt-navbar-scrolled' : ''} ${isMenuOpen ? 'vt-navbar-open' : ''}`}>
      <div className="vt-navbar-container">
        <Link to="/" className="vt-navbar-logo">
          VELTRIXOR
        </Link>

        {!isAuthPage && (
          <div className={`vt-navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/laborsignal" className="vt-navbar-link">LaborSignal</Link>
            <Link to="/pricetrackr" className="vt-navbar-link">PriceTrackr</Link>
            
            {user ? (
              <div className="vt-navbar-mobile-only">
                <Link to="/dashboard" className="vt-navbar-link">Dashboard</Link>
                <Link to="/profile" className="vt-navbar-link">Profile Settings</Link>
                <VeltrixorButton 
                  variant="secondary" 
                  style={{ width: '100%', marginTop: '1rem' }}
                  onClick={handleLogout}
                >
                  Sign Out
                </VeltrixorButton>
              </div>
            ) : (
              <div className="vt-navbar-mobile-only">
                <Link to="/login">
                  <VeltrixorButton variant="ghost" style={{ width: '100%' }}>Sign In</VeltrixorButton>
                </Link>
                <Link to="/register">
                  <VeltrixorButton variant="primary" style={{ width: '100%' }}>Get Started</VeltrixorButton>
                </Link>
              </div>
            )}
          </div>
        )}

        <div className="vt-navbar-actions">
          {isAuthPage ? (
            <Link to="/">
              <VeltrixorButton variant="ghost">Back</VeltrixorButton>
            </Link>
          ) : (
            <>
              <div className="vt-navbar-desktop-only">
                {user ? (
                  <div className="vt-navbar-user-actions">
                    <Link to="/dashboard" className="vt-nav-icon-link" title="Launchpad">
                      <span className="vt-nav-icon">🚀</span>
                    </Link>
                    <Link to="/profile" className="vt-nav-icon-link" title="Profile">
                      <span className="vt-nav-icon">👤</span>
                    </Link>
                    <VeltrixorButton variant="ghost" size="small" onClick={handleLogout}>
                      Log Out
                    </VeltrixorButton>
                  </div>
                ) : (
                  <>
                    <Link to="/login">
                      <VeltrixorButton variant="ghost">Sign In</VeltrixorButton>
                    </Link>
                    <Link to="/register">
                      <VeltrixorButton variant="primary">Get Started</VeltrixorButton>
                    </Link>
                  </>
                )}
              </div>
              
              <button 
                className={`vt-hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
