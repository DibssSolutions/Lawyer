import slick from 'slick-carousel';
import { buildIcon } from '../utils';

const icon = buildIcon('arrow-long');

$('.js-cases-slider').slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  dots: true,
  adaptiveHeight: true,
  prevArrow: `<button class="arrow-prev js-slider-arrow-prev" type="button">
                <span class="arrow-more">
                    <span class="arrow-more__icon">
                        <span class="arrow-more__icon-inner">
                            <span class="arrow-more__icon-wrap">
                                <svg class="icon icon-arrow-long" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.64 23.16" width="100%" height="100%">
                                    <g>
                                        <g>
                                            <path class="bcls-1" d="M321.94 2.12l7.96 7.96H0v3h329.9l-7.96 7.96 2.12 2.12 11.58-11.58L324.06 0z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </span>
                    </span>
                </span>
            </button>`,
  nextArrow: `<button class="arrow-next js-slider-arrow-next" type="button">
                <span class="arrow-more">
                    <span class="arrow-more__icon">
                        <span class="arrow-more__icon-inner">
                            <span class="arrow-more__icon-wrap">
                                <svg class="icon icon-arrow-long" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.64 23.16" width="100%" height="100%">
                                    <g>
                                        <g>
                                            <path class="bcls-1" d="M321.94 2.12l7.96 7.96H0v3h329.9l-7.96 7.96 2.12 2.12 11.58-11.58L324.06 0z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </span>
                    </span>
                </span>
            </button>`,
  responsive: [
    {
      breakpoint: 599,
      settings: {
        arrows: false
      }
    }
  ]
});
