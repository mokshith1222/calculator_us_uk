import React from 'react';
import { notFound } from 'next/navigation';
import { guidesData } from '@/data/guides';
import { AuthorInfo, KeyTakeaways, SummaryTable, SourcesAndReferences } from '@/components/seo/AICitationLayer';
import { FAQSchema } from '@/components/seo/StructuredData';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const guide = guidesData[resolvedParams.slug];
  if (!guide) return { title: 'Guide Not Found' };
  
  return {
    title: `${guide.title} | FinanceToolsHub`,
    description: guide.description,
  };
}

export function generateStaticParams() {
  return Object.keys(guidesData).map((slug) => ({
    slug,
  }));
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const guide = guidesData[resolvedParams.slug];
  if (!guide) {
    notFound();
  }

  return (
    <article className="container" style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/guides" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
          &larr; Back to Learning Center
        </Link>
      </div>

      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary-accent)', lineHeight: 1.2 }}>
        {guide.title}
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
        {guide.description}
      </p>

      <AuthorInfo 
        authorName={guide.author} 
        authorRole={guide.role} 
        updatedDate={guide.updatedDate} 
      />

      <KeyTakeaways takeaways={guide.takeaways} />
      <SummaryTable title={guide.summaryTable.title} rows={guide.summaryTable.rows} />

      <div 
        className="guide-content" 
        style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '4rem' }}
        dangerouslySetInnerHTML={{ __html: guide.content }} 
      />

      {guide.faqs && guide.faqs.length > 0 && (
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary-accent)', marginBottom: '1.5rem', fontSize: '1.75rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {guide.faqs.map((faq, index) => (
              <div key={index} style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{faq.question}</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
          <FAQSchema faqs={guide.faqs} />
        </div>
      )}

      {guide.sources && guide.sources.length > 0 && (
        <SourcesAndReferences sources={guide.sources} />
      )}
    </article>
  );
}
