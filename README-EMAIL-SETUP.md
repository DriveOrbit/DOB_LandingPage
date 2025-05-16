# Email Setup for DriveOrbit Form

This document explains how to set up email functionality for the DriveOrbit form.

## Option 1: Using SendGrid (Recommended for Production)

### Step 1: Create a SendGrid Account
1. Go to [SendGrid](https://sendgrid.com/) and sign up for a free account
2. Verify your account and create an API key with "Mail Send" permissions
3. Verify your sender email address in SendGrid

### Step 2: Configure Environment Variables
1. Edit the `.env.local` file in the root of your project:
```
SENDGRID_API_KEY=your_sendgrid_api_key_here
RECIPIENT_EMAIL=your-email@example.com
SENDER_EMAIL=your-verified-sender@example.com
```

2. For production, add these environment variables to your hosting platform (Vercel, Netlify, etc.)

### Step 3: Test the Form
1. Run your application locally
2. Fill out and submit the form
3. Check your email to see if you received the submission

## Option 2: Using Formspree (Easiest Setup)

### Step 1: Create a Formspree Account
1. Go to [Formspree](https://formspree.io/) and sign up for a free account
2. Create a new form
3. Copy your form ID (it looks like `xrgodpwk`)

### Step 2: Update the API Route
1. Edit `app/api/formspree-submit/route.ts` and replace `your-form-id` with your actual Formspree form ID
2. Update the form submission endpoint in `app/form/page.tsx` to use `/api/formspree-submit` instead of `/api/submit-form`

### Step 3: Test the Form
1. Run your application locally
2. Fill out and submit the form
3. Check your email to see if you received the submission
4. You can also view submissions in your Formspree dashboard

## Troubleshooting

### Form Submissions Not Working
- Check browser console for any errors
- Verify that your API keys are correctly set
- Make sure your sender email is verified in SendGrid
- Check server logs for any backend errors

### Email Not Being Received
- Check your spam/junk folder
- Verify that the recipient email is correct in your environment variables
- Make sure your SendGrid account is active and not suspended

### Rate Limiting
- Free SendGrid accounts have sending limits
- Consider upgrading if you expect high form submission volumes
