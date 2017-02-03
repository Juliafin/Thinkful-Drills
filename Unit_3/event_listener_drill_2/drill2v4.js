// TODO:
//  - listen for form submit, cancel action
//  - get input value, convert to int
//  - loop from 0 to number (inclusive)
//  - if statements
//  - update dom with fizz, buzz, or fizzbuzz

$('form#number-chooser').submit(function(event) {
  var numberCollected, updateEl = $('div.js-results');

  event.preventDefault();

  numberCollected = $("input[name='number-choice']").val();
  numberCollected = parseInt(numberCollected);

  if ($('.fizz-buzz-item').length > 0 ) {
  $('.fizz-buzz-item').remove();
}



  for (var i = 0, len = numberCollected; i < len; i++) {
    // order matters
    if (numberCollected % 15 === 0 ) {
      updateEl.append("<div><span></span></div>");
      $('.js-results div').addClass('fizz-buzz-item').addClass('fizzbuzz');
      $('.js-results div > span').text("fizzbuzz");
    }

    //   push html to dom -> updateEl.append(html_string);
    else if (numberCollected % 5 === 0) {
      updateEl.append("<div><span></span></div>");
      $('.js-results div').addClass('fizz-buzz-item buzz')
      $('.js-results div > span').text("buzz");
    }
    //   push html to dom

    else if (numberCollected % 3 === 0) {
      updateEl.append("<div><span></span></div>");
      $('.js-results div').addClass('fizz-buzz-item fizz')
      $('.js-results div > span').text("fizz");
    }
    else {}
  }

});
