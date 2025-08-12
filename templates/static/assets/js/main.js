(function ($) {
  "use strict";
  var windowOn = $(window);


    /*-----------------------------------------------------------------------------------

        Template Name: Medyket - Health & Medical Care HTML5 Template
        Author: RRDevs
        Support: https://support.rrdevs.net
        Description: Medyket - Health & Medical Care HTML5 Template.
        Version: 1.0
        Developer: Sabbir Ahmmed (https://github.com/ahmmedsabbirbd)

    -----------------------------------------------------------------------------------
 /*======================================
   Data Css js
   ========================================*/
    $("[data-background]").each(function() {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    $("[data-width]").each(function() {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function() {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

    $("[data-m-w]").each(function() {
        $(this).css("max-width", $(this).attr("data-m-w"));
        $(this).css("margin-right", 'auto');
        $(this).css("margin-left", 'auto');
    });
    $("[data-m-w-l]").each(function() {
        $(this).css("max-width", $(this).attr("data-m-w-l"));
        $(this).css("margin-left", 'auto');
    });
    $("[data-m-w-r]").each(function() {
        $(this).css("max-width", $(this).attr("data-m-w-r"));
        $(this).css("margin-right", 'auto');
    });

    /*======================================
    Preloader activation
    ========================================*/
    $(window).on('load', function (event) {
        $('#preloader').delay(100).fadeOut(0);

        /*======================================
        Wow Js
        ========================================*/
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }

        
        /*======================================
        Counter Js
        ========================================*/

        $(".counter").counterUp({
            delay: 10,
            time: 1000,
        });
    });

    $(".preloader-close").on("click", function () {
        $('#preloader').delay(0).fadeOut(0);

        /*======================================
        Wow Js
        ========================================*/
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }

        /*======================================
        Counter Js
        ========================================*/

        $(".counter").counterUp({
            delay: 10,
            time: 1000,
        });
    })


    if ($('.rr-portfolio-load-more').length > 0) {
        $('.grid').imagesLoaded(function () {
            // init Isotope
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.grid-item',
                }
            });


            // filter items on button click
            $('.masonary-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            //for menu active class
            $('.masonary-menu button').on('click', function (event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });

            var show_item = $('.rr-portfolio-load-more').attr('data-show');
            var count_item = show_item;
            var isotop_call = $grid.data('isotope');

            loadMore(show_item);

            function loadMore(showing) {
            }

            $("#rr-load-more").on('click', function() {
                if ($('.masonary-menu').data('clicked')) {

                    count_item = show_item;
                    $('.masonary-menu').data('clicked', false);
                } else {
                    count_item = count_item;
                };

                count_item = count_item + show_item;

                loadMore(count_item);
            });

            $(".masonary-menu").on('click', function() {
                $(this).data('clicked', true);

                loadMore(show_item);
            });

        });
    }else{
        $('.grid').imagesLoaded(function () {
            // init Isotope
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.grid-item',
                }
            });


            // filter items on button click
            $('.masonary-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            //for menu active class
            $('.masonary-menu button').on('click', function (event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });

        });

        var show_item_2 = $('.rr-load-item-count').attr('data-show');
        $(".rr-load-item").hide();
        $(".rr-load-item").slice(0, show_item_2).show();
        $("body").on('click touchstart', '.load-more', function (e) {
            e.preventDefault();
            $(".rr-load-item:hidden").slice(0, show_item_2).slideDown();
            if ($(".rr-load-item:hidden").length == 0) {
                $(".load-more").css('display', 'none');
            }

        });
    }

    $('.header-search').on('click', '.search-toggle', function(e) {
        e.preventDefault();
        var selector = $(this).data('selector');
        $(selector).toggleClass('show').find('.search-input').focus();
    });

  /*======================================
	Mobile Menu Js
	========================================*/
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
    meanExpand: ['<i class="fa-regular fa-angle-right"></i>'],
  });

  /*======================================
	Sidebar Toggle
	========================================*/
  $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
    $(".offcanvas__area").removeClass("info-open");
    $(".offcanvas__overlay").removeClass("overlay-open");
  });
  // Scroll to bottom then close navbar
  $(window).scroll(function(){
    if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
        $(".offcanvas__area").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
    }
  });
  $(".sidebar__toggle").on("click", function () {
    $(".offcanvas__area").addClass("info-open");
    $(".offcanvas__overlay").addClass("overlay-open");
  });

  /*======================================
	Body overlay Js
	========================================*/
  $(".body-overlay").on("click", function () {
    $(".offcanvas__area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
  });

  /*======================================
	Sticky Header Js
	========================================*/

  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $("#header-sticky").addClass("rr-sticky");
    } else {
      $("#header-sticky").removeClass("rr-sticky");
    }
  });

  /*======================================
	MagnificPopup image view
	========================================*/
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /*======================================
	MagnificPopup video view
	========================================*/
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  

  /*======================================
	Button scroll up js
	========================================*/

    var progressPath = document.querySelector(".backtotop-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
    var updateProgress = function() {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on("scroll", function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(".backtotop-wrap").addClass("active-backtotop");
        } else {
            jQuery(".backtotop-wrap").removeClass("active-backtotop");
        }
    });
    jQuery(".backtotop-wrap").on("click", function(event) {
        event.preventDefault();
        jQuery("html, body").animate({
            scrollTop: 0
        }, duration);
        return false;
    });
    
    /*======================================
	One Page Scroll Js
	========================================*/
    /*** Scroll Nav */
    var link = $('.onepagenav #mobile-menu ul li a, .onepagenav .mean-nav ul li a');

    link.on('click', function(e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top - 76
        }, 600);
        $(this).parent().addClass('active');
        e.preventDefault();
    });

    $(window).on('scroll', function(){
        scrNav();
    });

    function scrNav() {
        var sTop = $(window).scrollTop();
        $('section').each(function() {
            var id = $(this).attr('id'),
                offset = $(this).offset().top-1,
                height = $(this).height();
            if(sTop >= offset && sTop < offset + height) {
                link.parent().removeClass('active');
                $('.main-menu').find('[href="#' + id + '"]').parent().addClass('active');
            }
        });
    }
    scrNav();

    /*======================================
	Smoth animatio Js
	========================================*/
    $(document).on('click', '.smoth-animation', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 300);
    });

  /*======================================
  Parallax Swiper
  ========================================*/
    var bannerSlider;
    var bannerSliderOptions = {
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        parallax: true,
        loop: true,

        navigation: {
            nextEl: ".banner__button-prev",
            prevEl: ".banner__button-next",
        },
        on: {
            init: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find(".banner__thumb-bg")
                        .attr({
                            "data-swiper-parallax": 0.75 * swiper.width,
                        });
                }
            },
            resize: function() {
                this.update();
            },
        },
    };
    bannerSlider = new Swiper(
        ".banner_parallax-slider",
        bannerSliderOptions
    );

    /*brand__active***/
    var brand = new Swiper(".brand__active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        clickable: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1200: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*brand__active***/
    var brand = new Swiper(".about__active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        clickable: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1750: {
                slidesPerView: 6,
            },
            1500: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 4,
            },
            850: {
                slidesPerView: 3,
            },
            556: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*feedback__active***/
    var feedback = new Swiper(".feedback__active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            prevEl: ".feedback__button-prev",
            nextEl: ".feedback__button-next",
        },
    });

    ////////////////////////////////////////////////////
    // 21. Counter Js
    if(document.querySelector('.knob')) {
        new PureCounter();
    }

    // Jquery Appear raidal
    if (typeof ($.fn.knob) != 'undefined') {
        $('.knob').each(function () {
            var $this = $(this),
                knobVal = $this.attr('data-rel');

            $this.knob({
                'draw': function () {
                    $(this.i).val(this.cv + '%')
                }
            });

            $this.appear(function () {
                $({
                    value: 0
                }).animate({
                    value: knobVal
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.val(Math.ceil(this.value)).trigger('change');
                    }
                });
            }, {
                accX: 0,
                accY: -150
            });
        });
    }

    /*feedback__active-2***/
    var ourServiceItem = new Swiper(".our-service-item__slider", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            prevEl: ".our-service-item__button-prev",
            nextEl: ".our-service-item__button-next",
        },
        breakpoints: {
            1400: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*feedback__active-2***/
    var feedbacktwo = new Swiper(".feedback__active-2", {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".rr-swiper-dot-2",
            clickable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*======================================
      feedback__active-3 js
      ========================================*/
    var feedbackthree = new Swiper(".feedback__active-3", {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".rr-swiper-dot-3",
            clickable: true,
        },
        navigation: {
            prevEl: ".feedback-3__button-prev",
            nextEl: ".feedback-3__button-next",
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*======================================
    portfolio__active js
    ========================================*/
    var latest_gallery__active = new Swiper(".portfolio__active", {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        centeredSlides: true,
        breakpoints: {
            1850: {
                slidesPerView: 5,
            },
            1450: {
                slidesPerView: 4,
            },
            1075: {
                slidesPerView: 3,
            },
            675: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    $("[data-after-color]").each(function() {
        $(this).css("color", $(this).attr("data-after-color"));
    });


    /*** lastNobullet */
    function lastNobullet() {
        var lastElement = false;
        $(".footer__copyright-menu ul li, .last_item_not_horizental_bar .col-lg-4").each(function() {
            if (lastElement && lastElement.offset().top != $(this).offset().top) {
                $(lastElement).addClass("no_bullet");
            } else {
                $(lastElement).removeClass("no_bullet");
            }
            lastElement = $(this);
        }).last().addClass("no_bullet");
    };
    lastNobullet();

    $(window).resize(function(){
        lastNobullet();
    });

    $('#contact-us__form').submit(function(event) {
        event.preventDefault();
        var form = $(this);
        $('.loading-form').show();

        setTimeout(function() { 
            $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize()
            }).done(function(data) {
                $('.loading-form').hide();
                $('.contact-us__form').append('<p class="success-message mt-3 mb-0">Your message has been sent successfully.</p>');
            }).fail(function(data) {
                $('.loading-form').hide();
                $('.contact-us__form').append('<p class="error-message mt-3 mb-0">Something went wrong. Please try again later.</p>');

            });
        }, 1000);
      });
    

})(jQuery);


