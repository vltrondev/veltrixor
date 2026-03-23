import './VeltrixorSkeleton.css';

export default function VeltrixorSkeleton({ 
  width = '100%', 
  height = '1rem', 
  variant = 'text',
  className = '' 
}) {
  return (
    <div 
      className={`vt-skeleton vt-skeleton-${variant} ${className}`}
      style={{ width, height }}
    ></div>
  );
}
