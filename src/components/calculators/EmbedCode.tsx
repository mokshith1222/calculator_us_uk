"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

export function EmbedCode() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  // For a real production app, this would be the actual domain
  const domain = typeof window !== 'undefined' ? window.location.origin : 'https://financetoolshub.com';
  const iframeCode = `<iframe src="${domain}${pathname}?embed=true" width="100%" height="600" frameborder="0" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"></iframe>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(iframeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ marginTop: '3rem', padding: '1.5rem', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
      <h4 style={{ margin: '0 0 0.5rem 0', color: '#0F172A', fontSize: '1.1rem' }}>Want this calculator on your site?</h4>
      <p style={{ margin: '0 0 1rem 0', color: '#475569', fontSize: '0.9rem' }}>Copy the code below to embed this tool on your blog or real estate website for free.</p>
      
      <div style={{ position: 'relative' }}>
        <textarea 
          readOnly 
          value={iframeCode}
          style={{ 
            width: '100%', 
            padding: '1rem', 
            background: '#1E293B', 
            color: '#F8FAFC', 
            borderRadius: '6px',
            border: 'none',
            fontFamily: 'monospace',
            fontSize: '0.85rem',
            resize: 'none',
            minHeight: '80px'
          }}
        />
        <button 
          onClick={handleCopy}
          style={{ 
            position: 'absolute', 
            top: '0.5rem', 
            right: '0.5rem',
            background: '#3B82F6',
            color: '#FFF',
            border: 'none',
            padding: '0.4rem 0.8rem',
            borderRadius: '4px',
            fontSize: '0.8rem',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          {copied ? 'Copied!' : 'Copy Code'}
        </button>
      </div>
    </div>
  );
}
