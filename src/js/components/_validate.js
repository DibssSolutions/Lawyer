import validate from '../lib/jquery.form-validator.js';
// $.validate({ validateOnBlur: false });

$('form').each((index, el) => {
  $.validate({
    form: $(el)
  });
});

// import { DOC } from '../constants';
// DOC.ready(() => {
//   $("input[type = 'checkbox']").attr('checked', true);
// });
