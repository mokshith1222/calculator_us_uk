"use client";

import React, { useState } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (!res.ok) throw new Error('Subscription failed');

      setStatus('success');
      setMessage("Welcome to the club! You've successfully subscribed.");
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ padding: '2rem', background: '#FFFFFF', color: '#111', borderRadius: '12px', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--primary-accent)' }}>
          {message}
        </h3>
        <p style={{ color: 'var(--text-muted)' }}>Keep an eye on your inbox for our next breakdown.</p>
        <button 
          onClick={() => setStatus('idle')}
          style={{ marginTop: '1.5rem', padding: '0.5rem 1rem', background: '#F8F9FA', border: '1px solid #E2E8F0', borderRadius: '6px', cursor: 'pointer' }}
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <input 
          type="email" 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          disabled={status === 'loading'}
          placeholder="Enter your email address" 
          required
          style={{ 
            flex: 1, 
            minWidth: '250px',
            padding: '1rem 1.5rem', 
            borderRadius: '8px', 
            border: status === 'error' ? '2px solid #EF4444' : 'none', 
            fontSize: '1rem', 
            outline: 'none',
            color: '#111'
          }}
        />
        <button 
          type="submit"
          disabled={status === 'loading'}
          style={{ 
            padding: '1rem 2rem', 
            background: status === 'loading' ? '#555555' : '#222222', 
            color: '#FFFFFF', 
            fontWeight: 700, 
            border: 'none', 
            borderRadius: '8px', 
            cursor: status === 'loading' ? 'wait' : 'pointer', 
            transition: 'background 0.2s ease',
            whiteSpace: 'nowrap'
          }}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
        </button>
      </div>
      {status === 'error' && (
        <p style={{ color: '#FECACA', fontSize: '0.9rem', marginTop: '0.5rem', textAlign: 'left', marginLeft: '0.5rem' }}>
          {message}
        </p>
      )}
      <p style={{ fontSize: '0.8rem', marginTop: '1rem', opacity: 0.7 }}>
        We respect your privacy. No spam, ever. Unsubscribe at any time.
      </p>
    </form>
  );
}
