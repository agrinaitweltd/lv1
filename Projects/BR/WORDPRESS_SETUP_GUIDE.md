# WordPress Setup Guide for Breezyee Moves

## 🚀 Quick Setup Steps

### 1. WordPress Hosting Setup
**Recommended Hosting:** WP Engine, Kinsta, or SiteGround
**Subdomain:** wp.breezyeemoves.co.uk

### 2. WordPress Installation
1. Install WordPress on wp.breezyeemoves.co.uk
2. Set up SSL certificate
3. Configure basic WordPress settings

### 3. Required Plugins Installation
\`\`\`bash
# Install these plugins via WordPress admin:
- Advanced Custom Fields Pro
- Custom Post Type UI
- JWT Authentication for WP REST API
- Yoast SEO
- WP Super Cache
- Wordfence Security
\`\`\`

### 4. Theme Setup
1. Install a lightweight theme (Astra, GeneratePress, or Twenty Twenty-Four)
2. Add the functions.php code from wordpress-functions.php
3. Import ACF field groups from the JSON files

### 5. Environment Variables Setup
Add these to your Vercel deployment:

\`\`\`env
WORDPRESS_API_URL=https://wp.breezyeemoves.co.uk/wp-json/wp/v2
WORDPRESS_API_TOKEN=your-jwt-token
WORDPRESS_WEBHOOK_SECRET=breezyee-webhook-secret-2024
NEXT_PUBLIC_WORDPRESS_URL=https://wp.breezyeemoves.co.uk
NEXT_PUBLIC_APP_URL=https://www.breezyeemoves.co.uk
\`\`\`

### 6. DNS Configuration
Set up these DNS records:

\`\`\`
Type: CNAME
Name: wp
Value: your-wordpress-host.com

Type: A
Name: @
Value: 76.76.19.61 (Vercel IP)

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
\`\`\`

### 7. Content Creation
1. Create services with pricing and features
2. Add customer testimonials with ratings
3. Write blog posts for SEO
4. Upload team photos and company images

### 8. Testing
1. Test WordPress admin at wp.breezyeemoves.co.uk/wp-admin
2. Test Next.js admin at www.breezyeemoves.co.uk/admin
3. Verify content synchronization
4. Check all forms are working

## 📞 Support
Need help? Contact your developer or WordPress hosting support.
\`\`\`

Create a deployment script:
