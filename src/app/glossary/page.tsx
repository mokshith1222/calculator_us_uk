import React from 'react';
import { glossaryData } from '@/data/glossary';
import { GlossarySearchBlock } from '@/components/seo/GlossarySearchBlock';

export const metadata = {
  title: 'Finance Glossary | FinanceToolsHub',
  description: 'Understand complex financial terms with our easy-to-read Finance Glossary.',
};

export default function GlossaryIndexPage() {
  const terms = Object.values(glossaryData).sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="container" style={{ maxWidth: '800px', minHeight: '70vh', padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary-accent)', textAlign: 'center', fontWeight: 800 }}>
        Finance Glossary
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.2rem', textAlign: 'center' }}>
        A comprehensive dictionary of personal finance, investing, and real estate terminology.
      </p>

      <GlossarySearchBlock terms={terms} />
    </div>
  );
}
