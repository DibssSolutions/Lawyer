import {OPEN, ACTIVE, BODY, DOC, WIN} from './../constants';

const burger = $('.js-burger');
const menu = $('.js-burger-menu');
const header = $('.js-header');
burger.on('click', el => {
  burger.toggleClass(ACTIVE);
  menu.toggleClass(OPEN);
  header.toggleClass(OPEN);
});


WIN.on('scroll', function() { 
  let top = DOC.scrollTop();
  let winHeught = WIN.height();
  
  (top >= 1)
    ? header.addClass(ACTIVE)
    : header.removeClass(ACTIVE);
  (top > (winHeught - 100) )
    ? header.addClass('white')
    : header.removeClass('white');
});

BODY.on('click', e => {
  if (!$(e.target).closest(header).length && burger.hasClass(ACTIVE) && !$(e.target).closest(menu).length) {
    burger.removeClass(ACTIVE);
    menu.removeClass(OPEN);
  }
});
