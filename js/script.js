


/*  ------------------
    Remove Preloader
    ------------------  */

$(window).load(function () {
    $('#preloader').delay(350).fadeOut('slow', function () {
        $('.profile-page, .resume-page, .contact-page').hide();
    });
});

$(document).ready(function () {

    'use strict';

    /*  ---------------------
         Homepage Responsive
        ---------------------  */
    

    function homepageResponsive() {

        // Homepage Main Portions Responsive

        var windowsWidth = $(window).width(),
            windowsHeight = $(window).height();

        if (windowsWidth > windowsHeight) {

            $('.introduction , .menu').css({
                width: '50%',
                height: '100%'
            });

        } else {

            $('.introduction , .menu').css({
                width: '100%',
                height: '50%'
            });

        }

        // Homepage Profile Image Responsive

        var introWidth = $('.introduction').width(),
            introHeight = $('.introduction').height(),
            bgImage = $('.introduction').find('img');

        if (introWidth > introHeight) {

            bgImage.css({
                width: '100%',
                height: 'auto'
            });

        } else {

            bgImage.css({
                width: 'auto',
                height: '100%'
            });

        }

    }

    $(window).on('load resize', homepageResponsive);

    /*  --------------
         Menu Settings
        --------------  */

    // Hide Menu

    $('.menu > div').on('click', function () {

        var introWidth = $('.introduction').width(),
            menuWidth = $('.menu').width();

        $('.introduction').animate({
            left: '-' + introWidth
        }, 1000, 'easeOutQuart');
        $('.menu').animate({
            left: menuWidth
        }, 1000, 'easeOutQuart', function () {
            $('.home-page').css({
                visibility: 'hidden'
            });
        });

    });

    // Show Reletive Page Onclick

    $('.menu div.profile-btn').on('click', function () {
        $('.profile-page').fadeIn(1200);
    });

    $('.menu div.resume-btn').on('click', function () {
        $('.resume-page').fadeIn(1200);
    });

    $('.menu div.portfolio-btn').on('click', function () {
        $('.portfolio-page').fadeIn(1200);
    });

    $('.menu div.contact-btn').on('click', function () {
        $('.contact-page').fadeIn(1200);
    });

    // Close Button, Hide Menu

    $('.close-btn').on('click', function () {
        $('.home-page').css({
            visibility: 'visible'
        });
        $('.introduction, .menu').animate({
            left: 0
        }, 1000, 'easeOutQuart');
        $('.profile-page, .resume-page, .portfolio-page, .contact-page').fadeOut(800);
    });
    
    /*  --------------------------------
         Maximize Services Items Height
        --------------------------------  */
    
    function maximizeHeight() {
        
        var minHeight = 0;
        
        $('.services').each(function () {
            
            var maxHeight = $(this).height();
            
            if (maxHeight > minHeight) {
                minHeight = maxHeight;
            }
            
        });
        
        $('.services').height(minHeight);
    }
    
    maximizeHeight();
    
    $(window).on('resize', maximizeHeight);

    /*  ----------------------------------------
         Tooltip Starter for Social Media Icons
        ----------------------------------------  */

    $('.intro-content .social-media [data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });

    $('.contact-details .social-media [data-toggle="tooltip"]').tooltip();

    /*  ------------
         Pie Charts
        ------------  */

    $(function () {

        var fillColor = $('.footer').css('background-color'); // Get background color of footer to set relevent fill color in pie charts

        // Initiate EasyPieChart

        $('.skill').easyPieChart({
            barColor: fillColor,
            trackColor: '#c6c6c6',
            scaleColor: '#c6c6c6',
            scaleLength: 8,
            lineWidth: 8,
            size: 150,
            lineCap: 'butt'
        });

    });

    /*  -------------------------------
         MixItUp ( for portfolio page )
        -------------------------------  */

    $(function () {

        // Initiate MixItUp

        $('#projects').mixItUp({
            
            callbacks: {
                onMixLoad: function (state) {
                    $('.portfolio-page').hide();
                }
            }
            
        });

    });

    /*  -------------------------------
         PopUp ( for portfolio page )
        -------------------------------  */

    $(function () {
        $('.show-popup').popup({
            keepInlineChanges: true,
            speed: 500
        });
    });

    /*  -----------------------------------------------------
         MixItUp ( for portfolio page : testimonials slider )
        -----------------------------------------------------  */

    $(function () {
        $(".owl-carousel").owlCarousel({
            navigation: false, // Show next and prev buttons
            slideSpeed: 200,
            paginationSpeed: 300,
            singleItem: true
        });
    });
    
    /*  -------------
         Contact Form
        ------------- */

    
    
    // $('#contactForm').submit(function () {
        
    //     $.ajax({
    //         type: "POST",
    //         url: "php/contact.php",
    //         data: $('#contactForm').serialize(),
    //         success: function (msg) {
    //             if (msg == 'SEND') {
    //                 $('.success').fadeIn();
    //                 $('.error').fadeOut();
    //                 $('#contactForm')[0].reset();
    //             } else {
    //                 $('.success').fadeOut();
    //                 $('.error').fadeIn().find('h3').text(msg);
    //             }
    //         }
    //     });
    //     return false;
    // });
    
    // //contact form validation
    // $("#contact-form").validate({
    //     rules: {
    //         name: {
    //             required: true,
    //             minlength: 2
    //         },
    //         message: {
    //             required: true,
    //             minlength: 2
    //         },
    //         email: {
    //             required: true,
    //             email: true
    //         }
    //     },
    //     messages: {
    //         name: {
    //             required: "Please enter Your Name",
    //             minlength: "Your name must consist of at least 2 characters"
    //         },
    //         message: {
    //             required: "Please Write Something",
    //             minlength: "Your message must consist of at least 2 characters"
    //         },
    //         email: "Please enter a valid email address"
    //     },
    //     submitHandler: function(form) {
    //         $(form).ajaxSubmit({
    //             type:"POST",
    //             data: $(form).serialize(),
    //             url:"https://docs.google.com/forms/d/e/1FAIpQLScangnNUZn-Uz-EGthGavoJQ5uaLZau8Ae3CYEZ03bqGtyI3Q/formResponse",
    //             success: function() {
    //                 $('#contact-form :input').attr('disabled', 'disabled');
    //                 $('#contact-form').fadeTo( "slow", 0.15, function() {
    //                     $(this).find(':input').attr('disabled', 'disabled');
    //                     $(this).find('label').css('cursor','default');
    //                     $('#success').fadeIn();
    //                 });
    //             },
    //             error: function() {
    //                 $('#contact-form :input').attr('disabled', 'disabled');
    //                 $('#contact-form').fadeTo( "slow", 0.15, function() {
    //                     $(this).find(':input').attr('disabled', 'disabled');
    //                     $(this).find('label').css('cursor','default');
    //                     $('#success').fadeIn();
    //                 });
    //             }
    //         });
    //     }
    // });

    /*  -------------------------------
         Google Map ( for contact page )
        -------------------------------  */

    $('#google-map').gMap({
        latitude: 37.584063,
        longitude: 127.058844,
        //maptype: 'TERRAIN',
        scrollwheel: false,
        zoom: 16,
        markers: [
            {
                latitude: 37.584063,
                longitude: 127.058844,
                html: "I am Here!",
                icon: {
                    image: "images/icon/map_marker.png",
                    iconsize: [46, 46],
                    iconanchor: [12, 46]
                }
            }
        ],
        controls: {
            panControl: false,
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false
        }
    });

});
