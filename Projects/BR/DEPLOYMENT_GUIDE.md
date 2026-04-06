# 🚀 Breezyee Moves Website - Complete Deployment Guide

## 📋 Overview
This guide will help you deploy the Breezyee Moves website to **www.breezyeemoves.co.uk** with full WordPress integration.

## 🛠️ Prerequisites
- Node.js 18+ installed
- Git installed
- Vercel account
- WordPress hosting account
- Domain access (breezyeemoves.co.uk)

## 📁 Project Structure
\`\`\`
breezyee-moves-website/
├── app/                    # Next.js App Router pages
├── components/             # React components
├── lib/                   # Utility functions
├── public/                # Static assets
├── wordpress-files/       # WordPress configuration files
├── .env.production        # Production environment variables
├── next.config.mjs        # Next.js configuration
├── package.json           # Dependencies
├── vercel.json           # Vercel deployment config
└── DEPLOYMENT_GUIDE.md   # This file
\`\`\`

## 🔧 Step 1: Environment Setup

### 1.1 Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 1.2 Environment Variables
Create `.env.local` for development and set these in Vercel for production:

\`\`\`env
# WordPress Configuration
WORDPRESS_API_URL=https://wp.breezyeemoves.co.uk/wp-json/wp/v2
WORDPRESS_API_TOKEN=your-jwt-token-here
WORDPRESS_WEBHOOK_SECRET=breezyee-webhook-secret-2024
NEXT_PUBLIC_WORDPRESS_URL=https://wp.breezyeemoves.co.uk

# Application URLs
NEXT_PUBLIC_APP_URL=https://www.breezyeemoves.co.uk
NEXT_PUBLIC_SITE_URL=https://www.breezyeemoves.co.uk

# Email Configuration (Resend)
RESEND_API_KEY=your-resend-api-key-here

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
\`\`\`

## 🌐 Step 2: Domain & DNS Configuration

### 2.1 DNS Records Setup
Configure these DNS records in your domain provider:

\`\`\`
Type: A
Name: @
Value: 76.76.19.61
TTL: 300

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 300

Type: CNAME
Name: wp
Value: your-wordpress-hosting-provider.com
TTL: 300
\`\`\`

### 2.2 SSL Certificate
- Vercel will automatically provision SSL for the main domain
- Ensure WordPress hosting has SSL enabled for wp.breezyeemoves.co.uk

## 📝 Step 3: WordPress Setup

### 3.1 WordPress Hosting
**Recommended Providers:**
- WP Engine (Premium)
- Kinsta (Premium)
- SiteGround (Budget-friendly)
- Bluehost (Budget-friendly)

### 3.2 WordPress Installation
1. Install WordPress on `wp.breezyeemoves.co.uk`
2. Choose a lightweight theme (Astra, GeneratePress, or Twenty Twenty-Four)
3. Install required plugins:

\`\`\`
Required Plugins:
- Advanced Custom Fields Pro
- Custom Post Type UI
- JWT Authentication for WP REST API
- Yoast SEO
- WP Super Cache
- Wordfence Security
\`\`\`

### 3.3 WordPress Configuration
1. Copy content from `wordpress-functions.php` to your theme's `functions.php`
2. Import ACF field groups from `acf-service-fields.json` and `acf-testimonial-fields.json`
3. Configure JWT Authentication plugin
4. Set up webhook endpoints

### 3.4 WordPress Content Setup
Create these post types and add sample content:
- Services (with pricing and features)
- Testimonials (with ratings and customer details)
- Blog posts for SEO

## 🚀 Step 4: Vercel Deployment

### 4.1 Connect to Vercel
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Configure project settings:

\`\`\`
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev
\`\`\`

### 4.2 Environment Variables in Vercel
Add all environment variables from `.env.production` in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add each variable for Production environment

### 4.3 Domain Configuration in Vercel
1. Go to Project Settings → Domains
2. Add `www.breezyeemoves.co.uk` as primary domain
3. Add `breezyeemoves.co.uk` and redirect to www version

## 📧 Step 5: Email Configuration

### 5.1 Resend Setup
1. Create account at resend.com
2. Verify domain `breezyeemoves.co.uk`
3. Add DNS records for email verification
4. Get API key and add to environment variables

### 5.2 Email Templates
The following forms will send emails:
- Contact form → `contactus@breezyeemoves.co.uk`
- Quote requests → `contactus@breezyeemoves.co.uk`
- Job applications → `contactus@breezyeemoves.co.uk`

## 🔍 Step 6: SEO & Analytics Setup

### 6.1 Google Search Console
1. Add property for `https://www.breezyeemoves.co.uk`
2. Verify ownership via DNS or HTML file
3. Submit sitemap: `https://www.breezyeemoves.co.uk/sitemap.xml`

