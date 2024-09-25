/*-----------------------------------------------------------------------------------

    Theme Name: Fixity - Handyman Services HTML Template
    Description: Handyman Services HTML Template
    Author: Website Design Templates
    Version: 1.1

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. Sticky Header
        03. Scroll To Top
        04. Parallax
        05. Video
        06. Current Year
        07. Resize function
        08. FullScreenHeight function
        09. ScreenFixedHeight function
        10. FullScreenHeight and screenHeight with resize function
        11. Sliders
        12. CountUp
        13. Countdown
        14. Portfolio
        
    ---------------------------------- */    

(function($) {

    "use strict";

    var $window = $(window);

        /*------------------------------------
            01. Preloader
        --------------------------------------*/

        $('#preloader').fadeOut('normall', function() {
            $(this).remove();
        });

        /*------------------------------------
            02. Sticky Header
        --------------------------------------*/

        $window.on('scroll', function() {
            var scroll = $window.scrollTop();
            var logochange = $(".navbar-brand img");
            var logodefault = $(".navbar-brand.logodefault img");
            if (scroll <= 50) {
                $("header").removeClass("scrollHeader").addClass("fixedHeader");
                logochange.attr('src', 'img/logos/logo-inner.png');
                logodefault.attr('src', 'img/logos/logo.png');
            } 
            else {
                $("header").removeClass("fixedHeader").addClass("scrollHeader");
                logochange.attr('src', 'img/logos/logo.png');
                logodefault.attr('src', 'img/logos/logo.png');
            }
        });

        /*------------------------------------
            03. Scroll To Top
        --------------------------------------*/

        $window.on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $(".scroll-to-top").fadeIn(400);

            } else {
                $(".scroll-to-top").fadeOut(400);
            }
        });

        $(".scroll-to-top").on('click', function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 600);
        });

        /*------------------------------------
            04. Parallax
        --------------------------------------*/

        // sections background image from data background
        var pageSection = $(".parallax,.bg-img");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });
        
        /*------------------------------------
            05. Video
        --------------------------------------*/

        $('.story-video').magnificPopup({
            delegate: '.video',
            type: 'iframe'
        });

        $('.source-modal').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            removalDelay: 160
        });

        /*------------------------------------
            06. Current Year
        --------------------------------------*/

        $('.current-year').text(new Date().getFullYear());

        /*------------------------------------
            07. Resize function
        --------------------------------------*/

        $window.resize(function(event) {
            setTimeout(function() {
                SetResizeContent();
            }, 500);
            event.preventDefault();
        });

        /*------------------------------------
            08. FullScreenHeight function
        --------------------------------------*/

        function fullScreenHeight() {
            var element = $(".full-screen");
            var $minheight = $window.height();
            element.css('min-height', $minheight);
        }

        /*------------------------------------
            09. ScreenFixedHeight function
        --------------------------------------*/

        function ScreenFixedHeight() {
            var $headerHeight = $("header").height();
            var element = $(".screen-height");
            var $screenheight = $window.height() - $headerHeight;
            element.css('height', $screenheight);
        }

        /*------------------------------------
            10. FullScreenHeight and screenHeight with resize function
        --------------------------------------*/        

        function SetResizeContent() {
            fullScreenHeight();
            ScreenFixedHeight();
        }

        SetResizeContent();

    // === when document ready === //
    $(document).ready(function() {

        /*------------------------------------
            11. Sliders
        --------------------------------------*/

        // testmonial-carousel-01
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 900,
            nav: false,
            dots: true,
            center:false,
            margin: 15,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },

            }
        });

        // testmonial-carousel-02
        $('.testimonial-carousel-02').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 900,
            nav: true,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            dots: false,
            center:false,
            margin: 15,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },

            }
        });

        // testmonial-carousel-03
        $('.testimonial-carousel-03').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 900,
            nav: false,
            dots: false,
            center:false,
            margin: 15,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },

            }
        });

        // testimonial-carousel-04
        $('.testimonial-carousel-04').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            navText: ["<span class='fa-solid fa-arrow-left-long'></span>", "<span class='fa-solid fa-arrow-right-long'></span>"],
            dots: true,
            center:false,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });

        // testimonial-carousel-05
        $('.testimonial-carousel-05').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 1500,            
            nav: false,
            dots: true,
            center:false,
            margin:20,
            responsive: {
                0: {
                    items: 1,
                    dots: false  
                },
                575: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });

        // testimonial-carousel-06
        $('.testimonial-carousel-06').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: false,
            dots: true,
            center:false,
            margin: 25,
            responsive: {
                0: {
                    items: 1,
                    dots:false
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 2
                },

            }
        });

        // service-carousel
        $('.service-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1500,            
            nav: false,
            center: false,
            autoplayHoverPause:true,
            dots: true,
            margin: 30,
            // navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1400: {
                    items: 3,
                }
            }
        });

        // clients01-carousel
        $('.clients01-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: false,
            center:false,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });

        // clients-carousel2
        $('.clients-carousel2').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: false,
            center:false,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });

        // clients-carousel3
        $('.clients-carousel3').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: false,
            center:false,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 6
                }
            }
        });

        // portfolio-carousel1
        $('.portfolio-carousel1').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 1400,            
            nav: false,
            dots:true,
            center:false,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        });

        // portfolio-carousel2
        $('.portfolio-carousel2').owlCarousel({
            loop: true,
            responsiveClass: true,
            center: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            margin: 30,
            smartSpeed: 900,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });

        // Sliderfade
        $('.slider-fade').owlCarousel({
            items: 1,
            loop:true,
            dots: true,
            margin: 0,
            nav: false,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            autoplay: true,
            smartSpeed:1500,
            mouseDrag:false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                992: {
                    items: 1,
                    nav: true,
                    dots: false
                },
            }
        });

        // Sliderfade
        $('.slider-fade1').owlCarousel({
            items: 1,
            loop:true,
            dots: true,
            margin: 0,
            nav: false,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            autoplay: true,
            smartSpeed:1500,
            mouseDrag:false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                992: {
                nav: true,
                dots: false
                }
            }
        });
        
        // Default owlCarousel
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            dots: false,
            margin: 0,
            autoplay:true,
            smartSpeed:500
        });

        // Slider text animation
        var owl = $('.slider-fade');
        owl.on('changed.owl.carousel', function(event) {
            var item = event.item.index - 2;     // Position of the current item
            $('span').removeClass('animated fadeInUp');
            $('h1').removeClass('animated fadeInUp');
            $('.butn').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('span').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated fadeInUp');
        });

        // Slider text animation
        var owl = $('.slider-fade1');
        owl.on('changed.owl.carousel', function(event) {
            var item = event.item.index - 2;     // Position of the current item
            $('.small-title').removeClass('animated fadeInUp');
            $('.title').removeClass('animated fadeInUp');
            $('.butn').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.small-title').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.title').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated fadeInUp');
        });

        /*------------------------------------
            12. CountUp
        --------------------------------------*/

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });

        /*------------------------------------
            13. Countdown
        --------------------------------------*/

        // CountDown for coming soon page
        $(".countdown").countdown({
            date: "01 May 2026 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
            format: "on"
        });
      
    });

    // === when window loading === //
    $window.on("load", function() {

        /*------------------------------------
            14. Portfolio
        --------------------------------------*/

        // filter items on button click
        $('.portfolio-gallery,.portfolio-gallery-isotope').lightGallery();

        $('.portfolio-link').on('click', (e) => {
            e.stopPropagation();
        });

    });

})(jQuery);