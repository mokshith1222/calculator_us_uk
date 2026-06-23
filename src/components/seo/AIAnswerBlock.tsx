import React from 'react';

interface AIAnswerBlockProps {
  title: string;
  answer: string;
  bullets?: string[];
}

export function AIAnswerBlock({ title, answer, bullets }: AIAnswerBlockProps) {
  return (
    <div style={{
      background: 'var(--secondary-background)',
      padding: '1.5rem',
      borderRadius: 'var(--radius-md)',
      borderLeft: '4px solid var(--primary-accent)',
      marginBottom: '2rem'
    }}>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
        {title}
      </h2>
      <p style={{ margin: 0, fontWeight: 500, color: 'var(--text-primary)' }}>
        {answer}
      </p>
      {bullets && bullets.length > 0 && (
        <ul style={{ marginTop: '0.75rem', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
          {bullets.map((bullet, idx) => (
            <li key={idx} style={{ marginBottom: '0.25rem' }}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
