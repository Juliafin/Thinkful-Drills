// TODO:
//  - listen for form submit, cancel action
//  - get input value, convert to int
//  - loop from 0 to number (inclusive)
//  - if statements
//  - update dom with fizz, buzz, or fizzbuzz

// collects the input from the form, parses to int and returns a number, then invokes functions to turn the number into the fizzbuzz array, and inject it into the DOM
function numberCollector() {

  $('form#number-chooser').submit(function(event) {
    var numberCollected, updateEl = $('div.js-results');
    event.preventDefault();
    numberCollected = $("input[name='number-choice']").val();
    numberCollected = parseInt(numberCollected);
    boxRemover();
    var fizzArray = fizzBuzzArr(numberCollected);
    htmlCreator(fizzArray);
  })
}

// removes extra elements
function boxRemover() {
  if ($('.fizz-buzz-item').length > 0) {
    $('.fizz-buzz-item').remove();
  };
}

// creates the fizzBuzz array calling fizzBuzzArrCheck to check numbers
function fizzBuzzArr(number) {
  var fizzBuzzArr = [];
  for (i = 0, len = number + 1; i < len; i++) {
    fizzBuzzArr.push(fizzBuzzArrCheck(i));
    // console.log(fizzBuzzArr);
  }
  return fizzBuzzArr;
}

// checks each number for whether it's divisible by 15 (3 and 5), 5, 3, or otherwise returns the number input
function fizzBuzzArrCheck(number) {
  if (number % 15 === 0) {
    return "fizzBuzz";
  } else if (number % 5 === 0) {
    return "buzz";
  } else if (number % 3 === 0) {
    return "fizz";
  } else {
    return number;
  }
}

// creates and injects html into the DOM
function htmlCreator(arr) {
  arr.forEach(function(element) {
    var htmlEle = $("<div class= 'fizz-buzz-item'><span>" + element + "</span></div>");
    if (element === "fizz" || element === "buzz" || element === "fizzbuzz"){
      htmlEle.addClass(element);
    }
    $('.js-results').append(htmlEle);

  });
}

// final function call

numberCollector();
