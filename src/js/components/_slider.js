import slick from 'slick-carousel';
import { buildIcon } from '../utils';

const icon = buildIcon('arrow-long');

$('.js-cases-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  adaptiveHeight: true,
  prevArrow: `<button class="arrow-prev js-slider-arrow-prev" type="button">
                <span class="arrow-more">
                    <span class="arrow-more__icon">
                        <span class="arrow-more__icon-inner">
                            <span class="arrow-more__icon-wrap">
                                ${icon}
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
                                ${icon}
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
