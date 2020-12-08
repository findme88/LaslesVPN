"use strict";

$(document).ready(function () {
  $(".slider").slick({
    //  dots: true,
    // arrows: false,
    infinite: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    speed: 1000,
    autoplaySpeed: 3000,
    autoplay: true,
    // pauseOnFocus: true,
    // pauseOnHover: true,
    prevArrow: $(".slider__arrows_right"),
    nextArrow: $(".slider__arrows_left"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  });
});
