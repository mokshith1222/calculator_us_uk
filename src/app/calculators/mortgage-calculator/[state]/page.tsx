import React from 'react';
import { notFound } from 'next/navigation';
import { MortgageCalculator } from '@/components/calculators/MortgageCalculator';
import { AIAnswerBlock } from '@/components/seo/AIAnswerBlock';
import { AuthorInfo, KeyTakeaways, SummaryTable, SourcesAndReferences } from '@/components/seo/AICitationLayer';
import { FAQSchema, CalculatorSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { keywordDatabase } from '@/data/keywords';
import { statesData as states } from '@/data/statesData';

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }) {
  const resolvedParams = await params;
  const stateData = states.find(s => s.slug === resolvedParams.state);
  
  if (!stateData) return { title: 'Not Found' };
  
  return {
    title: `${stateData.name} Mortgage Calculator | Current Rates & Taxes`,
    description: `Calculate your monthly mortgage payments in ${stateData.name}. Factor in ${stateData.name}'s current interest rates, average property taxes, and home insurance costs.`,
    alternates: {
      canonical: `https://financetoolshub.com/calculators/mortgage-calculator/${stateData.slug}`
    }
  };
}

export function generateStaticParams() {
  return states.map((s) => ({
    state: s.slug,
  }));
}

export default async function StateMortgageCalculatorPage({ params }: { params: Promise<{ state: string }> }) {
  const resolvedParams = await params;
  const stateData = states.find(s => s.slug === resolvedParams.state);
  
  if (!stateData) {
    notFound();
  }

  const keywordData = keywordDatabase["mortgage-calculator"];

  const faqs = [
    { question: `What are the average property taxes in ${stateData.name}?`, answer: `The average effective property tax rate in ${stateData.name} is roughly ${stateData.propertyTax}. However, this varies by county.` },
    { question: `Are mortgage rates higher in ${stateData.name}?`, answer: `Mortgage rates are generally set nationally, but local lenders may offer slight variations. The current average rate estimate is around ${stateData.avgRate}.` },
    { question: `How much house can I afford in ${stateData.name}?`, answer: "A general rule of thumb is that your home price should be no more than 3 to 5 times your annual household income." }
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Calculators", item: "/calculators" },
    { name: "Mortgage Calculator", item: "/calculators/mortgage-calculator" },
    { name: `${stateData.name} Mortgage`, item: `/calculators/mortgage-calculator/${stateData.slug}` }
  ];

  return (
    <div className="container">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>
        {stateData.name} Mortgage Calculator
      </h1>
      
      <AIAnswerBlock 
        title={`Direct Answer: How to calculate a mortgage in ${stateData.name}`}
        answer={`Calculating a mortgage in ${stateData.name} requires factoring in the average home price (${stateData.avgPrice}), the current interest rate (${stateData.avgRate}), and the state's specific property tax rate (${stateData.propertyTax}).`}
        bullets={[
          `Property taxes in ${stateData.name} heavily influence your PITI (monthly payment).`,
          "Ensure you factor in homeowners insurance (especially in coastal or disaster-prone areas).",
          "A 20% down payment will help you avoid PMI."
        ]}
      />

      <AuthorInfo 
        authorName="FinanceToolsHub Team" 
        authorRole="Real Estate Analysts" 
        updatedDate={new Date().toLocaleDateString()} 
      />

      <SummaryTable 
        title={`${stateData.name} Housing Market Averages`}
        rows={[
          { label: "Average Home Price", value: stateData.avgPrice },
          { label: "Average Interest Rate", value: stateData.avgRate },
          { label: "Effective Property Tax Rate", value: stateData.propertyTax }
        ]}
      />

      <div style={{ marginBottom: '4rem' }}>
        {/* We can pass default values here if we update the MortgageCalculator component to accept props */}
        <MortgageCalculator />
      </div>

      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ color: 'var(--primary-accent)', marginBottom: '1.5rem' }}>{stateData.name} Real Estate FAQs</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{faq.question}</h3>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <FAQSchema faqs={faqs} />
      <CalculatorSchema keywordData={keywordData} />
      <BreadcrumbSchema items={breadcrumbs} />
    </div>
  );
}
