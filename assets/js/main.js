// Years of experience
const yearsEl = document.getElementById("years");
let years = +new Date().getFullYear() - 2019;
yearsEl.innerHTML = years.toFixed();


// move top
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// move top


// script for services
$(document).ready(function () {
    $(".owl-two").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            480: {
                items: 1,
                nav: false,
            },
            700: {
                items: 1,
                nav: false,
            },
            1090: {
                items: 3,
                nav: false,
            },
        },
    });
});
// script for services

// script for portfolio
$(document).ready(function () {
    $(".owl-portfolio").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            480: {
                items: 1,
                nav: false,
            },
            700: {
                items: 1,
                nav: false,
            },
            1090: {
                items: 3,
                nav: false,
            },
        },
    });
});
// script for portfolio


// script for tesimonials carousel slider
$(document).ready(function () {
    $("#owl-demo1").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            736: {
                items: 1,
                nav: false,
            },
            1000: {
                items: 2,
                nav: false,
                loop: false,
            },
        },
    });
});
// script for tesimonials carousel slider

// stats number counter
$(".counter").countUp();
// stats number counter

// disable body scroll which navbar is in active
$(function () {
    $(".navbar-toggler").click(function () {
        $("body").toggleClass("noscroll");
    });
});
// disable body scroll which navbar is in active

// MENU-JS
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("#site-header").addClass("nav-fixed");
    } else {
        $("#site-header").removeClass("nav-fixed");
    }
});

//Main navigation Active Class Add Remove
$(".navbar-toggler").on("click", function () {
    $("header").toggleClass("active");
});
$(document).on("ready", function () {
    if ($(window).width() > 991) {
        $("header").removeClass("active");
    }
    $(window).on("resize", function () {
        if ($(window).width() > 991) {
            $("header").removeClass("active");
        }
    });
});

// Scroll to activate nav-link
let navbarlinks = document.querySelectorAll(".navbar .scrollto");
const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
        let navbarItem = navbarlink.parentElement
        if (!navbarlink.hash) return;
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;
        if (
            position >= section.offsetTop &&
            position <= section.offsetTop + section.offsetHeight
        ) {
            navbarItem.classList.add("active");
        } else {
            navbarItem.classList.remove("active");
        }
    });
};
window.addEventListener("load", navbarlinksActive);
window.addEventListener('scroll', navbarlinksActive);
// MENU-JS
