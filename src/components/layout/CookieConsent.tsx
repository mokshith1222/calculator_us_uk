'use client';
import React, { useState, useEffect } from 'react';

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#fff',
      padding: '1.5rem',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid #E2E8F0',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      <div style={{ flex: '1 1 300px' }}>
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          We use cookies to enhance your experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={accept} style={{
          padding: '0.5rem 1.5rem',
          background: 'var(--primary-accent)',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 600,
          cursor: 'pointer'
        }}>
          Accept All
        </button>
      </div>
    </div>
  );
}
