"use client";

import React, { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error('Failed to send message');
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg('There was an issue sending your message. Please try again later.');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ padding: '2rem', background: '#ecfdf5', border: '1px solid #10b981', borderRadius: '8px', color: '#065f46', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>Message Sent Successfully!</h3>
        <p>Thank you for reaching out. We will get back to you as soon as possible.</p>
        <button 
          onClick={() => setStatus('idle')}
          style={{ marginTop: '1rem', background: 'transparent', border: '1px solid #10b981', color: '#065f46', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Your Name</label>
        <input 
          type="text" 
          required
          disabled={status === 'loading'}
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0', background: 'var(--secondary-background)', color: 'var(--text-primary)' }} 
        />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Email Address</label>
        <input 
          type="email" 
          required
          disabled={status === 'loading'}
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0', background: 'var(--secondary-background)', color: 'var(--text-primary)' }} 
        />
      </div>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
          Message
        </label>
        <textarea 
          rows={5}
          required
          disabled={status === 'loading'}
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid #E2E8F0',
            background: 'var(--secondary-background)',
            color: 'var(--text-primary)',
            fontFamily: 'inherit',
            fontSize: '1rem',
            resize: 'vertical'
          }}
        />
      </div>

      {status === 'error' && (
        <p style={{ color: '#ef4444', marginBottom: '1rem' }}>{errorMsg}</p>
      )}

      <button 
        type="submit"
        disabled={status === 'loading'}
        style={{ 
          alignSelf: 'flex-start',
          background: 'var(--button-bg)',
          color: 'var(--button-text)',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: 'var(--radius-md)',
          fontSize: '1rem',
          fontWeight: 600,
          cursor: status === 'loading' ? 'wait' : 'pointer',
          opacity: status === 'loading' ? 0.7 : 1
        }}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
