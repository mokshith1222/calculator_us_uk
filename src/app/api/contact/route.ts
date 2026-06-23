import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    // Send the contact message to the admin email
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [process.env.ADMIN_EMAIL || 'mokshithnaik932@gmail.com'],
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #AD9C8E;">New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <div style="padding: 1rem; background: #F8F9FA; border-radius: 8px;">
            <p>${message.replace(/\n/g, '<br/>')}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
