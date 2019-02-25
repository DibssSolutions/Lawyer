import slick from 'slick-carousel';

$('.js-cases-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  adaptiveHeight: true,
  prevArrow: $('.js-slider-arrow-prev'),
  nextArrow: $('.js-slider-arrow-next')
  // prevArrow: $('.js-slider-arrow-prev'),
  // nextArrow: $('.js-slider-arrow-next'),
});
