import React from 'react';
import { notFound } from 'next/navigation';
import { UniversalCalculator } from '@/components/calculators/UniversalCalculator';
import { AIAnswerBlock } from '@/components/seo/AIAnswerBlock';
import { AuthorInfo, KeyTakeaways, SummaryTable } from '@/components/seo/AICitationLayer';
import { FAQSchema, CalculatorSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { calculatorConfigs } from '@/data/calculatorConfigs';
import { megaCalculatorConfigs } from '@/data/megaCalculatorConfigs';
import { keywordDatabase } from '@/data/keywords';
import { categoryContent } from '@/data/categoryContent';
import Link from 'next/link';
import { CategoryNav } from '@/components/calculators/CategoryNav';
import { RecentToolTracker } from '@/components/calculators/RecentToolTracker';
import { FAQAccordion } from '@/components/seo/FAQAccordion';
import { TrendingQueriesSidebar } from '@/components/seo/TrendingQueriesSidebar';

// These calculators have their own dedicated folders/pages, so we exclude them from the dynamic route
const customSlugs = [
  "mortgage-calculator", 
  "compound-interest-calculator", 
  "retirement-calculator", 
  "debt-payoff-calculator", 
  "net-worth-calculator", 
  "salary-calculator"
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const config = calculatorConfigs[resolvedParams.slug];
  if (!config) return { title: 'Calculator Not Found' };
  
  return {
    title: `${config.name} | FinanceToolsHub`,
    description: `Free ${config.name.toLowerCase()} to analyze your finances and plan your wealth.`,
  };
}

export function generateStaticParams() {
  const allConfigs = { ...calculatorConfigs, ...megaCalculatorConfigs };
  return Object.keys(allConfigs)
    .filter(slug => !customSlugs.includes(slug))
    .map((slug) => ({
      slug,
    }));
}

export default async function UniversalCalculatorPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const config = calculatorConfigs[resolvedParams.slug] || megaCalculatorConfigs[resolvedParams.slug];
  
  if (!config || customSlugs.includes(resolvedParams.slug)) {
    notFound();
  }

  // Attempt to load specific SEO data if it exists, otherwise use fallback generic SEO data
  const seoData = keywordDatabase[resolvedParams.slug] || {
    id: resolvedParams.slug,
    mainKeyword: config.name,
    secondaryKeywords: [],
    longTailKeywords: [],
    trendingQueries: [],
    peopleAlsoAsk: [],
    relatedQueries: [],
    relatedTools: [],
    relatedArticles: [],
    description: `Free ${config.name}`
  };

  const categoryData = categoryContent[config.category] || categoryContent["Bonus Tools"];

  const genericFaqs = categoryData.faqs.map((faq: any) => ({
    question: faq.question.replace('this calculator', config.name),
    answer: faq.answer
  }));

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Calculators", item: "/calculators" },
    { name: config.name, item: `/calculators/${resolvedParams.slug}` }
  ];

  // Calculate Smart Recommendations
  const allConfigs = Object.entries({ ...calculatorConfigs, ...megaCalculatorConfigs }).map(([key, val]) => ({ slug: key, ...val }));
  let recommendations = allConfigs.filter(c => c.category === config.category && c.slug !== resolvedParams.slug);
  if (recommendations.length > 3) {
    recommendations = recommendations.sort(() => 0.5 - Math.random()).slice(0, 3);
  } else if (recommendations.length < 3) {
    // Fallback to random calculators if not enough in category, avoiding duplicates
    const extra = allConfigs
      .filter(c => c.slug !== resolvedParams.slug && !recommendations.find(r => r.slug === c.slug))
      .sort(() => 0.5 - Math.random())
      .slice(0, 3 - recommendations.length);
    recommendations = [...recommendations, ...extra];
  }

  return (
    <div className="container">
      <RecentToolTracker slug={resolvedParams.slug} name={config.name} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>
        {config.name}
      </h1>
      
      <CategoryNav currentSlug={resolvedParams.slug} />

      <AIAnswerBlock 
        title={categoryData.aiAnswer.title}
        answer={`For the ${config.name}: ${categoryData.aiAnswer.answer}`}
        bullets={categoryData.aiAnswer.bullets}
      />

      <AuthorInfo 
        authorName="FinanceToolsHub Team" 
        authorRole="Financial Analysts" 
        updatedDate={new Date().toLocaleDateString()} 
      />

      <div className="desktop-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginBottom: '4rem' }}>
        <div>
          <React.Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>Loading calculator engine...</div>}>
            <UniversalCalculator slug={resolvedParams.slug} />
          </React.Suspense>
        </div>
        
        {/* Sidebar - Drops below on mobile, right side on desktop */}
        <div className="desktop-sidebar">
          <TrendingQueriesSidebar currentSlug={resolvedParams.slug} />
        </div>
      </div>

      {/* Smart Recommendations Engine */}
      <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--primary-accent)', textAlign: 'center' }}>
          🧠 You Might Also Like...
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          People who used the {config.name} also found these tools helpful for their financial goals.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {recommendations.map((rec) => (
            <Link key={rec.slug} href={`/calculators/${rec.slug}`} style={{ textDecoration: 'none' }}>
              <div className="recommendation-card" style={{ 
                background: 'var(--card-bg)', 
                border: '1px solid var(--secondary-accent)', 
                borderRadius: '12px', 
                padding: '2rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                  {rec.category}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  {rec.name}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.5rem' }}>
                  {rec.description}
                </p>
                <div style={{ color: 'var(--primary-accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Open Calculator <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '4rem' }}>
        <FAQAccordion faqs={seoData.peopleAlsoAsk.length > 0 ? seoData.peopleAlsoAsk : genericFaqs.map((f: { question: string, answer: string }) => f.question)} />
      </div>

      <FAQSchema faqs={seoData.peopleAlsoAsk.length > 0 ? seoData.peopleAlsoAsk.map((q: string) => ({ question: q, answer: `This is a great question. When considering "${q.toLowerCase().replace('?', '')}", financial experts typically recommend analyzing your overall net worth, current interest rates, and long-term investment horizons. Use our calculator above to run multiple scenarios to see exactly how this applies to your personal situation.` })) : genericFaqs} />
      <CalculatorSchema keywordData={seoData} />
      <BreadcrumbSchema items={breadcrumbs} />
    </div>
  );
}
