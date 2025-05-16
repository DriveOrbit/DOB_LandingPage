import { NextResponse } from 'next/server';

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

    // Replace this with your Formspree form ID
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id';
    
    // Send the data to Formspree
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit to Formspree');
    }
    
    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
