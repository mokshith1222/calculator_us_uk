import React from 'react';
import { Card } from '@/components/ui';
import { ContactForm } from '@/components/legal/ContactForm';

export const metadata = {
  title: 'Contact Us | FinanceToolsHub',
  description: 'Get in touch with the FinanceToolsHub team for support, feedback, or business inquiries.',
};

export default function ContactPage() {
  return (
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary-accent)' }}>Contact Us</h1>
      <Card>
        <p style={{ marginBottom: '2rem' }}>
          Have a question about one of our calculators? Found a bug? Or just want to suggest a new tool? We'd love to hear from you.
        </p>
        
        <ContactForm />

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #E2E8F0' }}>
          <h3 style={{ color: 'var(--primary-accent)', marginBottom: '1rem' }}>Other Ways to Reach Us</h3>
          <p><strong>Email:</strong> mokshithnaik932@gmail.com</p>
          <p><strong>Business Inquiries:</strong> mokshithnaik932@gmail.com</p>
        </div>
      </Card>
    </div>
  );
}
