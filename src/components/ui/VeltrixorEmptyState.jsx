import { useNavigate } from 'react-router-dom';
import VeltrixorTypography from './VeltrixorTypography';
import VeltrixorButton from './VeltrixorButton';
import './VeltrixorEmptyState.css';

export default function VeltrixorEmptyState({ title, description, icon, ctaText, onCtaClick }) {
  return (
    <div className="vt-empty-state">
      <div className="vt-empty-icon">{icon}</div>
      <VeltrixorTypography variant="h3">{title}</VeltrixorTypography>
      <VeltrixorTypography variant="p" style={{ maxWidth: '450px', margin: '1rem auto 2rem' }}>
        {description}
      </VeltrixorTypography>
      {ctaText && (
        <VeltrixorButton variant="primary" onClick={onCtaClick}>
          {ctaText}
        </VeltrixorButton>
      )}
    </div>
  );
}
