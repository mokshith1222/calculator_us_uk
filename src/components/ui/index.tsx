import React from 'react';

export function Card({ children, style, className }: { children: React.ReactNode, style?: React.CSSProperties, className?: string }) {
  return (
    <div className={className} style={{
      background: 'var(--card-bg)',
      borderRadius: 'var(--radius-lg)',
      padding: '2rem',
      boxShadow: 'var(--shadow-md)',
      ...style
    }}>
      {children}
    </div>
  );
}

export function Input({ 
  label, 
  value, 
  onChange, 
  type = 'number', 
  prefix,
  suffix,
  min,
  max,
  step
}: { 
  label: string; 
  value: number | string; 
  onChange: (val: string) => void; 
  type?: string;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
        {label}
      </label>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        background: 'var(--secondary-background)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid #E2E8F0',
        padding: '0.5rem 1rem',
      }}>
        {prefix && <span style={{ marginRight: '0.5rem', color: 'var(--text-muted)' }}>{prefix}</span>}
        <input 
          type={type}
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min={min}
          max={max}
          step={step}
          style={{
            border: 'none',
            background: 'transparent',
            outline: 'none',
            width: '100%',
            fontSize: '1rem',
            color: 'var(--text-primary)',
            fontFamily: 'inherit'
          }}
        />
        {suffix && <span style={{ marginLeft: '0.5rem', color: 'var(--text-muted)' }}>{suffix}</span>}
      </div>
    </div>
  );
}

export function Button({ children, onClick, style, variant = 'primary' }: { children: React.ReactNode, onClick?: () => void, style?: React.CSSProperties, variant?: 'primary' | 'secondary' }) {
  const isPrimary = variant === 'primary';
  return (
    <button 
      onClick={onClick}
      style={{
        background: isPrimary ? 'var(--button-bg)' : 'transparent',
        color: isPrimary ? 'var(--button-text)' : 'var(--primary-accent)',
        border: isPrimary ? 'none' : '1px solid var(--primary-accent)',
        padding: '0.75rem 1.5rem',
        borderRadius: 'var(--radius-md)',
        fontSize: '1rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        ...style
      }}
      onMouseOver={(e) => {
        if (isPrimary) e.currentTarget.style.background = 'var(--button-hover)';
        else e.currentTarget.style.background = 'var(--secondary-background)';
      }}
      onMouseOut={(e) => {
        if (isPrimary) e.currentTarget.style.background = 'var(--button-bg)';
        else e.currentTarget.style.background = 'transparent';
      }}
    >
      {children}
    </button>
  );
}
