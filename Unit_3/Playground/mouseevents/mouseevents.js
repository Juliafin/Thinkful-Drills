$(function() {
  $('button').mousedown(function(event) {
    $('.output').text('Button clicked: ' + event.which);
  });

  $('input').keydown(function(event) {
    $('.output').text('Key pressed: ' + event.key);
  });

  $('.clickme').mousedown(function(event) {
    $('.output').text('You clicked the box with the '  + event.which + " button.");
  });
});

// doing event.which on keydown results in the number of the key pressed
