import './VeltrixorCard.css';

export default function VeltrixorCard({ children, className = '', ...props }) {
  return (
    <div className={`vt-card ${className}`} {...props}>
      {children}
    </div>
  );
}
