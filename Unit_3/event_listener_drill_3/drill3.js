$('div.js-lightbulb', 'js-lightbulb > img').click(function(event){
event.stopPropagation();

  var clicked = $(this);
  clicked.addClass('bulb-on');

});
