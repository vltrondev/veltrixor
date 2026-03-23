import './VeltrixorButton.css';

export default function VeltrixorButton({ 
  variant = 'primary', 
  children, 
  onClick, 
  className = '', 
  type = 'button',
  disabled = false,
  ...props 
}) {
  return (
    <button
      type={type}
      className={`vt-button vt-button-${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
