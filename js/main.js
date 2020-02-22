$(document).ready(function () {
  //initialize swiper when document ready
   var mySwiper = new Swiper ('#swiperSlider.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    //grabCursor: true,
    autoplay: 5000,
    autoplayDisableOnInteraction: true,
    resizeReInit: true,
    peginationClickable: true,

    // If we need pagination
    pagination: {
      el: '#swiperSlider .swiper-pagination',
      clickable: true,
    },
  })
});
