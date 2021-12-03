

    document.addEventListener('scroll', function (event) {

        var underlines = document.querySelectorAll(".underline");
        var y = window.scrollY

        console.log(y)
        if (y <= 500) {
            for (var i = 0; i < underlines.length; i++) {
                underlines[i].style.transform = 'translate3d(' + 1 * 100 + '%,0,0)';
            }

        } else if (y <= 675 || y <= 1125) {
            for (var i = 0; i < underlines.length; i++) {
                underlines[i].style.transform = 'translate3d(' + 2 * 100 + '%,0,0)';
            }

        } else {
            for (var i = 0; i < underlines.length; i++) {
                underlines[i].style.transform = 'translate3d(' + 3 * 100 + '%,0,0)';
            }

        }
    }, true /*Capture event*/);





    function ul(index) {

        var jumbo = document.querySelector(".style-cards");
        var faq = document.querySelector(".accordion");
        var underlines = document.querySelectorAll(".underline");

        for (var i = 0; i < underlines.length; i++) {
            underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
        }





        if (index === 0) {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        } else if (index === 1) {
            jumbo.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "start" });
            document.getElementById("main").scrollTop -= 50;
        } else if (index === 2) {
            faq.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    var accordion = (function () {

        var $accordion = $('.js-accordion');
        var $accordion_header = $accordion.find('.js-accordion-header');
        var $accordion_item = $('.js-accordion-item');

        // default settings
        var settings = {
            // animation speed
            speed: 400,

            // close all other accordion items if true
            oneOpen: false
        };

        return {
            // pass configurable object literal
            init: function ($settings) {
                $accordion_header.on('click', function () {
                    accordion.toggle($(this));
                });

                $.extend(settings, $settings);

                // ensure only one accordion is active if oneOpen is true
                if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
                    $('.js-accordion-item.active:not(:first)').removeClass('active');
                }

                // reveal the active accordion bodies
                $('.js-accordion-item.active').find('> .js-accordion-body').show();
            },
            toggle: function ($this) {

                if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
                    $this.closest('.js-accordion')
                        .find('> .js-accordion-item')
                        .removeClass('active')
                        .find('.js-accordion-body')
                        .slideUp()
                }

                // show/hide the clicked accordion item
                $this.closest('.js-accordion-item').toggleClass('active');
                $this.next().stop().slideToggle(settings.speed);
            }
        }
    })();

    $(document).ready(function () {
        accordion.init({ speed: 300, oneOpen: true });
    });

    $(document).ready(function () {
        var underlines = document.querySelectorAll(".underline");


        for (var i = 0; i < underlines.length; i++) {
            underlines[i].style.transform = 'translate3d(' + 1 * 100 + '%,0,0)';
        }

        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 80
        });

        // Page scrolling feature
        //$('a.page-scroll').bind('click', function (event) {
        //    var link = $(this);
        //    $('html, body').stop().animate({
        //        scrollTop: $(link.attr('href')).offset().top - 50
        //    }, 500);
        //    event.preventDefault();
        //    $('#navbar').collapse('hide');
        //});
    });


    var cbpAnimatedHeader = (function () {
        var docElem = document.documentElement,
            header = document.querySelector('.navbar-default'),
            didScroll = false,
            changeHeaderOn = 200;
        function init() {
            window.addEventListener('scroll', function (event) {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 250);
                }
            }, false);
        }
        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                $(header).addClass('navbar-scroll')
            }
            else {
                $(header).removeClass('navbar-scroll')
            }
            didScroll = false;
        }
        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }
        init();

    })();

    // Activate WOW.js plugin for animation on scrol
    new WOW().init();
