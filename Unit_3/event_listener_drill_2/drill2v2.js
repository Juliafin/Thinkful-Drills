$('form#number-chooser').submit(function(event) {

  event.preventDefault();

  var numberCollected =  $("input[name='number-choice']").val();

  fizzBuzzArr = [];

    for (var i = 0 ; i < (numberCollected + 1) ; i++) {
      fizzBuzzArr.push(i);
    }

  console.log(fizzBuzzArr);

});




// alternate way
// $('form').submit(function(event) {
//   var num1 = ($('#number-choice').val())
//   console.log(num1);
// })
