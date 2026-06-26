import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, school, role, email, size, message, turnstileToken } = body;

    // Validate required fields
    if (!name || !school || !role || !email || !size) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate Turnstile in production
    if (process.env.NODE_ENV === 'production' && turnstileToken) {
      const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      });

      const turnstileData = await turnstileResponse.json() as { success: boolean };
      if (!turnstileData.success) {
        return NextResponse.json(
          { error: 'Verification failed' },
          { status: 400 }
        );
      }
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailHtml = `
      <h2>New Demo Request from PhotoKiosk</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>School:</strong> ${school}</p>
      <p><strong>Role:</strong> ${role}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>School Size:</strong> ${size} students</p>
      ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `Demo Request from ${name} - ${school}`,
      html: emailHtml,
      replyTo: email,
    });

    return NextResponse.json(
      { success: true, message: 'Demo request received. We\'ll be in touch within 48 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
