import Swiper from '../../scripts/plugins/swiper.min';

const speakersSlider = () => (
  new Swiper('.js-reviewed-slider', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    watchOverflow: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  })
);

export default speakersSlider;
