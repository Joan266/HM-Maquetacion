
let foodSwiper = new Swiper(".swiper--food", {
  slidesPerView: 1,
  initialSlide: 1, 
  loop:true,
  pagination: {
    el: ".swiper-pagination",
  },
});

let menuSwiper = new Swiper(".swiper--menu", {
  slidesPerView: 1,
  loop:true,
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