import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
// You'll need to set this in your environment variables
// For local development, you can use .env.local file
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.fleetSize) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // If SendGrid API key is not set, return an error
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Format the email content
    const emailContent = `
      <h2>New Form Submission from DriveOrbit</h2>
      <p><strong>Name:</strong> ${formData.fullName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
      <p><strong>Fleet Size:</strong> ${formData.fleetSize}</p>
      <p><strong>Role:</strong> ${formData.role || 'Not provided'}</p>
      <p><strong>Message:</strong> ${formData.message || 'Not provided'}</p>
      <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
    `;

    // Configure the email
    const msg = {
      to: process.env.RECIPIENT_EMAIL || 'your-email@example.com', // Set your email in environment variables
      from: process.env.SENDER_EMAIL || 'noreply@driveorbit.com', // Set a verified sender in SendGrid
      subject: 'New DriveOrbit Form Submission',
      html: emailContent,
      replyTo: formData.email,
    };

    // Send the email
    await sgMail.send(msg);

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
