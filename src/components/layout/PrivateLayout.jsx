import { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import VeltrixorButton from '../ui/VeltrixorButton';
import './PrivateLayout.css';

export default function PrivateLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  // Close sidebar on route change
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  const displayName = user?.user_metadata?.full_name || user?.email || 'User';

  return (
    <div className="vt-private-layout">
      {/* Mobile Header */}
      <header className="vt-private-mobile-nav">
        <button 
          className="vt-menu-trigger" 
          onClick={() => setIsSidebarOpen(true)}
        >
          ☰
        </button>
        <Link to="/dashboard" className="vt-mobile-logo">VELTRIXOR</Link>
        <div className="vt-mobile-user-avatar">
          {displayName.charAt(0).toUpperCase()}
        </div>
      </header>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="vt-sidebar-overlay" 
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <aside className={`vt-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="vt-sidebar-header">
          <Link to="/dashboard" className="vt-sidebar-logo">VELTRIXOR</Link>
          <button className="vt-sidebar-close" onClick={() => setIsSidebarOpen(false)}>&times;</button>
        </div>
        
        <nav className="vt-sidebar-nav">
          <Link to="/dashboard" className={`vt-sidebar-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>
            Launchpad
          </Link>
          <Link to="/profile" className={`vt-sidebar-link ${location.pathname === '/profile' ? 'active' : ''}`}>
            My Profile
          </Link>
          <div className="vt-sidebar-divider">PRODUCTS</div>
          <Link to="/laborsignal" className="vt-sidebar-link">LaborSignal</Link>
          <Link to="/pricetrackr" className="vt-sidebar-link">PriceTrackr</Link>
        </nav>

        <div className="vt-sidebar-footer">
          <div className="vt-user-badge">
            <div className="vt-user-avatar">
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div className="vt-user-info">
              <span className="vt-user-name">{displayName}</span>
            </div>
          </div>
          <VeltrixorButton 
            variant="ghost" 
            onClick={handleLogout}
            style={{ width: '100%', marginTop: '1rem' }}
          >
            Sign Out
          </VeltrixorButton>
        </div>
      </aside>

      <main className="vt-private-content">
        <header className="vt-dashboard-header">
          <h2>
            {location.pathname === '/dashboard' ? 'Launchpad' : 
             location.pathname === '/profile' ? 'My Profile' : 
             location.pathname === '/onboarding' ? 'Welcome' : 'Veltrixor'}
          </h2>
        </header>
        <div className="vt-dashboard-body">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
