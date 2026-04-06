<?php
/**
 * WordPress Functions for Breezyee Moves
 * Add this to your WordPress theme's functions.php file
 */

// Enable CORS for Next.js integration
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: https://www.breezyeemoves.co.uk");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
}
add_action('init','add_cors_http_header');

// Custom Post Types
function create_breezyee_post_types() {
    // Services Post Type
    register_post_type('service', array(
        'labels' => array(
            'name' => 'Services',
            'singular_name' => 'Service',
            'add_new' => 'Add New Service',
            'add_new_item' => 'Add New Service',
            'edit_item' => 'Edit Service',
            'new_item' => 'New Service',
            'view_item' => 'View Service',
            'search_items' => 'Search Services',
            'not_found' => 'No services found',
            'not_found_in_trash' => 'No services found in trash'
        ),
        'public' => true,
        'show_in_rest' => true,
        'rest_base' => 'services',
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields', 'excerpt'),
        'menu_icon' => 'dashicons-hammer',
        'has_archive' => true,
        'rewrite' => array('slug' => 'services'),
    ));

    // Testimonials Post Type
    register_post_type('testimonial', array(
        'labels' => array(
            'name' => 'Testimonials',
            'singular_name' => 'Testimonial',
            'add_new' => 'Add New Testimonial',
            'add_new_item' => 'Add New Testimonial',
            'edit_item' => 'Edit Testimonial',
            'new_item' => 'New Testimonial',
            'view_item' => 'View Testimonial',
            'search_items' => 'Search Testimonials',
            'not_found' => 'No testimonials found',
            'not_found_in_trash' => 'No testimonials found in trash'
        ),
        'public' => true,
        'show_in_rest' => true,
        'rest_base' => 'testimonials',
        'supports' => array('title', 'editor', 'custom-fields'),
        'menu_icon' => 'dashicons-star-filled',
        'has_archive' => false,
    ));
}
add_action('init', 'create_breezyee_post_types');

// Webhook for Next.js synchronization
function trigger_nextjs_revalidation($post_id, $post, $update) {
    $webhook_url = 'https://www.breezyeemoves.co.uk/api/wordpress/sync';
    $webhook_secret = 'breezyee-webhook-secret-2024';
    
    $data = array(
        'action' => $update ? 'post_updated' : 'post_published',
        'post_type' => $post->post_type,
        'post_id' => $post_id,
        'post_slug' => $post->post_name,
        'timestamp' => current_time('timestamp')
    );
    
    $response = wp_remote_post($webhook_url, array(
        'body' => json_encode($data),
        'headers' => array(
            'Content-Type' => 'application/json',
            'X-Webhook-Secret' => $webhook_secret
        ),
        'timeout' => 30
    ));
    
    if (is_wp_error($response)) {
        error_log('Webhook failed: ' . $response->get_error_message());
    }
}
add_action('save_post', 'trigger_nextjs_revalidation', 10, 3);
add_action('delete_post', 'trigger_nextjs_revalidation', 10, 3);

// Add custom fields support for REST API
function add_custom_fields_to_rest() {
    register_rest_field('service', 'acf', array(
        'get_callback' => function($post) {
            return get_fields($post['id']);
        }
    ));
    
    register_rest_field('testimonial', 'acf', array(
        'get_callback' => function($post) {
            return get_fields($post['id']);
        }
    ));
}
add_action('rest_api_init', 'add_custom_fields_to_rest');

// SEO enhancements
function breezyee_seo_meta() {
    if (is_singular('service')) {
        global $post;
        $price = get_field('price', $post->ID);
        if ($price) {
            echo '<meta name="price" content="' . esc_attr($price) . '">';
        }
    }
}
add_action('wp_head', 'breezyee_seo_meta');

// Custom REST API endpoints
function register_breezyee_routes() {
    register_rest_route('breezyee/v1', '/services', array(
        'methods' => 'GET',
        'callback' => 'get_breezyee_services',
        'permission_callback' => '__return_true'
    ));
    
    register_rest_route('breezyee/v1', '/testimonials', array(
        'methods' => 'GET',
        'callback' => 'get_breezyee_testimonials',
        'permission_callback' => '__return_true'
    ));
}
add_action('rest_api_init', 'register_breezyee_routes');

function get_breezyee_services() {
    $services = get_posts(array(
        'post_type' => 'service',
        'posts_per_page' => -1,
        'post_status' => 'publish'
    ));
    
    $formatted_services = array();
    foreach ($services as $service) {
        $formatted_services[] = array(
            'id' => $service->ID,
            'title' => $service->post_title,
            'content' => $service->post_content,
            'slug' => $service->post_name,
            'acf' => get_fields($service->ID)
        );
    }
    
    return $formatted_services;
}

function get_breezyee_testimonials() {
    $testimonials = get_posts(array(
        'post_type' => 'testimonial',
        'posts_per_page' => -1,
        'post_status' => 'publish'
    ));
    
    $formatted_testimonials = array();
    foreach ($testimonials as $testimonial) {
        $formatted_testimonials[] = array(
            'id' => $testimonial->ID,
            'title' => $testimonial->post_title,
            'content' => $testimonial->post_content,
            'acf' => get_fields($testimonial->ID)
        );
    }
    
    return $formatted_testimonials;
}
?>
