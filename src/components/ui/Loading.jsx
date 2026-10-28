import React from 'react';

export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#ffffff',
      color: '#090d16',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <div style={{
        position: 'relative',
        width: '64px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          border: '3px solid rgba(2, 132, 199, 0.12)',
          borderTop: '3px solid #0284c7',
          borderRadius: '50%',
          animation: 'scSpin 0.9s cubic-bezier(0.5, 0.1, 0.5, 0.9) infinite'
        }} />
        <img 
          src="/synapcraft-icon.png" 
          alt="Synapcraft" 
          style={{ width: '32px', height: '32px', objectFit: 'contain' }}
        />
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        fontFamily: "'Space Grotesk', system-ui, sans-serif",
        fontSize: '1.15rem',
        letterSpacing: '2.5px',
        fontWeight: 800
      }}>
        <span style={{ color: '#090d16' }}>SYNAP</span>
        <span style={{ color: '#0284c7' }}>CRAFT</span>
      </div>

      <style>{`
        @keyframes scSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
