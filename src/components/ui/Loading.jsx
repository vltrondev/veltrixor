export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      backgroundColor: '#0a0a0a',
      color: '#0066ff',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <div className="spinner" style={{
        width: '50px',
        height: '50px',
        border: '5px solid #1a1a1a',
        borderTop: '5px solid #0066ff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <p style={{ fontFamily: 'sans-serif', letterSpacing: '2px' }}>VELTRIXOR</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
