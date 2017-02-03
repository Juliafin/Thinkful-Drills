// this function does two things.
// First it creates a variable
// called `clickCount`. This variable
// is meant to keep track of
// the number of times the user
// has clicked the "click me"
// button. Initially we set its value
// to zero.
var clickCount = 0;
function handleClicks()


  // this line sets the inner text
  // of the `.js-click-counter`
  // element the current value
  // of `clickCount` (which is 0)
  $('.js-click-counter').text(clickCount);

  // this line says when the
  // `.js-clicker` element is
  // clicked, run the instructions
  // inside the anonymous function
  // (that is, the instructions
  // between the {...} brackets).
  $('.js-clicker').click(function(event) {

    // any time the user clicks,
    // we add 1 to the value of
    // `clickCount ...
    clickCount += 1;

    // ...and display the updated
    // click count in the
    // `.js-click-count` element.
    $('.js-click-counter').text(clickCount);

    if (clickCount === 20) {
    $('.too-many-clicks').text("Wow you have a lot of time on your hands!");
    }
  });
}

// this code just says that when
// the browser is done loading the
// page, it should run the
// `handleClicks` function
// we've defined above.
$(handleClicks);



function resetClicks() {

  // resets clicks variable

//   var clickCount = 0;

  // sets the reset button to reset the clicks

  $('.js-clicker2').click(function(event){

    var clickCount = 0;

      $('.js-click-counter').text(clickCount);
      $('.too-many-clicks').addClass("hidden");
  });
}

 $(resetClicks);
