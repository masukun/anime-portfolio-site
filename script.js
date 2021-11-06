const swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 2500,
    autoplay: {
       delay: 4000,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});