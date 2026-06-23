import React from 'react';

// 1. Author and Updated Date
export function AuthorInfo({ authorName, authorRole, updatedDate }: { authorName: string, authorRole: string, updatedDate: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #E2E8F0' }}>
      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
        {authorName.charAt(0)}
      </div>
      <div>
        <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{authorName}</div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{authorRole} &bull; Updated: {updatedDate}</div>
      </div>
    </div>
  );
}

// 2. Key Takeaways Section
export function KeyTakeaways({ takeaways }: { takeaways: string[] }) {
  return (
    <div style={{ background: 'var(--secondary-background)', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem', border: '1px solid var(--secondary-accent)' }}>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary-accent)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        Key Takeaways
      </h2>
      <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>
        {takeaways.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '0.5rem' }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// 3. Summary Table
export function SummaryTable({ title, rows }: { title: string, rows: { label: string, value: string }[] }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>{title}</h2>
      <div style={{ background: 'var(--card-bg)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden', border: '1px solid #E2E8F0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} style={{ borderBottom: idx === rows.length - 1 ? 'none' : '1px solid #E2E8F0', background: idx % 2 === 0 ? 'var(--card-bg)' : '#fafafa' }}>
                <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-primary)', width: '40%' }}>{row.label}</th>
                <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// 4. Sources & References
export function SourcesAndReferences({ sources }: { sources: { title: string, url: string }[] }) {
  return (
    <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #E2E8F0' }}>
      <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>Sources & References</h3>
      <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        {sources.map((src, idx) => (
          <li key={idx} style={{ marginBottom: '0.5rem' }}>
            <a href={src.url} target="_blank" rel="nofollow noopener noreferrer" style={{ textDecoration: 'underline' }}>
              {src.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
