import React from 'react';

export const metadata = {
  title: 'Financial Disclaimer | FinanceToolsHub',
  description: 'Financial disclaimer for all calculators and content provided by FinanceToolsHub.',
};

export default function DisclaimerPage() {
  return (
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary-accent)' }}>Financial Disclaimer</h1>
      <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

        <h2 style={{ color: 'var(--primary-accent)', marginTop: '2rem', marginBottom: '1rem' }}>No Financial Advice</h2>
        <p>
          The information and calculators provided on FinanceToolsHub are for educational and informational purposes only. The content is not intended to be a substitute for professional financial advice, investment advice, tax advice, or legal advice. Always seek the advice of a qualified financial advisor or other qualified financial services provider with any questions you may have regarding your personal finances or investments.
        </p>

        <h2 style={{ color: 'var(--primary-accent)', marginTop: '2rem', marginBottom: '1rem' }}>Accuracy of Information</h2>
        <p>
          While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, calculators, products, services, or related graphics contained on the website for any purpose.
        </p>

        <h2 style={{ color: 'var(--primary-accent)', marginTop: '2rem', marginBottom: '1rem' }}>Calculator Estimates</h2>
        <p>
          The results provided by our financial calculators are estimates based on the information you provide and certain underlying assumptions. They do not constitute an offer of credit, a guarantee of return, or a binding agreement. Actual results may vary based on market conditions, changes in tax laws, lender requirements, and other factors outside our control.
        </p>

        <h2 style={{ color: 'var(--primary-accent)', marginTop: '2rem', marginBottom: '1rem' }}>Assumption of Risk</h2>
        <p>
          Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
        </p>
      </div>
    </div>
  );
}
