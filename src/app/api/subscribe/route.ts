import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Send both emails simultaneously
    const [welcomeResult, adminResult] = await Promise.allSettled([
      resend.emails.send({
        from: 'FinanceToolsHub <onboarding@resend.dev>',
        to: [email],
        subject: 'Welcome to FinanceToolsHub! 🚀 Your Financial Journey Starts Here',
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #222222; background-color: #FAFAFA; padding: 2rem; border-radius: 12px; border: 1px solid #EAEAEA;">
            <div style="text-align: center; margin-bottom: 2rem;">
              <h1 style="color: #111111; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">FinanceToolsHub</h1>
              <p style="color: #AD9C8E; font-size: 14px; margin-top: 4px; text-transform: uppercase; letter-spacing: 1px;">Smart Financial Planning</p>
            </div>
            
            <div style="background: #FFFFFF; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
              <h2 style="color: #111111; font-size: 20px; margin-top: 0;">Welcome to the club! 🎉</h2>
              <p style="line-height: 1.6; font-size: 16px; color: #444444;">
                Thank you for subscribing to our newsletter. You've just joined a community of <strong>50,000+ smart investors</strong> taking control of their wealth.
              </p>
              <p style="line-height: 1.6; font-size: 16px; color: #444444;">
                Every week, we'll send you our latest breakdowns of macroeconomic trends, compounding strategies, and early retirement blueprints. But while you wait, why not explore some of our most powerful financial tools?
              </p>

              <div style="margin: 2rem 0; border-top: 2px solid #F1F5F9; padding-top: 1.5rem;">
                <h3 style="color: #111111; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">🛠️ Premium Calculators</h3>
                
                <ul style="list-style-type: none; padding: 0; margin: 0;">
                  <li style="margin-bottom: 1rem;">
                    <a href="https://financetoolshub.com/calculators/compound-interest-calculator" style="text-decoration: none; color: #2563EB; font-weight: 600; font-size: 16px;">📈 Compound Interest Calculator</a>
                    <p style="margin: 4px 0 0 0; font-size: 14px; color: #666666;">Visualize how your wealth grows over time with the magic of compounding.</p>
                  </li>
                  <li style="margin-bottom: 1rem;">
                    <a href="https://financetoolshub.com/calculators/mortgage-calculator" style="text-decoration: none; color: #2563EB; font-weight: 600; font-size: 16px;">🏠 Ultimate Mortgage Calculator</a>
                    <p style="margin: 4px 0 0 0; font-size: 14px; color: #666666;">Calculate your true homeownership costs, including taxes, PMI, and insurance.</p>
                  </li>
                  <li style="margin-bottom: 1rem;">
                    <a href="https://financetoolshub.com/calculators/retirement-calculator" style="text-decoration: none; color: #2563EB; font-weight: 600; font-size: 16px;">🏖️ Early Retirement (FIRE) Planner</a>
                    <p style="margin: 4px 0 0 0; font-size: 14px; color: #666666;">Find out exactly what year you can quit your job and retire comfortably.</p>
                  </li>
                </ul>
              </div>

              <div style="background: #F8FAFC; padding: 1.5rem; border-radius: 8px; margin-top: 2rem; border-left: 4px solid #AD9C8E;">
                <p style="margin: 0; font-size: 15px; color: #333333; line-height: 1.5;">
                  <strong>Stay Tuned!</strong> Keep an eye on your inbox. We have massive updates, new premium tools, and exclusive investment guides coming your way soon.
                </p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 2rem; color: #888888; font-size: 12px;">
              <p>You received this email because you subscribed to FinanceToolsHub.</p>
              <p>© ${new Date().getFullYear()} FinanceToolsHub. All rights reserved.</p>
            </div>
          </div>
        `
      }),
      resend.emails.send({
        from: 'System <onboarding@resend.dev>',
        to: [process.env.ADMIN_EMAIL || 'mokshithnaik932@gmail.com'],
        subject: 'New Newsletter Subscriber!',
        html: `<p>A new user just subscribed: <strong>${email}</strong></p>`
      })
    ]);

    console.log('Welcome Email Result:', welcomeResult);
    console.log('Admin Email Result:', adminResult);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
