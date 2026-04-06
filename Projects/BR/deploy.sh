#!/bin/bash

# Breezyee Moves Deployment Script

echo "🚀 Deploying Breezyee Moves to www.breezyeemoves.co.uk"

# Build the project
echo "📦 Building project..."
npm run build

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod --yes

# Update environment variables
echo "⚙️ Setting environment variables..."
vercel env add NEXT_PUBLIC_APP_URL production
vercel env add WORDPRESS_API_URL production
vercel env add WORDPRESS_WEBHOOK_SECRET production

echo "✅ Deployment complete!"
echo "🌍 Website: https://www.breezyeemoves.co.uk"
echo "⚙️ Admin: https://www.breezyeemoves.co.uk/admin"
echo "📝 WordPress: https://wp.breezyeemoves.co.uk/wp-admin"

echo ""
echo "📋 Next Steps:"
echo "1. Set up WordPress hosting at wp.breezyeemoves.co.uk"
echo "2. Install required WordPress plugins"
echo "3. Configure DNS records"
echo "4. Test all functionality"
