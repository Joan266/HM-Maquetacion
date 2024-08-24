
let counterSwiper = new Swiper(".swiper--counter", {
  slidesPerView: 1,
  initialSlide: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

let foodSwiper = new Swiper(".swiper--food", {
  slidesPerView: 1,
  initialSlide: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

let menuSwiper = new Swiper(".swiper--menu", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1000: {
      slidesPerView: 2
    }
  }
});
let facilitiesSwiper = new Swiper(".swiper--facilities", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
let roomsSwiper = new Swiper(".swiper--rooms", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1000: {
      slidesPerView: 3,
      centeredSlides: true,
    }
  }
});
let relatedRoomsSwiper = new Swiper(".swiper--related-rooms", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1000: {
      slidesPerView: 2
    }
  }
});
let popularRoomsSwiper = new Swiper(".swiper--popular-rooms", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1000: {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  }
});
