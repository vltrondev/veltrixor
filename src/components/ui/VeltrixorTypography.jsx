import './VeltrixorTypography.css';

export default function VeltrixorTypography({ variant = 'p', children, className = '', ...props }) {
  const Tag = variant.startsWith('h') ? variant : (variant === 'p' ? 'p' : 'span');
  
  return (
    <Tag className={`vt-typography vt-typography-${variant} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
