import { Link } from 'react-router-dom';
import VeltrixorTypography from '../components/ui/VeltrixorTypography';
import VeltrixorButton from '../components/ui/VeltrixorButton';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="vt-404">
      <div className="vt-404-content">
        <h1 className="vt-404-title">404</h1>
        <VeltrixorTypography variant="h2">Lost in the Ecosystem?</VeltrixorTypography>
        <VeltrixorTypography variant="p" style={{ margin: '1.5rem 0 2.5rem' }}>
          The node you are looking for does not exist or has been moved within the Veltrixor network.
        </VeltrixorTypography>
        <Link to="/">
          <VeltrixorButton variant="primary">Return to Launchpad</VeltrixorButton>
        </Link>
      </div>
      <div className="vt-404-bg">
        <div className="vt-bg-orb"></div>
      </div>
    </div>
  );
}
