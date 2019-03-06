import svg4everybody from 'svg4everybody';
import './common';
import { BODY, NO_TOUCH } from './constants';
import { isTouch, SCROLL_TO } from './utils';
svg4everybody();
const scrollToBtn = $('.js-scroll-to');
// SCROLL_TO
scrollToBtn.on('click', function() {
  const position = $($(this).attr('href')).offset().top;
  SCROLL_TO(position);
});
if (!isTouch()) BODY.addClass(NO_TOUCH);
