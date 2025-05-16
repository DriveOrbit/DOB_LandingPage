# DriveOrbit Form Setup

This document explains how the form submission works and how to receive form submissions to your email address.

## How It Works

The form on the DriveOrbit website uses [Formsubmit.co](https://formsubmit.co/), a free service that allows you to receive form submissions directly to your email without any backend code or API keys.

### Current Setup

1. The form is configured to send submissions to: `info@driveorbit.pro`
2. When a user submits the form, the data is sent directly to Formsubmit.co
3. Formsubmit.co processes the submission and forwards it to your email
4. The user is redirected to a thank you page

### First-Time Setup

The first time someone submits the form, Formsubmit.co will send a confirmation email to `info@driveorbit.pro`. You'll need to:

1. Check the inbox for `info@driveorbit.pro`
2. Look for an email from Formsubmit.co
3. Click the activation link in the email to confirm your email address
4. After confirmation, all future form submissions will be sent directly to your email

## Form Configuration

The form is configured with several hidden fields:

- `_subject`: Sets the email subject line to "New DriveOrbit Form Submission"
- `_template`: Uses the "table" template for better formatting in the email
- `_next`: Redirects users to the thank-you page after submission
- `_captcha`: Disabled the captcha (you can enable it if you start getting spam)

## Customizing the Form

### Changing the Recipient Email

If you want to change where form submissions are sent:

1. Open `app/form/page.tsx`
2. Find the line: `<form action="https://formsubmit.co/info@driveorbit.pro" method="POST" className="space-y-5">`
3. Replace `info@driveorbit.pro` with your desired email address

### Adding Form Fields

To add new fields to the form:

1. Add the HTML for the new field in the form
2. Make sure to set the `name` attribute to what you want to appear in the email

### Enabling Spam Protection

If you start receiving spam submissions:

1. Open `app/form/page.tsx`
2. Find the line: `<input type="hidden" name="_captcha" value="false" />`
3. Change `value="false"` to `value="true"`

## Troubleshooting

### Not Receiving Submissions

1. Check your spam/junk folder
2. Verify that you clicked the activation link in the confirmation email
3. Make sure the email address in the form action is correct

### Form Not Redirecting to Thank You Page

1. Make sure the `_next` hidden field has the correct URL
2. Check that the thank-you page exists at the correct path

## Alternative Options

If you need more advanced features, consider:

1. **SendGrid**: For more control over email formatting and delivery
2. **Formspree**: Similar to Formsubmit but with more features in paid plans
3. **Custom API**: Build your own backend API for complete control

These alternatives require more setup but offer additional functionality.
