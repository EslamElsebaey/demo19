$(document).ready(function () {
  /*~~~~~~~~~~~~~~~~~~start header~~~~~~~~~~~~~~~~~ */

  // ~~~~~~~~~~~~~~~~
  // ~~~~~~~~~~~~navbar
  $(".bars_").click(function () {
    $("nav").toggle("500");
    $("body").addClass("over_");
  });
  $(".close_").click(function () {
    $("nav").toggle("500");
    $("body").removeClass("over_");
  });
  $(".li_hover").click(function () {
    $(this).children().next().slideToggle("500");
    $(this).children("a").toggleClass("rotate-arrow")
  });
  // ~~~~~~~~~~~~~~~~~~
  /*~~~~~~~~~~~~~~~~~~end header~~~~~~~~~~~~~~~~~ */

  /*~~~~~~~~~~~~~~~~~~start slider~~~~~~~~~~~~~~~ */

  $(".slider .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    navText: [
      "<i class='fa-regular fa-chevron-right'></i>",
      "<i class='fa-regular fa-chevron-left'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  /*~~~~~~~~~~~~~~~~~~end slider~~~~~~~~~~~~~~~~~ */
  /*~~~~~~~~~~~~~~~~~~start new~~~~~~~~~~~~~~~~~~ */

  /*~~~~~~~~~~~~~~~~~~end new~~~~~~~~~~~~~~~~~~~~ */

  /*~~~~~~~~~~~~~~~~~~start Category~~~~~~~~~~~~~~~~~~~~ */

  $(".Category .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    margin: 30,
    navText: [
      "<i class='fa-regular fa-chevron-right'></i>",
      "<i class='fa-regular fa-chevron-left'></i>",
    ],
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    responsive: {
      0: {
        items: 3,
        margin: 10,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 6,
      },
    },
  });
  /*~~~~~~~~~~~~~~~~~~end Category~~~~~~~~~~~~~~~~~~~~ */

  /*~~~~~~~~~~~~~~~~~~start Bestseller~~~~~~~~~~~~~~~~~~~~ */

  $(".Bestseller .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    stagePadding: 1,
    autoplay: true,
    margin: 30,
    navText: [
      "<i class='fa-regular fa-chevron-right'></i>",
      "<i class='fa-regular fa-chevron-left'></i>",
    ],
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    responsive: {
      0: {
        items: 2,
        margin: 15,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  /*~~~~~~~~~~~~~~~~~~end Bestseller~~~~~~~~~~~~~~~~~~~~ */

  /*~~~~~~~~~~~~~~~~~~start Bestseller~~~~~~~~~~~~~~~~~~~~ */

  $(".brands .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    stagePadding: 5,
    margin: 30,
    navText: [
      "<i class='fa-regular fa-chevron-right'></i>",
      "<i class='fa-regular fa-chevron-left'></i>",
    ],
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    responsive: {
      0: {
        items: 3,
        margin: 20,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });
  /*~~~~~~~~~~~~~~~~~~end Bestseller~~~~~~~~~~~~~~~~~~~~ */

  var btn = $(".back_top");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "500");
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 150) {
      $("nav").addClass("fixed");
    } else {
      $("nav").removeClass("fixed");
    }
  });
});

new WOW().init();
document.documentElement.style.setProperty("--animate-duration", ".8s");

var fixedBar = document.querySelector("nav"),
  prevScrollpos = $(window).scrollTop();

(window.onscroll = function () {
  var o = $(window).scrollTop();
  prevScrollpos < o && prevScrollpos > 0
    ? fixedBar.classList.add("fixsedt")
    : fixedBar.classList.remove("fixsedt"),
    (prevScrollpos = o);
}),
  document.documentElement.style.setProperty("--animate-duration", ".5s");
