# 🚀 Stripe Integration Setup Guide

## Overview

This guide will help you set up Stripe payment processing for the Breezyee Moves website. The integration includes:

- ✅ Instant pricing calculation
- ✅ Secure payment processing
- ✅ Webhook handling for payment confirmations
- ✅ Email notifications for successful payments
- ✅ Customer management

## 🔧 Prerequisites

1. **Stripe Account**: Create a Stripe account at [stripe.com](https://stripe.com)
2. **Vercel Account**: For deployment (already configured)
3. **Resend Account**: For email notifications (already configured)

## 📋 Step-by-Step Setup

### Step 1: Stripe Account Setup

1. **Create Stripe Account**
   - Go to [stripe.com](https://stripe.com) and sign up
   - Complete business verification
   - Add your business details

2. **Get API Keys**
   - Go to Stripe Dashboard → Developers → API Keys
   - Copy your **Publishable Key** and **Secret Key**
   - Keep these secure - never commit them to version control

### Step 2: Environment Variables

Add these environment variables to your Vercel project:

```bash
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Email Configuration (Resend)
RESEND_API_KEY=re_your_resend_api_key_here
```

**To add in Vercel:**
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add each variable with the appropriate value
4. Deploy to apply changes

### Step 3: Webhook Configuration

1. **Create Webhook Endpoint**
   - Go to Stripe Dashboard → Developers → Webhooks
   - Click "Add endpoint"
   - Set endpoint URL: `https://your-domain.com/api/stripe/webhook`
   - Select events to listen for:
     - `payment_intent.succeeded`
     - `payment_intent.payment_failed`
     - `customer.subscription.created`

2. **Get Webhook Secret**
   - After creating the webhook, click on it
   - Copy the "Signing secret" (starts with `whsec_`)
   - Add this to your `STRIPE_WEBHOOK_SECRET` environment variable

### Step 4: Test the Integration

1. **Test Mode**
   - Use Stripe test cards for testing:
     - Success: `4242 4242 4242 4242`
     - Decline: `4000 0000 0000 0002`
   - Use any future expiry date and any 3-digit CVC

2. **Test Payment Flow**
   - Go to `/quote` page
   - Fill out the form
   - Select service type and size
   - Click "Book Now & Pay"
   - Use test card details
   - Verify payment success

### Step 5: Go Live

1. **Switch to Live Mode**
   - In Stripe Dashboard, toggle to "Live" mode
   - Get your live API keys
   - Update environment variables with live keys
   - Update webhook endpoint URL to production domain

2. **Update Webhook**
   - Update webhook endpoint to production URL
   - Get new webhook secret for live mode
   - Update `STRIPE_WEBHOOK_SECRET` environment variable

## 🧪 Testing Checklist

### Quote Page Testing
- [ ] Instant pricing calculation works
- [ ] Payment form appears when required fields are filled
- [ ] Payment processing works with test cards
- [ ] Success/error messages display correctly
- [ ] Form resets after successful payment
- [ ] Email notifications are sent

### Breezer Page Testing
- [ ] Pricing calculation based on helpers × hours
- [ ] Payment integration works
- [ ] Booking confirmation flow
- [ ] Email notifications

### Webhook Testing
- [ ] Payment success webhook triggers
- [ ] Payment failure webhook triggers
- [ ] Email notifications are sent correctly
- [ ] Customer data is stored properly

## 🔒 Security Considerations

1. **API Keys**
   - Never expose secret keys in client-side code
   - Use environment variables for all sensitive data
   - Rotate keys regularly

2. **Webhook Security**
   - Always verify webhook signatures
   - Use HTTPS for all webhook endpoints
   - Monitor webhook failures

3. **PCI Compliance**
   - Stripe handles PCI compliance automatically
   - Never store card details directly
   - Use Stripe Elements for secure card input

## 📧 Email Notifications

The system sends emails for:

1. **Payment Success**
   - Customer confirmation
   - Business notification

2. **Payment Failure**
   - Customer notification
   - Error details

3. **Quote Requests** (existing)
   - Customer confirmation
   - Business notification

## 🛠️ Troubleshooting

### Common Issues

1. **Payment Intent Creation Fails**
   - Check `STRIPE_SECRET_KEY` is correct
   - Verify amount is in pence (not pounds)
   - Check currency is set to "gbp"

2. **Webhook Not Working**
   - Verify webhook URL is correct
   - Check `STRIPE_WEBHOOK_SECRET` matches
   - Ensure webhook endpoint is accessible

3. **Email Not Sending**
   - Check `RESEND_API_KEY` is valid
   - Verify email addresses are correct
   - Check Resend account status

### Debug Mode

To enable debug logging, add to environment variables:
```bash
DEBUG_STRIPE=true
DEBUG_EMAILS=true
```

## 📊 Monitoring

1. **Stripe Dashboard**
   - Monitor payments in real-time
   - Check webhook delivery status
   - Review customer data

2. **Vercel Logs**
   - Monitor API route performance
   - Check for errors in payment processing
   - Review webhook handling

3. **Email Delivery**
   - Monitor email delivery rates
   - Check spam folder settings
   - Review email templates

## 🎯 Success Metrics

Track these metrics to ensure success:

- **Conversion Rate**: Quote requests to payments
- **Payment Success Rate**: Successful vs failed payments
- **Customer Satisfaction**: Post-payment feedback
- **Response Time**: Payment processing speed

## 📞 Support

If you encounter issues:

1. **Stripe Support**: [support.stripe.com](https://support.stripe.com)
2. **Vercel Support**: [vercel.com/help](https://vercel.com/help)
3. **Resend Support**: [resend.com/support](https://resend.com/support)

## 🎉 Congratulations!

Once all steps are completed, your website will have:

✅ Secure payment processing
✅ Instant pricing and booking
✅ Automated email notifications
✅ Customer management
✅ Professional payment experience

Your customers can now book and pay for services instantly! 