# 🔧 Environment Variables Setup

## Quick Fix for Environment Variables Not Loading

### Step 1: Create .env.local file

Create a file called `.env.local` in your project root (same level as `package.json`) with the following content:

```bash
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Email Configuration (Resend)
RESEND_API_KEY=re_your_resend_api_key_here

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here

# Other Configuration
NODE_ENV=development
```

### Step 2: Replace Placeholder Values

Replace the placeholder values with your actual API keys:

1. **Stripe Keys**: Get from [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. **Resend Key**: Get from [Resend Dashboard](https://resend.com/api-keys)
3. **NextAuth Secret**: Generate a random string (for development)

### Step 3: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 4: Test Environment Variables

Visit: `http://localhost:3000/api/debug/env`

This will show you which environment variables are loaded correctly.

## Common Issues & Solutions

### Issue: Variables still not loading after creating .env.local

**Solution**: 
1. Make sure the file is named exactly `.env.local` (not `.env` or `.env.local.txt`)
2. Make sure there are no spaces around the `=` sign
3. Make sure there are no quotes around the values
4. Restart your development server completely

### Issue: Variables work in development but not in production

**Solution**: 
1. Add the same variables to your Vercel project settings
2. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
3. Add each variable with the same names

### Issue: NEXT_PUBLIC_ variables not working

**Solution**:
1. Variables starting with `NEXT_PUBLIC_` are exposed to the browser
2. Make sure they don't contain sensitive information
3. Restart the development server after adding them

## File Structure

Your project should look like this:

```
removal-company-website semi/
├── .env.local          ← Create this file
├── package.json
├── app/
├── components/
└── ...
```

## Testing

After setting up your environment variables:

1. **Start the server**: `npm run dev`
2. **Check environment**: Visit `http://localhost:3000/api/debug/env`
3. **Test quote page**: Visit `http://localhost:3000/quote`
4. **Test breezer page**: Visit `http://localhost:3000/breezer`

## Security Notes

- Never commit `.env.local` to version control
- The file is already in `.gitignore`
- Use different keys for development and production
- Keep your API keys secure

## Need Help?

If you're still having issues:

1. Check the debug endpoint: `/api/debug/env`
2. Look at the console output when starting the server
3. Make sure all required variables are set
4. Try creating a simple test variable to verify loading works 