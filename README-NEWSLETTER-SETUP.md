# DriveOrbit Newsletter Subscription Setup

This document explains how the newsletter subscription functionality works in the DriveOrbit website.

## How It Works

The newsletter subscription form in the footer of the DriveOrbit website uses [Formsubmit.co](https://formsubmit.co/), a free service that allows you to receive form submissions directly to your email without any backend code or API keys.

### Current Setup

1. The subscription form is configured to send submissions to: `info@driveorbit.pro`
2. When a user submits the form, the data is sent directly to Formsubmit.co
3. Formsubmit.co processes the submission and forwards it to your email
4. The user is redirected to a thank you page

### First-Time Setup

The first time someone submits the newsletter form, Formsubmit.co will send a confirmation email to `info@driveorbit.pro`. You'll need to:

1. Check the inbox for `info@driveorbit.pro`
2. Look for an email from Formsubmit.co
3. Click the activation link in the email to confirm your email address
4. After confirmation, all future form submissions will be sent directly to your email

## Form Configuration

The newsletter subscription form is configured with several hidden fields:

- `_subject`: Sets the email subject line to "New DriveOrbit Newsletter Subscription"
- `_template`: Uses the "table" template for better formatting in the email
- `_next`: Redirects users to the thank-you page after submission
- `_captcha`: Disabled the captcha (you can enable it if you start getting spam)

## Collected Information

The newsletter subscription form collects the following information:

1. **Name** (optional): The user's name
2. **Email** (required): The user's email address
3. **Subscribe Newsletter**: Whether the user has checked the subscription checkbox

## Thank You Page

After submitting the form, users are redirected to a thank you page at `/newsletter-thank-you` that:
- Shows a success animation with a checkmark
- Displays a thank you message
- Provides a button to return to the home page

## Customizing the Form

### Changing the Recipient Email

If you want to change where newsletter subscriptions are sent:

1. Open `app/page.tsx`
2. Find the line: `<form action="https://formsubmit.co/info@driveorbit.pro" method="POST" className="flex flex-col space-y-2">`
3. Replace `info@driveorbit.pro` with your desired email address

### Adding Form Fields

To add new fields to the newsletter subscription form:

1. Add the HTML for the new field in the form
2. Make sure to set the `name` attribute to what you want to appear in the email

### Enabling Spam Protection

If you start receiving spam submissions:

1. Open `app/page.tsx`
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

## Managing Your Subscriber List

Since this is a simple email-based solution, you'll need to manually manage your subscriber list:

1. Create a spreadsheet to track subscribers
2. Add new subscribers to the spreadsheet when you receive form submissions
3. For sending newsletters, you can use an email marketing service like Mailchimp or SendGrid by importing your subscriber list
