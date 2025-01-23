new Swiper (".brands__slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: "swiper-button-next",
    prevEl: "swiper-button-prev",
  },
  pagination: {
    el: "swiper-pagination",
    clickable: true,
  },
})

new deviceSwiper (".device__slider", {
  navigation: {
    nextEl: "swiper-button-next",
    prevEl: "swiper-button-prev",
  },
  pagination: {
    el: "swiper-pagination",
    clickable: true,
  },
})
