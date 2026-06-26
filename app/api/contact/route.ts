import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, school, role, email, size, message } = body;

    // Validate required fields
    if (!name || !school || !role || !email || !size) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Send email here using your email service
    // Options: SendGrid, Mailgun, Gmail API, or custom SMTP
    console.log('Contact form submission:', { name, school, role, email, size, message });

    return NextResponse.json(
      { success: true, message: 'Demo request received. We\'ll be in touch within 24 hours.' },
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
