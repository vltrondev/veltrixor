import { useEffect } from 'react';
import './VeltrixorToast.css';

export default function VeltrixorToast({ message, type, onClose }) {
  const getIcon = () => {
    switch (type) {
      case 'success': return '✓';
      case 'error': return '✕';
      case 'info': return 'ℹ';
      default: return 'ℹ';
    }
  };

  return (
    <div className={`vt-toast vt-toast-${type}`} onClick={onClose}>
      <div className="vt-toast-icon">{getIcon()}</div>
      <div className="vt-toast-message">{message}</div>
      <button className="vt-toast-close">&times;</button>
    </div>
  );
}
