import React, { useState } from 'react';

export function Tooltip({ children, content }: { children: React.ReactNode, content: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span 
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <span style={{ borderBottom: '1px dotted var(--text-muted)', cursor: 'help' }}>
        {children}
      </span>
      {isHovered && (
        <span style={{
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: '8px',
          padding: '0.5rem 0.75rem',
          background: 'var(--card-bg)',
          color: 'var(--text-primary)',
          fontSize: '0.85rem',
          whiteSpace: 'nowrap',
          borderRadius: '4px',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--secondary-accent)',
          zIndex: 1000,
          pointerEvents: 'none',
        }}>
          {content}
          {/* Tooltip arrow */}
          <span style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            borderWidth: '5px',
            borderStyle: 'solid',
            borderColor: 'var(--card-bg) transparent transparent transparent',
          }} />
        </span>
      )}
    </span>
  );
}
