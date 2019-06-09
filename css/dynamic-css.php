<?php
/*-----------------------------------------------------------------------------------*/
//	Generate Dynamic CSS
/*-----------------------------------------------------------------------------------*/
if( !function_exists( 'generate_dynamic_css' ) ){
    function generate_dynamic_css(){

        global $theme_options;

        $default_btn_bg = $theme_options['default_btn_bg'];
        $light_btn_bg = $theme_options['light_btn_bg'];
        $default_btn_text_color = $theme_options['default_btn_text_color'];
        $light_btn_text_color = $theme_options['light_btn_text_color'];

        $slide_btn_bg = $theme_options['slide_button_bg'];
        $slider_arrow_bg = $theme_options['slider_arrow_bg'];
        $slide_desc_position = $theme_options['slide_desc_position'];

        $curve_background = $theme_options['features_background'];
        $curve_height = $theme_options['curve_height'];

        $testimonial_arrow_bg = $theme_options['testimonial_arrow_bg'];
        $testimonial_image_bg = $theme_options['testimonial_image_bg'];

        $services_image_bg = $theme_options['services_image_bg'];
        $services_background_image = $theme_options['services_background_image'];

        $twitter_sparrow_bg_color = $theme_options['twitter_sparrow_bg_color'];
        $footer_scroll_top_bg = $theme_options['footer_scroll_top_bg'];
        $footer_social_icons_color = $theme_options['footer_social_icons_color'];

        $main_nav_top_margin = $theme_options['main_nav_top_margin'];

        $dynamic_css = array(

            //Default Button Background and Button Text Color
            array(
                'elements'	=>	'.post.sticky .theme-btn, input[type="submit"], #respond input[type="submit"], .toggle > dt, .accordion > dt, .selectric .button, .selectricItems li.selected, .nav-dropdown a.button, .woocommerce #content input.button, .woocommerce-page #content input.button, .woocommerce #respond input#submit, .woocommerce-page #respond input#submit, .woocommerce button.button, .woocommerce-page button.button, .woocommerce input.button, .woocommerce-page input.button, .woocommerce a.button, .woocommerce-page a.button, .woocommerce a.added_to_cart, .woocommerce-page a.added_to_cart, .woocommerce #content input.button.alt, .woocommerce-page #content input.button.alt, .woocommerce #respond input#submit.alt, .woocommerce-page #respond input#submit.alt, .woocommerce a.button.alt, .woocommerce-page a.button.alt, .woocommerce button.button.alt, .woocommerce-page button.button.alt, .woocommerce input.button.alt, .woocommerce-page input.button.alt',
                'property'	=>	'background-color',
                'value'		=> 	$default_btn_bg['regular']
            ),
            array(
                'elements'	=>	'.post.sticky .theme-btn:hover, input[type="submit"]:hover, #respond input[type="submit"]:hover, .toggle > dt:hover, .accordion > dt:hover, .toggle > dt.current, .accordion > dt.current, .nav-dropdown a.button:hover, .woocommerce #content input.button:hover, .woocommerce #respond input#submit:hover, .woocommerce a.button:hover, .woocommerce button.button:hover, .woocommerce input.button:hover, .woocommerce-page #content input.button:hover, .woocommerce-page #respond input#submit:hover, .woocommerce-page a.button:hover, .woocommerce-page button.button:hover, .woocommerce-page input.button:hover, .woocommerce #content input.button.alt:hover, .woocommerce-page #content input.button.alt:hover, .woocommerce #respond input#submit.alt:hover, .woocommerce-page #respond input#submit.alt:hover, .woocommerce a.button.alt:hover, .woocommerce-page a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce-page button.button.alt:hover, .woocommerce input.button.alt:hover, .woocommerce-page input.button.alt:hover',
                'property'	=>	'background-color',
                'value'		=> 	$default_btn_bg['hover']
            ),
            array(
                'elements'	=>	'.post.sticky .theme-btn:active, input[type="submit"]:active, #respond input[type="submit"]:active, .nav-dropdown a.button:active, .woocommerce #content input.button:active, .woocommerce #respond input#submit:active, .woocommerce a.button:active, .woocommerce button.button:active, .woocommerce input.button:active, .woocommerce-page #content input.button:active, .woocommerce-page #respond input#submit:active, .woocommerce-page a.button:active, .woocommerce-page button.button:active, .woocommerce-page input.button:active',
                'property'	=>	'background-color',
                'value'		=> 	$default_btn_bg['active']
            ),
            array(
                'elements'	=>	'.post.sticky .theme-btn, input[type="submit"], #respond input[type="submit"], .toggle > dt, .accordion > dt, .selectric .button:after, .selectricItems li.selected, .nav-dropdown a.button, .woocommerce #content input.button, .woocommerce-page #content input.button, .woocommerce #respond input#submit, .woocommerce-page #respond input#submit, .woocommerce button.button, .woocommerce-page button.button, .woocommerce input.button, .woocommerce-page input.button, .woocommerce a.button, .woocommerce-page a.button, .woocommerce a.added_to_cart, .woocommerce-page a.added_to_cart, .woocommerce #content input.button.alt, .woocommerce-page #content input.button.alt, .woocommerce #respond input#submit.alt, .woocommerce-page #respond input#submit.alt, .woocommerce a.button.alt, .woocommerce-page a.button.alt, .woocommerce button.button.alt, .woocommerce-page button.button.alt, .woocommerce input.button.alt, .woocommerce-page input.button.alt',
                'property'	=>	'color',
                'value'		=> 	$default_btn_text_color['regular']
            ),
            array(
                'elements'	=>	'.post.sticky .theme-btn:hover, input[type="submit"]:hover, #respond input[type="submit"]:hover, .toggle > dt:hover, .accordion > dt:hover, .toggle > dt.current, .accordion > dt.current, .nav-dropdown a.button:hover, .woocommerce #content input.button:hover, .woocommerce #respond input#submit:hover, .woocommerce a.button:hover, .woocommerce button.button:hover, .woocommerce input.button:hover, .woocommerce-page #content input.button:hover, .woocommerce-page #respond input#submit:hover, .woocommerce-page a.button:hover, .woocommerce-page button.button:hover, .woocommerce-page input.button:hover, .woocommerce #content input.button.alt:hover, .woocommerce-page #content input.button.alt:hover, .woocommerce #respond input#submit.alt:hover, .woocommerce-page #respond input#submit.alt:hover, .woocommerce a.button.alt:hover, .woocommerce-page a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce-page button.button.alt:hover, .woocommerce input.button.alt:hover, .woocommerce-page input.button.alt:hover',
                'property'	=>	'color',
                'value'		=> 	$default_btn_text_color['hover']
            ),
            array(
                'elements'	=>	'.post.sticky .theme-btn:active, input[type="submit"]:active, #respond input[type="submit"]:active, .woocommerce #content input.button:active, .woocommerce #respond input#submit:active, .woocommerce a.button:active, .woocommerce button.button:active, .woocommerce input.button:active, .woocommerce-page #content input.button:active, .woocommerce-page #respond input#submit:active, .woocommerce-page a.button:active, .woocommerce-page button.button:active, .woocommerce-page input.button:active',
                'property'	=>	'color',
                'value'		=> 	$default_btn_text_color['active']
            ),

            //Light Button Background and Button Text Color
            array(
                'elements'	=>	'.theme-btn, .pagination a, .pagination span',
                'property'	=>	'background-color',
                'value'		=> 	$light_btn_bg['regular']
            ),
            array(
                'elements'	=>	'.theme-btn:hover, .pagination a:hover, .pagination span.current',
                'property'	=>	'background-color',
                'value'		=> 	$light_btn_bg['hover']
            ),
            array(
                'elements'	=>	'.theme-btn:active, .pagination a:active',
                'property'	=>	'background-color',
                'value'		=> 	$light_btn_bg['active']
            ),
            array(
                'elements'	=>	'.theme-btn, .pagination a, .pagination span',
                'property'	=>	'color',
                'value'		=> 	$light_btn_text_color['regular']
            ),
            array(
                'elements'	=>	'.theme-btn:hover, .pagination a:hover, .pagination span.current',
                'property'	=>	'color',
                'value'		=> 	$light_btn_text_color['hover']
            ),
            array(
                'elements'	=>	'.theme-btn:active, .pagination a:active',
                'property'	=>	'color',
                'value'		=> 	$light_btn_text_color['active']
            ),

            // Slider Button Background Color
            array(
                'elements'	=>	'.home-slider .slide-description a',
                'property'	=>	'background-color',
                'value'		=> 	$slide_btn_bg['regular']
            ),
            array(
                'elements'	=>	'.home-slider .slide-description a:hover',
                'property'	=>	'background-color',
                'value'		=> 	$slide_btn_bg['hover']
            ),
            array(
                'elements'	=>	'.home-slider .slide-description a:active',
                'property'	=>	'background-color',
                'value'		=> 	$slide_btn_bg['active']
            ),
            // Slider Arrow Background Color
            array(
                'elements'	=>	'.home-slider .flex-direction-nav a',
                'property'	=>	'background-color',
                'value'		=> 	$slider_arrow_bg['regular']
            ),
            array(
                'elements'	=>	'.home-slider .flex-direction-nav a:hover',
                'property'	=>	'background-color',
                'value'		=> 	$slider_arrow_bg['hover']
            ),
            array(
                'elements'	=>	'.home-slider .flex-direction-nav a:active',
                'property'	=>	'background-color',
                'value'		=> 	$slider_arrow_bg['active']
            ),
            // Curve Shadow Color
            array(
                'elements'	=>	'.home-services-section .curve:before',
                'property'	=>	'box-shadow',
                'value'		=> 	'0 0 0 '.$curve_height.'px '.$curve_background
            ),
            array(
                'elements'	=>	'.home-services-section .curve',
                'property'	=>	'top',
                'value'		=> 	-$curve_height.'px'
            ),
            array(
                'elements'	=>	'.home-services-section .curve',
                'property'	=>	'height',
                'value'		=> 	$curve_height.'px'
            ),
            // Testimonial Arrow Background Color
            array(
                'elements'	=>	'.home-testimonial-section .testimonial-carousel-nav a',
                'property'	=>	'background-color',
                'value'		=> 	$testimonial_arrow_bg['regular']
            ),
            array(
                'elements'	=>	'.home-testimonial-section .testimonial-carousel-nav a:hover',
                'property'	=>	'background-color',
                'value'		=> 	$testimonial_arrow_bg['hover']
            ),
            array(
                'elements'	=>	'.home-testimonial-section .testimonial-carousel-nav a:active',
                'property'	=>	'background-color',
                'value'		=> 	$testimonial_arrow_bg['active']
            ),
            // Testimonial Image Background Color
            array(
                'elements'	=>	'.home-testimonial-section .img-frame span',
                'property'	=>	'background-color',
                'value'		=> 	$testimonial_image_bg['regular']
            ),
            array(
                'elements'	=>	'.home-testimonial-section .testimonial-content:hover span',
                'property'	=>	'background-color',
                'value'		=> 	$testimonial_image_bg['hover']
            ),
            // Services Image Background Color
            array(
                'elements'	=>	'.service-plans .image-container',
                'property'	=>	'background-color',
                'value'		=> 	$services_image_bg['regular']
            ),
            array(
                'elements'	=>	'.service-plans .image-container:hover',
                'property'	=>	'background-color',
                'value'		=> 	$services_image_bg['hover']
            ),
            // Twitter Background Color
            array(
                'elements'	=>	'.twitter-feeds .twitter-icon i',
                'property'	=>	'background-color',
                'value'		=> 	$twitter_sparrow_bg_color['regular']
            ),
            array(
                'elements'	=>	'.twitter-feeds .twitter-icon i:hover',
                'property'	=>	'background-color',
                'value'		=> 	$twitter_sparrow_bg_color['hover']
            ),
            // Footer Scroll Top Arrow Background Color
            array(
                'elements'	=>	'#scroll-top',
                'property'	=>	'background-color',
                'value'		=> 	$footer_scroll_top_bg['regular']
            ),
            array(
                'elements'	=>	'#scroll-top:hover',
                'property'	=>	'background-color',
                'value'		=> 	$footer_scroll_top_bg['hover']
            ),
            array(
                'elements'	=>	'#scroll-top:active',
                'property'	=>	'background-color',
                'value'		=> 	$footer_scroll_top_bg['active']
            ),
            // Footer Social Icons Color
            array(
                'elements'	=>	'.footer .social_networks a',
                'property'	=>	'color',
                'value'		=> 	$footer_social_icons_color['regular']
            ),
            array(
                'elements'	=>	'.footer .social_networks a:hover',
                'property'	=>	'color',
                'value'		=> 	$footer_social_icons_color['hover']
            ),
            array(
                'elements'	=>	'.footer .social_networks a:active',
                'property'	=>	'color',
                'value'		=> 	$footer_social_icons_color['active']
            )

        );

        // services section background image
        if( $services_background_image == 0 ){
            $dynamic_css[] = array(
                'elements'	=>	'.service-plans:before, .service-plans:after',
                'property'	=>	'display',
                'value'		=> 	'none'
            );
        }

        // slide description position
        if( $slide_desc_position ){
            $dynamic_css[] = array(
                'elements'	=>	'.home-slider .slide-description',
                'property'	=>	'top',
                'value'		=> 	$slide_desc_position.'%'
            );
            $dynamic_css[] = array(
                'elements'	=>	'.home-slider .slide-description.show-bg',
                'property'	=>	'top',
                'value'		=> 	$slide_desc_position.'%'
            );
        }

        // Mini Cart Padding Top
        if( $main_nav_top_margin['margin-top'] ){
            $dynamic_css[] = array(
                'elements'	=>	'.mini-cart, .inspiry-search-wrapper',
                'property'	=>	'padding-top',
                'value'		=> 	$main_nav_top_margin['margin-top']
            );
        }

        // Main Menu Color
        $dynamic_css[] = array(
            'elements'	=>	'.main-menu ul li.current-menu-item > a',
            'property'	=>	'color',
            'value'		=> 	$theme_options['top_menu_items_color']['active']
        );

        $prop_count = count($dynamic_css);

        if($prop_count > 0){
            echo "<style type='text/css' id='dynamic-css'>\n\n";
            foreach($dynamic_css as $css_unit ){
                if(!empty($css_unit['value'])){
                    echo $css_unit['elements']."{\n";
                    echo $css_unit['property'].":".$css_unit['value'].";\n";
                    echo "}\n\n";
                }
            }
            echo '</style>';
        }
    }
}
add_action('wp_head', 'generate_dynamic_css');