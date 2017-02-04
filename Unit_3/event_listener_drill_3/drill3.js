$('div.js-lightbulb js-lightbulb > img').click(function(event){
event.stopPropagation();

  var clicked = $(this);
  clicked.addClass('bulb-on');

});


$('div.js-lightbulb', 'js-lightbulb > img').click(function(event){
event.stopPropagation();

  var clicked = $(event.currentTarget);
  clicked.addClass('bulb-on');
  console.log("The current target being clicked is" + clicked.text());
})
