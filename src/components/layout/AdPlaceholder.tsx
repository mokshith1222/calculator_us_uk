import React from 'react';

export function AdPlaceholder({ width = '100%', height = '250px', label = 'Advertisement' }: { width?: string, height?: string, label?: string }) {
  return (
    <div style={{
      width,
      height,
      background: '#F8F9FA',
      border: '1px dashed #CBD5E1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px',
      margin: '2rem 0',
      color: '#94A3B8',
      fontSize: '0.8rem',
      letterSpacing: '0.05em',
      textTransform: 'uppercase'
    }}>
      {label}
    </div>
  );
}
