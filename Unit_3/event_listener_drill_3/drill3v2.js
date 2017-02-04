$('div.js-lightbulb, js-lightbulb > img').click(function(event){
   event.stopPropagation();
   $(this).addClass('bulb-on');
   $('div.js-lightbulb').not($(this)).removeClass('bulb-on');
})
