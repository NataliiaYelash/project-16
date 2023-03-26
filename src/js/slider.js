const swiperProducts = new Swiper(".products .swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  spaceBetween: 18,
  slidesPerView: 1,

  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },

    1200: {
      slidesPerView: 4,
    },
  },
});

const swiperReviews = new Swiper(".reviews .swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  spaceBetween: 18,
  slidesPerView: 1,

  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },

    1200: {
      spaceBetween: 28,
      slidesPerView: 3,
    },
  },
});
