import React from 'react';

export const metadata = {
  title: 'Terms of Service | FinanceToolsHub',
  description: 'Terms of Service and terms of use for FinanceToolsHub.',
};

export default function TermsPage() {
  return (
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary-accent)' }}>Terms of Service</h1>
      <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

        <h2 style={{ color: 'var(--primary-accent)', marginTop: '2rem', marginBottom: '1rem' }}>1. Terms</h2>
        <p>By accessing the website at FinanceToolsHub, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>

        <h2 style={{ color: 'var(--primary-accent)', marginTop: '2rem', marginBottom: '1rem' }}>2. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on FinanceToolsHub's website for personal, non-commercial transitory viewing only.</p>

        <h2 style={{ color: 'var(--primary-accent)', marginTop: '2rem', marginBottom: '1rem' }}>3. Disclaimer</h2>
        <p>The materials on FinanceToolsHub's website are provided on an 'as is' basis. FinanceToolsHub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        <p>Please refer to our <a href="/disclaimer" style={{ textDecoration: 'underline', color: 'var(--primary-accent)' }}>Financial Disclaimer</a> for more details regarding the use of our calculators.</p>

        <h2 style={{ color: 'var(--primary-accent)', marginTop: '2rem', marginBottom: '1rem' }}>4. Limitations</h2>
        <p>In no event shall FinanceToolsHub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FinanceToolsHub's website.</p>

        <h2 style={{ color: 'var(--primary-accent)', marginTop: '2rem', marginBottom: '1rem' }}>5. Revisions and Errata</h2>
        <p>The materials appearing on FinanceToolsHub's website could include technical, typographical, or photographic errors. FinanceToolsHub does not warrant that any of the materials on its website are accurate, complete or current.</p>

        <h2 style={{ color: 'var(--primary-accent)', marginTop: '2rem', marginBottom: '1rem' }}>6. Links</h2>
        <p>FinanceToolsHub has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by FinanceToolsHub of the site. Use of any such linked website is at the user's own risk.</p>
      </div>
    </div>
  );
}