### 6.2 Google Analytics
1. Create GA4 property
2. Add tracking ID to environment variables
3. Verify tracking is working

### 6.3 Google My Business
1. Create/claim business listing
2. Add accurate business information
3. Upload photos and get reviews

## 🧪 Step 7: Testing

### 7.1 Functionality Testing
- [ ] All pages load correctly
- [ ] Contact forms submit successfully
- [ ] Quote form works and sends emails
- [ ] WordPress admin accessible
- [ ] Content synchronization working
- [ ] Mobile responsiveness
- [ ] Page speed optimization

### 7.2 SEO Testing
- [ ] Meta tags present on all pages
- [ ] Structured data validates
- [ ] Sitemap accessible
- [ ] Robots.txt correct
- [ ] Page titles and descriptions optimized

## 🔧 Step 8: Maintenance & Updates

### 8.1 Regular Tasks
- Update WordPress plugins monthly
- Monitor website performance
- Check for broken links
- Update content regularly
- Monitor email deliverability

### 8.2 Backup Strategy
- WordPress: Use hosting provider's backup service
- Next.js: Code is backed up in Git repository
- Database: Regular WordPress database backups

## 📞 Support & Troubleshooting

### Common Issues:
1. **WordPress connection fails**: Check API URL and authentication
2. **Forms not sending emails**: Verify Resend API key and domain verification
3. **Images not loading**: Check image paths and Vercel configuration
4. **Slow loading**: Optimize images and enable caching

### Support Contacts:
- Vercel Support: vercel.com/help
- WordPress Hosting: Your hosting provider's support
- Domain Issues: Your domain registrar's support

## 🎯 Go-Live Checklist

### Pre-Launch:
- [ ] All environment variables set
- [ ] DNS records configured
- [ ] SSL certificates active
- [ ] WordPress fully configured
- [ ] All forms tested
- [ ] Content added
- [ ] SEO setup complete

### Post-Launch:
- [ ] Monitor website performance
- [ ] Check Google Search Console
- [ ] Verify analytics tracking
- [ ] Test all functionality
- [ ] Monitor email delivery
- [ ] Check mobile experience

## 📈 Performance Optimization

### Recommended Settings:
- Enable Vercel Edge Caching
- Optimize images (already configured)
- Use WordPress caching plugin
- Minimize plugin usage
- Regular performance monitoring

---

## 🚀 Quick Deploy Commands

\`\`\`bash
# Development
npm run dev

# Build for production
npm run build

# Deploy to Vercel
npm run deploy

# Deploy preview
npm run deploy-preview
\`\`\`

## 📋 Final Notes

This website is fully configured for:
- ✅ Professional removal services business
- ✅ SEO optimization for London market
- ✅ Mobile-responsive design
- ✅ WordPress content management
- ✅ Email form handling
- ✅ Performance optimization
- ✅ Security best practices

The website is ready for deployment and will provide an excellent online presence for Breezyee Moves!
\`\`\`

Now let me create the final deployment checklist:
