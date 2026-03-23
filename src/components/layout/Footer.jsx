import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="vt-footer">
      <div className="vt-footer-container">
        <div className="vt-footer-brand">
          <Link to="/" className="vt-footer-logo">VELTRIXOR</Link>
          <p className="vt-footer-desc">
            Building the future of business management with premium solutions.
          </p>
        </div>
        
        <div className="vt-footer-grid">
          <div className="vt-footer-column">
            <h4>Products</h4>
            <Link to="/laborsignal">LaborSignal</Link>
            <Link to="/pricetrackr">PriceTrackr</Link>
          </div>
          <div className="vt-footer-column">
            <h4>Company</h4>
            <a href="#">About us</a>
            <a href="#">Contact</a>
          </div>
          <div className="vt-footer-column">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
      
      <div className="vt-footer-bottom">
        <p>&copy; {new Date().getFullYear()} Veltrixor. All rights reserved.</p>
      </div>
    </footer>
  );
}
