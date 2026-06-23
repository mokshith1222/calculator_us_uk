import React from 'react';

export const metadata = {
  title: 'Privacy Policy | FinanceToolsHub',
  description: 'Our privacy policy detailing how we handle and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary-accent)' }}>Privacy Policy</h1>
      <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        
        <h2 style={{ color: 'var(--primary-accent)', marginTop: '2rem', marginBottom: '1rem' }}>1. Introduction</h2>
        <p>Welcome to FinanceToolsHub. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>

        <h2 style={{ color: 'var(--primary-accent)', marginTop: '2rem', marginBottom: '1rem' }}>2. The Data We Collect About You</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
          <li><strong>Usage Data</strong> includes information about how you use our website.</li>
        </ul>
        <p><em>Note: The calculations you perform on our calculators are processed locally in your browser and are not saved to our servers unless you explicitly choose to create an account and save them.</em></p>

        <h2 style={{ color: 'var(--primary-accent)', marginTop: '2rem', marginBottom: '1rem' }}>3. Cookies and Advertising</h2>
        <p>We use cookies to improve your experience on our site. We also use third-party advertising companies (such as Google AdSense) to serve ads when you visit our website. These companies may use aggregated information (not including your name, address, email address or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.</p>

        <h2 style={{ color: 'var(--primary-accent)', marginTop: '2rem', marginBottom: '1rem' }}>4. Third-Party Links</h2>
        <p>This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.</p>

        <h2 style={{ color: 'var(--primary-accent)', marginTop: '2rem', marginBottom: '1rem' }}>5. Contact Details</h2>
        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@financetoolshub.com.</p>
      </div>
    </div>
  );
}
