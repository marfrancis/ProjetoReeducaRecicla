(function ($) {
    jQuery(document).ready(function () {
        "use strict";

        var $ = jQuery;
        var $window = $(window);
        var isRtl = $('body').hasClass('rtl');


        /*-----------------------------------------------------------------------------------*/
        /* Sticky Header
        /*-----------------------------------------------------------------------------------*/
        if( $('body').hasClass('sticky-header') ){

            $(window).scroll(function(){

                var $window = $(this);

                if( $window.width() > 600 ){    // work only above 600px screen size
                    var $body = $('body');
                    var $header = $('.header-wrapper');

                    /* get the admin bar height */
                    var adminBarHeight = 0;
                    if( $body.hasClass('admin-bar') ){
                        adminBarHeight = $('#wpadminbar').outerHeight();
                    }

                    /* header height */
                    var headerHeight = $header.outerHeight();

                    if ( $window.scrollTop() > 0 ) {
                        $header.addClass('stick');
                        $header.css('top', adminBarHeight);
                        $body.css( 'padding-top', headerHeight );
                    }else{
                        $header.removeClass('stick');
                        $header.css('top', 'auto');
                        $body.css( 'padding-top', 0);
                    }
                }

            });
        }


        /*-----------------------------------------------------------------------------------*/
        /* Main Menu Dropdown Control
         /*-----------------------------------------------------------------------------------*/
        $(".main-menu ul li").children('ul').css({ display: 'none'});
        $('.main-menu ul li').hover(function () {
            $(this).children('ul').stop(true, true).fadeIn(150).css({
                display: 'block'
            });
        }, function () {
            $(this).children('ul').stop(true, true).fadeOut(150);
        });

        // Main Menu For Responsive Layouts
        $('.header .main-menu').meanmenu({
            meanMenuContainer: '.main-menu-wrapper',
            meanMenuCloseSize: "20px",
            meanScreenWidth: "991"
        });


        /*-----------------------------------------------------------------------------------*/
        /* Flex Slider
         /*-----------------------------------------------------------------------------------*/
        if(jQuery().flexslider){
            var homeFlexSlider = $('.home-slider .flexslider');

            homeFlexSlider.flexslider({
                animation: "fade",
                controlNav: false,
                useCSS: false,
                directionNav: true,
                pauseOnHover: true,
                slideshowSpeed: 6000,
                animationSpeed: 1500,
                start: function ( slider ) {
                    function verticalCenter() {
                        var slideDescription = homeFlexSlider.find('.slide-description');
                        slideDescription.css('margin-top', "-" + ( slideDescription.height() / 2 ) + "px");
                    }
                    verticalCenter();
                    $window.on('resize', function () {
                        verticalCenter();
                    });
                    slider.removeClass('loading');
                }
            });

            // For gallery post format on blog and single page
            var galleryPostsSlider = $('.slider-gallery-type-post');
            galleryPostsSlider.flexslider({
                animation: "slide",
                directionNav: true,
                pauseOnHover: true,
                slideshowSpeed: 3000,
                animationSpeed: 500,
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                controlNav: false
            });
            galleryPostsSlider.hover(function () {
                $(this).children('.flex-direction-nav').stop(true, true).fadeIn();
            }, function () {
                $(this).children('.flex-direction-nav').stop(true, true).fadeOut();
            });

            // For portfolio item gallery on item detail page
            var portfolioItemGallery =  $('.portfolio-item-gallery');
            portfolioItemGallery.flexslider({
                animation: "slide",
                pauseOnHover: true,
                slideshowSpeed: 3000,
                animationSpeed: 500,
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                controlNav: false
            });
            portfolioItemGallery.hover(function () {
                $(this).children('.flex-direction-nav').stop(true, true).fadeIn();
            }, function () {
                $(this).children('.flex-direction-nav').stop(true, true).fadeOut();
            });


            // Product Page Flex Slider
            $('.product-slider').flexslider({
                animation: "slide",
                animationLoop: false,
                slideshow: false,
                prevText: '<i class="fa fa-angle-left"></i>',
                nextText: '<i class="fa fa-angle-right"></i>',
                animationSpeed: 250,
                controlNav: "thumbnails"
            });

        }



        /*-----------------------------------------------------------------------------------*/
        /* Work Section Carousel - Home
         /*-----------------------------------------------------------------------------------*/
        if( jQuery().owlCarousel ){

            $(".work-items-carousel").owlCarousel({
                rtl: isRtl,
                loop:true,
                nav:true,
                navText: false,
                dots: false,
                responsive:{
                    0:{
                        items:1
                    },
                    540:{
                        items:2
                    },
                    800:{
                        items:3
                    },
                    1100:{
                        items:4
                    },
                    1300:{
                        items:5
                    }
                }
            });

            // Hover Effect
            $('.work-items-carousel div article').each(function () {
                $(this).hoverdir({
                    hoverDelay: 75
                });
            });

        }



        /*-----------------------------------------------------------------------------------*/
        /* Testimonial Section Carousel - Home
        /*-----------------------------------------------------------------------------------*/
        if( jQuery().owlCarousel ){
            var owl = $(".testimonial-carousel .carousel");

            owl.owlCarousel({
                rtl: isRtl,
                loop: false,
                dots: false,
                responsive:{
                    0:{
                        items:1
                    },
                    900:{
                        items:2
                    }
                }
            });

            // Custom Navigation Events
            $(".carousel-next-item").click(function () {
                owl.trigger('next.owl.carousel');
            });
            $(".carousel-prev-item").click(function () {
                owl.trigger('prev.owl.carousel');
            });
        }


        /*-----------------------------------------------------------------------------------*/
        /* Product Carousel
         /*-----------------------------------------------------------------------------------*/
        if( jQuery().owlCarousel ){
            var productCarousel = $("#product-carousel");
            productCarousel.owlCarousel({
                rtl: isRtl,
                loop:true,
                dots: false,
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:2
                    },
                    900:{
                        items:3
                    },
                    1100:{
                        items:4
                    }
                }
            });

            // Custom Navigation Events
            $(".product-control-nav .next").click(function () {
                productCarousel.trigger('next.owl.carousel');
            });

            $(".product-control-nav .prev").click(function () {
                productCarousel.trigger('prev.owl.carousel');
            });
        }


        /*-----------------------------------------------------------------------------------*/
        /* Shipping calculate icon toggle
         /*-----------------------------------------------------------------------------------*/
        $('.shipping-calculator-button').on('click', function(event){
            $(this).toggleClass('opened');
            event.preventDefault();
        });


        /*-----------------------------------------------------------------------------------*/
        /* Isotope for Blog Items
        /*-----------------------------------------------------------------------------------*/
        function blogLayout() {
            var blogPostsContainer = $('#blog-posts-container .blog-items');
            blogPostsContainer.isotope({
                animationEngine: 'best-available',
                itemSelector: '.item'
            });
        }

        if ( jQuery().isotope ) {

            blogLayout();

            $window.on('load', function () {
                blogLayout();
            });

            $window.on('resize', function () {
                blogLayout();
            });

        }



        /*-----------------------------------------------------------------------------------*/
        /* Isotope for Gallery Items
        /*-----------------------------------------------------------------------------------*/
        function galleryLayout() {
            var galleryItemContainer = $('#gallery-container .isotope');
            galleryItemContainer.isotope({
                animationEngine: 'best-available',
                itemSelector: '.isotope-item',
                layoutMode: 'fitRows',
                filter: '.'+"gallery-item"
            });
        }

        if ( jQuery().isotope ) {
            // cache container and filter
            var galleryItemContainer = $('#gallery-container .isotope');
            var filterLinks = $("#filter-by a");

            filterLinks.click(function (e) {
                e.preventDefault();
                filterLinks.removeClass('active');
                $(this).addClass('active');
                var selector = jQuery(this).attr('data-filter');
                galleryItemContainer.isotope({
                    filter: '.'+selector,
                    animationEngine: 'best-available',
                    itemSelector: '.isotope-item',
                    layoutMode: 'fitRows'
                });
            });

            /* to fix floating bugs due to variation in height */
            $window.on( 'load', function () {
                galleryLayout();
            });

            $window.on( 'resize', function () {
                galleryLayout();
            });

        }


        /*-----------------------------------------------------------------------------------*/
        /* Hover effect for Gallery items
         /*-----------------------------------------------------------------------------------*/
        $('#gallery-container .gallery-item article').hover(function () {

            var itemHeight = $(this).outerHeight();
            var contents = $(this).find('.content');

            contents.css('margin-top', '-' + ( contents.outerHeight() / 2) + 'px');
            $(this).find('.overlay').stop(true, true).transit({height: itemHeight}, 200);
        }, function () {
            $(this).find('.overlay').stop(true, true).transit({height: '0'}, 200);
        });


        /*-----------------------------------------------------------------------------------*/
        /*	Image Lightbox
        /*  http://osvaldas.info/image-lightbox-responsive-touch-friendly
        /*-----------------------------------------------------------------------------------*/
        if ( jQuery().imageLightbox ) {

            // ACTIVITY INDICATOR

            var activityIndicatorOn = function()
                {
                    $( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
                },
                activityIndicatorOff = function()
                {
                    $( '#imagelightbox-loading' ).remove();
                },


            // OVERLAY

                overlayOn = function()
                {
                    $( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
                },
                overlayOff = function()
                {
                    $( '#imagelightbox-overlay' ).remove();
                },


            // CLOSE BUTTON

                closeButtonOn = function( instance )
                {
                    $( '<button type="button" id="imagelightbox-close" title="Close"></button>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
                },
                closeButtonOff = function()
                {
                    $( '#imagelightbox-close' ).remove();
                },

            // ARROWS

                arrowsOn = function( instance, selector )
                {
                    var $arrows = $( '<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"></button>' );

                    $arrows.appendTo( 'body' );

                    $arrows.on( 'click touchend', function( e )
                    {
                        e.preventDefault();

                        var $this	= $( this ),
                            $target	= $( selector + '[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ),
                            index	= $target.index( selector );

                        if( $this.hasClass( 'imagelightbox-arrow-left' ) )
                        {
                            index = index - 1;
                            if( !$( selector ).eq( index ).length )
                                index = $( selector ).length;
                        }
                        else
                        {
                            index = index + 1;
                            if( !$( selector ).eq( index ).length )
                                index = 0;
                        }

                        instance.switchImageLightbox( index );
                        return false;
                    });
                },
                arrowsOff = function()
                {
                    $( '.imagelightbox-arrow' ).remove();
                };

            // Lightbox for individual image
            var lightboxInstance = $('a[data-imagelightbox="lightbox"]').imageLightbox({
                onStart: 	 function() { overlayOn(); closeButtonOn( lightboxInstance ); },
                onEnd:	 	 function() { closeButtonOff(); overlayOff(); activityIndicatorOff(); },
                onLoadStart: function() { activityIndicatorOn(); },
                onLoadEnd:	 function() { activityIndicatorOff(); }
            });

            // Lightbox for product gallery
            var gallerySelector = 'a[data-imagelightbox="gallery"]';
            var galleryInstance = $( gallerySelector ).imageLightbox({
                    quitOnDocClick:	false,
                    onStart:		function() { overlayOn(); closeButtonOn( galleryInstance ); arrowsOn( galleryInstance, gallerySelector ); },
                    onEnd:			function() { overlayOff(); closeButtonOff(); arrowsOff(); activityIndicatorOff(); },
                    onLoadStart: 	function() { activityIndicatorOn(); },
                    onLoadEnd:	 	function() { activityIndicatorOff(); $( '.imagelightbox-arrow' ).css( 'display', 'block' ); }
                });

        }


        /*-----------------------------------------------------------------------------------*/
        /*	selectric
        /*-----------------------------------------------------------------------------------*/
        if ( jQuery().selectric ) {

            // code from previous versions
            // var skip_slector = '#review_form select, #customer_details select, .shipping-calculator-form select, #billing_country, #billing_state, #shipping_country, #shipping_state';

            // Only target the required select boxes
            $( '.widget select, .woocommerce-ordering select' ).selectric( {
                disableOnMobile: false
            } );

            /*
            Code from previous versions
            $( skip_slector ).show().addClass('unhidden-select');
            $( skip_slector ).change(function(){
                $( skip_slector ).show().addClass('unhidden-select');
            });
            */

        }


        /*-----------------------------------------------------------------------------------*/
        /*	Accordion
        /*-----------------------------------------------------------------------------------*/
        $(function () {
            $('dl.accordion dt').click(function () {
                $(this).siblings('dt').removeClass('current');
                $(this).addClass('current').next('dd').stop(true, true).slideDown(250).siblings('dd').stop(true, true).slideUp(250);
            });
        });


        /*-----------------------------------------------------------------------------------*/
        /*	Toggle
         /*-----------------------------------------------------------------------------------*/
        $(function () {
            $('dl.toggle dt').click(function () {
                if ($(this).hasClass('current')) {
                    $(this).removeClass('current').next('dd').stop(true, true).slideUp(250);
                }
                else {
                    $(this).addClass('current').next('dd').stop(true, true).slideDown(250);
                }
            });
        });


        /*-----------------------------------------------------------------*/
        /* For FAQ Groups Filtering
         /*-----------------------------------------------------------------*/
        $('#filters a.no-isotope').click(function (e) {
            e.preventDefault();
            $(this).parents('li').addClass('active').siblings().removeClass('active');
            var selector = $(this).attr('data-filter');
            var $questions = $('.toggle.faqs').find('dt, dd');
            if ( selector == '*' ) {
                $questions.filter('dt').show();
            } else {
                $questions.not(selector).removeClass('current').hide().end().filter('dt'+selector).show();
            }
        });


        /*-----------------------------------------------------------------------------------*/
        /* Tabs
         /*-----------------------------------------------------------------------------------*/
        $(function () {
            var $tabsNav = $('.tabs-nav'),
                $tabsNavLis = $tabsNav.children('li');

            $tabsNav.each(function () {
                var $this = $(this);
                $this.next().children('.tab-content').stop(true, true).hide()
                    .first().show();
                $this.children('li').first().addClass('active').stop(true, true).show();
            });

            $tabsNavLis.on('click', function (e) {
                var $this = $(this);
                $this.siblings().removeClass('active').end()
                    .addClass('active');
                var idx = $this.parent().children().index($this);
                $this.parent().next().children('.tab-content').stop(true, true).hide().eq(idx).fadeIn();
                e.preventDefault();
            });

        });


        /*-----------------------------------------------------------------------------------*/
        /*	Tabs Widget
         /*-----------------------------------------------------------------------------------*/
        $('.footer .tabbed .tabs li:first-child, .tabbed .tabs li:first-child').addClass('current');
        $('.footer .block:first, .tabbed .block:first').addClass('current');


        $('.tabbed .tabs li').click(function () {
            var $this = $(this);
            var tabNumber = $this.index();

            /* remove current class from other tabs and assign to this one */
            $this.siblings('li').removeClass('current');
            $this.addClass('current');

            /* remove current class from current block and assign to related one */
            $this.parent('ul').siblings('.block').removeClass('current');
            $this.closest('.tabbed').children('.block:eq(' + tabNumber + ')').addClass('current');
        });


        /*-----------------------------------------------------------------------------------*/
        /*	Jquery validation plugin
         /*-----------------------------------------------------------------------------------*/
        if ( jQuery().validate && jQuery().ajaxSubmit ) {

            // Contact Page - Contact Form Handling
            var contact_loader = $('#contact-loader'),
                response_container = $('#message-sent'),
                error_container = $('#contact-form .error-container'),
                contact_form = $('#contact-form .contact-form'),
                submit_button = $('#contact-form #submit');

            var contact_options = {
                target: response_container,
                beforeSubmit: function () {
                    contact_loader.fadeIn('fast');
                    response_container.fadeOut('fast');
                    submit_button.attr('disabled','disabled');
                },
                success: function () {
                    contact_loader.fadeOut('fast');
                    response_container.fadeIn('fast');
                    submit_button.removeAttr('disabled');
                    contact_form.resetForm();
                }
            };

            contact_form.validate({
                errorLabelContainer: error_container,
                submitHandler: function (form) {
                    $(form).ajaxSubmit(contact_options);
                }
            });

            $("#orderForm").validate({
                success: "valid",
                submitHandler: function () {
                    //$('div#message-sent').css('display', 'block')
                },
                errorLabelContainer: $("div#errors")
            });

        }


        /*-----------------------------------------------------------------------------------*/
        /*	Scroll to Top
        /*----------------------------------------------------------------------------------*/
        $(window).scroll(function () {
            if (!$('body').hasClass('probably-mobile')) {
                if ($(this).scrollTop() > 50) {
                    $('a#scroll-top').fadeIn();
                } else {
                    $('a#scroll-top').fadeOut();
                }
            }
            else {
                $('a#scroll-top').fadeOut();
            }
        });

        $('a#scroll-top').on('click', function () {
            $('html, body').animate({scrollTop: 0}, 'slow');
            return false;
        });


        /* ----------------------------------------------------*/
        /*  Responsive Tables by ZURB
         /*	Foundation v2.1.4 http://foundation.zurb.com
         /* ----------------------------------------------------*/
        var switched = false;
        var updateTables = function () {
            if (($window.width() < 767) && !switched) {
                switched = true;
                $("table.responsive").each(function (i, element) {
                    splitTable($(element));
                });
                return true;
            }
            else if (switched && ($window.width() > 767)) {
                switched = false;
                $("table.responsive").each(function (i, element) {
                    unsplitTable($(element));
                });
            }
        };

        $window.load(updateTables);
        $window.on("redraw", function () {
            switched = false;
            updateTables();
        }); // An event to listen for
        $window.on("resize", updateTables);


        function splitTable(original) {
            original.wrap("<div class='table-wrapper' />");

            var copy = original.clone();
            copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
            copy.removeClass("responsive");

            original.closest(".table-wrapper").append(copy);
            copy.wrap("<div class='pinned' />");
            original.wrap("<div class='scrollable' />");

            setCellHeights(original, copy);
        }

        function unsplitTable(original) {
            original.closest(".table-wrapper").find(".pinned").remove();
            original.unwrap();
            original.unwrap();
        }

        function setCellHeights(original, copy) {
            var tr = original.find('tr'),
                tr_copy = copy.find('tr'),
                heights = [];

            tr.each(function (index) {
                var self = $(this),
                    tx = self.find('th, td');

                tx.each(function () {
                    var height = $(this).outerHeight(true);
                    heights[index] = heights[index] || 0;
                    if (height > heights[index]) heights[index] = height;
                });

            });

            tr_copy.each(function (index) {
                $(this).height(heights[index]);
            });
        }


        /*-----------------------------------------------------------------*/
        /* Cart Dropdown
        /*-----------------------------------------------------------------*/
        $('.header-wrapper .mini-cart').mouseenter(
            function () {
                if( $window.width() < 991 ) return;
                var mini_cart = $(this);
                clearTimeout( mini_cart.data('timeoutId') );
                mini_cart.find('.nav-dropdown').fadeIn(50);
                mini_cart.addClass('active');
            }
        )
        .mouseleave(
            function () {
                var mini_cart = $(this),
                timeoutId = setTimeout(function(){
                    mini_cart.find('.nav-dropdown').fadeOut(50);
                    mini_cart.removeClass('active');
                }, 600 );
                //set the timeoutId, allowing us to clear this trigger if the mouse comes back over
                mini_cart.data('timeoutId', timeoutId);
            }
        );


        /*-----------------------------------------------------------------*/
        /* Message
        /*-----------------------------------------------------------------*/
        $('.message .close').click(function (e) {
            $(this).closest('.message').fadeOut();
        });


        /*-----------------------------------------------------------------------------------*/
        /*	Animation CSS integrated with Appear Plugin
         /*----------------------------------------------------------------------------------*/
        function ie_10_or_older() { // check if IE10 or older
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf('MSIE ');
            if (msie > 0) {
                // IE 10 or older => return version number
                // return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
                return true;
            }
            // other browser
            return false;
        }

        function is_good_height_page(){
            var bodyHeight = $('body').outerHeight();
            var twitterHeight = $('twitter-feeds').outerHeight();
            var footerHeight = $('footer.footer').outerHeight();
            if( $(window).height() < ( bodyHeight - ( twitterHeight + footerHeight ) ) ){
                return true;
            }else{
                return false;
            }
        }


        if ( ($(window).width() > 991) && is_good_height_page() && ( ! ie_10_or_older() ) ) {   // apply animation on only big screens and browsers other than IE 10 and Older Versions of IE
            $('.animated').appear().fadeTo( 'fast', 0 );

            $(document.body).on('appear', '.fade-in-up', function( event, $all_appeared_elements ){
                $( this ).each( function() {
                    $(this).addClass('fadeInUp')
                });
            });

            $(document.body).on('appear', '.fade-in-down', function( event, $all_appeared_elements ){
                $( this ).each( function() {
                    $(this).addClass('fadeInDown')
                });
            });

            $(document.body).on('appear', '.fade-in-right', function( event, $all_appeared_elements ){
                $( this ).each( function() {
                    $(this).addClass('fadeInRight')
                });
            });

            $(document.body).on('appear', '.fade-in-left', function( event, $all_appeared_elements ){
                $( this ).each( function() {
                    $(this).addClass('fadeInLeft')
                });
            });
        }

        /*-----------------------------------------------------------------*/
        /* Header search form
        /*-----------------------------------------------------------------*/
        $('.search-button').click(function(e){
            e.preventDefault();
            var icon = $(this).find( '.fa' );
            if( icon.hasClass('fa-search') ) {
                icon.removeClass( 'fa-search' ).addClass( 'fa-times' );
                $('.search-button').addClass('active');
                $('.search-form').show();
            } else {
                icon.removeClass( 'fa-times' ).addClass( 'fa-search' );
                $('.search-button').removeClass('active');
                $('.search-form').hide();
            }
        });

    });

    $('.wc-tabs-wrapper .wc-tab').first().css('display', 'block');

    $(".wc-tabs li").click(function (e) {
        e.preventDefault();
        $(this).siblings().removeClass("active").end()
            .andSelf().addClass("active");

        var tab = $(this).index();
        var content = $('.wc-tab');
        content.stop(true, true).hide();
        $('.wc-tab:eq(' + tab + ')').stop(true, true).show();
    });
})(jQuery);








