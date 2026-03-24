import React from 'react';

export default function VeltrixorLogo({ className = '', size = 40, showText = true }) {
  return (
    <div className={`vt-logo-wrapper ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 0 8px var(--vt-electric-blue-glow))' }}
      >
        {/* Main "V" Shape - Technological/Geometric */}
        <path 
          d="M20 20L50 80L80 20H65L50 50L35 20H20Z" 
          fill="var(--vt-electric-blue)" 
        />
        
        {/* Modular 3D-like blocks on the left */}
        <rect x="5" y="25" width="10" height="10" fill="var(--vt-deep-azure)" rx="1" />
        <rect x="10" y="40" width="8" height="8" fill="var(--vt-deep-azure)" opacity="0.6" rx="1" />
        
        {/* Modular 3D-like blocks on the right */}
        <rect x="85" y="25" width="10" height="10" fill="var(--vt-deep-azure)" rx="1" />
        <rect x="82" y="40" width="8" height="8" fill="var(--vt-deep-azure)" opacity="0.6" rx="1" />
        
        {/* Internal technical line */}
        <path 
          d="M40 40L50 60L60 40" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          opacity="0.5"
        />
      </svg>
      
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
          <span style={{ 
            fontSize: '1.25rem', 
            fontWeight: '800', 
            letterSpacing: '2px', 
            color: 'var(--vt-text-primary)',
            textTransform: 'uppercase'
          }}>
            Veltrixor
          </span>
          <span style={{ 
            fontSize: '0.5rem', 
            fontWeight: '500', 
            letterSpacing: '1px', 
            color: 'var(--vt-text-secondary)',
            textTransform: 'lowercase',
            marginTop: '4px'
          }}>
            modular systems by veltrixor
          </span>
        </div>
      )}
    </div>
  );
}
