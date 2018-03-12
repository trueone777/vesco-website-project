/*========================================================
                    SERVICES
========================================================*/

$(() => {
    // animate on scroll
    new WOW().init();
});

/*========================================================
                    WORK
========================================================*/
$(() => {
    $("#work").magnificPopup({
        delegate: 'a', //child item selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*========================================================
                    TEAM
========================================================*/
$(() => {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed:700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            //breakpoint for 0 up
            0: {
                items: 1
            },
            //for 480 up
            480: {
                items: 2
            },
            //for 760 up
            575: {
                items: 2
            },
            767: {
                items: 3
            }
        }
    });
});

/*========================================================
                    TESTIMONIALS
========================================================*/

$(() => {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed:700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*========================================================
                    STATS
========================================================*/

$(() => {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/*========================================================
                    CLIENTS
========================================================*/

$(() => {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed:700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            //breakpoint for 0 up
            0: {
                items: 1
            },
            //for 480 up
            480: {
                items: 3
            },
            //for 760 up
            575: {
                items: 4
            },
            //for 992 up
            768: {
                items: 5
            }
        }
    });
});


/*========================================================
                    NAVIGATION
========================================================*/
// Show / Hide Transparent nav bar
$(() => {
    $(window).scroll(() => {

        if($(this).scrollTop() < 50 ) {
            //hide nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            //show the navigation bar
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }

    });
});

// Smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event)  {


        event.preventDefault();
        // get/return id like #about
        const section = $(this).attr("href");
        console.log(section);
        $("html, body").animate({
            scrollTop: $(section).offset().top - 45
        }, 1250, "easeInOutExpo");

    });
});

// Close Mobile menu on click

$(() => {
    $(".navbar-collapse ul li a").on("click touch", () => {
        $(".navbar-toggler").click();
    });
});


