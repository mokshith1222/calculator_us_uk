import React from 'react';
import { calculatorConfigs } from '@/data/calculatorConfigs';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export function generateStaticParams() {
  return [
    { categorySlug: 'mortgage' },
    { categorySlug: 'debt' },
    { categorySlug: 'investing' },
    { categorySlug: 'retirement' },
    { categorySlug: 'taxes' },
    { categorySlug: 'bonus' },
    { categorySlug: 'crypto' },
    { categorySlug: 'business' },
    { categorySlug: 'advanced-real-estate' },
  ];
}

const slugToCategoryName: Record<string, string> = {
  'mortgage': 'Mortgage & Home',
  'debt': 'Debt & Loans',
  'investing': 'Investing',
  'retirement': 'Retirement',
  'taxes': 'Income & Taxes',
  'bonus': 'Bonus Tools',
  'crypto': 'Crypto & Web3',
  'business': 'Business',
  'advanced-real-estate': 'Advanced Real Estate'
};

const categoryDescriptions: Record<string, string> = {
  'mortgage': 'Calculate your mortgage payments, compare refinance rates, and determine how much house you can afford.',
  'debt': 'Develop strategies to pay off your credit cards, student loans, and auto loans as fast as possible.',
  'investing': 'Project your compounding returns, analyze dividend yields, and plan your wealth-building journey.',
  'retirement': 'Ensure you have enough money to retire securely with 401k, IRA, and FIRE movement calculators.',
  'taxes': 'Estimate your take-home pay, analyze your tax brackets, and optimize your income.',
  'bonus': 'Track your net worth, emergency fund, and other essential financial metrics.',
  'crypto': 'Calculate staking APY, Impermanent Loss, DCA strategies, and track your cryptocurrency profits.',
  'business': 'Optimize your freelance hourly rates, calculate e-commerce profit margins, and estimate capital gains taxes.',
  'advanced-real-estate': 'Analyze house flipping profits, calculate AirBnB cash-on-cash ROI, and decide whether to rent vs. buy.'
};

export async function generateMetadata({ params }: { params: Promise<{ categorySlug: string }> }) {
  const resolvedParams = await params;
  const categoryName = slugToCategoryName[resolvedParams.categorySlug];
  if (!categoryName) return { title: 'Not Found' };
  return {
    title: `${categoryName} Calculators | FinanceToolsHub`,
    description: categoryDescriptions[resolvedParams.categorySlug]
  };
}

export default async function CategoryLandingPage({ params }: { params: Promise<{ categorySlug: string }> }) {
  const resolvedParams = await params;
  const categoryName = slugToCategoryName[resolvedParams.categorySlug];
  
  if (!categoryName) {
    notFound();
  }

  const allConfigs = Object.keys(calculatorConfigs).map(key => ({
    ...calculatorConfigs[key],
    slug: key
  }));
  const categoryCalculators = allConfigs.filter((c: any) => c.category === categoryName);

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Calculators", item: "/calculators" },
    { name: categoryName, item: `/calculators/category/${resolvedParams.categorySlug}` }
  ];

  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <BreadcrumbSchema items={breadcrumbs} />
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--primary-accent)', marginBottom: '1rem' }}>{categoryName} Calculators</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>{categoryDescriptions[resolvedParams.categorySlug]}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {categoryCalculators.map((calc: any) => (
          <Link href={`/calculators/${calc.slug}`} key={calc.slug} style={{ textDecoration: 'none' }}>
            <div className="category-card" style={{ 
              background: '#FFFFFF', 
              padding: '2rem', 
              borderRadius: '16px', 
              border: '1px solid #E2E8F0',
              boxShadow: 'var(--shadow-sm)',
              height: '100%',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'pointer'
            }}>
              <h2 style={{ fontSize: '1.2rem', color: '#111', marginBottom: '0.5rem', fontWeight: 700 }}>{calc.name}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Calculate and project your {calc.name.toLowerCase()} scenarios instantly.
              </p>
              <div style={{ color: 'var(--primary-accent)', fontWeight: 600, marginTop: '1rem', fontSize: '0.9rem' }}>
                Open Calculator →
              </div>
            </div>
          </Link>
        ))}
      </div>

      <BreadcrumbSchema items={breadcrumbs} />
    </div>
  );
}
