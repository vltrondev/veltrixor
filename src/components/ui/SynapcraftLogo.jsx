import React from 'react';
import './SynapcraftLogo.css';

export default function SynapcraftLogo({ 
  className = '', 
  size = 40, 
  showText = true,
  variant = 'default' // 'default' | 'icon-only' | 'badge'
}) {
  return (
    <div className={`sc-logo-container ${className} ${variant}`}>
      <div className="sc-logo-icon-wrap" style={{ width: size, height: size }}>
        <img 
          src="/synapcraft-icon.png" 
          alt="Synapcraft" 
          className="sc-logo-icon-img"
          loading="eager"
        />
        <div className="sc-logo-glow" />
      </div>

      {showText && (
        <div className="sc-logo-typography">
          <div className="sc-brand-name">
            <span className="sc-brand-synap">SYNAP</span>
            <span className="sc-brand-craft">CRAFT</span>
          </div>
          <span className="sc-brand-sub">SOFTWARE LAB & AGENCY</span>
        </div>
      )}
    </div>
  );
}
