# WordPress CMS Integration Setup Guide

## Overview
This Next.js website is now compatible with WordPress as a headless CMS. WordPress serves as the content management backend while Next.js handles the frontend presentation and business logic.

## WordPress Setup Requirements

### 1. WordPress Installation
- Install WordPress (latest version recommended)
- Enable REST API (enabled by default in WordPress 4.7+)
- Install recommended plugins (see below)

### 2. Required WordPress Plugins

#### Essential Plugins:
- **Advanced Custom Fields (ACF) Pro** - For custom content fields
- **Custom Post Type UI** - For creating custom post types
- **WP REST API Controller** - Enhanced REST API functionality
- **JWT Authentication for WP REST API** - Secure API access

#### Recommended Plugins:
- **Yoast SEO** - SEO optimization
- **Contact Form 7** - Form management
- **WP Super Cache** - Performance optimization
- **Wordfence Security** - Security enhancement

### 3. Custom Post Types Setup

Create these custom post types in WordPress:

#### Services Post Type
\`\`\`php
// Add to functions.php or use Custom Post Type UI plugin
function create_services_post_type() {
    register_post_type('service',
        array(
            'labels' => array(
                'name' => 'Services',
                'singular_name' => 'Service'
            ),
            'public' => true,
            'show_in_rest' => true,
            'rest_base' => 'services',
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields')
        )
    );
}
add_action('init', 'create_services_post_type');
\`\`\`

#### Testimonials Post Type
\`\`\`php
function create_testimonials_post_type() {
    register_post_type('testimonial',
        array(
            'labels' => array(
                'name' => 'Testimonials',
                'singular_name' => 'Testimonial'
            ),
            'public' => true,
            'show_in_rest' => true,
            'rest_base' => 'testimonials',
            'supports' => array('title', 'editor', 'custom-fields')
        )
    );
}
add_action('init', 'create_testimonials_post_type');
\`\`\`

### 4. Advanced Custom Fields Setup

#### Service Fields:
- `price` (Text) - Service pricing
- `features` (Repeater) - Service features list
- `icon` (Text) - Icon identifier
- `description` (Textarea) - Short description

#### Testimonial Fields:
- `customer_name` (Text) - Customer name
- `customer_location` (Text) - Customer location
- `rating` (Number) - Star rating (1-5)
- `testimonial_text` (Textarea) - Testimonial content

### 5. Environment Variables

Add these to your `.env.local` file:

\`\`\`env
# WordPress API Configuration
WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
WORDPRESS_API_TOKEN=your-jwt-token-here
WORDPRESS_WEBHOOK_SECRET=your-webhook-secret-here

# Optional: WordPress Admin Credentials
WORDPRESS_USERNAME=your-admin-username
WORDPRESS_PASSWORD=your-admin-password
\`\`\`

### 6. WordPress Webhook Setup

Add this to your WordPress functions.php to enable automatic content synchronization:

\`\`\`php
// Webhook for content synchronization
function trigger_nextjs_revalidation($post_id, $post, $update) {
    $webhook_url = 'https://your-nextjs-site.com/api/wordpress/sync';
    $webhook_secret = 'your-webhook-secret-here';
    
    $data = array(
        'action' => $update ? 'post_updated' : 'post_published',
        'post_type' => $post->post_type,
        'post_id' => $post_id,
        'post_slug' => $post->post_name
    );
    
    wp_remote_post($webhook_url, array(
        'body' => json_encode($data),
        'headers' => array(
            'Content-Type' => 'application/json',
            'X-Webhook-Secret' => $webhook_secret
        )
    ));
}

add_action('save_post', 'trigger_nextjs_revalidation', 10, 3);
add_action('delete_post', 'trigger_nextjs_revalidation', 10, 3);
\`\`\`

## Content Management Workflow

### 1. Managing Services
1. Go to WordPress Admin → Services
2. Add new service with title, content, and custom fields
3. Set price, features, icon, and description
4. Publish to automatically sync with Next.js

### 2. Managing Testimonials
1. Go to WordPress Admin → Testimonials
2. Add customer details in custom fields
3. Set rating and testimonial text
4. Publish to display on website

### 3. Managing Blog Posts
1. Use standard WordPress Posts
2. Content automatically appears in /blog
3. SEO handled by Yoast plugin

### 4. Managing Pages
1. Use WordPress Pages for static content
2. About, Contact pages can be managed via WordPress
3. Custom fields for additional page data

## Benefits of This Setup

### For Developers:
- ✅ Keep Next.js performance and features
- ✅ Maintain custom business logic
- ✅ Use WordPress as data source only
- ✅ Automatic content synchronization
- ✅ SEO optimization through WordPress

### For Content Managers:
- ✅ Familiar WordPress interface
- ✅ Rich text editor with media management
- ✅ User roles and permissions
- ✅ Content scheduling and drafts
- ✅ SEO tools and analytics

### For Business:
- ✅ Reduced development costs
- ✅ Easy content updates
- ✅ Scalable architecture
- ✅ WordPress ecosystem benefits
- ✅ Future-proof solution

## Deployment Notes

1. **WordPress Hosting**: Use managed WordPress hosting (WP Engine, Kinsta, etc.)
2. **Next.js Hosting**: Deploy to Vercel, Netlify, or similar
3. **CDN**: Use WordPress CDN for media files
4. **Caching**: Implement proper caching strategies
5. **Security**: Secure WordPress admin and API endpoints

## Troubleshooting

### Common Issues:
1. **CORS Errors**: Configure WordPress CORS headers
2. **API Timeouts**: Optimize WordPress performance
3. **Content Not Updating**: Check webhook configuration
4. **Missing Fields**: Verify ACF field names match code


### Support Resources:
- WordPress REST API Documentation
- Advanced Custom Fields Documentation
- Next.js ISR (Incremental Static Regeneration) Guide
