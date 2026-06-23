import React from 'react';
import { notFound } from 'next/navigation';
import { glossaryData } from '@/data/glossary';
import { AIAnswerBlock } from '@/components/seo/AIAnswerBlock';
import { AuthorInfo, KeyTakeaways, SourcesAndReferences } from '@/components/seo/AICitationLayer';
import { FAQSchema } from '@/components/seo/StructuredData';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const term = glossaryData[resolvedParams.slug];
  if (!term) return { title: 'Term Not Found' };
  
  return {
    title: `${term.term} - Finance Glossary | FinanceToolsHub`,
    description: term.shortDefinition,
  };
}

export function generateStaticParams() {
  return Object.keys(glossaryData).map((slug) => ({
    slug,
  }));
}

export default async function GlossaryTermPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const item = glossaryData[resolvedParams.slug];
  if (!item) {
    notFound();
  }

  return (
    <article className="container" style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/glossary" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
          &larr; Back to Glossary
        </Link>
      </div>

      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--primary-accent)', lineHeight: 1.2 }}>
        What is {item.term}?
      </h1>
      
      <AIAnswerBlock 
        title={`Direct Answer: ${item.term}`}
        answer={item.shortDefinition}
        bullets={item.takeaways}
      />

      <AuthorInfo 
        authorName={item.author} 
        authorRole={item.role} 
        updatedDate={item.updatedDate} 
      />

      <KeyTakeaways takeaways={item.takeaways} />

      <div 
        className="guide-content" 
        style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '4rem' }}
        dangerouslySetInnerHTML={{ __html: item.detailedExplanation }} 
      />

      {item.faqs && item.faqs.length > 0 && (
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary-accent)', marginBottom: '1.5rem', fontSize: '1.75rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {item.faqs.map((faq, index) => (
              <div key={index} style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{faq.question}</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
          <FAQSchema faqs={item.faqs} />
        </div>
      )}

      {item.sources && item.sources.length > 0 && (
        <SourcesAndReferences sources={item.sources} />
      )}
    </article>
  );
}
