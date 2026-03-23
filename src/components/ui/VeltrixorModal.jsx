import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './VeltrixorModal.css';

export default function VeltrixorModal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="vt-modal-overlay" onClick={onClose}>
      <div 
        className="vt-modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="vt-modal-header">
          <h3 className="vt-modal-title">{title}</h3>
          <button className="vt-modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="vt-modal-body">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
